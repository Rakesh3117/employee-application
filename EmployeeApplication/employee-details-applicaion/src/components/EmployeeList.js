import React from 'react'
import '../styling/employeeList.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom';



const EmployeeList = () => {

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    const employeeData = [{
        id: 1,
        profile: "https://example.com/profile.jpg",
        name: "John Doe",
        email: "johndoe@example.com",
        mobileNumber: "1234567890",
        designation: "Software Engineer",
        gender: "Male",
        course: "Computer Science",
        createDate: formattedDate
    }];

    const numberOfEmployees = employeeData.length

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/create-new-employee');
    };
  return (
    <div className='main-container'>
        <div className='sub-container'>
            <Header />
            <div className='employee-list-heading-container'>
                <h1 className='heading-name'>Employee List</h1>
            </div>
            <div className='employee-list-details-container'>
                <div className='employee-list-taskbar'>
                    <div className='count-container'>Total Count- {numberOfEmployees}</div>
                    <div><button className='btn btn-secondary new-button' onClick={handleButtonClick}>Create New Employee</button></div>
                    <div className='search-bar-container'>
                        
                        <input type="text" className='search-bar' placeholder='Search for employee name' />
                        <i class="fa-solid fa-magnifying-glass search-icon"></i>
                    </div>
                </div>
                <div className='table-container'>
                <table className="employee-list-table" border="1">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Profile</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile number</th>
                        <th>Designation</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Create-Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {employeeData.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>
                                <img src={employee.profile} alt="Profile" />
                            </td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.mobileNumber}</td>
                            <td>{employee.designation}</td>
                            <td>{employee.gender}</td>
                            <td>{employee.course}</td>
                            <td>{employee.createDate}</td>
                            <td>
                            <div>
                                <button
                                className="btn btn-secondary edit-button"
                                >
                                Edit
                                </button>
                                <button
                                className="btn btn-danger delete-button"
                                >
                                Delete
                                </button>
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default EmployeeList
