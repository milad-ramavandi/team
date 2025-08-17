import React from 'react'
import Subscribe from "../../components/ui/blog/subscribe";

const RootLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <main>
     {children}
     <Subscribe/>
    </main>
  )
}

export default RootLayout