import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={200.333}
    height={200.333}
    viewBox="0 0 640 640"
    {...props}
  >
    <Path d="M292 54.5c-18.4 2-28.5 4-45 8.7-33.3 9.5-66.3 26.5-94 48.5-12.7 10.1-34.7 32.4-44.3 45.1-28.3 37-46.8 81-53.3 126.7-2.3 15.8-2.6 55.7-.6 70 7 49.4 26.6 95.4 56.6 133.5 8.2 10.4 33.3 35.2 43.6 43.2 51.1 39.4 108.9 58.3 173 56.5 36.5-1 66-7.6 99.3-22 50.5-21.9 93.5-60 122.7-108.7 16.8-27.9 29.4-63.5 34.6-97.5 2.6-17 2.6-60 0-76.5-9-57.6-33-106.4-72.1-146.9-33.7-34.9-75.8-59.9-122-72.6-31.2-8.5-67.2-11.5-98.5-8zm61.1 21c38 5.3 72.6 18.4 104.4 39.8 13.1 8.8 21.5 15.7 34.4 28.2 76.7 74.5 96.7 189.3 49.6 285C492 529.1 381.7 583.8 272.1 562c-49.8-9.9-93.8-34.1-130.1-71.6-36-37.2-58.2-82.8-66.1-135.7-2.4-16.2-2.9-46.5-1-62.7 10.9-92.2 72.4-170.7 159.6-203.3 19.3-7.2 45.6-13 66.8-14.7 14.5-1.1 37.4-.4 51.8 1.5z" />
  </Svg>
)

export default SvgComponent