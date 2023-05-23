
export interface Course {
  id: string
  name: string,
  description: string,
  photo: string,
  status: string ,
  trainer_id: string,
  trainer:{
    "id": string,
    "name":string ,
    "email": string,
    "phone": string,
    "address": string,
    "email_verified_at": string,
    "created_at": string,
    "updated_at": string
  },
  lessons:any,
}
