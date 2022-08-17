import Button from "UI/Button/Button";
import SelectInput from "UI/SelectInput/SelectInput";
import Wrapper from "UI/Wrapper/Wrapper";

import s from "./collectivesFilters.module.scss";

const CollectivesFilters = (props) => {
  const { trends, setTrends, locations, setLocations, price, setPrice, loading } = props;

  const resetFilters = () => {
    setTrends([]);
    setLocations([]);
    setPrice([]);
  };

  return (
    <Wrapper>
      <div className={s.filters}>
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
          data={trends}
          setData={setTrends}
          disabled={loading}
        />
        <SelectInput
          label="Стоимость"
          variants={["Платные", "Бесплатные"]}
          className={s.select}
          data={price}
          setData={setPrice}
          disabled={loading}
        />
        <SelectInput
          label="Адрес"
          variants={["Московский пр. 152", "Ул. Варшавская, 98"]}
          className={s.select}
          data={locations}
          setData={setLocations}
          disabled={loading}
        />
        <Button className={s.button} onClick={resetFilters}>
          Сбросить выбор
        </Button>
      </div>
    </Wrapper>
  );
};

export default CollectivesFilters;
