import React from "react";
import Table from "react-bootstrap/Table";
import AddToPortfolioButton from "./buttons/AddToPortfolioButton";

const TableView = () => {
  return (
    <Table bordered hover className="w-75 text-center">
      <thead>
        <tr>
          <th>ticker</th>
          <th>price</th>
          <th>change</th>
          <th>change_percent</th>
          <th>dividend</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody style={{ cursor: "pointer" }}>
        <tr>
          <td>AAPL</td>
          <td>279.29$</td>
          <td>64.52$</td>
          <td>0.84%</td>
          <td>0.56</td>
          <td>
            <AddToPortfolioButton />
          </td>
        </tr>
        <tr>
          <td>AAPL</td>
          <td>279.29$</td>
          <td>64.52$</td>
          <td>0.84%</td>
          <td>0.56</td>
          <td>
            <AddToPortfolioButton />
          </td>
        </tr>
        <tr>
          <td>AAPL</td>
          <td>279.29$</td>
          <td>64.52$</td>
          <td>0.84%</td>
          <td>0.56</td>
          <td>
            <AddToPortfolioButton />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TableView;
