import "./Contact.css";
import Send from "../../utils/send";
import SocialsIg from "../../utils/SocialsIg";
import SocialsGh from "../../utils/SocialsGh";
import SocialsLi from "../../utils/SocialsLi";

const Contact = () => {
  return (
    <div>
      <header className="contact-header">
        <h2 className="contact-title">Contact</h2>
      </header>
      <main>
        <div className="contact-container">
          <div className="contact-left">
            <p className="contact-helper-text">
              To avoid getting added to any spam lists, I've included my email
              address as an image below. If you feel like typing that in and
              reaching out that way feel free! Otherwise, the form on the right
              will achieve the same result.
            </p>
            <div className="email-image">hello@allaboatesgoudreau.com</div>
            <div className="contact-socials">
              <p className="social-helper">Find me on the socials</p>
              <div className="social-logos">
                <a
                  className="social-link"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialsLi />
                </a>
                <a
                  className="social-link"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialsIg className="social-middle" />
                </a>
                <a
                  className="social-link"
                  href=""
                  target="_blank"
                  rel="noreferrer"
                >
                  <SocialsGh />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <form className="contact-form">
              <label name="email">
                <input
                  className="single-line-input"
                  type="text"
                  name="email"
                  placeholder="Email"
                ></input>
              </label>
              <label name="subject">
                <input
                  className="single-line-input"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                ></input>
              </label>
              <label>
                <textarea
                  className="text-area"
                  type="text-area"
                  name="message"
                  placeholder="What would you like to say?"
                  rows="6"
                  cols="44"
                ></textarea>
              </label>
              <button className="send-btn">
                Send Message <Send />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
