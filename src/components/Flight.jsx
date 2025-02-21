import image from '../img/67c9e921661452cf8ad11cde7a8124c0.jpeg';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Flight() {
    useEffect(() => {
        document.title = 'Список космических рейсов';
    }, []);

    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);

    const handleRecord = (e) => {
        const index = Number(e.target.id);

        setData((prevData) => {
            return prevData.map((item, idx) => idx === index ? {
                ...item,
                seats_available: item.seats_available - 1
            } : item);
        });
    };

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data]);

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
                            {!data ? (
                                <p>Загрузка...</p>
                            ) : (
                                data.map((item, index) => (
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
                            <Link to="/add-flight" className="btn btn-primary me-3">Добавить рейс</Link>
                            <Link to="/" className="btn btn-secondary">На главную</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}