import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { routes } from "shared/enums/pages";
import Button from "UI/Button/Button";
import Title from "UI/Title/Title";

import ModalWindow from "UI/Modal/ModalWindow";
import JoinCollectiveWindow from "Components/JoinCollectiveWindow/JoinCollectiveWindow";
import Container from "UI/Container/Container";

import s from "./collectives.module.scss";

const collectives = [
  {
    id: 1,
    value: "Вокальные",
    url: "/collectives/vocal",
  },
  {
    id: 2,
    value: "Хореографические",
    url: "/collectives/",
  },
  {
    id: 3,
    value: "Оркестровые",
    url: "/collectives/choreographic",
  },
  {
    id: 4,
    value: "Театральные",
    url: "/collectives/theatrical",
  },
  {
    id: 5,
    value: "Оригинального жанра",
    url: "/collectives/originalgenre",
  },
];

const Collectives = (props) => {
  const {
    data: { title, obsoreButtonText, joinButtonText, decoration },
  } = props;

  const [isOpen, setOpen] = useState(false);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.titleContainer}>
          <Title>{title}</Title>
        </div>
      </Container>
      <div className={s.collectives}>
        <div className={s.divider} />
        <Container className={s.collectivesWrapper}>
          <div className={s.menu}>
            <ul className={s.list}>
              {collectives.map(({ id, value, url }) => (
                <li className={s.item} key={`collectiveAbout${id}`}>
                  <Link href={url}>
                    <a className={s.link}>
                      <Image
                        src="/assets/icons/listMark.svg"
                        width={22}
                        height={22}
                      />
                      {value}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
            <div className={s.actions}>
              <Button className={s.button} hasLink href={routes.collectives}>
                {obsoreButtonText}
              </Button>

              <Button className={s.button} onClick={() => setOpen(true)}>
                {joinButtonText}
              </Button>

              <ModalWindow
                isOpen={isOpen}
                onClose={() => setOpen(false)}
                title={joinButtonText}
                buttonText="Записаться"
                copyright
              >
                <JoinCollectiveWindow />
              </ModalWindow>
            </div>
          </div>
          <div className={s.wrapper}>
            <div className={s.harp}>
              <Image
                src="/assets/images/harp.svg"
                alt={decoration.harp}
                width={300}
                height={202}
              />
            </div>
            <div className={s.decorations}>
              <Image
                src="/assets/images/decorations.svg"
                alt={decoration.decoration}
                width={400}
                height={382}
              />
            </div>
            <div className={s.theatre}>
              <Image
                src="/assets/images/theatre.svg"
                alt={decoration.center}
                width={400}
                height={332}
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Collectives;
