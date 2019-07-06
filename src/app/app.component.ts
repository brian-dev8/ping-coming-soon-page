import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ping-coming-soon-page';
  email = 'Your email address...';
  emailForm: FormGroup;

  hiddenErrorClass = {
    error_hidden: true
  };

  textInputClass = {
    'text-input-error': false,
    'text-input': true
  };

  ngOnInit(): void {
    this.emailForm = new FormGroup({
      emailAddr: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ])
    });
  }

  get emailAddr() { return this.emailForm.get('emailAddr'); }

  onSubmit() {
    console.log('Submitted: ' + this.emailForm.value);
  }

  clearEmail() {
    if (this.emailAddr.value === this.email) {
      this.emailForm.setValue({emailAddr: ''});
    }
    this.hiddenErrorClassToggle(true);
  }

  emailValid() {
    if (!this.emailAddr.valid) {
      this.hiddenErrorClassToggle(false);
    } else {
      this.hiddenErrorClassToggle(true);
    }
  }

  hiddenErrorClassToggle(isHidden: boolean) {
    this.hiddenErrorClass = {
      error_hidden: isHidden
    };

    this.textInputClass = {
      'text-input': true,
      'text-input-error': !isHidden
    };
  }

}
