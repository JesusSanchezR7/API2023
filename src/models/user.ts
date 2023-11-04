import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

// hace que el mode obtenga los datos de la base de datos mongo
const UserSchema = new Schema<User>(
  //primer objecto donde estan las definiciones
  {
    name: {
      required: true,
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: "descripcion",
    },
  },
  // segundo objecto 
  {
    versionKey: false,
    timestamps: true,
  }
);

const UserModel = model("users", UserSchema);
export default UserModel;