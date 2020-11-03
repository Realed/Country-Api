import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header``

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

const SearchBox = styled.div`
  background-color: #f7f5f5;
  padding: 20px;

  .search-box {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0 20px;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid #dddddd;
    margin-bottom: 10px;

    img {
      max-width: 45%;
      max-height: 45%;
      margin-right: 15px;
      cursor: pointer;
    }

    input {
      height: 80%;
      width: 100%;
      border: none;
    }
  }

  .filter-box {
    select {
      width: 60%;
      height: 40px;
      background-color: white;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid #dddddd;

      option {
        height: 50%;
      }
    }
  }
`

const Header = () => {
  return (
    <>
      <HeaderWrapper>
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
        <SearchBox>
          <div className="search-box">
            <img
              src="https://img.icons8.com/ios/50/000000/search--v1.png"
              alt="searchIcon"
            />
            <input type="text" placeholder="Search for a country..." />
          </div>
          <div className="filter-box">
            <select>
              <option value="">Filter by Region</option>
              <option value="">Africa</option>
              <option value="">America</option>
              <option value="">Asia</option>
              <option value="">Europe</option>
              <option value="">Oceania</option>
            </select>
          </div>
        </SearchBox>
      </HeaderWrapper>
    </>
  )
}

export default Header
