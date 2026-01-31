import Child1 from "./Component/Child1"
import Child2 from "./Component/Child2"
import Child3 from "./Component/Child3"
import { Parent } from "./Component/Parent"
import Map from "./Map"

function App(){
  return(
<>
<Map />
<h1>This Is App Page</h1>
<Child1  name="Sourav" age={32}/>
<Child2 city="Bhopal" country="India"/>
<Child3  gender="Male"/>
<Parent />
</>
  )
}
export default App