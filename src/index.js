import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

import { error, notice } from '@pnotify/core';
import fetchCountries from './js/fetchCountries';
import { refs } from './js/refs';
import {
  renderCountryList,
  renderCountryInfo,
} from './js/renderCountries';

refs.input.addEventListener('input', onSearch);

function onSearch(event) {
  const searchQuery = event.target.value.trim();

  clearMarkup();

  if (!searchQuery) {
    return;
  }

  fetchCountries(searchQuery)
    .then(countries => {
      if (countries.length > 10) {
        notice({
          text: 'Зробіть запит більш специфічним',
        });
        return;
      }

      if (countries.length === 1) {
        refs.info.innerHTML = renderCountryInfo(countries[0]);
        return;
      }

      refs.list.innerHTML = renderCountryList(countries);
    })
    .catch(() => {
      error({
        text: 'Країну не знайдено',
      });
    });
}

function clearMarkup() {
  refs.list.innerHTML = '';
  refs.info.innerHTML = '';
}
