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
import FlowerpotAndBouquet ,{loader as flowerpotAndBouquetLoader} from "./pages/FlowerpotAndBouquet/FlowerpotAndBouquet"
import FlowerDetail, {loader as flowerDetailLoader} from "./components/FlowerDetail"
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
     <Route
      index
      element={<HomeFlowers/>}
      loader={homeFlowersLoader}
    >

    </Route>
     <Route path="FlowerpotAndBouquet">
      <Route
      index
      element = {<FlowerpotAndBouquet />}
      loader={flowerpotAndBouquetLoader}
      />
      
      <Route path=":id" 
      element={<FlowerDetail />}
      loader={flowerDetailLoader}
      />
     </Route>
     <Route path=":id" element={<FlowerDetail />} loader={flowerDetailLoader} />

  </Route>
))

export default function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
    </div>
  )
}

