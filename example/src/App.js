import React from 'react'

import { useMyHook } from 'getch'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
