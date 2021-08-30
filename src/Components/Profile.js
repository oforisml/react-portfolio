import React from 'react'
import { FaPhone, FaHome } from 'react-icons/fa';
import { AiFillLinkedin, AiFillMail } from 'react-icons/ai'
export const Profile = () => {
    return (
        <div className="body">
            <h2  style={{color: "teal"}}>Introduction</h2>
        <p>
        I am a graduate of the University of Cape Coast who pursued a four-year Bachelor of Science Computer Science from the year 2016 to 2020. <br/>
        I served my nation in the National Service program at the Section of E-Learning and Knowledge Management under the Directorate of Information 
        Communication and Technology of the University of Cape Coast.
        I am well vested with both programming skills  and soft skills necessary for working in the cooperate Information Technology Industry. I am passionate of writing reusable computer codes and modules to solve real world programs which aims at the <br/>optimization of work in the world.
        </p>

        <div className="personal-profile">
            <h2 style={{color: "teal"}}>Personal Profile</h2>
            <p><strong>Name:</strong> 		    <span>Samuel Ofori</span></p>
            <p><strong>Gender:</strong>		    <span>Male</span></p>
            <p><strong>Nationality:</strong>	    <span>Ghanaian</span></p>
            <p><strong>Languages:</strong>	    <span>English, French, Twi</span></p>
            <div className="icons-text">
                <FaPhone className="icons"/><p >+233(0)547013414<br/>+233(0)506 951 440 </p>
                <AiFillMail className="icons"/><a href="mailto:oforisml@gmail.com">oforisml@gmail.com</a> <br/>
                <AiFillLinkedin className="icons"/><a href="https://www.linkedin.com/in/samuel-ofori-770074111" target="_blank" rel="noreferrer">linkedin.com/in/samuel-ofori-770074111/</a>  
                <FaHome className="icons"/> <p>P. O. Box, 9. Berekum - Bono Region</p>
            </div> 
        </div>

</div>
    )
}

export default Profile;