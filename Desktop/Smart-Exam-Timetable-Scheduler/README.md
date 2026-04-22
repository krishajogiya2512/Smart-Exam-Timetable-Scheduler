# 📅 Smart Exam Timetable Scheduler

---

## 📌 Project Overview

The Smart Exam Timetable Scheduler is a rule-based, AI-assisted system designed to automate the generation and validation of college exam schedules.

It integrates structured data collection, AI-based scheduling, and rule-based validation to reduce manual effort and ensure constraint satisfaction.

---

## 📌 Problem Statement

Colleges face difficulty in creating exam timetables due to multiple constraints such as student overlaps, room capacity limits, and back-to-back exams.

Manual scheduling is time-consuming, error-prone, and inefficient.

This project aims to build a rule-based, AI-assisted system that generates and validates exam timetables automatically using structured data and constraint checking.

---

## ⚙️ Constraints

### 1. No Student Overlap

A student cannot have two exams scheduled in the same time slot.

### 2. Room Capacity Constraint

Assigned room capacity must be greater than or equal to the number of enrolled students.

### 3. Back-to-Back Minimization

Avoid consecutive exams for the same student on the same day.

---

## 📊 Evaluation Metrics

* Total number of student conflicts
* Number of room capacity violations
* Number of back-to-back exams
* Room utilization efficiency

---

## 🔄 System Workflow

```
Google Form → Google Sheets → AI (ChatGPT)
→ Proposed Schedule → Validation (Google Sheets)
→ Conflict Detection → Final Timetable
```

---

## 🏗️ System Architecture

The system follows a modular pipeline architecture where each component handles a specific responsibility in the timetable generation process.

### 🔹 Components

1. Data Collection Layer (Google Forms)
2. Data Storage Layer (Google Sheets)
3. AI Scheduling Engine (ChatGPT / Gemini)
4. Validation & Conflict Detection Layer (Google Sheets logic)
5. Evaluation Layer (metrics comparison)
6. Output Layer (Canva export)

---

## 🔄 Data Flow Mapping

1. User inputs data via Google Forms
2. Data is stored in Google Sheets
3. AI model processes structured data
4. Initial timetable is generated
5. Validation rules are applied
6. Conflicts are detected and highlighted
7. Final optimized timetable is selected

---

## 🤖 Automation & Rule-Based Logic

The system automates scheduling and validation using predefined rules:

* Automatic detection of student overlaps using COUNTIF / FILTER
* Room capacity validation using lookup formulas
* Back-to-back exam detection using time slot comparisons
* Conditional formatting to highlight conflicts

### 🔹 Threshold Rules

* Conflict count should be minimized (target = 0)
* Room violations should be 0
* Back-to-back exams should be as low as possible

---

## 🗂️ Data Structure (Google Sheets)

### Courses

| Course ID | Course Name |

### Students

| Student ID | Name |

### Enrollments

| Student ID | Course ID |

### Rooms

| Room ID | Capacity |

### Time Slots

| Slot ID | Date | Time |

---

## 🧠 Approach

The system uses structured input data collected through Google Forms and stored in Google Sheets.

An AI model generates an initial timetable based on defined constraints. The schedule is then validated using rule-based logic implemented in Google Sheets to detect conflicts.

Multiple schedule versions can be compared, and the one with minimal conflicts is selected.

---

## 🔐 Security Considerations

* Data access is restricted through Google Sheets permissions
* No sensitive personal data is stored beyond required academic details
* Controlled access ensures only authorized users can modify schedules

---

## ⚠️ Limitations

* Does not use advanced optimization algorithms
* AI-generated schedules are not guaranteed to be optimal
* Large datasets may require manual adjustments

---

## 🎨 UI Abstraction

The system does not include a traditional frontend UI.

Instead:

* Google Forms acts as the input interface
* Google Sheets acts as the control and validation interface
* Canva provides the final visual output

This approach simplifies development while maintaining functionality.

---

## 🛠️ Tech Stack

* ChatGPT / Gemini (schedule generation)
* Google Forms (data collection)
* Google Sheets (data handling + validation)
* Canva (visual timetable design)

---
