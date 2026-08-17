import { Link } from "react-router-dom";
import { ArrowLeft, LogIn } from "../components/icons/index.js";
import { SubmitButton } from "../components/buttons/index.js";
import { talentverxLogo } from "../data/data.jsx";
import "./LoginPage.css";

function LoginPage() {
  return (
    <main className="login">
      <div className="login__bg" aria-hidden="true">
        <div className="login__blob" />
      </div>

      <div className="login__card">
        <Link to="/" className="login__brand" aria-label="TalentVerx HRM home">
          <img
            src={talentverxLogo}
            alt="TalentVerx logo"
            className="login__logo"
            width="40"
            height="40"
          />
          <span className="login__wordmark">
            Talent<span>Verx</span>
          </span>
        </Link>

        <h1 className="tv-heading-md">Sign in to your workspace</h1>
        <p className="login__sub">
          Use the credentials provided by your organization.
        </p>

        <form className="login__form" onSubmit={(e) => e.preventDefault()}>
          <div className="login__field">
            <label htmlFor="login-email">Work email</label>
            <input
              id="login-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
            />
          </div>
          <div className="login__field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </div>
          <SubmitButton block size="lg" icon={LogIn}>
            Sign in
          </SubmitButton>
        </form>

        <p className="login__note">
          Sign-in is provided by your organization. If you don't have access
          yet,{" "}
          <Link to="/#demo">request a demo</Link>.
        </p>

        <Link to="/" className="login__back">
          <ArrowLeft size={15} aria-hidden="true" />
          Back to homepage
        </Link>
      </div>
    </main>
  );
}

export default LoginPage;
