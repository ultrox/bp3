import React from 'react'
import * as api from 'src/api'

function useSearch(query) {
  let [loading, setLoading] = React.useState(false)
  let [error, setError] = React.useState(null)
  let [things, setThings] = React.useState(null)

  React.useEffect(
    () => {
      let current = true
      if (query.length >= 1) {
        setLoading(true)
        setError(null)
        api
          .thingSearch(query)
          .then(thing => current && setThings(things.results))
          .catch(error => current && setError(error.message))
          .finally(() => current && setLoading(false))
      }
      return () => (current = false)
    },
    [query],
  )

  return {things, error, loading}
}

export {useSearch}
