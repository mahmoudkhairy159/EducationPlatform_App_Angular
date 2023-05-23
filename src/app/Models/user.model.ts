
export interface User {

    id: string,
    name:string,
  email: string,
  password: string,
  password_confirmation:string,
    phone: string,
    address: string,
    auth_token: string,
    user_profile: {
        id: string,
        nationalId: string,
        gender: string,
        governorate: string,
        city: string,
        educationType: string,
        educationYear: string,
        photo: string,
        user_id: string,
    }
}








