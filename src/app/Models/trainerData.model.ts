
export interface TrainerData {
  id: string,
  name: string,
  email: string,
  address: string,
  phone: string,
  password: string,
  password_confirmation: string,
  auth_token:string,
  trainer_profile: {
    id:string,
    nationalId: string,
    gender: string,
    governorate: null,
    city: string,
    description_ar: string,
    description_en: string,
    job:string,
    photo: string,
    trainer_id: string,
    created_at: string,
    updated_at: string
  }

}
