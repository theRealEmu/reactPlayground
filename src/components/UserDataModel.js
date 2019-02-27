export default class UserDataModel {
  constructor(id, firstName, lastName, email, phone) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
