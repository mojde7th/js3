 
class User {
   name = "";
  familyName = "";
  phone = "";
  gender = "";
  type = "student";
  constructor(n, f, p, mi) {
    this.name = n;
    this.familyName = f;
    this.phone = p;
    this.gender = mi;
    console.log(this.familyName);
  }
  tabe() {
    document.write(
      `<p class="info"> my name is <span>${this.name}</span> and my familyname is <span >${this.familyName}</span> </p>`
    );
  }
}

let mojde = new User("mojde", "akbari", "0991", "female");

document.write(
  ` <p class="info">My gender is <span>${mojde.gender} </span></p> `
);
mojde.tabe();

class Student extends User {
  city = "";
  constructor(ii, ll, ln, ko, ci) {
    super(ii, ll, ln, ko);
    this.city = ci;
  }
}
const student1 = new Student("arezoo", "davari", "0912000", "Male", "karaj");
document.write(
  `<h2 class="info">This student name is <span>${student1.name}</span> <br> Familyname is <span>${student1.familyName}</span> <br> Gender is ${student1.gender} <br> Phone is <span>${student1.phone}</span> <br> this person lives in <span>${student1.city}</span> </h2>`
);
