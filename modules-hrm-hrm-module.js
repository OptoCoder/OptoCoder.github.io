(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-hrm-hrm-module"],{

/***/ "nQfq":
/*!*******************************************!*\
  !*** ./src/app/modules/hrm/hrm.module.ts ***!
  \*******************************************/
/*! exports provided: HrmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrmModule", function() { return HrmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _hrm_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hrm-routing.module */ "JTDK");
/* harmony import */ var _employee_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee/employee-list/employee-list.component */ "Co+8");
/* harmony import */ var _employee_attendance_employee_attendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-attendance/employee-attendance.component */ "ntkV");
/* harmony import */ var _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee/employee.component */ "IfYR");
/* harmony import */ var _employee_attendance_employee_attendance_list_employee_attendance_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employee-attendance/employee-attendance-list/employee-attendance-list.component */ "3WnT");
/* harmony import */ var _employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-salary/employee-salary.component */ "6I+j");
/* harmony import */ var _employee_salary_employee_salary_list_employee_salary_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employee-salary/employee-salary-list/employee-salary-list.component */ "zI5b");
/* harmony import */ var _common_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common.module */ "VEwP");
/* harmony import */ var _employee_attendance_create_employee_attendance_create_employee_attendance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee-attendance/create-employee-attendance/create-employee-attendance.component */ "OGeJ");
/* harmony import */ var _employee_project_employee_project_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee-project/employee-project.component */ "4nOB");
/* harmony import */ var _employee_project_employee_project_list_employee_project_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employee-project/employee-project-list/employee-project-list.component */ "yuZX");
/* harmony import */ var _employee_project_create_employee_project_create_employee_project_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./employee-project/create-employee-project/create-employee-project.component */ "qu6Z");
/* harmony import */ var _employee_salary_create_employee_salary_create_employee_salary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./employee-salary/create-employee-salary/create-employee-salary.component */ "Iy55");
/* harmony import */ var _employee_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./employee/create-employee/create-employee.component */ "xydM");
/* harmony import */ var _employee_leave_employee_leave_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employee-leave/employee-leave.component */ "i93R");
/* harmony import */ var _employee_leave_create_employee_leave_create_employee_leave_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./employee-leave/create-employee-leave/create-employee-leave.component */ "C1Pq");
/* harmony import */ var _employee_leave_employee_leave_list_employee_leave_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./employee-leave/employee-leave-list/employee-leave-list.component */ "rCvm");
/* harmony import */ var _employee_loan_employee_loan_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./employee-loan/employee-loan.component */ "XY09");
/* harmony import */ var _employee_loan_create_employee_loan_create_employee_loan_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./employee-loan/create-employee-loan/create-employee-loan.component */ "PXwg");
/* harmony import */ var _employee_loan_employee_loan_list_employee_loan_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./employee-loan/employee-loan-list/employee-loan-list.component */ "7xzB");
/* harmony import */ var _employee_payroll_employee_payroll_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./employee-payroll/employee-payroll.component */ "vKDP");
/* harmony import */ var _employee_payroll_create_employee_payroll_create_employee_payroll_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./employee-payroll/create-employee-payroll/create-employee-payroll.component */ "aO6q");
/* harmony import */ var _employee_payroll_employee_payroll_list_employee_payroll_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./employee-payroll/employee-payroll-list/employee-payroll-list.component */ "N4Zl");
/* harmony import */ var _employee_tax_employee_tax_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./employee-tax/employee-tax.component */ "NEIM");
/* harmony import */ var _employee_tax_create_employee_tax_create_employee_tax_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./employee-tax/create-employee-tax/create-employee-tax.component */ "wNL7");
/* harmony import */ var _employee_tax_employee_tax_list_employee_tax_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./employee-tax/employee-tax-list/employee-tax-list.component */ "Di5d");
/* harmony import */ var _employee_training_employee_training_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./employee-training/employee-training.component */ "Q0Rv");
/* harmony import */ var _employee_training_create_employee_training_create_employee_training_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./employee-training/create-employee-training/create-employee-training.component */ "WqK1");
/* harmony import */ var _employee_training_employee_training_list_employee_training_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./employee-training/employee-training-list/employee-training-list.component */ "gv2+");
/* harmony import */ var _employee_attendance_update_attendance_update_attendance_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./employee-attendance/update-attendance/update-attendance.component */ "QzWO");
/* harmony import */ var _employee_update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./employee/update-employee/update-employee.component */ "V9uO");


































