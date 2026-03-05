## **1\. Patterns from Comparable Products**

Analyzing existing civic and disaster tech reveals critical successes and fatal UX flaws that ClimatePulse must navigate.

**PetaBencana / MapaKalamidad**

* **Onboarding:** Zero-friction. Users do not download an app; they interact via existing chat apps (Telegram, FB Messenger).  
* **Reporting Flow:** Chatbot sends a unique link to a web map where users verify location, log hazard depth, and upload a photo.  
* **Alerts & Incentives:** Relies heavily on the cultural concept of *gotong royong* (mutual aid) and *bayanihan*. Users see their reports on a public map instantly.  
* **Pitfalls:** Fails to close the feedback loop at an individual level. Users rarely receive confirmation that a local authority actually used their specific data point to deploy help, leading to long-term participation fatigue.

**Ushahidi**

* **Onboarding & Reporting:** Traditional form-based crowdsourcing, originally designed for desktop/web.  
* **Alerts:** Map-based clustering showing hotspots of crises.  
* **Pitfalls:** Heavy cognitive load. Lengthy forms cause high abandonment rates during acute crises. Poorly verified data can also clutter the map, creating panic or "noise".

**iSeeChange**

* **Onboarding & Reporting:** Account creation required. Users submit journal-style narrative posts combining photos and text about environmental anomalies.  
* **Incentives:** Excellent community feedback loops. The platform notifies users when their data is used by local partners, researchers, or city planners, validating their effort.  
* **Pitfalls:** Too high-friction for acute emergencies; better suited for slow-onset climate tracking.

**SeeClickFix**

* **Reporting Flow:** Streamlined municipal reporting (Category \-\> Photo \-\> Description \-\> Location). Allows anonymous submissions.  
* **Alerts & Incentives:** Exceptional closed-loop tracking. Generates a service ticket, routes it to the exact municipal department, and updates the citizen at every stage (Acknowledged \-\> In Progress \-\> Resolved).  
* **Pitfalls:** Becomes a "complaint graveyard" if local governments do not actively resolve the tickets, eroding public trust.

**myENV (Singapore NEA)**

* **Alerts:** Centralized hub for highly accurate weather, dengue clusters, and air quality (PSI). Excellent use of real-time push notifications for heavy rain.  
* **Pitfalls:** A recent major UI overhaul buried vital, frequently accessed information (like localized rain radar) behind complex navigation menus, leading to widespread user frustration and 1-star reviews ("if it ain't broken, don't fix it").

**5–7 Reusable UX Patterns for ClimatePulse:**

1. **Chatbot Interception:** Meet users where they are (Messenger/Viber) rather than forcing an app store download.  
2. **Anonymous-by-Default:** Reduce friction and privacy anxiety by not requiring account creation to submit a life-saving report.  
3. **Closed-Loop Status Trackers:** Adopt the SeeClickFix / iSeeChange model. Push a notification when a Barangay official views or resolves a report.  
4. **Triage by Iconography:** Replace text-heavy drop-downs with large, universally understood visual icons for hazards (e.g., wavy lines for flood, flames for fire).  
5. **Graceful Degradation:** Design lightweight HTML elements that cache locally and fall back to SMS protocols when 4G networks collapse.

## **2\. Design Principles for the MVP Pilot**

To succeed during a typhoon in a low-resource setting like Payatas, ClimatePulse must adhere to strict crisis-UX principles.

1. **Zero Cognitive Load Under Stress:** During emergencies, anxiety causes "cognitive tunneling," reducing a user's ability to process information.  
   * *Implication:* The reporting flow must require zero typing. Users should only tap large buttons (Hazard Type \-\> Severity \-\> Submit).  
2. **Visual Over Textual (Glanceability):** Complex scientific data overwhelms users.  
   * *Implication:* Translate PAGASA's technical storm surge probabilities into a single, color-coded risk indicator (Green, Yellow, Orange, Red) occupying the top half of the screen.  
3. **Frictionless Entry (No App Downloads):**  
   * *Implication:* The MVP must be accessible via a web link sent through Facebook Messenger, launching a Progressive Web App (PWA) under 2MB in size.  
4. **The "Bayanihan" Feedback Loop:** Research fatigue occurs when users feel their input vanishes into a void.  
   * *Implication:* Every submission must generate a tracking receipt (Received \-\> Verified \-\> Actioned).  
5. **Action-Oriented Directives:** Warnings must be paired with immediate, localized actions.  
   * *Implication:* Instead of just saying "Signal 2," the UI must read: "Signal 2: Secure your roof now. Move documents to high ground."  
6. **Offline Resiliency as a Baseline:**  
   * *Implication:* If the PWA detects a network timeout, it should automatically generate a formatted SMS string and open the user's native SMS app to send the report to a shortcode.  
7. **Forgiving Interactions:** High-stress environments lead to "fat-finger" errors.  
   * *Implication:* Provide a 5-second "Undo" or "Edit" toast notification immediately after submitting a hazard pin to prevent false alarms.

