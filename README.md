# Redux Toll Kit

## 1- Install

- npm install @reduxjs/toolkit react-redux

## 2- Create Store

- creates a file store.js under redux folder
- import configureReducer make store then add reducer
- wrap app components with Provide, and provide store in provider at main.js file

## 3- Create slices

- create feature slices like counterSlice or cartSlice ...
- in that slice file import "createSlice({})"
- in that slice object add name, initial state, reducers
- in reducers make functions
- export every fuction, reducer

## 4- Add Sllice reducers to store

- in store inside reducer add this slice reducer function

## 5- UseSelector & useDispatch

- now catch data using UseSelector()
- send actions using useDispatch to update data
