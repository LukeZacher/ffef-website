import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { formInputLengthValidator } from './footer-contact.models';

@Component({
  selector: 'app-footer-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './footer-contact.component.html',
  styleUrl: './footer-contact.component.scss',
})
export class FooterContactComponent {
  contactForm: FormGroup;
  nameLengthValidator: formInputLengthValidator = {
    inputName: 'name',
    minLength: 2,
    maxLength: 100,
  };
  emailLengthValidator: formInputLengthValidator = {
    inputName: 'email',
    maxLength: 254,
  };
  subjectLengthValidator: formInputLengthValidator = {
    inputName: 'subject',
    maxLength: 125,
  };
  messageLengthValidator: formInputLengthValidator = {
    inputName: 'message',
    minLength: 10,
    maxLength: 3000,
  };

  submitAttempted: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(this.nameLengthValidator.minLength!),
          Validators.maxLength(this.nameLengthValidator.maxLength!),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(this.emailLengthValidator.maxLength!),
        ],
      ],
      subject: [
        '',
        [Validators.maxLength(this.subjectLengthValidator.maxLength!)],
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(this.messageLengthValidator.minLength!),
          Validators.maxLength(this.messageLengthValidator.maxLength!),
        ],
      ],
    });
  }

  onSubmit() {
    this.submitAttempted = true;

    if (this.contactForm.valid) {
      console.log('Form valid');
    } else {
      console.log('Form invalid');
    }
  }

  getErrorMessage(fieldName: string): string | null {
    const field = this.contactForm.get(fieldName);

    if (!field || !(field.invalid && (field.touched || this.submitAttempted))) {
      return null;
    }

    // Priority order: required → minlength → maxlength → email
    if (field.hasError('required')) {
      return `${this.capitalizeFieldName(fieldName)} is required`;
    }

    if (field.hasError('minlength')) {
      const minLength = field.getError('minlength').requiredLength;
      return `${this.capitalizeFieldName(
        fieldName
      )} must be at least ${minLength} characters`;
    }

    if (field.hasError('maxlength')) {
      const maxLength = field.getError('maxlength').requiredLength;
      return `${this.capitalizeFieldName(
        fieldName
      )} cannot exceed ${maxLength} characters`;
    }

    if (field.hasError('email')) {
      return 'Please enter a valid email address';
    }

    return null;
  }

  private capitalizeFieldName(fieldName: string): string {
    return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
  }
}
