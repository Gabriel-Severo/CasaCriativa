const express = require('express')
const server = express()


const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius minima ullam quis est architecto! Corrupti et voluptate pariatur asperiores tempora, ratione illo nam repellat ea dignissimos excepturi corporis qui?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius minima ullam quis est architecto! Corrupti et voluptate pariatur asperiores tempora, ratione illo nam repellat ea dignissimos excepturi corporis qui?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius minima ullam quis est architecto! Corrupti et voluptate pariatur asperiores tempora, ratione illo nam repellat ea dignissimos excepturi corporis qui?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Pintura",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius minima ullam quis est architecto! Corrupti et voluptate pariatur asperiores tempora, ratione illo nam repellat ea dignissimos excepturi corporis qui?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Recortes",
        category: "Criatividade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius minima ullam quis est architecto! Corrupti et voluptate pariatur asperiores tempora, ratione illo nam repellat ea dignissimos excepturi corporis qui?",
        url: "https://rocketseat.com.br"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Karaoke",
        category: "Diversão em Família",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eius minima ullam quis est architecto! Corrupti et voluptate pariatur asperiores tempora, ratione illo nam repellat ea dignissimos excepturi corporis qui?",
        url: "https://rocketseat.com.br"
    },
]

server.use(express.static("public"))

const nunjucks = require('nunjucks')
nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get('/', function(req, res){
    const reversedIdeas = [...ideas].reverse()
    let lastIdeas = []
    for(let idea of reversedIdeas){
        if (lastIdeas.length == 2)
            break
        lastIdeas.push(idea)
    }
    return res.render("index.html", { ideas: lastIdeas })
})

server.get('/ideias', function(req, res){
    const reversedIdeas = [...ideas].reverse()
    return res.render("ideias.html", {ideas: reversedIdeas})
})

server.listen(3000)