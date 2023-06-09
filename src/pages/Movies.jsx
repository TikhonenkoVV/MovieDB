import { Container } from 'components/App.styled';
import { Loader } from 'components/Loader/Loader';
import { MovieList } from 'components/MovieList/MovieList';
import { Page404 } from 'components/Page404/Page404';
import { Pagination } from 'components/Pagination/Pagination';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { gethMoviesByName } from 'services/api';

const Movies = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [first, setFirst] = useState(true);
    const [total, setTotal] = useState(0);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    let page = 1;

    useEffect(() => {
        const query = searchParams.get('query');
        const page = searchParams.get('page');
        if (!query) return;
        setIsLoading(true);
        gethMoviesByName(query, page)
            .then(data => {
                setMovies(data.results);
                setTotal(data.total_pages);
            })
            .catch(err => {
                setError(err.message);
                toast(err.message);
            })
            .finally(() => {
                setIsLoading(false);
                setFirst(false);
            });
    }, [searchParams]);

    const onSubmit = query => {
        setSearchParams({ query, page });
    };

    return (
        <section>
            <Container>
                {isLoading && <Loader />}
                <SearchForm onSubmit={onSubmit} />
                {total > 0 && <Pagination totalPages={total} />}
                {movies && <MovieList movies={movies} />}
                {!first && movies.length < 1 && <Page404 />}
                {total > 0 && <Pagination totalPages={total} />}
                {error && <ToastContainer />}
            </Container>
        </section>
    );
};

export default Movies;
