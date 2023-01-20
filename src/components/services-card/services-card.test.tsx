import { render } from '@testing-library/react'
import ServicesCard, { ServicesCardProps } from '.'

describe('<ServicesCard />', () => {
  it('renders the ServicesCard component', () => {
    const enabledProps: ServicesCardProps = {
      title: "some title",
      text: "some text",
      icon: "some icon url"
    }

    const view = render(<ServicesCard {...enabledProps} />)

    expect(view).toBeTruthy()
  })
})