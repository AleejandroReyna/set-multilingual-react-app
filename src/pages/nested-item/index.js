import React from 'react'

const NestedItem = ({match}) => (
  <div>
    <h3>Nested Route with params id: {match.params.id}</h3>
  </div>
)

export default NestedItem