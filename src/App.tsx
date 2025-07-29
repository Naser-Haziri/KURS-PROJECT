import { ThemeProvider } from '@emotion/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ChatRoom from './components/chatRoomFolder/ChatRoom.tsx'
import HomePage from './components/HomePage.tsx'
import RootLayOut from './components/LayOut/RootLayOut.tsx'
import LogIn from './components/LogInFolder/LogIn.tsx'

import Profile from './components/ProfileFolder/Proflie.tsx'
import { Theme } from './Utils/Themes/Themes.ts'
const router = createBrowserRouter([
	{
		path: '',
		element: <LogIn />,
	},
	{
		path: 'home',
		element: <RootLayOut />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: ':roomId',
				element: <ChatRoom />,
			},
			{
				path: 'profile',
				element: <Profile />,
			},
		],
	},
])
function App() {
	return (
		<>
			<ThemeProvider theme={Theme}>
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	)
}

export default App
