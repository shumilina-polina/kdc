import { routes } from "shared/enums/pages";
import { ContactConst } from "./ContactConst";

export const FooterConst = {
  list: [
    { id: 1, value: "История", url: routes.history },
    { id: 2, value: "КДЦ на Варшавской", url: routes.center },
    { id: 3, value: "Проекты", url: routes.projects },
    { id: 4, value: "Галерея", url: routes.gallery },
    { id: 5, value: "Афиша", url: routes.affiche },
    { id: 6, value: "Коллективы", url: routes.collectives },
    { id: 7, value: "Пространства", url: routes.spaces },
    { id: 8, value: "Контакты", url: routes.contacts },
    { id: 9, value: "Дополнительно", url: routes.more },
    { id: 10, value: ContactConst.adressMain },
    { id: 11, value: ContactConst.email },
    { id: 12, value: "FAQ", url: routes.faq },
  ],
  adress: ContactConst.adressMain,
  phone: ContactConst.phone,
  email: ContactConst.email,
  workingTitle: "Режим работы:",
  workingTime: ContactConst.working,
  askButtonText: "Задать вопрос",
  abilityButtonText: "Версия для слабовидящих",
  copyright: "Moscowskykdc © 2021-2023",
};
