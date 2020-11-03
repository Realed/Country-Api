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
`

const HomePage = () => {
  //STATE
  const [countries, setCountries] = useState([])

  //FUNCIONTS
  const getApiData = async () => {
    const res = await fetch("https://restcountries.eu/rest/v2/all")
    const data = await res.json()
    setCountries(data)
    console.log(data)
  }

  useEffect(() => {
    getApiData()
  }, [])

  return (
    <>
      <GlobalStyles />
      <Header />
      <MainWrapper>
        {countries.map((country) => (
          <Country key={id()}>
            <div className="flag-box">
              <img src={country.flag} alt="flag" />
            </div>
            <div className="info-box">
              <div className="title-box">
                <h1>{country.name} </h1>
              </div>
              <div className="numbers-box">
                <p>
                  Population: <span> {country.population} </span>{" "}
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
