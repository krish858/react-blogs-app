import Signlabel from "../components/Signlabel"
import Signupform from "../components/Signupform"

function Signup() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
      <Signupform/>
      </div>
      <div className="md:w-1/2 hidden md:block">
        <Signlabel/>
      </div>
      
    </div>
  )
}

export default Signup