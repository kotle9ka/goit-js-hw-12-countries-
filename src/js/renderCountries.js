export function renderCountryList(countries) {
  return countries
    .map(country => `<li>${country.name}</li>`)
    .join('');
}

export function renderCountryInfo(country) {
  return `
    <h2>${country.name}</h2>
    <p><strong>Capital:</strong> ${country.capital}</p>
    <p><strong>Population:</strong> ${country.population}</p>
    <p><strong>Languages:</strong> ${country.languages
      .map(lang => lang.name)
      .join(', ')}</p>
    <img src="${country.flag}" alt="${country.name}" width="150" />
  `;
}
