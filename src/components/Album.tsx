import React from "react";

type AlbumType = {
  id: string;
  image: string;
  title: string;
  // soundTimeMs: number;
  tracksNb: number;
  // tracks: Track[];
};

// type Track = {
//   id: string;
//   title: string;
//   numberInList: number;
//   soundTimeMs: number;
//   artist: string;
// };

const Album: React.FC<AlbumType> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} />
      <p>nombre de titre : {props.tracksNb}</p>
    </div>
  );
};

export default Album;
