//////////////////////////    AP  ////////////////////////////////////////      
app.controller("ApListCtrl", ["$scope", "$location", "mySch",
  function($scope, $location, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  

    $scope.ap = {}; // กำหนด ตัวแปร object ที่เราจะไปเรียกใช้ ในหน้า list.html  
    // พอแสดงหน้า list.html ให้ เรียกใช้งาน ฟังก์ชั่น ใน myFriend service ที่เราสร้าง  
    mySch.viewAp('').success(function(result) { // ดึงข้อมูลสำเร็จ ส่งกลับมา   << USO
      $scope.ap = result; // เอาค่าข้อมูลที่ได้ กำหนดให้กับ ตัวแปร object  
    });

    $scope.predicate = "ap_smis"; // อันนี้กำหนดค่า สำหรับการเรียงข้อมูลเริ่มต้น ในตารางไฟล์ list.html  
    // เรียงข้อมูลจาก ap_smis

  }
])

.controller("ApListAPCtrl", ["$scope", "$location", "mySch",
  function($scope, $location, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  

    $scope.ap = {}; // กำหนด ตัวแปร object ที่เราจะไปเรียกใช้ ในหน้า list.html  
    // พอแสดงหน้า list.html ให้ เรียกใช้งาน ฟังก์ชั่น ใน myFriend service ที่เราสร้าง  
    mySch.ApviewAp('').success(function(result) { // ดึงข้อมูลสำเร็จ ส่งกลับมา   << 
      $scope.ap = result; // เอาค่าข้อมูลที่ได้ กำหนดให้กับ ตัวแปร object  
    });

    $scope.predicate = "de_smis"; // อันนี้กำหนดค่า สำหรับการเรียงข้อมูลเริ่มต้น ในตารางไฟล์ list.html  
    // เรียงข้อมูลจาก id  

    // กำหนดฟังก์ชัน ลบข้อมูล จากที่เรียกใช้ในหน้า template list.html  


  }
])

.controller("ApViewCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.ap = {};
    $scope.job = {};

    // เรียกใช้งาน ฟังก์ชั่น viewSch โดยส่งค่า Id ของข้อมูลไปด้วย  
    // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย  
    mySch.viewAp($routeParams.Id).success(function(result) {
      $scope.ap = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object << USO
    });

    mySch.viewJob('').success(function(result) { // ดึงข้อมูลสำเร็จ ส่งกลับมา   << USO
      $scope.job = result; // เอาค่าข้อมูลที่ได้ กำหนดให้กับ ตัวแปร object  
    });


  }
])

.controller("ApMaCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.ap = {};


    // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย  
    mySch.viewAp($routeParams.Id).success(function(result) {
      $scope.ap = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object 

    });


    //// ส่วนของการ Update ค่าใน Table AP
    $scope.submitmyApMaForm = function(objSch) {

      // เรียกใช้งานฟังก์ชั่น updateFriend ใน myFriend service เพื่ออัพเดทข้อมูล  
      // โดยจะมีการส่งค่า object ข้อมูล และ  Id ของข้อมูล เพื่ออ้างอิง ไปทำการแก้ไข ด้วย  
      mySch.updateAp(objSch, $routeParams.Id).success(function() {
        // เมื่อแก้ไขข้อมูลสำหรับ ล้างค่าตัวแปร object ที่เราสร้าง  
        $scope.data = null;

      });


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

.controller("ApAddCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนด ฟังก์ชั่น สำหรับรับค่า การ submit ฟอร์ม โดยส่ง object data เข้ามาด้วย  
    $scope.data = {};
    $scope.backto = $routeParams.Back;
    $scope.data.de_smis = $routeParams.Id;

    $scope.submitApAddForm = function(objSch) {
      mySch.addAp(objSch).success(function() {
        // หากทำการบันทึกข้อมูลสำเร็จ  
        $scope.ApForm.$setPristine(); // ล้างค่าข้อมูลในฟอร์ม พร้อมบันทึกใหม่  
        //  $scope.data = null; // ให้ object ชื่อ data เป็นค่าว่าง รอรับข้อมูลใหม่  
      });
    };



  }
])

    
.controller("ApPrintCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนด ฟังก์ชั่น สำหรับรับค่า การ submit ฟอร์ม โดยส่ง object data เข้ามาด้วย  
    $scope.sch = {}; //ข้อมูลโครงการ AP
    $scope.ap = {}; //ข้อมูลโครงการ 
    $scope.job = {}; //ข้อมูลโครงการ 
    $scope.pics = {}; //ข้อมูลโครงการ 


    mySch.viewSch($routeParams.Id).success(function(result) {
      $scope.sch = result; // 
    });

    mySch.viewAp($routeParams.Id).success(function(result) {
      $scope.ap = result; // 
    });

    mySch.viewJobSmis($routeParams.Id).success(function(result) {
      $scope.job = result; // 
    });




  }
])

