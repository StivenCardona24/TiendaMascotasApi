var app = new Vue({
  el: "#app",
  data: {

    users:[
      // {
      //   id: 1,
      //   name: 'Stiven Cardona',
      //   pets: [],
      //   email: "Stiven@gmail.com",
      //   password: 12345678,
      //   type: 2

      // },
      // {
      //   id: 2,
      //   name: 'Majo Gaviria',
      //   pets: [],
      //   email: "Majo@gmail.com",
      //   password: 12345678,
      //   type: 2

      // },
      // {
      //   id: 3,
      //   name: 'Carlos Mario',
      //   pets: [],
      //   email: "carlos@gmail.com",
      //   password: 12345678,
      //   type: 1

      // },

    ],

    user: null,
    email: '',
    password: '',
    arrayData:[]

  },
  methods: {

    async listUser(){
      const url = 'https://randomuser.me/api/?results=10';
      // const response = await fetch(url);
      // this.listData = response.json();

      await fetch(url)
        .then((response) => response.json())
        .then((data) => this.arrayData = data);

      
        this.users = this.arrayData.results.map( user => { 
         return{
           ...user, 
          fullName: `${user.name.first} ${user.name.last}`,
          pets: [],
          type:  Math.floor(Math.random()* 2)
          
         }
         
        });

        this.updateLocalStorage();

      
    },
    login(){
      if(this.email == '' || this.password == ''){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingresa correctamente los datos del formulario',
         
        });
        return
      }

      this.users.forEach(element => {
        if(element.login.username == this.email && element.login.password == this.password){
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Has iniciado sesión correctamente'
          })


          this.user = element;
          this.updateLocalStorage();

          
        

        }
        
      });

      if(this.user == null){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El email y/o contraseña son incorrectos',
         
        });
        this.email = '';
        this.password = '';
        return
      }
      else{
        this.email = '';
        this.password = '';
        setTimeout(function(){     
          window.location.href = "web/Index.html";
    
        
      }.bind(this), 3000);

      }
    },


    
    updateLocalStorage(){
      
      localStorage.setItem('user', JSON.stringify(this.user));
      localStorage.setItem('users', JSON.stringify(this.users));
  },



  },


  created() {
    if(localStorage.getItem('users') != null){
      this.users = JSON.parse(localStorage.getItem('users'))
  }
  else{

  
    this.listUser();

  }


   

},

});

  //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
