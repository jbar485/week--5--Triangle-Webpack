import { MyTriangle } from './scripts';
import './styles.css';

$(document).ready(function(){
  $("button#start").click(function(event){
    let a = parseInt($("input.first").val());
    let b = parseInt($("input.second").val());
    let c = parseInt($("input.third").val());
    event.preventDefault();
    let triangleValue = new MyTriangle(a, b, c);
    let finalTriangle = triangleValue.checkType();
    $("#answer").show().text(finalTriangle);
  });
  $("button#restart").click(function(){
    location.reload();
  });
});
