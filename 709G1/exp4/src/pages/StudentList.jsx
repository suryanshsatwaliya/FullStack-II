import { Link } from "react-router";

function StudentList({ students, deleteStudent }) {

  const handleDelete = (id, name) => {
    const confirmed = window.confirm(
      `Delete ${name}? This can't be undone.`
    );

    if (confirmed) {
      deleteStudent(id);
    }
  };

  return (
    <>
      <style>{`

        .students-section {
          margin-top: 6px;
        }

        .students-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .students-title {
          margin: 0;
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          color: var(--ink);
        }

        .students-subtitle {
          margin: 5px 0 0;
          color: var(--slate);
          font-size: 13px;
        }

        .student-count {
          padding: 7px 14px;
          border-radius: 20px;
          border: 1px solid var(--line);
          background: var(--surface);
          color: var(--gold-deep);
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
        }

        .students-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .student-card {
          padding: 20px;
          border-left: 3px solid var(--tab-color, var(--ink));
          transition: 0.2s ease;
        }

        .student-card:hover {
          transform: translateY(-3px);
        }

        .student-card.active { --tab-color: var(--sage); }
        .student-card.inactive { --tab-color: var(--rust); }
        .student-card.graduated { --tab-color: var(--brass); }

        .student-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .student-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .student-avatar {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--ink);
          color: var(--gold-soft);
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 700;
        }

        .student-name {
          margin: 0;
          font-size: 15px;
          font-weight: 700;
          color: var(--ink);
        }

        .student-id {
          margin: 3px 0 0;
          color: var(--slate);
          font-family: var(--font-mono);
          font-size: 11px;
        }

        .status {
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .status.active {
          background: var(--sage-bg);
          color: var(--sage);
        }

        .status.inactive {
          background: var(--rust-bg);
          color: var(--rust);
        }

        .status.graduated {
          background: var(--brass-bg);
          color: var(--brass);
        }

        .student-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          padding: 16px 0;
          border-top: 1px dashed var(--line);
          border-bottom: 1px dashed var(--line);
        }

        .detail-item {
          min-width: 0;
        }

        .detail-label {
          display: block;
          margin-bottom: 4px;
          color: #a49f8d;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-value {
          display: block;
          color: var(--ink-soft);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .student-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
        }

        .student-grade {
          color: var(--slate);
          font-size: 12px;
        }

        .grade {
          margin-left: 4px;
          font-family: var(--font-mono);
          color: var(--ink);
          font-size: 14px;
          font-weight: 700;
        }

        .profile-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 8px 13px;
          border-radius: 7px;
          border: 1px solid var(--line);
          background: transparent;
          color: var(--ink);
          text-decoration: none;
          font-size: 11.5px;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .profile-btn:hover {
          background: var(--ink);
          border-color: var(--ink);
          color: #fdfbf5;
        }

        .card-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .delete-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 8px 13px;
          border-radius: 7px;
          border: 1px solid var(--rust-bg);
          background: transparent;
          color: var(--rust);
          font-size: 11.5px;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .delete-btn:hover {
          background: var(--rust);
          border-color: var(--rust);
          color: white;
        }

        @media (max-width: 800px) {

          .students-grid {
            grid-template-columns: 1fr;
          }

        }

        @media (max-width: 500px) {

          .students-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .student-details {
            grid-template-columns: 1fr;
          }

        }

      `}</style>

      <section className="students-section">

        <div className="students-header">

          <div>
            <h2 className="students-title">
              Student Directory
            </h2>

            <p className="students-subtitle">
              Browse and manage all registered students.
            </p>
          </div>

          <div className="student-count">
            {students.length} Students
          </div>

        </div>


        <div className="students-grid">

          {students.map((student) => (

            <article
              className={`student-card index-card ${student.status.toLowerCase()}`}
              key={student.id}
            >

              <div className="student-top">

                <div className="student-info">

                  <div className="student-avatar">
                    {student.name.charAt(0)}
                  </div>

                  <div>

                    <h3 className="student-name">
                      {student.name}
                    </h3>

                    <p className="student-id">
                      ID #{String(student.id).padStart(4, "0")}
                    </p>

                  </div>

                </div>

                <span
                  className={`status ${student.status.toLowerCase()}`}
                >
                  {student.status}
                </span>

              </div>


              <div className="student-details">

                <div className="detail-item">
                  <span className="detail-label">
                    Course
                  </span>

                  <span className="detail-value">
                    {student.course}
                  </span>
                </div>


                <div className="detail-item">
                  <span className="detail-label">
                    Age
                  </span>

                  <span className="detail-value">
                    {student.age} Years
                  </span>
                </div>


                <div className="detail-item">
                  <span className="detail-label">
                    Email
                  </span>

                  <span className="detail-value">
                    {student.email}
                  </span>
                </div>


                <div className="detail-item">
                  <span className="detail-label">
                    Location
                  </span>

                  <span className="detail-value">
                    {student.address}
                  </span>
                </div>

              </div>


              <div className="student-footer">

                <div className="student-grade">
                  Grade:
                  <span className="grade">
                    {student.grade}
                  </span>
                </div>

                <div className="card-actions">

                  <Link
                    className="profile-btn"
                    to={`/dashboard/profile/${student.id}`}
                  >
                    View Profile →
                  </Link>

                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => handleDelete(student.id, student.name)}
                    aria-label={`Delete ${student.name}`}
                  >
                    Delete
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>
    </>
  );
}

export default StudentList;