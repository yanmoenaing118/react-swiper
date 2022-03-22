import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./index.css";

export default function RcSlider() {


  return (
    <section className="RcSlide">
      <h1>My Rc Slider</h1>
      <div className="my-slide">
          <Slider range  min={0} max={100} step={10}  onChange={e => console.log(e) } defaultValue={[0,100]} allowCross={false} pushable={true}
          handleStyle={{
              backgroundColor: "cyan",
              border: "none",
       
          }}

          trackStyle={{
             
          }}
          />
      
      </div>
    </section>
  );
}
