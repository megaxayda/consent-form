import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGE } from 'constants/language';

type ConsentForm = {
  name: string;
  language: LANGUAGE;
};

export interface ConsentState {
  consentForm: ConsentForm | undefined;
}

const initialState: ConsentState = {
  consentForm: undefined,
};

export const consentSlice = createSlice({
  name: 'consent',
  initialState,
  reducers: {
    setConsentForm: (state, action: PayloadAction<ConsentForm | undefined>) => {
      state.consentForm = action.payload;
    },
  },
});

export const { setConsentForm } = consentSlice.actions;

export default consentSlice.reducer;
