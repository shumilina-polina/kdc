import { routes } from "shared/enums/pages";
import { ContactConst } from "./ContactConst";

export const HOME_PAGE_STATE = "Home";
export const AFFICH_PAGE_STATE = "Affiche";
export const ABOUT_PAGE_STATE = "About";
export const COLLECTIVES_PAGE_STATE = "Collectives";
export const SPACES_PAGE_STATE = "Spaces";
export const CONTACTS_PAGE_STATE = "Contacts";

export const HeaderConst = {
  pages: [
    { id: 1, value: "О нас", state: ABOUT_PAGE_STATE, url: routes.about },
    { id: 2, value: "Афиша", state: AFFICH_PAGE_STATE, url: routes.affiche },
    {
      id: 3,
      value: "Коллективы",
      state: COLLECTIVES_PAGE_STATE,
      url: routes.collectives,
    },
    {
      id: 4,
      value: "Пространства",
      state: SPACES_PAGE_STATE,
      url: routes.spaces,
    },
    {
      id: 5,
      value: "Контакты",
      state: CONTACTS_PAGE_STATE,
      url: routes.contacts,
    },
  ],
  mobilePages: [
    {
      id: 1,
      value: "О нас",
      nested: true,
      nextPages: [
        { id: 1, value: "История", url: routes.history },
        { id: 2, value: "КДЦ на Варшавской", url: routes.center },
        { id: 3, value: "Проекты", url: routes.projects },
        { id: 4, value: "Галерея", url: routes.gallery },
      ],
    },
    { id: 2, value: "Афиша", url: routes.affiche, nested: false },
    { id: 3, value: "Коллективы", url: routes.collectives, nested: false },
    { id: 4, value: "Пространства", url: routes.spaces, nested: false },
    { id: 5, value: "Контакты", url: routes.contacts, nested: false },
    { id: 6, value: "Дополнительно", url: routes.more, nested: false },
    { id: 7, value: "FAQ", url: routes.faq, nested: false },
  ],

  workingMode: {
    value: "Режим работы:",
    mode: ContactConst.working,
  },
  phone: ContactConst.phone,
  adress: ContactConst.adressMain,
  email: ContactConst.email,
  buttonText: "Версия для слабовидящих",

  logotypeTitle: "КДЦ Московский",
};
