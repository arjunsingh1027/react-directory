import React from "react";
import axios from "axios";
import EmployeeData from "./EmployeeData";

class Employee extends React.Component {
    state = {
        employeeRecords: [],
    };
    componentDidMount = () => {
        axios.get("https://randomuser.me/api/?results=200&nat=us")
            .then((records) => {
                let employeeData = records.data.results;
                let employeeRecord = [];
                console.log(employeeData);
                for (let i = 0; i < employeeData.lenght; i++) {
                    let empRecord = {
                        name: employeeData[i].name.first + " " + employeeData[i].name.last,
                        email: employeeData[i].email,
                        image: employeeData[i].picture.medium,
                        phone: employeeData[i].cell,
                        dob: employeeData[i].dob.date,
                    };
                    employeeRecord.push(empRecord);
                }
                console.log(employeeRecord);
                this.setState({ employeeRecords: employeeRecord });
            });
    };

    render() {
        return (
            <div>
                <h2>Employee Details</h2>
                <EmployeeData employees={this.state.employeeRecords} />
            </div>
        );
    }
}

export default Employee;