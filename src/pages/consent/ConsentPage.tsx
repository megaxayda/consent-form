import { CONSENT_TEXTS } from 'constants/consentTexts';
import { LANGUAGE } from 'constants/language';
import { ROUTE } from 'constants/routes';
import useListenConsentResponse from 'hooks/useListenConsentResponse';
import useSpeakConsentText from 'hooks/useSpeakConsentText';
import React, { useState } from 'react';
import { HiArrowRight, HiMicrophone } from 'react-icons/hi';
import { IoMdPlay } from 'react-icons/io';
import { MdPause, MdRefresh } from 'react-icons/md';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectAudioBase64,
  selectAudioUrl,
  selectConsentFormValue,
  selectConsentResponse,
  selectDoneListen,
  selectReadyListen,
} from 'selectors/consentSelector';
import { resetConsentForm } from 'slices/consentSlice';
import { saveConsentInfo } from 'slices/consentsSlice';

import {
  ButtonWrapper,
  GreyButton,
  GreySquareButton,
  Icon,
  ListenWrapper,
  ResultWrapper,
  StyledP,
  Wrapper,
} from './ConsentPage.style';

export default function ConsentPage() {
  const dispatch = useDispatch();
  const { name, language = LANGUAGE.ENGLISH } = useSelector(selectConsentFormValue);
  const consentResponse = useSelector(selectConsentResponse);
  const audioUrl = useSelector(selectAudioUrl);
  const audioBase64 = useSelector(selectAudioBase64);
  const readyListen = useSelector(selectReadyListen);
  const doneListen = useSelector(selectDoneListen);

  const navigate = useNavigate();

  const [play, setPlay] = useState(false);

  useSpeakConsentText();
  const { restartListen } = useListenConsentResponse();

  const { firstPara, secondPara, response, yes, no, invalid } = CONSENT_TEXTS[language];

  const answer = consentResponse === true ? yes : consentResponse === false ? no : '';
  const displayResponse =
    consentResponse === undefined ? invalid : `${response} "${answer}"`;

  const audioEle = new Audio(audioUrl);
  audioEle.addEventListener('play', () => {
    setPlay(true);
  });
  audioEle.addEventListener('ended', () => {
    setPlay(false);
  });

  const handlePlay = () => {
    audioEle.play();
  };

  const handlePause = () => {
    audioEle.pause();
  };

  const handleSave = () => {
    batch(() => {
      dispatch(
        saveConsentInfo({
          name: name as string,
          language,
          consent: consentResponse,
          audioBase64: audioBase64 as string,
        }),
      );
      dispatch(resetConsentForm());
    });

    navigate(ROUTE.ROOT + ROUTE.HOME + '/' + ROUTE.SUCCESS);
  };

  return (
    <Wrapper>
      <StyledP>{firstPara}</StyledP>
      <p>{secondPara}</p>

      <div style={{ height: '40px' }}></div>

      {readyListen && (
        <ListenWrapper>
          <GreyButton>
            <HiMicrophone />
          </GreyButton>
        </ListenWrapper>
      )}

      {doneListen && (
        <>
          <ResultWrapper>
            <ListenWrapper>
              {!play && (
                <GreyButton onClick={handlePlay}>
                  <IoMdPlay />
                </GreyButton>
              )}
              {play && (
                <GreyButton onClick={handlePause}>
                  <MdPause />
                </GreyButton>
              )}
              <p>{displayResponse}</p>
            </ListenWrapper>
          </ResultWrapper>

          <ButtonWrapper>
            <GreySquareButton onClick={restartListen}>
              Retry
              <Icon>
                <MdRefresh />
              </Icon>
            </GreySquareButton>
            <GreySquareButton onClick={handleSave}>
              Save
              <Icon>
                <HiArrowRight />
              </Icon>
            </GreySquareButton>
          </ButtonWrapper>
        </>
      )}
    </Wrapper>
  );
}
