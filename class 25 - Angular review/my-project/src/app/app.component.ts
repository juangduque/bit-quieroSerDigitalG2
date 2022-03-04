import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greeting: string = "Hola";
  age: number = 20;
  color: string = "red";
  title: string = "Esto es un título"

  changeColor(color: string):void {
    this.color = color
  };

  setInput(event: Event):void{
    const content = event.target as HTMLInputElement;
    this.title = content.value;
  };

}
