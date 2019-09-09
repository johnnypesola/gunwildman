import styled from "styled-components";
import React, { ReactElement } from "react";

const Cylinder = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  background: goldenrod;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

interface BulletStyleProps {
  x: number;
  y: number;
}

const Bullet = styled.div<BulletStyleProps>`
  position: absolute;
  bottom: ${props => props.x - 9}px;
  right: ${props => props.y - 9}px;
  width: 16px;
  height: 16px;
  background: darkgoldenrod;
  border: 1px solid black;
  border-radius: 50%;
`;

const Chamber = styled.div<BulletStyleProps>`
  position: absolute;
  bottom: ${props => props.x - 9}px;
  right: ${props => props.y - 9}px;
  width: 16px;
  height: 16px;
  background: black;
  border: 1px solid black;
  border-radius: 50%;
`;

const rotate = (
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

interface RevolverCylinderProps {
  bulletCount: number;
}

const RevolverCylinder: React.FC<RevolverCylinderProps> = ({ bulletCount }) => {
  let chambers: Array<ReactElement> = [];
  let bullets: Array<ReactElement> = [];

  for (let i = 0; i < 6; i++) {
    const bulletCords = rotate(30, 30, 50, 30, 60 * i);
    chambers.push(
      <Chamber key={chambers.length} x={bulletCords[0]} y={bulletCords[1]} />
    );
  }

  for (let i = 0; i < bulletCount; i++) {
    const bulletCords = rotate(30, 30, 50, 30, 60 * i);
    bullets.push(
      <Bullet key={bullets.length} x={bulletCords[0]} y={bulletCords[1]} />
    );
  }
  return (
    <Cylinder>
      {chambers}
      {bullets}
    </Cylinder>
  );
};

export default RevolverCylinder;
