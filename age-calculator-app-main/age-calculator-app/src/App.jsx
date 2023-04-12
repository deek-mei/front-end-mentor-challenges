import { useState } from 'react'
import './App.css'


function App() {

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();



  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [age, setAge] = useState({
    year: "",
    month: "",
    day: ""
  })

  const reset = {
    year: "",
    month: "",
    day: ""
  }




  const handleChange = (name) => (e) => {
    const regex = /^[0-9\b]+$/;
    switch (name) {
      case 'day':
        if (e.target.value === "" || regex.test(e.target.value)) {
          setDay(e.target.value);
        }
        break;
      case 'month':
        if (e.target.value === "" || regex.test(e.target.value)) {
          setMonth(e.target.value);
        }
        break;
      case 'year':
        if (e.target.value === "" || regex.test(e.target.value)) {
          setYear(e.target.value);
        }
        break;
      default:
        break;
    }
  }

  function validateEntry() {
    console.log("ran")

    let dayInt = parseInt(day, 10);
    let thirtyOneDaysMonths = [1, 3, 5, 7, 8, 10, 12];
    let monthInt = parseInt(month, 10);
    let yearInt = parseInt(year, 10);

    if ((day === "") ||
      (dayInt > 31) && (thirtyOneDaysMonths.includes(monthInt)) ||
      (dayInt > 30) && (thirtyOneDaysMonths.includes(monthInt) === false) ||
      (dayInt > 28 && monthInt === 2) ||
      dayInt === 0
    ) { setDayError(true); setAge(reset) } else { setDayError(false) }

    if (month === "" || monthInt > 12 || monthInt === 0) { setMonthError(true); setAge(reset) } else { setMonthError(false) }
    if (year === "" || yearInt > 2023 || yearInt < 0) { setYearError(true); setAge(reset) } else { setYearError(false) }

    const calcDay = (parseInt(currentDay, 10) - parseInt(day, 10))
    const calcMonth = (parseInt(currentMonth, 10) - parseInt(month, 10));
    if ((calcDay < 0 || calcMonth < 0) && parseInt(year, 10) === 2023) {
      setDayError(true);
      setMonthError(true);
      setYearError(true);
    }
  }

  function calculateAge() {
    const calcDay = (parseInt(currentDay, 10) - parseInt(day, 10))
    const calcMonth = (parseInt(currentMonth, 10) - parseInt(month, 10));
    const calcYear = calcDay < 0 || calcMonth < 0 ? (parseInt(currentYear, 10) - parseInt(year, 10)) - 1 : (parseInt(currentYear, 10) - parseInt(year, 10))

    setAge({
      ...age,
      month: Math.abs(calcMonth),
      day: Math.abs(calcDay),
      year: Math.abs(calcYear)

    })
    console.log(age)
  }

  const handleButtonClick = () => {
    validateEntry();
    if (!dayError && !yearError && !monthError) {
      calculateAge();
    }
  }


  return (
    <>

      <div className='inputBar'>
        <div className='day-div' style={{ color: dayError ? 'hsl(0, 100 %, 67 %)' : 'black' }}>
          <label style={{ color: dayError ? 'hsl(0, 100 %, 67 %)' : 'black' }} htmlFor='day-input'>DAY</label>
          <input
            className='input'
            id='day-input'
            type='text'
            placeholder='DD'
            maxlength="2"
            value={day}
            onChange={handleChange("day")} />
          {dayError && <p className="error">Must be a valid day</p>}
        </div>
        <label htmlFor='month-input'>MONTH</label>
        <input className='input' id='month-input' type='text' placeholder='MM' maxlength="2"
          value={month}
          onChange={handleChange("month")}
        ></input>
        {monthError && <p className="error">Must be a valid month</p>}

        <label htmlFor='year-input'>YEAR</label>
        <input className='input' id='year-input' type='text' placeholder='YYYY' maxlength="4"
          value={year}
          onChange={handleChange("year")}
        ></input>
        {yearError && <p className="error">Must be a valid year</p>}
        <div className='button-wrapper'>
          <button onClick={handleButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
              <g fill="none" stroke="#FFF" stroke-width="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div>
      </div>


      <div>
        <div className='age-group'>
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {age.year === "" && age.year !== 0 ? <p className='blank-age'>-- </p> : <p>{age.year}</p>}years</h1>
        </div >
        <div className='age-group'>
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {age.month === "" && age.month !== 0 ? <p className='blank-age'>-- </p> : <p>{age.month}</p>}months</h1>
        </div>
        <div className='age-group'>
          <h1 style={{ display: "flex", alignItems: "center" }}>
            {age.day === "" && age.day !== 0 ? <p className='blank-age'>-- </p> : <p>{age.day}</p>}days</h1>
        </div>
      </div >
    </>
  )
}

export default App
