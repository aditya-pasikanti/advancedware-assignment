const fs = require('fs');
const csv = require('fast-csv');
const readline = require('readline');

const searchUser = (input, data) => {
    const user = data.find((row) => row.ID === input || row.Username === input);
    return user;

}

const readCSV = (filename) => {
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(filename)
            .pipe(csv.parse({ headers: true }))
            .on('error', (error) => reject(error))
            .on('data', (row) => data.push(row))
            .on('end', () => resolve(data));
    });
}

const main = async() => {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Enter ID or Username: ', async(input) => {
        rl.close();

        const inputFilename = 'users.csv';

        try {
            // Read data from CSV
            const userData = await readCSV(inputFilename);

            // Search for user
            const user = searchUser(input.trim(), userData);

            if (user) {
                console.log('User details:');
                console.log('ID:', user.ID);
                console.log('First Name:', user['First Name']);
                console.log('Last Name:', user['Last Name']);
                console.log('Username:', user.Username);
                console.log('Email:', user.Email);
                console.log('Avatar:', user.Avatar);
                console.log('Gender:', user.Gender);
                console.log('Datr Of Birth:', user.DoB);
                console.log('Address:', user.Address);
            } else {
                console.log('User not found.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

main();