const express = require("express");
const app = express();
const port = 3001;

const users = {
	employees: [
		{ name: "Ram", email: "ram@gmail.com", age: 23 },
		{ name: "Shyam", email: "shyam23@gmail.com", age: 28 },
		{ name: "John", email: "john@gmail.com", age: 33 },
		{ name: "Bob", email: "bob32@gmail.coms", age: 41 },
	],
};

app.get("/users", (req, res) => {
	// res.type("json");
	// res.setHeader("Content-Type", "application/json");
	res.json(users);
});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
