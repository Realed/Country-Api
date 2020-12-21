import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

//Components
import NavMenu from "../components/NavMenu"
import GlobalStyles from "../components/GlobalStyles"

//STYLES
import colors from "../styles/colors"

const CountryWrapper = styled.div`
  padding: 20px 35px;
  background-color: ${({ darkMode }) =>
    darkMode ? colors.darkMode.backColor : colors.lightMode.backColor};

  h1,
  p {
    color: ${({ darkMode }) =>
      darkMode ? colors.darkMode.colorAccent : colors.lightMode.colorAccent};
  }

  p span {
    color: ${({ darkMode }) =>
      darkMode ? colors.darkMode.color : colors.lightMode.color};
  }

  min-height: 92.5vh;

  @media (min-width: 1250px) {
    padding: 20px 13.5%;
  }

  main {
    @media (min-width: 750px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .flag-wrapper,
      .data-wrapper {
        width: 48%;
        height: 100%;
      }
    }
  }

  @media (min-width: 1100px) {
    .flag-wrapper {
      min-width: 575px;
      margin-right: 20px;
    }

    .data-wrapper {
      height: 100%;

      .data-box {
        display: inline-block;
        width: fit-content;
        p {
          width: fit-content;
        }

        &.noborder {
          display: block;
        }
      }
    }
  }

  .flag-box {
    margin-top: 30px;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .title-box {
    h1 {
      font-size: 1.5em;
      font-weight: 800;
    }
  }
  .data-box {
    margin-left: 5px;
    margin-bottom: 50px;

    &.noborder {
      margin-bottom: 0;
    }

    p {
      font-weight: 700;
      font-size: 1em;

      span {
        font-weight: 300;
      }
    }

    .buttons-box {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 10px;
      row-gap: 10px;
      justify-content: space-between;

      button {
        border: none;
        background-color: white;
        padding: 5px 10px;
        border: 1px solid #dddddd;

        border: 1px solid
          ${({ darkMode }) =>
            darkMode ? colors.darkMode.backColorAccent : "#cfcfcf"};
      }
    }
  }
`

const StyledLinkBtn = styled(Link)`
  background-color: ${({ darkMode }) =>
    darkMode
      ? colors.darkMode.backColorAccent
      : colors.lightMode.backColorAccent};

  color: ${({ darkMode }) =>
    darkMode ? colors.darkMode.colorAccent : colors.lightMode.colorAccent};

  width: 100px;
  min-height: 35px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 12px 0px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;

  img {
    max-width: 16%;
    max-height: 16%;
  }
`

const CountryPage = (location) => {
  const [countries, setCountries] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  const getCountryData = async () => {
    let country = location.match.params.country.toLowerCase()
    const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    const data = await res.json()
    setCountries(data)
  }

  let formatNumber = {
    separador: ",", // separador para los miles
    sepDecimal: ".", // separador para los decimales
    formatear: function (num) {
      num += ""
      var splitStr = num.split(".")
      var splitLeft = splitStr[0]
      var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : ""
      var regx = /(\d+)(\d{3})/
      while (regx.test(splitLeft)) {
        splitLeft = splitLeft.replace(regx, "$1" + this.separador + "$2")
      }
      return this.simbol + splitLeft + splitRight
    },
    new: function (num, simbol) {
      this.simbol = simbol || ""
      return this.formatear(num)
    },
  }

  const handleChangeTheme = () => {
    setDarkMode(!darkMode)
    console.log(`dark theme cambiado`)
  }

  useEffect(() => {
    getCountryData()
  }, [])

  return (
    <>
      <GlobalStyles />
      <NavMenu darkMode={darkMode} handleChangeTheme={handleChangeTheme} />
      <CountryWrapper darkMode={darkMode}>
        {countries.map((country) => (
          <>
            <div className="goback-box">
              <StyledLinkBtn exact to="/" darkMode={darkMode}>
                {!darkMode && (
                  <img
                    src="https://img.icons8.com/ios/452/long-arrow-left.png"
                    alt=""
                  />
                )}
                Go Back
              </StyledLinkBtn>
            </div>

            <main>
              <div className="flag-wrapper">
                <div className="flag-box">
                  <img src={country.flag} alt="Country-Flag" />
                </div>
              </div>
              <div className="data-wrapper">
                <div className="title-box">
                  <h1>{country.name}</h1>
                </div>
                <div className="data-box">
                  <p>
                    Native Name: <span>{country.nativeName} </span>
                  </p>
                  <p>
                    Population:{" "}
                    <span>{formatNumber.new(country.population)} </span>
                  </p>
                  <p>
                    Region: <span>{country.region} </span>
                  </p>
                  <p>
                    Sub Region: <span>{country.subregion} </span>
                  </p>
                  <p>
                    Capital: <span>{country.capital} </span>
                  </p>
                </div>
                <div className="data-box">
                  <p>
                    Top Level Domain: <span>{country.topLevelDomain[0]} </span>
                  </p>
                  <p>
                    Currencies:{" "}
                    <span>
                      {country.currencies[0].code} (
                      {country.currencies[0].symbol}){" "}
                    </span>
                  </p>
                  <p>
                    Languages:{" "}
                    {country.languages.map((language) => (
                      <span>{language.name}, </span>
                    ))}
                  </p>
                </div>
                <div className="data-box noborder">
                  <p>Border Countries:</p>
                  {country.borders.length === 0 && (
                    <p>
                      <span>No border countries!</span>
                    </p>
                  )}
                  <div className="buttons-box">
                    {country.borders.map((border) => (
                      <button>{border} </button>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </>
        ))}
      </CountryWrapper>
    </>
  )
}

export default CountryPage
