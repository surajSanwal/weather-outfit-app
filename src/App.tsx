import { Fragment } from "react"

import Home from "@/pages/Home/Home"
import ThemeSwitcher from "@/components/atoms/ThemeSwitcher/ThemeSwitcher"

function App() {
  return (
    <Fragment>
      <Home />
      <ThemeSwitcher />
    </Fragment>
  )
}

export default App
