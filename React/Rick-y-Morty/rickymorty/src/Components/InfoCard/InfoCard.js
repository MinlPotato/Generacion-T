import React from "react";
import "./InfoCard.css";

function InfoCard(props) {
  console.log(props.info);
  const { image, name, status, species, origin , location } = props.info;

  console.log(origin);

  let alive = "";

  if (status === "Alive") {
    alive = "🟢";
  } else if (status === "unknown") {
    alive = "🟠";
  } else {
    alive = "🔴";
  }

  console.log(props.info);
  return (
    <div className="container text-center gap-1 ">
      <div className="row gap-1 ">
        <div className="col-sm bg-secondary bg-opacity-25 rounded ">
          col-sm-4
        </div>
        <div className="col-sm-4 bg-secondary bg-opacity-50 shadow-lg rounded-top">
          {" "}
          <div className="">
            <img className="rounded shadow-sm my-3" src={image}></img>
          </div>
          <h4> {name} </h4>{" "}
          <h5>
            {" "}
            {alive} {status}{" "}
          </h5>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">col-sm</div>
        <div className="col-sm">col-sm</div>
        <div className="col-sm bg-secondary bg-opacity-25 shadow-lg rounded-bottom text-start">
          <div className="d-flex ">
            <div className="px-5 text-start bg-black bg-opacity-50 ">
              <div style={{ width: "50px" }}>
                <p className=" m-0 py-2 ">Species:</p>
              </div>
            </div>
            <div className="px-5 text-start bg-black bg-opacity-25 flex-fill text-center">
              <p className="m-0 py-2">{species}</p>{" "}
            </div>
          </div>

          <div className="d-flex ">
            <div className="px-5 text-start bg-black bg-opacity-50">
              <div className="" style={{ width: "50px" }}>
                <p className=" m-0 py-2 ">Origin:</p>
              </div>
            </div>
            <div className="px-5 text-start bg-black bg-opacity-25 flex-fill text-center">
              {/* <p className="m-0 py-2">{origin}</p>{" "} */}
            </div>
          </div>

          <li className="list-group-item text-start bg-black bg-opacity-25 px-5"></li>

          <div className="px-5">
            {/* <p>Origin: {origin.name}</p> */}
            {/* <p>Current Location: {location.name} </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
