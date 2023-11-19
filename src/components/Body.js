import Login from './Login'
import Browse from './Browse'
import ErrorPage from './ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
/**
 * Renders the main body of the application, including the router and its routes.
 * @returns {JSX.Element} The Body component
 */
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse',
      element: <Browse />
    },
    {
      path: "/error",
      element: <ErrorPage />
    },
    {
      path: "*",
      element: <ErrorPage />
    }
  ])
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default Body
