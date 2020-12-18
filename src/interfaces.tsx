import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import api from './api';


export interface IsignUp{
    Fname: string;
    Lname: string;
    email: string;
    password: string;
    success: boolean;
}

export const signupState = atom({
    key: 'signup',
    default: [] as IsignUp[]
});

export const completedSignUpState =  selector({
    key: "completedSignUp",
    get: ({ get }) => {
        return get(signupState).filter(signup => signup.success)
    }
})

export const remainingSignUpState =  selector({
    key: "remainingSignUp",
    get: ({ get }) => {
        return get(signupState).filter(signup => !signup.success)
    }
})
export function useSignUp(){

    const [ signUp, setSignUp] = useRecoilState<IsignUp[]>(signupState);
    const completedSignUp = useRecoilValue(completedSignUpState);
    const remainingSignUp = useRecoilValue(remainingSignUpState);

    const loadRemotSignUP = () => {
        
    }
}