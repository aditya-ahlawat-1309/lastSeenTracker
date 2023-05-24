import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [isOnline, setIsOnline] = useState(null);
  const [lastSeen, setLastSeen] = useState(null);

  const [phoneNo, setPhoneNo] = useState(9988599739);

//   const handleChange = (event) => {
//     setPhoneNo(event.target.value);
//   };

  useEffect(() => {
    axios
      .get(`https://api.whatsapp.com/v1/status/${phoneNo}`)
      .then((response) => {
        setIsOnline(response.data.status.online);
        setLastSeen(response.data.status.last_seen);
      });
  }, [phoneNo]);

  return (
    <div>
      <h1>WhatsApp Status</h1>
      <p>Phone Number: {phoneNo}</p>
      <p>Is online: {isOnline ? "Yes" : "No"}</p>
      <p>Last seen: {lastSeen}</p>
    </div>
  );
};

export default App;
