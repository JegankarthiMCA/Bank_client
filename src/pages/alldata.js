// import { Container, Row } from "react-bootstrap";
// import { useContext } from "react";
// import UserContext from "../context";
// import "./pagestyle.css";

// export default function Alldata() {
//   let people = useContext(UserContext);
//   function renderTableHeader() {
//     let header = Object.keys(people.users[0]);
//     return header.map((value, index) => {
//       return <th>{value}</th>;
//     });
//   }
//   function renderTableData() {
//     return people.users.map((user, index) => {
//       const { name, email, password, balance } = user;
//       return (
//         <tr>
//           <td>{name}</td>
//           <td>{email}</td>
//           <td>{password}</td>
//           <td>₹{balance}</td>
//         </tr>
//       );
//     });
//   }
//   return (
//     <>
//       <Container>
//         <h1 className="text-center">All Transactions</h1>
//         <Row>
//           <br />
//           <table id="users" class="table mt-5">
//             <tr class="thead">{renderTableHeader()} </tr>
//             {renderTableData()}
//           </table>
//           <br />
//         </Row>
//       </Container>
//     </>
//   );
// }
import { Container, Row } from "react-bootstrap";
import { useContext } from "react";
import UserContext from "../context";
import "./pagestyle.css";

export default function Alldata() {
  let people = useContext(UserContext);

  function renderTableHeader() {
    let header = Object.keys(people.users[0]);
    return header.map((value, index) => {
      return <th key={index}>{value}</th>;
    });
  }

  function renderTableData() {
    return people.users.map((user, index) => {
      const { name, email, password, balance } = user;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>₹{balance}</td>
        </tr>
      );
    });
  }

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">All Transactions</h1>
      <Row>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>{renderTableHeader()}</tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
        </div>
      </Row>
    </Container>
  );
}
