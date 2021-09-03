// __tests__/Contact.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Contact from './Contact'

afterEach(cleanup)

describe('Contact component renders', () => {
    it('renders', () => {
    render(<Contact />);
  });
  
    it('renders', () => {
      const { asFragment } = render(<Contact />)
      expect(asFragment()).toMatchSnapshot()
    })
  })
  