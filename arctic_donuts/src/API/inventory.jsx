const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('mssql');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server',
    database: 'your_database',
    options: {
    encrypt: true, // Para Azure
    enableArithAbort: true
    }
};

sql.connect(config, err => {
    if (err) {
    console.log('Error connecting to database:', err);
    } else {
    console.log('Connected to database');
    }
});


app.get('/api/inventory', async (req, res) => {
    try {
    const result = await sql.query`SELECT * FROM Products`;
    res.json(result.recordset);
    } catch (err) {
    res.status(500).send(err);
    }
});

app.get('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    try {
    const result = await sql.query`SELECT * FROM Products WHERE ProductID = ${id}`;
    res.json(result.recordset[0]);
    } catch (err) {
    res.status(500).send(err);
    }
});

app.post('/api/products', async (req, res) => {
    const { name, price, description } = req.body;
    try {
    await sql.query`INSERT INTO Products (Name, Price, Description) VALUES (${name}, ${price},
    ${description})`;
    res.status(201).send('Product created');
    } catch (err) {
    res.status(500).send(err);
    }
});

app.put('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    const { name, price, description } = req.body;
    try {
    await sql.query`UPDATE Products SET Name = ${name}, Price = ${price}, Description =
    ${description} WHERE ProductID = ${id}`;
    res.send('Product updated');
    } catch (err) {
    res.status(500).send(err);
    }
});


app.delete('/api/products/:id', async (req, res) => {
    const id = req.params.id;
    try {
    await sql.query`DELETE FROM Products WHERE ProductID = ${id}`;
    res.send('Product deleted');
    } catch (err) {
    res.status(500).send(err);
    }
});
    

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});