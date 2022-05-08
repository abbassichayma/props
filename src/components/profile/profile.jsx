import React from 'react'
import PropTypes from 'prop-types'
function Profile(props) {
    
  return (
    <div>
        
         {props.children}
        <p style={{color:"green",fontSize:"35px"}}>Full name : {props.fullName}</p>
        <p style={{color:"green",fontSize:"30px"}}>Bio : {props.bio}</p>
        <p style={{color:"green",fontSize:"25px"}}>Profession : {props.profession}</p>
       <button onClick={props.name} style={{color:"black",fontSize:"20px"}}>imput your name</button>
      
    </div>
  )
}
Profile.propsTypes={
    fullName :PropTypes.number,
    bio:PropTypes.string,
    profession:PropTypes.string
}
export default Profile
Profile.defaultProps={
    fullName :"imput your name",
    bio :"imput your bio",
    profession:"imput your profession"
};