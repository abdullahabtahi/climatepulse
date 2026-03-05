# ***ClimatePulse — MVP Blueprint & Blue Ocean Strategy***

### ***Pre-PRD Strategic Foundation***

---

## ***1\. Architecture Decisions (Locked)***

| *Decision* | *Resolution* | *Rationale* |
| ----- | ----- | ----- |
| *Primary interface* | *Progressive Web App (PWA)* | *\<2MB, 3G-optimized, no app store friction, works on mid-range Android* |
| *Secondary channel* | *Facebook Messenger chatbot* | *98% Messenger penetration in PH; serves as primary alert delivery channel (no PWA push notifications in MVP)* |
| *Kapitan View* | *Separate URL/page* | *Keeps citizen PWA clean; avoids role-toggle complexity; captain gets a dedicated tool* |
| *Build sequence* | *Clickable prototype → Coded MVP* | *Validate UX with real users first (Anima/Stitch), then develop functional product* |
| *Hazard scope (MVP)* | *Flooding only* | *Founder Memo: "one barangay, one hazard type" — validates behavioral assumptions before expanding* |
| *Target geography* | *One flood-prone barangay in Quezon City* | *Team has existing grassroots relationships in Payatas area* |
| *Design baseline* | *myENV (Singapore NEA)* | *Adopt: location-based dashboard cards, multi-source aggregation, push alerts, citizen reporting. Avoid: feature bloat, navigation burial, GPS inaccuracy* |

---

## ***2\. Blue Ocean Strategy***

### ***2.1 Strategy Canvas — Competing Factors***

*The X-axis lists the factors the Philippine disaster information industry competes on. The Y-axis represents relative offering level (Low → High). ClimatePulse's value curve deliberately diverges from all competitors.*

| *Competing Factor* | *Project NOAH* | *MapaKalamidad* | *NDRRMC Text* | *Facebook Pages* | *ClimatePulse* |
| ----- | :---: | :---: | :---: | :---: | :---: |
| *Technical/scientific sophistication* | *★★★★★* | *★★* | *★* | *★* | *★* |
| *National geographic coverage* | *★★★★★* | *★★★★* | *★★★★★* | *★★★* | *★* |
| *Barangay/street-level granularity* | *★* | *★★* | *★* | *★★* | *★★★★★* |
| *Community reporting capability* | *—* | *★★★* | *—* | *★★* | *★★★★★* |
| *Feedback loop closure (report → action → confirmation)* | *—* | *—* | *—* | *—* | *★★★★★* |
| *Pre-disaster engagement (anticipatory)* | *★★* | *★* | *★★* | *★* | *★★★★★* |
| *Ease of use / time-to-first-action* | *★* | *★★* | *★★★★* | *★★★* | *★★★★★* |
| *Offline/low-connectivity capability* | *—* | *★* | *★★★★★* | *★* | *★★* |
| *Institutional utility for barangay officials* | *★* | *★* | *—* | *—* | *★★★★* |
| *Youth-specific design* | *—* | *—* | *—* | *—* | *★★★★★* |
| *Cost to build/operate* | *★★★★★* | *★★★* | *★★* | *★* | *★* |
| *Trust architecture* | *★★★* | *★★* | *★★* | *★★* | *★★★★* |

***Blue ocean factors** (where ClimatePulse creates uncontested space): Feedback loop closure, pre-disaster engagement, barangay-level institutional utility, and youth-specific design. No competitor scores above ★ on any of these.*

***Deliberate trade-offs** (where ClimatePulse scores low by design): National coverage (hyper-local focus), technical sophistication (translation layer, not science tool), offline capability (SMS fallback planned for P2).*

### ***2.2 ERRC Grid (Four Actions Framework)***

#### ***ELIMINATE***

*Factors the industry takes for granted that should be removed entirely*

