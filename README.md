# Employee Management System

A robust platform for managing employee records with role-based access and secure authentication.

## Overview

Our Employee Management System is a robust platform featuring role-based access and a seamless user experience for both Admin and Employee roles. Users can log in using their company email or employment code and password, with backend API verification directing them to their respective dashboards.

Admin users have comprehensive privileges, including creating, updating, and deleting employee records. Their dashboard provides a complete employee list with essential details and actions for managing records. Employee profiles are divided into Personal, Professional, Project, and Finance sections, each with specific validation rules.

Personal details capture vital information like name, contact, and emergency contacts, while Professional details focus on employment history and office-related data. Project details include current and previous projects, ensuring complete visibility into an employee's project involvement. The Finance section records financial information and offers employees access to downloadable payslips.

Employee dashboards are view-only, ensuring data integrity by allowing employees to see their details without edit permissions. The system emphasizes security, data accuracy, and user-friendly navigation, making it an essential tool for efficient employee management.

## Key Features

### 1. Role-Based Access Control

- Differentiated dashboards for Admin and Employee roles.
- Secure login using company email or employment code and password.
- Backend API for role verification and navigation.

### 2. Admin Dashboard

- Full CRUD (Create, Read, Update, Delete) capabilities for employee management.
- Comprehensive employee list view with basic information (Employment Code, Name, Email, Manager, Current Project).
- Action icons for View, Edit, and Delete functionalities.

### 3. Employee Record Management

- **Personal Details**: Captures full name, DOB, gender, contact information, addresses, and emergency contacts. Validations for email, age, and phone number formats.
- **Professional Details**: Includes employment code, company mail, office phone, office address, reporting manager, HR name, employment history, and date of joining. Strict validation for employment code and office phone formats.
- **Project Details**: Optional section documenting current and past projects with project code, dates, client name, and reporting manager.
- **Finance Details**: Records PAN, Aadhar, bank details, and CTC breakup. Employees can download the last 6 months' payslips in PDF format.

### 4. Validation and Data Integrity

- Mandatory fields with stringent validation rules.
- Restrictions on updating critical fields (Employment Code, Gender, DOB, Company Mail, Date of Joining) by Admin.

### 5. User Interface

- Admin interface for adding, editing, and deleting employees with form validations.
- Employee interface for viewing personal, professional, project, and finance details.

### 6. Security and Compliance

- Secure authentication mechanisms.
- Data validation to prevent incorrect entries.
- Ensures compliance with organizational data standards.

### 7. Reporting and Analytics

- Detailed views and reports on employee data.
- Historical data tracking for projects and employment history.

This system ensures efficient and secure management of employee data, providing essential functionalities for both administrative and employee roles.

## Technologies Used

- Java
- Spring Boot
- React
- MySQL

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository.
2. Install dependencies.
3. Run the application.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## Usage and Ownership

This project is the intellectual property of its owner and is provided for reference purposes only. Unauthorized use, reproduction, or distribution of this project or its components is prohibited.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
