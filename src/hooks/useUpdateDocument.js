import React, { useEffect } from 'react'

export default function useUpdateDocument(count) {
  useEffect(() => {
    document.title = `Title count ${count}`
  }, [count])
}
