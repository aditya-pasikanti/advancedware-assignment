// const axios = require('axios');
const fs = require('fs');

// Function to fetch random user data from the API
const getRandomUser = async() => {
    try {
        const response = await fetch('https://random-data-api.com/api/users/random_user');
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}


// Function to write user data to the CSV file
const writeToFile = (user, filename) => {
    const addressString = `${user.address.city},${user.address.state},${user.address.zip_code}`
    const line = `${user.id},${user.first_name},${user.last_name},${user.username},${user.email},${user.avatar},${user.gender},${user.date_of_birth},"${addressString}"\n`;
    fs.appendFile(filename, line, 'utf8', (error) => {
        if (error) {
            console.error('Error writing to file:', error);
        } else {
            console.log('User data written to CSV:', user);
        }
    });
}

// Main program
const filename = 'users.csv';
const interval = 1000; // Interval time between each GET request in milliseconds

// Write CSV header if the file is empty
if (!fs.existsSync(filename)) {
    const header = 'ID,First Name,Last Name,Username,Email,Avatar,Gender,DoB,Address\n';
    fs.writeFile(filename, header, 'utf8', (error) => {
        if (error) {
            console.error('Error writing CSV header:', error);
        }
    });
}

// Fetch random user data and write to CSV in a loop
setInterval(async() => {
    const user = await getRandomUser();
    if (user) {
        writeToFile(user, filename);
    } else {
        console.error('Error fetching user data from API.');
    }
}, interval);