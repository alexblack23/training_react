import React, { Component } from 'react';


class Content extends Component {
constructor(props) {
    super(props)
    this.handleSelect=this.handleSelect.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
    this.state = {
        selectedValue: ''
    };
    this.helper()
}
helper (){
    setInterval(()=>{
        console.log(this.state.selectedValue);
    },1000)
}
handleSelect(event){
   this.setState({selectedValue: event.target.value})
}
handleSubmit() {
    alert('Good choice')
}
    render(){
return <form className='block1' >
    <h2>make a choice</h2>
    <select onChange={this.handleSelect}
            value={this.selectedValue}>
        <option value='bad'>bad</option>
        <option value='nice'>nice</option>
        <option value='good'>good</option>
        <option value='very good'>very good</option>
    </select>
    <input type='button' value='submit' onClick={this.handleSubmit}/>
</form>
    }
}









export default Content




// class Content extends Component {
//     handleChange(event) {
//         console.log(event);
//         console.log(event.target);
//         console.log(event.target.value);
//     }
//     render(){
//         return <input type='text' onChange={this.handleChange.bind(this)}/>
//     }
// }





// class Content extends Component {
//     constructor(props) {
//         super(props)
//         this.handleCheckbox=this.handleCheckbox.bind(this)
//         this.state = {
//             checkboxGroup: {
//                 angular: false,
//                 react: false,
//                 ember: false
//             }
//         }
//         this.helper()
//     }
//     helper (){
//         setInterval(()=>{
//             console.log(this.state.checkboxGroup);
//         },1000)
//     }
//     handleCheckbox(event){
//         let object = Object.assign(this.state.checkboxGroup); // чтоб при срабаывании нашего метода оьект становился пустым
//         object[event.target.value]=event.target.checked
//         this.setState({checkboxGroup : object})
//     }
//     render(){
//         return <form>
//             <input
//                 type='checkbox'
//                 value='angular'
//                 checked={this.state.checkboxGroup.angular}
//                 onChange={this.handleCheckbox}
//             />
//             <input
//                 type='checkbox'
//                 value='react'
//                 checked={this.state.checkboxGroup.react}
//                 onChange={this.handleCheckbox}
//             />
//             <input
//                 type='checkbox'
//                 value='ember'
//                 checked={this.state.checkboxGroup.ember}
//                 onChange={this.handleCheckbox}
//             />
//         </form>
//     }
// }