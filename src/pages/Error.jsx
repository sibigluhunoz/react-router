import React, { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import {ENDPOINTS} from "../config/consts"

const Error = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate(ENDPOINTS.home)
    }, 2000)
  },[])

  return (
    <div>Page not found</div>
  )
}

export default Error