
  (function(){
      var d=localStorage.getItem('user');
      var dData=JSON.parse(d)
    //   console.log(dData.em)
      // Initialize Firebase
      var config = {
          apiKey: "AIzaSyCWwq40WLn9g8Ta-mFfo7xn5qDv8pokCyQ",
          authDomain: "myfirebaseauthentication789.firebaseapp.com",
          databaseURL: "https://myfirebaseauthentication789.firebaseio.com",
          projectId: "myfirebaseauthentication789",
          storageBucket: "myfirebaseauthentication789.appspot.com",
          messagingSenderId: "1043229686543"
        };
        firebase.initializeApp(config);
        
        //get elements
        // const txtemail=document.getElementById('emailid')
        // const txtuser=document.getElementById('userid')
        // const txtedu=document.getElementById('eduid')
        // const txtpass=document.getElementById('passid')
        // const signup=document.getElementById('signupbtn')
        // const signin=document.getElementById('signbtn')
        
        
        //retrive data
        var ref=firebase.database().ref('objects');
        ref.on('value',gotdata,errdata);
      
      
        function gotdata(data){
          // console.log(data.val())
          var myobj=data.val();
          var keys=Object.keys(myobj)
          //   console.log(keys)
          //   console.log(myobj[keys[1]].uname)
        
        //mydata
          for(var i=0;i<keys.length;i++){
              if(myobj[keys[i]].uemail===dData.email){
                  var a=document.getElementById('tab1');
                  var row1=document.createElement('tr')
                var row2=document.createElement('tr')
                var row3=document.createElement('tr')
                //td
                var col11=document.createElement('td');
                var col12=document.createElement('td');
                var col21=document.createElement('td');
                var col22=document.createElement('td');
                var col31=document.createElement('td');
                var col32=document.createElement('td');
                //text nodes
                var t11=document.createTextNode('Name')
                var t12=document.createTextNode(myobj[keys[i]].uname)
                var t21=document.createTextNode('Education')
                var t22=document.createTextNode(myobj[keys[i]].uedu)
                var t31=document.createTextNode('Email')
                var t32=document.createTextNode(myobj[keys[i]].uemail)

                col11.appendChild(t11)
                col12.appendChild(t12)
                col21.appendChild(t21)
                col22.appendChild(t22)
                col31.appendChild(t31)
                col32.appendChild(t32)

                row1.appendChild(col11)
                row1.appendChild(col12)
                row2.appendChild(col21)
                row2.appendChild(col22)
                row3.appendChild(col31)
                row3.appendChild(col32)
                
                a.appendChild(row1)
                a.appendChild(row2)
                a.appendChild(row3)
                console.log(a)
                
            }
        }
        var count=1;
        //Other data
        for(var i=0;i<keys.length;i++){
            if(myobj[keys[i]].uemail!==dData.email){
             var a=document.getElementById('tab2');
                var row1=document.createElement('tr')
              var row2=document.createElement('tr')
              var row3=document.createElement('tr')
              var h4=document.createElement('h4')
              var h4text=document.createTextNode("User "+count);
              count++;
                h4.appendChild(h4text)
              //td
              var col11=document.createElement('td');
              var col12=document.createElement('td');
              var col21=document.createElement('td');
              var col22=document.createElement('td');
              var col31=document.createElement('td');
              var col32=document.createElement('td');
              //text nodes
              var t11=document.createTextNode('Name')
              var t12=document.createTextNode(myobj[keys[i]].uname)
              var t21=document.createTextNode('Education')
              var t22=document.createTextNode(myobj[keys[i]].uedu)
              var t31=document.createTextNode('Email')
              var t32=document.createTextNode(myobj[keys[i]].uemail)

              col11.appendChild(t11)
              col12.appendChild(t12)
              col21.appendChild(t21)
              col22.appendChild(t22)
              col31.appendChild(t31)
              col32.appendChild(t32)

              row1.appendChild(col11)
              row1.appendChild(col12)
              row2.appendChild(col21)
              row2.appendChild(col22)
              row3.appendChild(col31)
              row3.appendChild(col32)
              
              a.appendChild(h4)
              a.appendChild(row1)
              a.appendChild(row2)
              a.appendChild(row3)
            //   console.log(a)
              
          }
      }

        }
      
        function errdata(err){
          console.log('Error!!!!!!!!!')
          console.log(err)
        }
        
        
        
        
        
   }());