| *Factor to Eliminate* | *Industry Assumption* | *Why Eliminate* |
| ----- | ----- | ----- |
| ***Mandatory account registration*** | *Users must register to use disaster tools* | *Registration is the \#1 adoption killer across all disaster apps. FEMA app, NOAH, and MapaKalamidad all lose users at signup. Core features (view risk, receive alerts, view map) require zero login.* |
| ***Technical meteorological language*** | *Warnings use TCWS signals, hectopascals, storm surge probability curves* | *NOAH is English-only and "too technical" (competitive research). NDRRMC texts use province-level technical language. Replace ALL technical terminology with color \+ one plain-language sentence.* |
| ***Multi-hazard scope in MVP*** | *Disaster platforms must cover all hazard types* | *Trying to cover typhoon, flood, fire, landslide, heat in one prototype guarantees mediocrity. Ship flooding only. Validate, then expand.* |
| ***Social newsfeed / timeline*** | *Community platforms need social feeds* | *Complaint clusters research: social features create noise, anxiety, fear amplification, and bias vectors. Citizen app's social feed was its worst feature. myENV's attempt to add non-weather content drew user backlash.* |
| ***National-scale ambition*** | *Disaster platforms must be nationwide* | *MapaKalamidad already operates nationally with USAID backing. Competing at national scale is suicide. The moat is the "last meter" — one barangay, deeply served.* |

#### ***REDUCE***

*Factors to bring well below the industry standard*

| *Factor to Reduce* | *Industry Standard* | *ClimatePulse Target* |
| ----- | ----- | ----- |
| ***Number of screens*** | *10+ screens with complex navigation* | *3 screens (Home/Risk, Report, Community Map) \+ Kapitan View as separate URL* |
| ***Steps to submit a report*** | *MapaKalamidad: chatbot → link → web map → verify → log → upload (6+ steps). Ushahidi: 8+ form fields* | *GPS auto → tap flood icon → select severity → optional photo → submit \= 4 taps, ≤18 seconds* |
| ***Map layer complexity*** | *NOAH: dozens of toggleable layers (flood susceptibility, storm surge, rainfall, landslide, etc.)* | *ONE active layer: community flood report pins, color-coded by severity. PAGASA risk level displayed as barangay-wide background color, not a layer.* |
| ***Data visualization density*** | *Multiple charts, graphs, probability curves, overlapping data* | *Single color-coded risk indicator occupying top half of Screen 1\. One number (active reports). One action sentence. That's it.* |
| ***Onboarding flow*** | *5-10 step setup wizards, profile creation, preference selection* | *Location permission → confirm barangay → done. \<60 seconds. No profile, no preferences, no tutorial.* |

#### ***RAISE***

*Factors to raise well above the industry standard*

| *Factor to Raise* | *Current Industry Level* | *ClimatePulse Target* |
| ----- | ----- | ----- |
| ***Feedback loop transparency*** | *MapaKalamidad: zero individual feedback. NDRRMC: zero. Facebook: unstructured comment threads. No platform tells a citizen "your report was used."* | *Every report triggers a visible 4-stage progression: Received → Verified → Shared with BDRRMC → Resolved. Push notification at each stage. This is THE competitive moat per investor analysis.* |
| ***Barangay-level localization*** | *NDRRMC: province level. Facebook: city level. NOAH: region level. MapaKalamidad: city/regional scale.* | *Street-level precision within a single barangay. "Water level at Rizal St. near Brgy Hall." Risk status specific to your barangay, not your province.* |
| ***Plain-language actionability*** | *"Signal 2 has been raised over Metro Manila."* | *"Signal 2 in your barangay — secure your roof and move documents to higher ground NOW." Every alert must answer: (1) What is happening? (2) How close is it to me? (3) What should I do right now?* |
| ***Pre-disaster engagement*** | *All competitors are crisis-activated — engagement surges only when disaster is already happening.* | *Optimized for the 6-24 hour pre-landfall window. Calm, proactive prompts. Preparedness checklists. This is when users can still think clearly (before cognitive tunneling). Aligns with RA 12287's 3-5 day anticipatory action mandate.* |
| ***Trust signals*** | *Platforms assume trust. No visible data provenance. No institutional endorsement protocol.* | *Barangay captain endorsement REQUIRED before any pilot launch. Every report shows provenance (who, when, photo, verification status). Anonymous-by-default. 95.4% LGU trust rating leveraged as distribution channel.* |

