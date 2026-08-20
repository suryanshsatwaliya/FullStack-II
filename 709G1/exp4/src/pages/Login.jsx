import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "admin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/dashboard";
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <>
      <style>{`

        .login-page {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
          background:
            radial-gradient(circle at 15% 20%, rgba(184, 134, 46, 0.10), transparent 35%),
            var(--ink);
        }

        .login-card {
          width: 100%;
          max-width: 410px;
          padding: 40px;
          animation: slideUp 0.4s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-seal {
          width: 54px;
          height: 54px;
          margin: 0 auto 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1.5px solid var(--gold);
          background: var(--ink);
          color: var(--gold-soft);
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
        }

        .login-card h2 {
          margin: 0;
          text-align: center;
          font-family: var(--font-display);
          color: var(--ink);
          font-size: 26px;
          font-weight: 600;
        }

        .login-subtitle {
          margin: 8px 0 30px;
          text-align: center;
          color: var(--slate);
          font-size: 13.5px;
        }

        .input-group {
          margin-bottom: 18px;
        }

        .input-group label {
          display: block;
          margin-bottom: 7px;
          color: var(--ink-soft);
          font-size: 13px;
          font-weight: 600;
        }

        .input-wrapper {
          position: relative;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--slate);
          font-size: 15px;
        }

        .input-wrapper input {
          width: 100%;
          height: 46px;
          padding: 0 42px;
          border: 1px solid var(--line);
          border-radius: 7px;
          outline: none;
          background: var(--paper);
          color: var(--ink);
          font-size: 13.5px;
          transition: all 0.2s ease;
        }

        .input-wrapper input::placeholder {
          color: #a49f8d;
        }

        .input-wrapper input:focus {
          background: var(--surface-flat);
          border-color: var(--gold);
          box-shadow: 0 0 0 3px rgba(184, 134, 46, 0.15);
        }

        .password-toggle {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          border: none;
          background: transparent;
          color: var(--slate);
          cursor: pointer;
          font-size: 14px;
        }

        .password-toggle:hover {
          color: var(--gold-deep);
        }

        .login-button {
          width: 100%;
          height: 48px;
          margin-top: 8px;
          border: none;
          border-radius: 7px;
          background: var(--ink);
          color: #fdfbf5;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .login-button:hover {
          background: var(--ink-soft);
          transform: translateY(-1px);
        }

        .login-hint {
          margin: 22px 0 0;
          padding: 12px 14px;
          border-radius: 7px;
          background: var(--paper);
          border: 1px dashed var(--line);
          text-align: center;
          color: var(--slate);
          font-size: 12px;
        }

        .login-hint code {
          font-family: var(--font-mono);
          color: var(--gold-deep);
          font-weight: 600;
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 30px 22px;
          }

          .login-card h2 {
            font-size: 22px;
          }
        }
      `}</style>

      <div className="login-page">
        <form className="login-card index-card" onSubmit={handleSubmit}>

          <div className="login-seal">
            S
          </div>

          <h2>Welcome Back</h2>
          <p className="login-subtitle">
            Sign in to continue to your dashboard
          </p>

          <div className="input-group">
            <label>Email Address</label>

            <div className="input-wrapper">
              <span className="input-icon">✉</span>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>

            <div className="input-wrapper">
              <span className="input-icon">🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <button className="login-button" type="submit">
            Sign In →
          </button>

          <p className="login-hint">
            Demo access — <code>admin@gmail.com</code> / <code>admin123</code>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
