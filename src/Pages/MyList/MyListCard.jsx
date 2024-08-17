import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyListCard = ({ myList, index, myLists, setMyLists }) => {
  const { countryName, cost, photoURL, description, _id } = myList;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myList/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your spot has been deleted.",
                icon: "success",
              });
            }
            const remaining = myLists.filter((myList) => myList._id !== _id);
            setMyLists(remaining);
          });
      }
    });
  };

  return (
    <>
      <tr className="hover">
        <th>{index + 1}</th>
        <td>
          <img src={photoURL} className="w-32" alt={countryName} />
        </td>
        <td>{countryName}</td>
        <td>{cost}</td>
        <td>{description}</td>
        <td>
          <Link to={`/update/${_id}`}>
            <button className="btn btn-success text-white">
              <FaPen />
            </button>
          </Link>
        </td>
        <td>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-error text-white"
          >
            <FaTrash />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyListCard;
