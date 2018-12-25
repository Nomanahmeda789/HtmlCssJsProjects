(function(){
  var obj1={};
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
  signin.addEventListener('click', (e) => {
    // alert(13123)
    //get emaiail and password
    const email=txtemail.value;
    // var user=txtuser.value;
    // var edu=txtedu.value;   
    const pass=txtpass.value;
    if( email=='' ||  pass==''){
      // alert('aaaaaaaa')
      if(email==''){
        document.getElementById('a11').className='abcd'
      }
      else{
        document.getElementById('a11').className='abc'
        if(pass==''){
          document.getElementById('a12').className='abcd'

        }
        else{
          document.getElementById('a12').className='abc'

        }
      }
    }
    else{
    const auth=firebase.auth();
    const promise=auth.signInWithEmailAndPassword(email,pass);
    promise.then(e=>{
      obj1.email=email;
      obj1.pass=pass;
      localStorage.setItem('user',JSON.stringify(obj1))
        location.href='./pages/home.html'
      
    })
    promise.catch(e=>{console.log(e.message)})
    }
  })
  //add signup event 

  // signup.addEventListener('click', (e) => {
  //   alert("asdasdasd")
    
  //   const email=txtemail.value;
  //   const pass=txtpass.value;
  //   const auth=firebase.auth();
  //   const promise=auth.createUserWithEmailAndPassword(email,pass);
  //   promise.catch(e=>{console.log(e.message)})

  // })
  //add a realtime listner
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser){
        console.log(firebaseUser)
      }else{
        console.log('not logged in')
      }
  })
















}());