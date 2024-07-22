import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const context = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {context.transactions.map((transaction) => (
          <li key={transaction.id} className="minus">
            {transaction.text} <span>-$400</span>
            <button className="delete-btn">X</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
