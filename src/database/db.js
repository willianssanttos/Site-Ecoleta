// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar op objeto que ira fazer operações no banco de dados 
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// utilizar o  objeto de banco de dados, para nossas operações
/*db.serialize(() => {
  /*   Criar uma tabela: Com comando SQL
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            itens TEXT
        );
    `)
    // Inserir dados na tabela
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        itens
    ) VALUES (?,?,?,?,?,?,?);`
    const values = [
        "http://localhost:3000/assets/download.jpg",
        "Colectoria",
        "Guilherme Gemballa, Jardmim América",
        "Nº: 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

     db.run(query, values, afterInsertData)
    // Consultar os dados da tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros:")
        console.log(rows)
    })

    //Deletar um dado da tabela

    db.run(`DELETE FROM places WHERE id = ?`, [4], function(err) {
        if (err) {
            return console.log(err)
        }

        console.log("Registro deletado com sucesso!")
    })
})*/