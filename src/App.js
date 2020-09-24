import React, { Component } from "react";
import "./App.css";
import PomodoroTimer from "./components/pomodoroTimer";
import PomodoroSettings from "./components/pomodoroSettings";
import PomodoroControls from "./components/pomodoroControls";
import PomodoroTasksForm from "./components/pomodoroTasksForm";
import PomodoroTasksList from "./components/pomodoroTasksList";

class App extends Component {
  state = {
    currentTime: 0,
    workTime: 0,
    shortRestTime: 0,
    longRestTime: 0,
    itsWorking: true,
    itsPomodoro: false,
    itsShortRest: false,
    itsLongRest: false,
    timerVisible: true,
    tasks: {},
    displayText: "",
  };

  interval = null;

  componentDidMount = () => {};

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState({ currentTime: this.state.currentTime + 1 });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
  };

  resetTimer = () => {
    this.stopTimer();
    this.setState({ currentTime: 0 });
  };

  changeTimer = (selection) => {
    if (selection === "working")
      this.setState({
        itsWorking: true,
        itsPomodoro: false,
        itsShortRest: false,
        itsLongRest: false,
        timerVisible: true,
      });
    if (selection === "pomodoro")
      this.setState({
        itsWorking: false,
        itsPomodoro: true,
        itsShortRest: false,
        itsLongRest: false,
        timerVisible: false,
        displayText: "Set pomodoro duration",
      });
    if (selection === "short")
      this.setState({
        itsWorking: false,
        itsPomodoro: false,
        itsShortRest: true,
        itsLongRest: false,
        timerVisible: false,
        displayText: "Set short rest duration",
      });
    if (selection === "long")
      this.setState({
        itsWorking: false,
        itsPomodoro: false,
        itsShortRest: false,
        itsLongRest: true,
        timerVisible: false,
        displayText: "Set long rest duration",
      });
  };

  setTimerValue = (e) => {
    const { itsPomodoro, itsShortRest, itsLongRest } = this.state;
    if (itsPomodoro) this.setState({ workTime: e.target.value });
    if (itsShortRest) this.setState({ shortRestTime: e.target.value });
    if (itsLongRest) this.setState({ longRestTime: e.target.value });
  };

  compareTimers = () => {};

  render() {
    const {
      workTime,
      shortRestTime,
      longRestTime,
      currentTime,
      displayText,
      itsPomodoro,
      itsShortRest,
      itsLongRest,
      timerVisible,
    } = this.state;

    return (
      <div className="App">
        <PomodoroSettings
          workTime={workTime}
          shortRestTime={shortRestTime}
          longRestTime={longRestTime}
          itsVisible={timerVisible}
          displayText={displayText}
          itsPomodoro={itsPomodoro}
          itsShortRest={itsShortRest}
          itsLongRest={itsLongRest}
          onChangeTimer={this.changeTimer}
          onSetTimerValue={this.setTimerValue}
        />
        <PomodoroTimer itsVisible={timerVisible} timerValue={currentTime} />
        <hr />
        <PomodoroControls
          onStartTimer={this.startTimer}
          onStopTimer={this.stopTimer}
          onResetTimer={this.resetTimer}
        />
        <PomodoroTasksForm />
        <PomodoroTasksList />
      </div>
    );
  }
}

export default App;
