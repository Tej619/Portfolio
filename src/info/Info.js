import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(10, 255, 75)", "rgb(68, 0, 255)"];

export let singlePage = false;

export const info = {
    firstName: "Tejas",
    lastName: "Vaity",
    // initials: "TV", // the example uses first and last, but feel free to use three or more if you like.
    position: "Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '👨‍🎓',
            text: 'Pursing MS in Computers and Information Science at University of Michigan'
        },
        {
            emoji: '🌎',
            text: 'based in the Michigan, USA'
        },
        {
            emoji: "💼",
            text: "Ex - Associate System Analyst at NSEIT Limited"
        },
        {
            emoji: "📧",
            text: "tejas.vaity3@gmail.com"
        },
        {
            emoji: "📑",
            text: <a href="/tejas_resume.pdf" download="tejas_resume.pdf" style={{ textDecoration: "none", color: "inherit" }}>Download Resume here</a>
            
        }
    ],
    socials: [
        {
            link: "https://github.com/Tej619",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/tejas-vaity-832972147",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://Wa.me/+13132661654",
            icon: "fa fa-whatsapp",
            label: 'whatsapp'
        }

    ],
    bio: "Professional Full Stack Developer with 3.5 years of comprehensive experience in designing and implementing scalable web applications. Specializing in Java backend development and Angular frontend technologies, I excel at creating robust, high-performance software solutions that bridge innovative design with technical excellence.",
    // skills:
    //     {
    //         proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
    //         exposedTo: ['nodejs', 'python', 'adobe illustrator']
    //     }
    // ,
    hobbies: [
        {
            label: 'sketching',
            emoji: '🖌'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'anime',
            emoji: '🎭'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        // {
        //     title: "Project 1",
        //     live: "https://portfolio-liart-two-13.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
        //     source: "https://github.com/Tej619/Portfolio", // this should be a link to the **repository** of the project, where the code is hosted.
        //     image: mock6
        // },
        // {
        //     title: "Project 2",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock2
        // },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ],
}