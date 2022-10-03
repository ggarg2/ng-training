import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {delay, distinctUntilChanged, of, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit, AfterViewInit, OnDestroy {

  title: any = "Hello world";

  firstName: any;
  emailId: any;
  phoneNumber: any;

  @ViewChild('myForm') anyForm: NgForm;
  @ViewChild('emailIdControl') anyControl: NgModel;
  @ViewChild('helloForm') helloWorld: any;

  nestedFormValues = [
    {

    }
  ]

  someSubscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit anyForm ', this.anyForm);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log('Inside ngAfterViewInit anyForm ', this.anyForm.controls['firstName']);
    }, 1000)

    console.log('Inside ngAfterViewInit anyControl is ', this.anyControl);

    console.log('helloWorld ', this.helloWorld);
    of({}).pipe(
      delay(2000)
    ).subscribe(
      {
        next: (t) => {
          /*this.helloWorld.nativeElement.innerText = 'changed';
          this.anyControl.control.markAsTouched();
          this.anyControl.control.setValue('abc@abc.com')
          this.anyControl.control.setErrors({ customError: true })
          */
          this.anyControl.control.valueChanges
            .pipe(
              distinctUntilChanged(),
              delay(1000),
            )
            .subscribe(
            {
              next: (result) => {
                console.log('Inside valueChanges result is ', result);
                if (result === 'hello') {
                  console.log('correct value');
                  this.anyControl.control.setErrors({ helloError: undefined })
                } else {
                  this.anyControl.control.setErrors({ helloError: true })
                }
              }
            }
          )
        },
        error: (e) => {

        },
        complete: () => {

        }
      }
    );
  }

  submit(myForm: NgForm) {
    console.log('myForm ', myForm);
  }

  assignSomeDefaultName() {
    this.firstName = 'Chandru';
  }

  reset(myForm: NgForm) {
    myForm.reset();
  }

  ngOnDestroy(): void {
    if(this.someSubscription) {
      this.someSubscription?.unsubscribe();
    }
  }
}

