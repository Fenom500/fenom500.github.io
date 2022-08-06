import React, { Component } from 'react'


const tabList = [
  {
    label: "About Us",
    link: "#",
    cName: "navbar-links"
  },
  {
    label: "Events",
    link: "#",
    cName: "navbar-links"
  },
  {
    label: "Donate New",
    link: "#",
    cName: "navbar-links"
  },
]


export class Tab extends Component {
  render() {
    return (
      <div>
        <ul>
          {tabList.map((obj,index) => {
            return <li key={index}>
               <a className={obj.cName} href={obj.link}>
                  {obj.label}
               </a>
              </li>
            }
          )}
        </ul>
      </div>
    )
  }
}

export default Tab