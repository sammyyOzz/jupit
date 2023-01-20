import { render } from '@testing-library/react'
import TestimonialCard, { TestimonialCardProps } from '.'

describe('<TestimonialCard />', () => {
  it('renders the TestimonialCard component', () => {
    const enabledProps: TestimonialCardProps = {
      name: "some name",
      title: "some title",
      text: "some text"
    }

    const view = render(<TestimonialCard {...enabledProps} />)

    expect(view).toBeTruthy()
  })
})