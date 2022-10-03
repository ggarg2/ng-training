import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.scss'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class NestedFormComponent implements OnInit {

  @Input() index: number;
  companyName: string;
  productName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
