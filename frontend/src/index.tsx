import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss';

import Home from './pages/Home/Home';
import Control from './pages/Control/Control';
import reportWebVitals from './reportWebVitals';
import HabForm from './components/HabForm';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/control-habs' element={<Control />} />
				<Route path='/admin-habs' element={<Control />} />
				<Route path='/admin-habs/:id' element={<HabForm />} />
				<Route path='/admin-habs/create-hab' element={<HabForm />} />
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
