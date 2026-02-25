/**
 * COVERAGE REFERENCE CATALOG - VANILLA JS IMPLEMENTATION
 * Pure JS replacement for the previous React codebase.
 */

const COVERAGE_GROUPS = [
  "Benefits That Remain Mandatory",
  "Benefits That Are Now Optional (Effective July 1, 2026)",
  "Benefits That Remain Optional"
];

const COVERAGE_DATA = [
  // GROUP: Benefits That Remain Mandatory
  {
    id: 'med-rehab',
    group: "Benefits That Remain Mandatory",
    title: "Medical, Rehabilitation, and Attendant Care Benefit",
    summary: "Covers the cost of reasonable and necessary medical and rehabilitation expenses that are not covered by OHIP or your group insurance plan.",
    mandatory: "For non-catastrophic injuries, the limit is $65,000. For minor injuries, the limit is $3,500.",
    increased: "Optional increase for non-catastrophic injuries to $130,000 or combined $1,000,000 with attendant care. Catastrophic injuries can add $1,000,000.",
    icon: "🏥",
    tip: "Note: Auto insurers are now 'first payor' for these expenses (except medication) before your private health plan."
  },
 /* {
    id: 'attendant-care',
    group: "Benefits That Remain Mandatory",
    title: "Attendant Care Benefit",
    summary: "If you require an aide or attendant to assist with your personal care after an accident, this benefit will pay for those services.",
    mandatory: "For non-catastrophic injuries, included within the $65,000 med/rehab limit. For catastrophic, the limit is $1,000,000.",
    increased: "Optional increase for non-catastrophic to $72,000 or combined $1,000,000 with med/rehab. Catastrophic injuries can add $1,000,000.",
    icon: "🛌",
    tip: "This coverage is essential for those who live alone and may need professional help with daily tasks like bathing or dressing."
  }, */
    {
    id: 'exam-costs',
    group: "Benefits That Remain Mandatory",
    title: "Cost of Examinations",
    summary: "Covers cost of examinations required to assess injuries and determine benefit eligibility.",
    mandatory: "Up to $2,500.",
    increased: "No optional increase available.",
    icon: "📝",
    tip: "These exams are often required by the insurer to verify the nature and extent of your disability."
  },
  // GROUP: Benefits That Are Now Optional (Effective July 1, 2026)
  {
    id: 'income-replacement',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Income Replacement Benefit",
    summary: "Previously mandatory; now optional. Provides a weekly payment if you are unable to work as a result of an accident.",
    mandatory: "70% of gross weekly income, up to a maximum of $400 per week (if selected).",
    increased: "Optional benefit to increase the weekly maximum to $600, $800, or $1,000.",
    icon: "💰",
    tip: "Review your workplace Long Term Disability (LTD) policy; you may already have sufficient coverage through your employer."
  },
  {
    id: 'non-earner',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Non-Earner Benefit",
    summary: "Previously mandatory; now optional. Provides a weekly payment if you do not qualify for income replacement and are unable to carry on a normal life.",
    mandatory: "$185 per week with a 4-week waiting period. Payable for up to two years (if selected).",
    increased: "No optional increase available.",
    icon: "🎓",
    tip: "Highly recommended for students, retirees, or stay-at-home parents who don't have a traditional income to protect."
  },
  {
    id: 'caregiver',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Caregiver Benefit",
    summary: "Previously mandatory for catastrophic injuries; now optional. Covers expenses to hire care if you can no longer care for a dependant.",
    mandatory: "Up to $250/week for first dependant + $50/others (if selected, for catastrophic injuries only).",
    increased: "Optional benefit available to make this coverage applicable for all levels of injury.",
    icon: "👪",
    tip: "Essential for primary caregivers of children or elderly relatives who would need to hire help if injured."
  },
  {
    id: 'housekeeping',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Housekeeping and Home Maintenance",
    summary: "Previously mandatory for catastrophic injuries; now optional. Covers costs of hiring household help.",
    mandatory: "Up to $100 per week (if selected, for catastrophic injuries only).",
    increased: "Optional benefit available to make this coverage applicable for all levels of injury.",
    icon: "🏠",
    tip: "Consider who would handle heavy cleaning or outdoor maintenance if you were temporarily unable to perform these duties."
  },
  {
    id: 'death-benefit',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Death Benefit",
    summary: "Previously mandatory; now optional. A one-time payment to the surviving spouse and dependants of a person who dies as a result of an auto accident.",
    mandatory: "$25,000 to spouse, $10,000 to each dependant (if selected). If none, $25,000 divided among other beneficiaries.",
    increased: "Optional increase to $50,000 for spouse and $20,000 for each dependant.",
    icon: "🕯️",
    tip: "This is a low-cost way to provide immediate cash flow for a family in the event of a tragic accident."
  },
  {
    id: 'funeral-benefit',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Funeral Benefit",
    summary: "Previously mandatory; now optional. A one-time payment to cover the costs of a funeral.",
    mandatory: "Up to $6,000 (if selected).",
    increased: "Optional increase to $8,000 limit.",
    icon: "⚰️",
    tip: "Standard funeral costs in Ontario often exceed the $6,000 base level; the optional increase is usually very affordable."
  },
  {
    id: 'lost-educational',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Lost Educational Expenses",
    summary: "Previously mandatory; now optional. Reimburses students for lost tuition, books, and fees if unable to continue their program.",
    mandatory: "Up to $15,000 (if selected).",
    increased: "No optional increase available.",
    icon: "📚",
    tip: "Crucial for university or college students who have already paid significant tuition for the semester."
  },
  {
    id: 'visitor-expenses',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Expenses of Visitors",
    summary: "Previously mandatory; now optional. Covers expenses of certain family members to visit you during treatment or recovery.",
    mandatory: "Reasonable expenses are covered (if selected).",
    increased: "No optional increase available.",
    icon: "👥",
    tip: "Helps your family be by your side without worrying about travel or lodging costs during a hospital stay."
  },
  {
    id: 'damage-clothing',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Damage to Personal Items",
    summary: "Previously mandatory; now optional. Covers cost to replace clothing, glasses, hearing aids, and medical devices damaged in the accident.",
    mandatory: "Reasonable expenses are covered (if selected).",
    increased: "No optional increase available.",
    icon: "👓",
    tip: "Expensive hearing aids or designer eyewear can be costly to replace out-of-pocket after a crash."
  },
  // GROUP: Benefits That Remain Optional
  {
    id: 'opt-dependant-care',
    group: "Benefits That Remain Optional",
    title: "Dependant Care Benefit",
    summary: "Additional support for caring for dependants if you are employed at the time of the accident.",
    mandatory: "Not provided as a standard benefit.",
    increased: "Pays up to $75/week for first dependant + $25/others, max $150/week.",
    icon: "👶",
    tip: "A dedicated benefit specifically designed for working parents to ensure childcare continues uninterrupted."
  },
  {
    id: 'opt-indexation',
    group: "Benefits That Remain Optional",
    title: "Indexation Benefit",
    summary: "Ensures benefits and monetary limits are adjusted annually for inflation.",
    mandatory: "Not provided as a standard benefit.",
    increased: "Annual adjustment based on the Consumer Price Index (CPI).",
    icon: "📈",
    tip: "Extremely valuable if an injury leads to a long-term disability, as it protects your benefits' value over many years."
  }
];

