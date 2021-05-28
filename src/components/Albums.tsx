import React from "react";

const Albums: React.FC<any> = (props) => {
  return (
    <>
    <h3>Listened to a lot lately :</h3>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <img
              className="rounded img-fluid imageAlbumGrid"
              src={props.arrayOfAlbumsImages[0]}
              onClick={() => {
                // props.oneAlbumSelected = true;
                props.setFnOneAlbumSelected(true);
                // props.currentAlbumId = props.arrayOfAlbumsIds[0];
                props.setFnCurrentAlbumId(props.arrayOfAlbumsIds[0]);
              }}
            ></img>
          </div>
          <div className="col-sm-4">
            <img
              className="rounded img-fluid imageAlbumGrid"
              src={props.arrayOfAlbumsImages[1]}
              onClick={() => {
                props.setFnOneAlbumSelected(true);
                props.setFnCurrentAlbumId(props.arrayOfAlbumsIds[1]);
              }}
            ></img>
          </div>
          <div className="col-sm-4">
            <img
              className="rounded img-fluid imageAlbumGrid"
              src={props.arrayOfAlbumsImages[2]}
              onClick={() => {
                props.setFnOneAlbumSelected(true);
                props.setFnCurrentAlbumId(props.arrayOfAlbumsIds[2]);
              }}
            ></img>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <img
              className="rounded img-fluid imageAlbumGrid"
              src={props.arrayOfAlbumsImages[3]}
              onClick={() => {
                props.setFnOneAlbumSelected(true);
                props.setFnCurrentAlbumId(props.arrayOfAlbumsIds[3]);
              }}
            ></img>
          </div>
          <div className="col-sm-4">
            <img
              className="rounded img-fluid imageAlbumGrid"
              src={props.arrayOfAlbumsImages[4]}
              onClick={() => {
                props.setFnOneAlbumSelected(true);
                props.setFnCurrentAlbumId(props.arrayOfAlbumsIds[4]);
              }}
            ></img>
          </div>
          <div className="col-sm-4">
            <img
              className="rounded img-fluid imageAlbumGrid"
              src={props.arrayOfAlbumsImages[5]}
              onClick={() => {
                props.setFnOneAlbumSelected(true);
                props.setFnCurrentAlbumId(props.arrayOfAlbumsIds[5]);
              }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );

  // const rowOrNotRow = (imgUrl: string, i: number) => {
  //   if (i % 3 === 0)
  //     return (<>
  //       { i % 3 ? null : <div className="row">}
  //       <div className="col-4 ">
  //         <img
  //           className="rounded img-fluid imageAlbumGrid"
  //           src={imgUrl}
  //           onClick={() => {
  //             props.oneAlbumSelected = true;
  //             props.currentAlbumId = props.arrayOfAlbumsIds[i];
  //           }}
  //         ></img>
  //       </div>

  //       :
  //       <div className="row">
  //         <div className="col-4">
  //           <img
  //             className="rounded img-fluid imageAlbumGrid"
  //             src={imgUrl}
  //             onClick={() => {
  //               props.oneAlbumSelected = true;
  //               props.currentAlbumId = props.arrayOfAlbumsIds[i];
  //             }}
  //           ></img>
  //         </div>
  //       </div>

  //     );
  //   else
  //     return (
  //       <div className="col-4 ">
  //         <img
  //           className="rounded img-fluid imageAlbumGrid"
  //           src={imgUrl}
  //           onClick={() => {
  //             props.oneAlbumSelected = true;
  //             props.currentAlbumId = props.arrayOfAlbumsIds[i];
  //           }}
  //         ></img>
  //       </div>
  //     );
  // };

  // const tableOfAlbums = props.arrayOfAlbumsImages.reduce((accumulator: any, currentValue: any, index: any) => {
  //   console.log("**************currentValue****************", currentValue);
  //   console.log("**************rowOrNotRow(currentValue,index)****************", rowOrNotRow(currentValue, index));
  //   console.log("**************accumulator****************", accumulator);
  //   return (
  //     <>
  //       {" "}
  //       {accumulator} {rowOrNotRow(currentValue, index)}{" "}
  //     </>
  //   );
  // }, <div></div>);
  // console.log("---------------arrayOfAlbumsImages---------------", props.arrayOfAlbumsImages);

  // console.log("---------------tableOfAlbums---------------", tableOfAlbums);
  // return <div className="container-fluid justify-content-center">{tableOfAlbums}</div>;
};

export default Albums;
