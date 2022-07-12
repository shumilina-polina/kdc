import cn from "classnames";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
    const priceFiltersNumbered = [];

    if (priceFilter.includes("Бесплатные")) priceFiltersNumbered.push(0);
    if (priceFilter.includes("Платные")) priceFiltersNumbered.push(99999);

    dispatch({
      type: CollectivesActionTypes.UPDATE_FILTERS,
      payload: {
        trend: trendFilter,
        price: priceFiltersNumbered,
        location: locationFilter,
      },
    });
  };

  const resetFilters = () => {
    dispatch({
      type: CollectivesActionTypes.UPDATE_FILTERS,
      payload: {
        trend: [],
        price: [],
        location: [],
      },
    });
    setTrendFilter([]);
    setPriceFilter([]);
    setLocationFilter([]);
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
          data={trendFilter}
          setData={setTrendFilter}
        />
        <SelectInput
          label="Стоимость"
          variants={["Платные", "Бесплатные"]}
          className={s.select}
          data={priceFilter}
          setData={setPriceFilter}
        />
        <SelectInput
          label="Адрес"
          variants={["Московский пр. 152", "Ул. Варшавская, 98"]}
          data={locationFilter}
          setData={setLocationFilter}
        />
        <Button className={s.button} onClick={resetFilters}>
          Сбросить выбор
        </Button>
      </Container>
    </div>
  );
};

export default CollectivesFilters;
