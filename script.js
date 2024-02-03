//Toggle between burger and navbar  
const hamburger = document.querySelector(".hamburger")
const navMenu1 = document.querySelector(".nav-menu1")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu1.classList.toggle("active")
})


// Data for the cars
var carsData = [
    {
        name: "Audi A1 S-Line",
        image: "Audi A1.jpg",
        price: "$50",
        model: "Audi",
        mark: "A1",
        year: "2012",
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Gasoline"
    },
    {
        name: "VW Golf 6",
        image: "VW Golf.jpg",
        price: "$37",
        model: "Golf 6",
        mark: "Volkswagen",
        year: "2008",
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        name: "Toyota camry",
        image: "Toyota camry.jpg",
        price: "$30",
        model: "Camry",
        mark: "Toyota",
        year: "2006",
        doors: "4/5",
        ac: "Yes",
        transmission: "Automatic",
        fuel: "Hybrid"
    },
    {
        name: "BMW 320",
        image: "BMW 320.jpg",
        price: "$35",
        model: "320",
        mark: "BMW",
        year: "2012",
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        name: "Benz GLK",
        image: "Mercedes Benz GLK.jpg",
        price: "$50",
        model: "Benz GLK",
        mark: "Mercedes",
        year: "2006",
        doors: "4/5",
        ac: "Yes",
        transmission: "Manual",
        fuel: "Diesel"
    },
    {
        name: "VW passat",
        image: "VW passat CC.jpg",
        price: "$25",
        model: "Passat CC",
        mark: "Volkswagen",
        year: "2008",
        doors: "4/5",
        ac: "Yes",
        transmission: "Automatic",
        fuel: "Gasoline"
    }
];

// Function to change the car information
function changeCarInfo(car) {
    document.querySelector('.car-image-container img').src = car.image;
    document.querySelector('.pick-description__price span').textContent = car.price;
    // Update the rest of the car information in the table
    var tableCols = document.querySelectorAll('.pick-description__table__col span');
    tableCols[1].textContent = car.model;
    tableCols[3].textContent = car.mark;
    tableCols[5].textContent = car.year;
    tableCols[7].textContent = car.doors;
    tableCols[9].textContent = car.ac;
    tableCols[11].textContent = car.transmission;
    tableCols[13].textContent = car.fuel;
}

// Add event listeners to the buttons
var buttons = document.querySelectorAll('.btn-car');
buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        changeCarInfo(carsData[index]);
    });
});

// Function to update the button styles
function updateButtonStyles(selectedButton) {
// Remove the 'selected' class from all buttons
document.querySelectorAll('.btn-car').forEach(function(button) {
    button.classList.remove('selected');
});
// Add the 'selected' class to the clicked button
selectedButton.classList.add('selected');
}

// Add event listeners to the buttons
var buttons = document.querySelectorAll('.btn-car');
buttons.forEach(function(button, index) {
button.addEventListener('click', function() {
    changeCarInfo(carsData[index]);
    updateButtonStyles(button); // Update button styles
});
});