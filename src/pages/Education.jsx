function Education() {
  return (
    <div className="page">
      <section className="education-section">
        <div className="container">
          <h3 className="section-title">Education</h3>
          <div className="education-content">
            <div className="education-item">
              <h4 className="education-title">Bachelor's Degree</h4>
              <p className="education-subtitle">[Your Major] - [University Name]</p>
              <p className="education-year">[Graduation Year]</p>
              <p className="education-description">
                Relevant coursework: [Course 1], [Course 2], [Course 3]. 
                Participated in [clubs/activities]. Graduated with [honors/GPA if applicable].
              </p>
            </div>

            <div className="education-item certifications">
              <h4 className="education-title">Certifications & Additional Learning</h4>
              <ul className="education-list">
                <li>[Certification Name] - [Issuing Organization], [Year]</li>
                <li>[Course/Workshop] - [Platform/Institution], [Year]</li>
                <li>[Additional Training] - [Provider], [Year]</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Education;