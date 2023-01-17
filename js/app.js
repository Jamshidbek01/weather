const form = document.querySelector('.form')
const card = document.querySelector('.card')
const img = document.querySelector('.img')

const uptadeUI = (weather) => {
    img.src = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    card.innerHTML = `
    <div class="name">${weather.name}, ${weather.sys.country}</div>
    <div class="clouds">${weather.weather[0].main}</div>
    <div class="temp">
        <span class="deg">${Math.round(weather.main.temp)}</span>
        <span>&deg;C</span>
    </div>
            `
}

const getWeather = async (city) => {
    const data = await getData(city)
    return data
}
let cityName = 'Uzbekistan'
form.addEventListener('submit', (e) => {
    e.preventDefault()
    cityName = form.city.value.trim()
    form.reset()
    getWeather(cityName).then((data) => uptadeUI(data))
})
getWeather(cityName).then((data) => uptadeUI(data))