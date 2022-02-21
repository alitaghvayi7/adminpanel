import './transactionButton.css'

export default function TransactionButton({type}) {
  return (
    <button className={`transactionStatus ${type}`}>{type}</button>
  )
}
