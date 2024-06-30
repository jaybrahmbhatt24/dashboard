const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
        datasets: [{
            label: 'Sales',
            data: [25, 30, 35, 40, 55, 60, 65, 50, 45, 50, 55, 60, 65, 50, 45, 50, 55, 60, 65, 50, 45, 50, 55, 60, 65, 50, 45, 50, 55, 60, 65, 50, 45, 50, 55, 60, 65, 50, 45, 50, 55, 60, 65, 50, 45, 50, 55, 60, 65, 50, 45, 50, 55, 60, 65, 50, 45, 50, 55, 60],
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});