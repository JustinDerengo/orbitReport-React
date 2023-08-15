import './styling.css'

const Table = ({ sat }) => {
  const tableData = sat.map ((data, id) => (
    <tr key={id}>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.launchDate}</td>
      {data.operational === true &&
        <td>Active</td>
      }
      {data.operational === false &&
        <td>Inactive</td>
      }
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tableData}
      </tbody>
    </table>
  );
};

export default Table;