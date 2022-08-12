import { useRef, useState } from "react";

import { ReactSVGPanZoom, TOOL_NONE, TOOL_PAN, zoom } from "react-svg-pan-zoom";
import MapButton from "UI/MapButton/MapButton";
import FloorOne from "./Floors/FloorOne";
import FloorTwo from "./Floors/FloorTwo";
import FloorThree from "./Floors/FloorThree";
import MapControlButton from "UI/MapControlButton/MapControlButton";

import s from "./buildingMap.module.scss";
import { useRouter } from "next/router";

const BuildingMap = () => {
  const {
    isReady,
  } = useRouter();

  const [floor, setFloor] = useState(1);
  const [value, setValue] = useState({});
  const customMap = useRef(null);

  const handleIncrease = (e) => {
    customMap.current.zoomOnViewerCenter(1.1);
  };

  const handleDecrease = () => {
    customMap.current.zoomOnViewerCenter(0.9);
  };

  return (
    <div className={s.map}>
      <div className={s.slides}>
        { isReady ? ( <ReactSVGPanZoom
          width={1500}
          height={500}
          scaleFactorOnWheel={1}
          scaleFactor={1.1}
          className={s.svg}
          tool={TOOL_PAN}
          onChangeTool={(tool) => setTool(tool)}
          value={value}
          onChangeValue={(value) => setValue(value)}
          miniatureProps={{ position: "none" }}
          toolbarProps={{ position: "none" }}
          background="#fff"
          ref={customMap}
        >
          <svg className={s.svg} width={1500} height={500}>
            {floor === 1 ? (
              <FloorOne />
            ) : floor === 2 ? (
              <FloorTwo />
            ) : floor === 3 ? (
              <FloorThree />
            ) : (
              setFloor(1)
            )}
          </svg>
        </ReactSVGPanZoom> ) : null }
        
      </div>
      <div className={s.switchers}>
        <MapButton
          isActive={floor === 1 ? true : false}
          onClick={() => setFloor(1)}
        >
          1-ый этаж
        </MapButton>
        <MapButton
          isActive={floor === 2 ? true : false}
          onClick={() => setFloor(2)}
        >
          2-ой этаж
        </MapButton>
        <MapButton
          isActive={floor === 3 ? true : false}
          onClick={() => setFloor(3)}
        >
          3-ий этаж
        </MapButton>
      </div>
      <div className={s.controls}>
        <MapControlButton onClick={handleIncrease}>
          <img src="/assets/icons/plus.svg" />
        </MapControlButton>
        <MapControlButton onClick={handleDecrease}>
          <img src="/assets/icons/minus.svg" />
        </MapControlButton>
      </div>
    </div>
  );
};

export default BuildingMap;
