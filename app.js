const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send(`
		<h1 style="
		text-align: center;
    background-color: #EEE;
    color: #333;
    border-radius: 0.5rem;
    width: 50%;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;"
		>See! Docker is too easy, isn't?</h1>
		<h2 style="
		text-align: center;
    background-color: #ED3;
    color: #000;
    border-radius: 0.5rem;
    width: 50%;
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;"
		>Your Docker 🐬 image is actually works 😀</h2>
	`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
