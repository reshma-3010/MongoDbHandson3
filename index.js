const mongoose=require('mongoose');
const url='mongodb://127.0.0.1:27017/Human_Resource';
const Schema=mongoose.Schema;
const employeeSchema=new Schema({
   firstName:{
    type:String,
    required:true,
   },
   lastName:{
    type:String,
    required:true,
   },
   salary:{
    type:String,
    required:true,
   },
   department:{
    type:String,
    required:true,
   },
   lastCompany:{
    type:String,
    required:true,
   },
   lastSalary:{
    type:String,
    required:true,
   },
   overallExp:{
    type:String,
    required:true,
   },
   contactInfo:{
    type:String,
    required:true,
   },
   yearGrad:{
    type:String,
    required:true,
   },
   gradStream:{
    type:String,
    required:true,
   }

})

async function main(){
    console.log("connecting....")
    try{
        
        await mongoose.connect(url);
        console.log("connected......")
        const employeeModel=mongoose.model('employee',employeeSchema);
        const employee1=new employeeModel({
            "firstName": "John",
            "lastName": "Doe",
            "salary": "25000",
            "department": "HR",
            "lastCompany": "X",
            "lastSalary": "10000",
            "overallExp": "2",
            "contactInfo": "1234567890",
            "yearGrad": "2016",
            "gradStream": "CSE"
  
        })
        const employee2=new employeeModel({
            "firstName": "Rohan",
            "lastName": "Jame",
            "salary": "30000",
            "department": "Technical",
            "lastCompany": "Y",
            "lastSalary": "15000",
            "overallExp": "1",
            "contactInfo": "1234567860",
            "yearGrad": "2015",
            "gradStream": "CSE"
        })
        const employee3=new employeeModel({
       "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"

        })
        const employee4=new employeeModel({
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"


        })
        const employee5=new employeeModel({
        "firstName": "Jame",
        "lastName": "roh",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"

        })
        const employee6=new employeeModel({
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
            
        })
        const employee7=new employeeModel({
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"

        })
        const employee8=new employeeModel({
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"

        })
        const employee9=new employeeModel({
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"

        })
        const employee10=new employeeModel({
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"

        })
        const employee11=new employeeModel({
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"

        })
        const employee12=new employeeModel({
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
            
        })
        const employee13=new employeeModel({
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"

        })
      //Query the collection "employee" and list all the documents.
        const allDocuments=await employeeModel.insertMany([
            employee1,
            employee2,
            employee3,
            employee4,
            employee5,
            employee6,
            employee7,
            employee8,
            employee9,
            employee10,
            employee11,
            employee12,
            employee13
        ])
        console.log(allDocuments);
     
        //Query the collection "employee" and list all the employees who are having salary more than 30000

        const findsalary=await employeeModel.find({
            "salary":{$gt:30000}
        });
        console.log(findsalary);

        
     //Query the collection "employee" and list the employees who are having experience more that 2 years.
        const findExp=await employeeModel.find({
            "overallExp":{$gt:2}
        })
        console.log(findExp);

      //Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year.
        const findGradExp=await employeeModel.find({
            "yearGrad":{$gt:2015},"overallExp":{$gt:1}
        })
        console.log(findGradExp);
      
        //Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000
        const updatesalary=await employeeModel.updateMany(
            {"salary":{$gt:"70000"}},{$set:{"salary":"65000"}}
           
        )
        console.log(updatesalary);
     //Delete all the documents from "employee" where last company is Y
        const findlastComp=await employeeModel.deleteMany({
            "lastCompany":"Y"
        })
        console.log(findlastComp);
    }
    
    catch(error){
        console.log(error)
    }
    console.log("done");
}
main();