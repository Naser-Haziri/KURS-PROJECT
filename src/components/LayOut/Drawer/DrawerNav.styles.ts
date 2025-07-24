import { Drawer, ListItem, styled } from '@mui/material'

const CustomDrawer = styled(Drawer)({
	'& .MuiDrawer-paper': {
		width: 240,
		padding: '2px',
		border: '1px solid gray',
		borderRadius: '7px',
		boxSizing: 'border-box',
	},
})
const CustomItem = styled(ListItem)({
	marginTop: '20px',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor: '#D6D6D644',
	},
})

export { CustomDrawer, CustomItem }
