
import "./InfoCard.css";

import Episodios from "../Episodios/Episodios";

function InfoCard(props) {
  const { image, name, status, species, origin, location, episode } =
    props.info;


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
    <div className="container text-center gap-1 my-5 ">
      <div className="row gap-1 ">
        <div className="col-sm-8 bg-secondary bg-opacity-25 rounded-top text-start border-secondary border-bottom">
          <h4 className="pt-4">{name}</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            enim porro, quis corrupti nulla provident cum ex vel impedit
            asperiores sunt possimus at quo doloremque et, consectetur
            perspiciatis labore voluptate autem quos, soluta eaque. Distinctio
            beatae cumque repudiandae nobis dolor magni ab reprehenderit quos,
            doloremque animi voluptatum laborum blanditiis corrupti esse quae
            deserunt optio quis! Dolore dolorum cumque quaerat ab quibusdam aut
            quo reprehenderit at accusantium atque suscipit, deleniti reiciendis
            illum aliquid necessitatibus amet numquam repudiandae unde in
            dignissimos omnis tempore ipsam! Iusto amet repellendus error nobis
            numquam ea placeat? Dolore amet non laboriosam quisquam corporis
            incidunt dicta totam laudantium praesentium, natus odit
            consequuntur, sint deleniti ullam doloribus expedita numquam quos
            impedit autem debitis corrupti fuga vitae. Sequi commodi sapiente
            pariatur in explicabo fugit non facilis exercitationem praesentium
            magnam, atque autem hic numquam dolorum perferendis neque
            architecto, illo possimus a aspernatur quas. Ratione, odio!
            Molestiae, quo? Atque sunt sequi, quasi nam debitis delectus iusto
            accusamus, culpa quod eius error mollitia neque id, molestiae maxime
            aliquid. Nisi impedit aperiam possimus excepturi odit, voluptas
            minima dolorum quaerat totam eos hic iusto, molestiae nam labore
            architecto reprehenderit? Voluptatem sequi asperiores exercitationem
            hic, architecto repellat, quaerat quisquam unde soluta, doloribus
            rem laborum sit ipsa?
          </p>
        </div>
        <div className="col-sm bg-secondary bg-opacity-50 shadow-lg rounded-top">
          {" "}
          <div className="">
            <img className="rounded shadow-sm my-3" alt="img" src={image} ></img>
          </div>
          <h4> {name} </h4>{" "}
          <h5>
            {" "}
            {alive} {status}{" "}
          </h5>
        </div>
      </div>
      <div className="row gap-1">
        <div className="col-sm-8 bg-secondary bg-opacity-25 rounded-bottom text-start py-3">
          <div className="bg-opacity-50 border-bottom border-secondary">
            <h4 className="pt-4">Episodios donde apareció {name} </h4>
          </div>

          {episode != null ? (
            episode
              .filter((epi, idx) => idx < 100)
              .map((epi, index) => (
                <ul className="list-group list-group-flush" id={epi.id}>
                  <li className="list-group-item bg-secondary bg-opacity-25 text-white">
                    {" "}
                    <Episodios info={epi} />{" "}
                  </li>
                </ul>
              ))
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>

        <div className="col-sm bg-secondary bg-opacity-25 shadow-lg rounded-bottom text-start py-3 h-25 mh-50">
          <div className="d-flex ">
            <div className="px-5 text-start bg-black bg-opacity-50 border-bottom border-secondary">
              <div style={{ width: "50px" }}>
                <p className=" m-0 py-2 ">Species:</p>
              </div>
            </div>
            <div className="px-5 text-start bg-black bg-opacity-25 flex-fill text-center border-bottom border-secondary">
              <p className="m-0 py-2">{species}</p>{" "}
            </div>
          </div>

          <div className="d-flex ">
            <div className="px-5 text-start bg-black bg-opacity-50 border-bottom border-secondary">
              <div className="" style={{ width: "50px" }}>
                <p className=" m-0 py-2 ">Origin:</p>
              </div>
            </div>
            <div className="px-5 text-start bg-black bg-opacity-25 flex-fill text-center border-bottom border-secondary">
              <p className="m-0 py-2">{origin?.name}</p>
            </div>
          </div>

          <div className="d-flex ">
            <div className="px-5 text-start bg-black bg-opacity-50 border-bottom border-secondary">
              <div className="" style={{ width: "50px" }}>
                <p className=" m-0 py-2 ">Current Location:</p>
              </div>
            </div>
            <div className="d-flex px-5 bg-black bg-opacity-25 flex-fill border-bottom border-secondary justify-content-center align-items-center">
              <p className="m-0 ">{location?.name}</p>
            </div>
          </div>

          <li className="list-group-item text-start bg-black bg-opacity-25 px-5"></li>

          <div className="px-5"></div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
