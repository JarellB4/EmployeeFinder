import React, { Component } from "react";
import API from "../../utils/Api";
import Body from "../Body/Body"
import Search from '../Search/Search';

class Container extends Component {
  state = {
    employees: [{}],
    filterEmployees: [{}],
    order: "ascend",
  };
  
  headings = [
    { name: "Image", width: "" },
    { name: "Name", width: "25%" },
    { name: "Phone", width: "25%" },
    { name: "Email", width: "25%" },
    { name: "DOB", width: "45%" }
  ]

  componentDidMount(){
      API.FindMe().then(data => {console.log(data); return data}).then(res => this.setState({
          employees: res.data.results,
          filterEmployees: res.data.results
      })).catch(err => console.log(err))
  };

  handleInputChange = event => {
    const value = event.target.value;
    const filter = this.state.employees.filter(employee => employee.name.first.toLowerCase().startsWith(value.toLowerCase())) // logging data differently after each filter.
    this.setState({
     filterEmployees: filter
    });
    console.log(this.state)
  };
 
  render () {
   return (
        <div> 

            <Search 
            handleInputChange={this.handleInputChange}
            />
            <Body
            headings={this.headings}
            employees={this.state.filterEmployees}
            />
             </div>
        ) 
  };
  
// make another component for search
// make render function
}
export default Container;
