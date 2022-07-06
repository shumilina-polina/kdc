import cn from "classnames";
import Button from "UI/Button/Button";
import Container from "UI/Container/Container";
import SelectInput from "UI/SelectInput/SelectInput";

import s from "./collectivesFilters.module.scss";

const CollectivesFilters = () => {
    return(
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
            />
            <SelectInput
              label="Стоимость"
              variants={["Платные", "Бесплатные"]}
              className={s.select}
            />
            <SelectInput
              label="Адрес"
              variants={["Московский пр,152", "Ул. Варшавская, 98"]}
              className={s.select}
            />
            <Button className={s.button}>Сбросить выбор</Button>
          </Container>
        </div>
    )
}

export default CollectivesFilters