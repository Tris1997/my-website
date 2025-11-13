function Home() {
  return (
    <div className="page">
      <section className="home-section">
        <div className="container">
          <div className="hero-content">
            <div className="profile-image">
              <img
                src="/profile.png"
                alt="Profile"
              />
            </div>
            
            <h2 className="hero-title">Tristan Clayman</h2>
            <p className="hero-subtitle">
              Software Engineer | Data Enthusiast | Problem Solver 
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h3 className="section-title">About Me</h3>
          <div className="about-content">
            <p>
            Hello, my name is Tristan Clayman. I'm a Computer Science graduate from California State University, Long Beach, 
            where I earned my Bachelor of Science in Computer Science.
            </p>
            <p>
              Throughout my career, I've developed expertise in [key skills] and have worked on various 
              projects that challenged me to grow both technically and professionally.
            </p>
            <p>
              When I'm not working, you can find me [hobbies/interests]. I'm always excited to connect 
              with fellow professionals and explore new opportunities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;