import React from "react";
import PlayComponent from "./PlayComponent";
import { volumeSlider } from "../pages/player";

const Footer: React.FC<{
  paused?: boolean;
  accessToken?: string;
  deviceId?: string;
  currentTrackId?: string;
  currentTrackName?: string;
  currentAlbumSmallImage?: string;
  trackId?: string;
  volumePercent?: number;
  songPosition?: number;
  maxDuration?: number;
}> = (props) => {
  const [volume, setVolume] = React.useState<number>(0);
  return (
    <>
      <footer className="fixed-bottom w-100 greenSF" style={{ height: 110 }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-1 d-none d-md-block">
              <img className="FooterAlignMiddleImage" src={props.currentAlbumSmallImage}/></div>
            <div className="col-md-2 d-none d-md-block FooterAlignMiddleText">
              <p>{props.currentTrackName}</p>
            </div>
            <div className="col-md-6 col-12">
              <PlayComponent
                paused={props.paused}
                accessToken={props.accessToken}
                deviceId={props.deviceId}
                trackId={props.trackId}
                songPosition={props.songPosition}
                maxDuration={props.maxDuration}
              />
            </div>
            <div className="col-md-1 d-none d-md-block"><i className="fa fa-volume-up FooterAlignMiddleVolumeIcon"/></div>
            <div className="col-md-2 d-none d-md-block">
              
              <label className="form-label" htmlFor="customRange3">
              </label>
              <div className="range FooterAlignMiddleVolume">
                <input
                  onClick={() => volumeSlider(props.accessToken, volume, props.deviceId)}
                  value={volume}
                  type="range"
                  className="form-range"
                  id="customRange3"
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                />
              </div>
              {/* <div className="col-md-1 d-none d-md-block">
              <i className="fa fa-volume-up"/></div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
