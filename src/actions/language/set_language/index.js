export const SET_LANGUAGE = 'SET_LANGUAGE'

export const setLanguage = language =>  (
  {
    type: SET_LANGUAGE,
    language
  }
)

export const setLocalLanguage = (language) => {
  localStorage.setItem("language", language)
  return (dispatch, getState) => {
    dispatch(setLanguage(language))
  }
}