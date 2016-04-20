import {Component} from 'angular2/core'
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {PasswordValidators} from './passwordValidators'

@Component({
    selector: 'change-password-form',
    templateUrl: 'app/change-password-form.component.html'
})

export class ChangePasswordFormComponent {
    formChangePass: ControlGroup;
    
    constructor(fb: FormBuilder){
        this.formChangePass = fb.group({
                currentPassword: ['', Validators.required, PasswordValidators.oldPassDontMatch],
                newPassword: ['', Validators.required],
                confirmPassword: ['', Validators.required],
            },{
                validator: PasswordValidators.newPassDontMatch
            }
        );
    };
    
    changePass(){
        alert("Password changed succesfully!");
    }
}