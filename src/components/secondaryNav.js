import React from "react"
import Link from "gatsby-link"

export default ({ ...props }) => {
    let sortedNavItems = props.navItems.sort(function (a, b) {
        if (a.title < b.title) return -1;
        else if (a.title > b.title) return 1;
        return 0;
      });
    return(
        <nav className="willow-secondary-nav" role="navigation" aria-label="secondary">
            <h1 className="willow-secondary-nav__heading">Methods</h1>
            <ul className="willow-secondary-nav__list">
            {
                sortedNavItems.map((item, index) => {
                    if(item.url) {
                        return (
                            <li className="willow-secondary-nav__item" key={index}>
                                <Link 
                                    to={item.url} 
                                    className={(props.page === item.url ? "willow-secondary-nav__link willow-secondary-nav__link--active" : "willow-secondary-nav__link")}
                                    >{item.title}
                                </Link>
                            </li>
                        )
                    }
                })
            }
            </ul>
        </nav>
    )
}
