const Card = () => {
  return (
    <div className="card">
      <div className="top">img</div>
      <div className="mid">text</div>
      <div className="bottom">button</div>
      <style jsx>
        {`
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

          h4 {
            color: silver;
          }

          .top {
            flex: 5;
            width: 100%;
            height: 100%;
            background: yellow;
          }

          .mid {
            flex: 4;
            width: 100%;
            height: 100%;
            margin: 5px 0;
            background: aqua;
          }

          .bottom {
            flex: 1;
            width: 100%;
            height: 100%;
            background: pink;
          }
        `}
      </style>
    </div>
  );
};

export default Card;
