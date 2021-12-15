import React from 'react'

import PropTypes from 'prop-types'

import './styles.css'

export const Container = function render({ children }) {
  return <div className='base-container'>{children}</div>
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
}
