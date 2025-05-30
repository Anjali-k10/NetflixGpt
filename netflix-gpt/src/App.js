import React from "react";
import Body from "./components/Body"; 
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


const App = () => {
  return (
    <div>
    <Provider store={appStore}><Body/></Provider>  
    </div>
  )
}

export default App



// const appRouter = createBrowserRouter([
//    {
//     "path":"/",
//     "element": <Login/>
//    },{
//     "path":"/browse",
//     "element":<Browse/>
//    },
//    {
//     "path":"/signup",
//     "element":<Signup/>
//    }
// ])