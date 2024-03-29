import styled from '@emotion/styled';

export const PaginationBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    &.top {
        padding-bottom: ${({ theme }) => theme.spacing.retreatS};
        @media ${({ theme }) => theme.breakpoints.s} {
            padding-bottom: ${({ theme }) => theme.spacing.retreatM};
        }
        @media ${({ theme }) => theme.breakpoints.xl} {
            padding-bottom: ${({ theme }) => theme.spacing.retreatL};
        }
    }
    &.bottom {
        padding-top: ${({ theme }) => theme.spacing.retreatS};
        @media ${({ theme }) => theme.breakpoints.s} {
            padding-top: ${({ theme }) => theme.spacing.retreatM};
        }
        @media ${({ theme }) => theme.breakpoints.xl} {
            padding-top: ${({ theme }) => theme.spacing.retreatL};
        }
    }
`;

export const DotButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.light};
    transition: background-color ${({ theme }) => theme.baseTransition},
        color ${({ theme }) => theme.baseTransition};
    background-color: ${({ theme }) => theme.colors.hover};
    & svg {
        fill: currentColor;
    }
    &:hover,
    &[aria-current='true'] {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.accent};
    }
    @media ${({ theme }) => theme.breakpoints.xs} {
        width: 40px;
        height: 40px;
    }
    &:disabled {
        cursor: not-allowed;
        color: #636363;
        background-color: #4a4a4a;
    }
`;

export const DotStart = styled(DotButton)``;
export const DotEnd = styled(DotButton)`
    & svg {
        transform: rotate(180deg);
    }
`;
export const DotPrev = styled(DotButton)``;
export const DotNext = styled(DotButton)`
    & svg {
        transform: rotate(180deg);
    }
`;
export const Dot = styled(DotButton)``;
