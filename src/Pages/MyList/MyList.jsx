import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyListCard from "./MyListCard";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [myLists, setMyLists] = useState([]);

  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:5000/myList/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyLists(data);
      });
  }, [user]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>NO.</th>
            <th>Spot photo</th>
            <th>Country name</th>
            <th>Avg. cost</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myLists.map((myList, index) => (
            <MyListCard
              key={myList._id}
              myList={myList}
              index={index}
              myLists={myLists}
              setMyLists={setMyLists}
            ></MyListCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
