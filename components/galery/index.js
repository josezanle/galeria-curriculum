import Card from "../card";

const Galery = () => {
  return (
    <div className="galery">
      <h2>Galery</h2>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <style jsx>
        {`
          .galery {
            width: 100vw;
            background: white;
            padding: 2em;
            margin: 3em 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          h2 {
            width: 100vw;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
};

export default Galery;
