try {
  db = connect("mongodb://admin:administradorOVet@localhost:27017/");
} catch (error) {
  throw new Error('Error a la hora de inicializar BD');
}

// Creacion - Posicionamiento en OcularVetDB
db = db.getSiblingDB('OcularVetDB')
// Creacion de usuario de la base de Datos OcularVerDB
try {
  db.createUser({
    'user': 'adminOcularVet',
    'pwd': 'proyectoFinal',
    'roles': [
      {
        'role': 'dbOwner',
        'db': 'OcularVetDB',
      },
    ],
  });
} catch (error) {

  throw new Error('Error a la hora de crear usuario');
}


 

//--------------------------------------
try {
  db.createCollection("configuracionadmins");
  const dataAdmin = fs.readFileSync('/home/mongodb/configuracionadmins.json');
  const docsAdmin = JSON.parse(dataAdmin.toString());
  
  db.configuracionadmins.insertMany(docsAdmin, function(err, result) {
          
      
  });

} catch (error) {

  throw new Error('Error a la hora de crear y cargar confAdmin');
}
//--------------------------------------
try {
  db.createCollection("diagnosticos");
  const dataDiagnostico = fs.readFileSync('/home/mongodb/diagnosticos.json');
  const docsDiagnostico = JSON.parse(dataDiagnostico.toString());
  
  db.diagnosticos.insertMany(docsDiagnostico, function(err, result) {
          if (err) throw err;
          
  });

} catch (error) {

  throw new Error('Error a la hora de crear y cargar diagnosticos');
}
//--------------------------------------
try {
  db.createCollection("notas");
  const dataNotas = fs.readFileSync('/home/mongodb/notas.json');
  const docsNotas = JSON.parse(dataNotas.toString());
  
  db.notas.insertMany(docsNotas, function(err, result) {
          if (err) throw err;
          
  });

} catch (error) {

  throw new Error('Error a la hora de crear y cargar NOTAS');
}

//--------------------------------------

try {
  db.createCollection("usuarios");
  const dataUsuarios = fs.readFileSync('/home/mongodb/usuarios.json');
  const docsUsuarios = JSON.parse(dataUsuarios.toString());
  db.usuarios.insertMany(docsUsuarios, function(err, result) {

          
  });

} catch (error) {

  throw new Error('Error a la hora de crear y cargar usuarios');
}
