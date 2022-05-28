import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

export const StyledLabel = styled.label`
  margin: 40px 10px 10px 10px;
`;

export const StyledInput = styled.input`
  height: 35px;
  padding-left: 10px;
`;

export const StyledSelect = styled.select`
  height: 40px;
  padding-left: 10px;
`;

export const NextButton = styled.button`
  height: 40px;
  width: 110px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: #d8d8d8;
  color: #666666;
  gap: 10px;
  cursor: pointer;
  margin-left: auto;
  margin-top: 40px;
  font-weight: 600;
  &:active {
    background-color: #d8d8d8a8;
  }
`;
