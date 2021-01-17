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
  };

  render() {
    return (
      <Container>
        <div className="container">
          <div className="row">
            <col className="col-md-4">
              <h2>Employee Directory</h2>
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </col>
          </div>

          <div className="row">
            <col className="col-md-12">
              <table className="table">
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DOB</th>
                  </tr>
                </thead>
                {[...this.state.employees].map((item) => (
                  <Employee
                    picture={item.picture}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    email={item.email}
                    phone={item.phone}
                    dob={item.dob}
                    key={item.key}
                  />
                ))}
              </table>
            </col>
          </div>
        </div>
      </Container>
    );
  }
}



export default App;
