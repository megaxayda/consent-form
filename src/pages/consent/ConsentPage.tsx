import styled from '@emotion/styled';
import { CONSENT_TEXTS } from 'constants/consentTexts';
import { LANGUAGE } from 'constants/language';
import useSpeakConsentText from 'hooks/useSpeakConsentText';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectConsentFormValue } from 'selectors/consentSelector';

export default function RegisterPage() {
  const { language = LANGUAGE.ENGLISH } = useSelector(selectConsentFormValue);

  useSpeakConsentText();

  const firstPara = CONSENT_TEXTS[language].firstPara;
  const secondPara = CONSENT_TEXTS[language].secondPara;

  return (
    <Wrapper>
      <StyledP>{firstPara}</StyledP>
      <p>{secondPara}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 522px;
  margin: auto;
`;

const StyledP = styled.p`
  margin-top: 60px;
`;
