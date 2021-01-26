import Button from "../button";

const webs = [
  {
    id: 1,
    image_url:
      "https://images.unsplash.com/photo-1516633630673-67bbad747022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description:
      "esta es una descripcion acerca de la pagina realizada, click abajo para ir a la web.",
    url: "",
  },
  {
    id: 2,
    image_url:
      "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description:
      "esta es una descripcion acerca de la pagina realizada, click abajo para ir a la web.",
    url: "",
  },
  {
    id: 3,
    image_url:
      "https://images.unsplash.com/photo-1496046744122-2328018d60b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1364&q=80",
    description:
      "esta es una descripcion acerca de la pagina realizada, click abajo para ir a la web.",
    url: "",
  },
];

const Galery = () => {
  return (
    <div className="galery">
      <h2>Proyectos</h2>
      <br />
      {webs.map(({ id, image_url, description, url }) => (
        <li className="card" key={id}>
          <div className="top">
            <img src={image_url} alt="" />
          </div>
          <div className="mid">{description}</div>
          <div className="bottom">
            <Button url={url} />
          </div>
        </li>
      ))}

      <style jsx>
        {`
          .galery {
            width: 100vw;
            padding: 2em;
            margin: 3em 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;
          }
          h2 {
            width: 100vw;
            text-align: center;
          }

          // ===========================================================================
          .card {
            width: 250px;
            height: 300px;
            border: 0.5em solid #ebebeb;
            border-radius: 1em;
            padding: 1em;
            margin: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }

          // h4 {
          //   color: silver;
          // }
          // ======================================================================================
          .top {
            flex: 5;
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 100%;
            border-radius: 0.5em;
          }
          // ======================================================================================
          .mid {
            flex: 4;
            width: 100%;
            height: 100%;
            margin: 5px 0;
          }
          // =======================================================================================
          .bottom {
            flex: 1;
            width: 100%;
            height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Galery;
