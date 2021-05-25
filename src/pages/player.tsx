import { NextPage, GetServerSidePropsContext } from "next";
import useSpotifyPlayer from "../hooks/useSpotifyPlayer";
import Cookies from "cookies";
import useSWR from "swr";
import { Layout } from "../components/Layout";
import React from "react";
import { SpotifyState, SpotifyUser } from "../types/spotify";
import { pathToFileURL } from "url";
import Album from "../components/Album";

interface Props {
  user: SpotifyUser;
  accessToken: string;
}

// type AlbumType = {
//   id: string;
//   image: string;
//   title: string; result.name
//   soundTimeMs: number; result.tracks.items.map((track) => track.duration_ms).reduce((a,b) => a + b);
//   tracksNb: number; result.total_tracks
//   tracks: Track[];
// };
type AlbumType = {
  id: string;
  image: string;
  title: string;
  // soundTimeMs: number;
  tracksNb: number;
  // tracks: Track[];
};

type Track = {
  // id: string; track.id
  // title: string; track.name
  // numberInList: number; track.track_number
  // soundTimeMs: number;  track.duration_ms
  // artist: string; result.artists[0].name
};

export const play = (accessToken: string, deviceId: string) => {
  return fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      uris: ["spotify:track:4FnWH9l7gxQmrNpfA5AZKP"],
    }),
  });
};

export const pause = (accessToken: string, deviceId: string) => {
  return fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getAlbum = (accessToken: string) => {
  return fetch(`https://api.spotify.com/v1/albums/7tB40pGzj6Tg0HePj2jWZt`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((album) => {
    return album.json();
  });
};


// export const nextTrack = (accessToken: string, currentAlbum: string) => {
//   return fetch(`https://api.spotify.com/v1/albums/${currentAlbum}/tracks`, {
//     method: "PUT",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//     },
//     body: JSON.stringify({
//       uris: [`spotify:album:${currentAlbum}`],
//     }),
//   });
// };

export const nextTrack = (accessToken: string, deviceId: string) => {
  return fetch(`https://api.spotify.com/v1/me/player/next?device_id=${deviceId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

//https://api.spotify.com/v1/albums/{id}/tracks
//https://open.spotify.com/playlist/37i9dQZF1DWXncK9DGeLh7?si=f3268d0933014f8e

const Player: NextPage<Props> = ({ accessToken }) => {
  const { data, error } = useSWR("/api/get-user-info");
  const [paused, setPaused] = React.useState(true);
  const [currentTrack, setCurrentTrack] = React.useState("");
  const tempAlbum: AlbumType = {
    id: "37i9dQZF1DWXncK9DGeLh7",
    image: "https://i.scdn.co/image/ab67616d00001e029db4d4e3550dd76488583195",
    title: "Album gratuit, vol. 6",
    tracksNb: 13,
  };
  const [currentAlbum, setCurrentAlbum] = React.useState(tempAlbum);
  const [deviceId, player] = useSpotifyPlayer(accessToken);

  const album = async (accessToken: string) => {
    return await fetch(`https://api.spotify.com/v1/albums/5lKlFlReHOLShQKyRv6AL9`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setCurrentAlbum({
          id: result.id,
          image: result.images.url[1],
          title: result.name,
          tracksNb: result.total_tracks,
        });
      });
  };

  // type AlbumType = {
  //   id: string;
  //   image: string;
  //   title: string; result.name
  //   soundTimeMs: number; result.tracks.items.map((track) => track.duration_ms).reduce((a,b) => a + b);
  //   tracksNb: number; result.total_tracks
  //   tracks: Track[];
  // };
  // const [currentAlbum, setCurrentAlbum] = React.useState("7tB40pGzj6Tg0HePj2jWZt");
  React.useEffect(() => {
    const playerStateChanged = (state: SpotifyState) => {
      setPaused(state.paused);
      setCurrentTrack(state.track_window.current_track.name);
    };
    if (player) {
      player.addListener("player_state_changed", playerStateChanged);
    }
    return () => {
      if (player) {
        player.removeListener("player_state_changed", playerStateChanged);
      }
    };
  }, [player]);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  const user = data;


  // console.log("ALBUMALBUM", getAlbum(accessToken, currentAlbum));

  // nextTrack(accessToken, deviceId).then((nextTrackResponse) =>
  // console.log(nextTrackResponse.json()));

  // const testVar = nextTrack(accessToken, deviceId);
  // console.log("===================",testVar);
  //console.log("________________", await nextTrack(accessToken, deviceId));

  return (
    <Layout currentTrack={currentTrack} isLoggedIn={true} paused={paused} accessToken={accessToken} deviceId={deviceId}>
      <h1>Player</h1>
      <p>Welcome {user && user.display_name}</p>
      <p>{currentTrack}</p>
      <Album
        id={currentAlbum.id}
        image={currentAlbum.image}
        title={currentAlbum.title}
        tracksNb={currentAlbum.tracksNb}
      />
      {/* //////////////////////////////////////////////////////////
      ///// LE BOUTON EST DEPLACE DANS LE FOOTER + PLAYCOMPONENT////
      ////////////////////////////////////////////////////////// */}
      {/* <button
        onClick={() => {
          paused ? play(accessToken, deviceId) : pause(accessToken, deviceId);
        }}
      >
        {paused ? "play" : "stop"}
      </button> */}
      <button onClick={() => album(accessToken)}>Button</button>
      <img src={`${album}`} alt="" />
      {/* <Footer paused={paused} accessToken={accessToken} deviceId={deviceId} /> */}
    </Layout>
  );
};
export default Player;

export const getServerSideProps = async (context: GetServerSidePropsContext): Promise<unknown> => {
  const cookies = new Cookies(context.req, context.res);
  const accessToken = cookies.get("spot-next");
  if (accessToken) {
    return { props: { accessToken } };
  } else {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};
