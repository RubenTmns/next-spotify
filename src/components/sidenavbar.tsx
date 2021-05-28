import React from "react";
const SideBar: React.FC = () => {
  return (
    <div className="SideBar" style={{ width: 200}}>
      <a href="/" className="divimageSpotify">
        <img
          className="imageSpotify"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt=""
        />
      </a>
      <br />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="listeSideBar">
          <a href="#" className="listemenu" aria-current="page">
            <i className="fa fa-home">
              <span className="MenuName"> Accueil</span>
            </i>
          </a>
        </li>
        <li className="listeSideBar">
          <a href="#" className="listemenu">
            <i className="fa fa-search">
              <span className="MenuName"> Rechercher</span>
            </i>
          </a>
        </li>
        <li className="listeSideBar">
          <a href="#" className="listemenu">
            <i className="fa fa-bars ">
              <span className="MenuName"> Biliothèque</span>
            </i>
          </a>
        </li>
        <br />
        <li className="listeSideBar">
          <a href="#" className="listemenu">
            <i className="fa fa-plus-square">
              <span className="MenuName"> Créer une playlist</span>
            </i>
          </a>
        </li>
        <li className="listeSideBar">
          <a href="#" className="listemenu">
            <i className="fa fa-heart">
              {" "}
              <span className="MenuName"> Titre likés</span>
            </i>
          </a>
        </li>
        <hr />
      </ul>
    </div>
  );
};
export default SideBar;
