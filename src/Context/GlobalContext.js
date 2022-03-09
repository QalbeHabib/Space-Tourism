
import { images } from '../Assets/Images/index'


const PlantData = [
    {
        
        title: "MOON",
        destIndex: 0,
        subTitle: "Pick your destination",
        desctiption: "See our planet as you have never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you are there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: '384,400 km',
        time: '3 days',
        url: images.Moon,
        bg:images.destinationbg
       
    },

    {
        
        title: "MARS",
        destIndex: 1,
        subTitle: "Pick your destination",
        desctiption: ' Do not forget to pack your hiking boots. You will need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. Its two and a half times the size of Everest!',
        distance: '225 MIL. km',
        time: '9 months',
        url:images.Mars
    },

    {
        
        title: "EUROPA",
        destIndex: 2,
        subTitle: "Pick your destination",
        desctiption: ' The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lovers dream. With an icy surface, its perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL. km',
        time: '3 years',
        url:images.Europa
    },

    {
        
        title: "TITAN",
        destIndex: 3,
        subTitle: "Pick your destination",
        desctiption: ' The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 BIL. km',
        time: '7 years',
        url:images.Titan
    },
]


export const crewData = [
    {
        id:0,
        title: 'Douglas Hurley',
        subtitle: 'Commander',
        description: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        url:images.Douglas
    },
    {
        id:1,
        title: 'SHUTTLEWORTH',
        subtitle: 'Mission Specialist ',
        description: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        url:images.Mark
    },
    {
        id:2,
        title: 'Anousheh Ansari',
        subtitle: 'Flight Engineer',
        description: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        url:images.Anousheh
    },
    {
        id:3,
        title: 'Victor Glover',
        subtitle: 'PILOT',
        description: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        url:images.Victor
    },
  
]

export const LaunchData = [
    {   id:0,
        title: 'LAUNCH',
        description: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, its quite an awe-inspiring sight on the launch pad!',
        url:images.LaunchVehicle
    },
    {   id:1,
        title: 'SPACEPORT',
        description: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
        url:images.SpacePort
    },
    {   id:2,
        title: 'SPACE CAPSULE',
        description: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth atmosphere without wings. Our capsule is where you will spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
        url:images.SpaceCapsule
    },
]


export const GlobalContext = PlantData;

