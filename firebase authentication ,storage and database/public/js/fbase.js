(function(){
    var arr=[];
    var count=0;
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
     const txtemail=document.getElementById('emailid')
     const txtuser=document.getElementById('userid')
     const txtedu=document.getElementById('eduid')
     const txtpass=document.getElementById('passid')
     const signup=document.getElementById('signupbtn')
     const signin=document.getElementById('signbtn')
   
     //btn signin
    //  signin.addEventListener('click', (e) => {
    //    alert(13123)
    //    //get emaiail and password
    //    const email=txtemail.value;
    //    // var user=txtuser.value;
    //    // var edu=txtedu.value;   
    //    const pass=txtpass.value;
    //    const auth=firebase.auth();
    //    const promise=auth.signInWithEmailAndPassword(email,pass);
    //    promise.catch(e=>{console.log(e.message)})
   
    //  })
     //add signup event 
   
     signup.addEventListener('click', (e) => {
       
       
       const email=txtemail.value;
       const pass=txtpass.value;
       const edu=txtedu.value;
       const user=txtuser.value; 
     
        // console.log(email)
       if( email=='' ||  pass=='' || edu=='' || user=='' ){
        // alert("1")
        if(user===''){
            document.getElementById('a1').className='abcd'
        }
        else{
            document.getElementById('a1').className='abc'
            if(edu==''){
            document.getElementById('a2').className='abcd'
                
            }
            else{
            document.getElementById('a2').className='abc'
                if(email==''){
                    document.getElementById('a3').className='abcd'

                }
                else{
                    document.getElementById('a3').className='abc'
                    if(pass==''){
                        document.getElementById('a4').className='abcd'
                    }
                    else{
                        document.getElementById('a4').className='abc'
                    }
                }
            }
        }
       } 
       else{

       const auth=firebase.auth();
       const promise=auth.createUserWithEmailAndPassword(email,pass);
       promise.then(e=>{
        signUpDatabase();
        setTimeout(()=>{
            alert("Sign Up form is Submmited ... Now Press the sign in button to login")
            // location.href='./index.html'           
        },700)
       })
       promise.catch(e=>{console.log(e.message)})
        }
     })
     //add a realtime listner
     firebase.auth().onAuthStateChanged(firebaseUser => {
         if(firebaseUser){
           console.log(firebaseUser)
         }else{
           console.log('not logged in')
         }
     })
     //database signup function
     function signUpDatabase(){
        //  alert(123)
        var obj={
            uname:txtuser.value,
            uemail:txtemail.value,
            uedu:txtedu.value,
            upass:txtpass.value
        }
        // console.log(obj)
        console.log(obj)
        var f= firebase.database().ref('objects');
        f.push(obj);
    
        
    } 
   
   }());