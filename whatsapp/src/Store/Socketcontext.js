import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
const socketContext = createContext();

export const useSocketCOntext = () => {
  const socketcontexts = useContext(socketContext);
  return socketcontexts;
};
function SocketContext({ children }) {
  const [sockett, nosocket] = useState(null);
  const [onLineusers, Noonlineusers] = useState([]);
  const Logindata = useSelector((state) => state.one);
  console.log("Logindata", Logindata);

  useEffect(() => {
    if (Logindata.AccessToken) {
      console.log("Logindata", Logindata);
      const socket = io("http://localhost:3001", {
        query: { userid: Logindata?.Logindata?.one?._id },
      });
      nosocket(socket);
      socket.on("Onlineusers", (users) => {
        console.log("users", users);
        Noonlineusers(users);
      });

      return () => {
        console.log("RAKSHITH");
        socket.close();
        nosocket(null);
      };
    } else {
      if (sockett) {
        console.log("RAKSHITH poojary");
        sockett.close();
        nosocket(null);
      }
    }
  }, [Logindata.AccessToken]);

  return (
    <socketContext.Provider value={{ sockett, onLineusers }}>
      {children}
    </socketContext.Provider>
  );
}
export default SocketContext;

// useEffect(() => {
//   if (Object.keys(Logindata).length !== 0) {
//     const socket = io("http://localhost:3001");
//     nosocket(socket);
//     socket.on("Firsttest", (data) => {
//       console.log(data);
//     });
//   }
//   return () => {
//     console.log("RAKSHITH");
//     sockett.close();
//     nosocket(null);
//   };
//   // } else {
//   //   if (sockett) {
//   //     console.log("RAKSHITH");
//   //     sockett.close();
//   //     nosocket(null);
//   //   }
//   // }
// }, [Logindata]);
