// ============================================================
// Copilot Prompt Hub — Data File
// All prompt and agent data lives here
// ============================================================

const CATEGORIES = [
  { id: 'outlook',   label: 'Outlook / อีเมล',      icon: '📧', color: '#0078D4', bg: 'rgba(0,120,212,0.12)' },
  { id: 'teams',     label: 'Microsoft Teams',       icon: '💬', color: '#6264A7', bg: 'rgba(98,100,167,0.12)' },
  { id: 'm365',      label: 'M365 Copilot Chat',     icon: '🚀', color: '#50E6FF', bg: 'rgba(80,230,255,0.12)' },
  { id: 'writing',   label: 'เขียน & เนื้อหา',       icon: '✍️', color: '#0078D4', bg: 'rgba(0,120,212,0.12)' },
  { id: 'analysis',  label: 'วิเคราะห์ข้อมูล',      icon: '📊', color: '#7B61FF', bg: 'rgba(123,97,255,0.12)' },
  { id: 'coding',    label: 'เขียนโค้ด',             icon: '💻', color: '#00B4D8', bg: 'rgba(0,180,216,0.12)' },
  { id: 'marketing', label: 'การตลาด',               icon: '📣', color: '#F77F00', bg: 'rgba(247,127,0,0.12)' },
  { id: 'hr',        label: 'ทรัพยากรบุคคล',         icon: '👥', color: '#06D6A0', bg: 'rgba(6,214,160,0.12)' },
  { id: 'education', label: 'การศึกษา',               icon: '🎓', color: '#FF6B6B', bg: 'rgba(255,107,107,0.12)' },
  { id: 'meeting',   label: 'ประชุม & สรุป',          icon: '📋', color: '#50E6FF', bg: 'rgba(80,230,255,0.12)' },
  { id: 'customer',  label: 'บริการลูกค้า',           icon: '🤝', color: '#A78BFA', bg: 'rgba(167,139,250,0.12)' },
];

// source: 'official' = Microsoft Official / PnP Community, 'original' = สร้างใหม่

