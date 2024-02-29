const { initializeDatabase } = require('./db/db.connection');
const express = require('express');


const { Items } = require('./models/items');
const { Sales } = require('./models/sales');

initializeDatabase();
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello from Inventory Management API!');
});


//Add Item to Inventory
const addItemToInventory = async (itemData) => {
    try {
        const item = new Items(itemData);
        const savedItem = await item.save();
        return savedItem;
    } catch (error) {
        throw error;
    }
}

app.post('/api/items', async (req, res) => {
    try {
        const savedItem = await addItemToInventory(req.body);
        res.json(savedItem)
    } catch (error) {
        res.status(500).json({ error: "Could not save Item" })
    }
})

// Fetch All Items from Inventory
const FetchItems = async () => {
    try {
        const allItems = await Items.find();
        return allItems;
    } catch (error) {
        throw error;
    }
}

app.get('/api/items', async (req, res) => {
    try {
        const FetchedItem = await FetchItems();
        res.json(FetchedItem)
    }
    catch (error) {
        res.status(500).json({ error: "Could not Fetch Items List" })
    }
})

//Add Sales
const addSales = async (saleData) => {
    try {
        const item = new Sales(saleData);
        const savedSale = await item.save();
        return savedSale;
    } catch (error) {
        throw error;
    }
}

app.post('/api/sales', async (req, res) => {
    try {
        const savedSale = await addSales(req.body);
        res.json(savedSale)
    } catch (error) {
        res.status(500).json({ error: "Could not save the Sale Entry" })
    }
})

// Fetch Sales
const FetchSales = async () => {
    try {

        const allSales = await Sales.find();
        return allSales;
    } catch (error) {
        throw error;
    }
}

app.get('/api/sales', async (req, res) => {
    try {
        const FetchedSales = await FetchSales();
        res.json(FetchedSales)
    }
    catch (error) {
        res.status(500).json({ error: "Could not Fetch the Sales List" })
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});