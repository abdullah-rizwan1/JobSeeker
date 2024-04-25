import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { Contact } from './pages/help/Contact'
import { Faq } from './pages/help/Faq'
//Layouts
import RootLayout from './layouts/RootLayout'
import { HelpLayout } from './layouts/HelpLayout'
import { NotFound } from './pages/NotFound'
import { CareersLayout } from './layouts/CareersLayout'
import { Careers } from './pages/careers/Careers'
import { careersLoader } from './pages/careers/Careers'
import { CareerDetails } from './pages/careers/CareerDetails'
import { careerDetailsLoader } from './pages/careers/CareerDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
