import Link from "next/link";
import { useRouter, PublicRouterInstance } from "next/router";

const getLinkClassName = (pathname: string, href: string) => {
  return `/${pathname.split("/")[1]}` === href ? "active" : "";
};

const Header: React.FC<{}> = () => {
  const { pathname }: PublicRouterInstance = useRouter();

  return (
    <div className="header">
      <Link prefetch href="/">
        <a className={getLinkClassName(pathname, "/")}>home</a>
      </Link>
      <Link prefetch href="/blog">
        <a className={getLinkClassName(pathname, "/blog")}>blog</a>
      </Link>
      <Link prefetch href="/resume">
        <a className={getLinkClassName(pathname, "/resume")}>resume</a>
      </Link>
      <a target="_blank" href="https://github.com/msenevir">
        github
      </a>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-top: 30px;
        }

        @media (max-width: 500px) {
          .header {
            margin-top: 10px;
          }
        }

        a {
          color: #a3afbf;
          padding: 0 10px;
          text-decoration: none;
          transition: color 0.5s ease;
          cursor: pointer;
          font-size: 13px;
        }

        a.active,
        a:hover {
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Header;
