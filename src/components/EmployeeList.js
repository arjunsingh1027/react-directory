import React from "react";
import Table from "react-bootstrap/Table";

function EmployeeList({ list, sortEmployeeName }) {
    return (
        <Table striped border hover>
            <thead className="text-center">
                <tr>
                    <th>Photo</th>
                    <th>
                        <a onClick={sortEmployeeName}>Employee Name</a>
                    </th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>

            <tbody>
                {list.map(({ picture, name, email, phone, id }) => (
                    <tr key={id.value} className="text-center">
                        <td>
                            <img
                                src={picture.large}
                                alt="employee picture"
                            />
                        </td>
                        <td>
                            {name.first} {name.last}
                        </td>
                        <td>
                            <a href={"mailto:" + email} targt="__blank">
                                {email}
                            </a>
                        </td>
                        <td>Phone</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default EmployeeList;