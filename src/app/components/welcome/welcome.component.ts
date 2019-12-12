import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  login_form: FormGroup;
  msg
  username
  user
  constructor(
    private _formBuilder: FormBuilder,
    public router: Router,
    private _ApiService: ApiService,
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem("username");
    this.login_form = this._formBuilder.group({
      username: ['', Validators.required],
    });

  }
  On_Connect(): void {
    const username = this.login_form.value.username;
    if (username === null || username === '' || username === undefined) {
      this.msg = 'username is missing'
      setTimeout(() => {
        this.msg = ''
      }, 2000);
    } else {
      const user = localStorage.setItem("username", username);
      this.msg = 'Welcome back'
      setTimeout(() => {
        this.msg = ''
        this.router.navigate(['search']);
      }, 2000);
    }
  }
}
