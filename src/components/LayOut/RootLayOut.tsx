import React from 'react'
import { Outlet } from 'react-router-dom'

import DrawerNav from './Drawer/DrawerNav.tsx'
import NavBar from './NavBar/Navbar.tsx'

const grupsArray = [
	{
		img: 'https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fe0nl7ziy1la7bpwj7rsp.png',
		title: 'React',
		id: 'ReactGrup1',
	},
	{
		img: 'https://i.pinimg.com/736x/a7/c2/1e/a7c21e94addaca34feaf6900499e5c67.jpg',
		title: 'HTML/CSS',
		id: 'HTML/CSSGrup1',
	},
	{
		img: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg',
		title: '.Net',
		id: '.NetGrup1',
	},
	{
		img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s',
		title: 'javascript',
		id: 'javascriptGrup1',
	},
]

const RootLayOut: React.FC = () => {
	const [open, setOpen] = React.useState(true)
	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<>
			<NavBar fcn={handleDrawerOpen} />

			<DrawerNav onClose={handleDrawerClose} grups={grupsArray} open={open} />
			<main>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayOut
