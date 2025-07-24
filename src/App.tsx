import { ThemeProvider } from '@emotion/react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage.tsx'
import RootLayOut from './components/LayOut/RootLayOut.tsx'
import LogIn from './components/LogInFolder/LogIn.tsx'
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
