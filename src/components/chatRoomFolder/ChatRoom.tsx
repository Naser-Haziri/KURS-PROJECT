import React from 'react'
import { useOutletContext } from 'react-router-dom'

import ChatChat from './ChatCompo/chatchatfolder/ChatChat.tsx'
import HeaderChat from './ChatCompo/HeaderChat.tsx'
import PeopleOnline from './ChatCompo/PeopleOnline.tsx'
import {
	BoxLeyout,
	ChatBox,
	SideBarBoxLeyout,
} from './ChatRoom.module.styles.ts'

interface User {
	id: string
	avatar: string
	name: string
	Admin: boolean
	status: string
}

interface Grups {
	img: string
	title: string
	id: string
}

interface context {
	grupsArray: Array<Grups>
	selectedImgandTitle: number
}

var peopleOnline: Array<User> = [
	{ avatar: 'Jon Sharp', name: 'Jon', Admin: false, status: 'away', id: '123' },
	{
		avatar: 'Doe Sharp',
		name: 'Doe',
		Admin: false,
		status: 'online',
		id: '1111',
	},
	{
		avatar: 'Bob Sharp',
		name: 'bob',
		status: 'away',
		Admin: true,
		id: 'alta',
	},
	{
		avatar: 'Andy Sharp',
		name: 'andy',
		status: 'online',
		Admin: true,
		id: 'gold',
	},
]

const ChatRoom: React.FC = () => {
	const { grupsArray, selectedImgandTitle } = useOutletContext<context>()

	function filterUsers(filter: string, users: Array<User>): Array<User> {
		var filteredList: Array<User> = []
		switch (filter) {
			case 'Mods':
				users.forEach((user) => {
					user.Admin && filteredList.push(user)
				})
				break
			case 'Users':
				users.forEach((user) => {
					!user.Admin && filteredList.push(user)
				})
				break
		}

		return filteredList
	}

	return (
		<BoxLeyout>
			<SideBarBoxLeyout>
				<HeaderChat
					grupName={grupsArray[selectedImgandTitle].title}
					grupPfp={grupsArray[selectedImgandTitle].img}
				/>
				<PeopleOnline
					title="Moderators"
					array={filterUsers('Mods', peopleOnline)}
				/>
				<PeopleOnline
					title="Online"
					array={filterUsers('Users', peopleOnline)}
				/>
			</SideBarBoxLeyout>
			<ChatBox>
				<ChatChat />
			</ChatBox>
		</BoxLeyout>
	)
}
export default ChatRoom
