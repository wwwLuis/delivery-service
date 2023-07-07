const express = require('express');
const mustacheExpress = require('mustache-express')
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const fs = require('fs');

const secretKey = 'delivery2023akjhdkhawdhasndskjhfknsdkjfksnfksdnfkjsdn';
const app = express();

const usersPath = './users.json';
const ordersPath = './Bestellungen.json';
const historyPath = './history.json';
const loginFile = 'login.html';
const ordersFile = 'orders.html';

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', './views'); // folder
app.use(bodyParser.json());

//renders login page
app.get('/loginpage',(_req,res)=>{
    return res.render(loginFile);
});

//renders order page
app.get('/orders',(_req,res)=>{
    return res.render(ordersFile);
});

//returning users from jsonfile
function getUsers(){
    let rawdata, userdata;
    if(fs.existsSync(usersPath)){
        rawdata = fs.readFileSync(usersPath, (err, data)=>{
            if(err){
                console.error(err);
            }
        });
    }else{
        userdata  = JSON.stringify([
            {
                id: 1,
                username: 'admin',
                password: 'admin'
            },
            {
                id: 2,
                username: 'user',
                password: 'user'
            }
        ], null, 4);
        fs.writeFile(usersPath, userdata, (err)=>{
            if(err){
                console.error(err);
            }
        });
    }
    
    if(rawdata){
        return JSON.parse(rawdata);
    }else{
        return JSON.parse(userdata);
    }
}

//returns orders from json file
function getOrders(){
    let rawdata, orders;
    if(fs.existsSync(ordersPath)){
        rawdata = fs.readFileSync(ordersPath, (err, data)=>{
            if(err){
                console.error(err);
            }
        });
    }else{
        orders  = JSON.stringify([]);
        fs.writeFile(ordersPath, orders, (err)=>{
            if(err){
                console.error(err);
            }
        });
    }
    
    if(rawdata){
        return JSON.parse(rawdata);
    }else{
        return JSON.parse(orders);
    }
}

//returns history of orders from json file
function getHistory(){
    let rawdata, orders;
    if(fs.existsSync(historyPath)){
        rawdata = fs.readFileSync(historyPath, (err, data)=>{
            if(err){
                console.error(err);
            }
        });
    }else{
        orders  = JSON.stringify([]);
        fs.writeFile(historyPath, orders, (err)=>{
            if(err){
                console.error(err);
            }
        });
    }
    
    if(rawdata){
        return JSON.parse(rawdata);
    }else{
        return JSON.parse(orders);
    }
}


//find users in jsonfile
function findUser(username, password){
    let users=getUsers();
    for(var u of users){
        if(username===u.username&&password===u.password){
            return u;
        }
    }
}

//
function getUserById(id){
    let users=getUsers();
    for(var u of users){
        if(id===u.id){
            return u;
        }
    }
}

// Login endpoint
app.post('/login', (req, res) => {

    const {username, password} = req.body;
    const user = findUser(username, password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    //  Generate a token and send it in the response
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    res.json({ token:token });
});

// protected route to test token authentication
app.get('/protected', authenticateToken, (req, res) => {
    res.json({ valid: true, username: getUserById(req.userId).username});
});

//get the oders
app.get('/getorders', authenticateToken, (req, res) => {
    let orders = getOrders();
    res.json({orderlist:orders});
});

//get the order-history
app.get('/gethistory', authenticateToken, (req, res) => {
    let history = getHistory();
    res.json({orderhistory:history});
});

// processed endpoint
app.post('/processed', (req, res) => {
    let ordersProcessed=req.body.orderlist;
    handleOrders(ordersProcessed);

    res.json({});
});

function handleOrders(ordersProcessed){
    let orders = getOrders();
    let history = getHistory();
    let skip = false;
 
    for(let i = orders.length-1; i>=0; i--){
        skip=false;
        for(id of ordersProcessed){
            if(skip){
                continue;
            }
            let order = orders[i];
            if(order[0].BestellID==id){
                history.push(orders[i]);
                orders.splice(i,1);
                skip=true;
            }
        }
    }


    fs.writeFile(ordersPath, JSON.stringify(orders, null, 4), (err)=>{
        if(err){
            console.error(err);
        }
    });
    
    fs.writeFile(historyPath, JSON.stringify(history, null, 4), (err)=>{
        if(err){
            console.error(err);
        }
    });

}

// middleware for token authentication
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    req.userId = decoded.userId;
    next();
  });
}

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});