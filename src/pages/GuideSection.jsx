export default function GuideSection() {
  return(
    <>
     <section className="container2">

<header>
  <h1>Simple</h1>
  <h2>Your Guide to Buying a Home</h2>
  <p>
    Navigating the home buying process has never been easier. Our platform
    connects you directly with agents who can assist you every step of the
    way. Follow our simple guide to find your dream home.
  </p>
</header>
<div className="steps">
  {[
    {
      img: "step1.jpg",
      title: "Step 1: Browse Listings",
      desc: "Explore a wide range of available properties.",
    },
    {
      img: "step2.jpg",
      title: "Step 2: Connect with Agents",
      desc: "Get in touch with knowledgeable agents for help.",
    },
    {
      img: "step3.jpg",
      title: "Step 3: Inquire About Properties",
      desc: "Ask questions and gather details about homes.",
    },
  ].map((step, index) => (
    <div className="step" key={index}>
      <img src={`./img/${step.img}`} alt={step.title} />
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
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
</section>
    </>
  )   
};