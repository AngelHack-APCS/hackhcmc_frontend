import coinIcon from '../../assets/coin.png';

const Transaction = ({ trans }) => {
  // Determine the sign and color based on the transaction type
  const pointsDisplay = trans.type === 'plus' ? `+${trans.points}` : `-${trans.points}`;
  const textColor = trans.type === 'plus' ? 'text-green-500' : 'text-red-500';

  return (
    <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg mb-2 shadow-md w-full">
      <div className="flex items-center">
        <img src={trans.icon} alt="trans Icon" className="h-10 w-10 rounded-lg mr-4" />
        <div>
          <div className="text-sm text-gray-500">{trans.date}</div>
          <div className="text-lg font-semibold">{trans.name}</div>
        </div>
      </div>
      <div className="flex items-center">
        <span className={`text-lg font-semibold ${textColor}`}>{pointsDisplay}</span>
        <img src={coinIcon} alt="Coin Icon" className="h-6 w-6 ml-1" />
      </div>
    </div>
  );
}

export default Transaction;
