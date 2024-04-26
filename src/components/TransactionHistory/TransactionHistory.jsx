import css from "./TransactionHistory.module.css";
import TransactionRow from "../TransactionRow/TransactionRow";
import items from "../../transactions.json";

const TransactionHistory = () => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.head}>
          <th className={css.data}>Type</th>
          <th className={css.data}>Amount</th>
          <th className={css.data}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.row} key={item.id}>
              <TransactionRow items={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
