import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PaymentSection from './components/PaymentSection';
import Footer from './components/Footer';

function App() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const paymentMethods = [
    {
      id: 'check',
      title: 'Paper Check',
      icon: '📄',
      description: 'Preferred payment method - Traditional check',
      features: ['Secure', 'No processing fees', 'Physical record'],
      instructions: `1. Make check payable to MC Movers
2. Write the deposit amount in numbers and words
3. Memo line: Job Number
4. Snap a clear photo (corners visible, text readable)
5. Email photo to info@mc-movers.com or text it to us
6. Mail the check to MC Movers, 1021 Ives Dairy Rd Ste 212, Miami, FL 33179
Keep a copy of the check for your records.`
    },
    {
      id: 'zelle',
      title: 'Zelle',
      icon: '💳',
      description: 'Alternative option - Bank-to-bank transfer',
      features: ['Instant transfer', 'No fees', 'Bank-level security'],
      instructions: `Step 1: Open your banking app or Zelle app
Step 2: Select "Send Money" or "Send with Zelle"
Step 3: Enter our email: info@mc-movers.com
Step 4: Enter the deposit amount
Step 5: Add a note: "Moving Deposit - [Your Name] - Job #[Job Number]"
Step 6: Review and send the payment
Step 7: Keep the confirmation number for your records`
    },
    {
      id: 'venmo',
      title: 'Venmo',
      icon: '📱',
      description: 'Alternative option - Mobile payment (3.5% fee)',
      features: ['Mobile app', 'Quick payment', '3.5% processing fee'],
      instructions: `1. Open Venmo and tap Pay
2. Search @mcmovers
3. Enter your deposit amount
4. Note: Moving Deposit - Your Name - Job #123
5. Confirm payment and save a screenshot
6. Venmo adds a 3.5% processing fee
Link: https://venmo.com/code?user_id=4394896270034661910&created=1762552713.5909119&printed=1`
    },
    {
      id: 'creditcard',
      title: '',
      icon: '',
      description: '',
      features: [],
      instructions: ''
    },
    {
      id: 'auto',
      title: 'Auto Transport Deposits',
      icon: '🚗',
      description: 'Vehicle shipping services',
      features: ['Door-to-door', 'Fully insured', 'Professional handling'],
      instructions: `Step 1: Contact us at (800) 807-2173 to schedule
Step 2: Provide vehicle details (make, model, year, VIN)
Step 3: Get your quote and deposit amount
Step 4: Choose your preferred payment method above
Step 5: Include "Auto Transport" in payment notes
Step 6: We'll confirm your pickup date and time
Step 7: Prepare your vehicle (remove personal items, check fluids)`
    },
    {
      id: 'terms',
      title: 'Terms and Conditions',
      icon: '📋',
      description: 'Important documents and policies',
      features: ['Legal protection', 'Clear terms', 'Insurance info'],
      section1Preview: `SECTION 1: Liability of MC Movers LLC is always subject to the minimum valuation of $0.60 per pound per article and in compliance with and subject to the limitations and provisions of 49 CFR Section 375.701(a) - There is no 100% waiver of liability for property transported by carrier. When allowed by law, and subject to 49 CFR Section 375.701(a): (a) carrier is not responsible for injury or damage to any fragile article (articles susceptible to breakage or crushing). Unless such fragile articles are both packed and unpacked by its employees and subject to the further conditions that such packing, unpacking or other handling is performed in a grossly negligent manner by MC Movers LLC. The carrier will not carry and or be liable in any way for the loss or damage to currency, precious stones, documents, stamps, securities, species, silverware, jewelry, or any article of extraordinary value unless such articles of value was agreed to in writing, and unless the shipper assumes additional valuation charges, as indicated thereon. MC Movers LLC shall not exceed the cost of repairing or replacing the property lost or damaged with material of like kind and quality not exceeding actual cash value of the property at the time and place loss with regard to sets or matched pieces shall be limited to repair or replacement whichever is less of the lost or damaged pieces only, and shall not extended to repair, replacement or recovering the entire set, but in no event to exceed the released or declared values as indicated. MC Movers LLC shall not be liable for loss or damage occurring after the property has been delivered. When the carrier is directed to unload or to deliver property (or render any services) at a place or places at which the shipper or its agents is not present the property shall be at the risk of the shipper after unloading or delivery. Where the carrier is directed to load property from (or render any services at) a place or places at which the shipper or its agent is not present property shall be at the risk of the shipper before loading or after shipper signed the inventory list.(b) Should the shipper not declare a specified value and not pay the additional valuation charge thereon then the shipper hereby agrees to the carrier\`s liability is limited to a maximum of $0.60 per pound per article. When the shipment has been released to the carrier at the value not exceeding $0.60 per pound per article as per declaration of the value on the face hereof, it is agreed that said property be moved packed, shipped, forwarded, or otherwise, handled with the carrier\`s liability specifically limited to $0.60 per pound per article. MC Movers LLC shall be liable only for its failure to use ordinary care and only on the basis of the shipper\`s declared valuation of the goods. MC Movers LLC shall not be responsible with respect to damage, loss, or decay caused by acts of God or the public enemy war insurrection, strikes, labor trouble, riots, fire, earthquake, nature of the property or defects or inherent vice therein deterioration by time, moths, termites, or other insects, vermin, rodents, wear and tear, leakage, fire or any cause beyond the carrier\`s control or any other cause unless such damage results from the carrier\`s control. MC Movers LLC is not responsible for mechanical or electrical function or any article such, as but not limited to piano, radio, television set, DVD player, computer, VCR, barometer, refrigerator, clock, air conditioner, or other instrument or appliance whether or not such articles are packed or unpacked by MC Movers LLC.`,
      instructions: `SECTION 1: Liability of MC Movers LLC is always subject to the minimum valuation of $0.60 per pound per article and in compliance with and subject to the limitations and provisions of 49 CFR Section 375.701(a) - There is no 100% waiver of liability for property transported by carrier. When allowed by law, and subject to 49 CFR Section 375.701(a): (a) carrier is not responsible for injury or damage to any fragile article (articles susceptible to breakage or crushing). Unless such fragile articles are both packed and unpacked by its employees and subject to the further conditions that such packing, unpacking or other handling is performed in a grossly negligent manner by MC Movers LLC. The carrier will not carry and or be liable in any way for the loss or damage to currency, precious stones, documents, stamps, securities, species, silverware, jewelry, or any article of extraordinary value unless such articles of value was agreed to in writing, and unless the shipper assumes additional valuation charges, as indicated thereon. MC Movers LLC shall not exceed the cost of repairing or replacing the property lost or damaged with material of like kind and quality not exceeding actual cash value of the property at the time and place loss with regard to sets or matched pieces shall be limited to repair or replacement whichever is less of the lost or damaged pieces only, and shall not extended to repair, replacement or recovering the entire set, but in no event to exceed the released or declared values as indicated. MC Movers LLC shall not be liable for loss or damage occurring after the property has been delivered. When the carrier is directed to unload or to deliver property (or render any services) at a place or places at which the shipper or its agents is not present the property shall be at the risk of the shipper after unloading or delivery. Where the carrier is directed to load property from (or render any services at) a place or places at which the shipper or its agent is not present property shall be at the risk of the shipper before loading or after shipper signed the inventory list.(b) Should the shipper not declare a specified value and not pay the additional valuation charge thereon then the shipper hereby agrees to the carrier\`s liability is limited to a maximum of $0.60 per pound per article. When the shipment has been released to the carrier at the value not exceeding $0.60 per pound per article as per declaration of the value on the face hereof, it is agreed that said property be moved packed, shipped, forwarded, or otherwise, handled with the carrier\`s liability specifically limited to $0.60 per pound per article. MC Movers LLC shall be liable only for its failure to use ordinary care and only on the basis of the shipper\`s declared valuation of the goods. MC Movers LLC shall not be responsible with respect to damage, loss, or decay caused by acts of God or the public enemy war insurrection, strikes, labor trouble, riots, fire, earthquake, nature of the property or defects or inherent vice therein deterioration by time, moths, termites, or other insects, vermin, rodents, wear and tear, leakage, fire or any cause beyond the carrier\`s control or any other cause unless such damage results from the carrier\`s control. MC Movers LLC is not responsible for mechanical or electrical function or any article such, as but not limited to piano, radio, television set, DVD player, computer, VCR, barometer, refrigerator, clock, air conditioner, or other instrument or appliance whether or not such articles are packed or unpacked by MC Movers LLC.

SECTION 2: Form of Payment: Upon booking a 30% deposit is required to be paid in the form of credit card (Visa, Mastercard), cashier\`s check, Zelle, Venmo or ACH. Prior to pickup 50% of the balance is due in the form of Cash, money order, certified check. At delivery the balance is due prior to unloading in the form of Post Office Money Order or Cash only. MC Movers LLC reserves the right to collect up to 80% of balance due prior to the goods leaving the origin state.

SECTION 3. Summary of dispute settlement program: The neutral arbitration program has been designed to give neither party any special advantage. If a dispute arises between MC Movers LLC and the shipper arbitration may be a mutually beneficial alternative to help resolve the dispute. Section 49 CFR Section 375.211 provides that a mover must have a program in place to provide shippers with an Arbitration alternative. Arbitration is optional and not required under Federal law. A. Summary of the arbitration process: Arbitration is an alternative to courtroom litigation. It provides each party to the dispute to present their cases and allows a neutral third party arbitrator to make decision as to the merits of each side\`s case. Arbitration subject to this agreement shall be conducted via written submission and, subject to the arbitrator\`s discretion, through telephonic appearance. After the initial filing fees have been paid and the arbitrator selected, the initiating party or "Claimant" must submit a written brief summarizing their legal position and factual claims. All supporting documentation must be included with the initial arbitration brief. Copies of all documents must be submitted to all parties involved in the arbitration. Upon receipt of the Claimant\`s arbitration brief and supporting documents, the responding party or "Respondent" will have 30 days to file their responsive arbitration brief and supporting documentation. Further deadlines and timetables are subject to the arbitrator\`s discretion. B. Legal effects: If the arbitration alternative is chosen, then any decision made by the arbitrator may be binding. Additionally, an arbitration decision may not be appealed in a court of law. All parties agree that the Arbitrators decision will be based exclusively on the governing United States Federal Law without regard to conflicting State laws or regulations. C. Applicable costs: Each party is responsible for their own costs associated with arbitration. A benefit to the arbitration alternative may be that it is less expensive than traditional litigation. Each party is responsible for 50% of the costs associated with securing the arbitrator and 100% of their own expenses, including but not limited to attorney fees. There is a $250 filing fee FOR EACH PARTY and a supplemental charge of $50 administration fee. Call carrier at phone number on front of this form for ADR processing forms.

SECTION 4: Valuation of coverage: We encourage you to purchase third party full replacement value coverage. Option 1: Replacement: Under this option, the mover is liable for the replacement value of lost or damaged goods (as long as it doesn't exceed the total declared value of the shipment). If you elect to purchase full value protection, and your mover loses, damages or destroys your articles, your mover must repair, replace with like items, or settle in cash at the current market replacement value, regardless of the age of the lost or damaged item. The amount of the deductible will affect the cost of your FVP coverage. Unless you specifically agree to other arrangements, the mover must assume liability for the entire shipment based upon this option. Option 2 (FREE): Limited Liability: As a licensed carrier with the U.S. D.O.T. we are required to provide limited liability coverage at no charge to the customer. Under this option, the maximum liability is limited to $0.60 per pound per article, for all items indicated as damaged or missing at time of delivery on the inventory logs. Failure to indicate damage at time of delivery will waive carrier\`s liability. Under both of these liability options, movers are permitted to limit their liability for loss or damage to articles of extraordinary value, unless you specifically list these articles on the shipping documents. An article of extraordinary value is any item whose value exceeds $100 per pound ($220 per kilogram). Valuation of claims will be based on the AMSA Joint Military/Industry Table of weights and depreciation guide.

SECTION 5: Maximum period of time to file a claim or bring civil action: Shipper has a maximum period of nine months to from the date of delivery to file a claim for loss or damages. Additionally, Shipper has a maximum of two years to bring a civil action against the carrier and/or its agents. See 49 Section 14706(e)(1).

SECTION 6: Exceptions to Carrier Liability. Liability of MC Movers LLC not with-standing the minimum valuation of $0.60 per pound per article and in compliance with and subject to the limitations and provisions of 49 CFR Section 375.701(a): Neither the Carrier nor the Vessel shall be responsible for loss or damage arising or resulting from (a) Act of God; (b) Act of War; (c) Act of public enemy; (d) fire, unless caused by the actual fault or privity of the Carrier; (e) perils, dangers and accidents of the sea or other navigable water; (f) inherent defect, quality or vice of the goods; (g) goods packed by Shipper; (h) any other cause arising without the actual fault and privity of the Carrier. Additionally, mechanical vehicles including but not limited to automobiles, motorcycles, scooters, boats, airplanes, atvs, go-carts, riding lawnmowers, tractors, and other similar vehicles are transported at the sole risk of the shipper since all coverage for those items is waived against the carrier, its agents or representatives. The carrier shall not be held responsible for any items insisted by shipper to be moved through impassible passageways.

SECTION 7: Filing of Claims/Complaints Procedures: Carrier shall not be liable for the loss or destruction of, or missing goods, or damage of goods tendered hereunder or any part thereof unless claim is made in writing supported by proof of ownership, together with substation of value, and weight.

As a condition precedent, all outstanding monies due to the mover must be paid in full before a claim can be submitted to the company within 9 months after the date the goods are delivered or demand thereof refused and must be limited to the destination descriptions of damage indicated on the inventory logs at the time of delivery. It is solely the shipper\`s responsibility to inspect and indicate damaged or missing items on the inventory logs at time of delivery. Valuation of claim will be based on those indications subject to the limitations of liability as described on the Bill of Lading. Liability for MC Movers LLC will be in accordance with the liability option the shipper contracts for. To file a claim or complaint call Carrier at phone number on front of this form. All costs associated with the claim is shipper\`s responsibility.

SECTION 8: Agreed Pickup and Delivery schedule: Two pick up and delivery services are available: Standard Service or Premium Guaranteed Service. Premium Guaranteed service on or between agreed dates is an optional service that is available to you at an additional cost. This optional extra service guarantees that your shipment will be picked up, transported to the destination and delivered on specific guaranteed dates. If the mover fails to provide the service as agreed, you are entitled to be compensated at a predetermined amount or a daily rate (per diem of $30.00) regardless of the expense you actually might have incurred as a result of the mover\`s failure to perform. Absent selecting and paying for the optional extra service guaranteeing specific pick up and delivery dates, the mover is only required to pick up and deliver your property with reasonable dispatch and in a reasonable time under Standard Service. Generally, estimated delivery is up to 21 (twenty one) business days from date indicated as first available for delivery. Any oral promises made regarding delivery or pick up dates and times are mere estimates. We guarantee delivery to take place within 30 business weekdays day of the date first available for delivery. (time calculations exclude weekends, holidays, and days in storage) Any changes to your order will extend this time. This time frame may change based on the time of year, weather conditions, road conditions, other acts of God, delivery schedule, geographic location of the move and other unknown factors. Business days do not include holidays or weekends.

SECTION 9: Notice of Maximum amount due upon delivery: Final charges will be based on actual weight or cubic feet/volume of property and services provided. Maximum amount demanded at time of delivery is the amount of the non-binding estimate plus 10% - 110% rule; or 100% of the binding estimate. Shipper may voluntarily pay total actual charges upon delivery. Actual charges may exceed the amount of estimate.

SECTION 10: Definitions: "Carrier" is the moving company and its agents, contractors, employees, and representatives. "Shipper" is the customer who engaged the carrier to perform interstate domestic moving services.

SECTION 11: Interest: a charge of 1.5% per month or fraction thereof (18% per annum) shall be added to all delinquent accounts. Furthermore, the shipper shall be responsible for all charges MC Movers LLC incurred as a result of attempting collection. This includes but is not limited to, attorney fees, fees for collection agent and court costs.

SECTION 12: AGREED MANDATORY CHOICE OF LAW, VENUE AND JURISDICTION. If a lawsuit becomes necessary to resolve any dispute between MC Movers LLC and shipper, said suit shall and must only be brought in circuit or county court in and for United States of America, Florida. Suits involving disputed over interstate shipments must be limited to the governing federal law. Both parties agree to submit themselves to the jurisdiction of the Florida Courts and agree given the relationship to the state, such exercise is reasonable and lawful. Shipper consents to jurisdiction in Miami-Dade County, FL and hereby waives the right to be served within the State of which they reside in.

SECTION 13: Waiver of class action suits. The parties hereby waive any participation or involvement in any class action lawsuits against carrier or shipper.

SECTION 14: Reasonable Attorney Fees: In the event litigation is necessary, the carrier shall recover from shipper any and all reasonable attorney fees and administrative costs and court costs incurred as a result of the litigation. Lawsuits brought against the shipper on collection matters for failure to pay an outstanding balance due are not subject to the jurisdiction requirements under section 12 herein.

SECTION 15: Carrier\`s lien (a) it is agreed that MC Movers LLC shall have a lien against any and all property tendered to it heretofore or hereafter tendered to it, and on the proceeds from the sale thereof for all charges provided herein, including without limitation claims for moneys, advanced storage, transportation, interest labor and all other charges or expenses in relation to said property or any part thereof, and also for court costs, reasonable attorney\`s fees and other legal expenses incurred by the carrier as a result of any litigation in which the carrier may be involved in connection with the tendered goods as any and all other charges and expenses for notice and advertisement of sale of the property when default has been made also for all costs inclusion of court costs reasonable attorney fees in collection charges or enforcing this lien or caused for any controversy arising out of conflicting claims of ownership of any interpleaded action arising from the bailment of the goods or defending itself in the event the carrier is made a party to any litigation concerning the goods involved therein. If for any reason other then the fault of the carrier delivery cannot be made at the address given as the destination of which carrier has been notified, carrier at its option, may cause tariff and other lawful charges. Articles contained in shipment to be stored in a warehouse selected by it at the point of delivery or at other available points, at the costs of owner, and subject to a lien for all accured charges.

SECTION 16: Sever-ability: If any part of this contract is found to be unlawful or invalid, the remaining terms and conditions shall still be enforceable.

SECTION 17: Ownership of goods: Shipper has represented and warranted to MC Movers LLC that it has lawful possession of any legal right and authority to tender all of the property herein described and that there are and will be no liens, mortgages or encumbrances on said property superior or adverse to the legal right and authority of shipper to contract for services and id there be any litigation concerning the property, the shipper agreed to pay all storage and other charges together with costs and expenses, including reasonable attorney\`s fees which this carrier may reasonably incur or become liable to pay in connection there with. This carrier shall have a lien on said property for charges and for such costs and expenses. Shipper agrees to indemnify MC Movers LLC with regard to any costs and expenses that may occur including but not limited to attorney\`s fees, with regard to a claim of ownership and/or possession made by any third party with regard to the goods specified herein.

SECTION 18: New Binding Estimate: In accordance with 49 CFR § 375.403(a)(6)(ii) and/or 49 CFR § 375.405(b)(7)(ii): If on the day of the scheduled pick-up "it appears an individual shipper has tendered additional household goods or requires additional services not identified in the binding estimate, [the mover is] not required to honor the estimate." 49 CFR § 375.403(a)(6). However, if MC Movers LLC wishes to service the shipment it must either (1) pickup and transport only the specific items and amount of cu.ft. itemized on this estimate without servicing / transporting the additional items of property. In this case the shipper would only be required to pay 100% of the binding estimate and the remaining balance will be billed after the 30 day deferment. Or (2) Carrier and shipper may execute a New Binding Estimate, in accordance with 49 CFR § 375.403(a)(6)(ii) PRIOR TO LOADING OR OTHERWISE BEGINNING THE JOB. This New Binding Estimate given prior to loading will serve as the only active estimate for which charges will be calculated. Warning: To avoid a scenario where a new estimate at a higher price is issued at the last minute on the date of pick up, it is imperative that customer provide the estimator with a complete and detailed itemization of each item to be moved. Leaving out any items to be moved or adding items at the last minute will result in a new estimate at a higher price on the date of pickup.

SECTION 19: Agents: Carrier may use agents/independent sub-contractors on all orders. Additionally, unless you purchased an "exclusive use of the vehicle" option, there is no guarantee that your items will not be temporarily stored or offloaded and reloaded onto a different vehicle then performed pickup and consolidated with other shipments.

SECTION 20: Inspection of Carrier\`s Tariff: Governing tariff is available for inspection upon reasonable request by calling MC Movers LLC.`
    }
  ];

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <HeroSection 
          paymentMethods={paymentMethods}
          selectedMethod={selectedMethod}
          onSelectMethod={setSelectedMethod}
        />
      </main>
      {selectedMethod && (
        <PaymentSection
          key={selectedMethod.id}
          id={selectedMethod.id}
          title={selectedMethod.title}
          icon={selectedMethod.icon}
          description={selectedMethod.description}
          features={selectedMethod.features}
          instructions={selectedMethod.instructions}
          section1Preview={selectedMethod.section1Preview}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
