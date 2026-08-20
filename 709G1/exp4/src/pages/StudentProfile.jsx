import { Link, useParams } from 'react-router';


function StudentProfile({ students }) {
  const { id } = useParams();

  const student = students.find(
    (std) => std.id === Number(id)
  );

  // Student not found
  if (!student) {
    return (
      <>
        <style>{`
          .not-found {
            padding: 50px 40px;
            text-align: center;
          }

          .not-found h2 {
            margin: 0 0 8px;
            font-family: var(--font-display);
            color: var(--ink);
          }

          .not-found p {
            color: var(--slate);
            margin: 0 0 22px;
            font-family: var(--font-mono);
            font-size: 13px;
          }

          .back-btn {
            display: inline-block;
            text-decoration: none;
            background: var(--ink);
            color: #fdfbf5;
            padding: 11px 20px;
            border-radius: 7px;
            font-size: 13px;
            font-weight: 700;
          }
        `}</style>

        <div className="not-found index-card">
          <h2>Student Not Found</h2>
          <p>
            No record exists for ID #{id}
          </p>

          <Link className="back-btn" to="/dashboard/studentlist">
            ← Back to Students
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <style>{`
        .profile-container {
          padding: 6px 0 30px;
        }

        .profile-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .profile-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          color: var(--ink);
        }

        .profile-subtitle {
          margin: 6px 0 0;
          color: var(--slate);
          font-size: 13px;
        }

        .back-link {
          text-decoration: none;
          color: var(--ink);
          border-bottom: 1px solid var(--gold);
          padding-bottom: 2px;
          font-size: 13px;
          font-weight: 600;
        }

        .profile-card {
          overflow: hidden;
        }

        .profile-banner {
          height: 96px;
          background: var(--ink);
        }

        .profile-main {
          padding: 0 30px 30px;
        }

        .profile-intro {
          display: flex;
          align-items: flex-end;
          gap: 18px;
          margin-top: -40px;
          margin-bottom: 28px;
        }

        .profile-avatar {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          background: var(--surface-flat);
          border: 4px solid var(--surface-flat);
          box-shadow: 0 4px 15px rgba(22, 35, 63, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink);
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 700;
        }

        .profile-name {
          margin: 0 0 5px;
          font-family: var(--font-display);
          font-size: 23px;
          font-weight: 600;
          color: var(--ink);
        }

        .profile-id {
          margin: 0;
          color: var(--slate);
          font-family: var(--font-mono);
          font-size: 12px;
        }

        .profile-status {
          margin-left: auto;
          padding: 6px 13px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .profile-status.active {
          background: var(--sage-bg);
          color: var(--sage);
        }

        .profile-status.inactive {
          background: var(--rust-bg);
          color: var(--rust);
        }

        .profile-status.graduated {
          background: var(--brass-bg);
          color: var(--brass);
        }

        .details-title {
          margin: 0 0 16px;
          font-family: var(--font-display);
          font-size: 17px;
          font-weight: 600;
          color: var(--ink);
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .detail-box {
          padding: 16px 18px;
          background: var(--paper);
          border-radius: 8px;
          border: 1px solid var(--line);
        }

        .detail-label {
          display: block;
          margin-bottom: 6px;
          font-size: 10.5px;
          font-weight: 700;
          color: #a49f8d;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-value {
          font-size: 14.5px;
          font-weight: 600;
          color: var(--ink-soft);
          word-break: break-word;
        }

        .grade-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .grade-value {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--ink);
          color: var(--gold-soft);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 13px;
        }

        @media (max-width: 650px) {
          .profile-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .profile-main {
            padding: 0 20px 25px;
          }

          .profile-intro {
            align-items: flex-start;
            flex-direction: column;
          }

          .profile-status {
            margin-left: 0;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="profile-container">

        {/* Header */}
        <div className="profile-header">

          <div>
            <h2 className="profile-title">
              Student Profile
            </h2>

            <p className="profile-subtitle">
              View complete student information
            </p>
          </div>

          <Link
            className="back-link"
            to="/dashboard/studentlist"
          >
            ← Back to Students
          </Link>

        </div>

        {/* Profile Card */}
        <div className="profile-card index-card">

          <div className="profile-banner"></div>

          <div className="profile-main">

            {/* Profile Intro */}
            <div className="profile-intro">

              <div className="profile-avatar">
                {student.name.charAt(0)}
              </div>

              <div>
                <h1 className="profile-name">
                  {student.name}
                </h1>

                <p className="profile-id">
                  Student ID: #{String(student.id).padStart(4, "0")}
                </p>
              </div>

              <span
                className={`profile-status ${student.status.toLowerCase()}`}
              >
                {student.status}
              </span>

            </div>

            {/* Details */}
            <h3 className="details-title">
              Student Information
            </h3>

            <div className="details-grid">

              <div className="detail-box">
                <span className="detail-label">
                  Full Name
                </span>

                <span className="detail-value">
                  {student.name}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Age
                </span>

                <span className="detail-value">
                  {student.age} Years
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Course
                </span>

                <span className="detail-value">
                  {student.course}
                </span>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Email
                </span>

                <span className="detail-value">
                  {student.email}
                </span>
              </div>

              <div className="detail-box grade-box">
                <div>
                  <span className="detail-label">
                    Grade
                  </span>

                  <span className="detail-value">
                    Academic Performance
                  </span>
                </div>

                <div className="grade-value">
                  {student.grade}
                </div>
              </div>

              <div className="detail-box">
                <span className="detail-label">
                  Status
                </span>

                <span className="detail-value">
                  {student.status}
                </span>
              </div>

              <div className="detail-box" style={{ gridColumn: "1 / -1" }}>
                <span className="detail-label">
                  Address
                </span>

                <span className="detail-value">
                  {student.address}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default StudentProfile;
