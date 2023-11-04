import { Auth } from "./auth.interface";
// auntentificacion
export interface User extends Auth {
  name: string;
  description: string;
}