import { getByText, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import Nav from '.'
import { appRoutes } from '../../routes'
import { TestProvider, TestRouter } from '../../utils/test-utils'

describe('<Nav />', () => {
  it('renders the Nav component', () => {
    const view = render(
      <TestProvider>
        <TestRouter>
          <Nav />
        </TestRouter>
      </TestProvider>
    )
    expect(view).toBeTruthy()
  })

  it('renders the Nav component links', () => {
    render(
      <TestProvider>
        <TestRouter>
          <Nav />
        </TestRouter>
      </TestProvider>
    )

    appRoutes.forEach(route => {
      expect(screen.getByText(route.name)).toBeInTheDocument()
    })
  })
})