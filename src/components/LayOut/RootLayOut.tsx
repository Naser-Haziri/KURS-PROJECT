import React, { useState } from 'react'
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
		title: 'HTML',
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

interface Log {
	user: string
	message: string
	id: number
}

const RootLayOut: React.FC = () => {
	const [open, setOpen] = useState<boolean>(true)
	const [userName, setUserName] = useState<any>('Guest')
	const [pfp, setPfp] = useState<any>(null)
	const [selectedImgandTitle, setSelectedImgandTitle] = useState<number>(0)
	const startingChat: Log = {
		user: 'Andy',
		message: 'Hello friend Welcome to our chat',
		id: Math.floor(Math.random() * 10) + 1,
	}

	const [chatLog, setChatLog] = useState<Log[]>([startingChat])
	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<>
			<NavBar pfp={pfp} fcn={handleDrawerOpen} />

			<DrawerNav
				onClose={handleDrawerClose}
				grups={grupsArray}
				open={open}
				setSelectedImgandTitle={setSelectedImgandTitle}
				setChatLog={setChatLog}
			/>
			<main>
				<Outlet
					context={{
						grupsArray,
						selectedImgandTitle,
						chatLog,
						setChatLog,
						setPfp,
						pfp,
						userName,
						setUserName,
					}}
				/>
			</main>
		</>
	)
}

export default RootLayOut
