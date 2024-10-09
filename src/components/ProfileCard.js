import React from "react";
import "../styles/ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="profile-card">
      <h1 className="profile-name">{props.name}</h1>
      <img  className="profile-img" src={props.src} alt="perfil"/>
      <p className="profile-description">{props.description}</p>
    </div>
  );
}

export default ProfileCard;
