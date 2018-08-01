export default {
  defaultLanguage: process.env.REACT_APP_DEFAULT_LANGUAGE,
  onionful: {
    endpoint: process.env.REACT_APP_AUTH0_CLIENT_ID,
    space: process.env.REACT_APP_AUTH0_DOMAIN,
  },
  ui: {
    headerHeight: '64px',
  },
};
