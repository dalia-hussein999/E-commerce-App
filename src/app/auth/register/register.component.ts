// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent {

// }
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormArray,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        userName: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validator: this.passwordMatchValidator }
    );
    this.addressForm = this.fb.group({
      address: this.fb.array([]),
    });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ notmatch: true });
    } else {
      form.get('confirmPassword')?.setErrors(null);
    }
  }

  handleFormSubmit() {
    console.log(this.registerForm.value);
  }
  address(): FormArray {
    return this.addressForm.get('address') as FormArray;
  }
  newAddress(): FormGroup {
    return this.fb.group({
      street: '',
      city: '',
      country: '',
    });
  }
  addAddress() {
    this.address().push(this.newAddress());
  }

  removeAddress(addIndex: number) {
    this.address().removeAt(addIndex);
  }
  onSubmit() {
    console.log(this.addressForm.value);
  }
}

