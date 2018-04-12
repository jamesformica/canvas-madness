import styled from 'styled-components';

import styles from './styles';

const Text = styled.p`
  ${props => styles(props)}
`;

export const Span = styled.span`
  ${props => styles(props)}
`;

export default Text;
