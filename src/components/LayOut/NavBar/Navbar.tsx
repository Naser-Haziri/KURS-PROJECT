import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar, Button } from '@mui/material'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CustomBox, SearchInput } from './NavBar.module.styles.ts'
type Props = {
	fcn: () => void
	pfp: string
}

const NavBar: React.FC<Props> = ({ fcn, pfp }) => {
	const [value, setValue] = useState(0)
	const [valueTwo, setValueTwo] = useState(0)
	const [searchInput, setSearchInput] = useState<string>('')

	const navigate = useNavigate()
	const search = (event) => {
		event.preventDefault()
		if (searchInput.trim().toLocaleLowerCase().includes('react')) {
			navigate('react')

			return
		} else if (
			searchInput.trim().toLocaleLowerCase().includes('html') ||
			searchInput.trim().toLocaleLowerCase().includes('css')
		) {
			navigate('html')
			return
		} else if (searchInput.trim().toLocaleLowerCase().includes('.net')) {
			navigate('net')
			return
		} else if (searchInput.trim().toLocaleLowerCase().includes('javascript')) {
			navigate('javascript')
			return
		}
	}
	return (
		<CustomBox>
			<BottomNavigation
				showLabels
				value={valueTwo}
				onChange={(event, newValue) => {
					setValueTwo(newValue)
				}}
			>
				<BottomNavigationAction
					sx={{
						backgroundColor: 'whitesmoke',
					}}
					label="Menu"
					onClick={fcn}
					icon={<MenuIcon />}
				/>
			</BottomNavigation>

			<form
				style={{
					width: `25%`,

					backgroundColor: 'whitesmoke',
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
					sx={{
						backgroundColor: 'whitesmoke',
					}}
					onClick={() => navigate('profile')}
					label="Profile"
					icon={
						<Avatar
							alt="Remy Sharp"
							src={pfp}
							sx={{ width: 24, height: 24, fontSize: 12 }}
						/>
					}
				/>
			</BottomNavigation>
		</CustomBox>
	)
}

export default NavBar
