function processTime(timestamp){
    const diff = Date.now() - timestamp;
    const periods = {
        month: 30 * 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000
      };

      if (diff > periods.month) {
        // it was at least a month ago
        return Math.floor(diff / periods.month) + " Months Ago";
      } else if (diff > periods.week) {
        return Math.floor(diff / periods.week) + " Weeks Ago";
      } else if (diff > periods.day) {
        return Math.floor(diff / periods.day) + " Days Ago";
      } else if (diff > periods.hour) {
        return Math.floor(diff / periods.hour) + " Hours Ago";
      } else if (diff > periods.minute) {
        return Math.floor(diff / periods.minute) + " Minutes Ago";
      }
      return "Just now";
    
      
}


const BestTimes = (props) => {
    return (
        <div className="p-4 border-2 rounded-lg shadow-inner border-zinc-500 w-[165px]">
            <h1 className="text-left">{props.time}</h1>
            <div>
                <span className="text-6xl">{Math.round(props.wpm)}</span>
                <span>wpm</span>
            </div>
            <div>
                <span>Acc: {props.acc}</span>
                <span>%</span>
            </div>
            <div>
                <span className="text-xs text-zinc-500">{processTime(props.timestamp)}</span>
            </div>
        </div>
    );
}


export default BestTimes;