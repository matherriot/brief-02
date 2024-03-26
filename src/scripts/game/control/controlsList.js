import actions from "../action";


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