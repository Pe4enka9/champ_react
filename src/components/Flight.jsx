import image from '../img/67c9e921661452cf8ad11cde7a8124c0.jpeg';
import {data as json} from '../data';
import {useEffect, useState} from "react";

export default function Flight() {
    useEffect(() => {
        document.title = 'Список космических рейсов';
    }, []);

    const [list, setList] = useState(json.data);

    const handleRecord = (e) => {
        const index = Number(e.target.id);

        setList((prevList) => {
            return prevList.map((item, idx) => idx === index ? {
                ...item,
                seats_available: item.seats_available - 1
            } : item);
        });
    };

    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src={image || ''} alt="Марс"/>
                        </div>
                        <div className="col-md-6 col sm-12">
                            <h1>Список космических рейсов</h1>
                            {!list ? (
                                <p>Загрузка...</p>
                            ) : (
                                list.map((item, index) => (
                                    <div className="booking-flight" key={index}>
                                        <div className="number">{item.flight_number}</div>
                                        <div className="arrival">{item.destination}</div>
                                        <div className="date">{item.launch_date}</div>
                                        <div className="amount">{item.seats_available}</div>
                                        <button type="button" className="btn btn-primary" id={index}
                                                onClick={handleRecord} disabled={item.seats_available <= 0}>Записаться
                                        </button>
                                    </div>
                                ))
                            )}
                            <a href="#" className="btn btn-primary">Добавить рейс</a>
                            <a href="#" className="btn btn-secondary">На главную</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}