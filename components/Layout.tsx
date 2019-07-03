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
      <main className="content">{children}</main>
      <style jsx>
        {`
          .container {
            margin: 0 auto;
            max-width: 700px;
          }

          .content {
            margin-top: 30px;
            height: 100vh;
          }
        `}
      </style>

      <style global jsx>
        {`
          * {
            margin: 0;
            box-sizing: border-box;
          }

          body {
            padding: 10px;
            font-family: "Barlow Semi Condensed", sans-serif;
            background-color: #191919;
            color: #f5f5f6;
          }

          #nprogress .bar {
            background: #f5f5f6;
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
