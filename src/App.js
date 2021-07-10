import './app.css'

function App() {
  function countdown() {
    /*Data*/
    const christmas = 'December 25, 2021'
    const currentDate = new Date()
    const ChristmasDate = new Date(christmas)
    const diffCount = (ChristmasDate - currentDate) / 1000
  
    /*Time */
    const days = Math.floor(diffCount / 3600 / 24)
    const hours = Math.floor(diffCount / 3600 % 24)
    const minutes = Math.floor(diffCount / 60) % 60
    const seconds = Math.floor(diffCount) % 60

    function formatTime(time) {
      return time < 10 ? (`0${time}`) : time
    }

    /*Elements*/
    const dayEl = document.getElementById('days')
    const hoursEl = document.getElementById('hours')
    const minutesEl = document.getElementById('minutes')
    const secondsEl = document.getElementById('seconds')
  
    dayEl.innerHTML = formatTime(days)
    hoursEl.innerHTML = formatTime(hours)
    minutesEl.innerHTML = formatTime(minutes)
    secondsEl.innerHTML = formatTime(seconds)
  }
  
  setInterval(countdown, 1000)

  return (
    <main onLoad={countdown}>
      <h1>O Contador Personalizado</h1>
      <section className='container'> 
        <div>
          <p id='days'>0</p>
          <span>Dias</span>
        </div>
        <div>
          <p id='hours'>0</p>
          <span>Horas</span>
        </div>
        <div>
          <p id='minutes'>0</p>
          <span>Minutos</span>
        </div>
        <div>
          <p id='seconds'>0</p>
          <span>Segundos</span>
        </div>
      </section>  
    </main>
  );
}

export default App;
