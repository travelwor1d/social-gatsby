/** @jsx jsx */
import { jsx } from "theme-ui"

import { Fragment } from "react"

import Navigation from "../Navigation"
import GlobalStyles from "../GlobalStyles"

export default function Layout({ children }) {
  return (
    <Fragment>
      <GlobalStyles />
      <Navigation />
      <main
        sx={{
          minHeight: "100vh",
          m: "0 auto",
          pt: 12,
          pb: 5,
          px: [4, 4, 5],
        }}
      >
        {children}
      </main>
    </Fragment>
  )
}
