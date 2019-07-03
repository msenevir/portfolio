import React from "react";

interface IProps {
  speed: number;
  title: string;
}

const AboutMe: React.FC<IProps> = ({ speed, title }) => {
  const [text, setText] = React.useState<string>("");
  const interval = React.useRef<NodeJS.Timeout | null>(null);

  const doneTyping = () => text === title;

  const startTyping = () => {
    setText(newText => title.substring(0, newText.length + 1));
  };

  React.useEffect(() => {
    interval.current = setInterval(startTyping, speed);

    return () => {
      clearInterval(interval.current!);
    };
  }, []);

  React.useEffect(() => {
    if (doneTyping()) {
      clearInterval(interval.current!);
    }
  }, [text]);

  return (
    <div className="container">
      <span>{text}</span>
      <div className={`content ${doneTyping() ? "show" : "hide"}`}>
        Software Engineer. Avid Learner.
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 40%;
        }

        span {
          font-size: 45px;
        }

        .content {
          margin-top: 20px;
        }

        .content.hide {
          opacity: 0;
          visibility: hidden;
        }

        .content.show {
          opacity: 1;
          visibility: visible;
          transition: opacity 2s;
        }
      `}</style>
    </div>
  );
};

export default AboutMe;
