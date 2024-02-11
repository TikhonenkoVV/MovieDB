import { Loader } from 'components/Loader/Loader';
import { ReviewTitle } from './Review.styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getDetails } from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';

export const Review = () => {
    const { mediaTypes, mediaId } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if (!mediaId) return;
        setIsLoading(true);
        getDetails(mediaTypes, mediaId, '/reviews')
            .then(data => {
                setReviews([...data.results]);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [mediaTypes, mediaId]);

    return (
        <>
            {isLoading && <Loader />}
            {reviews?.length > 0 && (
                <>
                    <ReviewTitle>Reviews</ReviewTitle>
                    <ul>
                        {reviews?.map(review => (
                            <ReviewItem
                                key={review.id}
                                author={review.author}
                                content={review.content}
                            />
                        ))}
                    </ul>
                </>
            )}
            {reviews?.length < 1 && (
                <ReviewTitle>Sorry, this movie has no reviews.</ReviewTitle>
            )}
            {error && <ToastContainer />}
        </>
    );
};