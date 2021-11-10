import { VolumeUpRounded } from "@material-ui/icons";
import React from "react";

const turnOnSpeaker = (text) => {
  let speech = new SpeechSynthesisUtterance();
  const voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.cancel();

  speech.lang = "en";
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.voice = voices[0];

  window.speechSynthesis.speak(speech);
};

const SpeakerIcon = ({ text }) => {
  return (
    <VolumeUpRounded
      className={"entionary-speaker ml-4"}
      onClick={() => turnOnSpeaker(text)}
    />
  );
};

export default SpeakerIcon;
