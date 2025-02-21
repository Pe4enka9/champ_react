const data = {
    "data": [
        {
            "flight_number": "СФ-103",
            "destination": "Марс",
            "launch_date": "2025-05-15",
            "seats_available": 2
        },
        {
            "flight_number": "СФ-105",
            "destination": "Юпитер",
            "launch_date": "2024-06-01",
            "seats_available": 3
        }
    ]
};

if (!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify(data.data));
}
