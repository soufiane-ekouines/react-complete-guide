import Expenses from "./components/Expense/Expenses";
import ExpensesFilter from "./components/Expense/ExpensesFilter";
import Newexpense from "./components/Newexpense/Newexpense";

function App() {
  const expens = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]
  const AddExpeseHandler = (exp) => {
    console.log(exp);
  }

  return (
    <div>
      <Newexpense onAddExpense={AddExpeseHandler} />
      <Expenses expens={expens} />
    </div>

  );
}

export default App;
