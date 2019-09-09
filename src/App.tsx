import React, { useState, ReactElement } from "react";
import styled from "styled-components";
import gun from "./resources/img/gun.png";
import wild from "./resources/img/wild.png";
import man from "./resources/img/man.png";
import BulletHole from "./components/BulletHole/BulletHole";
import RevolverChamber from "./components/RevolverChamber/RevolverChamber";

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

const MenuSceneContainer = styled.div`
  height: 100%;
`;

const MenuScene: React.FC = ({ children }) => {
  const bulletHoleArray: ReactElement[] = [];
  const [bulletHoles, setBulletHoles] = useState(bulletHoleArray);
  const [bulletCount, setBulletCount] = useState(6);

  const AddBulletHole = (e: React.MouseEvent) => {
    const newBulletHole = (
      <BulletHole
        key={bulletHoles.length}
        xPos={e.clientX}
        yPos={e.clientY}
      ></BulletHole>
    );
    setBulletHoles([...bulletHoles, newBulletHole]);
  };

  const FireWeapon = (e: React.MouseEvent) => {
    if (!bulletCount) return;
    AddBulletHole(e);
    setBulletCount(bulletCount - 1);
  };

  const ReloadWeapon = () => {
    setBulletCount(6);
  };

  const HandleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) FireWeapon(e);
    if (e.button === 2) ReloadWeapon();
  };

  return (
    <MenuSceneContainer onMouseDown={HandleMouseDown}>
      {children}
      {bulletHoles}
      <RevolverChamber bulletCount={bulletCount} />
    </MenuSceneContainer>
  );
};

const App: React.FC = () => {
  return (
    <>
      <MenuScene>
        <Header>
          <LogoImg src={gun} />
          <LogoImg src={wild} />
          <LogoImg src={man} />
        </Header>
        <MenuContainer>
          <MenuOption>
            Game a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1 outlaw
          </MenuOption>
          <MenuOption>
            Game b &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2 outlaws
          </MenuOption>
          <MenuOption>Game c &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; gang</MenuOption>
          Top score - 12000
        </MenuContainer>
      </MenuScene>
    </>
  );
};

export default App;
