This repository contains Javascript programs for managing user data. There are three main programs available:

Code Explaination - 

i. userDataGenerator.js : 
 This program will fetch the data from the Random Data API and writes it to the   "users.csv" file.

-- Program Components --

getRandomUser() function - This function is defined as an asynchronous function using the async keyword. It fetches random user data from an API endpoint using fetch() function.

writeToFile() function - This function takes a "user" object and a "filename" as parameters. It writes the user data to the CSV file specified by the "filename".

existsSync() function - The "existsSync" function is used to check if the file specified by "filename" exists. If the file doesn't exist, the CSV header is created and written to the file using the "writeFile" function.

setInterval() function - The setInterval function is used to fetche random user data using the getRandomUser function repeatedly and writes it to the CSV file using the writeToFile function. If there is an error fetching the user data, an error message is logged to the console.

** Example Dataset **

```
ID,First Name,Last Name,Username,Email,Avatar,Gender,DoB,Address
1060,Melony,Botsford,melony.botsford,melony.botsford@email.com,https://robohash.org/etautrepudiandae.png?size=300x300&set=set1,Non-binary,1980-12-09,"Goldnerland,Florida,90101"
8607,Gabriel,Haley,gabriel.haley,gabriel.haley@email.com,https://robohash.org/remsuntnam.png?size=300x300&set=set1,Bigender,1972-06-27,"North Ta,North Carolina,51596-9848"
5443,Lino,Reinger,lino.reinger,lino.reinger@email.com,https://robohash.org/sequivoluptasveritatis.png?size=300x300&set=set1,Male,1962-01-31,"Jeffryborough,Utah,29553"
5150,Delmar,Kuhn,delmar.kuhn,delmar.kuhn@email.com,https://robohash.org/utvitaenisi.png?size=300x300&set=set1,Polygender,1959-04-03,"North Lolashire,Maine,40162"
```


ii. sortUserData.js:
This program will sort the User details stored in "users.csv" by sorting with respect to the first name of the user and stores it in users-sorted.csv.

-- Program Components -- 

readCSV() function - This function reads the file, parses the CSV data, and collects the rows in an array. Once all the rows are collected, it resolves the promise with the data.

writeCSV() function - This function takes the data to be written and creates a stream to the output file. It writes the CSV header (first row) by converting the keys of the data objects into a comma-separated string. Then, it writes each data row by converting the values of the objects into a comma-separated string. Finally, it resolves the promise when the writing is finished.

sortUsersByFirstName() function - It sorts the user data based on the "First Name".

main() function - It sets the input and output file names and performs the following steps:
1.Reads the user data from the input CSV file using the readCSV function.
2.Sorts the user data by first name using the sortUsersByFirstName function.
3.Writes the sorted data to the output CSV file using the writeCSV function.
4.Sends a success message to the console if the process is completed successfully or an error message if any errors occur.

** Example Dataset **
```
ID,First Name,Last Name,Username,Email,Avatar,Gender,DoB,Address
7867,Anika,Will,anika.will,anika.will@email.com,https://robohash.org/corporisinomnis.png?size=300x300&set=set1,Genderfluid,2000-01-01,West Tasiashire,Oregon,41509-4912
4155,Arnold,McKenzie,arnold.mckenzie,arnold.mckenzie@email.com,https://robohash.org/quirepellataperiam.png?size=300x300&set=set1,Polygender,1986-03-21,O'Reillychester,West Virginia,48091-6399
8914,August,O'Connell,august.o'connell,august.o'connell@email.com,https://robohash.org/iustonihilenim.png?size=300x300&set=set1,Agender,1974-07-29,South Devin,Iowa,77019
4217,Claretta,Olson,claretta.olson,claretta.olson@email.com,https://robohash.org/autquaeab.png?size=300x300&set=set1,Bigender,1963-02-07,South Leigh,Wyoming,83866
5150,Delmar,Kuhn,delmar.kuhn,delmar.kuhn@email.com,https://robohash.org/utvitaenisi.png?size=300x300&set=set1,Polygender,1959-04-03,North Lolashire,Maine,40162
9282,Desmond,Schmeler,desmond.schmeler,desmond.schmeler@email.com,https://robohash.org/maximeideveniet.png?size=300x300&set=set1,Genderqueer,1979-06-28,Omermouth,Maine,44602
```

iii. searchUser.js:
This program will take input of User Id or Username and returns the User details. 

-- Program Components --

searchUser() function - The function takes an input of ID or username and an array of user data. It searches the user data array for a matching ID or username and returns the user object if found.

readCSV() function - The function reads the CSV file. It uses the fs.createReadStream method to open a readable stream from the CSV file and pipes it to the csv.parse method. The csv.parse method parses the CSV data and emits events for each row of data encountered. The rows are collected in an array and resolved when the parsing is complete.

rl.question() function - The function prompts the user to enter an ID or username. It takes a callback function that is executed when the user provides the input.

searchUser() function -  The function is called with the input and user data. If a matching user is found, their details are printed to the console. Otherwise, a message indicating that the user was not found is displayed.

main() function - The function is the central function that serves as the starting point of the program. It reads user input, reads user data from a CSV file, searches for a user based on the input, and displays the user's details if found else displays an error message of User not found.



** Output ** 

```
Enter ID or Username: 8607
User details:
ID: 8607
First Name: Gabriel
Last Name: Haley
Username: gabriel.haley
Email: gabriel.haley@email.com
Avatar: https://robohash.org/remsuntnam.png?size=300x300&set=set1
Gender: Bigender
Datr Of Birth: 1972-06-27
Address: North Ta,North Carolina,51596-9848
```

To run this program follow these steps - 

Step - 1
Clone the repository: git clone https://github.com/your-username/random-user-data-to-csv.git

Step - 2 
Navigate to the project directory: cd AW

Step - 3
Install the dependencies: 
npm i fs csv-parser readLine fast-csv

Step - 4
Run the desired program in any Javascript Interpreter