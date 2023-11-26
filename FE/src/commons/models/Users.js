 class Users {
  constructor(fullname, email, phonenumber, password, prePassword, status, employeeCode) {
    this.FullName = fullname;
    this.Email = email;
    this.PhoneNumber = phonenumber;
    this.Password = password;
    this.Status = status;
    this.EmployeeCode = employeeCode;
    this.PrePassword = prePassword;
    this.FullNameErrorMsg;
    this.EmailErrorMsg;
    this.EmployeeCodeErrorMsg;
    this.PhoneNumberErrorMsg;
    this.PasswordErrorMsg;
    this.PrePasswordErrorMsg;
  }
  }

  export default Users;