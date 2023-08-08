import React from "react"
import { FaCode, FaSketch,FaBloggerB } from "react-icons/fa"


const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `i-do-web-deelop-with-htl-cs-and-jaascript`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `I-design-awesome-fronted-web-using-difrerent-tools`,
  },
  {
    id: 3,
    icon: <FaBloggerB className="service-icon" />,
    title: "Tech-Blogging",
    text: `I-a-a-tech-blogger-and-I-write-articles-about-what-i-hae-learnt-which-are-y-blogs-to-also-share-knowldge.`,
  },
]

export default services