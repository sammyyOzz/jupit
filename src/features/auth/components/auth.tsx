import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/button'
import { selectAuthUser } from '../redux/auth-selectors'
import { setUser } from '../redux/auth-slice'

function Auth() {
  const dispatch = useDispatch()
  const user = useSelector(selectAuthUser)
  console.log(user)

  const _setUser = () => {
    dispatch(setUser(true))
  }

  const logout = () => {
    dispatch(setUser(false))
  }

  return (
    <>
      <Button 
        outlined 
        color="primary" 
        handleClick={!user ? _setUser : logout}
      >
        Sign In
      </Button>
      <Button 
        outlined 
        bg="secondary" 
        color="primary" 
        handleClick={!user ? _setUser : logout}
      >
        Register
      </Button>
    </>
  )
}

export default Auth