import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ping-coming-soon-page';
  email = 'Your email address...';
  emailForm: FormGroup;

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      'emailAddr': new FormControl(this.email, [
        Validators.required,
        Validators.email
      ])
    });
  }

  get emailAddr() { return this.emailForm.get('emailAddr'); }

  onSubmit() {
    console.log("Submitted: " + this.emailForm.value);
  }

  clearEmail() {
    this.emailForm.setValue({'emailAddr': ''});
  }
}
