import React from "react"
import styled from "styled-components"

//Components
import NavMenu from "./NavMenu"

const HeaderWrapper = styled.header``
const SearchBox = styled.div`
  background-color: #f7f5f5;
  padding: 20px;

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
}) => {
  return (
    <>
      <HeaderWrapper>
        <NavMenu />
        <SearchBox>
          <div className="search-wrapper">
            <form
              className="search-box"
              action=""
              onSubmit={handleSearchCountry}
            >
              <img
                src="https://img.icons8.com/ios/50/000000/search--v1.png"
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
