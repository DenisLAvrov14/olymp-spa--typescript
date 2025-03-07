import BrowServicesBlock from "./components/browServicesBlock/BrowServicesBlock";
import CertificateBlock from "./components/certificateBlock/CertificateBlock";
import ContactBlock from "./components/contactBlock/ContactBlock";
import Footer from "./components/footer/Footer";
import GreetingBlock from "./components/greetingBlock/GreetingBlock";
import HairdresserServicesBlock from "./components/hairdresserServicesBlock/HairdresserServicesBlock";
import MassageBlock from "./components/massageBlock/MassageBlock";
import ReviewsBlock from "./components/reviewsBlock/ReviewsBlock";
import SpecialOffersBlock from "./components/specialOffersBlock/SpecialOffersBlock";

export default function Home() {
  return (
    <div>
      <GreetingBlock />
      <MassageBlock />
      <SpecialOffersBlock />
      <HairdresserServicesBlock />
      <BrowServicesBlock />
      <CertificateBlock />
      <ReviewsBlock />
      <ContactBlock />
      <Footer />
    </div>
  );
}
