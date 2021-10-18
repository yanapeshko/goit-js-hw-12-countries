import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export function onNoCountry() {
  info({
    title: 'Error',
    text: 'Please enter a more specific query!',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}

export function onOutputInfo() {
  error({
    title: 'Too many matches found',
    text: 'Please enter a more specific query!',
    delay: 2000,
    closerHover: true,
    mouseReset: true,
    shadow: true,
  });
}
export function onError() {
  alert('Sorry, cant find it!');
}
