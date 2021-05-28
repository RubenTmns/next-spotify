import React from "react";
import { pause, play, nextTrackButton, previousTrackButton, songSlider } from "../pages/player";

const PlayComponent: React.FC<{
  paused?: boolean;
  accessToken?: string;
  deviceId?: string;
  trackId?: string;
  songPosition?: number;
  maxDuration?: number;
}> = (props) => {
  const [songPosition, setSongPosition] = React.useState<number|undefined>(props.songPosition);
  return (
    <>
      <div className="player">
        <div className="FirstRow row">
          <div className="col-sm-3 d-none d-md-block"></div>
          <div className="col-md-1 col-2">
            <i
              className="ButtonRandom fa fa-random"
              aria-hidden="true"
              onClick={() => nextTrackButton(props.accessToken, props.deviceId)}
            ></i>
          </div>
          <div className="col-md-1 col-2">
            <i
              onClick={() => previousTrackButton(props.accessToken, props.deviceId)}
              className="ButtonNextLeft fa fa-step-backward"
              aria-hidden="true"
            ></i>
          </div>
          <div className="col-md-2 col-4">
            <span
              className="ButtonPlayAndPause"
              onClick={() => {
                props.paused
                  ? play(props.accessToken, props.deviceId, props.trackId)
                  : pause(props.accessToken, props.deviceId);
              }}
            >
              {props.paused ? (
                <i className="fa fa-play-circle" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-pause-circle" aria-hidden="true"></i>
              )}
            </span>
          </div>
          <div className="col-md-1 col-2">
            <i
              className="ButtonNextRight fa fa-step-forward"
              aria-hidden="true"
              onClick={() => nextTrackButton(props.accessToken, props.deviceId)}
            ></i>
          </div>
          <div className="col-md-1 col-2">
            <i
              className="ButtonRepeat fa fa-repeat"
              aria-hidden="true"
              onClick={() => nextTrackButton(props.accessToken, props.deviceId)}
            ></i>
          </div>

          <div className="col-sm-3 d-none d-md-block"></div>
        </div>
        <div className="SecondRow row-md d-none d-md-block">
          <div className="range">
            <input
              onClick={() => songSlider(props.accessToken, songPosition, props.deviceId)}
              value={songPosition}
              min={0}
              max={props.maxDuration}
              step="1000"
              type="range"
              className="form-range"
              id="customRange1"
              onChange={(e) => setSongPosition(parseInt(e.target.value))}
            />
          </div>
          --------------------------------------slider--------------------------------------
        </div>
      </div>
    </>
  );
};

export default PlayComponent;

//37i9dQZF1DWXncK9DGeLh7
