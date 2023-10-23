

// ===========for hero card data===========
import { BsRobot, BsFillFileEarmarkCodeFill } from "react-icons/bs";
import { FaLaptopCode, FaBullhorn } from "react-icons/fa";



export const navLinks = [
    {
        id: 1,
        title: "home",
        path: "/"
    },
    {
        id: 2,
        title: "about",
        path: "/about"
    },
    {
        id: 3,
        title: "services",
        path: "/services"
    },
    {
        id: 4,
        title: "products",
        path: "/products"
    },
    {
        id: 5,
        title: "contact",
        path: "/contact"
    },
]

export const heroCardData = [
  {
    id: 1,
    icon: <BsRobot />,
    firstTitle: "AI Application",
    lastTitle: "Development",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    firstTitle: "Web",
    lastTitle: "Development",
  },
  {
    id: 3,
    icon: <BsFillFileEarmarkCodeFill />,
    firstTitle: "Web Application",
    lastTitle: "Development",
  },
  {
    id: 4,
    icon: <FaBullhorn />,
    firstTitle: "Digital",
    lastTitle: "Marketing",
  },
];
