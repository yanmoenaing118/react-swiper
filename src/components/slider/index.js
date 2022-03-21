import ReactSlider from "react-slider";
import { useState } from "react";

import "./index.css";

export default function PriceSlider() {
  const [values, setValues] = useState([1000, 5000]);

  const onSlideChange = (values, idx) => {
    setValues(values);
  };

  return (
    <section>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        pearling
        minDistance={5}
        max={5000}
        min={1000}
        step={100}
        defaultValue={[1000, 5000]}
        onChange={onSlideChange}
      />

      <div className="values">
          <span>min: {values[0]}</span>
          <span>max: {values[1]}</span>
      </div>
    </section>
  );
}
