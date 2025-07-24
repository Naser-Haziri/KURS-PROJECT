import { createTheme } from '@mui/material'
import { grey } from '@mui/material/colors'

const Theme = createTheme({
	palette: {
		primary: {
			main: grey[700],
		},
		secondary: {
			main: grey[600],
		},
	},
})

export { Theme }
