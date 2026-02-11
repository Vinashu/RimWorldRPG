# Future Enhancements Roadmap

## Overview
This document tracks planned enhancements for the RimWorld RPG character and base sheets.

**Last Updated:** 2025-12-08

---

## High Priority (Quick Wins)

### 1. Filter by Tech Level in Dropdowns 🎯
**Sheet:** Base Sheet  
**Time Estimate:** 45-60 minutes  
**Complexity:** Medium

**Description:**
- Hide facilities/defenses the colony can't build yet based on current tech levels
- Show only unlocked items in dropdowns
- Visual indicator for locked items
- Dynamic filtering as tech levels increase

**Impact:** High - prevents mistakes, better UX, makes progression feel rewarding

**Implementation:**
```javascript
function populateFacilityDropdown() {
    const currentTech = getCurrentTechLevels();
    facilities.forEach(facility => {
        if (isTechUnlocked(facility.tech, currentTech)) {
            // Add to dropdown
        } else {
            // Skip or show as locked
        }
    });
}
```

---

### 2. Facility Grouping with Quantities 📦
**Sheet:** Base Sheet  
**Time Estimate:** 30-45 minutes  
**Complexity:** Low (same pattern as defenses)

**Description:**
- Apply same grouping system to facilities as we did for defenses
- Show "Kitchen × 2" instead of 2 separate cards
- Add +/−/Remove All buttons
- Calculate totals automatically

**Impact:** High - consistent UX, cleaner interface

**Status:** Pattern already implemented for defenses, just needs to be applied to facilities

---

## Medium Priority (Valuable Features)

### 3. Power Management System ⚡
**Sheet:** Base Sheet  
**Time Estimate:** 1-2 hours  
**Complexity:** Medium

**Description:**
- Track power-generating buildings (generators, solar panels, geothermal)
- Track power-consuming facilities
- Display power surplus/deficit
- Visual indicators for unpowered facilities
- Warning when power demand exceeds supply

**Implementation Areas:**
- Add `powerGeneration` and `powerConsumption` fields to buildings.json
- New section in base_sheet.html for power status
- Auto-calculate total generation vs consumption
- Color-coded status (green = surplus, yellow = balanced, red = deficit)

**Impact:** Medium - adds strategic depth, prevents building mistakes

---

### 4. Construction Queue Integration 🏗️
**Sheet:** Base Sheet  
**Time Estimate:** 1-2 hours  
**Complexity:** Medium

**Description:**
- Link facilities/defenses to construction queue
- Track what's being built
- Show progress toward completion
- Move completed items from queue to facility list automatically
- Track CP spent on construction

**Impact:** Medium - better workflow, integrates existing sections

---

### 5. HP Tracking for Defenses 🛡️
**Sheet:** Base Sheet  
**Time Estimate:** 1.5-2 hours  
**Complexity:** High

**Description:**
- Track individual defense HP (currentHP vs maxHP)
- Damage defenses during raids
- HP bars on defense cards
- Repair functionality with material costs
- Reduce defense points when HP = 0
- Visual indicators for damaged structures

**Data Structure:**
```javascript
{
    ...defense,
    maxHP: defense.hp,
    currentHP: defense.hp,  // NEW
    isDamaged: false        // NEW
}
```

**Implementation Plan:** Available in previous implementation_plan.md Phase 4

**Impact:** High - adds tactical depth, resource management

---

### 6. Export/Import Colony Configs 💾
**Sheet:** Base Sheet  
**Time Estimate:** 1-2 hours  
**Complexity:** Medium

**Description:**
- Export entire colony to JSON file
- Import saved colonies
- Share colonies with other players
- Multiple colony save slots
- Auto-naming with date/time stamps

**Features:**
- Export button → download colony.json
- Import button → load from file
- List of saved colonies in localStorage
- Quick-switch between colonies

**Impact:** Medium - useful for multiple campaigns, sharing

---

## Lower Priority (Nice to Have)

### 7. Facility Categorization 📁
**Sheet:** Base Sheet  
**Time Estimate:** 2-3 hours  
**Complexity:** Medium

**Description:**
- Group facilities by category (Housing, Production, Research, Defense, Recreation)
- Collapsible category sections
- Count per category
- Filter by category
- Color-coding by type

**Impact:** Low - organizational improvement for large colonies

---

### 8. Defense Adequacy Milestones 🎯
**Sheet:** Base Sheet  
**Time Estimate:** 30 minutes  
**Complexity:** Low

**Description:**
- Show tier thresholds on progress bar (marks at 5, 10, 20, 30, 50)
- Hover tooltips showing requirements
- Achievement-style notifications when reaching thresholds
- History of defense improvements

**Impact:** Low - visual polish, motivation

---

### 9. Bulk Quantity Input 🔢
**Sheet:** Base Sheet (Facilities & Defenses)  
**Time Estimate:** 30 minutes  
**Complexity:** Low

**Description:**
- Text field to set exact quantity
- "Add 10" style preset buttons (+1, +5, +10, +100)
- Keyboard input support
- For rapid colony building

**Impact:** Low - convenience for large quantities

---

## Character Sheet Enhancements

### 10. Item Inventory Management 🎒
**Sheet:** Character Sheet  
**Time Estimate:** 2-3 hours  
**Complexity:** Medium-High

**Description:**
- Add/remove items from inventory
- Track item quantities
- Weight/encumbrance calculation
- Quick reference for item stats
- Consumable tracking (medicine, food, drugs)

**Impact:** High - core character functionality

---

