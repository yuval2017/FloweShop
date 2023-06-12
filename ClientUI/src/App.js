import React from "react"
import "./App.css"

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import { ORCHID_AND_BOQUET_PAGE, HOME_PAGE } from './constants/PagesConstants'; // Import the constant
import Layout from "./layouts/Layout"
import HomeFlowers, {loader as homeFlowersLoader} from "./pages/Home/HomeFlowers"

import FlowerpotAndOrchid ,{loader as flowerpotAndBouquetLoader} from "./pages/FlowerpotAndBouquet/FlowerpotAndOrchid"
import FlowerDetail, {loader as flowerDetailLoader} from "./components/FlowerDetail"
const router = createBrowserRouter(createRoutesFromElements(
  <Route path={HOME_PAGE} element={<Layout />}>
     <Route
      index
      element={<HomeFlowers/>}
      loader={homeFlowersLoader}
    >
    </Route>
     <Route path={ORCHID_AND_BOQUET_PAGE}>
      <Route
      index
      element = {<FlowerpotAndOrchid />}
      loader={flowerpotAndBouquetLoader}
      />
      <Route path=":id" 
      element={<FlowerDetail />}
      loader={flowerDetailLoader}
      />
     </Route>
     <Route exact path=":id" element={<FlowerDetail />} loader={flowerDetailLoader} />
  </Route>
))

export default function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router} />
      
      
    </div>
  )
}

