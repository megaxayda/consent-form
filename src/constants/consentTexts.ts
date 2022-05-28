import { LANGUAGE } from './language';

export const CONSENT_TEXTS = {
  [LANGUAGE.ENGLISH]: {
    code: 'en-US',
    firstPara:
      'You understand that by using the site or site services, you agree to be bound by this agreement. If you do not accept this agreement in its entirety, you must not access or use the site or the site services.',
    secondPara: 'Do you agree to this agreement? Please respond by saying "Yes" or "No".',
    speakText:
      'You understand that by using the site or site services, you agree to be bound  by this agreement. If you do not accept this agreement in its entirety, you must not access or use the site or the site services. Do you agree to this agreement? Please respond by saying "Yes" or "No"',
  },
  [LANGUAGE.FRENCH]: {
    code: 'fr-FR',
    firstPara:
      "Vous comprenez qu'en utilisant le site ou les services du site, vous acceptez d'être lié par cet accord. Si vous n'acceptez pas cet accord dans son intégralité, vous ne devez pas accéder ou utiliser le site ou les services du site.",
    secondPara:
      'Êtes-vous d\'accord avec cet accord ? Veuillez répondre en disant "Oui" ou "Non".',
    speakText:
      "Vous comprenez qu'en utilisant le site ou les services du site, vous acceptez d'être lié par cet accord. Si vous n'acceptez pas cet accord dans son intégralité, vous ne devez pas accéder ou utiliser le site ou les services du site. Êtes-vous d'accord avec cet accord ? Veuillez répondre en disant Oui ou Non.",
  },
};
