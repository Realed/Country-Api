import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { generate as id } from "shortid"

//Components
import Header from "../components/Header"
import GlobalStyles from "../components/GlobalStyles"
import Country from "../components/Country"

const MainWrapper = styled.main`
  background-color: #f7f5f5;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 45px;
  justify-content: center;

  @media (min-width: 550px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
    padding: 0 30px;
  }

  @media (min-width: 790px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
    /* padding: 0 30px; */
  }

  @media (min-width: 1000px) {
    column-gap: 27.5px;
    /* padding: 0 30px; */
  }

  @media (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0 13.5%;
  }
`

const HomePage = ({ history }) => {
  //STATE
  const [countries, setCountries] = useState([])

  //FUNCIONTS
  const getApiData = async (api) => {
    const res = await fetch(api)
    const data = await res.json()
    setCountries(data)
    console.log(data)
  }

  const handleChangeRegion = (e) => {
    if (e.target.value === "America") {
      getApiData(`https://restcountries.eu/rest/v2/region/americas`)
    } else if (e.target.value !== "global") {
      let region = e.target.value.toLowerCase()
      getApiData(`https://restcountries.eu/rest/v2/region/${region}`)
    } else if (e.target.value === "global") {
      getApiData("https://restcountries.eu/rest/v2/all")
    }
  }

  const handleCountryClick = (name) => {
    console.log(history)
    history.push(`/countries/${name}`)
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

  useEffect(() => {
    getApiData("https://restcountries.eu/rest/v2/all")
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header handleChangeRegion={handleChangeRegion} />
      <MainWrapper>
        {countries.map((country) => (
          <Country key={id()} onClick={() => handleCountryClick(country.name)}>
            <div className="flag-box">
              <img src={country.flag} alt="flag" />
            </div>
            <div className="info-box">
              <div className="title-box">
                <h1>{country.name} </h1>
              </div>
              <div className="numbers-box">
                <p>
                  Population:{" "}
                  <span> {formatNumber.new(country.population)} </span>{" "}
                </p>
                <p>
                  Region: <span> {country.region} </span>{" "}
                </p>
                <p>
                  Capital: <span> {country.capital} </span>{" "}
                </p>
              </div>
            </div>
          </Country>
        ))}
      </MainWrapper>
    </>
  )
}

export default HomePage
