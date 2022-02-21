import './lastTransactions.css';
import LastTransactionsItem from '../LastTransactionsItem/LastTransactionsItem';
export default function LastTransactions() {
  return (
    <table className='transActionsTable'>
        <thead className='transActionsHeaderTable'>
            <tr className="tranactionsHeaderRow">
                <th className="transActionsHeaderCell">Customer</th>
                <th className="transActionsHeaderCell">Date</th>
                <th className="transActionsHeaderCell">Amount</th>
                <th className="transActionsHeaderCell">Status</th>
            </tr>
        </thead>
        <tbody className='transActionsBodyTable'>
            <LastTransactionsItem buttonType={'success'}/>
            <LastTransactionsItem buttonType={'failed'}/>
            <LastTransactionsItem buttonType={'pending'}/>
            <LastTransactionsItem buttonType={'success'}/>
        </tbody>
    </table>
  )
}
