import { CONSENT_TEXTS } from 'constants/consentTexts';
import { LANGUAGE } from 'constants/language';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectConsentFormValue } from 'selectors/consentSelector';

export default function useSpeakConsentText() {
  const { language = LANGUAGE.ENGLISH } = useSelector(selectConsentFormValue);

  const synth = window.speechSynthesis;
  const voices = synth.getVoices();

  const text = CONSENT_TEXTS[language].speakText;
  const voice = voices.find((e) => e.lang === CONSENT_TEXTS[language].code) || null;

  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.voice = voice;

  synth.speak(utterThis);

  useEffect(() => {
    return () => {
      synth.cancel();
    };
  }, []);

  return;
}
