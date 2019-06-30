import Header from "./Header";

const Layout: React.FC<{}> = () => {
  return (
    <div className="container">
      <Header />
      <div>
        <p>hello</p>
      </div>
      <style jsx>
        {`
          .container {
            margin: 0 auto;
            max-width: 700px;
            background-color: white;
          }
        `}
      </style>

      <style global jsx>
        {`
          body {
            padding: 10px;
            font-family: "Lato", sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
