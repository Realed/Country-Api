import styled from "styled-components"
import colors from "../styles/colors"

const Country = styled.div`
  height: 330px;
  width: 100%;
  margin-bottom: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 15px 0px;
  cursor: pointer;

  .flag-box {
    height: 50%;
    width: 100%;
    background-color: ${({ darkMode }) =>
      darkMode
        ? colors.darkMode.backColorAccent
        : colors.lightMode.backColorAccent};
    border-radius: 7px 7px 0 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 7px 7px 0 0;
    }
  }

  .info-box {
    height: 50%;
    width: 100%;
    padding: 20px;
    background-color: ${({ darkMode }) =>
      darkMode
        ? colors.darkMode.backColorAccent
        : colors.lightMode.backColorAccent};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 0 0 7px 7px;

    .title-box {
      h1 {
        margin: 0;
        font-size: 1.2em;
        font-weight: 900;
      }
    }

    .numbers-box {
      p {
        font-size: 1em;
        font-weight: 600;
        margin: 0;

        span {
          font-weight: 300;
        }
      }
    }
  }
`

export default Country
