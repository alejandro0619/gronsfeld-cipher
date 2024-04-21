import HomePage from "./components/Homepage"
import { decryptMessage } from "./utils/decrypt"
import { encryptMessage } from "./utils/encrypt"

import './styles/App.css'
function App() {

  return (
    <HomePage encrypt={encryptMessage} decrypt={decryptMessage}/>
  )
}

export default App
