import { useEffect, useState } from 'react'

// custom Hooks in React need to start with "use"
const useFetch = (url) => {
  const [data, setData] = useState(null)

  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(false)

  // useEffect runs a function after every render of the component
  // If the state of the page is changed in useEffect, this triggers a rerender and then an infinite loop
  useEffect(() => {
    const abortConst = new AbortController()
    // this { signal : abortConst.signal } prevents the fetch from running normally after abortConst.abort() is fired. Anyway this, throws an error so we still end up in the catch block and the code there is executed
    fetch(url, { signal: abortConst.signal })
      .then((res) => {
        // Check if the response is not valid
        if (!res.ok) {
          throw Error('could not fetch valid data')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setError(false)
        setIsPending(false)
      })
      .catch(error => {
        // check the type of error and do not procede further if the error was generated by the AbortController
        if (error.name === 'AbortError') {
          console.log('Fetch aborted!')
        } else {
          setError(error.message)
          setIsPending(false)
        }
      })
    // This return code is run when the Hook is not used anymore. Here we avoid that further modifications to the DOM are applied by that hook when the targeted elements do not exist anymore
    return () => {
      abortConst.abort()
      console.log('cleanup')
    }
  }, [url]) // empty dependency array -> onl< runs the function after the initial rendering, additional variables which should be watched can be added to the array

  return { data, isPending, error }
}

export default useFetch
