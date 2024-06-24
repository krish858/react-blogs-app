import {Routes,Route} from 'react-router-dom'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import Publish from './pages/Publish'
import Error from './pages/Error'

function App() {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/publish' element={<Publish/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </>
  )
}

export default App