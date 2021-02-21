const webs = [
  {
    id: 1,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/portada-portfolio.jpg?alt=media&token=fcc58a63-1720-4043-ad94-3db6ed9cda42",
    description: "El primer portfolio web que hice, orientado al diseño ux/ui.",
    url: "https://jose-rios.netlify.app/#/",
  },
  {
    id: 2,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/zanle-group-portada.jpg?alt=media&token=329e26d9-d08b-454a-a181-669e6cc61f13",
    description: "Zanle Group, web para freelance, dirigida a Latino America",
    url: "https://zanle-group.vercel.app/",
  },

  {
    id: 3,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-horacio-muebles.jpg?alt=media&token=4ca6934f-b088-49a0-9a9a-723bb05b1db5",
    description:
      "Muebles-Horacio, una tienda digital, de caracter informativa, en la que el publico contacta al vendedor.",
    url: "https://www.muebles.dancotll.com/",
  },
  {
    id: 4,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-webuildwebz.jpg?alt=media&token=cca05d1d-42e8-445e-a346-21c6d4686bfc",
    description:
      "WeBuildWebz, es una plataforma para buscar clientes, proyecto en colaboracion con el Backend, Leandro Cotti.",
    url: "https://www.webuildwebz.com/",
  },
  {
    id: 5,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/we-chatbot-banner.png?alt=media&token=714cb48c-c71f-44c4-b79f-91c87c13a209",
    description:
      "We-chatbot, es una extencion de la web principal, WeBuildWebz, donde empleamos este servicio para nuestros clientes.",
    url: "https://www.chatbot.webuildwebz.com/",
  },
  {
    id: 6,
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/sql-demos-3f601.appspot.com/o/image.jpg?alt=media&token=0ee2a779-1a7d-4a2f-9365-ee2aecc05aeb",
    description:
      "Globi, es un proyecto de origen Mexicano, encuentra su dispocion en el servicio de taxi, mediante una app, proyecto en proceso de formacion.",
    url: "https://www.globy.dancotll.com/",
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
            <a href={url} target="_blank" rel="noopener noreferrer">
              Visitar
            </a>
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
            width: 300px;
            height: 400px;
            border: 0.3em solid #ebebeb;
            border-radius: 1em;
            padding: 1em;
            margin: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
          }

          // ======================================================================================
          .top {
            flex: 5;
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 196px;
            border-radius: 0.5em;
            object-fit: cover;
          }
          // ======================================================================================
          .mid {
            flex: 4;
            width: 100%;
            height: 100%;
            margin: 0.5em 0;
          }
          // =======================================================================================
          .bottom {
            flex: 1;
            width: 100%;
            height: 100%;
            background: #f8ac30;
            border-radius: 0.5em;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          a {
            color: black;
          }
          a:hover {
            color: white;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Galery;
