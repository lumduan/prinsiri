//////////////////////////    E-Class  ////////////////////////////////////////      
app.controller("EcrListCtrl", ["$scope", "$location", "mySch",
  function($scope, $location, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  

    mySch.setLoading('loading');

    $scope.ecr = {}; // กำหนด ตัวแปร object ที่เราจะไปเรียกใช้ ในหน้า list.html  
    // พอแสดงหน้า list.html ให้ เรียกใช้งาน ฟังก์ชั่น ใน myFriend service ที่เราสร้าง  
    mySch.viewEcr('').success(function(result) { // ดึงข้อมูลสำเร็จ ส่งกลับมา   << USO
      $scope.ecr = result; // เอาค่าข้อมูลที่ได้ กำหนดให้กับ ตัวแปร object  
    });

    $scope.predicate = "ecr_smis"; // อันนี้กำหนดค่า สำหรับการเรียงข้อมูลเริ่มต้น ในตารางไฟล์ list.html  
    // เรียงข้อมูลจาก id  

    // กำหนดฟังก์ชัน ลบข้อมูล จากที่เรียกใช้ในหน้า template list.html  
    $scope.deleteData = function(Id) { // ส่ง Id เข้ามา  
      if (confirm("Confirm delete?")) { // ขึ้นแจ้งยืนยันการลบก่อน  
        // ถ้ายืนยันการลบข้อมูลแล้ว ให้เรยกใช้งาน mySch service ที่เราสร้าง เพื่อลบข้อมูล  
        mySch.deleteUso(Id).success(function() { // ถ้า ok ลบข้อมูล  
          $location.path("#/"); // ลบแล้วให้รีเฟรส  
        });
      }
    };

  }
])

.controller("EcrViewCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.ecr = {};

    // เรียกใช้งาน ฟังก์ชั่น viewSch โดยส่งค่า Id ของข้อมูลไปด้วย  
    // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย  
    mySch.viewEcr($routeParams.Id).success(function(result) {
      $scope.ecr = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object << USO
    });




  }
])


.controller("EcrJobCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.ecr = {};
    $scope.job = $routeParams.Job;


    // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย  
    mySch.viewEcr($routeParams.Id).success(function(result) {
      $scope.ecr = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object 

    });


       //// ส่วนของการ Update
       $scope.submitEcr = function(objSch) {

        mySch.updateEcr(objSch, $routeParams.Id)
       // $scope.ecr = null;
      

    };

    ////// ส่วนของการ Add Job
    $scope.addJobForm = function(objSch) {
      mySch.addJob(objSch).success(function() {
        // หากทำการบันทึกข้อมูลสำเร็จ   
        $scope.data = null; // ให้ object ชื่อ data เป็นค่าว่าง รอรับข้อมูลใหม่  
      });

    };



  }
])

