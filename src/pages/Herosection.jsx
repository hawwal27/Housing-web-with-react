import{Blog, link} from "react-dom"

export default function HeroSection () {
  return(
    <>
     <section className="container1">
      <div className="content">
        <h1>Discover Your Perfect Home Today</h1>
        <p>
          We connect you with experienced agents who understand your needs. Start
          your journey to homeownership with confidence and ease.
        </p>
        <div className="buttons">
          <button className="search-button">
            <link to="./Blog.jsx">Search</link>
          </button>
          <button className="learn-more-button">
            <link to="">Learn More</link>
          </button>
        </div>
      </div>
      <div className="image-grid">
        {[
          "housingweb/src/img/OIP (3) - Copy.jpg",
          "OIP2.jpg",
          "OIP3.jpg",
          "OIP4.jpg",
        ].map((img, index) => (
          <img key={index} src={`./img/${img}`} alt={`House ${index + 1}`} />
        ))}
      </div>
    </section>
    
    </>
  )
 };
  
  