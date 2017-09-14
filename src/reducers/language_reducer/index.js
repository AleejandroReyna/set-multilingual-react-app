import {SET_LANGUAGE, setLanguage} from '../../actions'

export default function Language(state = "", action) {
  switch(action.type) {
    case SET_LANGUAGE:
      localStorage.setItem("language", action.language)
      return action.language
    default:
      return state
  }
}