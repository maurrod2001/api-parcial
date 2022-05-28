const app = require("./app");
const connection = require("./connection");
const port = 3000;

//*------------------------- prueba de coneccion-------------------------------
connection.connect((error) => {
  if (error) {
    console.log("el error de conexion es: " + error);
    return;
  }
  console.log("la conexion fue exitosa");
});


//*----------------------------------medic--------------------------------------
app.get("/medic", (req, res) => {
  const sql = "SELECT * FROM medic";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({Response:"not results"});
    }
  });
});

app.get("/medic/:name", (req, res) => {
  const { name } = req.params;
  const sql = `SELECT * FROM medic WHERE id = (SELECT id FROM medic WHERE name ='${name}')`;

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({Response:"not results"});
    }
  });
});

app.post("/medic", (req, res) => {
  const sql = "INSERT INTO medic SET ?";
  const customersObj = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    phone: req.body.phone,
  };
  connection.query(sql, customersObj, (error) => {
    if (error) throw error;
    res.json({Response:"medic created!"});
  });
});

app.put("/medic/:id", (req, res) => {
  const { id } = req.params;
  const { name, lastname, email, phone } = req.body;
  const sql = `UPDATE medic SET name = '${name}' , lastname ='${lastname}', email='${email}', phone = '${phone}' WHERE id =${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.json({response:"medic aggregate"});
  });
});

app.delete("/medic/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM medic WHERE id = ${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.json({Response:"medic deleted"});
  });
});

//*----------------------paciente--------------------------------
app.get("/pacient",(req,res)=>{
  const sql = "SELECT * FROM pacient"
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({Response:"not results"});
    }
  });
})


app.get("/pacient/:name", (req, res) => {
  const { name } = req.params;
  const sql = `SELECT * FROM pacient WHERE id = (SELECT id FROM pacient WHERE name ='${name}' )`;

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({Response:"not results"});
    }
  });
});


app.post("/pacient", (req, res) => {
  const sql = "INSERT INTO pacient SET ?";
  const customersObj = {
    no:req.body.no,
    name: req.body.name,
    lastname: req.body.lastname,
    gender:req.body.gender,
    day_of_birth:req.body.day_of_birth,
    email: req.body.email,
    phone: req.body.phone,
    medicaments:req.body.medicaments,
    alergy:req.body.alergy,
  };
  connection.query(sql, customersObj, (error) => {
    if (error) throw error;
    res.json({Response:"pacient created!"}
    );
  });
});

app.put("/pacient/:no", (req, res) => {
  const { no } = req.params;
  const { name, lastname,gender, day_of_birth, email, phone, medicaments , alergy } = req.body;
  const sql = `UPDATE pacient SET name = '${name}' , lastname ='${lastname}',gender ='${gender}', day_of_birth='${day_of_birth}', email='${email}', phone = '${phone}' , medicaments='${medicaments}', alergy='${alergy}' WHERE id =(SELECT id FROM pacient WHERE no = ${no})`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.json({Response:"pacient updated"});
  });
});



app.delete("/pacient/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM pacient WHERE id = ${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.json({Response:"pacient deleted"});
  });
});

//*---------------------------user-----------------------

app.get("/user",(req,res)=>{
  const sql = "SELECT * FROM user"
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({Response:"not results"});
    }
  });
})



app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM user WHERE id = ${id}`;

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({Response:"not results"});
    }
  });
});


app.post("/user", (req, res) => {
  const sql = "INSERT INTO user SET ?";
  const customersObj = {
    username: req.body.username,
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password:req.body.password
  };
  connection.query(sql, customersObj, (error) => {
    if (error) throw error;
    res.json({Response:"user created!"}
    );
  });
});


app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { username,name, lastname, email, password } = req.body;
  const sql = `UPDATE user SET username='${username}', name = '${name}' , lastname ='${lastname}', email='${email}', password = '${password}'  WHERE id =${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.json({Response:"user updated"});
  });
});

app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM user WHERE id = ${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.json({Response:"user deleted"});
  });
});


//*--------------------------reservation-------------------------

app.get("/reservation",(req,res)=>{
  const sql = "SELECT * FROM reservation"
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({Response:"not results"});
    }
  });
})

app.get("/reservation/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM reservation WHERE id = ${id}`;

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.json({Response:"not results"});
    }
  });
});

app.post("/reservation", (req, res) => {
  const sql = "INSERT INTO reservation SET ?";
  const customersObj = {
    fecha:req.body.fecha,
    note: req.body.note,
    symtoms: req.body.symtoms,
    pacient_id:req.body.pacient_id,
    medic_id:req.body.medic_id,
    status_id: req.body.status_id,
    user_id: req.body.user_id,
    price:req.body.price,
  };
  connection.query(sql, customersObj, (error) => {
    if (error) throw error;
    res.json({Response:"reservation created!"}
    );
  });
});



app.put("/reservation/:id", (req, res) => {
  const { id } = req.params;
  const { fecha,note ,symtoms , pacient_id , medic_id , status_id , user_id , price  } = req.body;
  const sql = `UPDATE reservation SET fecha='${fecha}', note = '${note}' , symtoms ='${symtoms}',pacient_id ='${pacient_id}', medic_id='${medic_id}', status_id='${status_id}', user_id = '${user_id}' , price='${price}' WHERE id =${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.json({Response:"reservation updated"});
  });
});

app.delete("/reservation/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM reservation WHERE id = ${id}`;
  connection.query(sql, (error) => {
    if (error) throw error;
    res.json({Response:"reservation deleted"});
  });
});




//$ inicializacion de servidor

app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto ${port}`);
  console.log("http://localhost:3000");
});
