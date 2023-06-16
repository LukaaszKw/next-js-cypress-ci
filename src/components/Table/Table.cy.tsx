import React from 'react'
import Table from './Table'

describe('Table component tests', () => {
  it('Should be mounted', () => {
    cy.mount(<Table />)
  })
  it('Should contain line Tasks', () => {
    cy.mount(<Table />)
    cy.get("[data-test-id='Tasks with exact styles']")
    .should('have.class', 'focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800')
  })
  it('Should contain tab Sort By', () => {
    cy.mount(<Table />)
    cy.get("[data-test-id='Upper box background']")
    cy.get("[data-test-id='Smaller upper box']")
    cy.get("[data-test-id='Sort By']")
    cy.get("[data-test-id='Select sort']").select('Oldest')
    })
  it('Should contain tabs', () => {
    cy.mount(<Table />)
    cy.get("[data-test-id='tabs']")
  })
  it('Should contain tab All', () => {
    cy.mount(<Table />)
    cy.get("[data-test-id='All']")
  })
  it('Should contain tab Done', () => {
    cy.mount(<Table />)
    cy.get("[data-test-id='Done']")
  })
  it('Should contain tab Pending', () => {
    cy.mount(<Table />)
    cy.get("[data-test-id='Pending']")
  })
  it('Should contain UX Wireframes', () => {
    cy.mount(<Table />)
    cy.get("[data-test-id='UX Wireframes']")
  })
  it('Should contain Checkbox UX', () => {
    cy.mount(<Table />)
    cy.get("[data-test-id='Checkbox UX']")
  })
})