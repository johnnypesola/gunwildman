import React, { useState, ReactElement } from "react";
import styled from "styled-components";
import gun from "./resources/img/gun.png";
import wild from "./resources/img/wild.png";
import man from "./resources/img/man.png";
import BulletHole from "./components/BulletHole/BulletHole";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
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

const MenuContainer = styled.div`
  text-align: left;
  width: 650px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto 0 auto;
`;

const MenuOption = styled.div`
  margin: 1em 0 1em 1em;
  color: #5a96ff;
`;

const MenuScene: React.FC = ({ children }) => {
  const bulletArray: ReactElement[] = [];
  const [bulletHoles, setBulletHoles] = useState(bulletArray);

  // const bulletHoles: Array<object> = [];
  const AddBulletHole = (e: React.MouseEvent) => {
    const newBulletHole = (
      <BulletHole xPos={e.clientX} yPos={e.clientY}></BulletHole>
    );
    setBulletHoles([...bulletHoles, newBulletHole]);
  };

  return (
    <div onMouseDown={AddBulletHole}>
      {children}
      {bulletHoles}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <MenuScene>
      <Header>
        <LogoImg src={gun} />
        <LogoImg src={wild} />
        <LogoImg src={man} />
      </Header>
      <MenuContainer>
        <MenuOption>Game a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 outlaw</MenuOption>
        <MenuOption>Game b &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 outlaws</MenuOption>
        <MenuOption>Game c &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; gang</MenuOption>
        Top score - 12000
      </MenuContainer>
    </MenuScene>
  );
};

export default App;
