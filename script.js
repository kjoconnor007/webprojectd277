function showCityData() {
    const selectedCity = document.getElementById('comparison').value;
    const citySections = document.querySelectorAll('.city-data');

    citySections.forEach(section => {
        section.style.display = section.id === selectedCity ? 'block' : 'none';
    });
}
