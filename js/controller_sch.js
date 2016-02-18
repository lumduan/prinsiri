//////////////////////////    SCH  ////////////////////////////////////////  
app.controller("SchViewCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.sch = {}; //ข้อมูลโครงการ AP
    $scope.ap = {}; //ข้อมูลโครงการ AP
    $scope.uso = {}; //ข้อมูลโครงการ USO
    $scope.ecr = {}; //ข้อมูลโครงการ E-Classroom
    $scope.job = {}; //ข้อมูลโครงการ job


    mySch.viewSch($routeParams.Id).success(function(result) {
      $scope.sch = result; // 
    });

    mySch.viewAp($routeParams.Id).success(function(result) {
      $scope.ap = result; // 
    });

    mySch.viewEcr($routeParams.Id).success(function(result) {
      $scope.ecr = result; // 
    });

    mySch.viewUso($routeParams.Id).success(function(result) {
      $scope.uso = result; // 
    });

    mySch.viewJobSmis($routeParams.Id).success(function(result) {
      $scope.job = result; // 
    });


    $scope.predicate = "-job_date_add";

    $scope.delDe = function(Id) {
      if (confirm("ลบ! แน่ใจ ??")) {
        mySch.delDe(Id).success(function() {

          //             สั่งให้ Refresh ข้อมูล
          mySch.viewAp($routeParams.Id).success(function(result) {
            $scope.ap = result; // 
          });
        });
      }
    };



  }
])