#### ***CREATE***

*Factors the industry has never offered*

| *Factor to Create* | *What It Is* | *Why It's New* |
| ----- | ----- | ----- |
| ***Bidirectional alert \+ report in a unified system with visible status tracking*** | *Single platform that BOTH pushes localized alerts (PAGASA → citizen) AND collects structured community reports (citizen → BDRRMC) with transparent status progression* | *No Philippine platform does both directions with closed-loop feedback. MapaKalamidad collects reports but doesn't push localized alerts. NDRRMC pushes alerts but doesn't collect reports.* |
| ***"All Clear" notification*** | *Explicitly pushes "All Clear — situation resolved in your area" when hazard passes or is downgraded* | *Nobody does this. Complaint clusters research: users never know when danger has passed, creating sustained anxiety. This closes the alert lifecycle and rebuilds trust for next event.* |
| ***Phase-adaptive UI*** | *Interface automatically shifts behavior based on disaster phase: (1) Pre-disaster: checklist mode, calm tone, proactive prompts. (2) During event: stripped UI — only Report button \+ nearest evacuation center. (3) Post-disaster: validation mode, "your data mattered" notifications, contribution summary.* | *No competitor adapts their interface to cognitive state. Users in crisis cannot process the same UI they use pre-disaster. This is cognitive-behavioral design applied to disaster UX.* |
| ***Kapitan View (lite institutional dashboard)*** | *Separate lightweight page for barangay captain showing: active report count \+ locations, PAGASA status for their barangay, community map summary* | *No tool exists for barangay-level officers that aggregates community reports with PAGASA data. NOAH and PhilAWARE serve regional/national responders. The 42,046 barangays are completely underserved. This is the B2G wedge.* |
| ***Visible community contribution metric*** | *"12 neighbors have reported in your barangay today" — displayed on home screen, creating social proof and bayanihan visibility* | *No platform shows community participation volume at barangay level. This creates network effects, social motivation, and validates that "I'm not the only one reporting."* |
| ***5-second undo/edit after report submission*** | *Toast notification immediately after submitting a hazard pin: "Report submitted. Tap to edit." with 5-second countdown* | *No disaster reporting platform offers undo. High-stress environments cause fat-finger errors. Undo prevents false alarms and builds user confidence.* |

### ***2.3 Six Paths Framework***

| *Path* | *Application to ClimatePulse* |
| ----- | ----- |
| ***Path 1: Across alternative industries*** | *Borrow from SeeClickFix (municipal service tickets) — their Acknowledged → In Progress → Resolved pattern is the gold standard for civic feedback loops. Borrow from ride-hailing (Grab/Gojek) — they solved real-time location reporting at scale in SEA under the same connectivity constraints.* |
| ***Path 2: Across strategic groups*** | *ClimatePulse sits BETWEEN expert tools (NOAH/PhilAWARE) and social platforms (Facebook). Neither group serves the translation layer. ClimatePulse IS the translation layer — converting complex scientific data into street-level actionable intelligence.* |
| ***Path 3: Across buyer groups*** | *The industry serves national agencies and regional responders. Nobody serves barangay captains — the most underserved, most trusted (95.4%), most proximate governance tier. The Kapitan View targets this completely uncontested buyer group.* |
| ***Path 4: Across complementary products*** | *Messenger IS the complementary product with 98% penetration. The chatbot isn't a feature — it's the distribution channel. The PWA lives inside Messenger's ecosystem. Similarly, PAGASA data is complementary infrastructure — free, API-accessible, already collected.* |
| ***Path 5: Across functional-emotional appeal*** | *Competitors are purely functional (data delivery). ClimatePulse adds emotional value: bayanihan framing, "your data mattered" notifications, community contribution visibility. The Filipino concept of kapwa (unity of self and others) is the emotional core competitors ignore.* |
| ***Path 6: Across time*** | *RA 12287 (anticipatory action, Sept 2025\) \+ Konektadong Pinoy Act (digital divide policy, Aug 2025\) create a regulatory window. LGUs now have legal mandate AND funding to procure anticipatory tools. First mover into barangay-level digital DRRM creates switching costs via data network effects.* |

