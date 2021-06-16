import React from "react";
import Frame144 from "../Frame144";
import Footer5 from "../Footer5";
import "./Frame1603.css";

function Frame1603(props) {
  const { title, overlapGroup, address, text1, text2, text3, frame144Props, footer5Props } = props;

  return (
    <div className="frame-1603">
      <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
      <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{title}</h1>
      <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
        <div className="rectangle-78"></div>
        <div className="frame-1626">
          <div className="address valign-text-middle typographybodytiny-10-regular">{address}</div>
          <div className="text-1 valign-text-middle typographyheadlineh4-extrabold-24">{text1}</div>
          <p className="text-2 typographybodysmall-12-regular">{text2}</p>
        </div>
      </div>
      <p className="text-3 typography-body-smalltext-14-regular">{text3}</p>
      <Footer5 {...footer5Props} />
    </div>
  );
}

export default Frame1603;
