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

app.get("/filmes", (req, res) => {
    return res.status(200).send(filmesMarcantes)
})
