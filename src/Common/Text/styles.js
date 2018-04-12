import { css } from 'styled-components';

const styles = (props) => css`
  ${props.large && css`
    font-size: 5rem;
  `}

  ${props.small && css`
    font-size: 2rem;
  `}

  ${props.tiny && css`
    font-size: 1rem;
  `}

  ${props.primary && css`
    color: crimson;
  `}

  ${props.white && css`
    color: white;
  `}

  ${props.secondary && css`
    color: steelblue;
  `}

  ${props.mono && css`
    font-family: 'Source Code Pro', monospace;
  `}

  ${props.underline && css`
    text-decoration: underline;
  `}

  ${props.strong && css`
    font-weight: 500;
  `}

  ${props.heavy && css`
    font-weight: 600;
  `}
`;

export default styles;
