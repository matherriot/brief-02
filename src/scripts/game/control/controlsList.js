import actions from "../action/index.js";


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