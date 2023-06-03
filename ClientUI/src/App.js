import React from "react"
import "./App.css"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import Layout from "./layouts/Layout"
import HomeFlowers from "./pages/home/HomeFlower"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
     <Route
      index
      path="home"
      element={<HomeFlowers />}
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

