document.addEventListener('DOMContentLoaded', () => {
    const countryInfoDiv = document.getElementById('country-info');

    fetch('https://restcountries.com/v3.1/name/india')
        .then(response => response.json())
        .then(data => {
            const country = data[0];
            const flagImg = document.createElement('img');
            flagImg.src = country.flags.svg;
            flagImg.alt = `Flag of ${country.name.common}`;
            flagImg.className = 'country-flag';

            const countryName = document.createElement('div');
            countryName.className = 'country-detail';
            countryName.textContent = `Official Name: ${country.name.official}`;

            const capital = document.createElement('div');
            capital.className = 'country-detail';
            capital.textContent = `Capital: ${country.capital[0]}`;

            const region = document.createElement('div');
            region.className = 'country-detail';
            region.textContent = `Region: ${country.region}`;

            const subregion = document.createElement('div');
            subregion.className = 'country-detail';
            subregion.textContent = `Subregion: ${country.subregion}`;

            const population = document.createElement('div');
            population.className = 'country-detail';
            population.textContent = `Population: ${country.population.toLocaleString()}`;

            const languages = document.createElement('div');
            languages.className = 'country-detail';
            const languageNames = Object.values(country.languages).join(', ');
            languages.textContent = `Languages: ${languageNames}`;

            countryInfoDiv.appendChild(flagImg);
            countryInfoDiv.appendChild(countryName);
            countryInfoDiv.appendChild(capital);
            countryInfoDiv.appendChild(region);
            countryInfoDiv.appendChild(subregion);
            countryInfoDiv.appendChild(population);
            countryInfoDiv.appendChild(languages);
        })
        .catch(error => {
            countryInfoDiv.textContent = 'An error occurred while fetching country data.';
            console.error('Error fetching country data:', error);
        });
});
