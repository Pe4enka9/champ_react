import {useEffect, useState} from "react";
import image from '../img/53f7b6fb9842421c3ae8d5a2e2390226.jpeg';
import {Link} from "react-router-dom";

export default function AddFlight() {
    useEffect(() => {
        document.title = 'Добавить рейс';
    }, []);

    const [formData, setFormData] = useState({
        flight_number: '',
        destination: '',
        launch_date: '',
        seats_available: '',
    });

    const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setData((prevData) => {
            return [...prevData, formData];
        });

        setFormData({flight_number: '', destination: '', launch_date: '', seats_available: ''});
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
                            <h1>Добавить рейс</h1>
                            <form method="post" className="space-form" onSubmit={handleSubmit}>
                                <input type="text" required placeholder="Номер рейса" name="flight_number"
                                       className="form-control" value={formData.flight_number}
                                       onChange={handleInputChange}/>
                                <input type="text" required placeholder="Место прибытия" name="destination"
                                       className="form-control" value={formData.destination}
                                       onChange={handleInputChange}/>
                                <input type="date" required placeholder="Дата" name="launch_date"
                                       className="form-control" value={formData.launch_date}
                                       onChange={handleInputChange}/>
                                <input type="text" required placeholder="Доступных мест" name="seats_available"
                                       className="form-control" value={formData.seats_available}
                                       onChange={handleInputChange}/>
                                <input type="submit" value="Сохранить" className="btn btn-primary"/>
                                <Link to="/flight" className="btn btn-secondary">К списку рейсов</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}