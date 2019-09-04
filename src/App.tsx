import React from "react";
import styled from "styled-components";
import gun from "./resources/img/gun.png";
import wild from "./resources/img/wild.png";
import man from "./resources/img/man.png";

const Header = styled.header`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #5a96ff;
  text-transform: uppercase;
  img {
    margin: 20px 0;
  }
`;

type LogoImgProps = {
  src: string;
};

const LogoImg = ({ src }: LogoImgProps) => (
  <img draggable={false} src={src} alt="logo" />
);

const App: React.FC = () => {
  return (
    <>
      <Header>
        <LogoImg src={gun} />
        <LogoImg src={wild} />
        <LogoImg src={man} />
      </Header>
      <p>Game a</p>
      <p>Game b</p>
    </>
  );
};

export default App;
