import {
	Avatar,
	Badge,
	Divider,
	List,
	ListItem,
	Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
interface Person {
	avatar: string
	name: string
	status: string
	Admin?: boolean
	id: string
}

interface Props {
	title: string
	array: Person[]
}

const PeopleOnline: React.FC<Props> = ({ title, array }) => {
	return (
		<>
			<Divider
				sx={{
					border: 1,
					width: '90%',
					marginTop: '5px',
				}}
			/>
			<Typography>{title}</Typography>
			<List>
				{array.map((person) => (
					<ListItem key={person.id}>
						<Badge
							variant="dot"
							invisible={false}
							color={person.status === 'away' ? 'warning' : 'success'}
						>
							<Avatar
								alt={person.avatar}
								src={person.avatar}
								style={{ backgroundColor: grey[800] }}
							/>
						</Badge>
						<Typography
							sx={{
								ml: 1,
							}}
						>
							{person.name}
						</Typography>
					</ListItem>
				))}
			</List>
		</>
	)
}
export default PeopleOnline
