const Successmessage = ({children} : {children : React.ReactNode}) => {
  return (
    <p className="text-center my-4 bg-amber-600 text-white font-bold p-3 uppercase text-sm">
     {children}   
    </p>
  )
}

export default Successmessage;