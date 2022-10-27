import React from 'react';
import './footer.css';
import { MdKeyboardArrowUp } from "react-icons/md";

function Footer (props){

  return (
    <footer className="footer">
      <div className="btn-container">
        <button className="btn">{props.buttonText}</button>
        <MdKeyboardArrowUp className="btn-icon"/>
      </div>

      <div className="description-container">
        <strong className="title-description">{props.title}</strong>
        <p className="description">{props.description}</p>

        <a className="text-github" href={props.githubLink}>{props.textGithub}</a>

      </div>

      <div className="project-name">
        <strong>{props.projectName}</strong>
      </div>
    </footer>
  );
}
export default Footer;
