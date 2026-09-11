# USDX — Unified Sports Data Exchange

> A consent-driven sports data exchange connecting schools, grassroots NGOs, sports authorities, and coaches to discover and nurture youth athletic talent across India while keeping parents in full control of their children's data.

---

## 1. About the Project

In India, millions of young students perform physical fitness tests, break sprint records, and compete in school championships every year. However, almost all of these records remain trapped in physical paper ledgers or isolated spreadsheets. When a student switches schools or graduates, their entire sports history is lost. Meanwhile, scouts from sports academies and national federations must travel long distances to judge athletes based on a single 90-minute trial, with no access to past growth or fitness history. 

**USDX (Unified Sports Data Exchange)** solves this by creating a secure digital bridge modeled after India's Account Aggregator framework. Schools can upload verified fitness benchmarks, scouts can discover high-potential young athletes through filtered searches, and sports authorities can monitor talent pipelines across districts. Most importantly, **no scout or coach can view a child's private profile without explicit, verifiable permission from the child's parent or legal guardian.**

---

## 2. What's in This Demo

This hackathon prototype includes 6 fully interactive screens demonstrating each participant's perspective in the data exchange:

* **Landing Page:** An introduction to USDX explaining the fragmentation problem in youth sports, the 3-step data exchange model, and statutory compliance safeguards.
* **School Data Upload:** A portal for school physical education teachers to record student fitness benchmarks through CSV file uploads or simple manual forms.
* **NGO Scouting View:** A search interface where verified talent scouts can discover athletes using filters for sport, region, age group, sprint speed, and jump height.
* **Coach & Authority Dashboard:** An analytics hub for state sports federations featuring district distribution charts, talent density metrics, and an interactive role switcher.
* **Guardian Consent Portal:** A parent-facing dashboard where mothers and fathers can review who wants to see their child's data, toggle granular permissions on/off, or trigger an emergency freeze on their child's records.
* **Access Audit Log:** A compliance ledger that records every data view, scout query, and consent approval in chronological order, allowing compliance officers to detect anomalies and export records.

---

## 3. Tech Stack

This demo is built as a **frontend-only web application** that runs entirely inside the user's web browser:

* **React (v18):** A popular JavaScript framework used to build interactive user interfaces with reusable modular components.
* **TypeScript:** An enhanced version of JavaScript that catches errors early by defining clear data contracts and structures.
* **Tailwind CSS:** A utility-first styling framework used to create high-contrast, responsive layouts and custom athletic themes.
* **Vite:** A modern development and build tool that packages the app quickly and efficiently.
* **Lucide React:** A clean open-source icon library used for navigation and status indicators.

> **Note on Architecture:** This is a **pure client-side (frontend-only)** prototype. There is no active backend server, external API, or cloud database in this demo. Everything executes locally in your browser memory for immediate, zero-latency testing.

---

## 4. Data

Because this is a hackathon prototype, **all information shown in the demo is sample (mock) data.** No real student personal identifiable information (PII) or government records are stored or exposed.

### Where the Data Lives
Sample data is defined in standard JavaScript arrays at the top of each respective page file:
* **School athletes:** Defined in `src/pages/SchoolUploadPage.tsx` (`INITIAL_ATHLETES`)
* **Scouted athlete profiles:** Defined in `src/pages/NgoScoutingPage.tsx` (`CONSENTED_ATHLETES`)
* **Audit log history:** Defined in `src/pages/AuditLogPage.tsx` (`INITIAL_LOGS`)

### Example Data Shape
Here is an example of what an athlete record looks like in the code:

```typescript
{
  id: "ATH-08912",
  name: "Aarav Sharma",
  category: "U-17",
  sport: "Athletics",
  discipline: "100m Sprint",
  benchmarkMetric: "10.92s",
  schoolName: "Delhi Public Sports Academy, Dwarka",
  udiseCode: "07010100101",
  consentStatus: "VERIFIED",
  guardianName: "Sunita Sharma"
}
```

*When ready for production, these sample arrays can be swapped with real database queries or secure API requests.*

---

## 5. How to Run It Locally

You do not need prior programming experience to run this project on your computer. Follow these steps:

