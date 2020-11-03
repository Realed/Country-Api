import React from "react"
import styled from "styled-components"

const MenuBox = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 13px;
  border-bottom: 1px solid #c2c2c2;

  h1 {
    font-size: 1.15em;
    font-weight: 800;
  }

  button {
    border: 0;
    background-color: white;
    padding: 5px;
  }

  .darkmode-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    img {
      width: 20%;
      height: 20%;
    }
  }
`

const NavMenu = () => {
  return (
    <>
      <MenuBox>
        <div className="title-box">
          <h1>Where in the world?</h1>
        </div>
        <div className="darkmode-box">
          <img
            src="https://img.icons8.com/ios/50/000000/partly-cloudy-night.png"
            alt="dark-logo"
          />
          <button>Dark Mode</button>
        </div>
      </MenuBox>
    </>
  )
}

export default NavMenu
