import {useEffect} from "react";
import image from "../img/67c9e921661452cf8ad11cde7a8124c0.jpeg";
import {Link} from "react-router-dom";

export default function Search() {
    useEffect(() => {
        document.title = 'Поиск';
    }, []);

    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src={image || ''} alt="Марс"/>
                        </div>
                        <div className="col-md-6 col sm-12">
                            <h1>Поиск</h1>

                            <div className="row">
                                <div className="col-6">
                                    <form>
                                        <div className="mb-3">
                                            <input type="search" name="search" id="search" className="form-control" placeholder="Поиск"/>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Искать</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}