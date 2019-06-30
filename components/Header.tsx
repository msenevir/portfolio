import Link from "next/link";

const Header: React.FC<{}> = () => {
  return (
    <div className="header">
      <Link prefetch href="/blog">
        <a>blog</a>
      </Link>
      <Link prefetch href="/resume">
        <a>resume</a>
      </Link>
      <a target="_blank" href="https://github.com/msenevir">
        github
      </a>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        a {
          color: green;
          padding: 0 10px;
          text-decoration: none;
          transition: color 0.5s ease;
        }

        a:hover {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Header;
