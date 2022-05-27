import styled from '@emotion/styled';
import { LANGUAGE } from 'constants/language';
import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { setConsentForm } from 'slices/consentSlice';

const languageOptions = [
  {
    name: 'English',
    value: LANGUAGE.ENGLISH,
  },
  {
    name: 'French',
    value: LANGUAGE.FRENCH,
  },
];

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [language, setLanguage] = useState('');

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      setConsentForm({
        name,
        language: language as LANGUAGE,
      }),
    );
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel htmlFor="name">Name</StyledLabel>
      <StyledInput
        required
        type="text"
        value={name}
        onChange={handleChangeName}
        placeholder="Enter your name"
      />
      <StyledLabel htmlFor="language">Language</StyledLabel>
      <StyledSelect
        required
        name="language"
        value={language}
        onChange={handleChangeLanguage}
      >
        <option value="">Select language</option>
        {languageOptions.map(({ name, value }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </StyledSelect>
      <NextButton type="submit">
        Next <HiArrowRight />
      </NextButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`;

const StyledLabel = styled.label`
  margin: 40px 10px 10px 10px;
`;

const StyledInput = styled.input`
  height: 35px;
  padding-left: 10px;
`;

const StyledSelect = styled.select`
  height: 40px;
  padding-left: 10px;
`;

const NextButton = styled.button`
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
