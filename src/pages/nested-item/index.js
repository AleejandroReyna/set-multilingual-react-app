import React from 'react'
import { connect } from 'react-redux'
import {languageHelper} from '../../helpers'

const NestedItem = (props) => (
  <div>
    <h3>{languageHelper('Ruta anidada con el parámetro id:','Nested Route with params id:', props.language)} {props.match.params.id}</h3>
  </div>
)

const MSTP = (state) => ({
  language: state.language
})

export default connect(MSTP, null)(NestedItem)