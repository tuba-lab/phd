import React from "react";

const PhdComputerScience = () => {
  return (
    <div style={styles.page}>
      {/* ------- HEADER -------- */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlkwUnVHIhrkSiLdgX6mXkeD-hi47TxsHbLQ&s"
            alt="AMU Logo"
            style={styles.logo}
          />
          <h1 style={styles.title}>ALIGARH MUSLIM UNIVERSITY</h1>
        </div>
      </header>

      {/* ------- MAIN CONTENT -------- */}
      <main style={styles.main}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Ph.D. in Computer Science</h2>
          <ul style={styles.list}>
            <li>
              <strong>Specialization:</strong> Computer Science
            </li>
            <li>
              <strong>Number of Seats:</strong> Depends on vacancies
            </li>
            <li>
              <strong>Degree Requirement:</strong> Refer Guide to Admission
            </li>
            <li>
              <strong>Course Requirement:</strong> Refer Guide to Admission
            </li>
            <li>
              <strong>Job Prospects:</strong>
              <ul>
                <li>
                  R&D centers in industries like IBM, TCS, Wipro, Accenture, HCL
                </li>
                <li>Teaching and Research in Academia</li>
                <li>
                  Research institutes like BARC, ISRO, TCS, ICAR, DRDO, IMD
                </li>
              </ul>
            </li>
          </ul>

          <h3 style={styles.subHeading}>
            Program Educational Objectives (PEO’s):
          </h3>
          <ul style={styles.list}>
            <li>
              <strong>PEO1:</strong> To become an expert in specific research
              fields by enhancing domain understanding through independent and
              collaborative work.
            </li>
            <li>
              <strong>PEO2:</strong> To nurture research awareness and
              responsibility, upholding ethics.
            </li>
            <li>
              <strong>PEO3:</strong> To develop high-quality intellectual
              property, publishing in conferences, journals, or patents.
            </li>
          </ul>

          <h3 style={styles.subHeading}>Program Outcomes (PO’s):</h3>
          <ul style={styles.list}>
            <li>
              <strong>PO1:</strong> Identify research problems, review existing
              literature, and address gaps in their field.
            </li>
            <li>
              <strong>PO2:</strong> Solve complex problems with proper analysis
              and suggest solutions.
            </li>
            <li>
              <strong>PO3:</strong> Use theories, methods, and tools to develop
              effective and sustainable solutions.
            </li>
            <li>
              <strong>PO4:</strong> Discover and expand current knowledge
              through publications and results.
            </li>
            <li>
              <strong>PO5:</strong> Propose innovative solutions for global
              health, societal, and environmental challenges.
            </li>
            <li>
              <strong>PO6:</strong> Use modeling, simulation, and forecasting
              for research validation.
            </li>
            <li>
              <strong>PO7:</strong> Demonstrate leadership, ethics, and
              professional responsibility.
            </li>
            <li>
              <strong>PO8:</strong> Promote lifelong learning for research and
              development.
            </li>
          </ul>

          <p style={styles.syllabus}>
            <strong>Syllabus:</strong>{" "}
            <a href="#" style={styles.link}>
              Click here to view Syllabus
            </a>
          </p>

          <p>
            <strong>Available:</strong> Yes
          </p>
        </div>
      </main>

      {/* ------- FOOTER -------- */}
      <footer style={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Department of Computer Science, AMU
        </p>
      </footer>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "Segoe UI, sans-serif",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    backgroundColor: "#fff",
    borderBottom: "4px solid #065e52",
    padding: "10px 20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  logo: {
    width: "50px",
    height: "50px",
  },
  title: {
    fontSize: "1.5rem",
    color: "#065e52",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    padding: "30px 20px",
    background: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    maxWidth: "800px",
    width: "100%",
  },
  sectionTitle: {
    fontSize: "1.3rem",
    color: "#004d40",
    marginBottom: "20px",
    borderBottom: "2px solid #004d40",
    paddingBottom: "10px",
  },
  subHeading: {
    fontSize: "1.1rem",
    color: "#00796b",
    marginTop: "25px",
    marginBottom: "10px",
  },
  list: {
    listStyle: "disc",
    paddingLeft: "20px",
    lineHeight: "1.6",
    color: "#333",
  },
  syllabus: {
    marginTop: "20px",
  },
  link: {
    color: "#00796b",
    textDecoration: "underline",
  },
  footer: {
    backgroundColor: "#ffffff",
    textAlign: "center",
    padding: "15px 10px",
    borderTop: "1px solid #ccc",
    color: "#004d40",
  },
};

export default PhdComputerScience;
