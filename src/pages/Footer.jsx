export default function Footer() {
  return (
    <>
     <footer>
      <div className="footer-container">
        {[
          {
            title: "Helpful Resources",
            links: ["Blog Posts", "Contact Us", "About Us", "Careers", "FAQs"],
          },
          {
            title: "Connect With Us",
            links: [
              "Facebook Page",
              "Twitter Feed",
              "LinkedIn Profile",
              "Instagram Gallery",
              "YouTube Channel",
            ],
          },
        ].map((column, index) => (
          <div className="footer-column" key={index}>
            <h3>{column.title}</h3>
            <ul>
              {column.links.map((link, idx) => (
                <li key={idx}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">© 2024 jjaola. All rights reserved.</div>
    </footer>
    </>
  )
   
};