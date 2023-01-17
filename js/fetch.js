const KEY = `96b947a45d33d7dc1c49af3203966408`


const getData = async (city) => {
    const base = `https://api.openweathermap.org/data/2.5/weather`
    const query = `?q=${city}&units=metric&appid=${KEY}`
    const req = await fetch(base + query)
    const data = await req.json()
    console.log(req.status);
    if (req.status != 200) {
        alert(`Ma'lumot topilmadi!!! ${req.status} not found!!!`)
        // document.querySelector('.container').style = `display: none;`
    } else {
        
    }
    return data
}
// getData('fergana').then((data) => console.log(data))