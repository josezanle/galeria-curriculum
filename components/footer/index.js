import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Contacto</h2>
      <div className="redes">
        <a
          href="https://www.linkedin.com/in/jose-rios-lm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <a
          href="https://www.facebook.com/Josezanle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/joze.rios/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/user/ian44ful"
          target="_blank"
          rel="noopener noreferrer"
        >
          Youtube
        </a>
      </div>

      <style jsx>
        {`
          .footer {
            width: 100vw;
            height: 20vh;
            padding: 2em;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            background: #1c1c1c;
          }
          h2 {
            color: silver;
            width: 100vw;
            text-align: center;
          }
          .redes {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            color: silver;
            margin: 0 0.5em;
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

export default Footer;
