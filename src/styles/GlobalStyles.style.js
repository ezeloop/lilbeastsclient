import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: #082032;
		margin: 0px;
		padding: 0px;
    font-family: 'Roboto', sans-serif;
		}
  h1{
    font-size: 5rem;
    color: #F0A500;
    @media (max-width: 768px) {
      font-size: 3rem;
  }
  }
  p{
    font-size: 2.5rem;
    color: #082032;
  }
`
