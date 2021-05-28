import React from "react";
import { pause, play } from "../pages/player";

const Album: React.FC<any> = (props) => {
  // setCurrentTrackId;
  // console.log("------------TRACK ID---------", {track.id});

  const totalDuration =
    Math.floor((props.duration_ms / (1000 * 60 * 60)) % 24) >= 1
      ? Math.floor((props.duration_ms / (1000 * 60 * 60)) % 24) +
        "h" +
        (Math.floor(props.duration_ms / (1000 * 60)) % 60) +
        "min"
      : (props.duration_ms % 60000) / 1000 < 10
      ? Math.floor(props.duration_ms / 60000) + "min" + "0" + ((props.duration_ms % 60000) / 1000).toFixed(0) + "s"
      : Math.floor(props.duration_ms / 60000) + "min" + ((props.duration_ms % 60000) / 1000).toFixed(0) + "s";

  return (
    <div>
      <div>{props.albumDisplay}</div>
      <h1>{props.name}</h1>
      <img src={props.image} className="rounded img-fluid imageAlbumGrid" />
      <h6>{props.tracks.length} tracks</h6>
      <table className="table table-songs">
        <thead>
          <tr>
            <th></th>
            <th>Song</th>
            <th>
              <i className="fa fa-clock-o"></i>
            </th>
          </tr>
        </thead>
        {props.tracks ? (
          props.tracks.map((track: any) => {
            return (
              <tbody>
                <tr>
                  <td>
                    <span
                      className="ButtonPlayAndPauseGrid"
                      onClick={() => {
                        props.paused
                          ? play(props.accessToken, props.deviceId, track.id)
                          : pause(props.accessToken, props.deviceId);
                        //props.fn(track.id);
                      }}
                    >
                      {props.paused ? (
                        <i className="fa fa-play-circle" aria-hidden="true"></i>
                      ) : (
                        <i className="fa fa-pause-circle" aria-hidden="true"></i>
                      )}
                    </span>
                  </td>
                  {/* <td>
                      <i className="fa fa-check"></i>
                    </td> */}
                  <td>{track.name}</td>
                  <td className="secondary-info">
                    {Math.floor(track.duration_ms / 60000)}:
                    {(track.duration_ms % 60000) / 1000 < 10
                      ? "0" + ((track.duration_ms % 60000) / 1000).toFixed(0)
                      : ((track.duration_ms % 60000) / 1000).toFixed(0)}
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <div></div>
        )}
      </table>
      <div>
        <h6>Sound time : {totalDuration}</h6>
      </div>
    </div>
  );
};

export default Album;
