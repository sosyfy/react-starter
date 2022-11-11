
class RoleCheckerService{

    hasInvoicingRole() {
        return localStorage.getItem("roles").includes('Invoicing');
    }

    hasReceiptingRole() {
        return localStorage.getItem("roles").includes('Receipting');
    }

    hasPaymentMovementsRole() {
        return localStorage.getItem("roles").includes('Payment Movements');
    }

    hasApprovalsRole() {
        return localStorage.getItem("roles").includes('Approvals');
    }

    hasReportingRole() {
        return localStorage.getItem("roles").includes('Reporting');
    }

    hasSystemAdminRole() {
        return localStorage.getItem("roles").includes('System Admin');
    }

}

export default new RoleCheckerService();