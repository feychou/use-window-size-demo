import React from "react";
import classnames from 'classnames';

import useWindowSize from "./useWindowSize";
import ReactLogo from "./react-logo.svg";
import NodeLogo from "./nodejs-logo.png";
import PGLogo from './elephant.png';

import "./styles.css";

const tracks = [
  {
    name: "react",
    img: ReactLogo
  },
  {
    name: "nodejs",
    img: NodeLogo
  },
  {
    name: "SQL",
    img: PGLogo
  }
];

export default function Sidebar() {
  const windowSize = useWindowSize();

  return (
    <div className={classnames('Sidebar', windowSize.width < 768 ? 'small' : '')}>
      {tracks.map(({ name, img }) => (
        <div className="Tech">
          <img src={img} alt={name} />
          {windowSize.width > 768 && <span className="TechName">{name}</span>}
        </div>
      ))}
    </div>
  );
}
