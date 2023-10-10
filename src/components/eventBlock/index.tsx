import './style.scss';
import {RbEvent} from "../../types";

interface eventProps {
    event: RbEvent
}

const locale = 'ru-RU';

const EventBlock = (eventProps: eventProps) => {
    const {event} = eventProps;
    const inputDate = new Date(event.date);

    return (
        <>
            {!isNaN(inputDate.getTime()) && (
                <div className="event-block">
                    <div className="event-block-number">{`№${event.number}`}</div>
                    <div className="event-block-month">
                        {inputDate.toLocaleDateString(locale, {month: 'long'})}
                    </div>
                    <div className="event-block-day">
                        {inputDate.getDate()}
                    </div>
                    <div className="event-block-dayWeek">
                        {inputDate.toLocaleDateString(locale, { weekday: 'long' })}
                    </div>
                    <div className="event-block-location">{event.place}</div>
                    <div className="event-block-time">
                        {inputDate.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })}
                    </div>
                    <a href={event.url} className="event-block-btn">Зарегистрироваться</a>
                </div>
            )}
        </>
    )
}

export default EventBlock;