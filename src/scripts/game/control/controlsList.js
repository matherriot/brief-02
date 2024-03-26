import actions from "../action.js";


export let controls = [
  {
    "key": "Enter",
    "type": "keydown",
    "callback": (event)=>{
      actions.pause();
    }},
  {
    "key": "Pause",
    "type": "keydown",
    "callback": (event)=>{
      actions.toggleFreeze();
    }}
]
export default controls;