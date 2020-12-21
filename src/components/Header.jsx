import React from "react"
import styled from "styled-components"
import colors from "../styles/colors"

//Components
import NavMenu from "./NavMenu"

const HeaderWrapper = styled.header``
const SearchBox = styled.div`
  background-color: #f7f5f5;
  padding: 20px;
  background-color: ${({ darkMode }) =>
    darkMode ? colors.darkMode.backColor : colors.lightMode.backColor};

  @media (min-width: 550px) {
    display: flex;

    .filter-box {
      margin-left: 15px;
    }

    .search-wrapper {
      width: 65%;
    }

    .filter-box {
      width: 35%;
    }

    select {
      width: 100%;
    }
  }

  @media (min-width: 750px) {
    padding: 20px 35px;
  }

  @media (min-width: 1300px) {
    padding: 20px 13.5%;
  }

  .search-box {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0 20px;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid #868686;
    margin-bottom: 10px;
    background-color: ${({ darkMode }) =>
      darkMode
        ? colors.darkMode.backColorAccent
        : colors.lightMode.backColorAccent};

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
      background-color: ${({ darkMode }) =>
        darkMode
          ? colors.darkMode.backColorAccent
          : colors.lightMode.backColorAccent};

      color: ${({ darkMode }) =>
        darkMode ? colors.darkMode.colorAccent : colors.lightMode.colorAccent};
    }
  }

  .filter-box {
    select {
      width: 60%;
      height: 40px;
      background-color: white;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid #868686;
      background-color: ${({ darkMode }) =>
        darkMode
          ? colors.darkMode.backColorAccent
          : colors.lightMode.backColorAccent};

      color: ${({ darkMode }) =>
        darkMode ? colors.darkMode.colorAccent : colors.lightMode.colorAccent};
      option {
        height: 50%;
      }
    }

    @media (min-width: 550px) {
      select {
        width: 100%;
        height: 50px;
      }
    }
  }
`

const Header = ({
  handleChangeRegion,
  handleSearchCountry,
  searchBar,
  handleClearSearch,
  selectRegion,
  handleChangeTheme,
  darkMode,
}) => {
  return (
    <>
      <HeaderWrapper>
        <NavMenu handleChangeTheme={handleChangeTheme} darkMode={darkMode} />
        <SearchBox darkMode={darkMode}>
          <div className="search-wrapper">
            <form
              className="search-box"
              action=""
              onSubmit={handleSearchCountry}
            >
              <img
                src={
                  darkMode
                    ? "https://icon-library.com/images/white-search-icon-png/white-search-icon-png-17.jpg"
                    : "https://img.icons8.com/ios/50/000000/search--v1.png"
                }
                // src="https://img.icons8.com/ios/50/000000/search--v1.png"
                alt="searchIcon"
                onClick={handleSearchCountry}
              />
              <input
                type="text"
                placeholder="Search for a country..."
                ref={searchBar}
                onChange={handleClearSearch}
              />
            </form>
          </div>
          <div className="filter-box">
            <select onChange={handleChangeRegion} ref={selectRegion}>
              <option value="global">Worldwide</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </SearchBox>
      </HeaderWrapper>
    </>
  )
}

export default Header