### ***2.4 Value Innovation Summary***

***The buyer value leap:** A person in a flood-prone barangay can, for the first time, see their personal flood risk in plain language, report what they see on their street in under 18 seconds, track exactly what happened to their report, receive an explicit "all clear" when danger passes, and know their data helped their community — all without downloading an app, creating an account, or understanding meteorological science.*

***The cost reduction:** Entire stack is open-source (RapidPro, PAGASA Parser, CogniCity MIT-licensed, CrowdMap free, OSM data). No app store fees. No backend licensing. No paid APIs. The only costs are development time and hosting.*

***The trade-off broken:** The industry assumes more features \= more value and national scale \= more impact. ClimatePulse proves that fewer features at higher depth in a single barangay creates more value than broad, shallow national coverage.*

---

## ***3\. Consolidated MVP Feature Set***

### ***3.1 Product Architecture***

*┌─────────────────────────────────────────────┐*

*│                CITIZEN LAYER                 │*

*│                                             │*

*│  ┌─────────────┐    ┌──────────────────┐    │*

*│  │  Messenger   │───▶│   PWA (Primary)   │   │*

*│  │  Chatbot     │    │                  │    │*

*│  │ (Secondary)  │    │  Screen 1: Risk  │    │*

*│  │              │    │  Screen 2: Report│    │*

*│  │  • Alerts    │    │  Screen 3: Map   │    │*

*│  │  • Links     │    │                  │    │*

*│  └─────────────┘    └──────────────────┘    │*

*│                                             │*

*├─────────────────────────────────────────────┤*

*│             INSTITUTIONAL LAYER              │*

*│                                             │*

*│  ┌──────────────────────────────────────┐   │*

*│  │  Kapitan View (Separate URL)         │   │*

*│  │                                      │   │*

*│  │  • Active reports \+ locations         │   │*

*│  │  • PAGASA status for barangay        │   │*

*│  │  • Community map summary             │   │*

*│  │  • BDRRMC contact quick-access       │   │*

*│  └──────────────────────────────────────┘   │*

*│                                             │*

*├─────────────────────────────────────────────┤*

*│               DATA LAYER                     │*

*│                                             │*

*│  Weather API  ←→ Community Reports ←→ Map   │*

*│  (Open-Meteo/     (user-submitted)   (OSM)  │*

*│   PAGASA later)                             │*

*│                                             │*

*└─────────────────────────────────────────────┘*

### ***3.2 Feature List — Citizen PWA (14 features)***

*Each feature is tagged with: the kill-criteria metric it tests, the Blue Ocean action it represents, and the root cause it addresses.*

#### ***SCREEN 1: The Local Pulse (Home)***

| *\#* | *Feature* | *Description* | *Blue Ocean Action* | *Kill Metric* | *Root Cause* |
| ----- | ----- | ----- | ----- | ----- | ----- |
| *F1* | ***Barangay risk card*** | *Giant color-coded risk status (Green/Yellow/Orange/Red) for user's specific barangay, derived from weather data (Open-Meteo/OpenWeatherMap for MVP; PAGASA Parser when approval secured). Single-color background. One glance. Inspired by myENV's location-based dashboard card pattern.* | *RAISE (localization)* | *—* | *Technical language barrier; last-mile communication failure* |
| *F2* | ***Plain-language action directive*** | *One sentence beneath the risk card: "Signal 2 in your area — secure your roof and move documents now." Context-specific, signal-matched, pre-written for each alert level.* | *RAISE (actionability)* | *—* | *Communities not knowing what to do with warnings* |
| *F3* | ***Community contribution counter*** | *"12 neighbors reported today" — visible on home screen. Creates social proof and bayanihan motivation.* | *CREATE (contribution metric)* | *Unsolicited report rate ≥25%* | *Trust erosion; participation motivation gap* |
| *F4* | ***Report Hazard FAB*** | *Prominent floating action button to enter Screen 2\. Always visible. Large touch target (min 56dp).* | *REDUCE (friction)* | *Report completion rate ≥50%* | *One-way architecture; digital divide* |

