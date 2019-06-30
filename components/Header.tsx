const Header: React.FC<{}> = () => {
  return (
    <div className="header">
      <p>blog</p>
      <p>resume</p>
      <p>github</p>

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
