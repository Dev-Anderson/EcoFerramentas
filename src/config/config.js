async function connect() {
    if (globalThis.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://postgres:postgres@localhost:5433/manutencaoarquivos'
    });

    const client = await pool.connect();
    console.log('Criou pool de conexões no PostgreSQL');

    const res = await client.query('SELECT NOW()');

    global.connection = pool;
    return pool.connect();
}

async function selectCustomerId(id) {
    const clinet = await connect();
    const sql = 'SELECT * FROM tipi WHERE id = $1;';
    return await client.query(sql, [id]);
}