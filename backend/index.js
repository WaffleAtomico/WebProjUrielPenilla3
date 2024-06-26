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

//para meter mvc, se usa redux

/*
si ya tenemos react ya hay que usarlas
las practicas deben de ser de mvc
*/

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


//CREATE USER
app.post("/user", (req,res) => {
    const q = "INSERT INTO user (`user_mail`, `user_name`, `user_lastname`, `user_password`, `user_creditcard`, `user_type`) VALUE (?)"
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
        req.body.user_creditcard,
        req.body.user_type
                ]
    db.query(q,[values], (err,data) =>
        {
            if(err) return res.json(err)
            // return res.json(data)
            return res.json("User has been created!!!")
        })
});

//UPDATE USER
/*
    "user_name": "test",
    "user_lastname": "user",
    "user_password": "123",
    "user_creditcard": "123456789",
    "user_type": 1,
    "user_mail": "testuser@gmail.com"
*/


//arquitectura basada en componentes

app.put("/user", (req, res) => {
    const q = "UPDATE `user` SET `user_name`= ? ,`user_lastname`= ? ,`user_password`= ? ,`user_creditcard` = ?, `user_type` = ?  WHERE `user_mail` = ? "
    const values = [
        req.body.user_name,
        req.body.user_lastname,
        req.body.user_password,
        req.body.user_creditcard,
        req.body.user_type,
        req.body.user_mail
    ]
    db.query(q, values, (err, data) => {
        if(err) return res.json(err)
        return res.json("User has been updated!")
    })
});

app.post("/user-password", (req, res) => {
    const q = "UPDATE `user` SET `user_password`= ? WHERE `user_mail` = ? "
    const values = [
        req.body.user_password,
        req.body.user_mail
    ]
    db.query(q, values, (err, data) => {
        if(err) return res.json(err)
        return res.json("Password has been updated!")
    })
});

/*
app.put("/user", (req, res) => {
    const q = "UPDATE user SET user_password = ? WHERE user_mail = ?"
    const { email, password } = req.body;
    db.query(q, [email, password], (err, data) => {
        if(err) return res.json(err)
        // return res.json(data)
        return res.json("User has been updated!")
    });
});
*/

//DELETE USER
/*
{
    user_mail = "testuserone@gmail.com"
}
*/

app.post("/user", (req, res) => {
    const q = "DELETE FROM user WHERE user_mail = ?"
    const values = [req.body.user_mail]
    db.query(q, [values], (err, data) => {
        if(err) return res.json(err)
        return res.json("User has been deleted!")
    })
});



app.post("/user-login-client", (req, res) => {
    const { user_mail, user_password } = req.body;
    const q = "SELECT * FROM user WHERE user_mail = ? AND user_password = ? AND user_type = 0";
    db.query(q, [user_mail, user_password], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    });
});

app.post("/user-login-admin", (req,res) => {
    const { user_mail, user_password } = req.body;
    const q = "SELECT * FROM user WHERE user_mail = ? AND user_password = ? AND user_type = 1";
    db.query(q, [user_mail, user_password], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    });
});


//SELECT gente
app.get("/user-gente", (req,res) => {
    const q = "SELECT * FROM user WHERE user_type = 0"
    db.query(q,(err,data) =>
        {
            if(err) return res.json(err)
            return res.json(data)
        })
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

/* ADM */

app.post("/admin-users", (req,res) => {
    const { user_mail } = req.body;
    const q = "SELECT * FROM user WHERE user_type = 1 AND user_mail != ?";
    db.query(q, [user_mail], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});


// utl esta mal creo, ya que no recibe el correo por la url
// LLamada erronea ya que solo acepta post

app.post("/delete-admin", (req, res) => {
    const { user_mail } = req.body;
    const q = " DELETE FROM user WHERE user_mail = ? ";
    console.log("mail " + user_mail);
    db.query(q, [user_mail], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });


  /* PRODUCTS */


app.get("/allproducts", (req,res) => {
    const q = "SELECT * FROM shop_product"
    db.query(q,(err,data) =>
        {
            if(err) return res.json(err)
            return res.json(data)
        })
});

app.post("/product", (req,res) => {
    const q = "INSERT INTO shop_product (`id_product`, `product_name`, `product_cost`, `product_amount`, `product_img_url`) VALUE (?)"
    const values = [
        req.body.id_product,
        req.body.product_name,
        req.body.product_cost,
        req.body.product_amount,
        req.body.product_img_url,
                ]
    db.query(q,[values], (err,data) =>
        {
            if(err) return res.json(err)
            // return res.json(data)
            return res.json("Product has been Added!!!")
        })
});

app.post("/aviable-products", (req,res) => {
    const q = "SELECT * FROM shop_product WHERE product_amount > 0"
    db.query(q,(err,data) =>
        {
            if(err) return res.json(err)
            return res.json(data)
        })
});

app.post("/update-products", (req,res) => {
    const q = "UPDATE `shop_product` SET `product_name`= ?,`product_cost`= ?,`product_amount`= ?,`product_img_url`= ? WHERE id_product = ?"
    const values = [
        req.body.product_name,
        req.body.product_cost,
        req.body.product_amount,
        req.body.product_img_url,
        req.body.id_product
    ]
    console.log(values);
    db.query(q, values,(err,data) =>
        {
            if(err) return res.json(err)
            return res.json(data)
        })
});

app.post("/updateamount", (req,res) => {
    const q = "UPDATE `shop_product` SET `product_amount`= ? WHERE id_product = ?"
    const values = [
        req.body.product_amount,
        req.body.id_product
    ]
    console.log(values);
    // console.log(values);
    db.query(q, values, (err, data) => {
        if(err) return res.json(err)
        return res.json("Product has been updated!")
    })
});


app.post("/delete-product", (req, res) => {
    const { id_product } = req.body;
    const q = "DELETE FROM shop_product WHERE id_product = ? ";
    console.log("id " + id_product);
    db.query(q, [id_product], (err, data) => {
        if(err) return res.json(err)
        return res.json("Product has been deleted!")
    });
  });


app.listen(3001, () =>
{
    console.log("Connected to backend!")
});