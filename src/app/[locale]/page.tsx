import NailPriceTable from "./components/NailPriceTable/NailPriceTable";
import BonusOffer from "./components/BonusOffer/BonusOffer";
import BrowServicesBlock from "./components/browServicesBlock/BrowServicesBlock";
import CertificateBlock from "./components/certificateBlock/CertificateBlock";
import ContactBlock from "./components/contactBlock/ContactBlock";
import FaceCareBlock from "./components/FaceCareBlock/FaceCareBlock";
import FixedPrivacyWidget from "./components/FixedPrivacyWidget/FixedPrivacyWidget";
import Footer from "./components/footer/Footer";
import GreetingBlock from "./components/greetingBlock/GreetingBlock";
import HairdresserServicesBlock from "./components/hairdresserServicesBlock/HairdresserServicesBlock";
import MakeupServicesBlock from "./components/makeupServicesBlock/MakeupServicesBlock";
import MassageBlock from "./components/massageBlock/MassageBlock";
import PromotionBlock from "./components/PromotionBlock/PromotionBlock";
import ReviewsBlock from "./components/reviewsBlock/ReviewsBlock";
import SpecialOffersBlock from "./components/specialOffersBlock/SpecialOffersBlock";

export default function Home() {
  return (
    <div>
      <GreetingBlock />
      <MassageBlock />
      <SpecialOffersBlock />
      <HairdresserServicesBlock />
      <MakeupServicesBlock />
      <BrowServicesBlock />
      <FaceCareBlock />
      <NailPriceTable />
      <CertificateBlock />
      <BonusOffer />
      <PromotionBlock />
      <ReviewsBlock />
      <ContactBlock />
      <FixedPrivacyWidget />
      <Footer />
    </div>
  );
}
