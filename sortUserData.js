const fs = require('fs');
const csv = require('csv-parser');

const readCSV = (fileName) => {
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(fileName)
            .pipe(csv())
            .on('data', (row) => {
                data.push(row);
            })
            .on('end', () => {
                resolve(data);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

const writeCSV = (fileName, data) => {
    return new Promise((resolve, reject) => {
        const stream = fs.createWriteStream(fileName);
        const header = Object.keys(data[0]).join(',') + '\n';
        stream.write(header);
        data.forEach((row) => {
            const values = Object.values(row).join(',') + '\n';
            stream.write(values);
        });
        stream.end();
        stream.on('finish', () => {
            resolve();
        });
        stream.on('error', (error) => {
            reject(error);
        });
    });
}

const sortUsersByFirstName = (data) => {
    return data.sort((a, b) => a['First Name'].localeCompare(b['First Name']));
}

const main = async() => {
    const inputFileName = 'users.csv';
    const outputFileName = 'users-sorted.csv';

    try {
        // Read data from CSV
        const userData = await readCSV(inputFileName);

        // Sort users by first name
        const sortedUsers = sortUsersByFirstName(userData);

        // Write sorted data to CSV
        await writeCSV(outputFileName, sortedUsers);

        console.log('Users sorted by first name and saved to', outputFileName);
    } catch (error) {
        console.error('Error:', error);
    }
}
main();