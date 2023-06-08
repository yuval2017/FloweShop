import React from "react"
import "./App.css"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import Layout from "./layouts/Layout"
import HomeFlowers, {loader as homeFlowersLoader} from "./pages/Home/HomeFlowers"
import "./server"
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
     <Route
      index
      element={<HomeFlowers/>}
      loader={homeFlowersLoader}
    />
  </Route>
))

export default function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  )
}

