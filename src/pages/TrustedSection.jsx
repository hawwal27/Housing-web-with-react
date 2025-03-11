export default function TrustedSection() {
  return(
    <>
    <section className="container3">
      <div className="content">
        <div className="image-section">
          <img src="./img/house.jpg" alt="House" />
        </div>
        <div className="text-section">
          <h4>Trusted</h4>
          <h1>Experience Peace of Mind with Verified Listings</h1>
          <p>
            Every listing on our platform is verified by licensed agents. This
            ensures that you can trust the quality and authenticity of each
            property.
          </p>
          <div className="features">
            {[
              {
                title: "Quality Assurance",
                desc: "Only licensed agents verify listings for your peace of mind.",
              },
              {
                title: "Trustworthy Choices",
                desc: "Find your dream home with confidence and security.",
              },
            ].map((feature, index) => (
              <div className="feature" key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
          <div className="actions">
            <button className="learn-more">
              <a href="#">Learn More</a>
            </button>
            <button className="sign-up">
              <a href="#">Sign Up</a>
            </button>
          </div>
        </div>
      </div>
    </section>
    
    </>
  )
}
  
  