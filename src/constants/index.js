import {react, aftereffects, javascript, photoshop, mysql,css, tailwind, html,vegas, avatar, imgCard, foto, mail, wsp, github, git, node, python, arduino, framer} from '../assets'
import { games, hardware, machineLearning, musica } from '../assets/svg'

export const skills = [
    {
        id:"html",
        title:"HTML",
        img:html,
        color:'border-b-[#ED530C]'
    },
    {
        id:"css",
        title: "CSS",
        img:css,
        color:'border-b-[#0C57E0]'
    },
    {
        id:"javascript",
        title: "Javascript",
        img:javascript,
        color: 'border-b-[#EDC00C]'
    },
    {
        id:"node",
        title:"Node.Js",
        img:node,
        color:'border-b-[#14B400]'
    },
    {
        id: "react",
        title: "React.Js",
        img: react,
    },
    {
        id:"tailwind",
        title:"TailwindCSS",
        img:tailwind,

    },
    {
        id:"framer",
        title:"Framer Motion",
        img:framer,
        color:'border-b-[#009BE6]'
    },
    {
        id:"mysql",
        title: "MySQL",
        img:mysql,
        color:'border-b-[#E08900]'
    },
    {
        id:'python',
        title:'Python',
        img:python,
        color:'border-b-[#FFDA08]'
    },
    {
        id:"git",
        title:"Git",
        img:git,
        color: 'border-b-[#FA4A0D]'
    },
    {
        id:"arduino",
        title:"Arduino",
        img: arduino,
        color: 'border-b-[#08BABD]'
    },
    {
        id:"photoshop",
        title:"Adobe Photoshop",
        img:photoshop,
        color:'border-b-[#00BDED]'
    },

]

export const projects = [
    {
        id:'pokemon',
        title:'Pokemon Page',
        description:'A popular project site whit a all pokemons exist for now, this projects was realice in a bootcamp of web developer. In this project made a API REST & Front',
        img:'bg-pokemon',
        avatar:foto,
        time:'18/01/2023',
        path:'/pokemon-page'

    },
    {
        id:'countries',
        title:'Countries Page',
        description: 'Sitio web con todos los paises y descripciones de los mismos, realizado en el bootcamp de desarrollador web. En este proyecto se contruyo una API REST con node.js, para luego ser consumida y construir el frontend con React.js',
        path:'/countries-page',
        img:'bg-countries'
    },
    {
        id:'hoobank',
        title: 'Modern Website with TailwindCSS',
        description:'Sitio Web simulando ser la página de un banco. Programada con React.js y usando TailwindCSS, un framework para estilos de CSS',
        img:'bg-hoobank',
        avatar:foto,
        time:'20/12/2022',
        path:'/bank'
    },
    {
        id:'gea',
        title:'GEA',
        description:'Website for a company of geotecnichal studies',
        img:'bg-gea',
        avatar:foto,
        time:'20/11/2022',
        path:'/gea-web'

    },
    {
        id:'ducky',
        title:'Rubber Ducky with Arduino',
        description: 'Proyecto de Ciberseguridad - Desarrollo de una unidad USB "Rubber Ducky" con una placa de desarrollo "Arduino UNO"',
        img:'bg-ducky',
        avatar:foto,
        time:'17/07/2022',
        path:'/rubber-ducky-with-arduino'

    },
    {
        id:'extension',
        title: 'Chrome extension - Detector de vulnerabilidades SQL Injection',
        description:'Extension de Google Chrome para detectar si un sitio web es vulnerable a ataques SQL Injection',
        img:'bg-extension',
        avatar:foto,
        time:'08/08/2022',
        path:'/chrome-extension-sqli'

    },
    {
        id:'darkmode',
        title: 'Chrome extension - Modo Oscuro',
        description:'Simple extension de Google Chrome que cambia la pagina actual a "modo oscuro"',
        img:'bg-extension',
        avatar:foto,
        time:'05/08/2022',
        path:'/chrome-extension-darkmode'
    },
    {
        id:'portfolio',
        title: 'Portfolio Web Developer',
        description:'Aca vas a poder encontrar el codigo de este mismo portafolio creado con React, TailwindCSS y Framer Motion',
        img:imgCard,
        avatar:foto,
        time:'18/01/2022',
        link:'https://github.com/IvoGarraza/Personal-Portfolio---Full-Stack-Web-Developer'

    }
]

export const contact = [
    {
        id:'github',
        title:'Github',
        img:github,
        link:'https://github.com/IvoGarraza'
    },
    {
        id:'wsp',
        title:'Whatsapp',
        img:wsp,
        link:'https://wa.me/+5493562408275'
    },
    {
        id:'mail',
        title: 'Gmail',
        img: mail,
        link:'mailto:ivogarrachip@gmail.com'
    }
]

export const hobbies = [
    {
        id:'machine-learning',
        title:'Machine Learning',
        img:machineLearning
    },
    {
        id:'hardware',
        title:'Hardware General',
        img:hardware
    },
    {
        id:'music',
        title:'Musica',
        img: musica
    },
    {
        id:'games',
        title:'Videojuegos',
        img: games
    },
]