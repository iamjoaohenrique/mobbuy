import { ServiceEntityRequest } from './ServiceEntity';
import { PaymentMethodRequest } from './PaymentMethod';
import { PaymentDeadLineRequest } from './PaymentDeadLine';
import { CreditCardFlagRequest } from './CreditCardFlag';
import { AgreementRequest } from './Agreement';

export interface PlanRequest {
  sequentialRegistries: number,
  installment: number,
  percentAdmTax: number,
  percentFinancialTax: number,
  percentCreditTariff: number,
  transactionCostAmount: number,
  description: string,
  antecipationTax: number,
  value: number,
  idAgreement: number,
  idCreditCardFlag: number,
  idPaymentDeadLine: number,
  idPaymentMethod: number,
  idService: number
}
export interface PlanResponse {
  sequentialRegistries: number,
  installment: number,
  percentAdmTax: number,
  percentFinancialTax: number,
  percentCreditTariff: number,
  transactionCostAmount: number,
  description: string,
  antecipationTax: number,
  value: number,
  agreement: AgreementRequest,
  creditCardFlag: CreditCardFlagRequest,
  paymentDeadLine: PaymentDeadLineRequest,
  paymentMethod: PaymentMethodRequest,
  service: ServiceEntityRequest
}