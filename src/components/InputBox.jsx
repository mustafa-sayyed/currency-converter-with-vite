import React from "react";

function InputBox({
  label,
  className = "",
  amount,
  onAmountChange,
  onCurrencyChange,
  selectCurrency,
  currencyOptions = [],
  inputDisabled = false,
}) {
  return (
    <div className={`rounded-xl text-base flex gap-10 bg-white text-black px-6 py-2 ${className}`}>
      <div className="w-1/2 flex felx-col items-end flex-wrap justify-start gap-4">
        <label htmlFor={label} className="">
          {label}
        </label>
        <input
          type="number"
          id={label}
          className="rounded-lg outline-none text-base"
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange && Number(onAmountChange(e.target.value))}
          disabled={inputDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-col items-end flex-wrap justify-start gap-4">
        <p>Currency Type</p>
        <select
          className="px-3 py-1 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
          <option value="USD">USD</option>
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
