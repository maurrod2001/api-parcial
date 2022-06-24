var app = require("./app");
var connection = require("./connections");
var port = 3000;
//*------------------------- prueba de coneccion-------------------------------
connection.connect(function (error) {
    if (error) {
        console.log("el error de conexion es: " + error);
        return;
    }
    console.log("la conexion fue exitosa");
});
//*----------------------------------medic--------------------------------------
app.get("/medic", function (req, res) {
    var sql = "SELECT * FROM medic";
    connection.query(sql, function (error, results) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.json({ Response: "not results" });
        }
    });
});
app.get("/medic/:name", function (req, res) {
    var name = req.params.name;
    var sql = "SELECT * FROM medic WHERE id = (SELECT id FROM medic WHERE name ='".concat(name, "')");
    connection.query(sql, function (error, results) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.json({ Response: "not results" });
        }
    });
});
app.post("/medic", function (req, res) {
    var sql = "INSERT INTO medic SET ?";
    var customersObj = {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        phone: req.body.phone
    };
    connection.query(sql, customersObj, function (error) {
        if (error)
            throw error;
        res.json({ Response: "medic created!" });
    });
});
app.put("/medic/:name", function (req, res) {
    var name = req.params.name;
    var _a = req.body, lastname = _a.lastname, email = _a.email, phone = _a.phone;
    var sql = "UPDATE medic SET  lastname ='".concat(lastname, "', email='").concat(email, "', phone = '").concat(phone, "' WHERE id =(SELECT id FROM medic WHERE name='").concat(name, "')");
    connection.query(sql, function (error) {
        if (error)
            throw error;
        res.json({ response: "medic updated" });
    });
});
app["delete"]("/medic/:id", function (req, res) {
    var id = req.params.id;
    var sql = "DELETE FROM medic WHERE id = ".concat(id);
    connection.query(sql, function (error) {
        if (error)
            throw error;
        res.json({ Response: "medic deleted" });
    });
});
//*----------------------paciente--------------------------------
app.get("/pacient", function (req, res) {
    var sql = "SELECT * FROM pacient";
    connection.query(sql, function (error, results) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.json({ Response: "not results" });
        }
    });
});
app.get("/pacient/:name", function (req, res) {
    var name = req.params.name;
    var sql = "SELECT * FROM pacient WHERE id = (SELECT id FROM pacient WHERE name ='".concat(name, "' )");
    connection.query(sql, function (error, results) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.json({ Response: "not results" });
        }
    });
});
app.post("/pacient", function (req, res) {
    var sql = "INSERT INTO pacient SET ?";
    var customersObj = {
        no: req.body.no,
        name: req.body.name,
        lastname: req.body.lastname,
        gender: req.body.gender,
        day_of_birth: req.body.day_of_birth,
        email: req.body.email,
        phone: req.body.phone,
        medicaments: req.body.medicaments,
        alergy: req.body.alergy
    };
    connection.query(sql, customersObj, function (error) {
        if (error)
            throw error;
        res.json({ Response: "pacient created!" });
    });
});
app.put("/pacient/:no", function (req, res) {
    var no = req.params.no;
    var _a = req.body, name = _a.name, lastname = _a.lastname, gender = _a.gender, day_of_birth = _a.day_of_birth, email = _a.email, phone = _a.phone, medicaments = _a.medicaments, alergy = _a.alergy;
    var sql = "UPDATE pacient SET name = '".concat(name, "' , lastname ='").concat(lastname, "',gender ='").concat(gender, "', day_of_birth='").concat(day_of_birth, "', email='").concat(email, "', phone = '").concat(phone, "' , medicaments='").concat(medicaments, "', alergy='").concat(alergy, "' WHERE id =(SELECT id FROM pacient WHERE no = ").concat(no, ")");
    connection.query(sql, function (error) {
        if (error)
            throw error;
        res.json({ Response: "pacient updated" });
    });
});
app["delete"]("/pacient/:no", function (req, res) {
    var no = req.params.no;
    var sql = "DELETE FROM pacient WHERE id = (SELECT id FROM pacient WHERE no =".concat(no, ")");
    connection.query(sql, function (error) {
        if (error)
            throw error;
        res.json({ Response: "pacient deleted" });
    });
});
//*---------------------------user-----------------------
app.get("/user", function (req, res) {
    var sql = "SELECT * FROM user";
    connection.query(sql, function (error, results) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.json({ Response: "not results" });
        }
    });
});
app.get("/login/:username", function (req, res) {
    var username = req.params.username;
    var sql = "SELECT username , password FROM user WHERE id = (SELECT id FROM user WHERE username = '".concat(username, "')");
    connection.query(sql, function (error, results) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.json({ Response: "not results" });
        }
    });
});
app.get("/user/:id", function (req, res) {
    var id = req.params.id;
    var sql = "SELECT * FROM user WHERE id = ".concat(id);
    connection.query(sql, function (error, results) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.json({ Response: "not results" });
        }
    });
});
app.post("/user", function (req, res) {
    var sql = "INSERT INTO user SET ?";
    var customersObj = {
        username: req.body.username,
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password
    };
    connection.query(sql, customersObj, function (error) {
        if (error)
            throw error;
        res.json({ Response: "user created!" });
    });
});
app.put("/user/:id", function (req, res) {
    var id = req.params.id;
    var _a = req.body, username = _a.username, name = _a.name, lastname = _a.lastname, email = _a.email, password = _a.password;
    var sql = "UPDATE user SET username='".concat(username, "', name = '").concat(name, "' , lastname ='").concat(lastname, "', email='").concat(email, "', password = '").concat(password, "'  WHERE id =").concat(id);
    connection.query(sql, function (error) {
        if (error)
            throw error;
        res.json({ Response: "user updated" });
    });
});
app["delete"]("/user/:id", function (req, res) {
    var id = req.params.id;
    var sql = "DELETE FROM user WHERE id = ".concat(id);
    connection.query(sql, function (error) {
        if (error)
            throw error;
        res.json({ Response: "user deleted" });
    });
});
//*--------------------------reservation-------------------------
app.get("/reservation", function (req, res) {
    var sql = "SELECT * FROM reservation";
    connection.query(sql, function (error, results) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.json({ Response: "not results" });
        }
    });
});
app.get("/reservation/:id", function (req, res) {
    var id = req.params.id;
    var sql = "SELECT * FROM reservation WHERE id = ".concat(id);
    connection.query(sql, function (error, results) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.json(results);
        }
        else {
            res.json({ Response: "not results" });
        }
    });
});
app.post("/reservation", function (req, res) {
    var sql = "INSERT INTO reservation SET ?";
    var customersObj = {
        fecha: req.body.fecha,
        note: req.body.note,
        symtoms: req.body.symtoms,
        pacient_id: req.body.pacient_id,
        medic_id: req.body.medic_id,
        status_id: req.body.status_id,
        user_id: req.body.user_id,
        price: req.body.price
    };
    connection.query(sql, customersObj, function (error) {
        if (error)
            throw error;
        res.json({ Response: "reservation created!" });
    });
});
app.put("/reservation/:id", function (req, res) {
    var id = req.params.id;
    var _a = req.body, fecha = _a.fecha, note = _a.note, symtoms = _a.symtoms, pacient_id = _a.pacient_id, medic_id = _a.medic_id, status_id = _a.status_id, user_id = _a.user_id, price = _a.price;
    var sql = "UPDATE reservation SET fecha='".concat(fecha, "', note = '").concat(note, "' , symtoms ='").concat(symtoms, "',pacient_id ='").concat(pacient_id, "', medic_id='").concat(medic_id, "', status_id='").concat(status_id, "', user_id = '").concat(user_id, "' , price='").concat(price, "' WHERE id =").concat(id);
    connection.query(sql, function (error) {
        if (error)
            throw error;
        res.json({ Response: "reservation updated" });
    });
});
app["delete"]("/reservation/:id", function (req, res) {
    var id = req.params.id;
    var sql = "DELETE FROM reservation WHERE id = ".concat(id);
    connection.query(sql, function (error) {
        if (error)
            throw error;
        res.json({ Response: "reservation deleted" });
    });
});
//$ inicializacion de servidor
app.listen(port, function () {
    console.log("El servidor est\u00E1 inicializado en el puerto ".concat(port));
    console.log("http://localhost:3000");
});
