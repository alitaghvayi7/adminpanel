import "./lastTransactionsItem.css";
import TransactionButton from "../TransactionButton/TransactionButton";
export default function LastTransactionsItem({buttonType}) {
  return (
    <tr className="transActionsBodyRow">
      <td className="transActionsBodyCell">
        <img
          className="transactionPersonProfile"
          src="assets/profile.jpeg"
          alt=""
        />
        <span className="tranactionPersonName">Susan Carol</span>
      </td>
      <td className="transActionsBodyCell">
        <span className="transactionDate"> 2 jun 2021</span>
      </td>
      <td className="transActionsBodyCell">
        <span className="transactionPrice">$150.05</span>
      </td>
      <td className="transActionsBodyCell">
        <TransactionButton type={buttonType}/>
      </td>
    </tr>
  );
}
