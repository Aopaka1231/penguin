import { MyButton } from "./components/Button"
import { FormInput } from "./components/FormImput"



function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <MyButton />
      <FormInput label="test1" placeHolder="test2" errorMessage="test3"/>
    </>
  )
}

export default App
