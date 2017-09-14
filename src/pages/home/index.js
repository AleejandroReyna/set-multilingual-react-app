import React from 'react' 
import { connect } from 'react-redux'
import {languageHelper} from '../../helpers'

const Home = (props) => (<div><h1>{languageHelper('Inicio', 'Home', props.language)}</h1></div>)

const MSTP = (state) => ({
  language: state.language
})

export default connect(MSTP, null)(Home)