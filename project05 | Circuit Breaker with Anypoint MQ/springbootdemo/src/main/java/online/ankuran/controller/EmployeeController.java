package online.ankuran.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import online.ankuran.model.Employee;

@RestController
public class EmployeeController {
	
	@RequestMapping("/getEmployees")
    public List<Employee> getEmployees() 
    {
		List<Employee> employeesList = new ArrayList<Employee>();
		employeesList.add(new Employee(1,"Ankur","Bhuyan","ankur.bhuyan@ankuran.online"));
		employeesList.add(new Employee(2,"Ankur2","Bhuyan2","ankur.bhuyan2@ankuran.online"));
		return employeesList;
    }

}
