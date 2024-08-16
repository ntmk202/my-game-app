// slices.js
const initialState = {
    points: 0,
    time: 0,
    circles: [],
    isRunning: false,
    circleCount: 10,
  };
  
  // Action Types
  const SET_POINTS = 'SET_POINTS';
  const SET_TIME = 'SET_TIME';
  const SET_CIRCLES = 'SET_CIRCLES';
  const SET_IS_RUNNING = 'SET_IS_RUNNING';
  const SET_CIRCLE_COUNT = 'SET_CIRCLE_COUNT';
  
  // Action Creators
  export const setPoints = (points) => ({ type: SET_POINTS, payload: points });
  export const setTime = (time) => ({ type: SET_TIME, payload: time });
  export const setCircles = (circles) => ({ type: SET_CIRCLES, payload: circles });
  export const setIsRunning = (isRunning) => ({ type: SET_IS_RUNNING, payload: isRunning });
  export const setCircleCount = (circleCount) => ({ type: SET_CIRCLE_COUNT, payload: circleCount });
  
  // Reducer
  const gameReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_POINTS:
        return { ...state, points: action.payload };
      case SET_TIME:
        return { ...state, time: action.payload };
      case SET_CIRCLES:
        return { ...state, circles: action.payload };
      case SET_IS_RUNNING:
        return { ...state, isRunning: action.payload };
      case SET_CIRCLE_COUNT:
        return { ...state, circleCount: action.payload };
      default:
        return state;
    }
  };
  
  export default gameReducer;
  