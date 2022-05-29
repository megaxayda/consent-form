import { base64ToBlob } from 'base64-blob';
import { CONSENT_TEXTS } from 'constants/consentTexts';
import React, { useEffect, useState } from 'react';
import { HiCheck } from 'react-icons/hi';
import { IoMdPlay } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { MdPause } from 'react-icons/md';
import { ConsentInfo } from 'slices/consentsSlice';

import { GreyButton, Icon, LangText, NameText, RightCell } from './AllConsentsPage.style';

type ConsentRowProps = {
  consentInfo: ConsentInfo;
};

export default function ConsentRow({ consentInfo }: ConsentRowProps) {
  const { name, language, consent, audioBase64 } = consentInfo;
  const [audioEle, setAudioEle] = useState<HTMLAudioElement>();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    base64ToBlob(audioBase64).then((blob) => {
      const audioUrl = URL.createObjectURL(blob);
      const audioEle = new Audio(audioUrl);
      setAudioEle(audioEle);
    });
  }, []);

  if (!audioEle) {
    return <></>;
  }

  const handlePlayFalse = () => {
    setPlay(false);
  };
  audioEle.addEventListener('play', () => {
    setPlay(true);
  });
  audioEle.addEventListener('ended', handlePlayFalse);
  audioEle.addEventListener('pause', handlePlayFalse);

  const handlePlay = () => {
    audioEle.play();
  };

  const handlePause = () => {
    audioEle.pause();
  };

  return (
    <tr>
      <td>
        <NameText>{name}</NameText>
        <LangText>{`Language: ${CONSENT_TEXTS[language].name}`}</LangText>
      </td>
      <RightCell>
        <Icon>{consent === true ? <HiCheck /> : <IoClose />}</Icon>
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
      </RightCell>
    </tr>
  );
}
