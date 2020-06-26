import React,{useState,useReducer, } from 'react'

import GuideServer from '../../api/guideServer'
import {packageName} from '../../config/config'

const GuideContext = React.createContext();

const guideReducer = (state,action)=>{
  switch (action.type) {
    case 'GET_GUIDE':
        return [...action.payload]
    default:
      return state
  }
}

export const GuideProvider = ({children})=>{
  const [appDetails,dispach] = useReducer(guideReducer,[])

  const getGuide = async (callback)=>{
    try {
      const res = await GuideServer.get(`/api/v1/applications/${packageName}`);
      dispach({
        type:'GET_GUIDE',
        payload:res.data.resault[0].guides
      })
      callback();
    } catch (error) {
      console.log(`Not done err:${error}`)
    }
  } 

  const getTips = async (callback)=>{
    try {
      const res = await GuideServer.get(`/api/v1/applications/${packageName}`);
      dispach({
        type:'GET_GUIDE',
        payload:res.data.resault[0].tips
      })
      callback();

    } catch (error) {
      console.log(`Not done err:${error}`)
    }
  } 

  const getTricks = async (callback)=>{

    try {
      const res = await GuideServer.get(`/api/v1/applications/${packageName}`);
      dispach({
        type:'GET_GUIDE',
        payload:res.data.resault[0].tricks
      })
      callback();
    } catch (error) {
      console.log(`Not done err:${error}`)
    }
  } 


  return (
    <GuideContext.Provider value={{data:appDetails, getGuide, getTips, getTricks}}>
      {children}
    </GuideContext.Provider>
  )
}

export default GuideContext