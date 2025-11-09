class User {
  constructor(
    public name: string,
    public email: string,
    public phone?: string,
    public address?: string,
    public age?: number,
    public isVerified?: boolean,
    public role?: string
  ) {}
}

class UserBuilder {
  private name!: string;
  private email!: string;
  private phone?: string;
  private address?: string;
  private age?: number;
  private isVerified?: boolean;
  private role?: string;

  setName(name: string) {
    this.name = name;
    return this;
  }

  setEmail(email: string) {
    this.email = email;
    return this;
  }

  setPhone(phone: string) {
    this.phone = phone;
    return this;
  }

  setRole(role: string) {
    this.role = role;
    return this;
  }

  setAge(age: number) {
    this.age = age;
    return this;
  }

  build() {
    return new User(
      this.name,
      this.email,
      this.phone,
      this.address,
      this.age,
      this.isVerified,
      this.role
    );
  }
}

const user1 = new UserBuilder().setName("Aditya").setRole("admin").build();
console.log("user1: ", user1);

const user2 = new UserBuilder()
  .setName("Anurag")
  .setRole("user")
  .setEmail("test@gmail.com")
  .setAge(20)
  .build();
console.log("user2: ", user2);
