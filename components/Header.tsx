const Header: React.FC<{}> = () => {
  return (
    <div className="header">
      <p>Blog</p>
      <p>Resume</p>
      <p>Github</p>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .header > p {
          padding: 0 10px;
        }
      `}</style>
    </div>
  );
};

export default Header;