#### ***SCREEN 2: Hazard Submission (Report)***

| *\#* | *Feature* | *Description* | *Blue Ocean Action* | *Kill Metric* | *Root Cause* |
| ----- | ----- | ----- | ----- | ----- | ----- |
| *F5* | ***One-tap flood report flow*** | *GPS auto-fills location → user confirms pin on map → taps flood severity icon (ankle/knee/waist/chest+) → optional photo → submit. Zero typing. ≤18 seconds total. ≤4 taps.* | *REDUCE (steps) \+ ELIMINATE (forms)* | *Report completion rate ≥50%* | *One-way architecture; digital divide; low-literacy barriers* |
| *F6* | ***Report status feedback loop*** | *Immediately after submit: visible status card appears showing "Received ✓". Progresses to Verified → Shared with BDRRMC → Resolved. Push notification at each stage transition.* | *RAISE (feedback loop) — THE MOAT* | *Unsolicited report rate ≥25%* | *Trust erosion; one-way architecture; participation collapse* |
| *F7* | ***5-second undo/edit toast*** | *Toast notification: "Report submitted. Tap to edit." 5-second countdown before report becomes permanent. Prevents false alarms from fat-finger errors.* | *CREATE (undo)* | *—* | *Data quality / false alarm risk* |

#### ***SCREEN 3: Community Map (Awareness)***

| *\#* | *Feature* | *Description* | *Blue Ocean Action* | *Kill Metric* | *Root Cause* |
| ----- | ----- | ----- | ----- | ----- | ----- |
| *F8* | ***Barangay-scoped flood map*** | *Lightweight map showing all community-submitted flood report pins within the user's barangay. Color-coded by severity (ankle=yellow, knee=orange, waist+=red). Tappable for detail (photo, time, status). Uses OSM base map.* | *REDUCE (complexity)* | *—* | *Fragmented information; data gaps* |
| *F9* | ***Barangay risk summary panel*** | *Bottom sheet showing: \# active reports, weather/PAGASA status, nearest evacuation center name \+ address (static BDRRMC list), BDRRMC contact phone number. Replaces the need for 5+ separate information sources.* | *RAISE (localization)* | *—* | *Barangay-level capacity gap; fragmented institutional data* |

#### ***ALERTS & NOTIFICATIONS (System → Community)***

| *\#* | *Feature* | *Description* | *Blue Ocean Action* | *Kill Metric* | *Root Cause* |
| ----- | ----- | ----- | ----- | ----- | ----- |
| *F10* | ***Location-based flood alert*** | *Alert delivered via Messenger chatbot (primary channel) when weather API issues a warning for the user's barangay OR when a community flood report is filed nearby. Hazard-specific. Includes plain-language action directive. Hard cap: max 1 push per event unless escalation. No PWA push notifications in MVP.* | *RAISE (localization)* | *—* | *One-way architecture; barangay-level capacity gap* |
| *F11* | ***"All Clear" notification*** | *Explicitly pushed when hazard is downgraded or resolved in user's area: "All Clear — flood situation on Rizal St. has subsided. Stay alert for further updates." Closes the alert lifecycle.* | *CREATE (all clear)* | *—* | *Alert fatigue; trust erosion; sustained anxiety* |
| *F12* | ***Pre-disaster preparedness prompt*** | *6-24 hours before predicted event: calm, proactive Messenger message \+ in-app checklist. "Typhoon approaching your area tomorrow. Check your preparedness: ☐ Charge power banks ☐ Secure important documents ☐ Know your evacuation route."* | *RAISE (pre-disaster) \+ CREATE (phase-adaptive)* | *—* | *Behavioral failure: survival priority collapse during peak event* |

