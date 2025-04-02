import './App.css'
import ColorPickerInput from "./components/input"


function App() { 

  return (
    <div className='flex flex-col items-center justify-center h-120 w-120 shadow-sm bg-gray-100'>
      <h1 className=' text-2xl font-bold mb-6'>Color Picker</h1>
      <ColorPickerInput/>
    </div>
  )
}

export default App
