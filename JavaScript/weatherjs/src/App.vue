<template>
    <div class="container">
        <div class="info" id="info">
            <div class="one-day-forecast">
                <div class="city">Ростов-на-Дону</div>
                <div class="date">Сегодня {{ chartData.date }}. Сейчас {{ chartData.time }}</div>
                <div class="average__temp">Средняя температура за 3 дня: {{ chartData.averageTemp }}</div>
            </div>
            <div class="three-days-forecast">
                <div class="three-days__item">
                    <img v-bind:src="chartData.srcImageDateOne" alt="img" class="day1-img">
                    <div class="temp">Температура: {{ chartData.tempDayOne }}</div>
                </div>
                <div class="three-days__item">
                    <img v-bind:src="chartData.srcImageDateTwo" alt="img" class="day2-img">
                    <div class="temp">Температура: {{ chartData.tempDayTwo }}</div>
                </div>
                <div class="three-days__item">
                    <img v-bind:src="chartData.srcImageDateThree" alt="img" class="day3-img">
                    <div class="temp">Температура: {{ chartData.tempDayThree }}</div>
                </div>
            </div>
            <div class="chart">
                <Chart :data="chartData" />
            </div>

        </div>
        <button v-on:click="refresh" class="refresh__button">Refresh</button>
    </div>
</template>

<script>
import Chart from './Chart.vue'

// function getTime(unix) {
//     let a = new Date(unix * 1000)
//     let year = a.getFullYear().toString().substr(2);
//     let month = a.getMonth() + 1;
//     let date = a.getDate();
//     return date + '.' + '0' + month + '.' + year;
// }

export default {
    name: 'App',
    components: {
        Chart
    },
    async mounted() {
        this.getData()
    },
    data() {
        return {
            chartData: {
                averageTemp: '',
                date: new Date().toLocaleDateString(),
                time: '',
                tempDayOne: '',
                tempDayTwo: '',
                tempDayThree: '',
                srcImageDateOne: '',
                srcImageDateTwo: '',
                srcImageDateThree: ''
            }
        }
    },
    methods: {
        async getData() {
            const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=47.2313&lon=39.7233&units=metric&exclude=current,minutely,hourly,alerts&appid=8b701928e6d1dd8b545ff91022ee6fdd'
            let weatherJSON = await fetch(url);
            let weatherData = await weatherJSON.json();
            let data = weatherData.daily;
            console.log('dsfsd')
            const types = {
                "clear sky": '01d@4x.png',
                "few clouds": '02d@4x.png',
                "scattered clouds": '03d@4x.png',
                "broken clouds": '04d@4x.png',
                "overcast clouds": '04d@4x.png',
                "shower rain": '05d@4x.png',
                "rain": '06d@4x.png',
                "thunderstorm": '07d@4x.png',
                "snow": '08d@4x.png',
                "mist": '09d@4x.png',
                "light rain": '10d@4x.png'
            }
            this.chartData.time = new Date().toLocaleTimeString(),
            this.chartData.averageTemp = `${((data[0].temp.day + data[1].temp.day + data[2].temp.day) / 3).toFixed(0)}`;
            this.chartData.srcImageDateOne = 'http://openweathermap.org/img/wn/' + types[data[0].weather[0].description];
            this.chartData.srcImageDateTwo = 'http://openweathermap.org/img/wn/' + types[data[1].weather[0].description];
            this.chartData.srcImageDateThree = 'http://openweathermap.org/img/wn/' + types[data[2].weather[0].description];
            this.chartData.tempDayOne = data[0].temp.day.toFixed(0);
            this.chartData.tempDayTwo = data[1].temp.day.toFixed(0);
            this.chartData.tempDayThree = data[2].temp.day.toFixed(0);
            this.$forceUpdate();
        },
        refresh() {
            
            this.getData()
        }
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    border: 0;
}

*,
*:before,
*:after {
    box-sizing: border-box;
}

:focus,
:active {
    outline: none;
}

a:focus,
a:active {
    outline: none;
}

nav,
footer,
header,
aside {
    display: block;
}

html,
body {
    height: 100%;
    width: 100%;
    font-size: 100%;
    line-height: 1;
    font-size: 14px;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
    font-family: inherit;
}

input::-ms-clear {
    display: none;
}

button {
    cursor: pointer;
}

button::-moz-focus-inner {
    padding: 0;
    border: 0;
}

a,
a:visited {
    text-decoration: none;
}

a:hover {
    text-decoration: none;
}

ul li {
    list-style: none;
}

img {
    vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: inherit;
    font-weight: inherit;
}

/*--------------------------------------------*/
/* ШРИФТЫ IMPORT */
/*--------------------------------------------*/
/* ШРИФТЫ */
/*--------------------------------------------*/
/* ПЕРЕМЕННЫЕ */
/*--------------------------------------------*/
/* ШАБЛОНЫ */
/*--------------------------------------------*/
/* МИКСИНЫ */
/*--------------------------------------------*/
/* SCSS */
body {
    background-color: #fff;
    font-family: "Roboto", sans-serif;
}

.container {
    max-width: 1050px;
    margin: 0 auto;
}

.info {
    color: #000;
    font-size: 30px;
    display: flex;
    flex-direction: column;
}

.info> :not(:last-child) {
    margin: 0 0 30px 0;
}

.info .one-day-forecast .city {
    margin: 15px 0 10px;
}

.info .one-day-forecast .date {
    font-size: 16px;
}

.info .three-days-forecast {
    display: flex;
}

.info .three-days-forecast> :not(:last-child) {
    margin: 0 15px 0 0;
}

.info .three-days-forecast__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.info button {
    max-width: 200px;
    color: black;
    padding: 10px 15px;
    border-radius: 15px;
}

.card {
    margin: 150px 0 0 0;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 30px;
    padding: 50px 100px;
}

.card> :not(:last-child) {
    margin: 0 0 15px 0;
}

.card .btn {
    max-width: 150px;
    padding: 10px 15px;
    border-radius: 20px;
    transition: all 0.2s ease;
}

.card .btn:hover {
    background-color: #ccc;
}

.card .form-control input {
    border: 1px solid #000;
    width: 500px;
    height: 25px;
    border-radius: 7px;
    padding: 10px 15px;
}
</style>
