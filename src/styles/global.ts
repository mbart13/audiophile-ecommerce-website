import { css } from '@emotion/react'

const GlobalStyles = css`
  /*
    This will hide the focus indicator if the element receives focus via the mouse,
    but it will still show up on keyboard focus.
  */
  a:focus,
  button:focus {
    outline: 2px dashed red;
    outline-offset: 4px;
  }

  a:focus:not(:focus-visible),
  button:focus:not(:focus-visible) {
    outline: none;
  }
`

export default GlobalStyles
