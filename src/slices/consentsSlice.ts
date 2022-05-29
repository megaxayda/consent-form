import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGE } from 'constants/language';

export type ConsentInfo = {
  name: string;
  language: LANGUAGE;
  consent?: boolean;
  audioBase64: string;
};

type Consents = {
  [name: string]: ConsentInfo;
};

export interface ConsentState {
  consents: Consents;
}

const initialState: ConsentState = {
  consents: {},
};

export const consentsSlice = createSlice({
  name: 'consent',
  initialState,
  reducers: {
    saveConsentInfo: (state, action: PayloadAction<ConsentInfo>) => {
      state.consents[action.payload.name] = action.payload;
    },
  },
});

export const { saveConsentInfo } = consentsSlice.actions;

export default consentsSlice.reducer;
