import { routes } from "shared/enums/pages";
import { ContactConst } from "./ContactConst";
import {
  ABOUT_PAGE_STATE,
  AFFICH_PAGE_STATE,
  COLLECTIVES_PAGE_STATE,
  CONTACTS_PAGE_STATE,
  HOME_PAGE_STATE,
  SPACES_PAGE_STATE,
} from "./HeaderConst";

export const FooterConst = {
  list: [
    { id: 1, value: "История", url: routes.history, payload: ABOUT_PAGE_STATE },
    {
      id: 2,
      value: "КДЦ на Варшавской",
      url: routes.center,
      payload: ABOUT_PAGE_STATE,
    },
    {
      id: 3,
      value: "Проекты",
      url: routes.projects,
      payload: ABOUT_PAGE_STATE,
    },
    { id: 4, value: "Галерея", url: routes.gallery, payload: ABOUT_PAGE_STATE },
    { id: 5, value: "Афиша", url: routes.affiche, payload: AFFICH_PAGE_STATE },
    {
      id: 6,
      value: "Коллективы",
      url: routes.collectives,
      payload: COLLECTIVES_PAGE_STATE,
    },
    {
      id: 7,
      value: "Пространства",
      url: routes.spaces,
      payload: SPACES_PAGE_STATE,
    },
    {
      id: 8,
      value: "Контакты",
      url: routes.contacts,
      payload: CONTACTS_PAGE_STATE,
    },
    {
      id: 9,
      value: "Дополнительно",
      url: routes.more,
      payload: HOME_PAGE_STATE,
    },
    { id: 10, value: ContactConst.adressMain },
    { id: 11, value: ContactConst.email },
    { id: 12, value: "FAQ", url: routes.faq, payload: HOME_PAGE_STATE },
  ],
  adress: ContactConst.adressMain,
  phone: ContactConst.phone,
  email: ContactConst.email,
  workingTitle: "Режим работы:",
  workingTime: ContactConst.working,
  askButtonText: "Задать вопрос",
  abilityButtonText: "Версия для слабовидящих",
  copyright: "PushKeen © 2022-2023",
};
