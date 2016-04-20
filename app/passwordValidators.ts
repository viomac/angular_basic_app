import {ControlGroup} from 'angular2/common'

export class PasswordValidators {
    static newPassDontMatch(group: ControlGroup){
        var newPass = group.find('newPassword');
        var confirmPass = group.find('confirmPassword');
        
        if( confirmPass.value.length == 0)
            return null;
        
        if(newPass.value == confirmPass.value )
            return  null;

        return { newPassDontMatch: true}
        
    }
}