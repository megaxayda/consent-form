import { RootState } from 'store';

export const selectConsentFormValue = (state: RootState) => state.consent.consentForm;
