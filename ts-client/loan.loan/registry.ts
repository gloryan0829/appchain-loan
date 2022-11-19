import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgApproveLoan } from "./types/loan/loan/tx";
import { MsgLiquidateLoan } from "./types/loan/loan/tx";
import { MsgRepayLoan } from "./types/loan/loan/tx";
import { MsgRequestLoan } from "./types/loan/loan/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/loan.loan.MsgApproveLoan", MsgApproveLoan],
    ["/loan.loan.MsgLiquidateLoan", MsgLiquidateLoan],
    ["/loan.loan.MsgRepayLoan", MsgRepayLoan],
    ["/loan.loan.MsgRequestLoan", MsgRequestLoan],
    
];

export { msgTypes }