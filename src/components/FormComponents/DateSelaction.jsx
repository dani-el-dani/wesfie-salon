
import { useState } from "react"
import StepHeading from "./StepHeading"
import { ethiopianDateNow, 
    getMonthDays, 
    getProperDate, 
    isEqual, 
    isPast, 
    ETMonths, 
    ETWeekDays, 
    toDateString, 
    getNextDay,
    GCWeekDays,
    GCMonths,
    ethiopianToGregorian
 } from "../../utils/dateUtils"

 import { getAvailableSlots } from "../../utils/timeUtils"

function DateSelection({bookingDetail, handleChange, error}){

    const [currentMonth, setCurrentMonth] = useState(bookingDetail.selectedDate.month)
    const [currentYear, setCurrentYear] = useState(bookingDetail.selectedDate.year)
    const curentGCdate = ethiopianToGregorian({year:currentYear,month:currentMonth,day:1})
    const timeSlots = getAvailableSlots(bookingDetail)
    
    function handlePrevMonth(){
    let prevCurrentMonth = currentMonth - 1
    if(prevCurrentMonth < 0){
      setCurrentYear(prevYear => prevYear - 1)
      setCurrentMonth(12)
    }
    else{
      setCurrentMonth(prevCurrentMonth)
    }
  }

  function handleNextMonth(){
    let prevCurrentMonth = currentMonth + 1
    if(prevCurrentMonth > 12){
      setCurrentYear(prevYear => prevYear + 1)
      setCurrentMonth(0)
    }
    else{
      setCurrentMonth(prevCurrentMonth)
    }
  }

    return(
        <>
            <StepHeading title='Select a Date' description='Choose your preferred date for the appointment'/>
            <div className='date-picker-heading'>
                <button type="button" onClick={handlePrevMonth}>&lt;</button>
                <div>
                    <h2>{`${ETMonths[currentMonth]} ${currentYear}`}</h2>
                    <h3>{`${GCMonths[curentGCdate.getMonth()]} ${curentGCdate.getFullYear()}`}</h3>
                </div>
                <button type="button" onClick={handleNextMonth}>&gt;</button>
            </div>
            <div className='date-picker-calendar'>
                {ETWeekDays.map((day , index) => (
                            <div key={day}>
                                <h3>{day}</h3>
                                <h4>{GCWeekDays[index]}</h4>
                            </div>
                        )
                    )}
                {getMonthDays(currentYear, currentMonth).map(day =>{
                    const date = getProperDate({year:currentYear, month:currentMonth, day:day})
                    const gcDate = ethiopianToGregorian(date)
                    return(
                        <div key={day}>
                            <input 
                                type="radio"
                                name='selectedDate'
                                value={toDateString(date)}
                                id={day}
                                className='date-radio-btn'
                                disabled={isPast(date,getNextDay(ethiopianDateNow()))}
                                checked={isEqual(date,bookingDetail.selectedDate)}
                                onChange={(e) => handleChange(e)}
                            />
                            <label htmlFor={day}>
                                <div 
                                    className={`day-container 
                                        ${date.month !== currentMonth
                                            ?'not-current-month'
                                            :undefined} 
                                        ${isEqual(date, ethiopianDateNow())
                                            ?'today'
                                            :undefined
                                        }
                                        `
                                    } 
                                    
                                >
                                    <h3>{date.day}</h3>
                                    <h4>{gcDate.getDate()}</h4>
                                </div>
                            </label>
                        </div>
                        
                    )
                })}
            </div>
            
            <StepHeading title='Select a Time' description='Choose an available time slot for your appointment'/>

            <div className='date-picker-calendar'>

                {timeSlots.map( (slot) => {
                    return (
                    
                    <div key={toDateString(bookingDetail.selectedDate) + slot}>
                        <input 
                            type="radio"
                            name='selectedTime'
                            value={slot}
                            id={slot}
                            className='date-radio-btn'
                            checked={bookingDetail.selectedTime === slot}
                            onChange={(e) => {handleChange(e)}}
                        />
                        <label htmlFor={slot}>
                            <div 
                                key={slot}
                                className={`day-container`
                                }                                     
                            >
                                <h3>{slot.split(" ").slice(0,1)}</h3>
                                <h4>{slot.split(" ").slice(1)}</h4>
                            </div>
                        </label>
                    
                    </div>
                )}

                )}
            </div>

            {error?.selectedTimeError && <h3 className='error-message'>{error.selectedTimeError}</h3>}
        </>
    )
}

export default DateSelection