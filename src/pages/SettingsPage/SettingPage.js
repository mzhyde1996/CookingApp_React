import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SettingPage.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const SettingsPage = () => {
    return (
        <>
        
            <Header />
            <h1>Settings</h1>
            <div className="settings-page">
            <div className="settings-container">
                <fieldset className="settings-fieldset">
                    <legend className="settings-legend">User information</legend>
                    <div className="settings-input-container">
                        <div className="settings-input-row">
                            <label className="settings-label">Username:</label>
                            <p className="settings-text">test</p>
                        </div>
                        <div className="settings-input-row">
                            <label className="settings-label">Email:</label>
                            <p className="settings-text">test@test.com</p>
                        </div>
                    </div>
                </fieldset>
                </div>
                
                <div className="settings-container">
                <fieldset className="settings-fieldset">
                    <legend className="settings-legend">Dietary</legend>
                    <div className="settings-input-container">
                        <div className="settings-input-row">
                            <label className="settings-label">Diet</label>
                            <select className="select">
                                <option selected>Omnivore</option>
                                <option>Vegan</option>
                                <option>Vegetarian</option>
                                <option>Pescatarian</option>
                                <option>Fruitarian</option>
                            </select>
                        </div>
                        <div className="settings-input-row">
                            <label className="settings-label">Restrictions:</label>
                            <select className="select">
                                <option selected>None</option>
                                <option>No nuts</option>
                                <option>No milk</option>
                                <option>No eggs</option>
                                <option>No beans</option>
                                <option>No chocolate</option>
                                <option>No cereals</option>
                            </select>
                        </div>
                    </div>
                </fieldset>
                
            </div>
            <div className='button-cont'>
                <Link to="/login" className='btn1'>Log out</Link>
            </div> 
        </div>
        <Footer/>
        </>
    )
}

export default SettingsPage;
