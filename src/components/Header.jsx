import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="container">
                <section className="navigation">
                    <div className="row">
                        <div className="col-md-3 col-sm-12 logo-wrap">Deep Space</div>
                        <div className="col-md-9 col-sm-12">
                            <nav className="main-nav">
                                <ul>
                                    <li><NavLink to="/">Гагарин</NavLink></li>
                                    <li><NavLink to="/booking">Заказ на Луне</NavLink></li>
                                    <li><NavLink to="/missions">Миссии</NavLink></li>
                                    <li><NavLink to="/flight">Список космических рейсов</NavLink></li>
                                    <li><a className="" href="#">Поиск</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    )
}