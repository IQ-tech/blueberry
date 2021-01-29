import React from "react";

const FistLetterIcon = () => {
  
}

const DeskUsernameButton = () => {

}

const LoggedInNavigation = ({ username }) => {
  return (
    <div className="header-classic__logged-in-navigation">
      <div className="header-classic__logged-in-desk-name-holder">{username}</div>
      <div className="header-classic__logged-menu">
        <p>cebola</p>
      </div>
    </div>
  );
};

export default LoggedInNavigation;
