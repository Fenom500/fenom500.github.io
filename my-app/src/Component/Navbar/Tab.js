import React, { Component } from 'react'

export default class Tab extends Component {
  render() {

    const sampleArray = [
        "test1",
        "test2"
    ];


  return (
      <ul>
        {sampleArray.map((item) => {
                <li>
                  {item}
                </li>
              }
            )
          }
        </ul>
    )
  }
};
