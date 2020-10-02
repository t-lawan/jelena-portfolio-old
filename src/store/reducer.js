import { createStore } from "redux"
import * as ActionTypes from "./actions"
import { ModalTypes } from "../utility/richtext";
const initalState = {
  pages: [],
  sidebar_links: [],
  header_links: [],
  navbar_links: [],
  jumbotron_content: [],
  modal_content: ModalTypes.CONTACT,
  isLoaded: false,
  show_mobile_modal: false,
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SET_PAGES:
      return Object.assign({}, state, {
        pages: action.pages,
      })
    case ActionTypes.SET_SIDEBAR_LINKS:
      return Object.assign({}, state, {
        sidebar_links: action.sidebar_links,
      })
    case ActionTypes.SET_HEADER_LINKS:
      return Object.assign({}, state, {
        header_links: action.header_links,
      })
    case ActionTypes.SET_NAVBAR_LINKS:
      return Object.assign({}, state, {
        navbar_links: action.navbar_links,
      })
    case ActionTypes.SHOW_MOBILE_MODAL:
      return Object.assign({}, state, {
        show_mobile_modal: true,
        modal_content: action.content
      })
    case ActionTypes.HIDE_MOBILE_MODAL:
      return Object.assign({}, state, {
        show_mobile_modal: false,
        modal_content: action.content
      })
    case ActionTypes.TOGGLE_MOBILE_MODAL:
      return Object.assign({}, state, {
        show_mobile_modal: !state.show_mobile_modal,
        modal_content: action.content
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
    reducer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
