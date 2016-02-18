//////////////////////////    USO  ////////////////////////////////////////        

app.controller("UsoListCtrl", ["$scope", "$location", "mySch",
  function($scope, $location, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  



    $scope.uso = {}; // กำหนด ตัวแปร object ที่เราจะไปเรียกใช้ ในหน้า list.html  
    // พอแสดงหน้า list.html ให้ เรียกใช้งาน ฟังก์ชั่น ใน myFriend service ที่เราสร้าง  
    mySch.viewUso('').success(function(result) { // ดึงข้อมูลสำเร็จ ส่งกลับมา   << USO
      $scope.uso = result; // เอาค่าข้อมูลที่ได้ กำหนดให้กับ ตัวแปร object  
    });

    $scope.predicate = "uso_city"; // อันนี้กำหนดค่า สำหรับการเรียงข้อมูลเริ่มต้น ในตารางไฟล์ list.html  
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

.controller("UsoViewCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.uso = {};

    // เรียกใช้งาน ฟังก์ชั่น viewSch โดยส่งค่า Id ของข้อมูลไปด้วย  
    // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย  
    mySch.viewUso($routeParams.Id).success(function(result) {
      $scope.uso = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object << USO
    });




  }
])

.controller("UsoEditCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object เพื่อใช้งานในหน้าแก้ไข ชื่อต้องเหมือนกับชื่อ instance อ้างอิงที่เราใช้งาน  
    $scope.data = {};
    // เรียกใช้งาน ฟังก์ชั่น viewUSO โดยส่งค่า Id ของข้อมูลไปด้วย  
    // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย      
    mySch.viewUso($routeParams.Id).success(function(result) {
      // เนื่องจากหน้า แก้ไขเราใช้ไฟล์ เดียวกับตอนเพิ่มข้อมูล  
      // ดังนั้นการส่งค่ากลับไปแบบ ใน ViewCtrl จะทำไม่ได้ เราจะใช้วิธี  
      // ส่งค่าแบบกำหนดค่า object แต่ละตัวแทนเอา โดยผลลัพธ์ของข้อมูล  
      // ที่ส่งกลับมาจะมี index id = 0 การเรียกใช้จึงเป็น result[0].id แบบนี้เป็นต้น  
      $scope.data.uso_smis = result[0].uso_smis;

      $scope.data.uso_teacher = result[0].uso_teacher;
      $scope.data.uso_tea_mobile = result[0].uso_tea_mobile;

      $scope.data.uso_server = result[0].uso_server;
      $scope.data.uso_server_mo = result[0].uso_server_mo;
      $scope.data.uso_server_stat = result[0].uso_server_stat;

      $scope.data.uso_pc0 = result[0].uso_pc0;
      $scope.data.uso_pc0_mo = result[0].uso_pc0_mo;
      $scope.data.uso_pc0_stat = result[0].uso_pc0_stat;

      $scope.data.uso_pc1 = result[0].uso_pc1;
      $scope.data.uso_pc1_mo = result[0].uso_pc1_mo;
      $scope.data.uso_pc1_stat = result[0].uso_pc1_stat;

      $scope.data.uso_pc2 = result[0].uso_pc2;
      $scope.data.uso_pc2_mo = result[0].uso_pc2_mo;
      $scope.data.uso_pc2_stat = result[0].uso_pc2_stat;

      $scope.data.uso_pc3 = result[0].uso_pc3;
      $scope.data.uso_pc3_mo = result[0].uso_pc3_mo;
      $scope.data.uso_pc3_stat = result[0].uso_pc3_stat;

      $scope.data.uso_pc4 = result[0].uso_pc4;
      $scope.data.uso_pc4_mo = result[0].uso_pc4_mo;
      $scope.data.uso_pc4_stat = result[0].uso_pc4_stat;

      $scope.data.uso_pc5 = result[0].uso_pc5;
      $scope.data.uso_pc5_mo = result[0].uso_pc5_mo;
      $scope.data.uso_pc5_stat = result[0].uso_pc5_stat;

      $scope.data.uso_pc6 = result[0].uso_pc6;
      $scope.data.uso_pc6_mo = result[0].uso_pc6_mo;
      $scope.data.uso_pc6_stat = result[0].uso_pc6_stat;

      $scope.data.uso_pc7 = result[0].uso_pc7;
      $scope.data.uso_pc7_mo = result[0].uso_pc7_mo;
      $scope.data.uso_pc7_stat = result[0].uso_pc7_stat;

      $scope.data.uso_pc8 = result[0].uso_pc8;
      $scope.data.uso_pc8_mo = result[0].uso_pc8_mo;
      $scope.data.uso_pc8_stat = result[0].uso_pc8_stat;

      $scope.data.uso_pc9 = result[0].uso_pc9;
      $scope.data.uso_pc9_mo = result[0].uso_pc9_mo;
      $scope.data.uso_pc9_stat = result[0].uso_pc9_stat;

      $scope.data.uso_pc10 = result[0].uso_pc10;
      $scope.data.uso_pc10_mo = result[0].uso_pc10_mo;
      $scope.data.uso_pc10_stat = result[0].uso_pc10_stat;

      $scope.data.uso_ups1 = result[0].uso_ups1;
      $scope.data.uso_ups1_stat = result[0].uso_ups1_stat;

      $scope.data.uso_ups6 = result[0].uso_ups6;
      $scope.data.uso_ups6_stat = result[0].uso_ups6_stat;

      $scope.data.uso_printer = result[0].uso_printer;
      $scope.data.uso_printer_stat = result[0].uso_printer_stat;

      $scope.data.uso_projector = result[0].uso_projector;
      $scope.data.uso_projector_stat = result[0].uso_projector_stat;

      $scope.data.uso_dvd = result[0].uso_dvd;
      $scope.data.uso_dvd_stat = result[0].uso_dvd_stat;

      $scope.data.uso_lcd = result[0].uso_lcd;
      $scope.data.uso_lcd_stat = result[0].uso_lcd_stat;

      $scope.data.uso_rev = result[0].uso_rev;
      $scope.data.uso_rev_stat = result[0].uso_rev_stat;

      $scope.data.uso_air1 = result[0].uso_air1;
      $scope.data.uso_air1_stat = result[0].uso_air1_stat;

      $scope.data.uso_air2 = result[0].uso_air2;
      $scope.data.uso_air2_stat = result[0].uso_air2_stat;

      $scope.data.uso_update = result[0].uso_update;


      // เมื่อรับค่าจากการไปดึงข้อมูลส่วนที่ต้องการมาแก้ไข แล้ว ตัวแปรเหล่านี้  
      // ก็จะไปแสดงในหน้าแก้ไข  

    });

    //    สร้างฟังก์ชั่น รับค่าการบันทึกข้อมูล  
    //    เมื่อคลิกที่ปุ่ม save โดยใช้ฟังก์ชั่น submitForm โดยส่งค่า object instance ข้อมูลฟอร์มเข้ามาด้วย  
    $scope.submitUsoForm = function(objSch) {
      if ($scope.myUsoForm.$valid) { // ตรวจสอบข้อมูลฟอร์ม ถูกต้องหรือไม่  
        // เรียกใช้งานฟังก์ชั่น updateFriend ใน myFriend service เพื่ออัพเดทข้อมูล  
        // โดยจะมีการส่งค่า object ข้อมูล และ  Id ของข้อมูล เพื่ออ้างอิง ไปทำการแก้ไข ด้วย  
        mySch.updateUso(objSch, $routeParams.Id).success(function() {
          // เมื่อแก้ไขข้อมูลสำหรับ ล้างค่าตัวแปร object ที่เราสร้าง  
          $scope.data = null;
          //                ลิ้งค์ไปหน้า รายการที่เราแก้ไข เพื่อดูข้อมูลว่า แก้ไขเรียบร้อยถูกต้องไหม 
          //$location.path("#/uso_view/"+$routeParams.Id);
        });
      }

    };

    // ในหน้าแก้ไขข้อมูล จะพบว่า เรามีปุ่มลบ ปุ่มนี้จะแสดงเมื่อมีการแก้ไขข้อมูล หรือมีการส่งค่า  
    // Id ข้อมูลที่ต้องการแก้ไข เข้าไปด้วย การลบข้อมูลไม่มีอะไร เหมือนกับ การลข้อมูลในหน้า  
    // ลิสรายการ ตามโค้ดด้านบน ที่เคยอธิบายแล้ว บรรทัดส่วนนี้ขอไม่่อธิบายเพิ่ม  
    $scope.deleteUsoData = function(Id) {
      if (confirm("Confirm delete?")) {
        mySch.deleteSch(Id).success(function() {
          $scope.data = null;
          $location.path("#/uso_view/" + $routeParams.Id);
        });
      }
    };


  }
])




.controller("UsoJobCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.uso = {};
    $scope.job = $routeParams.Job;


    // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย  
    mySch.viewUso($routeParams.Id).success(function(result) {
      $scope.uso = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object 

    });


    //// ส่วนของการ Update
       $scope.submitUso = function(objSch) {

        mySch.updateUso(objSch, $routeParams.Id)
     

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