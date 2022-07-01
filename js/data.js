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
  
      pets: [
        {
          id: 1,
          name: 'Firulais',
          breed: 'Criollo',
          color: 'Café',
          kind: 'Canino',
          edad: '5',
          gender: 'Macho',
          description: 'Amistoso, grande, con mucho amor',
          img: '../Images/perro.png',
          condition: 0,
          modal_id: 'p1',
          modalw: '#p1',
  
  
        },
  
        {
          id: 2,
          name: 'Peyton',
          breed: 'Labrador',
          color: 'Café',
          kind: 'Canino',
          edad: '6',
          gender: 'Hembra',
          description: 'Amistoso, grande, con mucho amor',
          img: '../Images/perro2.png',
          condition: 0,
          modal_id: 'p2',
          modalw: '#p2',
        },
  
        {
          id: 3,
          name: 'Spider',
          breed: 'Criollo',
          color: 'Beige',
          kind: 'Felino',
          edad: '6',
          gender: 'Macho',
          description: 'Amistoso, pequeño, con mucho amor',
          img: '../Images/gato3.png',
          condition: 0,
          modal_id: 'p3',
          modalw: '#p3',
        },
  
        {
          id: 4,
          name: 'Susi',
          breed: 'Criollo',
          color: 'Café',
          kind: 'Felino',
          edad: '4',
          gender: 'Hembra',
          description: 'Amistosa, pequeño, con mucho amor',
          img: '../Images/gato.png',
          condition: 0,
          modal_id: 'p4',
          modalw: '#p4',
        },
  
  
  
  
      ],

      imagesCats:["../Images/gato.png", "../Images/gato2.png", "../Images/gato3.png", "../Images/gato4.png"],
      imagesDogs:["../Images/perro.png","../Images/perro2.png", "../Images/perro3.png", "../Images/perro4.png",],
      images:[],
  
      newPets : [],

      dataPets: [],
  
      user: null,
      user2:{
        gender: '',
        name: {
          title: '',
          first: '',
          last: ''
        },
        location: {
          street: '',
          city: '',
          state: '',
          postcode: '',

      },
      email: '',
      login: {
        
        username: '',
        password: '',
       
       
      },
      phone: '',
      cell: '',
      nat: ''
    },
      type: 'Especie',
      option: 0,

      pet: {
        name: "",
        breed: "",
        color: '',
        kind: '',
        edad: '',
        gender: '',
        description: '',
        img: '',
       

      },

      img: '',
     
     
  
    },
    
    methods: {
  
     


      logout(){

        Swal.fire({
          title: '¿Estas seguro de cerrar sesión?',
          text: "Seras redirigido a la página inicial",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Cerrar Sesión'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Cerrando sesión!',
              'Has cerrado sesión correctamente',
              'success'
            );
            setTimeout(function(){     
              this.user = null;
              localStorage.removeItem("user");
              window.location.href = "../Login.html";
        
            
          }.bind(this), 2000);
           
          }
        })
        
      },

      loadPets(){
       
        
        this.dataPets = this.newPets.filter(e => e.condition == 0);
        this.option = 1;
        
      },

      loadForm(){
        
        this.option = 2;

      },

      loadImg(){

        if(this.pet.kind =='Canino'){
          this.images = this.imagesDogs;
        }
        if(this.pet.kind =='Felino'){
          this.images = this.imagesCats;
        }


        
      },

      loadAdmin(){

        this.option = 3;

      },

      deleteUser(index){
        Swal.fire({
          title: '¿Estas seguro de elimar el Usuario?',
          text: "Se eliminará el Usuario y no podras rehacer",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Elimando el usuario!',
              'Se ha eliminado correctamente el usuario',
              'success'
            );
  
            this.users.splice(index);
            this.updateLocalStorage();
            
        
  
        
        
           
          }
        })
  
      },


      selectUser(user){
      
        this.user2.id = user.id.name;
        this.user2.gender = user.gender;
        this.user2.name.title = user.name.title;
        this.user2.name.first = user.name.first;
        this.user2.name.last = user.name.last;
        this.user2.location.street = user.location.street;
        this.user2.location.city = user.location.city;
        this.user2.location.state = user.location.state;
        this.user2.location.postcode = user.location.postcode;
        
        this.user2.email = user.email;
        this.user2.login.username = user.login.username;
        this.user2.login.password = user.login.password;
        this.user2.phone = user.phone;
        this.user2.cell = user.cell;
        this.user2.nat = user.nat;

  
        // let btn = document.getElementById("update");
        // btn.classList.remove('disabled')
  
      },
      updateUser(){
      

      
        this.users.forEach(u => {
          if(u.id.name == this.user2.id.name)  
          {
            

            u.gender = this.user2.gender ;
            u.name.title= this.user2.name.title ;
            u.name.first = this.user2.name.first ;
            u.name.last = this.user2.name.last ;
            u.location.street = this.user2.location.street ;
            u.location.city = this.user2.location.city ;
            u.location.state = this.user2.location.state ;
            u.location.postcode = this.user2.location.postcode;
            
            u.email =  this.user2.email ;
            u.login.username = this.user2.login.username ;   
            u.phone = this.user2.phone ;
            u.cell = this.user2.cell ;
            u.nat = this.user2.nat;
            
            
          }
          
        });
  
        this.user2.id = '';
        this.user2.gender = '';
        this.user2.name.title = ''
        this.user2.name.first = '';
        this.user2.name.last = '';
        this.user2.location.street = '';
        this.user2.location.city = '';
        this.user2.location.state = '';
        this.user2.location.postcode = '';
        
        this.user2.email = '';
        this.user2.login.username = '';
        this.user2.login.password = '';
        this.user2.phone = '';
        this.user2.cell = '';
        this.user2.nat = '';
        this.updateLocalStorage();
        // let btn = document.getElementById("update");
        // btn.classList.add('disabled')
      },
    
  
      searchImg(item){
        this.img = item;

     
      },

      saveImg(){
        if(this.img == ''){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecciona una imagen para tu mascota',
           
          });
          return
        }

        this.pet.img = this.img;
        let btn = document.getElementById("closeImg");
        btn.click();
      },

      savePet(){
       if(this.pet.name ==  ""|| this.pet.breed ==  "" || this.pet.color == " " ||  this.pet.kind =='' ||  this.pet.edad== '' ||  this.pet.gender== '' ||  this.pet.img== ''){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingresa correctamente todos los datos',
         
        });
          return
       }

       this.newPets.push({
        id: this.newPets.length + 1,
        name: this.pet.name,
        breed: this.pet.breed,
        color: this.pet.color,
        kind: this.pet.kind,
        edad: this.pet.edad,
        gender: this.pet.gender,
        description: this.pet.description,
        img: this.pet.img,
        condition: 0,
        modal_id: `p${this.newPets.length + 1}`,
        modalw: `#p${this.newPets.length + 1}`,
       }

       )

       Swal.fire(
        'Se Guardo correctamente la mascota',
        'Presiona el botón',
        'success'
      );

      this.pet.name = "";
      this.pet.breed = "";
      this.pet.color = '';
      this.pet.kind = '';
      this.pet.edad = '';
      this.pet.name = '';
      this.pet.name = '';
      this.pet.name = '';

      this.updateLocalStorage();
       
      
      
      },

      searchFor() {

        if (this.type == "Especie") {
  
          this.dataPets = this.newPets;
        }
        else {
          this.dataPets = this.newPets.filter(item => item.kind == this.type);
          window.location.href = "#pets"
  
  
        }

    },

    adopt(pet){

      Swal.fire({
        title: `¿Estas seguro de adoptar a ${pet.name}?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save',
        denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.user.pets.push(pet);
          pet.condition = 1;
          Swal.fire(`Felicitaciones! Has tomado la mejor decisción, has adoptado a ${pet.name}`, '', 'success')
          this.loadPets();
          this.updateLocalStorage();
        } else if (result.isDenied) {
          Swal.fire('Oh :c, espero adoptes otra mascota', '', 'info')
        }
      })

    },



      updateLocalStorage(){
        localStorage.setItem('users', JSON.stringify(this.users));
        localStorage.setItem('pets', JSON.stringify(this.newPets));
    },
  
  
    listData(){
      this.newPets = this.pets;
    
      this.updateLocalStorage();
    },
  
    },
  
  
    created() {
  
      if(localStorage.getItem('pets') != null){
          this.newPets = JSON.parse(localStorage.getItem('pets'))
      }
      else{
          this.listData();
      }
      if(localStorage.getItem('users') != null){
        this.users = JSON.parse(localStorage.getItem('users'))
    }

      if(localStorage.getItem('user') != null){
        this.user =  JSON.parse(localStorage.getItem('user'));

        this.users.forEach(element => {
          if(element.id == this.user.id){
            this.user = element;
            console.log("hola");
          }
          
        });

      

        

        

    }
    else{

        
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has iniciado sesión',
       
      });

        window.location.href = "../Login.html";
    }


    


      
     
  
  },

  mounted() {

    if(this.user != null){
      let btn = document.getElementById("log");
        btn.click();
    }

    if(localStorage.getItem('users') != null){
      this.users = JSON.parse(localStorage.getItem('users'))
  }
  
    
  },
  
  });
  
    //v-for="i in array" es una directiva de bue que permite recorrer un arreglo
  