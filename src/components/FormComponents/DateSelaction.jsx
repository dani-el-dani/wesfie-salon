
import { useEffect, useState } from "react"
import StepHeading from "./StepHeading"
import { ethiopianDateNow, 
    getMonthDays, 
    getProperDate, 
    isEqual, 
    isPast, 
    parseDate,
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

    const [currentMonth, setCurrentMonth] = useState(parseDate(bookingDetail.selectedDate).month)
    const [currentYear, setCurrentYear] = useState(parseDate(bookingDetail.selectedDate).year)
    const [loading, setLoading] = useState(false)
    const currentGCdate = ethiopianToGregorian({year:currentYear,month:currentMonth,day:1})
    const [timeSlots, setTimeSlots] = useState([])

    useEffect(() =>{
        function getTimeSlots(){
            setLoading(false)    
            getAvailableSlots(bookingDetail).then((res) => {
                setTimeSlots(res)
                setLoading(true)
            })
        }

        getTimeSlots()

    },[bookingDetail.selectedDate])

    
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
                    <h3>{`${GCMonths[currentGCdate.getMonth()]} ${currentGCdate.getFullYear()}`}</h3>
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
                                disabled={isPast(date,getNextDay(ethiopianDateNow())) || !loading}
                                checked={isEqual(date,parseDate(bookingDetail.selectedDate))}
                                onChange={(e) => handleChange(e)}
                            />
                            <label htmlFor={day}>
                                <div 
                                    className={`day-container ${date.month !== currentMonth ? 'not-current-month':''} ${isEqual(date, ethiopianDateNow())?'today':''} ${isPast(date,getNextDay(ethiopianDateNow())) || !loading?'day-disabled':'day-enabled'}`} 
                                    
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

            {loading ? timeSlots.length === 0 ? <h1 className='loading'>No available times please select another day</h1> : <div className='time-picker'>

                 { timeSlots.map( (slot) => {
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
                                    className={`day-container day-enabled`
                                    }                                     
                                >
                                    <h3>{slot.split(" ").slice(0,1)}</h3>
                                    <h4>{slot.split(" ").slice(1)}</h4>
                                </div>
                            </label>
                        
                        </div>
                    )})}
                
            </div>
            : <h1 className='loading'>Loading avilable time slots...</h1>}

            {error?.selectedTimeError && <h3 className='error-message'>{error.selectedTimeError}</h3>}
        </>
    )
}

export default DateSelection