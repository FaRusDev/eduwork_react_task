import { useState } from 'react';
import Container from './components/Container/Container';


function App() {
  const [nama,setNama] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [tanggal,setTanggal] = useState('')
  const [isChecked1, setIsChecked1] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)
  const [isRadioChecked, setIsRadioChecked] = useState(false)
  const [checkbox,setCheckbox] = useState()
  const [checkbox2,setCheckbox2] = useState()
  const [radio,setRadio] = useState('')

  const handleCheckbox = (e) => {
    if(e.target.checked){
      setIsChecked1(true)
      console.log(e.target.value)
      setCheckbox(e.target.value)
    }
  }

  const handleCheckbox2 = (e) => {
    setIsChecked2(true)
    setCheckbox2(e.target.value)
  }

  const handleRadio = (e) => {
    if(e.target.checked){
      setIsRadioChecked(true)
      setRadio(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`
      Nama : ${nama},
      email : ${email},
      password : ${password},
      tanggal : ${tanggal},
      checkbox : ${checkbox},
      checkbox2 : ${checkbox2},
      radio : ${radio}
    `)
  }

  return (
    <div className='bg-orange-300'>
      <Container>
        <form onSubmit={handleSubmit} className='w-[80%] h-[70%] rounded-xl shadow-2xl bg-white p-10'>
          <h1 className='mx-auto text-lg font-bold uppercase w-fit mb-5'>Tugas Membuat Form</h1>
          <div className='flex flex-col space-y-5 justify-center items-center w-full'>
            <div className='flex relative'>
              <input type='text' value={nama} onChange={(e)=>{setNama(e.target.value)}} required id='nama' placeholder='nama' name='nama' className='border border-gray-500 rounded-md p-3'/>
              {/* <label htmlFor='nama' className='absolute -top-3 left-1 bg-white'>Nama</label> */}
            </div>
            <div className='flex relative'>
              <input type='email' required value={email} onChange={(e)=>setEmail(e.target.value)} id='email' placeholder='email' name='email' className='border border-gray-500 rounded-md p-3'/>
              {/* <label htmlFor='email' className='absolute -top-3 left-1 bg-white'>Nama</label> */}
            </div>
            <div className='flex relative'>
              <input type='password' required value={password} onChange={(e)=>setPassword(e.target.value)} id='password' placeholder='password' name='password' className='border border-gray-500 rounded-md p-3'/>
              {/* <label htmlFor='password' className='absolute -top-3 left-1 bg-white'>Nama</label> */}
            </div>
            <div className='flex relative'>
              <input type='date' required id='date' value={tanggal} onChange={(e)=>setTanggal(e.target.value)} placeholder='date' name='date' className='border border-gray-500 rounded-md p-3'/>
              {/* <label htmlFor='password' className='absolute -top-3 left-1 bg-white'>Nama</label> */}
            </div>
            <div className='flex space-x-4'>
              <input checked={isChecked1} value='checkbox' onChange={(e)=>handleCheckbox(e)} type='checkbox' id='checkbox' placeholder='checkbox' name='checkbox' className='border border-gray-500 rounded-md p-3'/>
              <label htmlFor='checkbox'>checkbox</label>
              <input checked={isChecked2} value='checkbox2' onChange={(e)=>handleCheckbox2(e)} type='checkbox' id='checkbox2' placeholder='checkbox2' name='checkbox2' className='border border-gray-500 rounded-md p-3'/>
              <label htmlFor='checkbox2'>checkbox2</label>
            </div>
            <div className='flex space-x-4'>
              <input checked={isRadioChecked} value="radio1" onChange={(e)=>handleRadio(e)} type='radio' id='radio1' placeholder='radio1' name='radio1' className='border border-gray-500 rounded-md p-3'/>
              <label htmlFor='radio1' >Radio 1</label>
              <input checked={isRadioChecked} value="radio2" onChange={(e)=>handleRadio(e)} type='radio' id='radio2' placeholder='radio2' name='radio1' className='border border-gray-500 rounded-md p-3'/>
              <label htmlFor='radio2' >Radio 2</label>
            </div>
           
            <button type='submit' className='bg-orange-300 w-2/3 h-14 rounded-lg hover:bg-orange-500 hover:text-white'>Submit</button>
          </div>
        </form>
      </Container>
    </div>
    
  );
}

export default App;
