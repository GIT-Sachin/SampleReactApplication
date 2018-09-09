import React from "react";
import Select from "react-select";
import AsyncSelect from 'react-select/lib/Async';

let accounts = [
  { value: "quoteheader", label: "Quote Header" },
  { value: "vehicledetails", label: "Vehicle Details" },
  { value: "productelements", label: "Product Elements" },
  { value: "standardaccessories", label: " Standard Accessories" },
  { value: "thirdpartyaccessories", label: " Third Party Accessories" },
  { value: "factoryaccessories", label: " Factory Accessories" }
];

async function getAccounts(inputValue) {
  var response = await fetch("http://localhost:8080/getAccounts/"+inputValue);
  var data = await response.json();
  return data;
}

const getDynamicAccounts = inputValue =>
  new Promise(resolve => {
    setTimeout(function() {
      resolve(getAccounts(inputValue));
    }, 1000);
  });

class QuoteHeader extends React.Component{
  constructor(props){
    super(props);
    this.state={
      selectedOption:null
    }
  }

handleChange = (selectedOption) =>{
  this.setState({selectedOption});
  this.props.quoteheader.accountCode = selectedOption.value;
  console.log(selectedOption);
}
  render(){
    const {selectedOption }= this.state;
    return(
      <div className = "row column">
      <div className="small-4 column">

    <AsyncSelect
      value={selectedOption}
      cacheOptions
      defaultOptions
      onInputChange={this.handleInputChange}
      onChange={this.handleChange}
      loadOptions={getDynamicAccounts} />
    </div>
    </div>)
  }
}

export default QuoteHeader;
