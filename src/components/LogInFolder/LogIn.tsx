import { Box, Button, TextField, Typography } from '@mui/material'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../LogInFolder/LogIn.module.css'
const LogIn = () => {
	const [error, setError] = useState(false)
	const [passWordError, setPassWordError] = useState(false)
	const [Email, setEmail] = useState<string>('')
	const [PassWord, setPassWord] = useState<string>('')

	const navigate = useNavigate()
	const submitLogInForm = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (Email.trim().length === 0 || PassWord.trim().length === 0) {
			setError(true)
			setPassWordError(false)

			console.log('all input have to br filled')
			return
		}

		if (PassWord.trim().length <= 6) {
			setPassWordError(true)
			setError(false)
			console.log('password to short')
			return
		}

		setError(false)
		setPassWordError(false)
		setEmail('')
		setPassWord('')
		navigate('/home')
		const token = PassWord
		localStorage.setItem('AuthToken', token)
	}

	return (
		<div className={styles.div}>
			<Box
				component="form"
				onSubmit={submitLogInForm}
				sx={{
					display: 'flex',
					flexDirection: 'column',
					border: 1,
					borderRadius: 7,
					padding: 3,
					width: 450,
					height: 300,
				}}
			>
				<Typography variant="h3" sx={{ marginBottom: 3 }}>
					Login
				</Typography>

				<TextField
					value={Email}
					onChange={(e) => setEmail(e.target.value)}
					label="Username"
					type="email"
					variant="outlined"
					name="email"
					sx={{ marginBottom: 3 }}
				/>

				<TextField
					value={PassWord}
					onChange={(e) => setPassWord(e.target.value)}
					label="Password"
					type="password"
					variant="outlined"
					name="password"
					className=""
					sx={{ marginBottom: 1 }}
				/>

				<List sx={{ padding: 0 }}>
					{error && (
						<ListItem>
							<p className={styles.p}>All inputs must be filled</p>
						</ListItem>
					)}
					{passWordError && (
						<ListItem>
							<p className={styles.p}>Password must be at least 7 characters</p>
						</ListItem>
					)}
				</List>

				<Button variant="contained" color="secondary" type="submit">
					Submit
				</Button>
			</Box>
		</div>
	)
}

export default LogIn
