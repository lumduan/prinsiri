
app.controller("menuCtrl",function(){ 
  
  this.mainMenu = true;
  this.maMenu = false;
  this.HeaderText = "";
  
  // MainMenu Active เพิ่มตัวแปรตัวจำนวน main menu
  
  this.usoAct = "";
  this.eclassAct = "";
  this.apAct = "";
  this.apAddAct = "";
  this.jobAct = "";
  
    this.setMainMenu = function(menuVal){
        this.mainMenu = menuVal;
    }
    
     this.setMaMenu = function(menuVal){
        this.maMenu = menuVal;
    }
    
    
    
 // เลือก Main Menu Active
 
    this.setMainMenuActive = function(menuAct){
        if (menuAct === 'uso'){
                this.usoAct = 'active';
                this.eclassAct = "";
                this.apAct = "";
                this.apAddAct = "";
                this.jobAct = "";
        }
        
        else if (menuAct == 'ecr'){
                this.usoAct = "";
                this.eclassAct = "active";
                this.apAct = "";
                this.apAddAct = "";
                this.jobAct = "";
        }
        
        else if (menuAct == 'ap'){
                this.usoAct = "";
                this.eclassAct = "";
                this.apAct = "active";
                this.apAddAct = "";
                this.jobAct = "";
        }
        
        else if (menuAct == 'apAdd'){
                this.usoAct = "";
                this.eclassAct = "";
                this.apAct = "";
                this.apAddAct = "active";
                this.jobAct = "";
        }
        
        else if (menuAct == 'job'){
                this.usoAct = "";
                this.eclassAct = "";
                this.apAct = "";
                this.apAddAct = "";
                this.jobAct = "active";
        }
        
    }

})


.controller("loadingCtrl",["$scope","$location","mySch",  
function($scope,$location,mySch){ // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    
  this.loading  = mySch.loading();
      
      
}]) 


// ไว้อัพเดทเวลาปัจจุบัน
app.controller("displayCtrl",function(){ 

this.toDay = new Date();
 
  
})

///////////////////////////

app.controller('MyFile', function($scope) {
    $scope.setFile = function(element) {
        $scope.$apply(function($scope) {
            $scope.theFile = element.files[0];
        });
    };
});






///////////////////////////