### 11. Skill Advancement Tracker 📈
**Sheet:** Character Sheet  
**Time Estimate:** 1-2 hours  
**Complexity:** Medium

**Description:**
- Track skill usage/advancement
- XP progress bars
- Skill milestone notifications
- History of skill improvements
- Visual skill comparison (radar chart)

**Impact:** Medium - character progression visibility

---

### 12. Condition/Status Tracker 🩹
**Sheet:** Character Sheet  
**Time Estimate:** 1-2 hours  
**Complexity:** Medium

**Description:**
- Track active conditions (bleeding, infections, injuries)
- Duration tracking
- Severity indicators
- Treatment recommendations
- Auto-remove expired conditions

**Impact:** Medium - health management

---

### 13. Quick Equipment Loadouts ⚔️
**Sheet:** Character Sheet  
**Time Estimate:** 1 hour  
**Complexity:** Low

**Description:**
- Save equipment sets (Combat, Crafting, Social, etc.)
- Quick-switch between loadouts
- Visual comparison of loadout stats
- Preset loadouts for common roles

**Impact:** Low - convenience feature

---

## Technical Improvements

### 14. Offline Support (PWA) 📱
**Sheet:** Both  
**Time Estimate:** 3-4 hours  
**Complexity:** High

**Description:**
- Convert to Progressive Web App
- Service worker for offline functionality
- App-like installation
- Sync when online
- Mobile-responsive design

**Impact:** High - usability on all devices

---

### 15. Undo/Redo System ↩️
**Sheet:** Both  
**Time Estimate:** 2-3 hours  
**Complexity:** Medium-High

**Description:**
- Track state changes
- Ctrl+Z / Ctrl+Y support
- History stack (last 50 actions)
- Visual history timeline
- Revert to any previous state

**Impact:** Medium - error recovery, experimentation

---

### 16. Data Validation & Error Messages ✅
**Sheet:** Both  
**Time Estimate:** 2 hours  
**Complexity:** Medium

**Description:**
- Validate JSON data on load
- Check for circular dependencies
- Warn about missing prerequisites
- Helpful error messages
- Auto-fix common issues

**Impact:** Medium - robustness, better UX

---

### 17. Print-Friendly Stylesheets 🖨️
**Sheet:** Both  
**Time Estimate:** 2-3 hours  
**Complexity:** Medium

**Description:**
- CSS print media queries
- Optimized layout for printing
- Page break control
- Black & white printer friendly
- Export to PDF

**Impact:** Low-Medium - physical sheet support

---

## Priority Matrix

| Priority | Feature | Time | Impact | Complexity |
|----------|---------|------|--------|------------|
| 🔥 | Filter by Tech Level | 1h | High | Medium |
| 🔥 | Facility Grouping | 0.5h | High | Low |
| ⭐ | Power Management | 2h | Medium | Medium |
| ⭐ | HP Tracking | 2h | High | High |
| ⭐ | Construction Queue | 2h | Medium | Medium |
| ⭐ | Export/Import | 2h | Medium | Medium |
| ⭐ | Item Inventory | 3h | High | High |
| ✓ | Skill Tracker | 2h | Medium | Medium |
| ✓ | Conditions Tracker | 2h | Medium | Medium |
| ✓ | Facility Categories | 3h | Low | Medium |
| ✓ | Defense Milestones | 0.5h | Low | Low |
| ✓ | Bulk Quantity Input | 0.5h | Low | Low |
| ✓ | Equipment Loadouts | 1h | Low | Low |
| 🔧 | Offline Support (PWA) | 4h | High | High |
| 🔧 | Undo/Redo | 3h | Medium | High |
| 🔧 | Data Validation | 2h | Medium | Medium |
| 🔧 | Print Stylesheets | 3h | Low | Medium |

**Legend:**
- 🔥 High Priority (Quick wins, high impact)
- ⭐ Medium Priority (Valuable features)
- ✓ Lower Priority (Nice to have)
- 🔧 Technical Improvements

---

## Recommended Implementation Order

### Phase 1: Quick Wins (Week 1)
1. Facility Grouping with Quantities
2. Filter by Tech Level

### Phase 2: Core Features (Week 2-3)
3. Power Management System
4. HP Tracking for Defenses
5. Construction Queue Integration

### Phase 3: Character Sheet (Week 4)
6. Item Inventory Management
7. Skill Advancement Tracker
8. Conditions Tracker

### Phase 4: Advanced Features (Week 5-6)
9. Export/Import Colonies
10. Offline Support (PWA)
11. Undo/Redo System

### Phase 5: Polish (Week 7+)
12. Facility Categories
13. Equipment Loadouts
14. Print Stylesheets
15. Defense Milestones
16. Bulk Quantity Input
17. Data Validation

---

## Notes

- All features should maintain the current auto-calculation and auto-save patterns
- Consistency with existing UX is critical
- Test thoroughly in browser after each feature
- Update walkthrough.md after completing each major feature
- Consider mobile responsiveness for all new features

---

## Completed Features ✅

- [x] JSON data extraction from rulebook
- [x] Data loader module with caching
- [x] Character sheet weapon/armor selectors
- [x] Base sheet wealth calculator (JSON-driven)
- [x] Facility builder with dynamic dropdowns
- [x] Defense builder with dynamic dropdowns
- [x] Tech tree display
- [x] Auto wealth calculation
- [x] Defense rating calculator
- [x] Current vs Max defense tracking
- [x] Visual defense adequacy indicators
- [x] Smart defense recommendations
- [x] Defense grouping with quantities
- [x] Defense points in dropdown
