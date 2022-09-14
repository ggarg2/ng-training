import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input() name: string = String();
  @Output() gotoEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  goto(): void {
    console.log('goto is clicked');
    this.gotoEvent.emit({
      topic: 'Angular training'
    });
  }

}
