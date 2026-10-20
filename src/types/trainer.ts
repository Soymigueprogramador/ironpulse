export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}