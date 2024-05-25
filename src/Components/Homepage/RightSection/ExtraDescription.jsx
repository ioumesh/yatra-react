import React from 'react';
import styled from 'styled-components';

const Description = styled.div`
    margin: 20px auto;
    width: 96%;
    text-align: left;
    background-color: white;
    border: 1px solid hsla(0,0%,89%,.3);
    margin: 25px 15px;
    display: block;
    padding: 20px 15px;
    color: #333;
    box-shadow: 0 3px 6px rgb(0 0 0 / 10%);
    font-size: 14px;
    line-height: 20px;
    font-weight: 550;
`;

const Why = styled.div`
    font-size: 20px;
    font-weight: 600;
    background-color: yellow;
    background: linear-gradient(90deg,#ea2331,#43264e 50%);
    -webkit-background-clip: text;
    background-clip: text;
    line-height: 28px;
    -webkit-text-fill-color: transparent;
    margin-bottom: 10px;
`;

const Boldfont = styled.div`
    font-size: 16px;
    font-weight: 900;
    line-height: 20px;
    padding-bottom: 5px;
`;

export default function ExtraDescription() {
    return (
        <Description>
            <Why>
                Why book with Yatra.com?
            </Why>
            <div>
                7 Brilliant reasons Yatra should be your one-stop-shop!
                <br /><br />
                <Boldfont>Book Flights, Hotels, Trains, Buses, Cruise and Holiday Packages</Boldfont>
                On Yatra.com, you can tailor your trip from end-to-end by scouring suitable flights and making your flight booking before proceeding with your hotel bookings. Yatra’s vast hotel repository will see you through this process seamlessly. Any intervening journey can be conveniently planned by searching up relevant train connectivity and making an IRCTC ticket booking. Look up well-researched holiday packages, sift through cruise packages and finalise your entire trip on just one platform.
            </div>
        </Description>
    );
}