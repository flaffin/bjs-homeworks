class AlarmClock{
    constructor(){
        this.timerId = null;
        this.alarmCollection = [];

    }

    addClock(time, callback, id){
        let alarm = {};
        
            if (!!id){
              const alarmFind = this.alarmCollection.some(alarm => alarm.id === id);
               if (alarmFind){
                 console.error("Будильник с таким id уже существует");
               return;
               }  else {
               alarm.id = id;
               alarm.time = time;
               alarm.callback = callback;
        
               this.alarmCollection.push(alarm);
               }
            } else {
            throw new Error ('Не передан id');
           }
        
        return this.alarmCollection;
        }

    removeClock(id) {
      let ansver; 
      const alarmCollectionNew = this.alarmCollection.filter(alarm => alarm.id != id);
   
        if (alarmCollectionNew.length === this.alarmCollection.length){
            ansver = false;
        }
        else {
            ansver = true;
        }
      this.alarmCollection = alarmCollectionNew;
   
      return ansver;
    }

    getCurrentFormattedTime(){
        let Data = new Date();
        let hoursData = Data.getHours();
       
        if (hoursData < 10) {
            hoursData = '0' + hoursData;
        }
        let minuteData = Data.getMinutes();
        if (minuteData < 10) {
            minuteData = '0' + minuteData;
        }
        this.time = `${hoursData}:${minuteData}`
        return this.time;
    } 

    start(){

        let newTime = this.getCurrentFormattedTime();
        let alarmCollection = this.alarmCollection;

        function checkClock(){
              let clockCollection = alarmCollection.forEach((alarm) => {
                  if (alarm.time == newTime){
                      console.log(alarm.callback);
                }
            })
        }
        
        if (this.timerId === null){
           this.timerId = setInterval(checkClock,1000);
        }
             return this.timerId;
        }

    stop(){
       if (this.timerId != null){
        clearInterval(this.timerId);
        this.timerId = null;
        return this.timerId;
       }
    }
    printAlarms(){
         this.alarmCollection.forEach(alarm => console.log(`Будильник № ${alarm.id} заведен на ${alarm.time}`));
        }
    clearAlarms(){
    
        clearInterval(this.timerId);
        this.alarmCollection.splice(0, this.alarmCollection.length);
        return this.alarmCollection;
        } 
}

function testCase(){
 const clock = new AlarmClock();
 console.log('Текущее время:' + clock.getCurrentFormattedTime());

 clock.addClock(clock.getCurrentFormattedTime(), () => console.log ("Скоро спать"), 1);
 clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Пора чистить зубы"), 2);
 clock.addClock(clock.getCurrentFormattedTime(), () => console.log("Иди спать"), 3);


 console.log(clock.alarmCollection);

//  Добавляем звонок + 1 минута
 console.log('Добавим еще звонок + 1 минута:');
let oneData = new Date();
let hourOneData = oneData.getHours();
  if (hourOneData < 10) {
    hourOneData = '0' + hourOneData;
  }
let minuteOneData = oneData.getMinutes() + 1;
  if (minuteOneData < 10) {
    minuteOneData = '0' + minuteOneData;
  }
let onetime = `${hourOneData}:${minuteOneData}`
clock.addClock(onetime, () => console.log ("Скоро точно идти спать"), 4);
console.log(clock.alarmCollection);

// Удаление звонка + 1 минута по id

clock.removeClock(4);
console.log(clock.alarmCollection);

//  Добавляем звонок + 2 минуты
console.log('Добавим еще звонок + 2 минуты:');
let twoData = new Date();
let hourTwoData = twoData.getHours();
  if (hourOneData < 10) {
    hourOneData = '0' + hourOneData;
  }
let minuteTwoData = twoData.getMinutes() + 2;
  if (minuteOneData < 10) {
    minuteOneData = '0' + minuteOneData;
  }
let Twotime = `${hourTwoData}:${minuteTwoData}`

clock.addClock(Twotime, () => console.log ("Уже пора"), 5);
console.log(clock.alarmCollection);

// Запуск и остановка звонков
console.log("Запускаем звонки:");
clock.start();

console.log("Останавливаем звонки");
clock.stop();


// Проверка печати и удаления всех звонков
 clock.getCurrentFormattedTime();
 console.log("Печать звонков до удаления:")
 clock.printAlarms();

 clock.clearAlarms();
 console.log("Печать звонков после удаления:")
 clock.printAlarms();
}
testCase();

