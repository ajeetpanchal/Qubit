import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Post from './Post';
import AskQuestion from './AskQuestion';
export default class Home extends Component {
    render() {
        return (
            <div>
               
                <Navbar />
                
                <Post />

            </div>
        )
    }
}
