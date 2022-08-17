import Contacts from "Components/Contacts/Contacts";
import Footer from "Components/Footer/Footer";
import Header from "Components/Header/Header";
import Head from "next/head";
import { ContactsData } from "shared/constants/pages/ContactsData";

import s from "styles/pages/Contacts.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";

export default function ContactPage() {
  const { contacts } = ContactsData;

  return (
    <>
      <Head>
        <title>КДЦ Московский - Контакты</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Wrapper space borderBottom />
      <Contacts data={contacts} />
      <Footer />
    </>
  );
}
