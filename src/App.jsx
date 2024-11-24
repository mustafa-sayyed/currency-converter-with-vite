import InputBox from "./components/InputBox";
import image from "./assets/exchange.jpg";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState, useId, useCallback } from "react";
function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(0);
  const [exchangeAmount, setExchangeAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const id = useId();

  const swap = () => {
    setFrom(to);
    setTo(from);
  };
  const convert = () => {
    setExchangeAmount(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="bg-[#0b2a7d] bg-opacity-60 p-8 border-[3px] border-[#244baf] rounded-xl text-base text-white "
      style={{ backgroundImage: `url(${image})` }}>
        <h1 className="text-center text-4xl mb-8">Currency Converter</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label={"From"}
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            inputDisabled={false}
          />
          <div className="relative w-full h-1 ">
            <button
              type="button"
              className="px-3 py-[6px] bg-blue-700 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-[64%] border-[1px] border-white outline-none"
              onClick={swap}
              accessKey="s"
            >
              Swap
            </button>
          </div>

          <InputBox
            className="-mt-5"
            label={"To"}
            amount={exchangeAmount}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(currency) => setTo(currency)}
            inputDisabled
            onAmountChange={(exchangeAmount) => setExchangeAmount(exchangeAmount)}
          />
          <button
            className="w-full py-3 bg-white rounded-xl text-lg font-semibold text-blue-800 outline-none"
            accessKey="C"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
