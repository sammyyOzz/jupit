import { Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
        color="primary" 
        bg="white" 
        border="1px solid" 
        borderColor="primary" 
        p="30px"
        mr={3}
        onClick={!user ? login : navigateToDashboard}
        w={['100%', null, null, null, 'fit-content']}
        mb={['20px', null, null, null, '0']}
      >
        {!user ? 'Sign In' : 'Dashboard'}
      </Button>
      <Button 
        color="primary" 
        bg="secondary" 
        border="1px solid" 
        borderColor="primary" 
        p="30px"
        onClick={!user ? login : logout}
        w={['100%', null, null, null, 'fit-content']}
      >
        {!user ? 'Register' : 'Logout'}
      </Button>
    </>
  )
}

export default Auth