import useDevice from "./../../lib/useDevice";

export default function Screens({}) {
  const { device } = useDevice();

  return (
    <div>
      <h1>screen is {device}</h1>
    </div>
  );
}
