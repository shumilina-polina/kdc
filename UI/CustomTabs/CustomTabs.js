import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useState } from "react";

import s from "./tabs.module.scss";
import Wrapper from "UI/Wrapper/Wrapper";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CustomTabs = (props) => {
  const { titles = [], components = [] } = props;

  const [value, setValue] = useState(0);
  const { visuallyImpairedVersion: v } = useSelector((state) => state.ability);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className={s.main}>
        <div className={s.wrapper}>
          <div className={s.divider} />
          <Wrapper borderBottom borderTop>
            <Tabs
              value={value}
              onChange={handleChange}
              className={v ? s.ability : null}
            >
              {titles.map((title, index) => (
                <Tab
                  key={`singleTab_${index}`}
                  label={title}
                  {...a11yProps(index)}
                  disableFocusRipple={false}
                  classes={{
                    root: s.root,
                    selected: s.selected,
                  }}
                />
              ))}
            </Tabs>
          </Wrapper>
        </div>
      </Box>

      {components.map((component, index) => (
        <TabPanel
          className={s.tabpanel}
          value={value}
          index={index}
          key={`tabPanel_${index}`}
        >
          {component}
        </TabPanel>
      ))}
    </>
  );
};

export default CustomTabs;
