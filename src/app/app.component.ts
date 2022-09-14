import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: any = "Hello world";

  changeTitle(inputField: any) {
    this.title = inputField?.value
  }

  test(event: any) {
    console.log(
      'Inside test method'
    );
    console.log('event is ', event);
  }

}
