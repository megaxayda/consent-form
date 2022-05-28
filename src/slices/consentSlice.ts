import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGE } from 'constants/language';

type ConsentForm = {
  name?: string;
  language?: LANGUAGE;
};

export interface ConsentState {
  consentForm: ConsentForm;
}

const initialState: ConsentState = {
  consentForm: {
    name: undefined,
    language: undefined,
  },
};

export const consentSlice = createSlice({
  name: 'consent',
  initialState,
  reducers: {
    setConsentForm: (state, action: PayloadAction<ConsentForm>) => {
      state.consentForm = action.payload;
    },
  },
});

export const { setConsentForm } = consentSlice.actions;

export default consentSlice.reducer;
