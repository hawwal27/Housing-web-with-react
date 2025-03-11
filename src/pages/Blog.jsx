import React from "react";
import "../css/blog.css";

export function BlogPost() {
  return (
    <>
    <div className="blog-container">
      <header>
        <a href="/" className="back-link">&larr; Back</a>
        <h1>Blog Post</h1>
      </header>

      <section className="content">
        <div className="tag">Insights</div>
        <span className="read-time">5 min read</span>
        <h2>Unveiling the Strategies for Better Housing Solutions</h2>
        <img src="./img/OIP (3).jpg" alt="Beautiful house" className="blog-image" />

        <div className="details">
          <p>Authored by <span>Ijaola</span></p>
          <p>Released on <span>22 January 2023</span></p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <h1 className="title">Introduction</h1>
          <p>
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus
            eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim uma, etiam.
          </p>
        </section>
        <div className="image-container">
          <img src="./img/R - Copy.jpg" alt="Modern house" />
          <p className="image-caption">Image caption goes here</p>
        </div>
      </div>

      <div className="testimonial-container">
        <div className="image-section">
          <img src="./img/photo-of-house-3555615.jpg" alt="House image" />
        </div>
        <div className="text-section">
          <div className="rating">★★★★★</div>
          <p className="testimonial">
            "This blog transformed my understanding of Agents Housing strategies! I highly recommend it."
          </p>
          <p className="author">
            <strong>Ijaola</strong>
            <br />Housing manager
          </p>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-column">
            <h3>Helpful Resources</h3>
            <ul>
              <li><a href="#">Blog Posts</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect With Us</h3>
            <ul>
              <li><a href="#">Facebook Page</a></li>
              <li><a href="#">Twitter Feed</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">© 2024 jjaola. All rights reserved.</div>
      </footer>
    </div>
    </>
  );
};

export default BlogPost;
