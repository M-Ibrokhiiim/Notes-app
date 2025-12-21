import TITLE from "./components/home/Title"
import INPUT  from './components/home/Input'
import { Box } from "@chakra-ui/react"
import LISTS from "./components/home/Lists"
import { useState } from "react"

function App() {
const [loading,setLoading] =useState(false)
  return (
    <> 
     <Box h={{base:'170vw',sm:'100vw',lg:'50vw'}} w={{base:'90vw',md:'70vw'}} display={'flex'} flexDirection={'column'} >
        <TITLE/>
        <INPUT setLoading={setLoading} loading={loading}/> 
        <LISTS loading={loading} setLoading={setLoading}/>
     </Box>
    </>
  )
}

export default App
