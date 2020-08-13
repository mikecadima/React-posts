import React from 'react'

const Links = ({theDate, children})=>{

    let bookmarks = [
        {url:'http://google.com', text: "Google"},
        {url:'http://digitalcrafts.com', text: "Digital Crafts"},
        {url:'http://godaddy.com', text: "Godaddy"},

    ]
    return (
        <div>
            <ul>
                <li><a href="http://localhost:3000/">Home</a></li>
                <li><a href="https://www.linkedin.com/in/michael-cadima-89321a156/">About</a></li>
                <li><a href="http://www.google.com/">Contact</a></li>

            </ul>
        </div>
    )
}

export default Links;