import $ from 'jquery';
import './style.scss';

let $num = 0;

function secondsCount() {
  $num += 1;
  $('#main').html(`You've been on this page for ${$num} seconds.`);
}

setInterval(secondsCount, 1000);
