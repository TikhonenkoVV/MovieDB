import { useState } from 'react';
import { BtnSearch, Input, SearchFormStyled } from './SearchForm.styled';
import { FiSearch } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SearchFormOld = ({ onSubmit, style }) => {
    const [query, setQuery] = useState('');

    const hendleChange = e => {
        setQuery(e.target.value);
    };

    const hendleSubmit = e => {
        e.preventDefault();
        if (!query) {
            toast('Please enter your query');
            return;
        }
        onSubmit(query);
        setQuery('');
        e.target.reset();
    };

    return (
        <SearchFormStyled style={style} onSubmit={hendleSubmit}>
            <Input
                placeholder="Please enter your query"
                onInput={hendleChange}
            />
            <BtnSearch>
                <FiSearch size="25px" stroke="#B5B5B5" />
            </BtnSearch>
            <ToastContainer />
        </SearchFormStyled>
    );
};
