import { useRouter } from "next/router";
import cn from "classnames";
import Header from "Components/Header/Header";
import Footer from "Components/Footer/Footer";

import Container from "UI/Container/Container";
import ButtonArrow from "UI/ButtonArrow/ButtonArrow";
import Button from "UI/Button/Button";

import { useEffect, useState } from "react";
import apiService from "services/apiService";
import Skeleton from "react-loading-skeleton";
import { Skeleton as ImageSkeleton } from "@mui/material";

import "react-loading-skeleton/dist/skeleton.css";
import s from "styles/pages/SingleCollective.module.scss";
import { routes } from "shared/enums/pages";
import ModalWindow from "UI/Modal/ModalWindow";
import JoinCollectiveWindow from "Components/JoinCollectiveWindow/JoinCollectiveWindow";

function htmlDecode(input) {
  const doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const SingleColectivePage = (props) => {
  const {
    isReady,
    query: { id },
  } = useRouter();

  return (
    <>
      <Header />
      {id}
      <Footer />
    </>
  );
};

export default SingleColectivePage;
