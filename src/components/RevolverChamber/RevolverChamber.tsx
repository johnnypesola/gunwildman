import styled, { css } from "styled-components";
import React, { ReactElement } from "react";

interface BulletStyleProps {
  x: number;
  y: number;
}

interface RevolverCylinderProps {
  bulletCount: number;
}

const commonCss = css<BulletStyleProps>`
  position: absolute;
  border: 1px solid black;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  bottom: ${props => props.x - 9}px;
  right: ${props => props.y - 9}px;
`;

const Bullet = styled.div`
  ${commonCss}
  background: darkgoldenrod;
`;

const Chamber = styled.div`
  ${commonCss}
  background: black;
`;

const Cylinder = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background: goldenrod;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const calcRotation = (
  cx: number,
  cy: number,
  x: number,
  y: number,
  angle: number
) => {
  const radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = cos * (x - cx) + sin * (y - cy) + cx,
    ny = cos * (y - cy) - sin * (x - cx) + cy;
  return [nx, ny];
};

const RevolverCylinder: React.FC<RevolverCylinderProps> = ({ bulletCount }) => {
  let chambers: Array<ReactElement> = [];
  let bullets: Array<ReactElement> = [];

  for (let i = 0; i < 6; i++) {
    const [x, y] = calcRotation(30, 30, 50, 30, 60 * i);
    chambers.push(<Chamber key={chambers.length} x={x} y={y} />);
  }

  for (let i = 0; i < bulletCount; i++) {
    const [x, y] = calcRotation(30, 30, 50, 30, 60 * i);
    bullets.push(<Bullet key={bullets.length} x={x} y={y} />);
  }
  return (
    <Cylinder>
      {chambers}
      {bullets}
    </Cylinder>
  );
};

export default RevolverCylinder;
