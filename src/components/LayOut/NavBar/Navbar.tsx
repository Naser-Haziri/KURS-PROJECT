import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications'
import { Avatar, Box, Button, Typography } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import React, { useState } from 'react'
import { CustomBox, SearchInput } from './NavBar.module.styles.ts'
type Props = {
	fcn: () => void
}

const NavBar: React.FC<Props> = ({ fcn }) => {
	const [value, setValue] = useState(0)
	const [searchInput, setSearchInput] = useState<string>('')
	const search = (event) => {
		event.preventDefault()
		if (searchInput.trim().toLocaleLowerCase().includes('react')) {
			console.log('React Grup')
			return
		} else if (
			searchInput.trim().toLocaleLowerCase().includes('html') ||
			searchInput.trim().toLocaleLowerCase().includes('css')
		) {
			console.log('css html')
			return
		} else if (searchInput.trim().toLocaleLowerCase().includes('.net')) {
			console.log('.net')
			return
		} else if (searchInput.trim().toLocaleLowerCase().includes('javascript')) {
			console.log('javascript')
			return
		}
	}
	return (
		<CustomBox>
			<BottomNavigation>
				<Box
					onClick={fcn}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: 1,
						cursor: 'pointer',
					}}
				>
					<BottomNavigationAction onClick={fcn} icon={<MenuIcon />} />
					<Typography sx={{ marginLeft: 2.5 }}>Menu</Typography>
				</Box>
			</BottomNavigation>

			<form
				style={{
					width: `25%`,
				}}
				onSubmit={(event) => search(event)}
			>
				<Button onClick={(event) => search(event)} sx={{ marginTop: 2 }}>
					<SearchIcon />
				</Button>
				<SearchInput
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
					label="Search"
					variant="standard"
					name="Search"
				/>
			</form>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}
			>
				<BottomNavigationAction
					label="Settings"
					icon={<SettingsApplicationsIcon />}
				/>
				<BottomNavigationAction
					label="Profile"
					icon={
						<Avatar
							alt="Remy Sharp"
							src="/static/images/avatar/1.jpg"
							sx={{ width: 24, height: 24, fontSize: 12 }}
						/>
					}
				/>
			</BottomNavigation>
		</CustomBox>
	)
}

export default NavBar
