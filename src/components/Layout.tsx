import React from "react";
import Head from "next/head";
import NavBar from "./NavBar";
import SideBar from "./sidenavbar";
import SideBarMobile from "./SideBarMobile";
import Footer from "./Footer";

type Props = {
  children?: React.ReactNode;
  isLoggedIn?: boolean;
  spotifyLoginUrl?: string;
  paused?: boolean;
  accessToken?: string;
  deviceId?: string;
  currentTrackId?: string;
  currentTrackName?: string;
  trackId?: string;
  songPosition?: number;
  maxDuration?: number;
  currentAlbumSmallImage?: string;
  setFnArrayOfAlbumsImages?: any;
  setFnArrayOfAlbumsIds?: any;
  setFnOneAlbumSelected?: any;
};

export const Layout: React.FC<Props> = ({
  children,
  isLoggedIn,
  spotifyLoginUrl,
  paused,
  accessToken,
  deviceId,
  currentTrackId,
  currentTrackName,
  trackId,
  songPosition,
  maxDuration,
  currentAlbumSmallImage,
  setFnArrayOfAlbumsImages,
  setFnArrayOfAlbumsIds,
  setFnOneAlbumSelected
}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
          crossOrigin="anonymous"
        ></link>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@900&family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
        <title>Better Spotify</title>
        <link rel="icon" type="image/png" href="/images/faviconSpotify.png" />
      </Head>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 d-none d-sm-block">
            <SideBar />
          </div>
          <div className="col-2 d-sm-none">
            <SideBarMobile />
          </div>
          <div className="col-10">
            <NavBar accessToken={accessToken} isLoggedIn={isLoggedIn} spotifyLoginUrl={spotifyLoginUrl} setFnArrayOfAlbumsImages={setFnArrayOfAlbumsImages} setFnArrayOfAlbumsIds={setFnArrayOfAlbumsIds} setFnOneAlbumSelected={setFnOneAlbumSelected}/>
            <main className="mainBody d-none d-sm-block">{children}</main>
            <main className="mainBodyMobile d-sm-none">{children}</main>
          </div>
        </div>
      </div>

      <Footer
        songPosition={songPosition}
        currentTrackId={currentTrackId}
        currentTrackName={currentTrackName}
        paused={paused}
        accessToken={accessToken}
        deviceId={deviceId}
        trackId={trackId}
        volumePercent={songPosition}
        maxDuration={maxDuration}
        currentAlbumSmallImage={currentAlbumSmallImage}
      />
    </>
  );
};

export default Layout;
