/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
// สร้าง module ชื่อ app และ inject ngRoute เข้าไป หมายถึง เรียกใช้งาน ngRoute service  
var app = angular.module("app", ["ngRoute"])


// กำหนดค่า url สำหรับเรียกไฟล์ php ด้านล่าง เป็นของ ที่ทดสอบ เปลี่ยนตามความเหมาะสม  
// โดยเรียก path ให้ถูกต้อง  
.value("urlData", "data/model.php") //http://localhost/obec_uso/data/model.php  //http://sp.prinnm.com/data/model.php
  // กำหนด object service ชื่อ myFriend   
  .factory("mySch", ["$http", "urlData", // inject ค่า $http กับ urlData ไปใช้งาน  
    function($http, urlData) { // กำหนดตรงนี้ด้วย  
      var factory = {}; // สร้างตัวแปร object  
      var loading_stat = "";

      // สร้างฟังก์ั่น ใน service myFriend ตัวนี้เป็น  
      // ฟังก์ชั่น สำหรับแสดงข้อมูล มีการส่งค่า id ไปด้วย โดยจะเป็นค่าว่างก็ได้  
      factory.viewSch = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?viewSch=&Id=" + Id); // คืนค่าข้อมูลกลับ  
      };

      // สร้างฟังก์ชั่น ใน service myFriend ตัวนี้เป็นฟังก์ชั่น  
      // สำหรับการอัพเดทข้อมูล มีการส่งค่าข้อมูลในฟอร์ม และ Id ของข้อมูลที่จะแก้ไขเข้ามาด้วย  
      factory.updateSch = function(objSch, Id) {
        // ใช้ http service ส่งค่าข้อมูลไปทำการแก้ไข และมีการส่งค่า get updateFriend กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.post(urlData + "?updateSch&Id=" + Id, objSch);
      };

      // สร้างฟังก์ั่น ใน service mySch ตัวนี้เป็น  
      // ฟังก์ชั่น บันทึกข้อมล ส่งค่าแบบ post ส่งค่า object ชุดข้อมูล objFriend  
      factory.addSch = function(objSch) {
        // ใช้ $http service ส่งค่าแบบ post   
        // และมีการส่งตัวแปรแบบ get ชื่อ addFriend ไปเป็นเงื่อนไขทำงานคำสั่ง เพิ่มข้อมูล  
        return $http.post(urlData + "?addSch", objSch);
      };

      // สร้างฟังก์ั่น ใน service myFriend ตัวนี้เป็น  
      // ฟังก์ชั่น ลบข้อมูล โดยส่งค่า Id เข้าไปทำการลบข้อมูล  
      factory.deleteSch = function(Id) {
        // ใช้ $http service ส่งค่าแบบ get   
        // และมีการส่งตัวแปรแบบ get ชื่อ deleteFriend  
        // กับ Id สำหรัลใย้ในการลบข้อมูล  
        return $http.get(urlData + "?deleteSch&Id=" + Id);
      };

      ////////////////////// AP ////////////////////////////
      factory.viewAp = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?viewAp=&Id=" + Id); // คืนค่าข้อมูลกลับ  
      };

      factory.ApviewAp = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?ApviewAp=&Id=" + Id); // คืนค่าข้อมูลกลับ  
      };

      factory.viewDeSn = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?viewDeSn=&Id=" + Id); // คืนค่าข้อมูลกลับ  
      };

      factory.maAp = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?maAp=&Id=" + Id);
      };

      factory.addAp = function(objSch) {
        return $http.post(urlData + "?addAp", objSch);
      };
      //     
      factory.updateAp = function(objSch, Id) {
        // ใช้ http service ส่งค่าข้อมูลไปทำการแก้ไข และมีการส่งค่า get updateFriend กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.post(urlData + "?updateAp&Id=" + Id, objSch);
      };

      factory.updateDeSn = function(objSch, Id) {
        // ใช้ http service ส่งค่าข้อมูลไปทำการแก้ไข และมีการส่งค่า get  กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.post(urlData + "?updateDeSn&Id=" + Id, objSch);
      };


      ////////////////////// E-Classroom ////////////////////////////
      factory.viewEcr = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?viewEcr=&Id=" + Id); // คืนค่าข้อมูลกลับ  
      };

      factory.updateEcr = function(objSch, Id) {
        // ใช้ http service ส่งค่าข้อมูลไปทำการแก้ไข และมีการส่งค่า get updateFriend กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.post(urlData + "?updateEcr&Id=" + Id, objSch);
      };


      ////////////////////// USO ////////////////////////////
      factory.viewUso = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?viewUso=&Id=" + Id); // คืนค่าข้อมูลกลับ  
      };

      factory.updateUso = function(objSch, Id) {
        // ใช้ http service ส่งค่าข้อมูลไปทำการแก้ไข และมีการส่งค่า get updateFriend กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.post(urlData + "?updateUso&Id=" + Id, objSch);
      };

      ////////////////////// SCH ////////////////////////////
      factory.viewSch = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?viewSch=&Id=" + Id); // คืนค่าข้อมูลกลับ  
      };
      
      
      ////////////////////// DEVICE ///////////////////////////
      
       factory.delDe = function(Id) {
        // ใช้ $http service ส่งค่าแบบ get   
        // และมีการส่งตัวแปรแบบ get ชื่อ deleteFriend  
        // กับ Id สำหรัลใย้ในการลบข้อมูล  
        return $http.get(urlData + "?delDe&Id=" + Id);
      };


      ////////////////////// Job ////////////////////////////
      factory.viewJobSmis = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?viewJobSmis=&Id=" + Id); // คืนค่าข้อมูลกลับ  
      };

      factory.viewJobId = function(Id) {
        // ใช้ $http service ไปดึงข้อมูลมาแสด ส่งค่า get viewSch กับ Id ที่เป็นตัวแปรไปด้วย  
        return $http.get(urlData + "?viewJobId=&Id=" + Id); // คืนค่าข้อมูลกลับ  
      };

      factory.addJob = function(objSch) {
        return $http.post(urlData + "?addJob", objSch);
      };

      
      ////////////////////// IMG ////////////////////////////
      
      factory.viewImgSn = function(Id) {
        return $http.get(urlData + "?viewImgSn=&Id=" + Id); // คืนค่าข้อมูลกลับ 
      };
      
       factory.addImg = function(objSch) {
        return $http.post(urlData + "?addImg", objSch);
      };
      

      //////////////////////////////////////////////////////


      factory.setLoading = function(getStat) {
        loading_stat = getStat;
      };
      factory.loading = function() {
        return loading_stat == "loading";
      };


      return factory; // คืนค่า object ไปให้ myFriend service  
    }
  ])
  // การ config ค่า provider service ในที่นี้เป็นการตั้งต่าการ  
  // ลิ้งค์ไปมาระหว่างไฟล์ ด้วย $routeProvider   
  .config(function($routeProvider) {
    $routeProvider
      .when('/', { // ถ้ามีค่าเท่ากับ  /   
        controller: 'JobListCtrl', // ให้กำหนด หรือสร้าง controller ชื่อ ListCtrl   
        templateUrl: 'tpl/job_list.html' // โดยดึงจากไฟล์ templage ชื่อ list.html  
      })
      .when('/view/:Id', { // เหมือนด้านบน แค่เปลี่ยนคำ  
        controller: 'ViewCtrl',
        templateUrl: 'tpl/view.html'
      })
      .when('/edit/:Id', {
        controller: 'EditCtrl',
        templateUrl: 'tpl/detail.html' //**
      })
      .when('/new', {
        controller: 'CreateCtrl',
        templateUrl: 'tpl/detail.html' //** test
      })

    ////////////// AP //////////////////////
    .when('/ap', {
      controller: 'ApListCtrl',
      templateUrl: 'tpl/ap_list.html' //** test
    })

    .when('/ap_listap', {
      controller: 'ApListAPCtrl',
      templateUrl: 'tpl/ap_listap.html'
    })

    .when('/ap_view/:Id', { // เหมือนด้านบน แค่เปลี่ยนคำ  
      controller: 'ApViewCtrl',
      templateUrl: 'tpl/ap_view.html'
    })

    .when('/ap_add/:Id/:Back', { // เหมือนด้านบน แค่เปลี่ยนคำ  
      controller: 'ApAddCtrl',
      templateUrl: 'tpl/ap_add.html'
    })

    .when('/ap_ma/:Id', { // ตัวแทนเข้า
      controller: 'ApMaCtrl',
      templateUrl: 'tpl/ap_ma.html'
    })
    
    .when('/ap_job/:Job/:Id', { // ตัวแทนเข้า
      controller: 'ApJobCtrl',
      templateUrl: 'tpl/ap_job.html'
    })

    .when('/ap_edit/:Id/:Back', {
      controller: 'ApEditApCtrl',
      templateUrl: 'tpl/ap_add.html' //**
    })

    .when('/ap_upload', {
      controller: '',
      templateUrl: 'tpl/ap_upload.html' //**
    })
    
     .when('/ap_print/:Id', { // ตัวแทนเข้า
      controller: 'ApPrintCtrl',
      templateUrl: 'tpl/ap_print.html'
    })


    ////////////// E-Class //////////////////////
    .when('/ecr', {
      controller: 'EcrListCtrl',
      templateUrl: 'tpl/ecr_list.html' //** test
    })

    .when('/ecr_edit/:Id', {
      controller: 'EcrEditCtrl',
      templateUrl: 'tpl/ecr_detail.html' //**
    })

    .when('/ecr_view/:Id', { // เหมือนด้านบน แค่เปลี่ยนคำ  
      controller: 'EcrViewCtrl',
      templateUrl: 'tpl/ecr_view.html'
    })
    
      .when('/ecr_job/:Job/:Id', { // ตัวแทนเข้า
      controller: 'EcrJobCtrl',
      templateUrl: 'tpl/ecr_job.html'
    })


    ////////////// USO //////////////////////

    .when('/uso', {
      controller: 'UsoListCtrl',
      templateUrl: 'tpl/uso_list.html' //** test
    })

    .when('/uso_view/:Id', { // เหมือนด้านบน แค่เปลี่ยนคำ  
      controller: 'UsoViewCtrl',
      templateUrl: 'tpl/uso_view.html'
    })

    .when('/uso_edit/:Id', {
      controller: 'UsoEditCtrl',
      templateUrl: 'tpl/uso_detail.html' //**
    })

    .when('/print/uso/:Id', {
      controller: 'UsoViewCtrl',
      templateUrl: '../print/uso.html' //**
    })
    
    .when('/uso_job/:Job/:Id', { // ตัวแทนเข้า
      controller: 'UsoJobCtrl',
      templateUrl: 'tpl/uso_job.html'
    })


    ////////////  SCH View ////////////////////
    .when('/sch_view/:Id', { // เหมือนด้านบน แค่เปลี่ยนคำ  
      controller: 'SchViewCtrl',
      templateUrl: 'tpl/sch_view.html'
    })

    ////////////// JOB //////////////////////

    .when('/job', {
      controller: 'JobListCtrl',
      templateUrl: 'tpl/job_list.html' //** test
    })

    .when('/job_viewSmis/:Id/', {
      controller: 'JobViewSmisCtrl',
      //       templateUrl:''  //** test
    })

    .when('/job_viewId/:Id/', {
      controller: 'JobViewIdCtrl',
      templateUrl: 'tpl/job_view.html' //** test
    })

    //////////////////Upload Image////////////////////////  
    .when('/image_upload/:Type/:Id', {
      controller: 'imageUploadCtrl',
      templateUrl: 'tpl/image_upload.html' //** test
    })


      .otherwise({ // กรณีอื่นๆ ที่่ไม่เข้าเงื่อนไข  
        redirectTo:'/' // ให้ไปที่ ค่า /  
      });  
    
    
  }) /// END ROUTE //
  