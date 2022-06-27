import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import s from "./acordion.module.scss";

const Acordion = (props) => {
  const { title, content } = props;

  return (
    <Accordion className={s.acordion} square>
      <AccordionSummary
        expandIcon={<KeyboardArrowDownIcon />}
        className={s.header}
        classes={{
          expandIconWrapper: s.button,
        }}
      >
        <p className={s.title}>{title}</p>
      </AccordionSummary>
      <AccordionDetails className={s.body}>
        <p className={s.answer}>Ответ</p>
        <p className={s.content}>{content}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default Acordion;