// difficulty: 1=ง่าย, 2=ปานกลาง, 3=ยาก
const PROMPTS = [

  // ===== OUTLOOK — จาก Microsoft PnP Official =====
  {
    id: 'ol001',
    category: 'outlook',
    source: 'official',
    title: 'จัดลำดับความสำคัญอีเมลประจำวัน',
    desc: 'ให้ Copilot วิเคราะห์ inbox และคัดเลือก 5 อีเมลสำคัญที่สุด พร้อมสรุปแต่ละฉบับ',
    prompt: `Rank my inbox in order of priority, and then summarize them so I can focus on the most important ones. Rank them based on the frequency of the communications in the last two weeks, my organization structure, and important context in the messages. Give me the most important 5 emails, with their summaries, according to their ranking.`,
    output: `**อีเมลสำคัญ 5 ฉบับ (เรียงตามลำดับความสำคัญ):**

1. 🔴 **[CEO] Q4 Budget Approval** — รอการตอบรับอนุมัติงบประมาณภายในวันนี้
2. 🔴 **[ลูกค้า A] Project Deadline** — ขอเลื่อน deadline เป็นวันศุกร์
3. 🟡 **[ทีม] Weekly Sync** — ต้องการวาระประชุม
4. 🟡 **[HR] Annual Review Form** — ส่งก่อน 15 สิงหาคม
5. 🟢 **[Supplier] Invoice** — ใบแจ้งหนี้รอตรวจสอบ`,
    tags: ['Outlook', 'อีเมล', 'Inbox', 'ลำดับความสำคัญ'],
    difficulty: 1,
    useCase: 'เริ่มต้นวันทำงาน, จัดการ inbox, ประหยัดเวลาอ่านอีเมล',
    sourceUrl: 'https://github.com/pnp/copilot-prompts'
  },
  {
    id: 'ol002',
    category: 'outlook',
    source: 'official',
    title: 'สรุป Email Thread ยาว',
    desc: 'ย่อ email chain ที่ยาวและซับซ้อนให้เป็น 3 ประเด็นหลักที่ต้องรู้',
    prompt: `Summarize this email thread. Include:
- Main topic
- Key decisions
- What I need to do next`,
    output: `**สรุป Email Thread: "Project Alpha Launch"**

**หัวข้อหลัก:** วางแผนการ launch สินค้าใหม่ช่วงปลายไตรมาส 3

**การตัดสินใจสำคัญ:**
- เลื่อนวัน launch จาก 20 ส.ค. เป็น 1 ก.ย.
- อนุมัติงบ marketing เพิ่ม 200,000 บาท
- ใช้ agency ภายนอกสำหรับ social media

**สิ่งที่คุณต้องทำ:**
→ ส่ง brief ให้ agency ภายใน 3 วัน
→ อัปเดต timeline ให้ทีม dev`,
    tags: ['Outlook', 'สรุป', 'Email Thread', 'ประหยัดเวลา'],
    difficulty: 1,
    useCase: 'เข้าใจ thread ยาว, เพิ่งกลับมาจากลา, ก่อนตอบอีเมล',
    sourceUrl: 'https://github.com/pnp/copilot-prompts'
  },
  {
    id: 'ol003',
    category: 'outlook',
    source: 'official',
    title: 'จัดตาราง Meeting วันจันทร์',
    desc: 'แสดงรายการประชุมวันจันทร์พร้อมผู้เข้าร่วมในรูปแบบอ่านง่าย ไม่มีเวลา',
    prompt: `Organize my Monday meetings in a structured list format. At the top, include a heading labeled 'Monday.' Under this heading, list each meeting title as the primary bullet point. Indent and list the names of up to 10 attendees as sub-bullets beneath their respective meetings. Do not include meeting times. Keep the layout clean and easy to read.`,
    output: `**Monday**

• Product Roadmap Review
  - สมชาย วงศ์ดี (PM)
  - นิดา รักงาน (Dev Lead)
  - วิชัย ใจดี (Design)

• Client Demo — Company XYZ
  - คุณ Smith (ลูกค้า)
  - ทีม Sales (3 คน)

• Weekly All-Hands
  - ทีมงานทั้งหมด (24 คน)`,
    tags: ['Outlook', 'Calendar', 'ประชุม', 'จัดตาราง'],
    difficulty: 1,
    useCase: 'เริ่มต้นสัปดาห์, วางแผนวันจันทร์, ภาพรวม meeting',
    sourceUrl: 'https://github.com/pnp/copilot-prompts'
  },
  {
    id: 'ol004',
    category: 'outlook',
    source: 'official',
    title: 'วางแผน Meeting สัปดาห์ถัดไป',
    desc: 'สร้างภาพรวม meeting สัปดาห์หน้าแบบจัดลำดับ ช่วยเตรียมตัวล่วงหน้า',
    prompt: `Please prepare an overview of my meetings for the upcoming week with the following details: List all meetings where I am the organizer, but exclude those that already have an agenda. Sort these by date. List meetings where I am mentioned in the agenda and have specific tasks or action items to prepare. Sort these after the first category. List any remaining relevant meetings that do not fall into the above categories but may still require my attention. Do not include recurring meetings such as status meetings or routine check-ins unless I have a specific task to prepare. Format the output in a structured way, grouping by category and sorting by date within each category.`,
    output: `**ภาพรวม Meeting สัปดาห์ถัดไป**

**📋 ฉันเป็น Organizer (ยังไม่มี Agenda):**
- จ. 3 มิ.ย. — Budget Planning Workshop *(ต้องสร้าง agenda)*
- พ. 5 มิ.ย. — Team Retrospective *(ต้องสร้าง agenda)*

**✅ ฉันมี Action Items ที่ต้องเตรียม:**
- อ. 4 มิ.ย. — Steering Committee → เตรียม KPI Report Q2
- ศ. 7 มิ.ย. — Partner Review → เตรียม Proposal v2

**📌 Meeting อื่นที่ควรสนใจ:**
- พฤ. 6 มิ.ย. — All-Hands Company Update`,
    tags: ['Outlook', 'Calendar', 'วางแผน', 'สัปดาห์'],
    difficulty: 1,
    useCase: 'ทุกวันศุกร์เพื่อเตรียมสัปดาห์หน้า, เพิ่ม productivity',
    sourceUrl: 'https://github.com/pnp/copilot-prompts'
  },

  // ===== TEAMS — จาก Microsoft PnP Official =====
  {
    id: 'tm001',
    category: 'teams',
    source: 'official',
    title: 'สรุป Meeting Minutes จาก Transcript',
    desc: 'แปลง transcript การประชุม Teams เป็นรายงานการประชุมแบบตารางพร้อม action items',
    prompt: `Prepare a meeting minutes in a tabular format with following sections "Meeting title" - get the title from the meeting invite, "Attendees" - List all the name of the attendees who participated in the call, "Meeting time" - Actual time of the meeting scheduled, "Meeting duration" - calculate the time in minutes of the actual time taken for the call, "Discussion" - summarize the items discussed during the call and list the key insights, "Action items" - create a sub table with the following columns "no", "action items", "assigned to", "time frame"`,
    output: `| ส่วน | รายละเอียด |
|---|---|
| **Meeting Title** | Q3 Sales Review |
| **Attendees** | สมชาย, นิดา, วิชัย, คุณ Smith |
| **Meeting Time** | 14:00 น. |
| **Duration** | 47 นาที |
| **Discussion** | ทบทวนผล Q3, วางแผน Q4, งบประมาณ |

**Action Items:**
| # | งาน | ผู้รับผิดชอบ | กำหนดส่ง |
|---|---|---|---|
| 1 | จัดทำ Sales Report | สมชาย | 15 ส.ค. |
| 2 | ติดต่อ Supplier | นิดา | 20 ส.ค. |`,
    tags: ['Teams', 'Meeting Minutes', 'Transcript', 'สรุป'],
    difficulty: 1,
    useCase: 'หลังประชุม Teams, สร้างเอกสารประชุม, แจก Action Items',
    sourceUrl: 'https://github.com/pnp/copilot-prompts'
  },
  {
    id: 'tm002',
    category: 'teams',
    source: 'official',
    title: 'เตรียมตัวสำหรับประชุมถัดไป',
    desc: 'ให้ Copilot ทำหน้าที่เป็น executive assistant แจ้งรายละเอียดประชุมถัดไปทันที',
    prompt: `I'd like for you to act as my executive assistant. Can you tell me when my next meeting is, who will be attending, and what time the meeting is about? Please output in the following format: Meeting Title: Meeting Date/Time: Meeting Attendees: Meeting Topic(s)`,
    output: `**Meeting Title:** Product Strategy Workshop

**Meeting Date/Time:** วันนี้ 15:30 น. (อีก 45 นาที)

**Meeting Attendees:**
- คุณ Reid (Director of Product)
- ทีม PM ทั้งหมด (5 คน)
- Design Lead

**Meeting Topic(s):**
- ทบทวน Roadmap H2
- อนุมัติ Feature Priority
- Resource Allocation Q4`,
    tags: ['Teams', 'ประชุม', 'เตรียมตัว', 'Calendar'],
    difficulty: 1,
    useCase: 'ก่อนประชุม, เช็คว่าประชุมอะไรต่อไป, เตรียมตัวด่วน',
    sourceUrl: 'https://github.com/pnp/copilot-prompts'
  },
  {
    id: 'tm003',
    category: 'teams',
    source: 'official',
    title: 'Dashboard 5 งานสำคัญวันนี้',
    desc: 'สร้างรายงานสรุป 5 งานหลักของวัน พร้อมสถานะ, อุปสรรค และ deadline ที่ใกล้มา',
    prompt: `Build a dashboard summarizing the top 5 tasks of the day, their status, and any blockers preventing completion. Include upcoming deadlines for the week.`,
    output: `**🎯 Dashboard วันนี้ — ${new Date().toLocaleDateString('th-TH')}**

| งาน | สถานะ | อุปสรรค |
|---|---|---|
| ส่ง Report Q3 | 🟡 กำลังทำ | รอข้อมูลจากการเงิน |
| Review PR #42 | 🔴 ค้างอยู่ | — |
| Client Proposal | 🟢 เสร็จแล้ว | — |
| Team 1-on-1 | ⏰ วันนี้ 14:00 | — |
| Sprint Planning | ⏰ พรุ่งนี้ | ต้องเตรียม backlog |

**Deadlines สัปดาห์นี้:**
- ศ. — ส่ง Invoice รายเดือน
- ศ. — อัปเดต OKR`,
    tags: ['Teams', 'Dashboard', 'งาน', 'ผลิตภาพ'],
    difficulty: 1,
    useCase: 'เริ่มต้นวัน, Daily standup, วางแผนงานประจำวัน',
    sourceUrl: 'https://github.com/pnp/copilot-prompts'
  },

  // ===== M365 COPILOT CHAT — จาก Microsoft PnP Official =====
  {
    id: 'mc001',
    category: 'm365',
    source: 'official',
    title: 'วิเคราะห์การใช้เวลาในสัปดาห์นี้',
    desc: 'ให้ Copilot วิเคราะห์ calendar แล้วจัดหมวดหมู่ว่าเวลาถูกใช้ไปกับอะไรบ้าง',
    prompt: `Look at my events in my calendar for this week and create categories that describe how I'm using my time. Give me a brief description for each category and estimate the percentage of time I spend in each category.`,
    output: `**การวิเคราะห์การใช้เวลาสัปดาห์นี้:**

| หมวดหมู่ | เวลา (ชม.) | % | คำอธิบาย |
|---|---|---|---|
| 🤝 ประชุมกับลูกค้า | 6.5 | 38% | Demo, Follow-up, Negotiation |
| 👥 Internal Meeting | 5 | 29% | Standup, Planning, Review |
| 💻 Deep Work | 4 | 24% | เขียนรายงาน, วิเคราะห์ข้อมูล |
| 📧 Email & Admin | 1.5 | 9% | ตอบอีเมล, จัดการเอกสาร |

**💡 Insight:** ใช้เวลากับ Meeting มาก 67% ลองบล็อก Focus Time สัก 2 ชม./วัน`,
    tags: ['Calendar', 'Time Management', 'วิเคราะห์', 'ผลิตภาพ'],
    difficulty: 1,
    useCase: 'ทบทวนการใช้เวลา, Work-life balance, เพิ่มประสิทธิภาพ',
    sourceUrl: 'https://github.com/pnp/copilot-prompts'
  },
  {
    id: 'mc002',
    category: 'm365',
    source: 'official',
    title: 'กำหนด Action Items ประจำวัน',
    desc: 'ให้ Copilot ทำหน้าที่ personal assistant สรุปทุก message และ email เป็น action list จัดลำดับความสำคัญ',
    prompt: `You are a skilled personal assistant tasked to optimize my work. Your tasks include summarizing unread Teams messages and Outlook emails into a bulleted list with brief description which consists of Title of discussion, little context and ask from me, sorted by priority from high to low. You determine the priority by analyzing my work patterns and collaborations over the past [number of days] days. Use your expertise to outline the most effective course of actions for my day.`,
    output: `**🎯 Action Plan วันนี้ (จัดเรียงตามความสำคัญ)**

🔴 **HIGH — ตอบ ASAP**
• **Budget Approval** — CFO รอการอนุมัติงบประมาณ Q4 ภายใน 12:00 น.
• **Client Escalation** — ลูกค้า ABC ร้องเรียนเรื่องระบบ ต้องการ update

🟡 **MEDIUM — ทำวันนี้**
• **PR Review** — ทีม Dev รอ review code ก่อน deploy วันพรุ่งนี้
• **Weekly Report** — ส่งให้ Manager ก่อน 17:00 น.

🟢 **LOW — เมื่อมีเวลา**
• **Newsletter** — อ่านเพิ่มเติมเกี่ยวกับ AI Updates`,
    tags: ['M365', 'Action Items', 'Personal Assistant', 'ผลิตภาพ'],
    difficulty: 1,
    useCase: 'เช้าวันทำงาน, กลับจากลาพัก, จัดการงาน backlog',
    sourceUrl: 'https://github.com/pnp/copilot-prompts'
  },
  {
    id: 'mc003',
    category: 'm365',
    source: 'official',
    title: 'เรียนรู้วิธีใช้งานเครื่องมือใหม่',
    desc: 'ให้ Copilot สร้างคู่มือเรียนรู้ครบวงจรสำหรับเครื่องมือ/ระบบใหม่ที่ต้องใช้งาน',
    prompt: `I want to learn more about how to implement [tool, service]. Provide a high-level outline with guidance on how to implement, best practice set ups, how to get leader buy-in, etc.`,
    output: `**คู่มือเรียนรู้: Microsoft Power BI**

**ภาพรวมและประโยชน์:**
Power BI ช่วยแปลงข้อมูลดิบเป็น Dashboard แบบ Interactive ทำให้ตัดสินใจบนข้อมูลจริง

**ขั้นตอนการ Implement:**
1. ติดตั้ง Power BI Desktop (ฟรี)
2. เชื่อมต่อ Data Source (Excel, SQL, SharePoint)
3. สร้าง Data Model และ Relationships
4. ออกแบบ Dashboard และ Visualizations
5. Publish ขึ้น Power BI Service

**Best Practices:**
- ใช้ Star Schema สำหรับ Data Model
- สร้าง Naming Convention ก่อนเริ่ม

**วิธี Get Leader Buy-in:**
เน้น ROI: ลดเวลาทำรายงาน 80%, ข้อมูล Real-time`,
    tags: ['M365', 'เรียนรู้', 'IT', 'Implementation'],
    difficulty: 1,
    useCase: 'เรียนรู้เครื่องมือใหม่, Onboarding, IT Training',
    sourceUrl: 'https://adoption.microsoft.com/en-us/scenario-library/information-technology/'
  },
  {
    id: 'mc004',
    category: 'm365',
    source: 'official',
    title: 'เขียนเอกสาร Architecture ภาษาไม่เทคนิค',
    desc: 'แปลงข้อมูลระบบซับซ้อนเป็นเอกสาร 2 หน้าที่ผู้บริหารเข้าใจได้ ไม่ต้องมีพื้นฐาน IT',
    prompt: `Create a 2-page document detailing the architecture of [system] in non-technical language. Be sure to incorporate key features, technologies, and a process diagram.`,
    output: `**เอกสาร: สถาปัตยกรรมระบบ CRM ของเรา**

**หน้า 1 — ภาพรวมระบบ**
ระบบ CRM ของเราทำงานบน Cloud ช่วยให้ทีมขายติดตามลูกค้าได้แบบ Real-time จากทุกที่

🔄 **กระบวนการทำงาน:**
ลูกค้าติดต่อ → ระบบบันทึกอัตโนมัติ → แจ้งเตือนทีมขาย → ติดตาม → ปิดดีล

**หน้า 2 — ฟีเจอร์หลัก**
✅ บันทึกข้อมูลลูกค้าครบวงจร
✅ วิเคราะห์โอกาสขาย (AI-powered)
✅ Dashboard real-time สำหรับผู้บริหาร
✅ เชื่อมต่อ Outlook และ Teams โดยอัตโนมัติ`,
    tags: ['M365', 'เอกสาร', 'Architecture', 'IT'],
    difficulty: 2,
    useCase: 'นำเสนอผู้บริหาร, เอกสารระบบ, IT Communication',
    sourceUrl: 'https://adoption.microsoft.com/en-us/scenario-library/information-technology/'
  },
  {
    id: 'mc005',
    category: 'm365',
    source: 'official',
    title: 'สร้าง Outline อบรมพนักงานใหม่',
    desc: 'ออกแบบหลักสูตรอบรม 30 นาทีสำหรับระบบ/เครื่องมือใหม่ พร้อม key concepts และ demo',
    prompt: `I am training new users on our [software, system, tool]. Create an outline for a 30-minute training including key concepts, demos, and best practices.`,
    output: `**Outline อบรม: Microsoft Teams (30 นาที)**

**[0-5 นาที] Introduction**
- Teams คืออะไร ทำไมถึงใช้
- ประโยชน์หลัก 3 ข้อ

**[5-15 นาที] Demo หลัก**
- สร้าง Channel และโพสต์ข้อความ (3 นาที)
- จัดประชุม Video Call (3 นาที)
- แชร์ไฟล์และ Co-edit (4 นาที)

**[15-25 นาที] Hands-on Practice**
- ผู้เข้าอบรมทดลองใช้งานจริง
- วิทยากรตอบคำถาม

**[25-30 นาที] Best Practices & Q&A**
- 5 เคล็ดลับใช้ Teams ให้มีประสิทธิภาพ
- ถามตอบ`,
    tags: ['Training', 'Onboarding', 'M365', 'HR'],
    difficulty: 1,
    useCase: 'อบรมพนักงานใหม่, Change Management, System Rollout',
    sourceUrl: 'https://adoption.microsoft.com/en-us/scenario-library/information-technology/'
  },
  {
    id: 'mc006',
    category: 'm365',
    source: 'official',
    title: 'แก้ไขโค้ดและเพิ่ม Error Handling',
    desc: 'ให้ Copilot แก้ไข bug ในโค้ด พร้อมเพิ่ม comment และอธิบายการทำงาน',
    prompt: `Rewrite this code so that it will no longer have an error when the user picks an invalid product type. Also add comments and provide a summary of what it does: [code]`,
    output: `**สรุปสิ่งที่ Code นี้ทำ:**
ฟังก์ชัน \`getProductPrice()\` คืนค่าราคาสินค้าตาม type ที่รับมา

**การแก้ไข:**
\`\`\`python
def get_product_price(product_type: str) -> float:
    """คืนค่าราคาสินค้าตาม type — returns 0.0 หาก type ไม่ถูกต้อง"""
    prices = {
        "standard": 100.0,
        "premium": 250.0,
        "enterprise": 500.0
    }
    # ป้องกัน KeyError เมื่อ type ไม่อยู่ใน dict
    return prices.get(product_type.lower(), 0.0)
\`\`\`

**สิ่งที่เปลี่ยน:** ใช้ \`.get()\` แทน \`[]\` เพื่อป้องกัน KeyError`,
    tags: ['Coding', 'Bug Fix', 'Python', 'M365'],
    difficulty: 2,
    useCase: 'Debug code, Code Review, IT Development',
    sourceUrl: 'https://adoption.microsoft.com/en-us/scenario-library/information-technology/'
  },

  // ===== WRITING =====
  {
    id: 'w001',
    category: 'writing',
    title: 'เขียนอีเมลมืออาชีพ',
    desc: 'สร้างอีเมลธุรกิจที่ดูเป็นมืออาชีพ ชัดเจน และสื่อสารตรงประเด็น',
    prompt: `เขียนอีเมลธุรกิจในหัวข้อ: [หัวข้ออีเมล]

บริบท:
- ผู้รับ: [ตำแหน่ง/ชื่อผู้รับ]
- วัตถุประสงค์: [เหตุผลที่ส่งอีเมล]
- ข้อมูลสำคัญ: [ข้อมูลหลักที่ต้องสื่อ]

กรุณาเขียนอีเมลที่:
- มีน้ำเสียงเป็นมืออาชีพแต่เป็นมิตร
- ชัดเจนตั้งแต่ย่อหน้าแรก
- มี Call-to-Action ที่ชัดเจน
- ความยาวไม่เกิน 200 คำ`,
    output: `เรียน คุณสมชาย

หวังว่าคุณสบายดีนะครับ ผมติดต่อมาเพื่อนำเสนอโอกาสความร่วมมือที่น่าสนใจ...

ขอบคุณสำหรับเวลาของคุณครับ
[ชื่อของคุณ]`,
    tags: ['อีเมล', 'ธุรกิจ', 'การสื่อสาร'],
    difficulty: 1,
    useCase: 'ส่งอีเมลหาลูกค้า, ติดต่อคู่ค้า, รายงานผู้บริหาร'
  },
  {
    id: 'w002',
    category: 'writing',
    title: 'สรุปรายงานประชุม',
    desc: 'แปลงบันทึกการประชุมยาวๆ เป็นสรุปที่กระชับ พร้อม Action Items',
    prompt: `สรุปรายงานการประชุมต่อไปนี้:

[วางเนื้อหาบันทึกการประชุมที่นี่]

กรุณาสรุปในรูปแบบ:
## ประเด็นสำคัญ (3-5 ข้อ)
- ...

## การตัดสินใจหลัก
- ...

## Action Items
| ผู้รับผิดชอบ | งาน | Deadline |
|---|---|---|

## หัวข้อที่ต้องติดตาม
- ...`,
    output: `## ประเด็นสำคัญ
- ยอดขาย Q3 เติบโต 12% จากเป้าหมาย
- ต้องเร่งแก้ปัญหา Supply Chain ก่อน Q4
- อนุมัติงบประมาณเพิ่มเติม 2 ล้านบาท

## Action Items
| ผู้รับผิดชอบ | งาน | Deadline |
|---|---|---|
| คุณนิดา | จัดทำรายงานซัพพลายเออร์ | 15/08 |`,
    tags: ['สรุป', 'ประชุม', 'รายงาน', 'Action Items'],
    difficulty: 1,
    useCase: 'Meeting summary, Board meeting, Project status'
  },
  {
    id: 'w003',
    category: 'writing',
    title: 'เขียนบทความบล็อก SEO',
    desc: 'สร้างบทความที่ติดอันดับบน Google พร้อมโครงสร้าง SEO ที่ถูกต้อง',
    prompt: `เขียนบทความบล็อกในหัวข้อ: "[หัวข้อบทความ]"

Keyword หลัก: [keyword]
กลุ่มเป้าหมาย: [กลุ่มผู้อ่าน]
ความยาว: [จำนวนคำ] คำ

โครงสร้างที่ต้องการ:
1. H1: ชื่อบทความ (ใส่ keyword หลัก)
2. Introduction (150 คำ): เกี่ยวข้องกับผู้อ่านทันที
3. H2 ส่วนหลัก 4-5 หัวข้อ (แต่ละส่วน 200-300 คำ)
4. FAQ Section (3 คำถาม)
5. Conclusion + CTA

สไตล์: เป็นกันเอง, ให้คำแนะนำจริงจัง, ใช้ bullet points, มีตัวอย่าง`,
    output: `# 5 วิธีเพิ่มยอดขายออนไลน์ด้วย AI ที่ SME ไทยต้องรู้

ในยุคที่การแข่งขันออนไลน์สูงขึ้นทุกวัน การใช้ AI ให้เป็นอาวุธสำคัญ...

## 1. ใช้ Chatbot ตอบลูกค้าอัตโนมัติ 24/7
...`,
    tags: ['บล็อก', 'SEO', 'Content Marketing', 'เขียน'],
    difficulty: 2,
    useCase: 'Content Marketing, Blog, ขยายฐาน Organic Traffic'
  },
  {
    id: 'w004',
    category: 'writing',
    title: 'เขียน LinkedIn Post',
    desc: 'สร้าง Post LinkedIn ที่ดึงดูด Engagement และสร้าง Personal Brand',
    prompt: `เขียน LinkedIn Post เกี่ยวกับ: [หัวข้อ/ประสบการณ์/ข้อคิด]

รายละเอียด:
- ประเด็นหลัก: [สิ่งที่อยากแบ่งปัน]
- บทเรียน/Insight: [สิ่งที่ได้เรียนรู้]
- ผลลัพธ์ (ถ้ามี): [ตัวเลข/ผลลัพธ์จริง]

สไตล์:
- Hook ที่โดดเด่นใน 1-2 บรรทัดแรก
- เล่าเรื่องด้วยโครงสร้าง Story → Lesson → Action
- ใส่ Line break ทุก 1-2 ประโยค
- จบด้วยคำถามเปิดเพื่อกระตุ้น Comment
- Hashtag 3-5 อัน
- ความยาว 150-250 คำ`,
    output: `ผมเคยสัมภาษณ์งานพลาด 8 ครั้ง ก่อนจะเข้าใจสิ่งนี้...

3 ปีที่แล้ว ผมเดินออกจากห้องสัมภาษณ์พร้อมความรู้สึกสับสน

ทำไมถึงพลาดซ้ำๆ ทั้งๆ ที่ตอบคำถามทุกข้อได้?

วันนั้นผมตระหนักว่า — ผมขาย "ทักษะ" แต่ไม่ได้ขาย "คุณค่า"

#PersonalBranding #CareerGrowth #Leadership`,
    tags: ['LinkedIn', 'Personal Brand', 'Social Media'],
    difficulty: 1,
    useCase: 'สร้าง Personal Brand, แบ่งปันความรู้, Networking'
  },
  {
    id: 'w005',
    category: 'writing',
    title: 'เขียน Proposal โปรเจค',
    desc: 'สร้าง Project Proposal ที่ชัดเจน น่าเชื่อถือ และเพิ่มโอกาสอนุมัติ',
    prompt: `เขียน Project Proposal สำหรับโปรเจค: [ชื่อโปรเจค]

ข้อมูลพื้นฐาน:
- ปัญหาที่แก้ไข: [ปัญหาปัจจุบัน]
- โซลูชัน: [วิธีแก้ที่เสนอ]
- งบประมาณโดยประมาณ: [จำนวนเงิน]
- ระยะเวลา: [กรอบเวลา]
- ผู้มีส่วนได้เสีย: [stakeholders]

โครงสร้าง:
1. Executive Summary (1 ย่อหน้า)
2. Problem Statement
3. Proposed Solution
4. Benefits & ROI
5. Timeline & Milestones
6. Budget Breakdown
7. Risk Mitigation
8. Next Steps`,
    output: `# Project Proposal: ระบบ CRM อัจฉริยะ

## Executive Summary
โปรเจคนี้มุ่งแก้ปัญหาการสูญเสียลูกค้าที่เพิ่มขึ้น 15% โดยการ...

## ผลตอบแทนที่คาดหวัง
- ลดต้นทุน Customer Acquisition 20%
- เพิ่มอัตราการรักษาลูกค้า (Retention) 30%
- ROI คาดการณ์ที่ 250% ใน 18 เดือน`,
    tags: ['Proposal', 'โปรเจค', 'ธุรกิจ', 'การจัดการ'],
    difficulty: 2,
    useCase: 'ขออนุมัติงบ, เสนอโปรเจคใหม่, Business Case'
  },
  {
    id: 'w006',
    category: 'writing',
    title: 'แปลและปรับภาษา',
    desc: 'แปลเนื้อหาพร้อมปรับให้เหมาะกับวัฒนธรรมและกลุ่มเป้าหมายไทย',
    prompt: `แปลและปรับเนื้อหาต่อไปนี้:

[วางเนื้อหาต้นฉบับที่นี่]

คำแนะนำ:
- แปลจาก [ภาษาต้นทาง] เป็น [ภาษาปลายทาง]
- ปรับให้เหมาะกับ: [กลุ่มเป้าหมาย เช่น นักธุรกิจไทย / Gen Z / วัยทำงาน]
- น้ำเสียง: [ทางการ / กึ่งทางการ / เป็นกันเอง]
- รักษาความหมายและ Tone ต้นฉบับ
- อธิบายคำศัพท์เฉพาะที่อาจไม่คุ้นเคย (ถ้ามี)`,
    output: `ต้นฉบับ: "Leverage synergistic opportunities to maximize stakeholder value"

แปลแบบทางการ: "ใช้ประโยชน์จากโอกาสเชิงกลยุทธ์เพื่อเพิ่มมูลค่าสูงสุดแก่ผู้มีส่วนได้เสีย"

แปลแบบเข้าใจง่าย: "หาทางร่วมมือที่ได้ประโยชน์ทุกฝ่าย"`,
    tags: ['แปลภาษา', 'Localization', 'เนื้อหา'],
    difficulty: 1,
    useCase: 'แปลเอกสาร, ปรับ Marketing Copy, Localization'
  },
  {
    id: 'w007',
    category: 'writing',
    title: 'เขียน Press Release',
    desc: 'สร้างข่าวประชาสัมพันธ์มืออาชีพที่สื่อมวลชนต้องการเผยแพร่',
    prompt: `เขียน Press Release สำหรับ: [หัวข้อข่าว/เหตุการณ์]

รายละเอียด:
- บริษัท/องค์กร: [ชื่อ]
- เหตุการณ์/ข่าว: [รายละเอียด]
- วันที่: [วัน/เดือน/ปี]
- ผู้บริหารที่ Quote: [ชื่อ + ตำแหน่ง]
- ข้อมูลสำคัญ: [ตัวเลข, ข้อเท็จจริง]

รูปแบบมาตรฐาน:
- Headline: กระชับ ดึงดูด
- Dateline + Lead paragraph (5W1H ครบ)
- Body: ขยายความ 2-3 ย่อหน้า
- Quote ผู้บริหาร
- Boilerplate บริษัท
- ข้อมูลติดต่อ`,
    tags: ['PR', 'ประชาสัมพันธ์', 'ข่าว', 'สื่อ'],
    difficulty: 2,
    useCase: 'เปิดตัวผลิตภัณฑ์, ข่าวบริษัท, Events'
  },
  {
    id: 'w008',
    category: 'writing',
    title: 'เขียน Job Description',
    desc: 'สร้างประกาศรับสมัครงานที่ดึงดูดผู้สมัครที่ใช่',
    prompt: `เขียน Job Description สำหรับตำแหน่ง: [ชื่อตำแหน่ง]

บริบท:
- แผนก: [ชื่อแผนก]
- รายงานต่อ: [ตำแหน่งหัวหน้า]
- ประสบการณ์: [จำนวนปี]
- สถานที่: [สำนักงาน/Remote/Hybrid]
- เงินเดือน: [ช่วงเงินเดือน หรือ "ตามตกลง"]

เน้น:
- Mission ของตำแหน่ง (ไม่ใช่แค่รายการงาน)
- Impact ที่จะเกิดขึ้น
- ทักษะที่ Must-have vs Nice-to-have
- วัฒนธรรมองค์กรและ Benefits
- ใช้ภาษาที่ Inclusive`,
    tags: ['HR', 'สรรหา', 'Job Description', 'ประกาศงาน'],
    difficulty: 1,
    useCase: 'ลง JobsDB, LinkedIn, เว็บบริษัท'
  },

  // ===== ANALYSIS =====
  {
    id: 'a001',
    category: 'analysis',
    title: 'วิเคราะห์ SWOT',
    desc: 'วิเคราะห์จุดแข็ง จุดอ่อน โอกาส และภัยคุกคาม อย่างครบถ้วน',
    prompt: `วิเคราะห์ SWOT สำหรับ: [ชื่อธุรกิจ/โปรเจค/สินค้า]

ข้อมูลพื้นหลัง:
- อุตสาหกรรม: [ประเภทธุรกิจ]
- ขนาดธุรกิจ: [ขนาด/ยอดรายได้]
- คู่แข่งหลัก: [ชื่อคู่แข่ง]
- เป้าหมาย: [สิ่งที่ต้องการบรรลุ]

กรุณาวิเคราะห์:
**Strengths (จุดแข็ง)** — ปัจจัยภายในที่เป็นประโยชน์
**Weaknesses (จุดอ่อน)** — ปัจจัยภายในที่เป็นอุปสรรค
**Opportunities (โอกาส)** — ปัจจัยภายนอกที่เป็นประโยชน์
**Threats (ภัยคุกคาม)** — ปัจจัยภายนอกที่เป็นอุปสรรค

จากนั้นสรุป Strategic Recommendations 3 ข้อ`,
    output: `## SWOT Analysis: ร้านกาแฟสด ABC

**Strengths**
- ทำเลทอง ติด BTS มีคนสัญจรสูง
- บาริสต้ามืออาชีพ 5 ปีประสบการณ์
- ต้นทุนกาแฟต่ำจากซัพพลายเออร์ประจำ

**Opportunities**
- เทรนด์ Specialty Coffee กำลังเติบโต
- Delivery Platform ขยายตัว

**Strategic Recommendations**
1. เปิดช่อง Grab/LINE MAN เพื่อเพิ่มช่องทาง
2. สร้าง Loyalty Program รักษาลูกค้าประจำ`,
    tags: ['SWOT', 'วิเคราะห์', 'กลยุทธ์', 'ธุรกิจ'],
    difficulty: 2,
    useCase: 'วางแผนธุรกิจ, ประเมินโปรเจค, Strategic Planning'
  },
  {
    id: 'a002',
    category: 'analysis',
    title: 'วิเคราะห์ข้อมูล Excel/CSV',
    desc: 'อัปโหลดไฟล์และให้ Copilot วิเคราะห์ Trend, Pattern และ Insight',
    prompt: `วิเคราะห์ข้อมูลในไฟล์นี้: [แนบไฟล์ Excel/CSV]

คำถามที่ต้องการคำตอบ:
1. [คำถามที่ 1 เช่น: สินค้าใดขายดีที่สุด?]
2. [คำถามที่ 2 เช่น: เดือนใดมียอดขายต่ำสุด?]
3. [คำถามที่ 3]

การวิเคราะห์ที่ต้องการ:
- Summary statistics (ค่าเฉลี่ย, สูงสุด, ต่ำสุด, Trend)
- Top 5 และ Bottom 5 ในแต่ละมิติ
- ความผิดปกติ (Anomalies) ที่น่าสนใจ
- Insight เชิงธุรกิจ 3 ข้อ
- คำแนะนำ Action 2 ข้อ`,
    output: `## สรุปการวิเคราะห์ยอดขาย Q3 2025

**Overview:** ยอดขายรวม 4.2 ล้านบาท เติบโต 8.3% จากไตรมาสก่อน

**Top 3 สินค้าขายดี:**
1. Product A — 1.2M บาท (28%)
2. Product B — 0.9M บาท (21%)
3. Product C — 0.7M บาท (17%)

**Insight:** ยอดขายลดลงในช่วงกลางเดือน อาจเกี่ยวกับวันหยุดยาว`,
    tags: ['Excel', 'Data', 'วิเคราะห์', 'Business Intelligence'],
    difficulty: 2,
    useCase: 'รายงานยอดขาย, วิเคราะห์ลูกค้า, ติดตาม KPI'
  },
  {
    id: 'a003',
    category: 'analysis',
    title: 'วิเคราะห์คู่แข่ง',
    desc: 'เปรียบเทียบคู่แข่งอย่างเป็นระบบเพื่อหา Competitive Advantage',
    prompt: `วิเคราะห์คู่แข่งสำหรับธุรกิจ [ชื่อธุรกิจของเรา]

คู่แข่งที่ต้องวิเคราะห์:
1. [คู่แข่ง A]
2. [คู่แข่ง B]
3. [คู่แข่ง C]

มิติการวิเคราะห์:
- ราคา/กลยุทธ์ราคา
- ผลิตภัณฑ์/บริการ (จุดเด่น-จุดด้อย)
- Target Customer
- ช่องทางการขาย/การตลาด
- จุดแข็งที่เรียนรู้ได้
- Gap ที่เราสามารถเข้าไปแข็งข่าน

สรุปในตาราง + Recommendation 3 ข้อสำหรับเราจะทำอย่างไร`,
    output: `| มิติ | คู่แข่ง A | คู่แข่ง B | เรา |
|---|---|---|---|
| ราคา | สูง | กลาง | กลาง-ต่ำ |
| UX | ดีมาก | ปานกลาง | ดี |
| Support | 24/7 | จ-ศ | จ-ศ |

**Recommendations:**
1. เน้น Price-Value ในตลาด SME ที่คู่แข่งมองข้าม
2. พัฒนา Mobile App ให้ดีกว่าคู่แข่ง B`,
    tags: ['Competitive Analysis', 'ตลาด', 'กลยุทธ์'],
    difficulty: 2,
    useCase: 'Market Research, เข้าตลาดใหม่, Product Strategy'
  },
  {
    id: 'a004',
    category: 'analysis',
    title: 'สรุปรายงานยาว',
    desc: 'ย่อรายงาน บทความ หรือเอกสารยาวๆ ให้เป็น Key Points ที่นำไปใช้ได้',
    prompt: `สรุปเอกสารต่อไปนี้:

[วางเนื้อหาเอกสาร/รายงาน/บทความ]

ต้องการสรุปในรูปแบบ:
- **สรุปหลัก (1 ย่อหน้า):** ภาพรวมทั้งหมด
- **Key Points (5-7 ข้อ):** ประเด็นสำคัญที่ต้องรู้
- **ตัวเลข/สถิติสำคัญ:** Data points ที่สำคัญ
- **สิ่งที่ขาดหายหรือน่าสังเกต:** จุดที่ควรระวัง
- **การนำไปปฏิบัติ:** 2-3 แอคชันที่ทำได้ทันที`,
    tags: ['สรุป', 'รายงาน', 'Research', 'เอกสาร'],
    difficulty: 1,
    useCase: 'อ่านรายงานประจำปี, Research Paper, Policy Document'
  },
  {
    id: 'a005',
    category: 'analysis',
    title: 'วิเคราะห์ Feedback ลูกค้า',
    desc: 'จัดกลุ่มและวิเคราะห์ความคิดเห็นลูกค้า เพื่อหา Insight ที่นำไปพัฒนาได้',
    prompt: `วิเคราะห์ Customer Feedback ต่อไปนี้:

[วางรีวิว/ความคิดเห็น/แบบสอบถาม]

การวิเคราะห์ที่ต้องการ:
1. **Sentiment Analysis:** แบ่ง Positive/Negative/Neutral (%)
2. **Theme Clustering:** จัดกลุ่มประเด็นที่พูดถึงบ่อย (Top 5)
3. **Pain Points หลัก:** สิ่งที่ลูกค้าบ่นมากที่สุด
4. **สิ่งที่ลูกค้าชอบ:** จุดแข็งที่ต้องรักษาไว้
5. **Quick Wins:** สิ่งที่แก้ได้ทันทีภายใน 30 วัน
6. **Long-term Improvements:** การพัฒนาระยะยาว`,
    tags: ['Feedback', 'Customer', 'Sentiment', 'UX'],
    difficulty: 2,
    useCase: 'Product Review, App Store Reviews, NPS Analysis'
  },
  {
    id: 'a006',
    category: 'analysis',
    title: 'สร้าง Dashboard Insight',
    desc: 'แปลงตัวเลขและข้อมูลดิบให้เป็น Story ที่ผู้บริหารเข้าใจได้ทันที',
    prompt: `ช่วยสร้าง Executive Summary จากข้อมูลต่อไปนี้:

ข้อมูล KPI ประจำเดือน [เดือน/ปี]:
[วางข้อมูลตัวเลข KPI ที่นี่]

ต้องการ:
- สรุปสถานการณ์ธุรกิจ 3 ประโยค
- ไฟเขียว ไฟเหลือง ไฟแดง แต่ละ KPI
- เหตุผลว่าทำไมตัวเลขถึงเป็นแบบนี้
- แผนปรับปรุงสำหรับตัวเลขที่ต่ำกว่าเป้า
- Outlook สำหรับเดือนถัดไป`,
    tags: ['Dashboard', 'KPI', 'Executive', 'รายงาน'],
    difficulty: 2,
    useCase: 'Monthly Report, Board Meeting, Business Review'
  },

  // ===== CODING =====
  {
    id: 'c001',
    category: 'coding',
    title: 'อธิบายโค้ดที่ซับซ้อน',
    desc: 'ให้ Copilot อธิบายโค้ดที่ไม่เข้าใจ แบบ Step-by-step ชัดเจน',
    prompt: `อธิบายโค้ดต่อไปนี้ให้เข้าใจง่าย:

\`\`\`[ภาษา]
[วางโค้ดที่นี่]
\`\`\`

กรุณาอธิบาย:
1. **จุดประสงค์หลัก:** โค้ดนี้ทำอะไร
2. **อธิบาย Line-by-line:** ทีละบรรทัดหรือทีละ Block
3. **Logic การทำงาน:** Flow การทำงาน
4. **Input/Output:** รับค่าอะไร ส่งออกอะไร
5. **Edge Cases:** กรณีพิเศษที่ต้องระวัง
6. **จุดที่อาจปรับปรุงได้:** ถ้ามี`,
    output: `## อธิบายโค้ด: fibonacci function

**จุดประสงค์:** คำนวณเลข Fibonacci ลำดับที่ n

**Line-by-line:**
- Line 1: ตรวจสอบ Base case (n ≤ 1)
- Line 2: Recursive call สองครั้ง
- Line 3: รวมผล

**ปัญหา:** การ Recursive แบบนี้ช้ามาก O(2^n)
**ทางแก้:** ใช้ Dynamic Programming หรือ Memoization`,
    tags: ['Code Review', 'อธิบาย', 'Learning', 'Debug'],
    difficulty: 1,
    useCase: 'Code Review, Onboarding, Legacy Code'
  },
  {
    id: 'c002',
    category: 'coding',
    title: 'เขียน Unit Test',
    desc: 'สร้าง Test Cases ที่ครอบคลุม Happy Path และ Edge Cases',
    prompt: `เขียน Unit Tests สำหรับฟังก์ชันนี้:

\`\`\`[ภาษา]
[วางฟังก์ชันที่ต้องการทดสอบ]
\`\`\`

Testing Framework: [Jest / PyTest / NUnit / ...]

ต้องการ Test Cases:
1. **Happy Path:** กรณีทั่วไปที่ทำงานปกติ
2. **Edge Cases:** ค่า 0, null, empty, ค่า max/min
3. **Error Cases:** Input ผิดรูปแบบ, Exception handling
4. **Boundary Tests:** ค่าที่อยู่ที่ขอบเขต
5. **Performance:** ถ้า Input ขนาดใหญ่

ให้ Test ครอบคลุมอย่างน้อย 90% coverage`,
    output: `\`\`\`javascript
describe('calculateDiscount', () => {
  // Happy Path
  it('should return 10% discount for order > 1000', () => {
    expect(calculateDiscount(1500)).toBe(150);
  });

  // Edge Cases
  it('should return 0 for empty cart', () => {
    expect(calculateDiscount(0)).toBe(0);
  });

  // Error Cases
  it('should throw for negative amount', () => {
    expect(() => calculateDiscount(-100)).toThrow('Invalid amount');
  });
});
\`\`\``,
    tags: ['Testing', 'Unit Test', 'TDD', 'Quality'],
    difficulty: 2,
    useCase: 'Code Quality, CI/CD Pipeline, Bug Prevention'
  },
  {
    id: 'c003',
    category: 'coding',
    title: 'แปลงโค้ดระหว่างภาษา',
    desc: 'Migrate โค้ดจากภาษาหนึ่งไปยังอีกภาษา พร้อม Best Practices',
    prompt: `แปลงโค้ดต่อไปนี้จาก [ภาษาต้นทาง] เป็น [ภาษาปลายทาง]:

\`\`\`[ภาษาต้นทาง]
[วางโค้ดต้นทาง]
\`\`\`

ข้อกำหนด:
- รักษา Logic และ Business Rules เดิมทั้งหมด
- ใช้ Idioms และ Best Practices ของ [ภาษาปลายทาง]
- เพิ่ม Error Handling ถ้าขาด
- เพิ่ม Type Safety ถ้าภาษาปลายทางรองรับ
- Comment อธิบายส่วนที่แตกต่างกัน
- แจ้ง Dependencies ที่ต้องติดตั้งเพิ่ม`,
    tags: ['Migration', 'แปลงโค้ด', 'Refactoring'],
    difficulty: 2,
    useCase: 'Language Migration, Legacy Modernization'
  },
  {
    id: 'c004',
    category: 'coding',
    title: 'Debug และหาสาเหตุ Error',
    desc: 'วิเคราะห์ Error Message และหาวิธีแก้ไขอย่างเป็นระบบ',
    prompt: `ช่วย Debug ปัญหาต่อไปนี้:

**Error Message:**
\`\`\`
[วาง Error Message ที่นี่]
\`\`\`

**โค้ดที่ทำให้เกิด Error:**
\`\`\`[ภาษา]
[วางโค้ด]
\`\`\`

**Context:**
- ภาษา/Framework: [ชื่อ + Version]
- เกิดขึ้นเมื่อ: [อธิบายสถานการณ์]
- สิ่งที่ลองแล้ว: [สิ่งที่ลองแก้แล้ว]
- สภาพแวดล้อม: [Dev/Staging/Production, OS]

ต้องการ: สาเหตุ + วิธีแก้ + การป้องกันในอนาคต`,
    output: `## การวิเคราะห์ Error: TypeError: Cannot read property

**สาเหตุ:** `user` เป็น `null` เพราะ API ยังไม่ return ข้อมูล
ก่อนที่ code พยายามอ่าน `.name`

**แก้ไข:**
\`\`\`javascript
// ก่อน (ผิด)
const name = user.name;

// หลัง (ถูก)
const name = user?.name ?? 'ไม่ระบุชื่อ';
\`\`\`

**ป้องกัน:** เพิ่ม Loading State และ null check`,
    tags: ['Debug', 'Error', 'Troubleshoot', 'Fix'],
    difficulty: 1,
    useCase: 'Production Bug, Development Error, Code Review'
  },
  {
    id: 'c005',
    category: 'coding',
    title: 'เขียน SQL Query',
    desc: 'สร้าง SQL ที่ซับซ้อน เช่น JOIN หลายตาราง, Aggregate, Subquery',
    prompt: `เขียน SQL Query สำหรับ:

**ต้องการข้อมูล:** [อธิบายผลลัพธ์ที่ต้องการ]

**โครงสร้างตาราง:**
\`\`\`
Table: [ชื่อตาราง 1] (columns: ...)
Table: [ชื่อตาราง 2] (columns: ...)
\`\`\`

**เงื่อนไข:**
- กรองข้อมูล: [เงื่อนไข WHERE]
- จัดกลุ่ม: [GROUP BY ถ้ามี]
- เรียงลำดับ: [ORDER BY]
- จำนวนแถว: [LIMIT]

**Database:** [MySQL / PostgreSQL / SQL Server / ...]
ต้องการ Query ที่ optimized และอธิบาย Logic`,
    output: `\`\`\`sql
SELECT
  c.customer_name,
  COUNT(o.id) AS total_orders,
  SUM(o.amount) AS total_spent,
  MAX(o.created_at) AS last_order
FROM customers c
LEFT JOIN orders o ON c.id = o.customer_id
WHERE o.created_at >= '2025-01-01'
  AND o.status = 'completed'
GROUP BY c.id, c.customer_name
HAVING total_spent > 50000
ORDER BY total_spent DESC
LIMIT 20;
\`\`\``,
    tags: ['SQL', 'Database', 'Query', 'ข้อมูล'],
    difficulty: 2,
    useCase: 'Report Query, Data Analysis, Backend Development'
  },
  {
    id: 'c006',
    category: 'coding',
    title: 'Code Review & Refactor',
    desc: 'ตรวจสอบโค้ดให้ Clean, Performant และ Maintainable',
    prompt: `ช่วย Code Review และ Refactor โค้ดต่อไปนี้:

\`\`\`[ภาษา]
[วางโค้ดที่ต้องการ Review]
\`\`\`

ตรวจสอบในด้าน:
1. **Code Quality:** ความอ่านง่าย, ตั้งชื่อตัวแปร
2. **Performance:** ความเร็ว, Memory usage
3. **Security:** ช่องโหว่ที่อาจมี
4. **Error Handling:** จัดการ Error ครบไหม
5. **DRY Principle:** ซ้ำซ้อนที่แก้ได้
6. **SOLID Principles:** ถ้า OOP

ให้โค้ดที่ Refactor แล้ว + อธิบายการเปลี่ยนแปลง`,
    tags: ['Code Review', 'Refactor', 'Clean Code', 'Best Practice'],
    difficulty: 3,
    useCase: 'Pull Request Review, Tech Debt, Performance Optimization'
  },
  {
    id: 'c007',
    category: 'coding',
    title: 'เขียน API Documentation',
    desc: 'สร้าง API Docs ที่ชัดเจน ครบถ้วน พร้อมตัวอย่าง Request/Response',
    prompt: `เขียน API Documentation สำหรับ Endpoint ต่อไปนี้:

\`\`\`[ภาษา/Framework]
[วางโค้ด API Endpoint]
\`\`\`

รูปแบบ Markdown:

## POST /api/[endpoint]

**คำอธิบาย:** [จุดประสงค์]
**Authentication:** [Bearer Token / API Key / ...]

### Request
| Field | Type | Required | Description |
|---|---|---|---|

### Response
**200 OK:**
\`\`\`json
{}
\`\`\`

### Error Codes
| Code | Message | เหตุผล |
|---|---|---|`,
    tags: ['API', 'Documentation', 'Backend', 'OpenAPI'],
    difficulty: 2,
    useCase: 'API Development, Developer Portal, Integration Guide'
  },

  // ===== MARKETING =====
  {
    id: 'm001',
    category: 'marketing',
    title: 'เขียน Ad Copy Facebook/Instagram',
    desc: 'สร้าง Copy โฆษณาที่ดึงดูดและแปลงเป็นยอดขาย',
    prompt: `เขียน Ad Copy สำหรับโฆษณา Facebook/Instagram:

สินค้า/บริการ: [ชื่อ + คำอธิบายสั้น]
USP (จุดขายหลัก): [สิ่งที่ทำให้แตกต่าง]
กลุ่มเป้าหมาย: [อายุ, เพศ, ความสนใจ, ปัญหาที่มี]
เป้าหมายโฆษณา: [ยอดขาย / Lead / การรับรู้แบรนด์]
งบประมาณ: [ระดับ: เล็ก/กลาง/ใหญ่]

สร้าง Copy 3 เวอร์ชัน:
1. **เน้น Pain Point** — กระตุ้นปัญหา
2. **เน้น Solution** — นำเสนอทางออก
3. **เน้น Social Proof** — หลักฐานความน่าเชื่อถือ

แต่ละเวอร์ชัน: Headline (25 ตัวอักษร) + Body (90 ตัวอักษร) + CTA`,
    output: `**Version 1 (Pain Point):**
Headline: "เหนื่อยจัดการสต็อกแบบเดิมๆ?"
Body: "เสียเวลานับของ นับผิดบ่อย ของหายไม่รู้ตัว ถึงเวลาเปลี่ยนแล้ว"
CTA: "ทดลองฟรี 14 วัน"

**Version 2 (Solution):**
Headline: "จัดการสต็อก Real-time ทุกที่"
Body: "ดูยอดสต็อกทันที อัปเดตอัตโนมัติ เชื่อมกับ Lazada/Shopee"
CTA: "เริ่มใช้งานเลย"`,
    tags: ['Facebook Ads', 'Copy', 'โฆษณา', 'สร้างสรรค์'],
    difficulty: 2,
    useCase: 'Facebook Ads, Instagram Ads, Performance Marketing'
  },
  {
    id: 'm002',
    category: 'marketing',
    title: 'วางแผน Content Calendar',
    desc: 'สร้างปฏิทินเนื้อหา 30 วันที่สม่ำเสมอและสร้าง Engagement',
    prompt: `สร้าง Content Calendar สำหรับ 30 วัน:

แบรนด์/ธุรกิจ: [ชื่อและคำอธิบายสั้น]
Platform หลัก: [Facebook / Instagram / TikTok / LinkedIn / ...]
Persona ลูกค้า: [อายุ, เพศ, ความสนใจ, Lifestyle]
เป้าหมาย: [เพิ่ม Follower / Engagement / ยอดขาย]
โทนแบรนด์: [สนุก / ให้ความรู้ / แรงบันดาลใจ / ...]
กิจกรรมพิเศษ: [วันสำคัญในเดือนนี้]

รูปแบบตาราง:
| วันที่ | Content Pillar | หัวข้อ | Format | Caption (ย่อ) | Hashtag |
|---|---|---|---|---|---|`,
    output: `| วันที่ | Content Pillar | หัวข้อ | Format | Caption |
|---|---|---|---|---|
| 1 | Education | 5 เทรนด์กาแฟ 2025 | Carousel | "คุณรู้ไหมว่า..." |
| 3 | Engagement | This or That: Latte vs Espresso | Story Poll | "คุณทีม?" |
| 5 | Product | New Menu: Matcha Cloud | Reels | "ลิ้มลองได้แล้ววันนี้" |`,
    tags: ['Content', 'Calendar', 'Social Media', 'Plan'],
    difficulty: 2,
    useCase: 'Social Media Marketing, Brand Building, Community'
  },
  {
    id: 'm003',
    category: 'marketing',
    title: 'เขียน Email Marketing',
    desc: 'สร้าง Email Campaign ที่เปิดอ่านสูงและกระตุ้นให้คลิก',
    prompt: `เขียน Email Marketing Campaign:

เป้าหมาย: [Promotion / Onboarding / Re-engagement / Newsletter]
สินค้า/บริการ: [รายละเอียด]
Offer: [ส่วนลด / ของแถม / เนื้อหาพิเศษ]
Deadline: [วันสิ้นสุดโปรโมชัน]
ผู้รับ: [กลุ่มลูกค้า]

ต้องการ:
- **Subject Line** 3 เวอร์ชัน (ใช้ตัวอักษร emoji)
- **Preheader text** (90 ตัวอักษร)
- **Email Body:** Hero section, Body, CTA Button, Footer
- **A/B Test Suggestion:** อะไรที่ควรทดสอบ`,
    tags: ['Email', 'Campaign', 'Newsletter', 'Conversion'],
    difficulty: 2,
    useCase: 'Email Campaign, Drip Email, Promotion'
  },
  {
    id: 'm004',
    category: 'marketing',
    title: 'สร้าง Buyer Persona',
    desc: 'พัฒนา Customer Persona ที่ละเอียดเพื่อทำการตลาดที่ตรงเป้า',
    prompt: `สร้าง Buyer Persona สำหรับ: [ธุรกิจ/สินค้า/บริการ]

ข้อมูลที่มี (ถ้ามี):
- ข้อมูล Customer ปัจจุบัน: [อายุ เพศ ฯลฯ]
- Feedback ที่ได้รับ: [สิ่งที่ลูกค้าพูด]
- Best Customers: [ลักษณะลูกค้าที่ดีที่สุด]

สร้าง Persona 2 แบบ แต่ละแบบประกอบด้วย:
- ชื่อ + รูปแบบ Lifestyle
- ข้อมูลประชากรศาสตร์
- เป้าหมายและแรงจูงใจ
- Pain Points (3-5 ข้อ)
- พฤติกรรมการซื้อ
- ช่องทางที่ใช้บ่อย
- สิ่งที่ทำให้ตัดสินใจซื้อ
- Quote ที่เป็นตัวแทน`,
    tags: ['Persona', 'ลูกค้า', 'Research', 'Strategy'],
    difficulty: 2,
    useCase: 'Marketing Strategy, Product Development, Sales'
  },
  {
    id: 'm005',
    category: 'marketing',
    title: 'เขียน Script TikTok/Reels',
    desc: 'สร้างสคริปต์วิดีโอสั้นที่ Hook ผู้ชมใน 3 วินาทีแรก',
    prompt: `เขียน Script สำหรับวิดีโอ [TikTok / Reels / YouTube Shorts]:

หัวข้อ/สินค้า: [เรื่องที่ต้องการนำเสนอ]
ระยะเวลา: [15 / 30 / 60 วินาที]
เป้าหมาย: [Awareness / ยอดขาย / Entertainment / Educate]
Tone: [สนุก / จริงจัง / ให้ความรู้ / Storytelling]
CTA: [ติดตาม / ซื้อ / คอมเมนต์ / แชร์]

โครงสร้าง Script:
[0-3s] HOOK: ประโยคแรกที่ดึงดูดทันที
[3-25s] CONTENT: เนื้อหาหลัก + Visual Direction
[25-30s] CTA: สิ่งที่ต้องการให้ผู้ชมทำ

พร้อม: On-screen text, B-roll suggestions, ดนตรีแนะนำ`,
    output: `**[0-3s] HOOK:**
"เหตุผลที่คุณแพ้คู่แข่ง ทั้งๆ ที่สินค้าดีกว่า"
[Visual: หน้าตกใจ / คำถาม on screen]

**[3-25s] CONTENT:**
"ลูกค้าไม่ได้ซื้อสินค้าที่ดีที่สุด..."
[Visual: Comparison, สถิติ]

**[25-30s] CTA:**
"กดติดตามรับเคล็ดลับทุกอาทิตย์"`,
    tags: ['TikTok', 'Reels', 'Video Script', 'Viral'],
    difficulty: 2,
    useCase: 'Social Media Video, Brand Content, Product Launch'
  },

  // ===== HR =====
  {
    id: 'h001',
    category: 'hr',
    title: 'เขียน Interview Questions',
    desc: 'สร้างชุดคำถามสัมภาษณ์ที่วัดทักษะและ Culture Fit ได้จริง',
    prompt: `สร้างชุดคำถามสัมภาษณ์สำหรับตำแหน่ง: [ชื่อตำแหน่ง]

ทักษะที่ต้องการวัด:
1. Technical Skills: [ทักษะหลัก]
2. Soft Skills: [ทักษะที่สำคัญ]
3. Culture Fit: [วัฒนธรรมองค์กร]

ต้องการคำถาม:
- **Warm-up (2 ข้อ):** คำถามทั่วไป
- **Technical (5 ข้อ):** วัดความสามารถจริง
- **Behavioral (4 ข้อ):** STAR Method
- **Situational (3 ข้อ):** กรณีสมมติ
- **Culture Fit (3 ข้อ):** ค่านิยมและวิธีทำงาน
- **ถามกลับ (ให้ผู้สมัครถาม):** 3-5 คำถามแนะนำ

พร้อม Rubric คะแนน 1-5 สำหรับแต่ละข้อ`,
    output: `**Behavioral Questions (STAR):**

Q: "เล่าให้ฟังถึงสถานการณ์ที่คุณต้องจัดการโปรเจคที่มีความกดดันสูงและ Deadline แน่น"

**Rubric:**
5 — เล่า Situation ชัดเจน, Action เป็น Proactive, Result วัดได้
3 — เล่าได้แต่ขาดตัวเลข/ผลลัพธ์ที่ชัดเจน
1 — ตอบแบบทั่วไป ไม่มีตัวอย่างจริง`,
    tags: ['สัมภาษณ์', 'Recruitment', 'HR', 'Hiring'],
    difficulty: 2,
    useCase: 'สรรหาพนักงาน, พัฒนา Interview Process'
  },
  {
    id: 'h002',
    category: 'hr',
    title: 'เขียน Performance Review',
    desc: 'สร้างการประเมินผลงานที่สร้างสรรค์ ยุติธรรม และกระตุ้นการพัฒนา',
    prompt: `ช่วยเขียน Performance Review สำหรับพนักงาน:

ข้อมูลพนักงาน:
- ตำแหน่ง: [ชื่อตำแหน่ง]
- ระยะเวลาทำงาน: [X ปี/เดือน]
- Period ที่ประเมิน: [Q1-Q4 / ครึ่งปี]

ผลงานที่สำเร็จ:
[รายการผลงาน]

จุดที่ต้องพัฒนา:
[รายการ]

เป้าหมายรอบหน้า:
[เป้าหมาย]

ต้องการ Review ที่:
- เริ่มด้วยสิ่งที่ทำได้ดี (Strength-based)
- Feedback เรื่องพัฒนาแบบ Constructive ไม่ตำหนิ
- เป้าหมาย SMART สำหรับรอบต่อไป
- น้ำเสียงเป็นกัลยาณมิตร กระตุ้นความมุ่งมั่น`,
    tags: ['Performance Review', 'HR', 'Feedback', 'พัฒนา'],
    difficulty: 2,
    useCase: 'Annual Review, Mid-year Review, PIP'
  },
  {
    id: 'h003',
    category: 'hr',
    title: 'สร้างแผนฝึกอบรม',
    desc: 'ออกแบบ Training Program ที่ตรงกับ Skill Gap และเป้าหมายองค์กร',
    prompt: `ออกแบบแผนฝึกอบรมสำหรับ:

กลุ่มเป้าหมาย: [ตำแหน่ง/ระดับ/จำนวนคน]
Skill Gap ที่ระบุ: [ทักษะที่ขาด]
เป้าหมายองค์กร: [สิ่งที่องค์กรต้องการบรรลุ]
งบประมาณ: [จำนวน บาท]
ระยะเวลา: [X เดือน]
รูปแบบที่ต้องการ: [Online / Onsite / Blended]

ต้องการแผนที่ระบุ:
- Learning Objectives ที่วัดได้
- โครงสร้างหลักสูตร (Module/Week)
- วิธีการสอนที่เหมาะสม
- การวัดผล (Pre/Post test, OJT Assessment)
- ค่าใช้จ่ายโดยประมาณ
- KPI ของแผน Training`,
    tags: ['Training', 'L&D', 'HR', 'พัฒนาคน'],
    difficulty: 3,
    useCase: 'Training Plan, Skill Development, Onboarding Program'
  },
  {
    id: 'h004',
    category: 'hr',
    title: 'เขียน OKR',
    desc: 'สร้าง Objectives & Key Results ที่ชัดเจน ท้าทาย และวัดได้',
    prompt: `ช่วยเขียน OKR สำหรับ:

ทีม/บุคคล: [ชื่อทีม/แผนก]
Period: [Q1/Q2/Q3/Q4 ปี...]
Strategy บริษัท: [เป้าหมายใหญ่ขององค์กร]
ความท้าทายหลัก: [ปัญหาหรือโอกาสที่เจอ]

สร้าง OKR:
- **Objective 1:** (เป้าหมายเชิงคุณภาพ ดึงดูดใจ)
  - KR 1.1: [วัดได้ มีตัวเลข deadline]
  - KR 1.2:
  - KR 1.3:

หลักการ:
- Objective: ใช้ภาษากระตุ้นแรงบันดาลใจ
- Key Results: 70% = Good, 100% = เก่งมาก
- 3-5 KR ต่อ Objective
- ไม่ใช่ Task list แต่เป็นผลลัพธ์`,
    tags: ['OKR', 'Goal Setting', 'KPI', 'Strategy'],
    difficulty: 2,
    useCase: 'Quarterly Planning, Team Goal Setting, Performance Management'
  },

  // ===== EDUCATION =====
  {
    id: 'e001',
    category: 'education',
    title: 'สร้างแบบทดสอบ',
    desc: 'สร้างข้อสอบหลากหลายรูปแบบพร้อมเฉลยและคำอธิบาย',
    prompt: `สร้างแบบทดสอบสำหรับหัวข้อ: [หัวข้อ]

ระดับ: [ม.ต้น / ม.ปลาย / มหาวิทยาลัย / Professional]
จำนวน: [X ข้อ]
รูปแบบ: [ปรนัย / อัตนัย / True-False / Mix]
ระดับความยาก: [ง่าย / ปานกลาง / ยาก / Mix 30:50:20]

ต้องการ:
- คำถามที่วัดความเข้าใจจริง ไม่ใช่แค่จำ
- ตัวเลือกที่สมเหตุสมผล (ไม่ชัดเจนเกินไป)
- เฉลยพร้อมคำอธิบายละเอียด
- Bloom's Taxonomy Level สำหรับแต่ละข้อ
- เวลาที่แนะนำในการทำ`,
    output: `**ข้อ 1 (Comprehension Level):**
ข้อใดอธิบายความหมายของ "Machine Learning" ได้ถูกต้องที่สุด?

ก. การเขียนโปรแกรมให้คอมพิวเตอร์ทำตามคำสั่งทีละขั้นตอน
ข. การให้คอมพิวเตอร์เรียนรู้จากข้อมูลและปรับปรุงตัวเองได้ ✓
ค. การสร้างหุ่นยนต์ที่เคลื่อนที่ได้เหมือนมนุษย์
ง. การประมวลผลภาพถ่ายด้วยคอมพิวเตอร์

**เฉลย:** ข. เพราะ ML เน้นการเรียนรู้จาก Pattern ในข้อมูล...`,
    tags: ['แบบทดสอบ', 'ข้อสอบ', 'ครู', 'การศึกษา'],
    difficulty: 2,
    useCase: 'ครู, อาจารย์, e-Learning, Corporate Training'
  },
  {
    id: 'e002',
    category: 'education',
    title: 'อธิบายแนวคิดซับซ้อน',
    desc: 'ให้ Copilot อธิบายเรื่องยากให้เข้าใจง่าย ด้วยอุปมาอุปไมยที่เหมาะสม',
    prompt: `อธิบาย [แนวคิด/ทฤษฎี/เรื่อง] ให้เข้าใจง่าย

ผู้รับสาร: [เด็ก ม.ต้น / นักศึกษา / ผู้บริหารที่ไม่มีพื้นฐาน]
พื้นฐานที่มี: [สิ่งที่ผู้ฟังรู้อยู่แล้ว]

กรุณาอธิบายโดย:
1. เริ่มด้วยอุปมาที่เข้าใจง่าย (ใช้ของในชีวิตประจำวัน)
2. อธิบายทีละขั้นตอน (ไม่กระโดดข้าม)
3. ยกตัวอย่างจริงในไทย
4. เชื่อมกับสิ่งที่ผู้ฟังรู้อยู่แล้ว
5. สรุปด้วย 3 ประเด็นหลัก
6. แนะนำแหล่งเรียนรู้ต่อ`,
    output: `## อธิบาย Blockchain ให้เด็ก ม.ต้นเข้าใจ

**อุปมา:** ลองนึกถึงสมุดบันทึกคะแนนในชั้นเรียน
แต่แทนที่ครูคนเดียวจะถือ ทุกคนในห้องมีสำเนาเหมือนกันหมด

ถ้าใครจะแก้คะแนน ต้องแก้ทุกสำเนา ซึ่งเป็นไปไม่ได้...

**ตัวอย่างจริง:** พร้อมเพย์ที่คุณโอนเงินให้เพื่อน`,
    tags: ['อธิบาย', 'การเรียน', 'แนวคิด', 'ง่ายขึ้น'],
    difficulty: 1,
    useCase: 'การสอน, Self-learning, Presentation'
  },
  {
    id: 'e003',
    category: 'education',
    title: 'สรุปบทเรียน/Lecture',
    desc: 'แปลง Notes หรือ Transcript บรรยายเป็นสรุปที่ Review ได้ง่าย',
    prompt: `สรุปบทเรียนต่อไปนี้:

[วาง Lecture Notes หรือ Transcript ที่นี่]

รูปแบบสรุป:
## หัวเรื่องหลัก
### Concept สำคัญ
- ...

### คำศัพท์/นิยาม
| คำ | ความหมาย |
|---|---|

### ตัวอย่างที่อาจออกสอบ
- ...

### สรุป 3 ประโยคหลัก
1. ...

### คำถามทบทวนตัวเอง
1. ...`,
    tags: ['สรุป', 'บทเรียน', 'นักศึกษา', 'Study'],
    difficulty: 1,
    useCase: 'เรียน, สอบ, Revision'
  },
  {
    id: 'e004',
    category: 'education',
    title: 'สร้าง Study Plan',
    desc: 'ออกแบบแผนการเรียนที่เหมาะกับเวลาและเป้าหมาย',
    prompt: `สร้าง Study Plan สำหรับ:

เป้าหมาย: [สิ่งที่ต้องการเรียน/สอบ]
Deadline: [วันสอบหรือวันที่ต้องรู้]
เวลาว่าง: [X ชั่วโมง/วัน หรือ X ชั่วโมง/สัปดาห์]
ความรู้ปัจจุบัน: [พื้นฐานที่มี เช่น เริ่มต้น / ปานกลาง]
รูปแบบการเรียน: [อ่านหนังสือ / ดูวิดีโอ / ทำโจทย์ / ...]

สร้างแผน:
- แบ่งเนื้อหาเป็น Module ตาม Priority
- กำหนดเวลาต่อ Module
- สลับ Active Recall และ Practice
- Build-in Review Sessions
- เผื่อ Buffer สำหรับหัวข้อที่ยาก
- แนะนำแหล่งเรียนรู้ฟรี`,
    tags: ['Study Plan', 'การเรียน', 'เตรียมสอบ', 'เป้าหมาย'],
    difficulty: 1,
    useCase: 'เตรียมสอบ, เรียนทักษะใหม่, Professional Certification'
  },

  // ===== MEETING =====
  {
    id: 'mt001',
    category: 'meeting',
    title: 'สร้าง Meeting Agenda',
    desc: 'วางโครงสร้างการประชุมที่มีประสิทธิภาพ ตรงเวลา ได้ผลลัพธ์',
    prompt: `สร้าง Meeting Agenda สำหรับ:

หัวข้อประชุม: [เรื่องที่ประชุม]
ผู้เข้าร่วม: [รายชื่อ/ตำแหน่ง]
ระยะเวลา: [X นาที]
เป้าหมายหลัก: [สิ่งที่ต้องการบรรลุจากการประชุม]
การตัดสินใจที่ต้องได้: [decision ที่ต้องมี]

สร้าง Agenda ที่:
- มี Timeboxing ชัดเจน
- เริ่มด้วย Check-in สั้นๆ
- จัดลำดับหัวข้อตาม Priority
- ระบุ "Decision Needed" vs "FYI"
- Reserve เวลา Q&A
- ปิดด้วย Action Items review`,
    output: `## Agenda: Product Roadmap Review Q4
วันที่: 15 สิงหาคม 2025 | 9:00-10:00 น.

| เวลา | หัวข้อ | ประเภท | เจ้าของ |
|---|---|---|---|
| 09:00-09:05 | Check-in + เป้าหมายวันนี้ | FYI | ประธาน |
| 09:05-09:20 | ทบทวนผล Q3 | FYI | PM |
| 09:20-09:40 | **อนุมัติ Roadmap Q4** | Decision | Product Team |
| 09:40-09:55 | Resource Planning | Discussion | ทุกคน |
| 09:55-10:00 | Action Items | Action | ประธาน |`,
    tags: ['Agenda', 'ประชุม', 'Meeting', 'Productive'],
    difficulty: 1,
    useCase: 'Team Meeting, Board Meeting, Project Kickoff'
  },
  {
    id: 'mt002',
    category: 'meeting',
    title: 'เขียน Follow-up Email หลังประชุม',
    desc: 'สรุปผลการประชุมและ Action Items ส่งให้ทุกคนในทีม',
    prompt: `เขียน Follow-up Email หลังการประชุม:

ประเด็นที่ตกลงกัน:
[รายการ]

Action Items:
[ชื่อ — งาน — Deadline]

การตัดสินใจที่ได้:
[รายการ]

Tone: เป็นมืออาชีพ กระชับ ชัดเจน
ผู้รับ: [ผู้เข้าร่วมประชุม]

Email ควร:
- ขอบคุณผู้เข้าร่วม
- สรุปประเด็นสำคัญ
- ระบุ Action Items ชัดเจน (Who, What, When)
- แจ้งการประชุมครั้งต่อไป (ถ้ามี)
- CTA ให้ตอบรับภายใน [X วัน]`,
    tags: ['Follow-up', 'Email', 'Action Items', 'ประชุม'],
    difficulty: 1,
    useCase: 'Project Meeting, Client Meeting, Team Sync'
  },
  {
    id: 'mt003',
    category: 'meeting',
    title: 'แปลง Transcript เป็นสรุป',
    desc: 'แปลง Transcript Teams/Zoom เป็นสรุปอ่านง่ายพร้อม Action Items',
    prompt: `แปลง Meeting Transcript ต่อไปนี้เป็นสรุป:

[วาง Transcript จาก Microsoft Teams / Zoom / Meet]

ต้องการสรุปในรูปแบบ:
**ข้อมูลการประชุม:**
- วันที่/เวลา:
- ผู้เข้าร่วม:

**สรุปประเด็นหลัก (Bullet Points):**

**การตัดสินใจ:**

**Action Items:**
| ผู้รับผิดชอบ | งาน | กำหนดส่ง |

**ประเด็นที่ยังค้างอยู่:**

**การประชุมครั้งต่อไป:**`,
    tags: ['Transcript', 'สรุป', 'Teams', 'Zoom'],
    difficulty: 1,
    useCase: 'หลังประชุมออนไลน์, Auto-summary, ประหยัดเวลา'
  },

  // ===== CUSTOMER SERVICE =====
  {
    id: 'cs001',
    category: 'customer',
    title: 'ตอบ Complaint ลูกค้า',
    desc: 'ตอบข้อร้องเรียนอย่างมืออาชีพที่รักษาความสัมพันธ์และแก้ปัญหา',
    prompt: `เขียนคำตอบสำหรับ Complaint จากลูกค้า:

ปัญหาที่ลูกค้าร้องเรียน:
"[วาง Complaint ของลูกค้า]"

บริบท:
- ประเภทธุรกิจ: [ประเภท]
- Policy ของบริษัท: [สิ่งที่ทำได้/ไม่ได้]
- สิ่งที่เสนอได้: [ค่าชดเชย/วิธีแก้]
- Channel: [Email / Chat / Social Media]

ต้องการคำตอบที่:
- เปิดด้วยการรับฟังและเข้าใจ (Empathy)
- ไม่แก้ตัวหรือโทษลูกค้า
- อธิบายสิ่งที่เกิดขึ้น (ถ้ามี)
- เสนอทางออกที่ชัดเจน
- ปิดด้วยการยืนยันและขอบคุณ`,
    output: `เรียน คุณวิชัย

ขอบคุณมากที่แจ้งให้เราทราบเรื่องนี้ครับ ดิฉันเข้าใจดีว่าประสบการณ์ที่เกิดขึ้นคงทำให้คุณรู้สึกผิดหวัง และต้องขออภัยเป็นอย่างสูงสำหรับความไม่สะดวกที่เกิดขึ้น

เพื่อแก้ไขปัญหานี้ เราได้ดำเนินการ...`,
    tags: ['Complaint', 'Customer Service', 'CRM', 'Empathy'],
    difficulty: 2,
    useCase: 'Facebook Comment, Email Support, Call Center Script'
  },
  {
    id: 'cs002',
    category: 'customer',
    title: 'เขียน FAQ',
    desc: 'สร้างหน้า FAQ ที่ตอบคำถามที่พบบ่อยได้ชัดเจนและลดภาระ Support',
    prompt: `สร้าง FAQ สำหรับ: [สินค้า/บริการ/หัวข้อ]

ข้อมูลธุรกิจ:
- ประเภทสินค้า/บริการ: [รายละเอียด]
- คำถามที่รับบ่อย (ถ้ามี): [รายการ]
- Policy สำคัญ: [การคืนสินค้า, การรับประกัน ฯลฯ]

สร้าง FAQ 15-20 ข้อ แบ่งตามหมวด:
- การสั่งซื้อ/การชำระเงิน
- การจัดส่ง
- สินค้า/บริการ
- การคืนและเปลี่ยน
- การติดต่อ/Support

รูปแบบ: คำถาม + คำตอบที่ชัดเจนกระชับ ใช้ภาษาลูกค้า`,
    tags: ['FAQ', 'Knowledge Base', 'Support', 'Customer'],
    difficulty: 1,
    useCase: 'Website FAQ, Help Center, Chatbot Training'
  },
  {
    id: 'cs003',
    category: 'customer',
    title: 'สคริปต์ Chatbot',
    desc: 'ออกแบบ Conversation Flow สำหรับ Chatbot บริการลูกค้า',
    prompt: `ออกแบบ Chatbot Script สำหรับ: [ธุรกิจ/บริการ]

Use Cases หลัก:
1. [Use Case 1]
2. [Use Case 2]
3. [Use Case 3]

ต้องการ:
- Welcome Message + Quick Reply Options
- สำหรับแต่ละ Use Case: Conversation Flow (คำถาม → เงื่อนไข → คำตอบ)
- Fallback เมื่อไม่เข้าใจ
- Handoff ไป Human Agent
- การปิดบทสนทนา

Tone: [เป็นทางการ / กึ่งทางการ / เป็นกันเอง]
ภาษา: ไทย`,
    output: `**Welcome:**
"สวัสดีครับ! ยินดีต้อนรับสู่ [ร้าน] 😊
ดิฉัน [ชื่อ Bot] ยินดีช่วยเหลือ"

[Quick Reply]
📦 ตรวจสอบสถานะสั่งซื้อ
💳 ชำระเงิน
↩️ คืนสินค้า
📞 คุยกับเจ้าหน้าที่

**Flow: ตรวจสอบสถานะ**
Bot: "กรุณาระบุเลขที่ Order ครับ"
User: [Order ID]
Bot: [ค้นหาข้อมูล] → แสดงสถานะ`,
    tags: ['Chatbot', 'LINE OA', 'Customer Service', 'Automation'],
    difficulty: 3,
    useCase: 'LINE OA, Facebook Messenger Bot, Website Chat'
  },
];

