import React from 'react';

function PeakIcon({type}) {

    let color = ''; 
    switch (type) {
        case 'squash':
            color = '#EEBF41'; 
            break;
        case 'greens':
            color = '#8D9B34';
            break;
        case 'winter_vegetable': 
            color = '#75A58F'; 
            break; 
        case 'summer_vegetble': 
            color = '#B96E41'; 
            break; 
        case 'aromatic': 
            color = '#5FB6D1'; 
            break; 
        case 'fungi':
            color = '#C59A61';
            break; 
        case 'legume': 
            color = '#9ACB01'; 
            break; 
        case 'root': 
            color = '#D3C149'; 
            break; 
        case 'other': 
            color = '#6FAC58'; 
            break; 
        default:
            color = '#B96E41'; 
            break;
    }

    console.log(type, color);

    return (
        <div className="icon">
            <svg viewBox="0 0 36 36" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="squash-peak" transform="translate(-11.000000, -11.000000)" fill={color}>
                        <g id="squash">
                            <circle cx="29.145" cy="29.145" r="17.545"></circle>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default PeakIcon;
