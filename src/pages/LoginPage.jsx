import React from "react";
import Menu from "../components/menu/menu.component";
import AuthForm from "../components/auth-form/auth-form.component";

export default function LoginPage() {
  return (
    <div>
      <Menu />
      <div className="container-sm">
        <AuthForm />
      </div>
    </div>
  );
}
