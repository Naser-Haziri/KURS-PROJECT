import { Box, styled, TextField } from '@mui/material'

const CustomBox = styled(Box)`
	width: '100%';
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	box-shadow: 1px 1px 10px gray;
	border-radius: 10px;
	padding-y: 2px;
`
const SearchInput = styled(TextField)`
	width: 70%;
	&.MuiInputBase-input {
		padding: 10px;
	}
`

export { CustomBox, SearchInput }
