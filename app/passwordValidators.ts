import {ControlGroup, Control} from 'angular2/common'

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

    static oldPassDontMatch(control: Control){
            return new Promise((resolve, reject) => {
                setTimeout(function(){
                    if ( control.value != "1234")
                        resolve({ oldPassDontMatch: true });
                    else
                        resolve(null);
                }, 500);
            });
    }
}