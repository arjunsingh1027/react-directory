import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EmployeeList from "./EmployeeList";

class Search extends React.Component {
    state = {
        employees: [],
        employeeArray: [],
        search: "",
        sort: "",
    };

    componentDidMount() {
        this.getEmployees();
    }

    async getEmployees() {
        await fetch("https://randomuser.me/api/?results=20&nat=us")
            .then((data) => data.json())
            .then((data) => this.setState({
                employees: data.results
            }));
    };

    sortEmployeeName = (e) => {
        e.preventDefault();

        // take current state
        let { employees, sort, arr } = this.state;

        // if array is not sorted, sort by name
        (!sort) ? arr = employees.sort((a, b) => a.name.first > a.name.first ? 1 : -1) : arr = employees.reverse();

        // new state with sorted data
        this.setState({ employees: arr, sort: !sort })
    };

    render() {
        return (
            <div className="Search">
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
                    <Nav className="mr-auto"></Nav>
                    <Form inline>
                        <Form.Control
                            onchange={(e) => this.setState({ search: e.target.value })}
                            value={this.state.search}
                            type="text"
                            placeholder="Search for Employee"
                            name="search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar>
                <EmployeeList
                    list={this.state.employees.filter(({ name }) =>
                        name.first.toLowerCase().includes(this.state.search.toLowerCase())
                    )}
                    sortEmployeeName={this.sortEmployeeName}
                />
            </div>
        )
    }
}

export default Search;