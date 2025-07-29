import { Avatar, Box } from '@mui/material'
import React from 'react'

interface Props {
	grupPfp: string
	grupName: string
}

const HeaderChat: React.FC<Props> = ({ grupName, grupPfp }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
			}}
		>
			<Avatar
				sx={{
					marginTop: 2,
					marginRight: 1,
				}}
				src={grupPfp}
			/>
			<h2>{grupName}</h2>
		</Box>
	)
}

export default HeaderChat
