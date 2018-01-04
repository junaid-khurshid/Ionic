export class User {
  private id;
  private name;
  private email;
  private password;

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  setEmail(email) {
    this.email = email;
  }

  getEmail() {
    return this.email;
  }

  setPassword(password) {
    this.password = password;
  }

  getPassword() {
    return this.password;
  }
}
