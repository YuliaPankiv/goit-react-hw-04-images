import styled from '@emotion/styled';

export const IconButtonWrap = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 1;
  }
`;
