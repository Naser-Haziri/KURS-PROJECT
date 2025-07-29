import { Box, styled } from '@mui/material'
import { grey } from '@mui/material/colors'

const BoxLeyout = styled(Box)`
	width: 100%;
	height: 92.2vh;
	margin-top: 10px;
	display: flex;
	justify-content: start;
	align-items: center;
`

const SideBarBoxLeyout = styled(Box)`
	background-color: ${grey[400]};
	border: 1px solid ${grey[500]};
	width: 20rem;
	padding: 8px;
	height: 100%;
`

const ChatBox = styled(Box)`
	width: 70%;
	height: 100%;
	margin-lefft: 30px;
	display: flex;
	flex-direction: column-reverse;
	border: 1px solid black;
	border-top: 0px;
	border-bottom: 0px;
	justify-content: start;
	align-items: center;
`

export { BoxLeyout, ChatBox, SideBarBoxLeyout }
