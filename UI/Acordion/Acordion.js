import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import s from "./acordion.module.scss";

const Acordion = (props) => {
    const {
        title,
        content
    } = props

    return(
    <Accordion
        className={s.acordion}
        square
    >
        <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon />}
            className={s.header}
            classes={{
                expandIconWrapper: s.button
            }}
        >
            <Typography className={s.title}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={s.body}>
            <Typography className={s.answer}>Ответ</Typography>
            <Typography className={s.content}>{content}</Typography>
        </AccordionDetails>
    </Accordion>
    )
}

export default Acordion