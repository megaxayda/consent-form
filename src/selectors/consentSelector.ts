import { RootState } from 'store';

export const selectConsentFormValue = (state: RootState) => state.consent.consentForm;

export const selectDoneSpeak = (state: RootState) => state.consent.doneSpeak;

export const selectReadyListen = (state: RootState) => state.consent.readyListen;

export const selectDoneListen = (state: RootState) => state.consent.doneListen;

export const selectConsentResponse = (state: RootState) => state.consent.consentResponse;

export const selectAudioUrl = (state: RootState) => state.consent.audioUrl;
