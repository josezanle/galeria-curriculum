const Footer = () => {
  return (
    <div className="footer">
      <h2>Contacto</h2>
      <div className="redes">
        <p>Linkedin</p>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Youtube</p>
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
          p {
            color: silver;
            margin: 0 0.5em;
          }
          p:hover {
            color: white;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Footer;
