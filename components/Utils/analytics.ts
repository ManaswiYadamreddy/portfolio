import ReactGA from 'react-ga';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

let initialized = false;

export const initGA = () => {
  if (!GA_TRACKING_ID) return;
  ReactGA.initialize(GA_TRACKING_ID);
  initialized = true;
};

export const logPageView = () => {
  if (!initialized) return;
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (category = '', action = '') => {
  if (initialized && category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = '', fatal = false) => {
  if (initialized && description) {
    ReactGA.exception({ description, fatal });
  }
};
