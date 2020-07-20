import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  age = 40;
  address = "taichung";

  user = {
    name: "Angular " + VERSION.major,
    age: 40,
    address: "taichung"
  };

  numberArray = [1, 2, 3, 4, , 5, 6];

  usersArray = [
    {
      name: "Acer",
      age: 20,
      address: "taipei"
    },
    {
      name: "Bela",
      age: 33,
      address: "Taichung"
    },
    {
      name: "Angular ",
      age: 40,
      address: "taichung"
    }
  ];

  constructor() {
    this.user.name = "Ngclass";

    let newArray = this.numberArray.filter(x => x % 2 === 0);
    this.numberArray.map(x => x * 2);
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.numberArray.reduce(reducer);
    this.numberArray.slice(2);
    this.numberArray.slice(2, 4);
  }

  showAddress(user) {
    alert(user.address);
  }
}
