import React from 'react'

const Header = () => {
  const styler = {fontSize: "6rem",
  fontWeight: "600",
  marginBottom: "2rem",
  lineHeight: "1em",
  color: "#ececec",
  textTransform: "lowercase",
  textAlign: "center"}

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }

  return (
    <header style={headerStyle}>
      <h1 style={styler} >Todos</h1>
    </header>
  )
}

export default Header