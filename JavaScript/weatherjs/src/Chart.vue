
<script>
import { defineComponent, h } from 'vue'

import { Line } from 'vue-chartjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
} from 'chart.js'

function getTime(unix) {
    let a = new Date(unix * 1000)
    let year = a.getFullYear().toString().substr(2);
    let month = a.getMonth() + 1;
    let date = a.getDate();
    return date + '.' + '0' + month + '.' + year;
}

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale
)

export default defineComponent({
    name: 'LineChart',
    components: {
        Line
    },
    props: {
        chartId: {
            type: String,
            default: 'line-chart'
        },
        data: {
            type: Array,
            default: () => [],
        },
        width: {
            type: Number,
            default: 400
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: '',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        console.log(props.data)
        const chartData = {
            labels: [`${getTime(props.data[0]?.dt)}`,
            `${getTime(props.data[1]?.dt)}`,
            `${getTime(props.data[2]?.dt)}`,
            `${getTime(props.data[3]?.dt)}`,
            `${getTime(props.data[4]?.dt)}`,
            `${getTime(props.data[5]?.dt)}`,
            `${getTime(props.data[6]?.dt)}`],
            datasets: [{
                label: 'Life expectancy',
                data: [props.data[0]?.temp?.day,
                props.data[1]?.temp?.day,
                props.data[2]?.temp?.day,
                props.data[3]?.temp?.day,
                props.data[4]?.temp?.day,
                props.data[5]?.temp?.day,
                props.data[6]?.temp?.day,],
                backgroundColor: [
                    'rgba(216, 27, 96, 0.6)',
                ],
                borderColor: [
                    'rgba(216, 27, 96, 1)',
                ],
                borderWidth: 3
            }]
        }

        const chartOptions = {
            responsive: true,
            maintainAspectRatio: false
        }

        return () =>
            h(Line, {
                chartData,
                chartOptions,
                chartId: props.chartId,
                width: props.width,
                height: props.height,
                cssClasses: props.cssClasses,
                styles: props.styles,
                plugins: props.plugins
            })
    },
    watch: {
        data() {
            console.log('123')
            // h(Line, {
            //     chartData,
            //     chartOptions: {
            //         responsive: true,
            //         maintainAspectRatio: false
            //     },
            //     chartId: this.props.chartId,
            //     width: this.props.width,
            //     height: this.props.height,
            //     cssClasses: this.props.cssClasses,
            //     styles: this.props.styles,
            //     plugins: this.props.plugins
            // })
        },
        deep: true,
    },
    methods: {
        getData() {

        }
    }
})
</script>