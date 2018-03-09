import {
  SELECT_EVENTS_SORT,
  VOID_GOTTEN_EVENTS,
  GET_EVENTS_REQUEST,
  GET_EVENTS_RECEIVE,
  GET_EVENTS_FAILURE,
  POST_EVENT_REQUEST,
  POST_EVENT_SUCCESS,
  POST_EVENT_FAILURE
} from '../actions/eventsActions'

// SELECTED EVENTS SORT

export const selectedEventsSortReducer = (state = 'new', action) => {
  switch (action.type) {
    case SELECT_EVENTS_SORT:
      return action.eventsSort
    default:
      return state
  }
}

// EVENTS REDUCERS

const initEventsState = {
  didInvalidate: false,
  error: null,
  isGetting: false,
  items: []
}

const eventsReducer = (state = initEventsState, action) => {
  switch (action.type) {
    case VOID_GOTTEN_EVENTS:
      return {
        ...state,
        didInvalidate: true
      }
    case GET_EVENTS_REQUEST:
      return {
        ...state,
        didInvalidate: false,
        error: null,
        isGetting: true
      }
    case GET_EVENTS_RECEIVE:
      return {
        ...state,
        didInvalidate: false,
        isGetting: false,
        items: action.events
      }
    case GET_EVENTS_FAILURE:
      return {
        ...state,
        didInvalidate: false,
        error: action.error,
        isGetting: false
      }
    default:
      return state
  }
}

export const eventsBySortReducer = (state = { }, action) => {
  switch (action.type) {
    case VOID_GOTTEN_EVENTS:
    case GET_EVENTS_REQUEST:
    case GET_EVENTS_RECEIVE:
    case GET_EVENTS_FAILURE:
      return {
        ...state,
        [action.eventsSort]: eventsReducer(state[action.eventsSort], action)
      }
    default:
      return state
  }
}

// POST EVENT REDUCER

const initPostEventState = { error: null, id: null, requesting: false }

export const postEventReducer = (state = initPostEventState, action) => {
  switch (action.type) {
    case POST_EVENT_REQUEST:
      return {
        ...state,
        error: null,
        id: null,
        requesting: true
      }
    case POST_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        id: action.payload,
        requesting: false
      }
    case POST_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        id: null,
        requesting: false
      }
    default:
      return state
  }
}