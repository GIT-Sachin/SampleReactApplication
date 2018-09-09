import React from "react"

const WebPageHeading = (props) => {
  return (
    <div className="row expanded titlebar menuitem">
      {props.menuitems.map(item=>(
        <div key={'div'+item.id}
          className = "column small-2">
          <a
            href={'#'+item.id}
            id={item.id}>
            {item.menuname}
          </a>
        </div>
      ))}
    </div>
  );
}


export default WebPageHeading;
