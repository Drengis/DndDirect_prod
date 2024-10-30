import React, { useEffect, useState } from 'react';

import './ArmorsPage.css'
import Header from '../../Components/Header/Header';

function Home() {
    const [lightArmors, setLightArmors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLightArmors = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/light-armors');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setLightArmors(data);
            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLightArmors();
    }, []);

    if (loading) {
        return <div className='Loading'>Загрузка...</div>;
    }

    return (
        <div>
            <Header />
            <h1 className='Title'>Доспехи</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Цена</th>
                            <th>Класс брони</th>
                            <th>Скрытность</th>
                            <th>Необходимая сила</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lightArmors.map((armor) => (
                            <tr key={armor.id}>
                                <td>{armor.name}</td>
                                <td>{armor.price}</td>
                                <td>{armor.armor_class}</td>
                                <td>{armor.stealth}</td>
                                <td>{armor.strength}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;