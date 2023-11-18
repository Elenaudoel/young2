const QUESTOES_QUIZ = [
    {
        questao:'Melhor professor',
        a: 'Daniel',
        b: 'Rodrigo',
        c: 'Diego',
        d: 'Arthur',
        correta: 'c'
    },
    {
        questao:'Melhor jogo',
        a: 'Red Dead Redemption 2',
        b: 'Forspoken',
        c: 'God of War',
        d: 'Final Fantasy XVI',
        correta: 'a'
    },
    {
        questao:'Melhor time',
        a: 'Real Madrid',
        b: 'Palmeiras',
        c: 'Liverpool',
        d: 'VAXCÃO',
        correta: 'd'
    },
    {
        questao:'Melhor RPG',
        a: 'The Witcher 3',
        b: 'Starfield',
        c: 'Elden Ring',
        d: 'AC: Odyssey',
        correta: 'a'
    },
    {
        questao:'GOTY 2022',
        a: 'GOW: Ragnarök',
        b: 'Elden Ring',
        c: 'Horizon Forbidden West',
        d: 'A Plague Tale: Requiem',
        correta: 'c'
    },
]

const TITULO_QUIZ = document.querySelector('.titulo-questao')
const ALTERNATIVA_A = document.getElementById('texto-a')
const ALTERNATIVA_B = document.getElementById('texto-b')
const ALTERNATIVA_C = document.getElementById('texto-c')
const ALTERNATIVA_D = document.getElementById('texto-d')
const BOTAO = document.getElementById('enviar')
const RESPOSTAS = document.querySelectorAll('.resposta')
const CONTEINER_QUIZ = document.querySelector('.conteiner-quiz')


let questao_atual = 0
let qtd_corretas = 0


function carregar_questoes() {
    const QUESTAO = QUESTOES_QUIZ[questao_atual]
    TITULO_QUIZ.innerHTML = QUESTAO.questao
    ALTERNATIVA_A.innerHTML = QUESTAO.a
    ALTERNATIVA_B.innerHTML = QUESTAO.b
    ALTERNATIVA_C.innerHTML = QUESTAO.c
    ALTERNATIVA_D.innerHTML = QUESTAO.d

carregar_questoes()