  app.controller("ListCtrl", ["$scope", "$location", "mySch",
    function($scope, $location, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  

      $scope.sch = {}; // กำหนด ตัวแปร object ที่เราจะไปเรียกใช้ ในหน้า list.html  
      // พอแสดงหน้า list.html ให้ เรียกใช้งาน ฟังก์ชั่น ใน myFriend service ที่เราสร้าง  
      mySch.viewSch('').success(function(result) { // ดึงข้อมูลสำเร็จ ส่งกลับมา  
        $scope.sch = result; // เอาค่าข้อมูลที่ได้ กำหนดให้กับ ตัวแปร object  
      });

      $scope.predicate = "smis"; // อันนี้กำหนดค่า สำหรับการเรียงข้อมูลเริ่มต้น ในตารางไฟล์ list.html  
      // เรียงข้อมูลจาก id  

      // กำหนดฟังก์ชัน ลบข้อมูล จากที่เรียกใช้ในหน้า template list.html  
      $scope.deleteData = function(Id) { // ส่ง Id เข้ามา  
        if (confirm("Confirm delete?")) { // ขึ้นแจ้งยืนยันการลบก่อน  
          // ถ้ายืนยันการลบข้อมูลแล้ว ให้เรยกใช้งาน mySch service ที่เราสร้าง เพื่อลบข้อมูล  
          mySch.deleteSch(Id).success(function() { // ถ้า ok ลบข้อมูล  
            $location.path("#/"); // ลบแล้วให้รีเฟรส  
          });
        }
      };

    }
  ])
  //  เมื่อมาที่หน้า เพิ่มข้อมูล ทำให้มีการสร้าง CreateCtrl controller ขึ้น  
  // มีการ inject หรือใช้งาน $scope , $location (คล้าย window.location) และ myFriend service ที่เราสร้าง  
  .controller("CreateCtrl", ["$scope", "$location", "mySch",
    function($scope, $location, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
      // กำหนด ฟังก์ชั่น สำหรับรับค่า การ submit ฟอร์ม โดยส่ง object data เข้ามาด้วย  
      $scope.submitForm = function(objSch) {
        if ($scope.myForm.$valid) { // ตรวจสอบฟอร์ม หากพร้อมให้ทำงาน  
          // เรียกใช้งาน ฟังก์ชั่น ใน myFriend service ที่เราสร้าง ชื่อ addFriend  
          // โดยจะส่งข้อมูล object เข้าไป  
          mySch.addSch(objSch).success(function() {
            // หากทำการบันทึกข้อมูลสำเร็จ  
            $scope.myForm.$setPristine(); // ล้างค่าข้อมูลในฟอร์ม พร้อมบันทึกใหม่  
            $scope.data = null; // ให้ object ชื่อ data เป็นค่าว่าง รอรับข้อมูลใหม่  
          });
        }
      };

    }
  ])
  // เมื่อมาที่หน้า แสดงข้อมูล จะมีการสร้าง ViewCtrl controller จากค่าการ config ด้านบน  
  // เมื่อมีการคลิก เข้ามาหน้าแสดงข้อมูล จะมีการส่งค่า Id ของข้อมูลเข้ามาด้วย  
  // inject หรือเรียกใช้ $scope $location $routeParams และก็ myFriend service ที่เราสร้าง  
  .controller("ViewCtrl", ["$scope", "$location", "$routeParams", "mySch",
    function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
      // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
      $scope.sch = {};
      // เรียกใช้งาน ฟังก์ชั่น viewSch โดยส่งค่า Id ของข้อมูลไปด้วย  
      // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย  
      mySch.viewSch($routeParams.Id).success(function(result) {
        $scope.sch = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object  
      });
    }
  ])
  // เมื่อมาที่หน้า แก้ไข จะมีการสร้าง EditCtrl controller จากค่าการ config ด้านบน  
  // เมื่อมีการคลิก เข้ามาหน้าแก้ไขข้อมูล จะมีการส่งค่า Id ของข้อมูลเข้ามาด้วย  
  // หรือเรียกใช้ $scope $location $routeParams และก็ myFriend service ที่เราสร้าง  
  .controller("EditCtrl", ["$scope", "$location", "$routeParams", "mySch",
    function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
      // กำหนดตัวแปร object เพื่อใช้งานในหน้าแก้ไข ชื่อต้องเหมือนกับชื่อ instance อ้างอิงที่เราใช้งาน  
      $scope.data = {};
      // เรียกใช้งาน ฟังก์ชั่น viewSch โดยส่งค่า Id ของข้อมูลไปด้วย  
      // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย      
      mySch.viewSch($routeParams.Id).success(function(result) {
        // เนื่องจากหน้า แก้ไขเราใช้ไฟล์ เดียวกับตอนเพิ่มข้อมูล  
        // ดังนั้นการส่งค่ากลับไปแบบ ใน ViewCtrl จะทำไม่ได้ เราจะใช้วิธี  
        // ส่งค่าแบบกำหนดค่า object แต่ละตัวแทนเอา โดยผลลัพธ์ของข้อมูล  
        // ที่ส่งกลับมาจะมี index id = 0 การเรียกใช้จึงเป็น result[0].id แบบนี้เป็นต้น  
        $scope.data.smis = result[0].smis;
        $scope.data.name = result[0].name;
        $scope.data.tel = result[0].tel;
        $scope.data.address = result[0].address;
        // เมื่อรับค่าจากการไปดึงข้อมูลส่วนที่ต้องการมาแก้ไข แล้ว ตัวแปรเหล่านี้  
        // ก็จะไปแสดงในหน้าแก้ไข  

      });

      //    สร้างฟังก์ชั่น รับค่าการบันทึกข้อมูล  
      //    เมื่อคลิกที่ปุ่ม save โดยใช้ฟังก์ชั่น submitForm โดยส่งค่า object instance ข้อมูลฟอร์มเข้ามาด้วย  
      $scope.submitForm = function(objSch) {
        if ($scope.myForm.$valid) { // ตรวจสอบข้อมูลฟอร์ม ถูกต้องหรือไม่  
          // เรียกใช้งานฟังก์ชั่น updateFriend ใน myFriend service เพื่ออัพเดทข้อมูล  
          // โดยจะมีการส่งค่า object ข้อมูล และ  Id ของข้อมูล เพื่ออ้างอิง ไปทำการแก้ไข ด้วย  
          mySch.updateSch(objSch, $routeParams.Id).success(function() {
            // เมื่อแก้ไขข้อมูลสำหรับ ล้างค่าตัวแปร object ที่เราสร้าง  
            $scope.data = null;
            //                ลิ้งค์ไปหน้า รายการที่เราแก้ไข เพื่อดูข้อมูลว่า แก้ไขเรียบร้อยถูกต้องไหม  
            $location.path("/view/" + $routeParams.Id);
          });
        }
      };

      // ในหน้าแก้ไขข้อมูล จะพบว่า เรามีปุ่มลบ ปุ่มนี้จะแสดงเมื่อมีการแก้ไขข้อมูล หรือมีการส่งค่า  
      // Id ข้อมูลที่ต้องการแก้ไข เข้าไปด้วย การลบข้อมูลไม่มีอะไร เหมือนกับ การลข้อมูลในหน้า  
      // ลิสรายการ ตามโค้ดด้านบน ที่เคยอธิบายแล้ว บรรทัดส่วนนี้ขอไม่่อธิบายเพิ่ม  
      $scope.deleteData = function(Id) {
        if (confirm("Confirm delete?")) {
          mySch.deleteSch(Id).success(function() {
            $scope.data = null;
            $location.path("#/");
          });
        }
      };


    }
  ])
  // controller หน้า index.html หลัก  





////////////////////////////// ENDING CODE ///////////////////////////////////


.controller("appController", ["$scope",
  function($scope) {

  }
]);