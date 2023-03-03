import "../styles/globals.css"
import { Leftslide, Rightarrow, Rightslide, Roundarrow, Slidecenter, Slidewing, Tripledot } from "../components/Svglist"
import type { AppProps } from "next/app"
import { LineSvg } from "../components/Svglist"
import { RightSvg } from "../components/Svglist"
import Playhistory from "../components/Playhistory"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <div>123</div>
    </Component>
  )
}