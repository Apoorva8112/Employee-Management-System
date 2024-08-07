package com.employee.user.service.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Entity
@Data
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String firstName;

	//private String lastName;

	private int age;

	private String gender;

	private String emailId;

	private String contact;

	private String street;

	private String city;

	private String pincode;

	private String password;

	private String role;

	private int departmentId;

	private int status;

	//private String image;

	private int experience;
	
	private String emergencyContactName;
	
	private String emergencyContactMobile;
	
	private String permanentAddress;
	
	// professional detail
	
	private String employmentCode;
	
	private String companyEmail;
	
	private String officePhone;
	
	private String officeAddress;
	
	private String reportingManager;
	
	private String hrName;
	
	private String dateOfJoining;
	
//    private String projectCode;
//	
//	private String startDate;
//	
//	private String endDate;
//	
//	private String clientProjectName;
//	
//	private String reportingMngMail;
//	
	
}
