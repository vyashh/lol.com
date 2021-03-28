import { useRef, useEffect, useState } from "react";
import "./auth-form.styles.scss";
import { useAuth } from "../../providers/AuthProvider";
import { useHistory } from "react-router-dom";

export default function AuthForm() {
  const { login, logout, currentUser } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);

      history.push("/");
    } catch {
      console.log("error");
    }
  };

  return (
    <div>
      <div className="login">
        <h1 className="font-title">Inloggen</h1>
        <div style={{ float: "left" }} className="mr-3">
          <h5 className="mb-1">Bestaande klanten</h5>
          <div className="auth-form">
            <div className="auth-form__login">
              <form>
                <div className="auth-form__login--email">
                  <input
                    className="form-input--login"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mailadres"
                  />
                </div>
                <div className="auth-form__login--password mt-1">
                  <input
                    className="form-input--login"
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Wachtwoord"
                  />
                </div>
                <div className="auth-form__login--actions mt-1">
                  <button className="primary-button mr-1" onClick={handleLogin}>
                    Inloggen
                  </button>
                  <button className="primary-button mr-1" onClick={logout}>
                    Loguit
                  </button>
                  <p>Wachtwoord vergeten?</p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="divider mr-2"></div>
        <div className="register">
          <h5 className="m-0">Nieuw bij lol.com?</h5>
          <p className="mb-1" style={{ fontSize: ".83em" }}>
            Maak binnen 2 minuten een account aan.
          </p>
          <div className="auth-form__register">
            <input
              className="form-input--register"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mailadres"
            />
            <button className="primary-button mt-1">
              Maak een account aan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
