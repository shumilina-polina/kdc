import cn from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import apiService from "services/ApiService";
import { CollectivesActionTypes } from "store/actionTypes/CollectivesActionTypes";

import Button from "UI/Button/Button";
import Container from "UI/Container/Container";
import SelectInput from "UI/SelectInput/SelectInput";

import s from "./collectivesFilters.module.scss";

const CollectivesFilters = () => {
  const [trendFilter, setTrendFilter] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);

  const dispatch = useDispatch();

  useEffect(
    () => updateCollectives(),
    [trendFilter, priceFilter, locationFilter]
  );

  const updateCollectives = () => {
    const priceFiltersNumbered = []

    if ( priceFilter.includes("Бесплатные") ) priceFiltersNumbered.push(0);
    if ( priceFilter.includes("Платные") ) priceFiltersNumbered.push(99999);

    dispatch({
      type: CollectivesActionTypes.UPDATE_FILTERS,
      payload: {
        trend: trendFilter,
        price: priceFiltersNumbered,
        location: locationFilter,
      },
    });
  };

  return (
    <div className={s.wrapper}>
      <Container className={cn(s.container, s.filters)}>
        <SelectInput
          label="Категории"
          variants={[
            "Вокальные",
            "Хореографические",
            "Хоровые",
            "Оркестровые",
            "Театральные",
            "Оригинального жанра",
          ]}
          className={s.select}
          onSelect={setTrendFilter}
        />
        <SelectInput
          label="Стоимость"
          variants={["Платные", "Бесплатные"]}
          className={s.select}
          onSelect={setPriceFilter}
        />
        <SelectInput
          label="Адрес"
          variants={["Московский пр. 152", "Ул. Варшавская, 98"]}
          className={s.select}
          onSelect={setLocationFilter}
        />
        <Button className={s.button}>Сбросить выбор</Button>
      </Container>
    </div>
  );
};

export default CollectivesFilters;
