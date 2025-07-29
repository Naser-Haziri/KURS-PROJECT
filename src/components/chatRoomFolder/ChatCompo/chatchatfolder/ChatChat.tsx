import SendIcon from '@mui/icons-material/Send'
import { Avatar, Box, Button } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import classes from './ChatChat.module.css'
interface Log {
	user: string
	message: string
	id: number
}

interface context {
	chatLog: any
	setChatLog: any
	pfp: any
	userName: any
}

const ChatChat: React.FC = () => {
	const { chatLog, setChatLog, pfp, userName } = useOutletContext<context>()

	function submiting(event) {
		event.preventDefault()
		const form = event.currentTarget
		const data = new FormData(form)
		const chat = data.get('chat')

		if (typeof chat == 'string' && chat.trim() !== '') {
			const newLog: Log = {
				user: userName,
				message: chat,
				id: Math.floor(Math.random() * 1000) + 1,
			}

			setChatLog((prevChatLog) => [...prevChatLog, newLog])
			console.log(chatLog)
			form.reset()
		}
	}
	return (
		<>
			<Box
				component="form"
				onSubmit={(event) => submiting(event)}
				sx={{
					backgroundColor: grey[300],
					width: '70%',
					padding: 1,
					borderRadius: 20,
					marginBottom: 10,
					display: 'inline-flex',
					flexDirection: 'row',
				}}
			>
				<input
					type="text"
					placeholder="Text away"
					name="chat"
					style={{
						width: '95%',
						border: 'none',
						outline: 'none',
						background: 'transparent',
					}}
				/>
				<Button type="submit">
					<SendIcon />
				</Button>
			</Box>
			<ul className={classes.ul}>
				{chatLog.map((text) => {
					const isCurrentUser = text.user === userName

					return (
						<li key={text.id} className={classes.li}>
							<Avatar
								sx={{
									width: 20,
									height: 20,
									top: 45,
									left: 10,
								}}
								src={isCurrentUser ? pfp : ''}
							/>
							<div
								style={{
									display: 'inline-flex',
									flexDirection: 'column',
									padding: 6,

									borderRadius: 7,
									marginBottom: 14,
									backgroundColor: isCurrentUser ? grey[300] : grey[400],
									color: 'black',
								}}
							>
								<p
									style={{
										margin: 0,
										color: isCurrentUser ? 'black' : 'black',
									}}
								>
									{text.user}:
								</p>
								<p
									style={{
										margin: 0,
									}}
								>
									{text.message}
								</p>
							</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default ChatChat
