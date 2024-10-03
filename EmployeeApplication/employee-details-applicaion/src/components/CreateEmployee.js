import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styling/createEmployee.css';
import axios from 'axios';

const CreateEmployee = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        gender: '',
        designation: '',
        selectedSkills: [],
        selectedFile: null,
    });

    const [errors, setErrors] = useState({
        nameError: '',
        emailError: '',
        phoneNumberError: '',
    });

    // Handling changes in the form fields
phoneNumber) ? '' : 'Please enter a valid 10-digit phone number.' });
filter((skill) => skill !== value);
    // Submitting form data using FormData for file upload
    const callingAPI = async () => {
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phoneNumber', formData.phoneNumber);
        formDataToSend.append('gender', formData.gender);
        formDataToSend.append('designation', formData.designation);
        formDataToSend.append('selectedSkills', formData.selectedSkills.join(',')); // Convert array to comma-separated string
        formDataToSend.append('selectedFile', formData.selectedFile);

        try {
            const response = await axios.post('http://localhost:5000/create-new-employee', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                alert('Employee Created Successfully');
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    gender: '',
                    designation: '',
                    selectedSkills: [],
                    selectedFile: null,
                });
                setErrors({
                    nameError: '',
                    emailError: '',
                    phoneNumberError: '',
                });
            } else {
                alert('Error creating employee. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Basic validation before submitting the form
        if (!formData.name || errors.nameError) {
            alert('Please enter a valid name.');
            return;
        }
        if (errors.emailError) {
            alert('Please enter a valid email address.');
            return;
        }
        if (errors.phoneNumberError) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
        if (!formData.selectedSkills.length) {
            alert('Please select at least one skill.');
            return;
        }
        if (!formData.selectedFile) {
            alert('Please select an image file (JPG or PNG).');
            return;
        }

        callingAPI(); // Call API to submit the form data
    };

    const skills = ['MCA', 'BCA', 'BSA'];
    const genders = ['Male', 'Female', 'Others'];

    return (
        <div>
            <div className='main-container'>
                <div className='sub-container'>
                    <div className='new-employee-container'>
                        <Header />
                        <div className='new-employee-form-main-container'>
                            <div>
                                <h1 className='page-heading'>Create New Employee</h1>
                            </div>
                            <div className='new-employee-form-container form-inputs'>
                                <div className='form-center'>
                                    <form onSubmit={handleSubmit}>
                                        <div className='row'>
                                            {/* Name input */}
                                            <div className='input-bar-container'>
                                                <p className='input-bar-name'>Name of the Employee</p>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={handleName}
                                                    placeholder='Enter Name of the Employee .... '
                                                    className='input-bar'
                                                />
                                                {errors.nameError && <p className='error-message'>{errors.nameError}</p>}
                                            </div>

                                            {/* Email input */}
                                            <div className='input-bar-container'>
                                                <p className='input-bar-name'>Email Address</p>
                                                <input
                                                    type="text"
                                                    value={formData.email}
                                                    onChange={handleEmailChange}
                                                    placeholder='Enter Email Address .... '
                                                    className='input-bar'
                                                />
                                                {errors.emailError && <p className='error-message'>{errors.emailError}</p>}
                                            </div>

                                            {/* Phone number input */}
                                            <div className='input-bar-container'>
                                                <p className='input-bar-name'>Mobile Number</p>
                                                <input
                                                    type="text"
                                                    value={formData.phoneNumber}
                                                    onChange={handlePhoneNumber}
                                                    placeholder='Enter Mobile Number .... '
                                                    className='input-bar'
                                                    maxLength={10}
                                                />
                                                {errors.phoneNumberError && <p className='error-message'>{errors.phoneNumberError}</p>}
                                            </div>

                                            {/* Designation dropdown */}
                                            <div className='input-bar-container'>
                                                <label className='input-bar-name' htmlFor="designation">Designation:</label>
                                                <select name="designation" id="designation" className='input-bar' value={formData.designation} onChange={handleDesignationChange}>
                                                    <option value='none' className='dropdown-menu-text'>Select an option</option>
                                                    <option value="hr">HR</option>
                                                    <option value="manager">Manager</option>
                                                    <option value="sales">Sales</option>
                                                </select>
                                            </div>

                                            {/* Gender radio buttons */}
                                            <div className='input-bar-container radio-main-container'>
                                                <div className='radio-sub-container'>
                                                    <div className='input-bar-name'>Gender:</div>
                                                    {genders.map(genderOption => (
                                                        <div key={genderOption}>
                                                            <input
                                                                type="radio"
                                                                className='radio-button'
                                                                id={genderOption}
                                                                name="gender"
                                                                value={genderOption}
                                                                checked={formData.gender === genderOption}
                                                                onChange={handleGenderChange}
                                                            />
                                                            <label htmlFor={genderOption}> {genderOption}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Skills checkboxes */}
                                            <div className='input-bar-container radio-main-container'>
                                                <div className='checkbox-sub-container'>
                                                    <h3 className='input-bar-name'>Course :</h3>
                                                    <div className='course-list'>
                                                        {skills.map(skill => (
                                                            <label key={skill}>
                                                                <input
                                                                    type="checkbox"
                                                                    value={skill}
                                                                    checked={formData.selectedSkills.includes(skill)}
                                                                    onChange={handleSkillChange}
                                                                    className='checkbox'
                                                                />
                                                                {skill}
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* File input */}
                                            <div className='input-bar-container'>
                                                <input
                                                    type="file"
                                                    accept="image/jpg, image/png"
                                                    onChange={handleFileChange}
                                                    className='file-input'
                                                />
                                            </div>

                                            {/* Submit button */}
                                            <div className='submit-button'>
                                                <button type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEmployee;