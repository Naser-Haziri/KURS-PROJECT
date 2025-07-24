import { useTheme } from '@mui/material/styles'
const HomePage = () => {
	const theme = useTheme()
	return (
		<div
			style={{
				width: '100%',
				height: '94.1vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					width: '25%',
					height: 400,
					border: `2px solid ${theme.palette.primary.main}`,
					borderRadius: '10%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					marginRight: 70,
				}}
			>
				<h1>Please can you pick a chat</h1>
				<h3>go To the menu and pick a chat</h3>
			</div>
		</div>
	)
}
export default HomePage
