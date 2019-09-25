import { FormControl, AbstractControl } from '@angular/forms';

export interface ValidationResult {
    [key: string]: boolean;
}

export class PasswordValidator {

    public static strong(control: FormControl): ValidationResult {
        const hasNumber = /\d/.test(control.value);
        const hasUpper = /[A-Z]/.test(control.value);
        const hasLower = /[a-z]/.test(control.value);
        // console.log('Num, Upp, Low', hasNumber, hasUpper, hasLower);
        const valid = hasNumber && hasUpper && hasLower;
        if (!valid) {
            // return what´s not valid
            return { strong: true };
        }
        return null;
    }

    public static correctPattern(control: FormControl): ValidationResult  {
    const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\?])(?=.{8,})');
        if (!passwordRegex.test(control.value)) {
          return {passwordInvalid : true };
        }
        return null;
    }

    public static matchPassword(c: AbstractControl): ValidationResult {
        if (c.get('confirmPassword').value !== c.get('password').value) {
            return { 'matchedPassword': true };
        }

        return null;
    }

}