import { css } from '@emotion/react';
import { theme } from './theme';

export const GlobalStyles = css`
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        min-height: 100vh;

        font-style: normal;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        overflow: auto;
        height: 100vh;
    }

    section {
        padding-bottom: ${theme.spacing.retreatS};
        @media ${theme.breakpoints.s} {
            padding-bottom: ${theme.spacing.retreatM};
        }
        @media ${theme.breakpoints.xl} {
            padding-bottom: ${theme.spacing.retreatL};
        }
        &.padding-top {
            padding-top: ${theme.spacing.retreatS};
            @media ${theme.breakpoints.s} {
                padding-top: ${theme.spacing.retreatM};
            }
            @media ${theme.breakpoints.xl} {
                padding-top: ${theme.spacing.retreatL};
            }
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        padding: 0;
    }

    ul,
    ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
    }

    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
`;