#### ***COMMUNITY & GROWTH***

| *\#* | *Feature* | *Description* | *Blue Ocean Action* | *Kill Metric* | *Root Cause* |
| ----- | ----- | ----- | ----- | ----- | ----- |
| *F13* | ***"Your data mattered" notification*** | *When a report influences a BDRRMC decision: "Your flood report on Rizal St. was verified by Brgy Authority. Thank you for your digital bayanihan\!"* | *RAISE (feedback loop)* | *Unsolicited report rate ≥25%* | *Trust erosion; participation sustainability* |
| *F14* | ***Peer referral mechanic*** | *In-app prompt: "Invite your neighbor to ClimatePulse." Generates a deep-link URL pre-populated with the user's barangay. Target: ≥3 organic new users per 10 recruited.* | *—* | *Peer referral rate ≥3/10* | *Digital divide; platform reach* |

### ***3.3 Kapitan View — Institutional Dashboard (Separate URL, 4 components)***

| *\#* | *Component* | *Description* | *Blue Ocean Action* | *Validation Target* |
| ----- | ----- | ----- | ----- | ----- |
| *K1* | ***Active report feed*** | *Real-time list of community reports in the captain's barangay: location, severity, photo thumbnail, timestamp, status. Sorted by recency.* | *CREATE (institutional utility)* | *Does the captain open this page during the smoke test?* |
| *K2* | ***Weather status banner*** | *Current warning level for the barangay, derived from weather API data (Open-Meteo for MVP; PAGASA when approved), translated to plain language \+ color. Same data as citizen Screen 1 but in institutional context.* | *RAISE (localization)* | *—* |
| *K3* | ***Community map (read-only)*** | *Same map as citizen Screen 3 but read-only. Captain sees all reports at a glance. No reporting capability from this view.* | *—* | *—* |
| *K4* | ***Quick stats*** | *\# reports today, \# reports this week, most-reported street/area. Minimal but enough to justify the B2G value proposition.* | *CREATE (institutional utility)* | *Would the captain pay for a more comprehensive version of this?* |

### ***3.4 Messenger Chatbot (Secondary Channel, 3 capabilities)***

| *\#* | *Capability* | *Description* |
| ----- | ----- | ----- |
| *M1* | ***Alert relay*** | *Pushes localized flood alerts and pre-disaster prompts to subscribed users via Messenger. Links to PWA for full details.* |
| *M2* | ***Quick report link*** | *User sends "report" or "flood" → chatbot replies with a deep-link to Screen 2 of the PWA with GPS pre-filled.* |
| *M3* | ***Status check*** | *User sends "status" → chatbot replies with current barangay risk level \+ \# active community reports. Links to PWA for map.* |

### ***3.5 Phase-Adaptive Behavior (Cuts Across All Features)***

*This is not a separate feature but a behavioral layer that modifies how existing features present themselves based on the disaster phase.*

| *Phase* | *Timing* | *UI Behavior* |
| ----- | ----- | ----- |
| ***Pre-disaster*** | *6-24 hours before predicted event* | *Calm tone. Checklist mode (F12). Home screen shows preparedness prompt alongside risk card. Community counter (F3) emphasizes "neighbors preparing." Messenger chatbot sends proactive prompt (M1).* |
| ***During event*** | *Active flooding confirmed* | *Stripped UI. Screen 1 shows ONLY: risk level (F1), action directive (F2), Report button (F4), nearest evacuation center (from F9). Community feed and non-essential elements suppressed. High-contrast emergency colors.* |
| ***Post-disaster*** | *Hazard downgraded or resolved* | *"All Clear" pushed (F11). "Your data mattered" notifications sent (F13). Home screen shows contribution summary: "Your barangay submitted X reports. Y were verified and used by Brgy Authority." Peer referral prompt activated (F14).* |

---

