import React from 'react' 
import { connect } from 'react-redux'
import {languageHelper} from '../../helpers'
import cssModules from 'react-css-modules'
import Styles from './styles.sass'
import gato from './gato.jpg'

const Home = (props) => (
  <div styleName="content">
    <h1>{languageHelper('Inicio', 'Home', props.language)}</h1>
    <img src={gato} alt="" role="presentation" />
  </div>
)

const MSTP = (state) => ({
  language: state.language
})

export default connect(MSTP, null)(cssModules(Home, Styles))