import React, { useContext } from "react";
import { TransactionContext } from "./../Context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import useFetch from "../Hooks/useFetch";

const TransactionCard = ({
  addressTo,
  addressFrom,
  timestamp,
  message,
  url,
  keyword,
  amount,
}) => {
  const gifUrl = useFetch({ keyword });
  return (
    <div
      className="bg-[#181918] m-4 flex flex-1 
  2xl:min-w-[450px]
  2xl:max-w-[500px]
  sm:min-w-[270px]
  sm:max-w-[300px]
  flex-col p-3 rounded-md hover:shadow-2xl
"
    >
      <div className="flex flex-col items-center w-full">
        <div className=" w-full mb-6 p-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addressFrom}`}
            target="_blank"
            res="noopener noreferrer"
          >
            <p className="text-white text-base justify-between items-center">
              <span className="text-gray-400">From:</span>{" "}
              {shortenAddress(addressFrom)}
            </p>
          </a>
          <a
            href={`https://ropsten.etherscan.io/address/${addressTo}`}
            target="_blank"
            res="noopener noreferrer"
          >
            <p className="text-white text-base">
              <span className="text-gray-400">To:</span>{" "}
              {shortenAddress(addressTo)}
            </p>
          </a>
          <p className="text-white text-base">
            <span className="text-gray-400">Amount:</span> {amount} ETH
          </p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">{message}</p>
            </>
          )}
        </div>
        <img
          src={gifUrl || url}
          alt={keyword}
          className="w-full h-64  2x:h-96 rounded-md shadow-lg object-cover "
        />

        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  return (
    <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
      <div className="flex flex-col md:p-12  py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest transactions
          </h3>
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see latest transactions
          </h3>
        )}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions &&
            transactions
              .reverse()
              .map((transaction, index) => (
                <TransactionCard key={index} {...transaction} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
