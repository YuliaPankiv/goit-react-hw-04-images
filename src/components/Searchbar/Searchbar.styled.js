import styled from '@emotion/styled';
export const SearchFormWrap = styled.header`
  top: 0;
  left: 0;
  display: flex;
  position: sticky;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  z-index: 1100;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const SearchForm = styled.form`
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 3px;
  background-color: #fff;
  color: red;
  
`;
export const SearchFormInput = styled.input`
  width: 100%;
  display: inline-block;
  padding-right: 4px;
  padding-left: 4px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
