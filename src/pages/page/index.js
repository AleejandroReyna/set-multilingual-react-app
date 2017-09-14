import React from 'react'
import { connect } from 'react-redux'
import {languageHelper} from '../../helpers'

const Page = (props) => (<div><h1>{languageHelper('Página', 'Page', props.language)}</h1></div>)

const MSTP = (state) => ({
  language: state.language
})

export default connect(MSTP, null)(Page)