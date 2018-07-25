import config from 'config';
import { renderToStaticMarkup } from 'react-dom/server';
import en from './en.yml';
import pl from './pl.yml';

const { defaultLanguage } = config;

export default {
  languages: [{ name: 'English', code: 'en', data: en }, { name: 'Polish', code: 'pl', data: pl }],
  options: { renderToStaticMarkup, defaultLanguage },
};
