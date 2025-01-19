"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signIn(formData) {
  let object = {
    name: formData.get("email"),
    password: formData.get("password"),
    loginTime: new Date(),
  };
  let data = JSON.stringify(object);

  cookies().set("auth", data, { maxAge: 86400 });
}
export async function Logout() { }
