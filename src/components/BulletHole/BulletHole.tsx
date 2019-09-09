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
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
`;

interface BulletHoleProps {
  xPos: number;
  yPos: number;
}

const BulletHole: React.FC<BulletHoleProps> = ({ xPos, yPos }) => {
  const size = 18;
  const shadowXPos = 3;
  const shadowYPos = 3;

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
