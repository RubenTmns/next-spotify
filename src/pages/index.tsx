import Cookies from "cookies";
import { GetServerSideProps } from "next";
import useSWR from "swr";
import { Layout } from "../components/Layout";

type IndexProps = {
  spotifyLoginUrl?: string;
  paused: boolean;
  accessToken: string;
  deviceId: string;
  random: boolean;
};

const Index: React.FC<IndexProps> = ({ spotifyLoginUrl, paused, accessToken, deviceId, random }) => {
  const { data } = useSWR("/api/get-user-info");
  const user = data;

  return (
    <Layout
      random={random}
      accessToken={accessToken}
      deviceId={deviceId}
      paused={paused}
      isLoggedIn={user !== undefined}
      spotifyLoginUrl={spotifyLoginUrl}
    >
      <br />
      <br />
      <br />

      <h1>Welcome in your Better Spotify application </h1>
      <br />
      <p>You can login on top right, ENJOY !</p>
      <p>{user && user.display_name}</p>
    </Layout>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = new Cookies(context.req, context.res);
  const accessToken = cookies.get("spot-next");
  if (accessToken) {
    return {
      props: {},
      redirect: {
        permanent: false,
        destination: "/player",
      },
    };
  } else {
    const spotifyLoginUrl = new URL("https://accounts.spotify.com/authorize");

    spotifyLoginUrl.searchParams.append("client_id", process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || "");
    spotifyLoginUrl.searchParams.append("redirect_uri", process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || "");
    spotifyLoginUrl.searchParams.append("response_type", "code");
    spotifyLoginUrl.searchParams.append(
      "scope",
      [
        "user-read-private",
        "user-read-email",
        "playlist-read-private",
        "user-read-playback-state",
        "user-modify-playback-state",
        "streaming",
      ].join(" "),
    );

    return {
      props: {
        spotifyLoginUrl: spotifyLoginUrl.toString(),
      },
    };
  }
};
