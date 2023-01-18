import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/button'
import { selectAuthUser } from '../redux/auth-selectors'
import { setUser } from '../redux/auth-slice'

function Auth() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const login = () => dispatch(setUser(true))
  const logout = () => dispatch(setUser(false))
  
  const user = useSelector(selectAuthUser)

  const navigateToDashboard = () => navigate('/dashboard')

  return (
    <>
      <Button 
        outlined 
        color="primary" 
        handleClick={!user ? login : navigateToDashboard}
      >
       {!user ? 'Sign In' : 'Dashboard'}
      </Button>
      <Button 
        outlined 
        bg="secondary" 
        color="primary" 
        handleClick={!user ? login : logout}
      >
        {!user ? 'Register' : 'Logout'}
      </Button>
    </>
  )
}

export default Auth