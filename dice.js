

var play=document.querySelector(".play");
play.addEventListener("click",function(){
  var num=Math.random();
  num=num * 6;
  num=Math.floor(num) + 1;
  var arr=[3,5,4,6,1,2];
  var z=Math.random();
  z=z * 6;
  z=Math.floor(z) ;
  z=arr[z];
  var h1=document.querySelector("h1");
  var a=document.querySelector(".a");
  var b=document.querySelector(".b");
  var c=document.querySelector(".c");
  var d=document.querySelector(".d");
  var e=document.querySelector(".e");
  var f=document.querySelector(".f");
  var g=document.querySelector(".g");
  var h=document.querySelector(".h");
  var i=document.querySelector(".i");
  var j=document.querySelector(".j");
  var k=document.querySelector(".k");
  var l=document.querySelector(".l");
  var m=document.querySelector(".m");
  var n=document.querySelector(".n");
  var o=document.querySelector(".o");
  var p=document.querySelector(".p");
  var q=document.querySelector(".q");
  var r=document.querySelector(".r");


  if (num===1){
     a.style.opacity="0";
     b.style.opacity="0";
     c.style.opacity="0";
     d.style.opacity="0";
     e.style.opacity="1";
     f.style.opacity="0";
     g.style.opacity="0";
     h.style.opacity="0";
     i.style.opacity="0";
  }else if(num===2){
    a.style.opacity="0";
    b.style.opacity="1";
    c.style.opacity="0";
    d.style.opacity="0";
    e.style.opacity="0";
    f.style.opacity="0";
    g.style.opacity="0";
    h.style.opacity="1";
    i.style.opacity="0";
  }else if(num===3){
    a.style.opacity="0";
    b.style.opacity="0";
    c.style.opacity="1";
    d.style.opacity="0";
    e.style.opacity="1";
    f.style.opacity="0";
    g.style.opacity="1";
    h.style.opacity="0";
    i.style.opacity="0";
  }else if(num==4){
    a.style.opacity="1";
    b.style.opacity="0";
    c.style.opacity="1";
    d.style.opacity="0";
    e.style.opacity="0";
    f.style.opacity="0";
    g.style.opacity="1";
    h.style.opacity="0";
    i.style.opacity="1";
  }else if(num===5){
    a.style.opacity="1";
    b.style.opacity="0";
    c.style.opacity="1";
    d.style.opacity="0";
    e.style.opacity="1";
    f.style.opacity="0";
    g.style.opacity="1";
    h.style.opacity="0";
    i.style.opacity="1";
  }else if(num===6){
    a.style.opacity="1";
    b.style.opacity="0";
    c.style.opacity="1";
    d.style.opacity="1";
    e.style.opacity="0";
    f.style.opacity="1";
    g.style.opacity="1";
    h.style.opacity="0";
    i.style.opacity="1";
  }

  if (z===1){
     j.style.opacity="0";
     k.style.opacity="0";
     l.style.opacity="0";
     m.style.opacity="0";
     n.style.opacity="1";
     o.style.opacity="0";
     p.style.opacity="0";
     q.style.opacity="0";
     r.style.opacity="0";
  }else if(z===2){
    j.style.opacity="0";
    k.style.opacity="1";
    l.style.opacity="0";
    m.style.opacity="0";
    n.style.opacity="0";
    o.style.opacity="0";
    p.style.opacity="0";
    q.style.opacity="1";
    r.style.opacity="0";
  }else if(z===3){
    j.style.opacity="0";
    k.style.opacity="0";
    l.style.opacity="1";
    m.style.opacity="0";
    n.style.opacity="1";
    o.style.opacity="0";
    p.style.opacity="1";
    q.style.opacity="0";
    r.style.opacity="0";
  }else if(z===4){
    j.style.opacity="1";
    k.style.opacity="0";
    l.style.opacity="1";
    m.style.opacity="0";
    n.style.opacity="0";
    o.style.opacity="0";
    p.style.opacity="1";
    q.style.opacity="0";
    r.style.opacity="1";
  }else if(z===5){
    j.style.opacity="1";
    k.style.opacity="0";
    l.style.opacity="1";
    m.style.opacity="0";
    n.style.opacity="1";
    o.style.opacity="0";
    p.style.opacity="1";
    q.style.opacity="0";
    r.style.opacity="1";
  }else if(z===6){
    j.style.opacity="1";
    k.style.opacity="0";
    l.style.opacity="1";
    m.style.opacity="1";
    n.style.opacity="0";
    o.style.opacity="1";
    p.style.opacity="1";
    q.style.opacity="0";
    r.style.opacity="1";
  }

  if(z>num){
    h1.textContent="Player-2 Wins";
  }else if(z<num){
    h1.textContent="Player-1 Wins";
  }else{
    h1.textContent="Draw";
  }

});
