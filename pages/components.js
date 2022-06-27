import CustomInput from "UI/CustomInput/CustomInput";
import CustomTabs from "UI/CustomTabs/CustomTabs";

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
      </div>
    </>
  );
};

export default Components;
