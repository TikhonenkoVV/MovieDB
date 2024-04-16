import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsTitle, LinksWrapper, StyledLink } from './MediaDetails.styled';
import { getDetails, getTrailer } from 'common/services/api';
import { normalizeMovieData } from 'common/services/normalize/normalizeMovieData';
import { findTrailer } from 'common/services/findTrailer';
import { normalizeCast } from 'common/services/normalize/normalizeCast';
import { normalizeCrew } from 'common/services/normalize/normalizeCrew';
import { MediaInfo } from './MediaInfo/MediaInfo';
import { CastList } from './CastList/CastList';
import { Loader } from 'ui/shared/components/Loader';
import { Container } from 'ui/shared/layouts/Container/Container';
import { selectDictionary, selectLang } from 'common/store/selector';

const ModalContext = createContext(false);

export const useModal = () => useContext(ModalContext);

const MediaDetails = () => {
    const language = useSelector(selectLang);
    const { topCast, fullCast, review } = useSelector(selectDictionary);

    const [isTrailer, setTrailer] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [movie, setMovie] = useState(null);
    const [first, setFirst] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { mediaId } = useParams();

    const [cast, setCast] = useState(null);
    const [crew, setCrew] = useState(null);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if (!first) return;
        const type = mediaId.split('-')[0];
        const id = mediaId.split('-')[1];
        setFirst(false);
        setIsLoading(true);
        getDetails(type, id, language, '')
            .then(data => {
                setMovie(normalizeMovieData(data));
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                getTrailer(type, id)
                    .then(data => {
                        setTrailer(findTrailer(data.results));
                    })
                    .catch(err => {
                        setError(err.message);
                    })
                    .finally(() => {
                        getDetails(
                            type,
                            id,
                            language,
                            type === 'movie' ? '/credits' : '/aggregate_credits'
                        )
                            .then(data => {
                                setCast(normalizeCast(data.cast));
                                setCrew(normalizeCrew(data.crew));
                            })
                            .catch(err => {
                                setError(err.message);
                            })
                            .finally(() => {
                                getDetails(type, id, language, '/reviews')
                                    .then(data => {
                                        setReviews(data.results);
                                    })
                                    .catch(err => {
                                        setError(err.message);
                                    })
                                    .finally(() => {
                                        setIsLoading(false);
                                    });
                            });
                    });
            });
    }, [first, mediaId, language]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) disableBodyScroll(document.body);
        else enableBodyScroll(document.body);
    };

    return (
        <ModalContext.Provider value={{ isModalOpen, isTrailer }}>
            {isLoading && <Loader />}
            {movie && (
                <MediaInfo
                    movie={movie}
                    directing={crew?.director}
                    onClose={toggleModal}
                    trailer={isTrailer}
                />
            )}
            {(cast?.length > 0 || crew || reviews?.length > 0) && (
                <section>
                    <Container>
                        {cast?.length > 0 && (
                            <>
                                <DetailsTitle>{topCast}</DetailsTitle>
                                <CastList cast={cast} />
                            </>
                        )}
                        <LinksWrapper>
                            {(cast?.length > 0 || crew) && (
                                <StyledLink to={'details/cast-and-crew'}>
                                    {fullCast}
                                </StyledLink>
                            )}
                            {reviews?.length > 0 && (
                                <StyledLink to={'details/reviews'}>
                                    {review}
                                </StyledLink>
                            )}
                        </LinksWrapper>
                    </Container>
                </section>
            )}
            {error && <p>{error}</p>}
        </ModalContext.Provider>
    );
};

export default MediaDetails;
