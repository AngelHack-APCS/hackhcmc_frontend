import coinIcon from '../../assets/coin.png';


const ChildrenTask = ({task}) => {
    return (
    <div className="flex justify-between items-center bg-blue-50 p-4 rounded-lg mb-2 shadow-md w-full">
        <div className="flex items-center">
          <img src={task.icon} alt="Task Icon" className="h-10 w-10 rounded-lg mr-4" />
          <div>
            <div className="text-sm text-gray-500">{task.date}</div>
            <div className="text-lg font-semibold">{task.name}</div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-lg font-semibold">{task.points}</span>
          <img src={coinIcon} alt="Coin Icon" className="h-6 w-6 ml-1" />
        </div>
    </div>
    )
}

export default ChildrenTask;