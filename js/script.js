`<div class="timer">
      <div class="innerContainer">
        <h4>Timer ${i+1}</h4>
        <div class="timer-display">
          <span id="timer-${i+1}"></span>
        </div>
      </div>
      <div class="timer-controls">
        <button class="timerButton" onclick="startButton(${i})" id="start-${i+1}">Start</button>
        <button class="timerButton" onclick="pauseButton(${i})" id="pause-${i+1}">Pause</button>
        <button class="timerButton" onclick="stopButton(${i})" id="reset-${i+1}">Reset</button>
      </div>
    </div>`
    var time_list = [
        {id: "timer-1", time: 10, status:"stop", original: 10},
      ];
       
      function loadSite (){  
        let text = "";
        for (var i = 0; i < time_list.length; i++){
          text += `
          <div class="timer">
            <div class="innerContainer">
              <h4>Timer ${i+1}</h4>
              <div class="timer-display">
                <span id="timer-${i+1}"></span>
              </div>
            </div>
            <div class="timer-controls">
              <button class="timerButton" onclick="startButton(${i})" id="start-${i+1}">Start</button>
              <button class="timerButton" onclick="pauseButton(${i})" id="pause-${i+1}">Pause</button>
              <button class="timerButton" onclick="stopButton(${i})" id="reset-${i+1}">Reset</button>
            </div>
          </div>
          `
        }
        document.getElementById('timerContainer').innerHTML = text;
      }
      function startButton(i){
        time_list[i].status = "running";
      }
       
      function pauseButton(i){
        time_list[i].status = "stop";
      }
       
      function stopButton(i){
        time_list[i].status = "stop";
        time_list[i].time = time_list[i].original;
      }
       
      function newTimer(time){
        time_list.push({id: "timer-" + (time_list.length + 1), time: time, status:"stop", original:time});
        loadSite();
      }