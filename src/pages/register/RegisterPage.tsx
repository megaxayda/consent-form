import { LANGUAGE } from 'constants/language';
import { ROUTE } from 'constants/routes';
import React, { useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectConsentFormValue } from 'selectors/consentSelector';
import { setConsentForm } from 'slices/consentSlice';

import {
  NextButton,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledSelect,
} from './RegisterPage.style';

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
  const navigate = useNavigate();

  const consentFormValue = useSelector(selectConsentFormValue);
  const [name, setName] = useState(consentFormValue?.name || '');
  const [language, setLanguage] = useState<string>(consentFormValue?.language || '');

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
        name: name,
        language: language as LANGUAGE,
      }),
    );

    navigate(ROUTE.CONSENT);
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