## **3\. Information Architecture and Interaction Model**

The MVP must be ruthlessly simplified to **three core screens**, avoiding the "bloat" that plagued the myENV app update.

**Information Architecture (MVP)**

* **Screen 1: The Local Pulse (Home):** A giant color-coded risk status for the user's specific barangay, a 1-sentence action directive, and a prominent "Report Hazard" floating action button (FAB).  
* **Screen 2: Hazard Submission (Action):** Full-screen map to confirm GPS pin, followed by a grid of 4-6 hazard icons, and an optional camera button.  
* **Screen 3: Community Map (Awareness):** A lightweight map showing nearby verified pins and the open/closed status of the nearest evacuation center.

**Interaction Model by Phase:**

* **Pre-Disaster (24–48 hours before):** This is the primary engagement window. Interaction is proactive. The system pushes a Messenger alert prompting users to check their risk level and review their preparedness checklist.  
* **During Event (Peak Crisis):** Interaction must be minimal and panic-safe. The UI suppresses community feeds and disables complex filters, leaving only the "Report Hazard" button and the location of the nearest evacuation center.  
* **Post-Disaster (Recovery):** The interaction model shifts to validation. The app pushes notifications showing how many reports were verified, thanking the user, and showing a digital badge for their "bayanihan" contribution.

## **4\. Deliverables as UX Designer**

#### **User Personas**

**Persona 1: Mae (The Youth Volunteer / Digital Bridge)**

* **Profile:** 19, college student, highly active on Facebook/TikTok.  
* **Goals:** Wants to help her community during typhoons; wants to feel her actions matter.  
* **Pain Points:** Gets frustrated when she tags government agencies on Twitter/FB but gets no response. Experiences "compassion fatigue" from disorganized relief efforts.  
* **Tech Constraints:** Uses a mid-range Android smartphone, relies heavily on free data or low-cost prepaid promos.

**Persona 2: Kuya Jun (The Elderly Resident)**

* **Profile:** 62, sari-sari store owner in a flood-prone area.  
* **Goals:** Needs to know exactly when water will reach his street so he can elevate his merchandise and evacuate.  
* **Pain Points:** Cannot understand the NDRRMC text blasts because they use technical terms and only mention provinces, not his street.  
* **Tech Constraints:** Uses an older Android device. Needs reading glasses. Uncomfortable navigating complex apps or creating accounts.

**Persona 3: Kapitan Santos (LGU Official / BDRRMC Head)**

* **Profile:** 45, Barangay Captain.  
* **Goals:** Needs to justify preemptive evacuation to constituents and needs structured data to legally access local disaster funds under RA 12287\.  
* **Pain Points:** Drowning in scattered Facebook messages from panicked residents during a storm. Cannot easily synthesize this data into official reports.

#### **Empathy Map (Kuya Jun \- Elderly Resident)**

* **Thinks:** "Is the water going to reach my store this time? Should I pack up now or wait?"  
* **Feels:** Anxious when it rains heavily at night; distrustful of generic government alerts that cry wolf.  
* **Says:** "I don't know how to read these satellite maps. Just tell me if I need to leave."  
* **Does:** Waits to see if his neighbors are evacuating before making a move; relies on his children to translate digital information.

#### **End-to-End User Journey (Focus on Mae)**

**Phase 1: Pre-Disaster (The Nudge)**

* **Touchpoint:** 24 hours before landfall, Mae receives a Facebook Messenger message from the ClimatePulse bot: *"Typhoon Uwan is approaching. Your barangay is currently under Yellow Alert. Tap here to view the localized map."*  
* **Action:** Mae clicks the link. The PWA opens instantly. She sees a simple checklist reminding her to charge power banks.  
* **Breakdown Risk:** If the message is overly alarmist, she might ignore it. The tone must be calm and actionable.

**Phase 2: During Event (The Crisis)**

* **Touchpoint:** The creek behind Mae's street overflows.  
* **Action:** Mae opens the app. She taps the red "Report" button. GPS automatically locates her. She taps the "Flood" icon, selects "Knee Deep," snaps a photo, and hits submit. Time elapsed: 18 seconds.  
* **Breakdown Risk:** Cell towers degrade. *Mitigation:* The app detects low signal, compresses the data into an SMS string, and routes it via text message.

**Phase 3: Post-Disaster (The Resolution Loop)**

* **Touchpoint:** 2 hours later, the local *Tanod* reviews Mae's photo on the BDRRMC dashboard and dispatches a rescue boat to her street block.  
* **Action:** Mae receives a push notification: *"Your flood report on Rizal St. was verified by Brgy Auth. Rescue teams alerted. Thank you for your digital bayanihan\!"*  
* **Result:** Mae feels empowered. Her trust in the system is cemented, ensuring she will use it again during the next monsoon season.

