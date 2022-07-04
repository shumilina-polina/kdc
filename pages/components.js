import CustomInput from "UI/CustomInput/CustomInput";
import CustomTabs from "UI/CustomTabs/CustomTabs";

import Acordion from "UI/Acordion/Acordion";
import ProjectCard from "Components/ProjectCard/ProjectCard";

import s from "styles/pages/Components.module.scss";

const Components = () => {
  return (
    <>
      <div className={s.main}>
        <div>
          <h2>Input</h2>
          <CustomInput label="Как к вам обращаться?" />
        </div>

        <div>
          <h2>Textarea</h2>
          <CustomInput
            label="Как к вам обращаться?"
            multiline
            cols={30}
            rows={10}
          />
        </div>

        <div>
          <h2>Cusom Tabs</h2>
          <CustomTabs
            titles={["История", "КДЦ на Варшавской", "Проекты", "Галерея"]}
            components={[
              "CusomBlock 1",
              "CusomBlock 2",
              "CusomBlock 3",
              "CusomBlock 4",
            ]}
          />
        </div>

        <div>
          <h2>Custom Acordion</h2>
          <Acordion
            title="Где купить билеты на мероприятия?"
            content="Билеты вы можете приобрести в кассе Культурно-Досугового Центра или на нашем сайте.
            Телефон кассы: +7 (932) 343-32-32.
            График работы кассы: ВТ-ПТ: 12.00 - 19.00 СБ: 12.00 - 16.00"
          />
        </div>
      </div>
    </>
  );
};

export default Components;
