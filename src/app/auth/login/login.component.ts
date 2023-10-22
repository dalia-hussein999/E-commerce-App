
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  handleSubmitForm(form: any) {
    console.log(form);
    localStorage.setItem('auth' ,'token')
  }
}
