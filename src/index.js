import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./common_reports.css";
import "./common_utils.css";
import "./foundation-datepicker.css";
import "./foundation.css";
import "./jquery-ui.css";
import "./normalize.css";
import "./selectric.css";
import "./styles.css";
import "./tableInfo.css";

const MENUITEMS = [
  { id: "quoteheader", menuname: "Quote Header" },
  { id: "vehicledetails", menuname: "Vehicle Details" },
  { id: "productelements", menuname: "Product Elements" },
  { id: "standardaccessories", menuname: " Standard Accessories" },
  { id: "thirdpartyaccessories", menuname: " Third Party Accessories" },
  { id: "factoryaccessories", menuname: " Factory Accessories" }
];

const ACCESSORIES = [
  {
    acc_code: "acc1",
    acc_desc: "acc1 desc",
    acc_price: "acc1 price",
    acc_type: "standard"
  },
  {
    acc_code: "acc2",
    acc_desc: "acc1 desc",
    acc_price: "acc1 price",
    acc_type: "standard"
  },
  {
    acc_code: "acc3",
    acc_desc: "acc1 desc",
    acc_price: "acc1 price",
    acc_type: "standard"
  }
];

class WebPage extends React.Component {
  render() {
    return (
      <div>
        <div className="row expanded titlebar_header">
          <WebPageHeading />
        </div>
        {MENUITEMS.map(item => (
          <div key={"sectionheading" + item.id}>
            <WebPageSection sectiondetails={item} />
          </div>
        ))}
      </div>
    );
  }
}

class WebPageHeading extends React.Component {
  render() {
    return (
      <div className="contentHeading">
        <ul>
          {MENUITEMS.map(item => (
            <li key={"#" + item.id}>
              <a href={"#" + item.id}>{item.menuname}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

class WebPageSection extends React.Component {
  render() {
    let sectionbody;
    if (this.props.sectiondetails.id === "standardaccessories") {
      sectionbody = <StandardAccessories />;
    }
    if (this.props.sectiondetails.id === "quoteheader") {
      sectionbody = (
        <QuoteHeader
          onAccountChange={this.handleAccountSearch}
          onCCSearch={this.handleCCSearch}
          onQuoteTemplateSearch={this.handleQuoteTemplateSearch}
        />
      );
    }
    return (
      <div className="webPageSection">
        <div
          className="row sectionheading sectionheader"
          id={this.props.sectiondetails.id}
        >
          <h6>{this.props.sectiondetails.menuname}</h6>
        </div>
        <div className="row sectionbody">{sectionbody}</div>
      </div>
    );
  }
}

function StandardAccessories(props) {
  const rows = [];
  ACCESSORIES.forEach(acc => {
    if (acc.acc_type === "standard") {
      rows.push(acc);
    }
  });
  return (
    <div>
      {rows.map(acc1 => (
        <div className="row column borderrow" key={acc1.acc_code}>
          <div className="small-3 column ">{acc1.acc_code}</div>
          <div className="small-3 column  ">{acc1.acc_desc}</div>
          <div className="small-3 column  ">{acc1.acc_price}</div>
          <div className="small-3 column  ">{acc1.acc_type}</div>
        </div>
      ))}
    </div>
  );
}

function QuoteHeader(props) {
  return (
    <div className="row column">
      <div className="small-4 column">
        <input
          onChange
          type="text"
          placeholder="Start typing Account Name or Number/Code"
        />
      </div>
      <div className="small-4 column">
        <input
          className="small-4 column"
          type="text"
          placeholder="Start typing Cost Centre"
        />
      </div>
      <div className="small-4 column">
        <input
          className="small-4 column"
          type="text"
          placeholder="Start typing Quotation Template"
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<WebPage sectiondetails={MENUITEMS} />, rootElement);
