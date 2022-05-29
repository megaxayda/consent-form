import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGE } from 'constants/language';

type ConsentForm = {
  name?: string;
  language?: LANGUAGE;
};

export interface ConsentState {
  consentForm: ConsentForm;
  doneSpeak: boolean;
  readyListen: boolean;
  doneListen: boolean;
  audioUrl?: string;
  audioBase64?: string;
  consentResponse?: boolean;
}

const initialState: ConsentState = {
  consentForm: {
    name: undefined,
    language: undefined,
  },
  doneSpeak: false,
  readyListen: false,
  doneListen: false,
  audioUrl: undefined,
  audioBase64: undefined,
  consentResponse: undefined,
};

export const consentSlice = createSlice({
  name: 'consent',
  initialState,
  reducers: {
    setConsentForm: (state, action: PayloadAction<ConsentForm>) => {
      state.consentForm = action.payload;
    },
    setDoneSpeak: (state, action: PayloadAction<boolean>) => {
      state.doneSpeak = action.payload;
    },
    setReadyListen: (state, action: PayloadAction<boolean>) => {
      state.readyListen = action.payload;
    },
    setDoneListen: (state, action: PayloadAction<boolean>) => {
      state.doneListen = action.payload;
    },
    setAudioUrl: (state, action: PayloadAction<string | undefined>) => {
      state.audioUrl = action.payload;
    },
    setAudioBase64: (state, action: PayloadAction<string | undefined>) => {
      state.audioBase64 = action.payload;
    },
    setConsentResponse: (state, action: PayloadAction<boolean | undefined>) => {
      state.consentResponse = action.payload;
    },
    resetConsentForm: () => initialState,
  },
});

export const {
  setConsentForm,
  setDoneSpeak,
  setReadyListen,
  setDoneListen,
  setAudioUrl,
  setAudioBase64,
  setConsentResponse,
  resetConsentForm,
} = consentSlice.actions;

export default consentSlice.reducer;
