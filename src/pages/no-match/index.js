import React, {Component} from 'react'
import { connect } from 'react-redux'
import {languageHelper} from '../../helpers'

const noMatch = (props) => (
  <div><h1>{languageHelper('No hay rutas con esta búsqueda','No route from this search', props.language)}</h1></div>
)

const MSTP = (state) => ({
  language: state.language
})

export default connect(MSTP, null)(noMatch)