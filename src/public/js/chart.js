let xValues = ["September 2022", "October 2022", "November 2022", "December 2022", "Janurary 2023"];
let yValues = [55, 49, 44, 24, 15];
let barColors = [];

for (let i = 0; i < xValues.length; ++i) {
    if (i % 2 == 0) {
        barColors.push("#386641")
    } else {
        barColors.push("#588157")
    }
}

new Chart("myChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        legend: {display: false},
        title: {
            display: true,
            text: "Total number of Prests caught"
        }
    }
});
