import { Store } from "../store";
import { SET_DEVICE } from "../store/actions";
import { useContext, useEffect } from "react";

export default function useDevice() {
  const { state, dispatch } = useContext(Store);

  // xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 900px
  // lg, large: 1200px
  // xl, extra-large: 1536px

  const handleResize = () => {
    if (window.innerWidth >= 1536)
      dispatch({ type: SET_DEVICE, payload: "xl" });
    else if (window.innerWidth >= 1200)
      dispatch({ type: SET_DEVICE, payload: "lg" });
    else if (window.innerWidth >= 900)
      dispatch({ type: SET_DEVICE, payload: "md" });
    else if (window.innerWidth >= 600)
      dispatch({ type: SET_DEVICE, payload: "sm" });
    else dispatch({ type: SET_DEVICE, payload: "xs" });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return {
    device: state.device,
  };
}
