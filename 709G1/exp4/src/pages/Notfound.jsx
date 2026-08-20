import { Link } from "react-router";

function Notfound() {
  return (
    <>
      <style>{`
        .notfound-page {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          background: var(--paper);
        }

        .notfound-card {
          max-width: 420px;
          padding: 44px;
          text-align: center;
        }

        .notfound-code {
          font-family: var(--font-mono);
          color: var(--gold-deep);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .notfound-title {
          margin: 14px 0 10px;
          font-family: var(--font-display);
          font-size: 26px;
          font-weight: 600;
          color: var(--ink);
        }

        .notfound-text {
          margin: 0 0 26px;
          color: var(--slate);
          font-size: 14px;
        }

        .notfound-link {
          display: inline-block;
          padding: 11px 22px;
          border-radius: 7px;
          background: var(--ink);
          color: #fdfbf5;
          text-decoration: none;
          font-size: 13.5px;
          font-weight: 700;
        }
      `}</style>

      <div className="notfound-page">
        <div className="notfound-card index-card">
          <div className="notfound-code">RECORD 404</div>
          <h1 className="notfound-title">Page not found</h1>
          <p className="notfound-text">
            There's no page filed under this address.
          </p>
          <Link className="notfound-link" to="/">
            ← Back to Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default Notfound;
