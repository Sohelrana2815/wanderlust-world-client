import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myLists, setMyLists] = useState([]);

  console.log(user?.email);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyLists(data);
      });
  }, [user]);

  return (
    <div>
      {myLists.map((myList) => (
        <div key={myList._id}>
          <p className="font-bold text-blue-700">{myList.email}</p>
          <p>{myList.cost}</p>
          <p>{myList.countryName}</p>
          <img src={myList.photoURL} alt={myList.countryName} />
        </div>
      ))}
    </div>
  );
};

export default MyList;
