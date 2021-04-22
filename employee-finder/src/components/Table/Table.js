import React from "react";




function Table ({employees}) {
 return (
 <div> 
 <table>
            <tbody>
                {employees[0] !== undefined && employees[0].name !== undefined? 
                    (employees.map(({ picture, name, phone, email, dob }) => (
                        <tr>
                            <th>
                                <img alt={name.first + " " + name.last} src={picture.thumbnail} />
                            </th>
                            <td>Name: {name.first + " " + name.last}</td>
                            <td>Phone Number: {phone}</td>
                            <td>Email: {email}</td>
                            <td>DOB: {dob.date}</td>
                        </tr>
                    ))): 
                    
                  <> N/A </>  } 
            </tbody>
        </table>
</div>
              )};



export default Table;