import css from "./TransactionRow.module.css";

const TransactionRow = ({ items: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.data}>{type}</td>
      <td className={css.data}>{amount}</td>
      <td className={css.data}>{currency}</td>
    </>
  );
};

export default TransactionRow;
