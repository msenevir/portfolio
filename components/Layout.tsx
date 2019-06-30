import Header from "./Header";
import Router from "next/router";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div className="container">
      <Header />
      <div>{children}</div>
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
          * {
            margin: 0;
            box-sizing: border-box;
          }

          a {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          }

          body {
            padding: 10px;
            font-family: "Lato", sans-serif;
          }

          #nprogress .bar {
            background: black;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }
        `}
      </style>
    </div>
  );
};

export default Layout;