class HrmModule {
}
HrmModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HrmModule });
HrmModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HrmModule_Factory(t) { return new (t || HrmModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _hrm_routing_module__WEBPACK_IMPORTED_MODULE_2__["HrmRoutingModule"],
            _common_module__WEBPACK_IMPORTED_MODULE_9__["CommonSharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HrmModule, { declarations: [_employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"],
        _employee_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"],
        _employee_attendance_employee_attendance_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeAttendanceComponent"],
        _employee_attendance_employee_attendance_list_employee_attendance_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeAttendanceListComponent"],
        _employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeSalaryComponent"],
        _employee_salary_employee_salary_list_employee_salary_list_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeSalaryListComponent"],
        _employee_attendance_create_employee_attendance_create_employee_attendance_component__WEBPACK_IMPORTED_MODULE_10__["CreateEmployeeAttendanceComponent"],
        _employee_project_employee_project_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeProjectComponent"],
        _employee_project_employee_project_list_employee_project_list_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeProjectListComponent"],
        _employee_project_create_employee_project_create_employee_project_component__WEBPACK_IMPORTED_MODULE_13__["CreateEmployeeProjectComponent"],
        _employee_salary_create_employee_salary_create_employee_salary_component__WEBPACK_IMPORTED_MODULE_14__["CreateEmployeeSalaryComponent"],
        _employee_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_15__["CreateEmployeeComponent"],
        _employee_leave_employee_leave_component__WEBPACK_IMPORTED_MODULE_16__["EmployeeLeaveComponent"],
        _employee_leave_create_employee_leave_create_employee_leave_component__WEBPACK_IMPORTED_MODULE_17__["CreateEmployeeLeaveComponent"],
        _employee_leave_employee_leave_list_employee_leave_list_component__WEBPACK_IMPORTED_MODULE_18__["EmployeeLeaveListComponent"],
        _employee_loan_employee_loan_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeLoanComponent"],
        _employee_loan_create_employee_loan_create_employee_loan_component__WEBPACK_IMPORTED_MODULE_20__["CreateEmployeeLoanComponent"],
        _employee_loan_employee_loan_list_employee_loan_list_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeLoanListComponent"],
        _employee_payroll_employee_payroll_component__WEBPACK_IMPORTED_MODULE_22__["EmployeePayrollComponent"],
        _employee_payroll_create_employee_payroll_create_employee_payroll_component__WEBPACK_IMPORTED_MODULE_23__["CreateEmployeePayrollComponent"],
        _employee_payroll_employee_payroll_list_employee_payroll_list_component__WEBPACK_IMPORTED_MODULE_24__["EmployeePayrollListComponent"],
        _employee_tax_employee_tax_component__WEBPACK_IMPORTED_MODULE_25__["EmployeeTaxComponent"],
        _employee_tax_create_employee_tax_create_employee_tax_component__WEBPACK_IMPORTED_MODULE_26__["CreateEmployeeTaxComponent"],
        _employee_tax_employee_tax_list_employee_tax_list_component__WEBPACK_IMPORTED_MODULE_27__["EmployeeTaxListComponent"],
        _employee_training_employee_training_component__WEBPACK_IMPORTED_MODULE_28__["EmployeeTrainingComponent"],
        _employee_training_create_employee_training_create_employee_training_component__WEBPACK_IMPORTED_MODULE_29__["CreateEmployeeTrainingComponent"],
        _employee_training_employee_training_list_employee_training_list_component__WEBPACK_IMPORTED_MODULE_30__["EmployeeTrainingListComponent"],
        _employee_attendance_update_attendance_update_attendance_component__WEBPACK_IMPORTED_MODULE_31__["UpdateAttendanceComponent"],
        _employee_update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_32__["UpdateEmployeeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _hrm_routing_module__WEBPACK_IMPORTED_MODULE_2__["HrmRoutingModule"],
        _common_module__WEBPACK_IMPORTED_MODULE_9__["CommonSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrmModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _employee_employee_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeComponent"],
                    _employee_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"],
                    _employee_attendance_employee_attendance_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeAttendanceComponent"],
                    _employee_attendance_employee_attendance_list_employee_attendance_list_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeAttendanceListComponent"],
                    _employee_salary_employee_salary_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeSalaryComponent"],
                    _employee_salary_employee_salary_list_employee_salary_list_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeSalaryListComponent"],
                    _employee_attendance_create_employee_attendance_create_employee_attendance_component__WEBPACK_IMPORTED_MODULE_10__["CreateEmployeeAttendanceComponent"],
                    _employee_project_employee_project_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeProjectComponent"],
                    _employee_project_employee_project_list_employee_project_list_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeProjectListComponent"],
                    _employee_project_create_employee_project_create_employee_project_component__WEBPACK_IMPORTED_MODULE_13__["CreateEmployeeProjectComponent"],
                    _employee_salary_create_employee_salary_create_employee_salary_component__WEBPACK_IMPORTED_MODULE_14__["CreateEmployeeSalaryComponent"],
                    _employee_create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_15__["CreateEmployeeComponent"],
                    _employee_leave_employee_leave_component__WEBPACK_IMPORTED_MODULE_16__["EmployeeLeaveComponent"],
                    _employee_leave_create_employee_leave_create_employee_leave_component__WEBPACK_IMPORTED_MODULE_17__["CreateEmployeeLeaveComponent"],
                    _employee_leave_employee_leave_list_employee_leave_list_component__WEBPACK_IMPORTED_MODULE_18__["EmployeeLeaveListComponent"],
                    _employee_loan_employee_loan_component__WEBPACK_IMPORTED_MODULE_19__["EmployeeLoanComponent"],
                    _employee_loan_create_employee_loan_create_employee_loan_component__WEBPACK_IMPORTED_MODULE_20__["CreateEmployeeLoanComponent"],
                    _employee_loan_employee_loan_list_employee_loan_list_component__WEBPACK_IMPORTED_MODULE_21__["EmployeeLoanListComponent"],
                    _employee_payroll_employee_payroll_component__WEBPACK_IMPORTED_MODULE_22__["EmployeePayrollComponent"],
                    _employee_payroll_create_employee_payroll_create_employee_payroll_component__WEBPACK_IMPORTED_MODULE_23__["CreateEmployeePayrollComponent"],
                    _employee_payroll_employee_payroll_list_employee_payroll_list_component__WEBPACK_IMPORTED_MODULE_24__["EmployeePayrollListComponent"],
                    _employee_tax_employee_tax_component__WEBPACK_IMPORTED_MODULE_25__["EmployeeTaxComponent"],
                    _employee_tax_create_employee_tax_create_employee_tax_component__WEBPACK_IMPORTED_MODULE_26__["CreateEmployeeTaxComponent"],
                    _employee_tax_employee_tax_list_employee_tax_list_component__WEBPACK_IMPORTED_MODULE_27__["EmployeeTaxListComponent"],
                    _employee_training_employee_training_component__WEBPACK_IMPORTED_MODULE_28__["EmployeeTrainingComponent"],
                    _employee_training_create_employee_training_create_employee_training_component__WEBPACK_IMPORTED_MODULE_29__["CreateEmployeeTrainingComponent"],
                    _employee_training_employee_training_list_employee_training_list_component__WEBPACK_IMPORTED_MODULE_30__["EmployeeTrainingListComponent"],
                    _employee_attendance_update_attendance_update_attendance_component__WEBPACK_IMPORTED_MODULE_31__["UpdateAttendanceComponent"],
                    _employee_update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_32__["UpdateEmployeeComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _hrm_routing_module__WEBPACK_IMPORTED_MODULE_2__["HrmRoutingModule"],
                    _common_module__WEBPACK_IMPORTED_MODULE_9__["CommonSharedModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-hrm-hrm-module.js.map