/**
 * Creates the HTML for a single coverage card accordion.
 */
function createCoverageCard(coverage) {
  const isMandatoryGroup = coverage.group.includes("Mandatory");
  const isNowOptionalGroup = coverage.group.includes("Now Optional");
  const isStillOptionalGroup = coverage.group.includes("Remain Optional");  
  const hasOptionalIncrease = coverage.increased && !coverage.increased.toLowerCase().includes("no optional increase available");

  return `
    <div class="border rounded-lg transition-all duration-300 overflow-hidden border-[#D8DCDB] bg-white hover:border-[#007db3] coverage-card" id="card-${coverage.id}">
      <button 
        class="w-full p-6 flex items-start text-left space-x-4 focus:outline-none accordion-trigger group/btn"
        data-target="content-${coverage.id}"
      >
        <span class="text-3xl shrink-0 mt-1">${coverage.icon}</span>
        <div class="flex-grow">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="font-bold text-[#003359] text-lg">${coverage.title}</h3>
            ${isMandatoryGroup ? `
              <span class="px-2 py-0.5 bg-[#006140] text-white text-[10px] font-bold uppercase rounded flex items-center">
                <i data-lucide="shield-check" class="w-[10px] h-[10px] mr-1"></i> Mandatory
              </span>
            ` : ''}
            ${isNowOptionalGroup ? `
              <span class="px-2 py-0.5 bg-[#007db3] text-white text-[10px] font-bold uppercase rounded flex items-center">
                <i data-lucide="shield-alert" class="w-[10px] h-[10px] mr-1"></i> Now Optional
              </span>
            ` : ''}
                ${isStillOptionalGroup ? `
              <span class="px-2 py-0.5 bg-[#FF8C11] text-white text-[10px] font-bold uppercase rounded flex items-center">
                <i data-lucide="shield-alert" class="w-[10px] h-[10px] mr-1"></i> Still Optional
              </span>
            ` : ''}
          </div>
          <p class="text-[#373737] opacity-70 text-sm mt-1 leading-relaxed">${coverage.summary}</p>
        </div>
        <div class="mt-2 text-[#D8DCDB] group-hover/btn:text-[#007db3] transition-colors chevron-icon">
          <i data-lucide="chevron-down" class="w-[24px] h-[24px]"></i>
        </div>
      </button>

      <div id="content-${coverage.id}" class="accordion-content px-6">
        <div class="pb-6 pt-2 space-y-6 border-t border-[#D8DCDB]/30 mt-1">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-[#D8DCDB]/10 p-5 rounded-lg border border-[#D8DCDB]/60">
              <h4 class="text-[10px] font-black text-[#373737]/60 uppercase tracking-widest mb-3">Base Level Coverage</h4>
              <p class="text-[#003359] text-sm leading-relaxed font-medium">${coverage.mandatory}</p>
            </div>
            
            <div class="p-5 rounded-lg border ${hasOptionalIncrease || (!isMandatoryGroup && !isNowOptionalGroup) ? 'bg-[#FF8C11]/5 border-[#FF8C11]/20 shadow-sm' : 'bg-gray-50 border-gray-100 opacity-60'}">
              <h4 class="text-[10px] font-black uppercase tracking-widest mb-3 ${hasOptionalIncrease || (!isMandatoryGroup && !isNowOptionalGroup) ? 'text-[#FF8C11]' : 'text-gray-400'}">
                Available Options
              </h4>
              <p class="${hasOptionalIncrease || (!isMandatoryGroup && !isNowOptionalGroup) ? 'text-[#003359]' : 'text-gray-500'} text-sm leading-relaxed font-medium">
                ${coverage.increased}
              </p>
            </div>
          </div>

          ${coverage.tip ? `
            <div class="bg-[#007db3]/5 border border-dashed border-[#007db3]/30 p-5 rounded-xl flex items-start space-x-4">
              <i data-lucide="lightbulb" class="text-[#007db3] shrink-0 mt-0.5 w-[20px] h-[20px]"></i>
              <div class="text-sm text-[#003359]/80 leading-relaxed font-medium">
                <span class="font-black text-[#007db3] mr-1 uppercase text-[10px] tracking-wider">Broker Tip:</span> ${coverage.tip}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

/**
 * Initializes the application.
 */
function init() {
  const sidebarNav = document.getElementById('sidebar-nav');
  const coverageContainer = document.getElementById('coverage-container');

  // Clear existing content if any
  sidebarNav.innerHTML = '';
  coverageContainer.innerHTML = '';

  // Render Sidebar and Content Groups
  COVERAGE_GROUPS.forEach(groupName => {
    const groupId = groupName.replace(/\s+/g, '-').toLowerCase();
    
    // Create sidebar button
    const navBtn = document.createElement('button');
    navBtn.className = 'w-full text-left p-4 rounded-lg text-sm font-bold text-gray-500 hover:bg-white hover:text-[#007db3] hover:shadow-sm border border-transparent hover:border-[#D8DCDB] transition-all flex justify-between items-center group';
    navBtn.innerHTML = `
      <span class="line-clamp-1">${groupName}</span>
      <i data-lucide="chevron-right" class="w-[14px] h-[14px] opacity-0 group-hover:opacity-100 transition-all"></i>
    `;
    navBtn.onclick = () => {
      const element = document.getElementById(groupId);
      if (element) {
        // Calculate offset (sticky navbar height + extra padding)
        const offset = 40; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

        // Visual feedback on nav
        document.querySelectorAll('#sidebar-nav button').forEach(b => b.classList.remove('sidebar-active'));
        navBtn.classList.add('sidebar-active');
      }
    };
    sidebarNav.appendChild(navBtn);

    // Create Content Section
    const section = document.createElement('section');
    section.id = groupId;
    section.className = 'space-y-6 scroll-mt-12';
    section.innerHTML = `
      <div class="flex items-center space-x-4 border-b-4 border-[#003359] pb-4">
        <div class="bg-[#003359] p-3 rounded-lg text-white shadow-lg">
          <i data-lucide="layers" class="w-[24px] h-[24px]"></i>
        </div>
        <h3 class="text-2xl font-black text-[#003359] tracking-tight uppercase">${groupName}</h3>
      </div>
      <div class="grid grid-cols-1 gap-6">
        ${COVERAGE_DATA
          .filter(item => item.group === groupName)
          .map(createCoverageCard)
          .join('')}
      </div>
    `;
    coverageContainer.appendChild(section);
  });

  // Initialize Icons for the first time
  lucide.createIcons();

  // Add Event Listeners for Accordion Toggles
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const targetId = trigger.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const card = trigger.closest('.coverage-card');
      const iconContainer = trigger.querySelector('.chevron-icon');
      
      const isOpen = content.classList.contains('open');

      if (isOpen) {
        content.classList.remove('open');
        card.classList.remove('card-active');
        iconContainer.innerHTML = '<i data-lucide="chevron-down" class="w-[24px] h-[24px]"></i>';
      } else {
        // Optional: Close others
        // document.querySelectorAll('.accordion-content.open').forEach(el => el.classList.remove('open'));
        // document.querySelectorAll('.coverage-card.card-active').forEach(el => el.classList.remove('card-active'));
        // document.querySelectorAll('.chevron-icon').forEach(ic => ic.innerHTML = '<i data-lucide="chevron-down" class="w-[24px] h-[24px]"></i>');

        content.classList.add('open');
        card.classList.add('card-active');
        iconContainer.innerHTML = '<i data-lucide="chevron-up" class="w-[24px] h-[24px]"></i>';
      }
      
      // Refresh icons for the newly injected/changed HTML
      lucide.createIcons();
    });
  });
}

// Start the application after DOM is ready
document.addEventListener('DOMContentLoaded', init);
