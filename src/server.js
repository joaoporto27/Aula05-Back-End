import express from "express"
import { config } from "dotenv"

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())

const guloseimas = [
    {
        id: 1,
        nome: "Trufa",
        preco: 8.0,
    },
    {
        id: 2,
        nome: "Palha italiana",
        preco: 3.0
    },
    {
        id: 3,
        nome: "Ninho trufado",
        preco: 9.0,
    },
];

const filmesMarcantes = [
    {
        id: 1001,
        titulo: "Meu Amigo Totoro",
        genero: "Animação",
        emCartaz: false,
    },
    {
        id:1002,
        titulo: "Deadpool 3",
        genero: "Ação e Comédia",
        emCartaz: true,
    },
    {
        id:1003,
        titulo: "Meu Malvado Favorito 4",
        genero: "Animação",
        emCartaz: true,
    }
]

app.get("/", (req, res) => {
        return res.status(200).send({ message: "Hello, World!"})
})

app.get("/doces", (req, res) => {
    return res.status(200).send(guloseimas)
})

app.post("/doces", (req, res) => {
    const {nome, preco} = req.body;
    const novoDoce = {
        id: guloseimas.length + 1,
        nome: nome,
        preco: preco,
};

    guloseimas.push(novoDoce)
    return res.status(200).send(guloseimas)
})

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})


app.listen(port, () => {
    console.log(`😀 Server started on http://localhost:${port}`    )
})