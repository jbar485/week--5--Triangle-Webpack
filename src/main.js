import { myTriangle } from './scripts';
import './styles.css';

$(document).ready(function(){
  $("button#start").click(function(event){
    const a = parseInt($("input.first").val());
    const b = parseInt($("input.second").val());
    const c = parseInt($("input.third").val());
    event.preventDefault();
    const triangleValue = myTriangle(a, b, c);
    $("#answer").show().text(triangleValue);
  });
  $("button#restart").click(function(){
    location.reload();
  });
});
