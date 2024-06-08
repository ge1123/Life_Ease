import '@/styles/downlist.style.scss'

const MONTHLY = [
    "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"
]


const Downlist: React.FC = () => {
    return (
        <div className="monthlyDownlist__container">
            <select className="monthlyDownlist__body">
                {MONTHLY.map((month, index) => (
                    <option key={index} value={index + 1} className="monthlyDownlist____option">{month}</option>
                ))}
            </select>
        </div>
    );
};

export default Downlist;