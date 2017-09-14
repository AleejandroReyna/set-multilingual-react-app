import React from 'react'
import { connect } from 'react-redux'
import {languageHelper} from '../../helpers'

const Nested = (props) => (
  <div><h1>{languageHelper('Rutas Anidadas', 'Nested Routes', props.language)}</h1></div>
)

const MSTP = (state) => ({
  language: state.language
})

export default connect(MSTP, null)(Nested)