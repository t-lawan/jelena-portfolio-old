import { createStore } from "redux"
import * as ActionTypes from "./actions"
const initalState = {
  pages: [],
  sidebar_links: [],
  header_links: [],
  jumbotron_content: [],
  show_modal: false,
  isLoaded: false,
  show_mobile_modal: false,
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PAGES:
      return Object.assign({}, state, {
        page: action.pages,
      })
    case ActionTypes.SET_SIDEBAR_LINKS:
      return Object.assign({}, state, {
        sidebar_links: action.sidebar_links,
      })
    case ActionTypes.SET_HEADER_LINKS:
      return Object.assign({}, state, {
        header_links: action.header_links,
      })
    case ActionTypes.SET_JUMBOTRON_CONTENT:
      return Object.assign({}, state, {
        jumbotron_content: action.jumbotron_content,
      })
    case ActionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        show_modal: true,
      })
    case ActionTypes.HIDE_MODAL:
      return Object.assign({}, state, {
        show_modal: false,
      })
    case ActionTypes.TOGGLE_MODAL:
      return Object.assign({}, state, {
        show_modal: !state.show_modal,
      })
    case ActionTypes.SHOW_MOBILE_MODAL:
      return Object.assign({}, state, {
        show_mobile_modal: true,
      })
    case ActionTypes.HIDE_MOBILE_MODAL:
      return Object.assign({}, state, {
        show_mobile_modal: false,
      })
    case ActionTypes.TOGGLE_MOBILE_MODAL:
      return Object.assign({}, state, {
        show_mobile_modal: !state.show_mobile_modal,
      })
    case ActionTypes.IS_LOADED:
      return Object.assign({}, state, {
        isLoaded: true,
      })
    default:
      return state
  }
}

export const store = () =>
  createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
