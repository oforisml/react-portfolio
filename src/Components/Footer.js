import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className="footer">
            <a href="mailto:oforisml@gmail.com"><AiFillMail/></a>
            <a href="https://www.linkedin.com/in/samuel-ofori-770074111" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
            <br />
            <br />
            
            <span className="copyright">
                <Link exact to="/"  >&copy;2021 Samuel Ofori</Link>
            </span>   
        </div>
    )
}

 export default Footer
