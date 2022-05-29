import { CONSENT_TEXTS } from 'constants/consentTexts';
import { LANGUAGE } from 'constants/language';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectConsentFormValue, selectDoneSpeak } from 'selectors/consentSelector';
import {
  setAudioBase64,
  setAudioUrl,
  setConsentResponse,
  setDoneListen,
  setReadyListen,
} from 'slices/consentSlice';
import initRecorder from 'utils/initRecorder';

// eslint-disable-next-line no-var
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
// eslint-disable-next-line no-var
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
// eslint-disable-next-line no-var
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

export default function useListenConsentResponse() {
  const dispatch = useDispatch();
  const { language = LANGUAGE.ENGLISH } = useSelector(selectConsentFormValue);
  const { code, yes, no } = CONSENT_TEXTS[language];

  const doneSpeak = useSelector(selectDoneSpeak);

  const grammar = `#JSGF V1.0; grammar phrase; public <phrase> = ${yes.toLowerCase()} ${no.toLowerCase()};`;
  const recognition = new SpeechRecognition();
  const speechRecognitionList = new SpeechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  recognition.lang = code;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  const startListen = useCallback(() => {
    if (!doneSpeak) {
      return;
    }
    initRecorder().then((recorder) => {
      recognition.start();
      recorder.start();
      dispatch(setReadyListen(true));
      dispatch(setDoneListen(false));

      recognition.onresult = function (event: any) {
        const speechResult = event.results[0][0].transcript.toLowerCase();

        if (speechResult === yes.toLowerCase()) {
          dispatch(setConsentResponse(true));
        } else if (speechResult === no.toLowerCase()) {
          dispatch(setConsentResponse(false));
        } else {
          dispatch(setConsentResponse(undefined));
        }
      };

      recognition.onend = function () {
        dispatch(setReadyListen(false));
        dispatch(setDoneListen(true));

        recorder.stop().then((e) => {
          dispatch(setAudioUrl(e.audioUrl));
          dispatch(setAudioBase64(e.base64Audio));
        });
      };
    });
  }, [doneSpeak]);

  const restartListen = () => {
    startListen();
  };

  useEffect(() => {
    startListen();
    return () => {
      recognition.stop();
    };
  }, [doneSpeak]);

  return { restartListen };
}
