import React, { Component } from "react";
import API from "../../utils/Api";

class Container extends Component {
  state = {
    employees: [{}],
    filterEmployees: [{}],
    order: "ascend",
  };

  componentDidMount() {
    API.FindMe()
      .then()((data) => {
        console.log(data);
        return data;
      })
      .then((res) =>
        this.setState({
          // employees: res.data.results,
          filterEmployees: res.data.results
        })
      )
      .catch((err) => console.log(err));
  }
//   Handle input fuinction on search
  handleInputChange = event => {
    const value = event.target.value;
    const filter = this.state.employees.filter(employee => employee.name.first.toLowerCase().startsWith(value.toLowerCase())) // logging data differently after each filter.
    this.setState({
     filteredEmployees: filter
    });
    console.log(this.state)
  };
 
  render () {
   return (
        <div> </div>
        ) 
  };
  
// make another component for search
// make render function
}
export default Container;
