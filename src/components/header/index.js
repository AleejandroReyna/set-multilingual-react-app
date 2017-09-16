import React, {Component} from 'react'
import {connect} from 'react-redux' 
import { bindActionCreators } from 'redux';
import {NavLink, withRouter, Link} from 'react-router-dom'
import {setLocalLanguage} from '../../actions'
import {languageHelper} from '../../helpers'
import './index.sass'

class Header extends Component {
  constructor() {
    super()
    this.setEnglish = this.setEnglish.bind(this)
    this.setSpanish = this.setSpanish.bind(this)
  }
  setEnglish() {
    this.props.setLocalLanguage('en')
  }
  setSpanish() {
    this.props.setLocalLanguage('es')
  }
  render() {
    const {language} = this.props
    return(
      <header>
        <Link to="/" className="logo">
          <h2>Multilingual React App</h2>
        </Link> 
        <nav>
          <ul className="list">
            <li><NavLink exact activeClassName="active" to="/">{languageHelper("Inicio", "Home", language)}</NavLink></li>
            <li><NavLink exact activeClassName="active" to={ "/" + languageHelper("pagina", "page", language)} >{languageHelper("Página", "Page", language)}</NavLink></li>
            <li>
              <NavLink to={ "/" + languageHelper("anidado", "nested", language)}>{languageHelper("Anidado", "Nested", language)}</NavLink>
              <ul>
                <li><NavLink exact activeClassName="active" to={ "/" + languageHelper("anidado", "nested", language) + "/1"}>{languageHelper("Anidado", "Nested", language)} #01</NavLink></li>
                <li><NavLink exact activeClassName="active" to={ "/" + languageHelper("anidado", "nested", language) + "/2"}>{languageHelper("Anidado", "Nested", language)} #02</NavLink></li>
                <li><NavLink exact activeClassName="active" to={ "/" + languageHelper("anidado", "nested", language) + "/3"}>{languageHelper("Anidado", "Nested", language)} #03</NavLink></li>
              </ul>
            </li>
            <li><NavLink exact activeClassName="active" to={languageHelper("/ruta-no-definida", "/route-not-defined", language)}>{languageHelper("Ruta no definida", "Route not defined", language)}</NavLink></li>
            <li><NavLink exact activeClassName="active" to={languageHelper("/subrutas/no/definidas", "/subroutes/not/defined", language)}>{languageHelper("Ruta con subrutas no definidas", "Route with subroutes not defined", language)}</NavLink></li>
            <li>
              {language === "es" ?
                <button onClick={() => {this.props.setLocalLanguage('en')}}>English</button>
                :
                <button onClick={() => {this.props.setLocalLanguage('es')}}>Español</button>
              }
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

const PSTP = (state) => (
  {
    language: state.language
  }
)

const MDTP = dispatch => bindActionCreators({setLocalLanguage}, dispatch);

export default withRouter(connect(PSTP,MDTP)(Header))