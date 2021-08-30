import React from 'react'
import img_avatar from '../img/img_avatar.png'
const Contact = ({name, place, phone}) => {
    return (
        <div>
            <div className="card">
                    <img src={img_avatar} alt="img" style={{width: "100%", borderRadius: "border-radius: 5px 5px 0 0"}}/>
                    <div className="container">
                        <h2 style={{color: "teal", fontWeight: "bolder", marginTop: "5px"}}><b>{name}</b></h2>
                        <p style={{fontFamily: "arial", marginTop:"5px", marginBottom: "2px"}}><strong>({place})</strong></p>
                        <h3 style={{marginBottom:0, marginTop: 0}}><b>{phone}</b></h3>
                    </div>
                    <div className="contact-footer"> </div>
            </div>
        </div>
    )
}

export default Contact
