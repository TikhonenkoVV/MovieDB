import PropTypes from 'prop-types';
import { Icon } from './Icon.styled';

export const Svg = ({ use }) => {
    return (
        <Icon width={20} height={20}>
            <use href={use} />
        </Icon>
    );
};

Svg.propTypes = {
    use: PropTypes.string.isRequired,
};
