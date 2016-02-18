/////////////////////////////// Image  ////////////////////////////////////////////

app.controller("imageUploadCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) {

    $scope.de = {};
    $scope.img = {};
    $scope.imgType = $routeParams.Type;


    mySch.viewDeSn($routeParams.Id).success(function(result) {
      $scope.de = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object 
    });


    //// ส่วนของการ Update De และ Add Img
    $scope.submitmyImage = function(objSch) {

      // เรียกใช้งานฟังก์ชั่น updateDeSN เพื่อส่ง Path รุปลงไป
      mySch.updateDeSn(objSch, $routeParams.Id)

      //       เรียกใช้งาน Function เพิ่มข้อมูลรุปที่ ADD ลงใน DB IMG
      mySch.addImg(objSch)

      $scope.data = null;
    };


  }
])