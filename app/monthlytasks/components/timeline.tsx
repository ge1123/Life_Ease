import '@/monthlytasks/styles/timeLine.css';

type TimelineProps = {
    events: Todo[];
};

const Timeline: React.FC<TimelineProps> = ({ events }) => {
    return (
        <>
            {events.map((event, index) => (
                <div key={index}>
                    <div >{event.date}</div>
                    <div >
                        <div >{event.description}</div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Timeline;
