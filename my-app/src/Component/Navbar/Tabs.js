import React from 'react'

function Tabs() {

    const tabs = [
        "About us",
        "Events",
        "Contact us",
        "Donate",
        
    ];

    let output = tabs.map(tabName => "<li>" + tabName + "</li>");
    output = "<ul>" + output + "</ul>";


    return (
        output
    );
}

export default Tabs
