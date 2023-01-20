import { render } from '@testing-library/react'
import CardTwo, { CardTwoProps } from '.'

describe('<CardTwo />', () => {
  it('renders the CardTwo component', () => {
    const enabledProps: CardTwoProps = {
      title: "some title",
      text: "some text",
      blueBg: false
    }

    const view = render(<CardTwo {...enabledProps} />)

    expect(view).toBeTruthy()
  })
})