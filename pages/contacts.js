import Contacts from "Components/Contacts/Contacts";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Head from "next/head";
import { ContactsData } from "shared/constants/pages/ContactsData";

import s from "styles/pages/Contacts.module.scss";

export default function ContactPage() {
  const {
    contacts
  } = ContactsData

  return (
    <>
      <Head>
        <title>Contacts Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={s.wrapper}>
        <Contacts data={contacts} />
      </div>
      <Footer />
    </>
  );
}
