import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Button, ListItem, useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
	setSelectedImgandTitle: any
	setChatLog: any
}
interface Log {
	user: string
	message: string
	id: number
}

const startingChat: Log = {
	user: 'Andy',
	message: 'Hello friend Welcome to our chat',
	id: Math.floor(Math.random() * 10) + 1,
}

const DrawerNav: React.FC<Props> = ({
	onClose,
	grups,
	open,
	setSelectedImgandTitle,
	setChatLog,
}) => {
	const theme = useTheme()
	const navigate = useNavigate()
	const [selectedButton, setSelectedButton] = useState('')

	function handleClick(id: string, name: string, index) {
		setSelectedButton(id)
		navigate(`${name}`)
		setSelectedImgandTitle(index)
		setChatLog([startingChat])
		onClose()
	}

	function goBackToHome() {
		navigate('/home')
		onClose()
	}
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

				{grups.map((item, index) => (
					<CustomItem
						key={item.id}
						onClick={() => handleClick(item.id, item.title, index)}
						style={
							selectedButton === item.id
								? { backgroundColor: 'hsla(0, 0%, 45%, 0.27)' }
								: undefined
						}
					>
						<Avatar alt="Remy Sharp" src={item.img} />
						<Typography sx={{ marginLeft: 1 }}>{item.title}</Typography>
					</CustomItem>
				))}
			</List>
			<Button onClick={goBackToHome}>Go to Home</Button>
		</CustomDrawer>
	)
}

export default DrawerNav
