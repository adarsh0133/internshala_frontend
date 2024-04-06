import { configureStore } from '@reduxjs/toolkit'
import userReducers from './Reducers/userReducers'
import employeReducers from './Reducers/employeReducers'
import internshipReducers from './Reducers/internshipReducers'
import jobsReducers from './Reducers/jobsReducers'
import resumeReducers from './Reducers/resumeReducers'

export default configureStore({
  reducer: {
    userReducers,
    employeReducers,
    internship:internshipReducers,
    jobs:jobsReducers,
    resumee:resumeReducers,
  },
})