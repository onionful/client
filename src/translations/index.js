import config from 'config';
import { renderToStaticMarkup } from 'react-dom/server';
import en from './en.json';
import pl from './pl.json';
//export default { en: flat(en), pl: flat(pl) };

const { defaultLanguage } = config;

export default {
  languages: [{ name: 'English', code: 'en', data: en }, { name: 'Polish', code: 'pl', data: pl }],
  options: { renderToStaticMarkup, defaultLanguage },
};
