import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import logoM from '../../../../images/logo-m.svg';

export const Logotype = styled(Link)`
    flex-shrink: 0;
    display: flex;
    width: 80px;
    aspect-ratio: 2 / 1;
    background-image: url(${logoM});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    &.footer-logo {
        width: 90px;
        aspect-ratio: 2.3346 / 1;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 24px;
        background-image: url(${logoM});
    }
`;
