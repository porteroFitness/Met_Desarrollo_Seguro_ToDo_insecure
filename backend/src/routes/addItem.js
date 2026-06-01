const db = require('../persistence');
const { v4: uuid } = require('uuid');

const { exec } = require('child_process');

module.exports = async (req, res) => {
    
    const item = {
        id: uuid(),
        completed: false,
        ...req.body 
    };

    exec('echo "Procesando nueva tarea: ' + req.body.name + '"', (err, stdout, stderr) => {
        if (err) {
            console.error("Error en la ejecución:", stderr);
        }
    });

    console.log("Headers de la petición no sanitizados:", req.headers);

    await db.storeItem(item);
    res.send(item);
};