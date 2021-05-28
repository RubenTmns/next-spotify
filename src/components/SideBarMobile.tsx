import React from "react";
import Link from "next/link";

const SideBarMobile: React.FC = () => {
  return (
    <div className="SideBarMobile" style={{ width: 60 }}>
      <div className="container-fluid ">
        <div className="row">
          <Link href="#">
            <i className="logoMobileTop fa fa-spotify"></i>
          </Link>
        </div>
        <div className="row">
          <Link href="#">
            <i className="logoMobile fa fa-search"></i>
          </Link>
        </div>
        <div className="row">
          <Link href="#">
            <i className="logoMobileBars fa fa-plus"></i>
          </Link>
        </div>
        <div className="row">
          <Link href="#">
            <i className="logoMobileBars fa fa-bars"></i>
          </Link>
        </div>
        <div className="row">
          <Link href="#">
            <i className="logoMobile fa fa-heart"></i>
          </Link>
        </div>
        {/* <section className="col-xs-11 clean-paddings">
      <nav>
        <div className="top-nav container-fluid">
          <ul className="nav navbar-nav">
            <li><a href="#">Playlists</a></li>
            <li className="active"><a href="#">Songs</a></li>
            <li><a href="#">Albums</a></li> 
            <li><a href="#">Artists</a></li> 
          </ul>
        </div>
      </nav>
      <table className="table table-songs">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Song</th>
            <th>Artist</th>
            <th>Album</th>
            <th><i className="fa fa-calendar-o"></i></th>
            <th><i className="fa fa-clock-o"></i></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a href="#" className="play-btn fa-stack fa-lg">
                <i className="fa fa-play fa-stack-1x"></i>
                <i className="fa fa-circle-thin fa-stack-2x"></i>
              </a>
            </td>
            <td><i className="fa fa-check"></i></td>
            <td>Memory</td>
            <td>Sugarcult</td>
            <td>Palm Trees and Power Lines</td>
            <td className="secondary-info">2016-07-23</td>
            <td className="secondary-info">3:54</td>
          </tr>
          <tr>
            <td>
              <a href="#" className="play-btn fa-stack fa-lg">
                <i className="fa fa-play fa-stack-1x"></i>
                <i className="fa fa-circle-thin fa-stack-2x"></i>
              </a>
            </td>
            <td><i className="fa fa-check"></i></td>
            <td>Memory</td>
            <td>Sugarcult</td>
            <td>Palm Trees and Power Lines</td>
            <td className="secondary-info">2016-07-23</td>
            <td className="secondary-info">3:54</td>
          </tr>
          <tr className="active">
            <td>
              <a href="#" className="play-btn fa-stack fa-lg">
                <i className="fa fa-play fa-stack-1x"></i>
                <i className="fa fa-circle-thin fa-stack-2x"></i>
              </a>
            </td>
            <td><i className="fa fa-check"></i></td>
            <td>Memory</td>
            <td>Sugarcult</td>
            <td>Palm Trees and Power Lines</td>
            <td className="secondary-info">2016-07-23</td>
            <td className="secondary-info">3:54</td>
          </tr>
          <tr>
            <td>
              <a href="#" className="play-btn fa-stack fa-lg">
                <i className="fa fa-play fa-stack-1x"></i>
                <i className="fa fa-circle-thin fa-stack-2x"></i>
              </a>
            </td>
            <td><i className="fa fa-check"></i></td>
            <td>Memory</td>
            <td>Sugarcult</td>
            <td>Palm Trees and Power Lines</td>
            <td className="secondary-info">2016-07-23</td>
            <td className="secondary-info">3:54</td>
          </tr>
        </tbody>
      </table>
    </section> */}
      </div>
    </div>
  );

  {
    /* <a href="/" className="divimageSpotify">
        <img
          className="imageSpotify"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt=""
        />
      </a>
      <br /> */
  }
  {
    /* <ul className="nav nav-pills flex-column mb-auto">
        <li className="listeSideBar">
          <a href="#" className="listemenu" aria-current="page">
            <i className="fa fa-home">
              <i className="MenuName"> *Accueil</i>
            </i>
          </a>
        </li>
        <li className="listeSideBar">
          <a href="#" className="listemenu">
            <i className="fa fa-search">
              <i className="MenuName"> *Rechercher</i>
            </i>
          </a>
        </li>
        <li className="listeSideBar">
          <a href="#" className="listemenu">
            <i className="fa fa-bars ">
              <i className="MenuName"> *Biliothèque</i>
            </i>
          </a>
        </li>
        <br />
        <li className="listeSideBar">
          <a href="#" className="listemenu">
            <i className="fa fa-plus-square">
              <i className="MenuName"> Créer une playlist</i>
            </i>
          </a>
        </li>
        <li className="listeSideBar">
          <a href="#" className="listemenu">
            <i className="fa fa-heart">
              {" "}
              <i className="MenuName"> Titre likés</i>
            </i>
          </a>
        </li>
        <hr />
      </ul> */
  }
};
export default SideBarMobile;
