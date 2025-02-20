import {useEffect, useState} from "react";
import image from '../img/c89cfefaba0247d8a21e071e318b57d2.jpeg';

export default function Missions() {
    useEffect(() => {
        document.title = 'Миссии';
    }, []);

    const [missions, setMissions] = useState(null);

    useEffect(() => {
        fetch('https://ethelle.ru/1.php')
            .then(res => res.json())
            .then(res => setMissions(res.map(m => m.mission)))
            .catch(err => console.error('Ошибка', err));
    }, []);

    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src={image} alt="Ракета"/>
                        </div>
                        <div className="col-md-6 col sm-12">
                            <h1>Миссии</h1>
                            {!missions ? (
                                <p>Загрузка...</p>
                            ) : (
                                missions.map(mission => (
                                    <div className="flight" key={mission.name}>
                                        <h2>{mission.name}</h2>
                                        <h3>{mission.launch_details.launch_site.name}</h3>
                                        <p>Дата запуска: <span
                                            className="birthday">{mission.launch_details.launch_date}</span></p>
                                        <h3>Миссия:</h3>
                                        <div>
                                            <p className="pilot">{mission.landing_details.landing_site.name}</p>
                                            <p className="small">{mission.landing_details.landing_date}</p>
                                        </div>
                                        <h4>Командный модуль</h4>
                                        <p>{mission.spacecraft.command_module}</p>
                                        <h4>Лунный модуль</h4>
                                        <p>{mission.spacecraft.lunar_module}</p>
                                        <h3>Члены экипажа:</h3>
                                        {mission.spacecraft.crew.map(member => (
                                            <div key={member.name}>
                                                <p className="pilot">{member.name}</p>
                                                <p className="small">{member.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}