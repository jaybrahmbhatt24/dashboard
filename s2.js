// script.js
// Revenue Chart
const revenueChart = document.getElementById('revenueChart');

const revenueChartData = {
    labels: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k', '55k', '60k'],
    datasets: [
        {
            label: 'Sales',
            data: [25, 40, 65, 35, 50, 30, 80, 60, 45, 55, 35, 70],
            backgroundColor: '#ff7b7b',
            borderColor: '#ff7b7b',
            borderWidth: 1
        },
        {
            label: 'Profit',
            data: [30, 70, 55, 45, 55, 40, 65, 45, 50, 40, 60, 55],
            backgroundColor: '#d1b1ff',
            borderColor: '#d1b1ff',
            borderWidth: 1
        }
    ]
};

const revenueChartConfig = {
    type: 'line',
    data: revenueChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const revenueChartInstance = new Chart(revenueChart, revenueChartConfig);

// Customer Chart
const customerChart = document.getElementById('customerChart');

const customerChartData = {
    labels: ['New Customers', 'Repeated'],
    datasets: [
        {
            data: [34249, 1420],
            backgroundColor: ['#3498db', '#95a5a6'],
            borderColor: ['#3498db', '#95a5a6'],
            borderWidth: 1
        }
    ]
};

const customerChartConfig = {
    type: 'doughnut',
    data: customerChartData,
    options: {
        cutout: '70%'
    }
};

const customerChartInstance = new Chart(customerChart, customerChartConfig);

// Sales Analytics Chart
const salesChart = document.getElementById('salesChart');

const salesChartData = {
    labels: ['2015', '2016', '2017', '2018', '2019'],
    datasets: [
        {
            label: 'Sales',
            data: [10, 50, 75, 55, 95],
            backgroundColor: '#2ecc71',
            borderColor: '#2ecc71',
            borderWidth: 1
        }
    ]
};

const salesChartConfig = {
    type: 'bar',
    data: salesChartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

const salesChartInstance = new Chart(salesChart, salesChartConfig);

// Product Carousel
let slideIndex = 0;

function nextSlide() {
    slideIndex++;
    if (slideIndex > 0) {
        slideIndex = 0;
    }
    showSlides();
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = 0;
    }
    showSlides();
}

function showSlides() {
    const productItems = document.querySelectorAll('.product-item');
    productItems.forEach((item, index) => {
        if (index === slideIndex) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

showSlides();