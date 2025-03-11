export default function Navbar () {
  return (
    <>
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="menu">
        {[
          "Sell Houses",
          "More Info",
          "Home Page",
          "Explore Listings",
          "Buy Houses",
          "Latest Articles",
        ].map((item, index) => (
          <a key={index} href="#">{item}</a>
        ))}
      </div>
      <div className="buttons">
        <button className="join-button">
          <a href="#">Join</a>
        </button>
        <button className="login-button">
          <a href="">Login</a>
        </button>
      </div>
    </nav>
    </>
  )
}
    