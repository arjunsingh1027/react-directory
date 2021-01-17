import React from "react";


function Employee(props) {
    return (
        <thead>
            <tr>
                <th>
                    <img alt={props.firstName} src={props.picture}/>
                </th>
                <td>{props.firstName}</td>
                <td>{props.lastName}</td>
                <td>{props.email}</td>
                <td>{props.phone}</td>
                <td>{props.dob}</td>
            </tr>
        </thead>
    );
}

export default Employee;