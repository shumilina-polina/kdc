import EventsComponent from "Components/EventsComponent/EventsComponent";
import s from "./archive.module.scss";

const Archive = () => {
  return (
    <div className={s.main}>
      <EventsComponent
        title="Архив всех мероприятий"
        disableFilters
        disablePast={false}
      />
    </div>
  );
};

export default Archive;
