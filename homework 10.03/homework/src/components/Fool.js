import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Content extends Component {
    constructor(props) {
        super(props)
        this.stopTimer=this.stopTimer.bind(this)
        this.handleCheckbox=this.handleCheckbox.bind(this)
        this.state = {
            checkboxGroup: {
                task1: false,
                task2: false,
                task3: false
            },
            timerGroup:{
                sec: 0,
                min:0,
                milisec:0
            }
        }
        this.timersec()
        this.timermilisec()
    }
    timersec(){
        this.second=setInterval(()=>{
            document.querySelector('.seconds').textContent = (this.state.timerGroup.sec<10 ? '0'+this.state.timerGroup.sec++ +':': this.state.timerGroup.sec>61 ? this.state.timerGroup.sec='0'+0: this.state.timerGroup.sec++ +':')
            document.querySelector('.minutes').textContent= ('0'+this.state.timerGroup.min + ':')
            if (this.state.timerGroup.sec>60) {
                this.state.timerGroup.min++
                if (this.state.timerGroup.min>9) {
                    document.querySelector('.minutes').textContent=this.state.timerGroup.min+':'
                }
            }
        },1000)
    }
    timermilisec(){
        this.milisecond = setInterval(()=>{
            document.querySelector('.miliseconds').textContent=(this.state.timerGroup.milisec<10 ? '0'+this.state.timerGroup.milisec++ : this.state.timerGroup.milisec>99 ?this.state.timerGroup.milisec='0'+0: this.state.timerGroup.milisec++)
        },10)
    }
    handleCheckbox(event){
        let object = Object.assign(this.state.checkboxGroup);
        object[event.target.value]=event.target.checked
        this.setState({checkboxGroup : object})


    }
    stopTimer(){
        console.log('hi');
        clearInterval(this.milisecond)
        clearInterval(this.second)
    }
    render(){
        return <div>
        <form className='form_block'>
                <input
                id='t1'
                type='checkbox'
                value='task1'
                checked={this.state.checkboxGroup.task1}
                onChange={this.handleCheckbox}
                onClick={this.underLineText}
            />
            <label for="t1" >task1</label>
            <input
                id='t2'
                type='checkbox'
                value='task2'
                checked={this.state.checkboxGroup.task2}
                onChange={this.handleCheckbox}
            />
            <label for="t2">task2</label>
            <input
                id='t3'
                type='checkbox'
                value='task3'
                checked={this.state.checkboxGroup.task3}
                onChange={this.handleCheckbox}
            />
                <label for="t3">task3</label>
        </form>
            <div className='timer_box'>
                <p className="minutes">00:</p>
                <p className="seconds">00:</p>
                <p className="miliseconds">00</p>
            </div>
            <button onClick={this.stopTimer}>stop</button>
        </div>
    }
}
export default Content