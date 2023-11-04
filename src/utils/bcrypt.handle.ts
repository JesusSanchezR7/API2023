import { hash, compare } from "bcryptjs";

// nos ayudara a encritpar las cosntrasenas de nuestros usuarios
const encrypt = async (pass: string) => {
  const passwordHash = await hash(pass, 8);
  return passwordHash;
};

//verifica la contrasena que consida
const verified = async (pass: string, passHash: string) => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
};

export { encrypt, verified };