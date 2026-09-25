import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata = {
  title: "Contact Al Rashideen Engineering | Crane Repair & Hydraulic Seals UAE",
  description: "Contact Al Rashideen Engineering for crane boom repair, slewing bearings, hydraulic seals. Workshop: Industrial Area Sajaa, Sharjah UAE. WhatsApp: +971 52 636 6779. Fast response in 2 hours.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#0a0a0a]">
      <ContactHero />
      <div className="py-12 sm:py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
