import './App.css'
import { useState, useEffect } from 'react';

// import { ConnectionState } from './app/components/ConnectionState';
import { ConnectionManager } from './app/components/ConnectionManager';
import { socket } from './config/services/socket.service'
import Event from './app/components/Event';

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  return (
    <>
      {isConnected ? (
        <>
          <ConnectionManager />
          <Event />
        </>
      ) : (
        <>
          <p>State: {'' + isConnected}</p>
          <ConnectionManager />
        </>
      )}
    </>
  )
}

export default App
