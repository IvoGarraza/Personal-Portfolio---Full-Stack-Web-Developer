import {react, aftereffects, javascript, photoshop, mysql,css, tailwind, html,vegas, avatar, imgCard, foto, mail, wsp, github, git, node, python, arduino} from '../assets'
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
        id:"mysql",
        title: "MySQL",
        img:mysql,
        color:'border-b-[#E08900]'
    },
    {
        id:"git",
        title:"Git",
        img:git,
        color: 'border-b-[#FA4A0D]'
    },
    {
        id:'python',
        title:'Python',
        img:python,
        color:'border-b-[#FFDA08]'
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
    {
        id:"vegas",
        title:"Sony Vegas",
        img:vegas,
        color:'border-b-[#009BE6]'
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
        id:'hoobank',
        title: 'Modern Website with TailwindCSS',
        description:'Website simulation a site of a bank using the framework for CSS TailwindCSS',
        img:'bg-hoobank',
        avatar:foto,
        time:'20/12/2022',
        path:'/bank'
    },
    {
        id:'gea',
        title:'GEA',
        description:'Website for a company of geotecnichal studies',
        img:imgCard,
        avatar:foto,
        time:'20/11/2022',
        path:'/gea-web'

    },
    {
        id:'ducky',
        title:'Rubber ducky with Arduino',
        description: 'cybersecurity project, development of a rubber ducky with an Arduino UNO development board',
        img:'bg-ducky',
        avatar:foto,
        time:'17/07/2022',
        path:'/rubber-ducky-with-arduino'

    },
    {
        id:'extension',
        title: 'Chrome extension, detection of websites vulnerable SQL Injection attacks',
        description:'A simple Chrome extension that detects if a website is vulnerable to SQL Injection attacks',
        img:'bg-extension',
        avatar:foto,
        time:'08/08/2022',
        path:'/chrome-extension-sqli'

    },
    {
        id:'darkmode',
        title: 'Chrome extension, switch a website in dark mode',
        description:'A simple Chrome extension that change the current page to dark mode, this extension arises after feeling eye strain from reading documentation for a long time',
        img:'bg-extension',
        avatar:foto,
        time:'05/08/2022',
        path:'/chrome-extension-darkmode'
    },
    {
        id:'portfolio',
        title: 'Portfolio Web Developer',
        description:'Here you will find the code of this portfolio made whit React & TailwindCSS',
        img:imgCard,
        avatar:foto,
        time:'18/01/2022',
        path:'/portfolio'

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