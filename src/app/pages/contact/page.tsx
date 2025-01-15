// Components
import Layout from "../../components/Layout/Layout";
import ContactIntroduction from "../../components/ContactIntroduction/ContactIntroduction";
import SocialMediaContact from "../../components/SocialMediaContact/SocialMediaContact";

// Style
import "./contact.scss";

function Contact() {
  return (
    <Layout>
      <div className="contact-content">
        <ContactIntroduction />
        <div className="contact-content__line"></div>
        <SocialMediaContact />
      </div>
    </Layout>
  );
}

export default Contact;
