import Signlabel from "../components/Signlabel"
import Signinform from "../components/Signinform"

function Signin() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
      <Signinform/>
      </div>
      <div className="md:w-1/2 hidden md:block">
        <Signlabel/>
      </div>
      
    </div>
  )
}

export default Signin