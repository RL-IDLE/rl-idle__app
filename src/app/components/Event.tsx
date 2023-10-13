import { socket } from "../../config/services/socket.service";
import { useEffect } from "react";

const Event = () => {

    useEffect(() => {
        socket.on('connect', function () {

            socket.emit('events', { test: 'test' });
            socket.emit('identity', 0, (response: string) =>
                console.log('Identity:', response),
            );
        });
    }, []);


    return (
        <div>
        </div>
    );
};

export default Event;