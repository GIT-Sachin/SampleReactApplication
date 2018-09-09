import React from "react";
import ReactDOM from "react-dom";
import WebPageHeading from "./components/WebPageHeading"
import WebPageSection from "./components/WebPageSection"

import "./css/styles.css";
import "./css/common_utils.css";
import "./css/foundation-datepicker.css";
import "./css/foundation.css";
import "./css/styles.css";

const MENUITEMS = [
  { id: "quoteheader", menuname: "Quote Header" },
  { id: "vehicledetails", menuname: "Vehicle Details" },
  { id: "productelements", menuname: "Product Elements" },
  { id: "standardaccessories", menuname: " Standard Accessories" },
  { id: "thirdpartyaccessories", menuname: " Third Party Accessories" },
  { id: "factoryaccessories", menuname: " Factory Accessories" }
];

class WebPage extends React.Component {
  constructor(){
    super();
    this.state={
      quotation:{
        quotationHeader:{
          accountCode:null,
          costCenterCode:null,
          quatationTemplate:null,
          term:null,
          distance:null
        },
        vehicleDetails:{
          make:null,
          model:null,
          variant:null,
          category:null
        },
        accessories:{
          accessoryCode:null,
          accessoryDesc:null,
          accessoryType:null,
        }
      }}
    }
    render() {
      return (
        <React.Fragment>
          <div className="row expanded titlebar_header">
            <WebPageHeading menuitems={this.props.menuitems}/>
          </div>
          <div >
            <WebPageSection
              sectiondetails={this.props.menuitems[0]}
              quoteheader={this.state.quotation.quotationHeader} />
          </div>
        </React.Fragment>
      );
    }
  }

  const rootElement = document.getElementById("root");
  ReactDOM.render(
    <WebPage  menuitems={MENUITEMS}/>,
    rootElement
  );
