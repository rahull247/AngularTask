import { Component, OnInit } from '@angular/core';
import { Student } from '../module/student';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent  {

    studentId:number=0;
    studentName:string="";
    studentDepartment:string="";
    studentAge:number=0;
    studentClass:number=0;
    isstudentIdDisabled=false;
    deleteImage:string="";
    selectImage:string="";
    public studentArray:Student[]=[];

    constructor(){
      this.deleteImage="/assets/images/delete.png";
      this.selectImage="/assets/images/edit.png";
    }
    getStudent()
    {
      this.studentArray =
      [
        {studentId : 10, studentName : "Rahul",  studentDepartment :  "Science", studentAge: 18,  studentClass: 12} ,
        {studentId : 20, studentName : "Akash",  studentDepartment :  "Commerce", studentAge: 17, studentClass: 12},
        {studentId : 30, studentName : "Suresh",  studentDepartment :  "Commerce", studentAge: 17, studentClass: 12},
        {studentId : 40, studentName : "Ramesh",  studentDepartment :  "Arts", studentAge: 18, studentClass: 12}
      ];

    }


    addStudent(){  
      
      if(this.checkValue(this.studentId, this.studentArray)){
         alert("Already Id Present");
      }else{
        let studentObj:any = new Student();
        studentObj.studentId = this.studentId;
        studentObj.studentName = this.studentName;
        studentObj.studentDepartment = this.studentDepartment;
        studentObj.studentAge = this.studentAge;
        studentObj.studentClass = this.studentClass;
        this.clearFields();

        this.studentArray.push(studentObj);
      }
    }

    selectStudent(studentId:number){
      let studentObj:any = this.studentArray.find(x => x.studentId == studentId );
     this.studentId =   studentObj.studentId;
     this.studentName  =   studentObj.studentName;
     this.studentDepartment    =   studentObj.studentDepartment;
     this.studentAge =  studentObj.studentAge;
     this.studentClass =  studentObj.studentClass;
     this.isstudentIdDisabled = true;
   }


    updateStudent(){
      let index:number = this.studentArray.findIndex(x => x.studentId == this.studentId );
      this.studentArray[index].studentName = this.studentName;
      this.studentArray[index].studentDepartment = this.studentDepartment;
      this.studentArray[index].studentAge = this.studentAge;
      this.studentArray[index].studentClass = this.studentClass;
      this.clearFields();
    }



    deletStudent(studentId:number){
      let index:number = this.studentArray.findIndex(x => x.studentId == studentId );
      this.studentArray.splice(index, 1);
    }

    
    clearFields(){
      this.isstudentIdDisabled = false;
      this.studentId = 0;
      this.studentName  = "";
      this.studentDepartment  = "";
      this.studentAge = 0;
    this.studentClass = 0;
  }

 checkValue(value:number, arr:Student[]) :boolean {
    let status:boolean = false;

    for (var i = 0; i < arr.length; i++) {
        var id = arr[i].studentId;
        if (id == value) {
            status = true;
            break;
        }
    }

    return status;
}
}
