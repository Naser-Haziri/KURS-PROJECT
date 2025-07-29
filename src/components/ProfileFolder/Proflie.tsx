import { Avatar, Box, Button, Divider } from '@mui/material'
import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { FirstBox, SecondBox } from './Profile.module.styles.ts'

interface context {
	setPfp: any
	pfp: any
	userName: any
	setUserName: any
}

const Profile: React.FC = () => {
	const { setPfp, pfp, userName, setUserName } = useOutletContext<context>()

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const data = new FormData(form)
		const Name = data.get('Name')
		if (typeof Name === 'string' && Name.length >= 4) {
			setUserName(Name)
		}
	}

	return (
		<FirstBox>
			<SecondBox>
				<header
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
					}}
				>
					<Avatar
						sx={{
							width: 75,
							height: 75,
						}}
						src={pfp}
					/>
					<h1>{userName}</h1>
				</header>

				<Divider
					sx={{
						width: 1,
						border: '1px solid black ',
						opacity: 0.5,
					}}
				/>
				<h1>Costumise</h1>
				<Box
					component="form"
					onSubmit={(e) => submit(e)}
					sx={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'flex-start',
						flexDirection: 'column',
					}}
				>
					<p>
						<label>change User name:</label>
						<br />
						<input name="Name" type="text" placeholder="User name" />
					</p>

					<Button variant="contained" type="submit">
						Submit
					</Button>
				</Box>
			</SecondBox>
		</FirstBox>
	)
}

export default Profile
