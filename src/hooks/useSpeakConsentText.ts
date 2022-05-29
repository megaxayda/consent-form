import { CONSENT_TEXTS } from 'constants/consentTexts';
import { LANGUAGE } from 'constants/language';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectConsentFormValue } from 'selectors/consentSelector';
import { setDoneSpeak, setReadyListen } from 'slices/consentSlice';

export default function useSpeakConsentText() {
  const dispatch = useDispatch();

  const { language = LANGUAGE.ENGLISH } = useSelector(selectConsentFormValue);

  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  const text = CONSENT_TEXTS[language].speakText;
  const voice = voices.find((e) => e.lang === CONSENT_TEXTS[language].code) || null;

  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = voice;

  useEffect(() => {
    synth.speak(utterThis);

    const handleEndSpeak = function () {
      dispatch(setDoneSpeak(true));
    };

    utterThis.addEventListener('end', handleEndSpeak);
    return () => {
      utterThis.removeEventListener('end', handleEndSpeak);
      synth.cancel();
    };
  }, []);
}
