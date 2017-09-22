module.exports = function zeros(expression) {
  var res = expression.split("*"); //makes string (1!,2! etc.)
    var n = /\d+/g;
    var N = /\D+/g;
    p1="!";
    p2='!'+'!';
    var q1=[];   //Making string from res with !
    var q2=[];   //Making string from res with !!
    for (i=0;i<res.length;i++){
       if (res[i].match(N)==p1)
       q1+=res[i];
    }
    for (i=0;i<res.length;i++){
       if (res[i].match(N)==p2)
       q2+=res[i];
    }                            // we've made two different string depending on !/!!
   res1=q1+q2;
   //alert (q1.length)
   if (res1.length == q1.length){
   var m1 = q1.match(n);  //Now we take firs string and make an array of numbers
   var m11 = [];
   for (i=0;i<m1.length;i++){
       m11[i]=parseInt(m1[i])
   }
   var s1 = [];
   var sum1=0;
   for (i=0;i<m11.length;i++){
      s1[i]= Math.floor(m11[i]/5)+Math.floor(m11[i]/25)
       sum1+=s1[i]}
   return (sum1)
  }
  if (res1.length==q2.length){

   var m2 = q2.match(n);
   var m21 = [];
   for (i=0;i<m2.length;i++){
       m21[i]=parseInt(m2[i])
   }
   var s2 = [];
   var sum2=0;
   for (i=0;i<m21.length;i++){
      s2[i]= Math.floor(m21[i]/10)+Math.floor(m21[i]/50)
       sum2+=s2[i]}
       return (sum2)
      }

   if (res1.length==q1.length+q2.length) {
       var M1 = q1.match(n);  //Now we take firs string and make an array of numbers
   var M11 = [];
   for (i=0;i<M1.length;i++){
       M11[i]=parseInt(M1[i])
   }
   var S1 = [];
   var Sum1=0;
   for (i=0;i<M11.length;i++){
      S1[i]= Math.floor(M11[i]/5)+Math.floor(M11[i]/25)
       Sum1+=S1[i]}
   var M2 = q2.match(n);
   var M21 = [];

   for (i=0;i<M2.length;i++){
       M21[i]=parseInt(M2[i])
   }
   var S2 = [];
   var Sum2=0;
   for (i=0;i<M21.length;i++){
      S2[i]= Math.floor(M21[i]/10)+Math.floor(M21[i]/50)
       Sum2+=S2[i]}
       var sum = Sum1+Sum2;

   return (sum)
  }
}
