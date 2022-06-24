import { routes } from "shared/enums/pages";
import { ContactConst } from "./ContactConst";

export const HeaderConst = {
  pages: [
    { id: 1, value: "О нас", url: routes.about },
    { id: 2, value: "Афиша", url: routes.affiche },
    { id: 3, value: "Коллективы", url: routes.collectives },
    { id: 4, value: "Пространства", url: routes.spaces },
    { id: 5, value: "Контакты", url: routes.contacts },
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
