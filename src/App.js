import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import SharedLayout from './components/SharedLayout/SharedLayout';
import Setting from './components/mySetting/Setting';
import Update from './components/Update/Update';
import Error from './components/Error/Error';
import New from './components/New/New';
import PostDetail from './components/PostDetail/PostDetail'

function App() {

  const theme = useSelector(state => state.theme)


  return (

    <div className="App" id={theme.theme}>
      <Router>
        <Routes>
          <Route path='/' element={<SharedLayout />} >

            <Route index element={<Login />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='dashboard/setting' element={<Setting />} />
            <Route path='*' element={<Error />} />
            <Route path='dashboard/admin/new' element={<New />} />
            <Route path='dashboard/edit/:id' element={<Update />} />
            <Route path='dashboard/feed/:id' element={<PostDetail />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
