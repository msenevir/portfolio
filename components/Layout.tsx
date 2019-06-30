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
            background-color: green;
            height: 100vh;
          }
        `}
      </style>

      <style global jsx>
        {`
          body {
            padding: 20px 30px 30px 30px;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
