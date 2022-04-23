import React from "react";

function Navbar() {
  const urls = {
    githubUrl: "https://github.com/Abbosbek-cloud?tab=repositories",
    telegram: "https://t.me/abeksulaymonov",
    linkedInd: "https://www.linkedin.com/in/abek-walker-8b6230201/",
  };
  const style = {
    textDecoration: "none",
    fontSize: "20px",
  };
  return (
    <div className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <a href="/" className="navbar-brand d-flex">
          <span>News Website</span>
        </a>
        <div className="wrapper">
          <a className="linkGit" style={style} href={urls.githubUrl}>
            <i class="bi bi-github colored"></i>
          </a>
          <a className="linkGit" style={style} href={urls.linkedInd}>
            <i class="bi bi-linkedin colored"></i>
          </a>
          <a className="linkGit" style={style} href={urls.telegram}>
            <i class="bi bi-telegram colored"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
