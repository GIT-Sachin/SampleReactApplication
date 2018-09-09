import React from "react"
import QuoteHeader from "./QuoteHeader"

const WebPageSection = (props)=>{
  let sectionbody;
  if (props.sectiondetails.id === "quoteheader") {
    sectionbody = (
      <QuoteHeader {...props}/>
    );
  }

  return (
    <div className="webPageSection">
      <div
        className="row sectionheading sectionheader"
        id={props.sectiondetails.id}
        >
        <h6>
          {props.sectiondetails.menuname}
        </h6>
      </div>
      <div className="row sectionbody">
        {sectionbody}
      </div>
    </div>
  );
}


export default WebPageSection;
