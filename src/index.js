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
    }                            // we've made two different strings depending on !/!!
   res1=q1+q2;
   //alert (q1.length)
   /*********************************1st case*************************************/
  if (res1.length == q1.length){
     var m1 = q1.match(n);  //Now we take firs string and make an array of numbers
     var m11 = [];
       for (i=0;i<m1.length;i++){
       m11[i]=parseInt(m1[i]);
       }
     var s1 = [];
     var sum1=0;
       for (var i=0;i<m11.length;i++){
      s1[i]= Math.floor(m11[i]/5)+Math.floor(m11[i]/25);
       sum1+=s1[i]}
  return (sum1);
  }
  /*********************************2d case**************************************/
  if (res1.length==q2.length){
      var m2 = q2.match(n);
      var m21 = [];

       for (i=0;i<m2.length;i++){
       m21[i]=parseInt(m2[i]); //получили арэй из чисел
       }

      var ar1 = [];         // сделали арэй из четных
       for (i=0; i<m21.length;i++){
         if (m21[i] % 2 === 0){
         ar1.push(m21[i]);
         }
       }

      var ar2 = [];         // сделали арэй из нечетных
       for (i=0; i<m21.length;i++){
         if (m21[i] % 2 !== 0){
            ar2.push(m21[i]);
         }
       }

      var l1 = []; //считаем кол-во нулей в четных
      var SUM1=0;
      for (i=0;i<ar1.length;i++){
        l1[i]= Math.floor(ar1[i]/10)+Math.floor(ar1[i]/50);
        SUM1+=l1[i];
      }
      if(ar1.length>0){  //Нули в нечетных считаются только если есть четные
        var l2 = [];    // считаем кол-во нулей в нечетных
        var SUM2=0;
          for (i=0;i<ar2.length;i++){
           l2[i]= Math.floor(ar2[i]/5)-Math.floor(ar2[i]/10)+Math.floor(ar2[i]/25-Math.floor(ar2[i]/50));
           SUM2+=l2[i]
         }}
      else {SUM2=0;}

      var SUM = SUM1+SUM2;
  return SUM;
  }
  /************************************3dcase*****************************************/
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
  /***********************************Ended work with !*****/
   var M2 = q2.match(n);
      var M21 = [];

       for (i=0;i<M2.length;i++){
       M21[i]=parseInt(M2[i]); //получили арэй из чисел
       }

      var Ar1 = [];         // сделали арэй из четных
       for (i=0; i<M21.length;i++){
         if (M21[i] % 2 === 0){
         Ar1.push(M21[i]);
         }
       }

      var Ar2 = [];         // сделали арэй из нечетных
       for (i=0; i<M21.length;i++){
         if (M21[i] % 2 !== 0){
            Ar2.push(M21[i]);
         }
       }

      var L1 = []; //считаем кол-во нулей в четных
      var SUM11=0;
      for (i=0;i<Ar1.length;i++){
        L1[i]= Math.floor(Ar1[i]/10)+Math.floor(Ar1[i]/50);
        SUM11+=L1[i];
      }

        var L2 = [];    // считаем кол-во нулей в нечетных
        var SUM21=0;
          for (i=0;i<Ar2.length;i++){
           L2[i]= Math.floor(Ar2[i]/5)-Math.floor(Ar2[i]/10)+Math.floor(Ar2[i]/25-Math.floor(Ar2[i]/50));
           SUM21+=L2[i];
         }
      var SUMM = SUM11+SUM21+Sum1;
  return SUMM;
  }
  }