### Prerequisites
Make sure you have **Node.js** installed on your computer (version 18 or higher). You can download it for free from [nodejs.org](https://nodejs.org).

### Step 1: Open Terminal / Command Prompt
Open your computer's terminal (macOS/Linux) or Command Prompt / PowerShell (Windows) and navigate to the project directory:

```bash
cd usdx-sports-exchange
```

### Step 2: Install Project Dependencies
Run this command to download all required libraries:

```bash
npm install
```

### Step 3: Start the Application
Run this command to launch the local web server:

```bash
npm run dev
```

### Step 4: Open in Your Browser
Once running, the terminal will display a local address (usually `http://localhost:3000` or `http://localhost:5173`). Open that URL in any web browser (Chrome, Safari, Edge, or Firefox) to interact with the demo.

---

## 6. Project Structure

Here is a quick map of the key files and folders in this project:

```
├── index.html                     # Main HTML file that loads the fonts and mounts the application
├── package.json                   # Lists all project dependencies and build scripts
├── vite.config.ts                 # Configuration file for Vite and Tailwind CSS
├── metadata.json                  # Metadata describing the project name and capabilities
│
└── src/
    ├── main.tsx                   # Main entry point that renders the React application
    ├── App.tsx                    # Top-level coordinator that handles page switching
    ├── types.ts                   # Definitions for data types (athletes, log entries, routes)
    ├── index.css                  # Global styling, color variables, and athletic font setups
    │
    ├── components/
    │   ├── Navbar.tsx             # Top navigation bar with site links and screen switcher dropdown
    │   └── Footer.tsx             # Bottom footer with statutory notice and architecture summary
    │
    └── pages/
        ├── LandingPage.tsx        # Homepage with problem overview, 3-step model, and demo launchers
        ├── SchoolUploadPage.tsx   # PE teacher screen for uploading athlete records and CSV parsing
        ├── NgoScoutingPage.tsx    # Scout screen for searching consented athletes with filters
        ├── AuthorityDashboardPage.tsx # State federation analytics dashboard with role toggle
        ├── GuardianConsentPage.tsx# Parent screen for managing child privacy and revoking access
        └── AuditLogPage.tsx       # Compliance ledger showing chronological access records
```

---

## 7. Key Concepts for Hackathon Judges

Under Section 9 of India's **Digital Personal Data Protection (DPDP) Act 2023**, children's personal data receives special statutory protection. USDX addresses these legal mandates through three core mechanisms:

1. **Verifiable Parental Consent (VPC):** 
   A child's athletic metrics and school information cannot be searched or viewed by any third-party scout until their parent explicitly authorizes it. In the **Guardian Consent Portal**, parents can review requests, choose exactly which fields to share (such as physical fitness metrics while hiding home contact info), and revoke consent at any time.
2. **Role-Based Access Control (RBAC):** 
   Different users see different tiers of information based on their certified role. In the **Coach & Authority Dashboard**, judges can click the role toggle:
   * *State Authority Mode:* Only displays aggregated, anonymized district counts and charts (no names or phone numbers).
   * *Accredited Coach Mode:* Displays individual athlete dossiers only after confirming verified parental consent.
3. **Immutable Audit Trail:** 
   Every query made by a scout, coach, or school is recorded in the **Access Audit Log**. This transparent log lists the timestamp, requesting organization, data fields viewed, and declared purpose, ensuring full accountability for data fiduciaries.

---

## 8. Limitations & What Is Simulated

Because this application was created as a hackathon prototype, several enterprise features are simulated in the user interface rather than connected to real external systems:

* **In-Memory State:** Data updates (such as approving consent, adding an athlete, or freezing records) update the live view in real time, but will reset to the original sample data if you refresh your browser window.
* **Simulated OTP & Verification:** The SMS OTP code popup on the Guardian page and the audit trail verification buttons simulate the user experience without connecting to real telecommunication gateways or government databases (such as UIDAI Aadhaar or DigiLocker).
* **No Centralized Server / Backend:** In a production release, USDX would operate as a lightweight federated routing gateway (modeled on the Sahamati Account Aggregator standard) with encrypted point-to-point data exchange, mTLS certificates, and persistent database storage.
