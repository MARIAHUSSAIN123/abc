import './App.css';
import logo from './assets/icons8-website.gif';

export default function App() {
  return (
    <div>
      <header className='header'>
        <div className='logo'>
          <img src={logo} alt="website logo" />
        </div>
        <nav className='Nav'>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#service">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id='home' className='hero-Section'>
        <h1>Welcome to the world of Tech.</h1>
        <p>Technology encompasses a wide range of fields, including health, agriculture, artificial intelligence, information and communication, energy, transportation, and education, among others. It also includes specific technologies like biotechnology, manufacturing, construction, and the Internet of Things</p>
      </section>

      <section id="about" class="Section">
    <div class="about-content">
      <div class="about-text">
        <h1>About Us</h1>
        <p>
          We are passionate developers and designers delivering high-quality digital products.
          Our mission is to make the web more beautiful and functional. With a creative team and innovative minds, we shape the future of web technology.
        </p>
      </div>
      <div class="about-image">
        <img src="./assets/web.jpg" alt="" />
      </div>
    </div>
  </section>

      <section id='service' className='Section'>
  <h2>Our Services</h2>
  <div className='cart-container'>

    <div className='cart'>
      <img src="https://source.unsplash.com/400x200/?web,design" alt="" />
      <h3>Web design</h3>
      <p>Web designing, also known as web design, is the process of creating the visual layout and user experience of a website.</p>
    </div>

    <div className='cart'>
      <img src="./assets/web.jpg" alt="" />
      <h3>UI & UX</h3>
      <p>A UI UX designer focuses on creating user-friendly and engaging experiences for digital products. They work on both the user interface (UI), which is the visual elements users interact </p>
    </div>

    <div className='cart'>
      <img src="https://source.unsplash.com/400x200/?css,style" alt="" />
      <h3>Styling</h3>
      <p>Styling design encompasses the art of making things visually appealing and aesthetically pleasing, whether it's a product, a space, or a digital interface. </p>
    </div>

    <div className='cart'>
      <img src="https://source.unsplash.com/400x200/?graphic,design" alt="" />
      <h3>Graphic</h3>
      <p>Graphic design is a visual communication and problem-solving profession that uses typography, imagery, and color to create and convey ideas and messages effectively.</p>
    </div>

    <div className='cart'>
      <img src="https://source.unsplash.com/400x200/?coding,developer" alt="" />
      <h3>Developing</h3>
      <p>Programming, also known as coding, is the process of creating a set of instructions for a computer to follow, enabling it to perform specific tasks. </p>
    </div>

    <div className='cart'>
      <img src="https://source.unsplash.com/400x200/?programming,web" alt="" />
      <h3>Web development</h3>
      <p>Popular programming languages for web development include Javascript, HTML5, CSS3, PHP, and Java. You can take lessons in these languages on free online sites . </p>
    </div>

  </div>
</section>


<section id="contact" class="Section contact-section">
    <h2>Contact Us</h2>
    <form class="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>

      <footer className='footer'>
        <p>&copy; 2025 Mywebsite. All rights reserved</p>
      </footer>
    </div>
  );
}
