import React, {  useRef, useEffect } from 'react'

export default function useClickOutside(handler) {

  const ref = useRef(null);
 
        useEffect(() => {
          function handleClickOutside (event) {
            if (ref.current && !ref.current.contains(event.target)){
              setIsOpen(false);
            }
            handler();
        }
        document.addEventListener("mousedown", handleClickOutside);
        }
        , [])


  return ref;
}
