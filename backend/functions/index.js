const {onRequest} = require("firebase-functions/v2/https");
/* const logger = require("firebase-functions/logger"); */
const {setGlobalOptions} = require("firebase-functions/v2");
setGlobalOptions({maxInstances: 10});

const expres = require("express");
const cors = require("cors");


const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.cert(require("./permis.json")),
});


const app = expres();
app.use(cors({origin: true}));


const db = admin.firestore();


// JSON internos
const fs = require("fs");
const path = require("path");

const jsonFilePath = path.join(__dirname, "./json/dataItemsServices.json");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started


app.get("/", async (req, res)=>{
  try {
    res.send("Este es el servidor de la empresa Carboncillo");
  } catch (error) {
    console.error(error);
  }
});

app.get("/items-services", (req, res)=>{
  try {
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf8"));
    res.json(jsonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Error al cargar los datos."});
  }
});

app.get("/lead-generation-form", async (req, res)=>{
  try {
    const {docs} = await db.collection("lead-generation-form").get();
    const dataForms = docs.map((e)=>({id: e.id, ...e.data()}));
    if (!dataForms.length) return res.status(400).send("No hay ningún dato");
    return res.status(200).json(dataForms);
  } catch (error) {
    console.error(error);
  }
});

app.post("/lead-generation-form", async (req, res)=>{
  try {
    await db.collection("lead-generation-form").doc().create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      message: req.body.message,
    });
    return res.status(200).send("add item");
  } catch (error) {
    console.error(error);
  }
});

exports.app = onRequest(app);

/* exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send("Heeeeeeeeey nuevo servidor!");
}); */
