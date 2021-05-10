import { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { StudentsContext } from "../contexts/StudentsContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";
import { WaveSpinner } from "react-spinners-kit";

function Students() {
  const { loading, students, getStudents } = useContext(StudentsContext);

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {loading && <WaveSpinner size={40} color="#686769" />}
      {students.length > 0 ? (
        <Table className="table-hover table-striped">
          <thead>
            <tr>
              <th>NAME</th>
              <th>YEAR</th>
              <th>INDEX NUMBER</th>
              <th>DESTINATION</th>
              <th>REASON</th>
              <th>DEPARTURE DATE</th>
              <th>RETURN DATE</th>
              <th>STATUS</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.year}</td>
                <td>{student.indexNo}</td>
                <td>{student.destination}</td>
                <td>{student.reason}</td>
                <td>{student.departureDate}</td>
                <td>{student.returnDate}</td>
                <td>{student.status}</td>

                <td>
                  <FiDelete />
                  <FiEdit />
                  <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
}

export default Students;
