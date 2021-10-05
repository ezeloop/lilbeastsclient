import styled from 'styled-components'

export const ContainerWithStyles = styled.div`
	width: 100%;
	heigth: 100%;
  margin: 0;
  padding: 0;
	background-color: ${(props) => props.backgroundColor};
	${'' /* &:hover {
		xxxx 
		& label {
			color: fff
			}
		} */}

`
