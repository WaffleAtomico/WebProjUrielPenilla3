import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express();

const db = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'arctic_donuts',
    dialect: 'mysql',
}
);

app.use(express.json());
app.use(cors());

app.get("/", (req,res) => {
    res.json("Hello this is the backend");
});


//SELECT
app.get("/user", (req,res) => {
    const q = "SELECT * FROM user"
    db.query(q,(err,data) =>
        {
            if(err) return res.json(err)
            return res.json(data)
        })
});

//LOGIN
app.post("/check-user", (req, res) => {
    const { email, password } = req.body;
    const q = "SELECT * FROM user WHERE user_mail = ? AND user_password = ?";
    db.query(q, [email, password], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    });
});


//CREATE USER
app.post("/user", (req,res) => {
    const q = "INSERT INTO user (`user_mail`, `user_name`, `user_lastname`, `user_password`, `user_creditcard`) VALUE (?)"
    const values = [
        // "user_mail",
        //             "name",
        //             "lastname",
        //             "user_password",
        //             "123456789"
        req.body.user_mail,
        req.body.user_name,
        req.body.user_lastname,
        req.body.user_password,
        req.body.user_creditcard
                ]
    db.query(q,[values], (err,data) =>
        {
            if(err) return res.json(err)
            // return res.json(data)
            return res.json("User has been created!!!")
        })
});

app.listen(8800, () =>
{
    console.log("Connected to backend!")
    
});

//UPDATE USER
app.put("/user", (req, res) => {
    const q = "UPDATE user SET user_password = ? WHERE user_mail = ?"
    const { email, password } = req.body;
    db.query(q, [email, password], (err, data) => {
        if(err) return res.json(err)
        // return res.json(data)
        return res.json("User has been updated!")
    });
});

//DELETE USER
app.delete("/user", (req, res) => {
    const q = "DELETE FROM user WHERE user_mail = ?"
    const values = [req.body.user_mail]
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("User has been deleted!")
    })
});

//DELETE USER
app.post("/user", (req,res) => {
    // const { email, password } = req.body;
    const values = [req.body.user_mail, req.body.user_password]
    const q = "SELECT * FROM users WHERE user_mail = ? AND user_password = ?";
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    });
});

//
app.post("/check-mail", (req,res) => {
    const { email } = req.body;
    const q = "SELECT * FROM user WHERE user_mail = ?";
    db.query(q, [email], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    });
});