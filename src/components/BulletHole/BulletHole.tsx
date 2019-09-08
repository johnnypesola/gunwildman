import styled from "styled-components";
import React from "react";

interface ShineStyleProps {
  size: number;
  xPos: number;
  yPos: number;
  shadowXPos: number;
  shadowYPos: number;
}

const ShineStyle = styled.div<ShineStyleProps>`
  position: absolute;
  top: ${props => props.yPos}px;
  left: ${props => props.xPos}px;
  box-shadow: rgb(255, 255, 255) ${props => props.shadowXPos}px
    ${props => props.shadowYPos}px 20px 0px;
  background: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;

interface BulletHoleProps {
  xPos: number;
  yPos: number;
}

const BulletHole: React.FC<BulletHoleProps> = ({ xPos, yPos }) => {
  const size = 20;
  const shadowXPos = 0;
  const shadowYPos = 0;

  return (
    <ShineStyle
      size={size}
      xPos={xPos - size / 2}
      shadowXPos={shadowXPos}
      yPos={yPos - size / 2}
      shadowYPos={shadowYPos}
    ></ShineStyle>
  );
};

export default BulletHole;
