This is a base node js project template, which anyone can use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel free to change anything.

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate test folder).

Lets take a look inside the `src` folder

- `config` -> In ths folder anything and everything regarding any configurations o: setup of library of modules will be done. For example: setting up `dotenv` so that we can use the enviroment variables anywhere in a cleaner fashion, his is done in the `server-config.js`. One more example can be to setup you logging library taht can help you to prepare meaningful logs, so configuration for this library should also be done here.

- `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validators, authenticators etc.

- `controllers` -> They are kind of last middleware as post them you call your business layer to execute the business logic. In controller we just receive the incoming request and date and then pass it to the business layer, and once business layer returns an output, we structure the API response in controller and send the output.

- `repositories` -> This folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

- `service` -> contains the business logic and interacts with repositories for data from the database

- `utils` -> contains helper methods, error classes etc.


### Setup the project

- Download this template from github and open it in your favourite text editor.
- Go inside the folder path and execute the following command:
```
npm install
```
- In the root directory create a `.env` file and add the following env variables
```
PORT =<port number of your choice>
```

- go inside the `src` folder and execute the following commands:
```
npx sequelize init
```


- By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder.

- if you are setting up your development enviroment, then write the username of your: db, password of your db and in dialect mention whatever db you are using for example: mysql, mariadb

- if you're setting up test or prod enviroment, make sure you also replace the host with the hosted db url

- To run the server execute
```
 npm run dev
```
