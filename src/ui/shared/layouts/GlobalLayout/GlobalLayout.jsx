import { Global, ThemeProvider } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import {
    Suspense,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'ui/assets/styles';
import sprite from '../../../assets/images/sprite.svg';
import {
    selectDevice,
    selectLang,
    selectTheme,
    selectVerifiedUser,
} from 'common/store/selector';
import { Scrollbar } from 'ui/shared/components/ScrollBar/ScrollBar';
import { Header } from 'ui/shared/blocks/Header/Header';
import { ButtonUp, MainStyled } from './GlobalLayout.styled';
import { Footer } from 'ui/shared/blocks/Footer/Footer';
import { Svg } from 'ui/shared/components/Svg/Svg';
import { hendleRefreshUser } from 'common/store/auth/authOperations';
import { setDictionary, setLang, setTheme } from 'common/store/auth/authSlice';
import { dictionaryEn, dictionaryUk } from 'ui/assets/languages/dictionary';

const LangContext = createContext(false);

export const useLang = () => useContext(LangContext);

export const GlobalLayout = () => {
    const device = useSelector(selectDevice);
    const verifiedUser = useSelector(selectVerifiedUser);
    const currentColor = useSelector(selectTheme);
    const lang = useSelector(selectLang);
    const dispatch = useDispatch();

    const [toTop, setToTop] = useState(false);
    const [retreatY, setRetreatY] = useState(false);
    const [currentTheme, setCurrentTheme] = useState({
        ...theme,
        ...darkTheme,
    });

    const onChangeTheme = colors => {
        dispatch(setTheme(colors));
    };

    const scrollToTop = () => {
        setToTop(true);
    };

    const getRetreatY = value => {
        setRetreatY(value);
    };

    useEffect(() => {
        dispatch(hendleRefreshUser());
    }, [dispatch]);

    useEffect(() => {
        if (toTop) setToTop(false);
    }, [toTop]);

    useEffect(() => {
        if (!verifiedUser) {
            if (!currentColor) {
                dispatch(setTheme('dark'));
            }
            if (currentColor === 'dark') {
                setCurrentTheme({
                    ...theme,
                    ...darkTheme,
                });
            }
            if (currentColor === 'light') {
                setCurrentTheme({
                    ...theme,
                    ...lightTheme,
                });
            }
            if (!lang) {
                dispatch(setLang('en-US'));
                dispatch(setDictionary(dictionaryEn));
            }
            if (lang === 'en-US') dispatch(setDictionary(dictionaryEn));
            if (lang === 'uk-UA') dispatch(setDictionary(dictionaryUk));
        }
    }, [verifiedUser, dispatch, currentColor, lang]);

    return (
        <ThemeProvider theme={currentTheme}>
            <LangContext.Provider value={lang}>
                <Global styles={GlobalStyles} />
                <Scrollbar
                    orientation="y"
                    device={device}
                    toTop={toTop}
                    getRetreatY={getRetreatY}
                >
                    <Header onChangeTheme={onChangeTheme} />
                    <MainStyled>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </MainStyled>
                    <Footer />
                    <ButtonUp onClick={scrollToTop} isHidden={retreatY < 400}>
                        <Svg w={50} h={50} use={`${sprite}#icon-arrow`} />
                    </ButtonUp>
                </Scrollbar>
            </LangContext.Provider>
        </ThemeProvider>
    );
};
