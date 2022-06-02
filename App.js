import { BrowserRouter } from "react-router-dom"
import Pages from "./pages/Pages"
import Category from "./components/Category"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Category />
        <Pages />
      </div>
    </BrowserRouter>
  )
}

export default App
