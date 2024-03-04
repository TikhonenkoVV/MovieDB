import { Link, useParams } from 'react-router-dom';
import { CastElement, CastGrid, CastPhoto, CastTitle } from './Cast.styled';
import { useEffect, useState } from 'react';
import { getDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { normalizeCast } from 'services/normalize';

export const Cast = () => {
    const { mediaId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const [cast, setCast] = useState(null);

    useEffect(() => {
        if (!mediaId) return;
        const type = mediaId.split('-')[0];
        const id = mediaId.split('-')[1];
        setIsLoading(true);
        getDetails(
            type,
            id,
            type === 'movie' ? '/credits' : '/aggregate_credits'
        )
            .then(data => {
                setCast(normalizeCast(data.cast));
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [mediaId]);

    return (
        <>
            {isLoading && <Loader />}
            {cast?.length > 0 && (
                <>
                    <CastTitle>Cast</CastTitle>
                    <CastGrid>
                        {cast?.map(
                            ({ id, castId, poster, personName, role }) => (
                                <CastElement key={castId}>
                                    <Link
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            paddingBottom: '10px',
                                        }}
                                        to={`/person/${id}`}
                                    >
                                        <CastPhoto
                                            src={poster}
                                            alt={personName}
                                        />
                                        <div>
                                            <p>
                                                <b>{personName}</b>
                                            </p>
                                            <p>{role}</p>
                                        </div>
                                    </Link>
                                </CastElement>
                            )
                        )}
                    </CastGrid>
                </>
            )}
            {cast?.length < 1 && (
                <CastTitle>Sorry, no cast information available.</CastTitle>
            )}
            {error && <ToastContainer />}
        </>
    );
};