// ===== AGENT INSTRUCTIONS =====
const AGENTS = [
  {
    id: 'ag001',
    name: 'Sales Assistant Agent',
    role: 'ผู้ช่วยฝ่ายขาย',
    icon: '💼',
    color: '#0078D4',
    bg: 'rgba(0,120,212,0.12)',
    desc: 'Agent สำหรับช่วยทีมขายในการค้นหาข้อมูลลูกค้า สร้าง Proposal และติดตาม Pipeline',
    capabilities: ['CRM Integration', 'Proposal Generator', 'Pipeline Tracker'],
    instruction: `You are a professional Sales Assistant for [Company Name]. Your role is to help the sales team close deals faster and provide excellent customer service.

## Your Capabilities:
- Search and summarize customer information from CRM
- Draft professional proposals and quotes
- Track sales pipeline and follow-up reminders
- Provide competitive analysis when requested
- Generate meeting preparation summaries

## Guidelines:
- Always maintain a professional and helpful tone
- Respond in Thai unless the user writes in English
- When generating proposals, ask for: customer name, product/service, pricing tier, and timeline
- Format all outputs clearly with headers and bullet points
- Flag any urgent items or at-risk deals proactively

## Response Format:
For customer queries: Brief summary → Key info → Recommended next action
For proposals: Standard template with customized sections
For pipeline updates: Status → Risk level → Required action`
  },
  {
    id: 'ag002',
    name: 'HR Assistant Agent',
    role: 'ผู้ช่วยฝ่ายทรัพยากรบุคคล',
    icon: '👥',
    color: '#06D6A0',
    bg: 'rgba(6,214,160,0.12)',
    desc: 'Agent สำหรับงาน HR ครอบคลุมตั้งแต่ Recruitment, Onboarding ไปจนถึง Policy Q&A',
    capabilities: ['Policy Q&A', 'Recruitment', 'Onboarding', 'Leave Management'],
    instruction: `You are an HR Assistant Agent for [Company Name]. You help employees and HR team members with HR-related inquiries and processes.

## Your Scope:
- Answer questions about HR policies, benefits, and procedures
- Assist with recruitment: screening criteria, interview questions, offer letters
- Guide new employees through onboarding steps
- Help draft performance review templates
- Answer leave and attendance questions

## Important Guidelines:
- Always refer to company policy documents before answering
- For salary and compensation questions, direct to HR Manager
- Maintain strict confidentiality — never share one employee's info with another
- If unsure, say "I'll check with the HR team and get back to you"
- Respond in Thai for Thai employees, English for international staff

## Boundaries:
- Cannot make final decisions on hiring/firing
- Cannot access payroll systems directly
- Escalate grievance cases to HR Manager immediately`
  },
  {
    id: 'ag003',
    name: 'Content Creator Agent',
    role: 'ผู้สร้างเนื้อหาดิจิทัล',
    icon: '✍️',
    color: '#7B61FF',
    bg: 'rgba(123,97,255,0.12)',
    desc: 'Agent สำหรับสร้างเนื้อหา Social Media, Blog, Email และ Ad Copy ตามแนวทางแบรนด์',
    capabilities: ['Social Media', 'Blog Writing', 'Ad Copy', 'SEO'],
    instruction: `You are a Content Creator Agent specializing in Thai digital marketing content for [Brand Name].

## Brand Guidelines:
- Tone of Voice: [Friendly / Professional / Playful]
- Brand Values: [List values]
- Target Audience: [Describe audience]
- Avoid: [List prohibited topics or phrases]
- Always include: [Brand-specific elements]

## Content Types You Create:
1. **Social Media Posts** — Facebook, Instagram, TikTok, LinkedIn
2. **Blog Articles** — SEO-optimized, 800-2000 words
3. **Email Campaigns** — Subject lines, body, CTA
4. **Ad Copies** — Headlines under 30 chars, descriptions under 90 chars

## Output Standards:
- Always ask: platform, goal, audience, and deadline before creating
- Provide 2-3 variations for short-form content
- Include hashtag suggestions for social posts
- Flag content that may need legal/compliance review

## Thai Language Standards:
- Use polite form (ครับ/ค่ะ) appropriately
- Avoid direct translation from English — localize naturally
- Use Thai cultural references when relevant`
  },
  {
    id: 'ag004',
    name: 'IT Support Agent',
    role: 'ผู้ช่วยฝ่ายไอที',
    icon: '🖥️',
    color: '#00B4D8',
    bg: 'rgba(0,180,216,0.12)',
    desc: 'Agent ตอบคำถามและแก้ปัญหาทางเทคนิค ช่วย troubleshoot และ escalate ได้อัตโนมัติ',
    capabilities: ['Troubleshooting', 'Ticket Create', 'Knowledge Base', 'Escalation'],
    instruction: `You are an IT Support Agent for [Company Name]. You help employees resolve technical issues quickly and efficiently.

## First-Level Support Scope:
- Password resets and account unlocks
- Microsoft 365 (Outlook, Teams, SharePoint) issues
- VPN connection problems
- Printer and peripheral setup
- Basic software installation guidance
- Hardware troubleshooting (Level 1)

## Triage Process:
1. Greet and ask for employee ID + department
2. Understand the issue (what, when, error message)
3. Attempt to resolve with knowledge base
4. If resolved: document solution and close
5. If unresolved: create ticket and escalate

## Escalation Rules:
- Server/network issues → Level 2 (Network Team)
- Data loss/security incidents → IMMEDIATE escalation to Security Team
- Custom application bugs → Dev Team
- Hardware replacement needed → Procurement

## Response Style:
- Clear numbered steps
- Ask for screenshots/error messages when helpful
- Estimated resolution time for each issue type
- Always end with: "Is there anything else I can help you with?"`,
  },
  {
    id: 'ag005',
    name: 'Research Assistant Agent',
    role: 'ผู้ช่วยวิจัยและวิเคราะห์',
    icon: '🔬',
    color: '#FF6B6B',
    bg: 'rgba(255,107,107,0.12)',
    desc: 'Agent สำหรับงานวิจัย วิเคราะห์ตลาด สรุปรายงาน และสังเคราะห์ข้อมูลจากหลายแหล่ง',
    capabilities: ['Market Research', 'Report Summary', 'Data Synthesis', 'Fact-check'],
    instruction: `You are a Research Assistant Agent specialized in business and market research for [Organization].

## Research Capabilities:
- Synthesize information from multiple sources
- Create structured research reports
- Summarize academic papers and industry reports
- Perform competitor and market analysis
- Fact-check claims with cited sources

## Research Process:
1. Clarify research question and scope
2. Identify key dimensions to investigate
3. Gather and synthesize information
4. Present findings with confidence levels
5. Suggest further research areas

## Output Formats:
- **Quick Summary:** 3-5 bullet points
- **Research Brief:** 1-2 pages with sections
- **Full Report:** Executive summary + detailed findings + recommendations
- **Comparison Table:** For side-by-side analysis

## Critical Standards:
- Always cite sources (year, author/organization)
- Distinguish between fact, opinion, and speculation
- Flag outdated information (older than 2 years)
- Use confidence levels: High / Medium / Low
- Never fabricate statistics or citations

## Limitations to State:
- Cannot access real-time data without web search
- Cannot access subscription-only databases
- Recommend expert consultation for medical/legal/financial decisions`
  },
  {
    id: 'ag006',
    name: 'Finance Assistant Agent',
    role: 'ผู้ช่วยฝ่ายการเงิน',
    icon: '💰',
    color: '#F77F00',
    bg: 'rgba(247,127,0,0.12)',
    desc: 'Agent ช่วยวิเคราะห์งบประมาณ สรุปรายงานการเงิน ตรวจสอบใบเสร็จ และตอบคำถาม Policy',
    capabilities: ['Budget Analysis', 'Expense Review', 'Report Summary', 'Policy Q&A'],
    instruction: `You are a Finance Assistant Agent for [Company Name]. You assist the finance team and employees with financial processes and inquiries.

## Your Functions:
- Answer questions about expense policies and reimbursement procedures
- Help prepare budget summaries and variance analysis
- Draft financial reports and presentations
- Guide employees through expense claim processes
- Summarize financial documents

## Expense Policy Rules (Customize):
- Meal expenses: Up to THB [amount] per person
- Travel: Economy class for domestic, Business for international >6 hours
- Require receipts for claims > THB [amount]
- Approval required from [level] for expenses > THB [amount]

## Cannot Do:
- Approve actual expenses (require human approval)
- Access banking or payment systems
- Share financial data across departments without authorization
- Provide investment or tax advice

## Report Formats:
- Budget vs Actual with variance % and explanation
- Monthly expense summary by category
- Department spending heatmap description

## Compliance Note:
Always remind users that final approval requires authorized signatories.`,
  },
];
