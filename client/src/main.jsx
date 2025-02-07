import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { StateContext, StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <StateProvider initialState={initialState}  reducer={reducer}>
      <App />
    </StateProvider>
  </StrictMode>,
)
