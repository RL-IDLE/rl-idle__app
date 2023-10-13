import Decimal from "break_infinity.js";
import { socket } from "../../config/services/socket.service";
import { useEffect, useState } from "react";

const Event = () => {
    const [money, setMoney] = useState<Decimal>(new Decimal(2));

    useEffect(() => {
        //get the response from the socket
        socket.on('connect', function () {
            socket.emit('events', { test: 'test' });
            socket.emit('identity', 0, (response: string) =>
                console.log('Identity:', response),
            );
        });
    }, []);

    const addMoney = () => {
        setMoney(money.times(money))
    }

    return (
        <div>
            <h1>Event</h1>
            <img src="./vite.svg" alt="test" onClick={addMoney} />
            <p>{money.toString()}</p>
        </div>
    );
};

export default Event;