## ***4\. What's Explicitly NOT in the MVP***

*These are conscious exclusions, not oversights. Each has a reason.*

| *Deferred Feature* | *Why Not MVP* | *When* |
| ----- | ----- | ----- |
| *SMS fallback / offline reporting* | *Requires telecom shortcode registration \+ SMS gateway integration. Too much infrastructure for prototype phase.* | *P2 — Incubation phase* |
| *Offline data caching* | *PWA service workers for offline mode add significant engineering complexity.* | *P2* |
| *Volunteer/tanod validation layer* | *Requires user roles, moderation workflows, and a validation UI. Tests institutional adoption, not citizen behavior.* | *P2* |
| *User profiles and roles* | *Core features work without accounts. Adding profiles adds friction that kills adoption.* | *P2* |
| *Full BDRRMC situational dashboard* | *The Kapitan View (K1-K4) validates demand. Full dashboard is the B2G product to build post-validation.* | *P2 — This becomes the SaaS product* |
| *Automated SITREP generator* | *Requires structured data templates, COA compliance formatting. Build after proving data density.* | *P2* |
| *Gamification (badges, leaderboard)* | *Risk of trivializing disaster reporting. Test intrinsic motivation (bayanihan, visible impact) before adding extrinsic.* | *P3* |
| *Social newsfeed* | *Eliminated per Blue Ocean ERRC. Creates noise, anxiety, and bias vectors.* | *Never (or P4 with heavy moderation)* |
| *Multi-hazard support* | *MVP is flooding only. Expand to storm, landslide, fire after behavioral validation.* | *P2* |
| *Multi-language / dialect support* | *MVP in Filipino (Tagalog) \+ English. Bisaya, Ilocano etc. for regional expansion.* | *P2* |
| *Flood-prone zone historical overlay* | *Requires Phil-LiDAR / DREAM data integration. Nice context but not needed for behavioral validation.* | *P2* |
| *Evacuation center real-time status* | *Requires BDRRMC data feed that doesn't exist yet. Show nearest center name \+ address from static data.* | *P3* |
| *Drainage / infrastructure mapping* | *OSM mapping sprint is a separate workstream (Solution 2). Not part of the app MVP.* | *Parallel workstream* |
| *Hazard filter (type \+ time)* | *Only one hazard type (flood) in MVP. No filter needed.* | *P2 when multi-hazard launches* |
| *Free Basics / zero-rated compatibility* | *Requires Facebook partnership and technical compliance. PWA \+ Messenger already partially covers this.* | *P3* |
| *Accessibility for elderly / low-literacy* | *Youth are primary users and "information intermediaries." Elderly access is mediated through youth. Formal accessibility features in P3.* | *P3* |

---

## ***5\. Kill Criteria (from Investor Memo) — How MVP Tests Them***

***Analytics: Firebase** — All kill-criteria events tracked via Firebase Analytics custom events. Key events: `report_started`, `report_completed`, `report_undo`, `referral_link_generated`, `referral_link_clicked`, `kapitan_view_opened`, `all_clear_received`, `preparedness_checklist_opened`.*

| *Kill Criterion* | *Metric* | *How MVP Validates* | *Feature(s) Involved* |
| ----- | ----- | ----- | ----- |
| *Behavioral engagement* | *≥25% unsolicited report rate among recruited cohort* | *14-day smoke test: track % of users who submit at least one flood report without being directly prompted that day. Community counter (F3) and "your data mattered" (F13) are the behavioral levers.* | *F3, F5, F6, F13* |
| *Report completion* | *≥50% report completion rate* | *Track % of users who tap Report FAB (F4) and successfully reach "Received" status. If \<50%, friction is too high — likely a UX problem in the report flow.* | *F4, F5, F7* |
| *Viral growth* | *≥3 organic new users per 10 recruited* | *Track unique referral link clicks and new PWA visits from F14 deep-links. If \<1/10, the product has no organic distribution and CAC will be unsustainable.* | *F14* |
| *B2G demand signal* | *Captain opens Kapitan View during smoke test* | *Qualitative: does the barangay captain actively check the Kapitan View during the 14-day test? Would they want more? This validates whether institutional demand is real.* | *K1-K4* |
| *Data quality* | *\<15% misidentified/spam reports* | *Monitor validator feedback during smoke test. If noise exceeds 15%, the platform's institutional credibility collapses.* | *F5, F7* |

