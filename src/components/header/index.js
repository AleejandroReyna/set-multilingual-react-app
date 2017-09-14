import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {Link } from 'react-router-dom'
import {setLanguage} from '../../actions'
import {languageHelper} from '../../helpers'

class Header extends Component {
  constructor() {
    super()
    this.setEnglish = this.setEnglish.bind(this)
    this.setSpanish = this.setSpanish.bind(this)
  }
  setEnglish() {
    this.props.setLanguage('en')
  }
  setSpanish() {
    this.props.setLanguage('es')
  }
  render() {
    const {language} = this.props
    return(
      <ul>
        <li><Link to="/">{languageHelper("Inicio", "Home", language)}</Link></li>
        <li><Link to={ "/" + languageHelper("pagina", "page", language)} >{languageHelper("Página", "Page", language)}</Link></li>
        <li>
          <Link to={ "/" + languageHelper("anidado", "nested", language)}>{languageHelper("Anidado", "Nested", language)}</Link>
          <ul>
            <li><Link to={ "/" + languageHelper("anidado", "nested", language) + "/1"}>{languageHelper("Anidado", "Nested", language)} #01</Link></li>
            <li><Link to={ "/" + languageHelper("anidado", "nested", language) + "/2"}>{languageHelper("Anidado", "Nested", language)} #02</Link></li>
            <li><Link to={ "/" + languageHelper("anidado", "nested", language) + "/3"}>{languageHelper("Anidado", "Nested", language)} #03</Link></li>
          </ul>
        </li>
        <li><Link to={languageHelper("/ruta-no-definida", "/route-not-defined", language)}>{languageHelper("Ruta no definida", "Route not defined", language)}</Link></li>
        <li><Link to={languageHelper("/subrutas/no/definidas", "/subroutes/not/defined", language)}>{languageHelper("Ruta con subrutas no definidas", "Route with subroutes not defined", language)}</Link></li>
        <li>
          {language === "es" ?
            <button onClick={() => {this.props.setLanguage('en')}}>English</button>
           :
           <button onClick={() => {this.props.setLanguage('es')}}>Español</button>
          }
        </li>
      </ul>
    )
  }
}

const PSTP = (state) => (
  {
    language: state.language
  }
)

const MDTP = dispatch => bindActionCreators({setLanguage}, dispatch);

export default connect(PSTP,MDTP)(Header)