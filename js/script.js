


// Get the canvas element
const canvas = document.getElementById('myChart');
// Get the 2D rendering context of the canvas
const ctx = canvas.getContext('2d');

// Chart data
let data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true, // Fill the area under the line
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Background color
        tension: 0.4 // Set tension for curved lines
    }]
};

// Horizontal line configuration
const horizontalLine = {
    type: 'line',
    mode: 'horizontal',
    scaleID: 'y',
    value: 70,
    borderColor: 'red',
    borderWidth: 2
};

// Chart configuration
const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x: {
                grid: {
                    display: false // Remove vertical grid lines
                }
            }
        },
        plugins: {
            annotation: {
                annotations: {
                    horizontalLine: horizontalLine // Add horizontal line annotation
                }
            }
        }
    }
};

// Initialize the chart
const myChart = new Chart(ctx, config);

// Function to sort data
function sortData(sortMethod) {
    if (sortMethod === 'monthly') {
        data.labels.sort();
        data.datasets[0].data.sort((a, b) => a - b);
    } else if (sortMethod === 'weekly') {
        data.labels.sort().reverse();
        data.datasets[0].data.sort((a, b) => b - a);
    } else {
        // Default order
        data.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        data.datasets[0].data = [65, 59, 80, 81, 56, 55, 40];
    }
    
    // Update chart with new data
    myChart.update();
}

// Event listener for the sort select element
document.getElementById('sortSelect').addEventListener('change', function() {
    const sortMethod = this.value;
    sortData(sortMethod);
});


// Pie Chart
const canva = document.getElementById('myPieChart');
// Get the 2D rendering context of the canvas
const ctxs = canva.getContext('2d');

// Pie chart data
const datas = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [{
        label: 'My First Dataset',
        data: [12, 15, 13, 5],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)'
        ]
    }]
};

// Pie chart configuration with animation options
const configs = {
    type: 'pie',
    data: datas,
    options: {
        animation: {
            animateRotate: true, // Animate rotation of the pie chart
            animateScale: true // Animate scaling of the pie chart
        }
    }
};

// Create the chart
const myPieChart = new Chart(ctxs, configs);


// Get the navbar element
var navbar = document.getElementById("navbar");

// Get the toggle button element
var toggleButton = document.getElementById("sidebarToggle");

// Add click event listener to the toggle button
toggleButton.addEventListener("click", function() {
    // Toggle a class to hide or reduce the width of the navbar
    navbar.classList.toggle("sb-topnav");
});


function toggleNotifications() {
    var dropdown = document.getElementById("notificationDropdown");
    dropdown.style.display = (dropdown.style.display === "none") ? "block" : "none";
}
function toggleNotifications() {
    var notificationDropdown = document.getElementById("notificationDropdown");
    notificationDropdown.classList.toggle("open");
}

$(".change").on("click", function() {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $(".change i").removeClass("fa-sun").addClass("fa-moon");
    } else {
        $("body").addClass("dark");
        $(".change i").removeClass("fa-moon").addClass("fa-sun");
    }
});
