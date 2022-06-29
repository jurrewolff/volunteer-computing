/*
 * Central point of the website which gets called by the render page.
 * This rending is of each page is possible by calling the jumppage function,
 * which provides the link between each page and url-path.
 */

// Functionality import
import JumpPage from "./Actions/jumpPage"

function App() {

  return (
    <JumpPage />
  )
}

export default App;
