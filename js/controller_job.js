//////////////////////////    JOB  ////////////////////////////////////////    
app.controller("JobListCtrl", ["$scope", "$location", "mySch", "$interval",
  function($scope, $location, mySch, $interval) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  

    $scope.job = {}; // กำหนด ตัวแปร object ที่เราจะไปเรียกใช้ ในหน้า list.html  
    $interval(autoUpdateJob, 1000); // กำหนดเวลา update mili Sec.
    // พอแสดงหน้า list.html ให้ เรียกใช้งาน ฟังก์ชั่น ใน myFriend service ที่เราสร้าง  



    function autoUpdateJob() { // สั่งให้ Auto Update ตาราง Job
      mySch.viewJobSmis('').success(function(result) { // 
        $scope.job = result; // เอาค่าข้อมูลที่ได้ กำหนดให้กับ ตัวแปร object  
      });

//       $scope.predicate = "-job_date_add"; // อันนี้กำหนดค่า สำหรับการเรียงข้อมูลเริ่มต้น 
    }
    /// Auto Update  





  }
])

.controller("JobViewSmisCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.job = {}; //ข้อมูลโครงการ job


    mySch.viewJobSmis($routeParams.Id).success(function(result) {
      $scope.job = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object << USO
    });


  }
])

.controller("JobViewIdCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.job = {}; //ข้อมูลโครงการ job


    mySch.viewJobId($routeParams.Id).success(function(result) {
      $scope.job = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object << USO
    });




  }
])


