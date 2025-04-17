import React,{useState,useEffect} from 'react'

const useOnline = () => {
    const [isOnline,setIsOnline] = useState(true)

    useEffect(()=>{
        function handleOnline(){
            setIsOnline(true)
        }
        function handleOffline(){
            setIsOnline(false)
        }
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)

        return ()=>{window.removeEventListener("online",handleOnline);
                    window.removeEventListener("offline",handleOffline);
        }
    },[])

    return isOnline
}

export default useOnline