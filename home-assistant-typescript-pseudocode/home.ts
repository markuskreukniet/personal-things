const illuminance = 0
let time = ""

let helper_living_room_manual_override = false
let helper_living_room_lights_on = false

const helper_sunset_up_button_start_time = "07:00"
const helper_sunset_up_start_time = "07:45"
const helper_sunset_up_end_time = "10:30"
const helper_sunset_down_start_time = "13:15"
const helper_evening_start_time = "17:30"
const helper_night_start_time = "23:15"

function automation_living_room_lights_by_illuminance() {
  if (!helper_living_room_manual_override) {
    if (helper_low_illuminance()) {
      script_when_sunset_up_time_window()
      script_when_sunset_down_time_window()
      script_when_evening_time_window()
    } else if (helper_high_illuminance()) {
      script_living_room_lights_off()
    }
  }
}

function automation_living_room_lights_by_time() {
  if (time === helper_evening_start_time && helper_living_room_lights_on) {
    script_living_room_lights_on("Living Room Lights Evening On")
  } else if (helper_low_illuminance()) {
    switch(time) {
      case helper_sunset_up_start_time:
        script_living_room_lights_on("Living Room Lights Sunset Up On")
        break
      case helper_sunset_down_start_time:
        script_living_room_lights_on("Living Room Lights Sunset Down On")
    }
  }

  helper_living_room_manual_override = false
}

// hysteresis = 2
function helper_low_illuminance() {
  return illuminance < 7
}

// hysteresis = 2
function helper_high_illuminance() {
  return illuminance > 14
}

function automation_living_room_button() {
  if (helper_living_room_lights_on) {
    script_living_room_lights_off()
  } else {
    script_when_sunset_up_button_time_window()
    script_when_sunset_down_time_window()
    script_when_evening_time_window()
    script_when_night_time_window()
  }

  helper_living_room_manual_override = true
}

function automation_home_lights_off() {
  if (time === helper_sunset_up_end_time || time === helper_night_start_time) {
    script_home_lights_off()
  }
}

// A dashboard button uses this script
function script_home_lights_off() {
  activateScene("Hallway Lights Off")
  activateScene("Landing Lights Off")
  script_living_room_lights_off()
  helper_living_room_manual_override = false
}

function script_when_sunset_up_time_window() {
  if (time === `between ${helper_sunset_up_start_time} and ${helper_sunset_up_end_time}`) {
    script_living_room_lights_on("Living Room Lights Sunset Up On")
  }
}

function script_when_sunset_up_button_time_window() {
  if (time === `between ${helper_sunset_up_button_start_time} and ${helper_sunset_down_start_time}`) {
    script_living_room_lights_on("Living Room Lights Sunset Up On")
  }
}

function script_when_sunset_down_time_window() {
  if (time === `between ${helper_sunset_down_start_time} and ${helper_evening_start_time}`) {
    script_living_room_lights_on("Living Room Lights Sunset Down On")
  }
}

function script_when_evening_time_window() {
  if (time === `between ${helper_evening_start_time} and ${helper_night_start_time}`) {
    script_living_room_lights_on("Living Room Lights Evening On")
  }
}

function script_when_night_time_window() {
  if (time === `between ${helper_night_start_time} and ${helper_sunset_up_button_start_time}`) {
    script_living_room_lights_on("Living Room Lights Evening On")
  }
}

function script_living_room_lights_off() {
  activateScene("Living Room Lights Off")
  helper_living_room_lights_on = false
}

function script_living_room_lights_on(scene_entity: string): void {
  activateScene(scene_entity)
  helper_living_room_lights_on = true
}

function activateScene(scene_entity: string) {
  console.log("activate scene: " + scene_entity)
}