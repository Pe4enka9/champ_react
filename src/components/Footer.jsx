import {NavLink} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <nav className="main-nav footer-nav">
                    <ul>
                        <li><NavLink to="/">Гагарин</NavLink></li>
                        <li><NavLink to="/booking">Заказ на Луне</NavLink></li>
                        <li><NavLink to="/missions">Миссии</NavLink></li>
                        <li><NavLink to="/flight">Список космических рейсов</NavLink></li>
                        <li><a href="#">Поиск</a></li>
                    </ul>
                </nav>
                <p>© All Rights Reserved. Best Design Co.<br/>
                    hello@mysite.com</p>
            </div>
        </footer>
    )
}