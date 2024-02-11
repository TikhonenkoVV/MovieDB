import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import logoM from '../../images/logo-m.svg';
import iconSun from '../../images/icon-sun.svg';
import iconMoon from '../../images/icon-moon.svg';

export const HeaderStyled = styled.header`
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: ${({ theme }) => theme.colors.accent};
    transition: background-color ${({ theme }) => theme.baseTransition};
`;

export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    height: 70px;
`;

export const Logotype = styled(Link)`
    display: flex;
    width: 60px;
    height: 70px;
    aspect-ratio: 2 / 1;
    background-image: url(${logoM});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        background-image: url(${logo});
        width: 90px;
        aspect-ratio: 1.2857 / 1;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: auto;
`;

export const NavLinkStyled = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 100%;
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};
    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.white};
    }

    &.active {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.hover};
    }
    @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
        width: 100px;
        font-size: ${({ theme }) => theme.fontSizes.medium};
    }
`;

export const Toggler = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 40px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.hover};
    background-image: url('${iconSun}'), url('${iconMoon}');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position: top 10px left 10px, top 10px right 10px;
    transition: background-color ${({ theme }) => theme.baseTransition};
    &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 5px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.light};
        transition: background-color ${({ theme }) => theme.baseTransition},
            transform ${({ theme }) => theme.baseTransition};
    }
    &:hover::before {
        background-color: ${({ theme }) => theme.colors.white};
    }
    &.light::before {
        transform: translateX(40px);
    }
`;