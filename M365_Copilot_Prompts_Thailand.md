# M365 Copilot Prompts สำหรับประเทศไทย
## Agent Build Prompts + Cowork Prompts

**วันที่:** 12 พฤษภาคม 2566

---

## 📑 สารบัญ

1. [M365 Copilot Prompts สำหรับ Use Case ไทย](#1-m365-copilot-prompts-สำหรับ-use-case-ไทย)
2. [Agent Build Prompts](#2-agent-build-prompts)
3. [Cowork Prompts](#3-cowork-prompts)
4. [Best Practices](#4-best-practices)
5. [ทรัพยากรเพิ่มเติม](#5-ทรัพยากรเพิ่มเติม)

---

## 1. M365 Copilot Prompts สำหรับ Use Case ไทย

### 1.1 ค้าปลีก / E-Commerce

| **Prompt** | **คำอธิบาย** |
|-----------|-----------|
| สรุปรายงานขายรายวัน | Summarize today's sales report from Excel and identify top 5 products that sold the most. Present in Thai with revenue and unit count for each. |
| วิเคราะห์ลูกค้า | Analyze our customer feedback from email threads about product quality. Provide summary in Thai highlighting common complaints and positive feedback for Q2 2026. |
| ตั้งข้อความปรึกษาลูกค้า | Draft a friendly customer service response (ภาษาไทย) to a customer who returned a damaged product. Offer replacement or refund with empathy. |
| วางแผนโปรโมชัน | Create a promotional plan in Thai for our mid-year sale campaign. Include target audience, product categories, discount strategy, and marketing channels for local market. |
| รายงานการจัดส่ง | Summarize shipping issues from the past 3 months. Create a table showing common delays, causes, and recommendations to improve delivery time within Thailand. |

---

### 1.2 การเงิน / ธนาคาร

| **Prompt** | **คำอธิบาย** |
|-----------|-----------|
| สรุปปริมาณเงินฝาก | Analyze our deposit growth trend from Q1-Q2 2026. Create a summary in Thai showing month-over-month growth %, top 3 customer segments, and forecast for Q3. |
| ประเมินความเสี่ยง | Review loan application from ABC Company. Summarize financial health based on their 2 years of financial statements. Provide risk assessment in Thai. |
| รายงานปฏิบัติตามกฎหมาย | Create a compliance report in Thai for banking regulations. Include checks on customer KYC data, AML requirements, and recommendations for Q2 audit. |
| วิเคราะห์พอร์ตโฟลิโอ | Analyze investment portfolio performance. Create a summary in Thai showing YTD returns, asset allocation, and recommendations for rebalancing. |

---

### 1.3 การศึกษา

| **Prompt** | **คำอธิบาย** |
|-----------|-----------|
| รายงานการเรียน | Summarize student exam scores from the database. Create a report in Thai showing top performers, students needing support, and class average by subject. |
| ร่างจดหมายอีเมล | Draft an email to parents in Thai about upcoming parent-teacher conference. Include date, time, agenda, and how to register. |
| วางแผนหลักสูตร | Create a curriculum improvement plan based on student feedback from surveys. Provide recommendations in Thai for course content, teaching methods, and learning outcomes. |

---

### 1.4 สาธารณสุข

| **Prompt** | **คำอธิบาย** |
|-----------|-----------|
| สรุปข้อมูลผู้ป่วย | Summarize patient visit records for Q2 2026. Create a report in Thai showing top 5 health conditions, patient demographics, and recommendations for resource allocation. |
| ร่างคำแนะนำสุขภาพ | Create health education content in Thai about prevention of common diseases in Thailand (dengue, diabetes). Make it suitable for public health clinic posters. |

---

### 1.5 ท่องเที่ยว / โรงแรม

| **Prompt** | **คำอธิบาย** |
|-----------|-----------|
| วิเคราะห์การจองห้อง | Analyze booking patterns from Q1-Q2 2026. Create a summary in Thai showing peak seasons, most popular room types, average length of stay, and revenue per room. |
| ร่างคำเชิญอุปสงค์ | Create a promotional offer (ภาษาไทย) for our hotel package. Include room types, amenities, dining options, activities, and special rate for Thai travelers. |
| รายงานความพึงพอใจ | Summarize guest reviews and satisfaction scores. Create a report in Thai highlighting strengths, weaknesses, and improvement actions needed. |

---

### 1.6 การผลิต / โลจิสติกส์

| **Prompt** | **คำอธิบาย** |
|-----------|-----------|
| วิเคราะห์เวลาการผลิต | Analyze production efficiency data from the past quarter. Create a summary in Thai showing cycle time, defect rates, and bottlenecks preventing optimal output. |
| รายงานสต็อกสินค้า | Create an inventory report in Thai showing stock levels, reorder points, slow-moving items, and recommendations for inventory optimization. |

---

### 1.7 สตาร์ทอัป / SME

| **Prompt** | **คำอธิบาย** |
|-----------|-----------|
| บทสรุปธุรกิจ | Create an executive summary in Thai for our startup's business plan. Include problem statement, solution, target market, revenue model, and funding ask. |
| สรุปความคืบหน้า | Summarize progress against OKRs for Q2 2026. Create a report in Thai showing achievements, challenges, and revised targets for Q3. |
| ร่างข้อเสนอลูกค้า | Draft a professional proposal (ภาษาไทย) for a potential client. Include our services, pricing, timeline, and ROI projections. |

---

## 2. Agent Build Prompts

### 2.1 Sales Agent

**Persona:** Senior sales representative who speaks Thai

```
You are a professional sales agent for [Company Name]. Your role is to:
- Answer customer inquiries about products/services in Thai (ภาษาไทย)
- Provide pricing, promotions, and package options
- Guide customers through the buying process
- Collect customer information for follow-up
- Handle objections professionally

When customers ask:
1. Product questions → explain features/benefits with Thai examples
2. Pricing → provide transparent quotes with payment terms
3. Comparison → explain competitive advantages clearly
4. Technical specs → simplify technical jargon
5. Order status → check systems and provide updates

Tone: Professional, friendly, helpful. Always provide local market context for Thai customers.
```

---

### 2.2 HR / People Operations Agent

**Persona:** HR specialist managing employee operations

```
You are an HR operations assistant. Your role is to:
- Respond to employee questions about company policies (ภาษาไทย/English)
- Manage leave requests and approval workflow
- Handle benefits inquiries (health insurance, pension)
- Process onboarding information for new employees
- Provide payroll and compensation information

When employees ask about:
1. Leave policy → explain types (annual, sick, personal)
2. Benefits → describe coverage and enrollment steps
3. Salary → provide payslip details (non-confidential)
4. Working hours → clarify work schedule and overtime rules
5. Training → suggest relevant development programs

Tone: Supportive, empathetic. Respect privacy and confidentiality.
```

---

### 2.3 Customer Support Agent

**Persona:** Front-line support team member

```
You are a customer support specialist. Your role is to:
- Resolve customer issues quickly and professionally
- Communicate in Thai and English as needed
- Track issues and escalate when necessary
- Provide solutions or workarounds
- Ensure customer satisfaction

Common issues to handle:
1. Technical problems → troubleshoot step-by-step
2. Billing questions → verify account and explain charges
3. Returns/Refunds → process requests according to policy
4. Service interruptions → provide updates and timeframes
5. Feature questions → explain how to use products

Escalation paths:
- Complex technical issues → Level 2 Support
- Billing disputes → Finance team
- VIP/Angry customers → Manager
- Policy exceptions → Director approval
```

---

### 2.4 Finance / Business Analyst Agent

**Persona:** Financial analyst and business advisor

```
You are a financial analysis assistant. Your role is to:
- Analyze financial data and create reports
- Identify trends and anomalies
- Provide insights and recommendations
- Support budgeting and forecasting
- Prepare executive summaries

Analysis framework:
1. Data gathering → Extract from Excel/systems (Thai format)
2. Data validation → Check for errors and outliers
3. Trend analysis → YoY, QoQ, MoM comparisons
4. Root cause → Why did numbers move?
5. Recommendations → Actionable next steps

Always include:
- Charts/visualizations when helpful
- Assumptions clearly stated
- Risk factors considered
- Alternative scenarios
- Impact on KPIs
```

---

## 3. Cowork Prompts

### 3.1 Daily Report Automation

```
เขียนรายงานสรุปวันนี้:
- รายได้วันนี้: [จำนวน]
- ยอดออเดอร์: [จำนวน]
- ยอดลูกค้าใหม่: [จำนวน]
- ปัญหาสำคัญ: [รายการ]

สไตล์: ภาษาไทยเป็นทางการ, เอาใจใจ, มีข้อมูลที่ถูกต้อง
```

---

### 3.2 Meeting Minutes

```
จดบันทึกการประชุม:
- ชื่อประชุม: [ชื่อ]
- วันที่: [วันที่]
- ผู้เข้าร่วม: [รายชื่อ]
- หัวข้อสำคัญ: [รายการ]
- การตัดสินใจ: [รายการ]
- งานที่ต้องทำ: [ผู้รับผิดชอบ]
- ประชุมครั้งหน้า: [วันที่]
```

---

### 3.3 Email Draft

```
เขียนอีเมลไปยัง [ผู้รับ]:
- เรื่อง: [เรื่อง]
- จุดประสงค์: [เหตุผล]
- ข้อมูลสำคัญ: [รายละเอียด]
- การร้องขอ: [สิ่งที่ต้องการ]

สไตล์: เป็นทางการแต่เป็นมิตร, ชัดเจน, ไม่ยาวเกินไป
```

---

### 3.4 Task List

```
สร้างรายการงานประจำสัปดาห์:
- สาขา: [สาขา]
- ลำดับความสำคัญ: สูง / กลาง / ต่ำ
- เส้นตายส่งมอบ: [วันที่]

ตัวอย่าง:
[สูง] ส่งรายงานขายให้ผู้บริหาร - 17 พ.ค.
[สูง] ติดตามลูกค้าใหม่ - 17 พ.ค.
[กลาง] อัปเดตสต็อกสินค้า - 18 พ.ค.
```

---

## 4. Best Practices

### 4.1 เขียน Prompt ที่ดี

✓ **ชัดเจน** - ระบุสิ่งที่คุณต้องการให้เจาะจง

✓ **มีบริบท** - ให้พื้นหลังและวัตถุประสงค์

✓ **ตัวอย่าง** - แสดงรูปแบบที่คาดหวัง

✓ **สั้นลง** - หลีกเลี่ยงข้อมูลที่ไม่จำเป็น

✓ **ต่างภาษา** - ระบุว่าต้องการภาษาไทยหรืออังกฤษ

---

### 4.2 Prompting Framework

**Context** - ให้พื้นหลัง: บริษัท, บทบาท, สถานการณ์

**Task** - ระบุงาน: สิ่งที่คุณต้องการให้ทำ

**Format** - รูปแบบ: ตารางหรือลิสต์หรือข้อความ

**Example** - ตัวอย่าง: แสดงผลลัพธ์ที่คาดหวัง

---

### 4.3 สำหรับ Agent Build

- **ความเชี่ยวชาญ** - สร้าง agent ที่มีความเชี่ยวชาญด้านเดียว
- **ขอบเขต** - ระบุชัดเจนว่า agent ควรทำอะไร
- **บุคลิก** - สร้างเสียงและสไตล์ที่สอดคล้องกัน
- **ลดความซับซ้อน** - เริ่มง่าย, เพิ่มรายละเอียดเมื่อจำเป็น

---

### 4.4 การทดสอบและปรับปรุง

- **ทดสอบ** - ลองใช้ prompt กับกรณีจริง
- **วัดผล** - ตรวจสอบคุณภาพของผลลัพธ์
- **ปรับปรุง** - เพิ่มตัวอย่างเมื่อมีข้อผิดพลาด
- **ทำซ้ำ** - พัฒนา prompt เพื่อให้ดีขึ้นเรื่อยๆ

---

## 5. ทรัพยากรเพิ่มเติม

### 5.1 Microsoft Resources

- [M365 Copilot Prompts Gallery](https://m365.cloud.microsoft/copilot-prompts)
- [Microsoft 365 Copilot Overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview)
- [Agent Builder for M365 Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/agent-builder-build-agents)
- [Declarative Agent Best Practices](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/declarative-agent-best-practices)
- [Declarative Agent Instructions](https://learn.microsoft.com/en-us/microsoft-365/copilot/extensibility/declarative-agent-instructions)
- [GitHub Copilot Prompts Repository](https://github.com/pnp/copilot-prompts)

### 5.2 สำหรับธุรกิจไทย

- ติดต่อ Microsoft Partner Thailand สำหรับการสนับสนุน
- พิจารณาความปลอดภัยข้อมูล (Data Residency) สำหรับบริษัท
- ตรวจสอบ Compliance กับกฎหมายไทย เช่น PDPA

---

## 💡 วิธีใช้เอกสารนี้

1. **เลือก Prompt** ที่เหมาะกับความต้องการของคุณ
2. **ปรับแต่ง** ให้เข้ากับบริบทและภาษาของบริษัท
3. **ทดสอบ** กับ M365 Copilot หรือ Cowork
4. **ปรับปรุง** ตามผลลัพธ์และข้อเสนอแนะ
5. **จัดเก็บ** ไว้เพื่อใช้ซ้ำในอนาคต

---

## 🎯 Next Steps

- [ ] ดาวน์โหลด และแก้ไขเทมเพลต Prompts
- [ ] สร้าง Custom Agents จากเทมเพลต
- [ ] ทดสอบใช้ M365 Copilot กับ Use Case จริง
- [ ] ติดตามผลลัพธ์ และปรับปรุง
- [ ] จัดอบรมทีมใช้ M365 Copilot อย่างมีประสิทธิภาพ

---

**เอกสารนี้อ่านสำหรับการใช้ภายใน | ไม่แบ่งปันต่อหน้าสาธารณะ**

*ปรับปรุงครั้งล่าสุด: 12 พฤษภาคม 2566*
