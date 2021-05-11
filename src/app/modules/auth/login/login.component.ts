import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromAuthActions from '../../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  bindId = 'bindId';
  submitted = false;

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.store.dispatch(fromAuthActions.loginPage({username: this.loginForm.value.userName, password: this.loginForm.value.password}));
  }

  // convenience getter for easy access to form fields
  get f(): any { return this.loginForm.controls; }

}
