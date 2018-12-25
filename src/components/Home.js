import React from 'react';
import './home.css';

export default function Home() {
    return (
        <div>
            <div className="col-md-6 col-md-offset-3 col-xs-12 text-center">
                <img
                    src="https://image.ibb.co/fWjm35/sargana_logo_ENG.png"
                    alt="sargana_logo_ENG"
                    className="logo"/>
            </div>
            <div className="col-xs-12 text-center">
                <hr className="blue"/>
            </div>

            {/* Mailchimp Subscriptions */}
            <div className="col-xs-12 mail">
                <br/>
                <div className="col-xs-12 col-md-offset-4 col-md-4 text-center">
                    <a href="http://eepurl.com/cPim9j">
                        <div className="well well-sm text-center clear">
                            <h3>Join our Mailing List</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
