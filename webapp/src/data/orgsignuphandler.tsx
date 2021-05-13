import { last } from 'lodash';
import api from '../api';


// Organization Signup Handler


export default function signUpHaorgsignUpHandelerndeler() {

    function _OrgSignUp(org_name: string, first_name: string, last_name: string, email: string, password: string) {

        api.orgs.post({ org_name, first_name, last_name, email, password }).then(responce => {
        });
    }

    return {
        _OrgSignUp
    }

}