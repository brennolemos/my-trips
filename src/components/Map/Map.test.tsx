import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a javascript library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place1 = {
      id: '1',
      name: 'Fortaleza',
      slug: 'fortaleza',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const place2 = {
      id: '2',
      name: 'Caucaia',
      slug: 'caucaia',
      location: {
        latitude: 10,
        longitude: -20
      }
    }

    render(<Map places={[place1, place2]} />)

    expect(screen.getByTitle(/fortaleza/i)).toBeInTheDocument()
    expect(screen.getByTitle(/caucaia/i)).toBeInTheDocument()
  })
})
