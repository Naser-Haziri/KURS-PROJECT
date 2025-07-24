import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { ListItem, useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import React from 'react'
import { CustomDrawer, CustomItem } from './DrawerNav.styles.ts'

interface Group {
	id: string
	img: string
	title: string
}
interface Props {
	onClose: () => void
	grups: Group[]
	open: boolean
}

const DrawerNav: React.FC<Props> = ({ onClose, grups, open }) => {
	const theme = useTheme()

	return (
		<CustomDrawer
			variant="persistent"
			anchor="left"
			open={open}
			onClose={onClose}
		>
			<List>
				<>
					<ListItem
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							borderBottom: 1,
							borderColor: theme.palette.primary.main,
						}}
					>
						<Typography variant="h5">Chat's</Typography>
						<IconButton
							onClick={onClose}
							sx={{
								float: 'right',
								transition: '0.3s ease ',
								'&:hover': {
									transform: 'rotate(180deg)',
									transition: '0.3s ease ',
								},
							}}
							aria-label="close drawer"
						>
							<KeyboardArrowRightIcon />
						</IconButton>
					</ListItem>
				</>

				{grups.map((itm) => (
					<CustomItem key={itm.id}>
						<Avatar alt="Remy Sharp" src={itm.img} />
						<Typography sx={{ marginLeft: 1 }}>{itm.title}</Typography>
					</CustomItem>
				))}
			</List>
			<hr />
		</CustomDrawer>
	)
}

export default DrawerNav
