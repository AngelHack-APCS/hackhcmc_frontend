import coinIcon from '../../assets/coin.png';

const Transaction = ({ trans }) => {
  const pointsDisplay = trans.direction === 'plus' ? `+${trans.amount}` : `-${trans.amount}`;
  const textColor = trans.direction === 'plus' ? 'text-green-500' : 'text-red-500';

  return (
    <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg mb-2 shadow-md w-full">
      <div className="flex items-center">
        {trans.image_url ? <img src={trans.image_url} alt="Transaction Icon" className="h-10 w-10 rounded-lg mr-4" /> : null}
        <div>
          <div className="text-sm text-gray-500">{trans.date}</div>
          <div className="text-lg font-semibold">{trans.content}</div>
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
