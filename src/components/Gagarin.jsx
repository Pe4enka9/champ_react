import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Gagarin() {
    useEffect(() => {
        document.title = 'Гагарин';
    }, []);

    const [gagarin, setGagarin] = useState(null);

    useEffect(() => {
        fetch('https://ethelle.ru')
            .then(res => res.json())
            .then(res => setGagarin(res))
            .catch(err => console.error('Ошибка', err));
    }, []);

    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src="https://interesnyefakty.org/wp-content/uploads/Foto-YUriya-Gagarina-8.jpg"
                                 alt="Гагарин"/>
                        </div>
                        {!gagarin ? (
                            <div className="col-md-6 col sm-12">
                                <p>Загрузка...</p>
                            </div>
                        ) : (
                            gagarin.data.map(item => (
                                <div className="col-md-6 col sm-12" key={item.cosmonaut.name}>
                                    <h1>{item.cosmonaut.name}</h1>
                                    <p className="birthday">{item.cosmonaut.birthdate}</p>
                                    <p className="rank">{item.cosmonaut.rank}</p>
                                    <div className="bio">
                                        <p>{item.cosmonaut.bio.early_life}</p>
                                        <p>{item.cosmonaut.bio.career}</p>
                                        <p>{item.cosmonaut.bio.post_flight}</p>
                                    </div>
                                    <Link to="/missions" className="btn btn-primary">К списку миссий</Link>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}