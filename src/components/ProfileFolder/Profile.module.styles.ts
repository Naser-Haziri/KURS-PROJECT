import { Box, styled } from '@mui/material'

const FirstBox = styled(Box)`
	display: flex;
	justify-content: center;
	align-items: center;
`
const SecondBox = styled(Box)`
	width: 900px;
	margintop: 3;
	height: 100%;
`
const ThirdBox = styled(Box)`
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-direction: column;
`
export { FirstBox, SecondBox, ThirdBox }
