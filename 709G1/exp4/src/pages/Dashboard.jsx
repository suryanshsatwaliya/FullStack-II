import { Link, Outlet } from "react-router";

function Dashboard({ students }) {

  const activeStudents = students.filter(
    student => student.status === "Active"
  ).length;

  const inactiveStudents = students.filter(
    student => student.status === "Inactive"
  ).length;

  const graduatedStudents = students.filter(
    student => student.status === "Graduated"
  ).length;

  const totalStudents = students.length;

  return (
    <>
      <style>{`

        .dashboard-page {
          flex: 1;
          background: var(--paper);
          padding: 44px 30px 70px;
        }

        .dashboard-wrapper {
          max-width: 1180px;
          margin: auto;
        }

        /* HEADER */

        .dashboard-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: 22px;
          margin-bottom: 30px;
          border-bottom: 1px solid var(--line);
        }

        .dashboard-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 36px;
          font-weight: 600;
          letter-spacing: -0.5px;
          color: var(--ink);
        }

        .dashboard-subtitle {
          margin: 8px 0 0;
          color: var(--slate);
          font-size: 14px;
        }

        .welcome-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 14px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 20px;
          color: var(--gold-deep);
          font-size: 12px;
          font-weight: 700;
        }

        /* STATISTICS */

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card {
          padding: 22px;
          min-height: 130px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: 0.25s ease;
          border-left: 3px solid var(--tab-color, var(--ink));
        }

        .stat-card:hover {
          transform: translateY(-3px);
        }

        .stat-card.total { --tab-color: var(--ink); }
        .stat-card.active { --tab-color: var(--sage); }
        .stat-card.inactive { --tab-color: var(--rust); }
        .stat-card.graduated { --tab-color: var(--brass); }

        .stat-label {
          color: var(--slate);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .stat-number {
          margin-top: 14px;
          font-family: var(--font-mono);
          font-size: 32px;
          font-weight: 700;
          color: var(--ink);
        }

        /* MANAGEMENT */

        .management-card {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--ink);
          border-radius: 10px;
          padding: 32px;
          margin-bottom: 30px;
          overflow: hidden;
        }

        .management-content {
          position: relative;
          z-index: 2;
        }

        .management-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          color: #fdfbf5;
        }

        .management-description {
          margin: 8px 0 22px;
          color: #b6bdd2;
          font-size: 14px;
          max-width: 420px;
        }

        .management-buttons {
          display: flex;
          gap: 12px;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 7px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .primary-btn {
          background: var(--gold);
          color: var(--ink);
        }

        .primary-btn:hover {
          background: #cc9a3e;
          transform: translateY(-2px);
        }

        .secondary-btn {
          background: transparent;
          color: #fdfbf5;
          border: 1px solid rgba(232, 217, 181, 0.3);
        }

        .secondary-btn:hover {
          border-color: var(--gold-soft);
          transform: translateY(-2px);
        }

        .management-decoration {
          position: absolute;
          right: 20px;
          bottom: -30px;
          font-size: 130px;
          opacity: 0.08;
          transform: rotate(-8deg);
        }

        /* OUTLET */

        .outlet-container {
          animation: pageEnter 0.35s ease;
        }

        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateY(12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 950px) {

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .management-decoration {
            display: none;
          }

        }

        @media (max-width: 650px) {

          .dashboard-page {
            padding: 28px 16px 50px;
          }

          .dashboard-top {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .dashboard-title {
            font-size: 28px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .management-card {
            padding: 24px;
          }

          .management-buttons {
            flex-direction: column;
          }

          .primary-btn,
          .secondary-btn {
            justify-content: center;
          }

        }

      `}</style>

      <main className="dashboard-page">

        <div className="dashboard-wrapper">

          {/* HEADER */}

          <div className="dashboard-top">

            <div>
              <h1 className="dashboard-title">
                Dashboard
              </h1>

              <p className="dashboard-subtitle">
                Manage and monitor your students in one place.
              </p>
            </div>

            <div className="welcome-badge">
              ✦ Student Management
            </div>

          </div>


          {/* STATISTICS */}

          <div className="stats-grid">

            <div className="stat-card index-card total">
              <div className="stat-label">
                Total Students
              </div>

              <div className="stat-number">
                {totalStudents}
              </div>
            </div>


            <div className="stat-card index-card active">
              <div className="stat-label">
                Active Students
              </div>

              <div className="stat-number">
                {activeStudents}
              </div>
            </div>


            <div className="stat-card index-card inactive">
              <div className="stat-label">
                Inactive Students
              </div>

              <div className="stat-number">
                {inactiveStudents}
              </div>
            </div>


            <div className="stat-card index-card graduated">
              <div className="stat-label">
                Graduated Students
              </div>

              <div className="stat-number">
                {graduatedStudents}
              </div>
            </div>

          </div>


          {/* MANAGEMENT */}

          <section className="management-card">

            <div className="management-content">

              <h2 className="management-title">
                Student Management
              </h2>

              <p className="management-description">
                Add new students or browse your complete student directory.
              </p>

              <div className="management-buttons">

                <Link
                  to="addstudent"
                  className="primary-btn"
                >
                  ＋ Add New Student
                </Link>

                <Link
                  to="studentlist"
                  className="secondary-btn"
                >
                  View All Students →
                </Link>

              </div>

            </div>

            <div className="management-decoration">
              🎓
            </div>

          </section>


          {/* NESTED ROUTES */}

          <div className="outlet-container">
            <Outlet />
          </div>

        </div>

      </main>
    </>
  );
}

export default Dashboard;
