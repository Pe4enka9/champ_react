import image from '../img/67c9e921661452cf8ad11cde7a8124c0.jpeg';

export default function Flight() {
    return (
        <main>
            <section className="gagarin-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 gagarin-img">
                            <img src={image} alt="Марс"/>
                        </div>
                        <div className="col-md-6 col sm-12">
                            <h1>Список космических рейсов</h1>
                            <div className="booking-flight">
                                <div className="number">212521</div>
                                <div className="arrival">Луна 1</div>
                                <div className="date">22.03.2025</div>
                                <div className="amount">10</div>
                                <a href="#" className="btn btn-primary">Записаться</a>
                            </div>
                            <div className="booking-flight">
                                <div className="number">212522</div>
                                <div className="arrival">Луна 2</div>
                                <div className="date">24.03.2025</div>
                                <div className="amount">6</div>
                                <a href="#" className="btn btn-primary">Записаться</a>
                            </div>
                            <a href="#" className="btn btn-primary">Добавить рейс</a>
                            <a href="#" className="btn btn-secondary">На главную</a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}