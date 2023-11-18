import { Svg } from 'components/Icon/Icon';
import sprite from '../../images/sprite.svg';
import {
    HeaderStyled,
    Logotype,
    Nav,
    NavLinkStyled,
    ThemeBtn,
    Wrapper,
} from './Header.styled';
import { Container } from 'components/App.styled';

export const Header = () => {
    return (
        <HeaderStyled>
            <Container>
                <Wrapper>
                    <Logotype aria-label="Home" to={'/'} />
                    <Nav>
                        <NavLinkStyled to={'/'}>Home</NavLinkStyled>
                        <NavLinkStyled to={'movies'}>Movies</NavLinkStyled>
                    </Nav>
                    <ThemeBtn type="button" aria-label="Theme">
                        <Svg use={`${sprite}#icon-sun`} />
                    </ThemeBtn>
                </Wrapper>
            </Container>
        </HeaderStyled>
    );
};
