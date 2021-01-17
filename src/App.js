import React from "react";
import Container from "./components/Container";
import Employee from "./components/Employee";
import Search from "./components/Search";
import API from "./utils/API";
import "./App.css";

class App extends React.Component {
  state = { employees: [], search: '' };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            city: e.location.city,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  refreshPage() {
    window.location.reload(false);
  }

  searchEmployee = (filter) => {
    console.log("Search", filter);
    const filterList = this.state.employees.filter((employee) => {
      let values = Object.values(employee).join("").toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ employees: filterList });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("Handle", this.state.serch);
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("button clicked", this.state.search, e);
    this.searchEmployee(this.state.search);
  }

}



export default App;
