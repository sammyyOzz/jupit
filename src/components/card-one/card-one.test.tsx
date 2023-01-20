import { render } from '@testing-library/react'
import CardOne, { CardOneProps } from '.'

describe('<CardOne />', () => {
  it('renders the CardOne component', () => {
    const enabledProps: CardOneProps = {
      image: "some valid image url",
      text: "Transaction Successful!",
      right: "0",
      bottom: "120px"
    }

    const view = render(<CardOne {...enabledProps} />)

    expect(view).toBeTruthy()
  })
})