.controller("ApEditApCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object เพื่อใช้งานในหน้าแก้ไข ชื่อต้องเหมือนกับชื่อ instance อ้างอิงที่เราใช้งาน  
    $scope.data = {};
    $scope.img = {};
    
    //  กำหนด เอาไว้ส่งตัวแปรว่าจะให้กลับไปหน้าไหน
    $scope.backto = $routeParams.Back;
    
    

    mySch.viewDeSn($routeParams.Id).success(function(result) {
      // เนื่องจากหน้า แก้ไขเราใช้ไฟล์ เดียวกับตอนเพิ่มข้อมูล  
      // ดังนั้นการส่งค่ากลับไปแบบ ใน ViewCtrl จะทำไม่ได้ เราจะใช้วิธี  
      // ส่งค่าแบบกำหนดค่า object แต่ละตัวแทนเอา โดยผลลัพธ์ของข้อมูล  
      // ที่ส่งกลับมาจะมี index id = 0 การเรียกใช้จึงเป็น result[0].id แบบนี้เป็นต้น  


      $scope.data.de_sn = result[0].de_sn;
      $scope.data.de_name = result[0].de_name;
      $scope.data.de_project = result[0].de_project;
      $scope.data.de_type = result[0].de_type;
      $scope.data.de_stat = result[0].de_stat;
      $scope.data.de_smis = result[0].de_smis;
      $scope.data.de_warranty_end = result[0].de_warranty_end;
      $scope.data.de_note = result[0].de_note;
      $scope.data.de_pic = result[0].de_pic;

    });

    
     mySch.viewImgSn($routeParams.Id).success(function(result) {
      $scope.img = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object 

    });
    
    
    
    //    สร้างฟังก์ชั่น รับค่าการบันทึกข้อมูล  
    //    เมื่อคลิกที่ปุ่ม save โดยใช้ฟังก์ชั่น submitForm โดยส่งค่า object instance ข้อมูลฟอร์มเข้ามาด้วย  
    $scope.submitApAddForm = function(objSch) {
      if ($scope.ApForm.$valid) { // ตรวจสอบข้อมูลฟอร์ม ถูกต้องหรือไม่  
        // เรียกใช้งานฟังก์ชั่น updateFriend ใน myFriend service เพื่ออัพเดทข้อมูล  
        // โดยจะมีการส่งค่า object ข้อมูล และ  Id ของข้อมูล เพื่ออ้างอิง ไปทำการแก้ไข ด้วย  
        mySch.updateDeSn(objSch, $routeParams.Id).success(function() {
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


  }
])



.controller("ApJobCtrl", ["$scope", "$location", "$routeParams", "mySch",
  function($scope, $location, $routeParams, mySch) { // กำหนดตรงนี้ด้วย แต่ไม่ต้องมี ""  
    // กำหนดตัวแปร object สำหรับไว้ส่งค่าไปแสดงในหน้า view.html  
    $scope.ap = {};
    $scope.job = $routeParams.Job;


    // ฟังก์ชั่นนี้ เราไม่ต้องสร้างเพิ่ม ใช้ตัวเดียวกันกับ ตอนลิสรายการ แต่กรณีนี้มีการส่ง Id ไปด้วย  
    mySch.viewAp($routeParams.Id).success(function(result) {
      $scope.ap = result; // เมื่อมีกาาคืนค่า ก็ให้เขาข้อมูลที่ได้มาไว้ในตัวแปร object 

    });


    //// ส่วนของการ Update
    $scope.submitmyApMaForm = function(objSch) {

      // เรียกใช้งานฟังก์ชั่น updateFriend ใน myFriend service เพื่ออัพเดทข้อมูล  
      // โดยจะมีการส่งค่า object ข้อมูล และ  Id ของข้อมูล เพื่ออ้างอิง ไปทำการแก้ไข ด้วย  
      mySch.updateAp(objSch, $routeParams.Id).success(function() {
        // เมื่อแก้ไขข้อมูลสำหรับ ล้างค่าตัวแปร object ที่เราสร้าง  
        $scope.data = null;

      });


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