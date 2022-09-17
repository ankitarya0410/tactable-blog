import { render, screen } from '@testing-library/react'
import React from 'react';
import Header from 'common/header/header';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Header isMobile={false} isTablet={false} />)

    const heading = screen.getByRole('heading', {
      name: "TACTABLE BLOG",
    })

    expect(heading).toBeInTheDocument()
  })
})