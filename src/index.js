(async () => {
    const db = require('./config/config');
    console.log('Começou!');


    console.log('SELECT * FROM TIPI WHERE ID = ID');
    const resultado = await db.selectCustomerId(245);
    console.log(resultado);
})(); 