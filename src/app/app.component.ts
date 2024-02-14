import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prog-1-roselli';
  numClick = 0;
  buttonDisabled : boolean = false;

  clickButton = () => {
    this.numClick++;
  }

  resetButton = () => {
    this.numClick = 0;
  }

  disableBtn = () => {
    this.buttonDisabled = true;
    
  }
}