---

## ***6\. North Star Vision***

***In one sentence:** ClimatePulse transforms every smartphone in a barangay into a flood sensor that speaks back — turning the last mile of disaster warning from a dead zone into a living, bidirectional intelligence network that the community owns and the barangay captain trusts.*

***The flywheel:***

1. *Youth report → creates visible community data*  
2. *Visible data → builds captain trust → captain endorses platform*  
3. *Captain endorsement → drives adoption → more youth report*  
4. *More reports → denser data → more accurate neighborhood-level intelligence*  
5. *Better intelligence → better BDRRMC decisions → "your data mattered" notifications*  
6. *Visible impact → sustained participation → flywheel accelerates*

***The North Star metric:** % of households in the pilot barangay that receive and act on a ClimatePulse alert before a flood event impacts their street.*

---

## ***7\. myENV Design Patterns to Adopt***

*For the clickable prototype (Anima/Stitch), these specific myENV patterns should inform the high-fidelity design:*

| *myENV Pattern* | *How to Adapt for ClimatePulse* |
| ----- | ----- |
| ***Location card as home screen hero*** | *Screen 1's risk card should behave like myENV's location summary: dominant visual area, single-glance comprehension, everything else secondary* |
| ***Save location → personalized alerts*** | *Onboarding: confirm barangay → all content is automatically scoped. No location selection UI needed in daily use (single-barangay MVP)* |
| ***Color-coded environmental indicators*** | *myENV uses color bands for PSI levels. ClimatePulse uses identical pattern for flood risk: Green/Yellow/Orange/Red with clear labels* |
| ***Multi-agency data → single card*** | *myENV combines NEA \+ PUB \+ SFA data. ClimatePulse combines PAGASA \+ community reports \+ evacuation center data into one barangay summary* |
| ***Alert settings simplicity*** | *myENV's bell icon → alert settings → enable/select location pattern. ClimatePulse: even simpler — alerts are on by default for your confirmed barangay, with a single "mute for X hours" option* |
| ***Feedback/reporting built-in*** | *myENV includes "Report to NEA" in-app. ClimatePulse elevates this from a secondary feature to THE primary interaction — the Report FAB is always visible* |
| ***High-contrast, large text for all ages*** | *myENV's design explicitly avoids small fonts. ClimatePulse targets the same: minimum 16sp body, 24sp headlines, 56dp touch targets, high-contrast on all risk colors* |

---

## ***8\. Resolved Design Decisions (for PRD)***

1. ***Weather data source** — PAGASA API requires government approval and may not be available for MVP. Fallback: use a free weather API (Open-Meteo or OpenWeatherMap) for the prototype. Design the data layer so PAGASA Parser can be swapped in later when approval is secured. The risk card (F1) should work with either source.*  
2. ***Report verification in MVP** — Display "Verified" icon on reports. Auto-verify after X minutes with no flags (exact threshold TBD during smoke test). Verification process will be formalized in P2 with the volunteer/tanod validation layer, but the UI should show the status progression from day one.*  
3. ***Evacuation center data** — Static list sourced from BDRRMC. No real-time capacity/occupancy tracking in MVP. Just name \+ address of nearest center displayed in the risk summary panel (F9).*  
4. ***Push notifications** — PWA push notifications are NOT a priority for MVP. Messenger chatbot (M1) is the primary alert delivery channel. This removes the "Add to Home Screen" friction entirely — users get alerts where they already are.*  
5. ***Analytics stack** — Firebase. Track all kill-criteria events: report starts, report completions, referral link generations, referral link clicks, Kapitan View page loads, and unsolicited report submissions.*

