import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";

export const metadata = {
  title: "MediGo Digital",
  description: "Transforming Healthcare Through Digital Innovation - MediGo Digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="Digital healthcare marketing agency, digital marketing company, best healthcare digital marketing  company, Best Doctors & Clinics, Hospitals
Best Pharmacies & Medical Stores, Best Pharmaceutical Companies ,best Diagnostic Labs" />
        <meta name="description" content="MediGo Digital healthcare marketing company." />
        <link rel="icon" href="/logoMedigo.png" type="image/x-icon" />
      </head>
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
