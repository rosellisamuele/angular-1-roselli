import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Person } from './model/person';
import { CommonModule } from '@angular/common';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prog-1-roselli';
  numClick = 0;
  buttonDisabled : boolean = false;
  id = 0;

  clickButton = () => {
    this.numClick++;
  }

  resetButton = () => {
    this.numClick = 0;
  }

  disableBtn = () => {
    this.buttonDisabled = true;
    
  }

  addPerson = () => {
    this.personArray.push({name : this.person.name, surname : this.person.surname, age : this.person.age});

    this.person = {name : "", surname : "", age : 0}
  }

  rmvPerson = (i : number) => {
    
    this.personArray.splice(i,1);
  }

  modPerson = (i : number) => {
    this.person = this.personArray[i];
    
  }

  person : Person = {
    name : "",
    surname : "",
    age : 0,
  }

  personArray : Person[] = [
    {name: "Pinco", surname: "Pallino", age: 26},
    {name: "Pippo", surname: "Ciccio", age: 33}

  ]
}
