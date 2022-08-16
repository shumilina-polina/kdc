import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import cn from "classnames";

import s from "./acordion.module.scss";
import { useSelector } from "react-redux";

const Acordion = (props) => {
  const { title, content, detailsTitle = true } = props;
  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  return (
    <Accordion className={s.acordion} square>
      <AccordionSummary
        expandIcon={<KeyboardArrowDownIcon />}
        className={cn(s.header, v ? s.ability : null)}
        classes={{
          expandIconWrapper: s.button,
        }}
      >
        <p className={s.title}>{title}</p>
      </AccordionSummary>
      <AccordionDetails className={s.body}>
        {detailsTitle ? (<p className={cn(s.answer, v ? s.ability : null)}>Ответ</p>) : null }
        <p className={cn(s.content, v ? s.ability : null)} style={!detailsTitle ? ({borderLeft: 'none'}) : null}>{content}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default Acordion;
