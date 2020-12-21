import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

const MenuBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13px;
  border-bottom: ${({ darkMode }) => (darkMode ? `none` : `1px solid #d8d8d8`)};
  background-color: ${({ darkMode }) =>
    darkMode
      ? colors.darkMode.backColorAccent
      : colors.lightMode.backColorAccent};

  color: ${({ darkMode }) =>
    darkMode ? colors.darkMode.colorAccent : colors.lightMode.colorAccent};

  @media (min-width: 1300px) {
    padding: 0 13.5%;
  }

  h1 {
    font-size: 1.15em;
    font-weight: 800;
  }

  button {
    border: 0;
    padding: 5px;
  }

  .darkmode-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 3px 7px;
    background-color: ${({ darkMode }) =>
      darkMode ? colors.darkMode.backColor : colors.lightMode.backColor};
    border-radius: 10px;
    border: 1px solid #868686;

    img {
      width: 20%;
      height: 20%;
      max-width: 25px;
      min-width: 25px;
      cursor: pointer;
    }

    button.theme-changer {
      cursor: pointer;
      background-color: ${({ darkMode }) =>
        darkMode ? colors.darkMode.backColor : colors.lightMode.backColor};

      color: ${({ darkMode }) =>
        darkMode ? colors.darkMode.colorAccent : colors.lightMode.colorAccent};
    }
  }
`

const NavMenu = ({ handleChangeTheme, darkMode }) => {
  return (
    <>
      <MenuBox darkMode={darkMode}>
        <div className="title-box">
          <h1>Where in the world?</h1>
        </div>
        <div className="darkmode-box">
          <img
            src={
              darkMode
                ? "https://cdn2.iconfinder.com/data/icons/weather-blue-filled-color/300/21108668Untitled-3-512.png"
                : "https://img.icons8.com/ios/50/000000/partly-cloudy-night.png"
            }
            alt="dark-logo"
          />
          <button className="theme-changer" onClick={handleChangeTheme}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </MenuBox>
    </>
  )
}

export default NavMenu
