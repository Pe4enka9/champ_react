import {useEffect, useState} from "react";
import image from "../img/67c9e921661452cf8ad11cde7a8124c0.jpeg";

export default function Search() {
    useEffect(() => {
        document.title = 'Поиск';
    }, []);

    const [search, setSearch] = useState('');
    const [missions, setMissions] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('https://ethelle.ru/1.php')
            .then(res => res.json())
            .then(res => setMissions(res.map(m => m.mission)))
            .catch(err => console.error('Ошибка', err));
    }, []);

    useEffect(() => {
        if (!missions.length) return;

        const filtered = missions.filter(({name, spacecraft}) => {
            const query = search.toLowerCase();

            return (
                name.toLowerCase().includes(query) ||
                spacecraft.crew.some(crewMember => crewMember.name.toLowerCase().includes(query))
            )
        })

        setSearchResult(filtered);
    }, [search, missions]);

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
                                            <input type="search" name="search" id="search" className="form-control"
                                                   placeholder="Поиск" value={search}
                                                   onChange={(e) => setSearch(e.target.value)}/>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <ul>
                                {!searchResult.length ? (
                                    <p>Нет результатов</p>
                                ) : (
                                    searchResult.map((mission, index) => (
                                        <li key={index}>
                                            <strong>{mission.name}</strong><br/>
                                            Экипаж: {mission.spacecraft.crew.map(c => c.name).join(', ')}
                                        </li>
                                    ))
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}