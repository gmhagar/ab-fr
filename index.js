/**
 * COVERAGE REFERENCE CATALOG - VANILLA JS IMPLEMENTATION
 * Pure JS replacement for the previous React codebase.
 */

const COVERAGE_GROUPS = [
  "Indemnités d’accident qui demeurent obligatoires",
  "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
  "Indemnités d’accident qui demeurent facultatives"
];

const COVERAGE_DATA = [
  // GROUP: Benefits That Remain Mandatory
  {
    id: 'med-rehab',
    group: "Indemnités d’accident qui demeurent obligatoires",
    title: "Frais médicaux, réadaptation et soins auxiliaires",
    summary: "Couvre le coût des frais médicaux raisonnables et de réadaptation raisonnables et nécessaires qui ne sont pas couverts par l’Assurance-santé de l’Ontario ou par le programme d’assurance de groupe.",
    mandatory: "Le montant d’assurance pour les blessures non invalidantes est de 65 000 $. Le montant d’assurance pour les blessures mineures est de 3 500 $.",
    increased: "Augmentation facultative à 130 000 $ pour les blessures non invalidantes ou 1 000 000 $ lorsque combinée avec les soins auxiliaires. Augmentation facultative de 1 000 000 $ pour les blessures invalidantes.",
    icon: "🏥",
    tip: "Remarque : Les assureurs automobiles sont désormais les premiers payeurs pour ces dépenses (à l’exception des frais de médicaments), avant le régime privé d’assurance maladie."
  },
    {
    id: 'exam-costs',
    group: "Indemnités d’accident qui demeurent obligatoires",
    title: "Coût des examens",
    summary: "Couvre le coût des examens nécessaires pour évaluer les blessures et déterminer l’admissibilité aux prestations.",
    mandatory: "Jusqu’à 2 500 $.",
    increased: "Aucune augmentation facultative offerte.",
    icon: "📝",
    tip: "Ces examens sont souvent exigés par l’assureur afin de vérifier la nature et l’étendue de l’invalidité."
  },
  // GROUP: Benefits That Are Now Optional (Effective July 1, 2026)
  {
    id: 'income-replacement',
    group: "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
    title: "Indemnités de remplacement de revenu",
    summary: "Auparavant obligatoire, ces indemnités sont maintenant facultatives. Cette garantie prévoit le versement d’une indemnité hebdomadaire si une personne n’est pas en mesure de travailler à la suite d’un accident.",
    mandatory: "70 % du revenu brut hebdomadaire, jusqu’à concurrence de 400 $ par semaine (lorsque sélectionnée).",
    increased: "Possibilité d’augmenter le maximum hebdomadaire à 600 $, 800 $ ou 1 000 $.",
    icon: "💰",
    tip: "Consultez la police d’assurance invalidité de longue durée de votre employeur; vous bénéficiez peut-être déjà d’une couverture suffisante."
  },
  {
    id: 'non-earner',
    group: "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
    title: "Indemnités de personne sans revenu d’emploi",
    summary: "Auparavant obligatoire, ces indemnités sont maintenant facultatives. Cette garantie prévoit le versement d’une indemnité hebdomadaire si l’assuré n’est pas admissible aux indemnités de remplacement de revenu ou n’est pas en mesure de mener une vie normale.",
    mandatory: "185 $ par semaine avec une période d’attente de quatre semaines. Payable pendant un maximum de deux ans (si sélectionnée).",
    increased: "Possibilité d’augmenter le maximum hebdomadaire à 320 $.",
    icon: "🎓",
    tip: "Fortement recommandée pour les étudiants, les retraités ou les parents au foyer qui n’ont pas de revenu traditionnel à protéger."
  },
  {
    id: 'caregiver',
    group: "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
    title: "Indemnités de soignant",
    summary: "Auparavant obligatoire pour les blessures invalidantes, ces indemnités sont maintenant facultatives. Couvre les frais liés à l’embauche d’un aidant si l’assuré n’est plus en mesure de s’occuper d’une personne à charge.",
    mandatory: "Jusqu’à 250 $ par semaine pour la première personne à charge, plus 50 $ pour chaque personne à charge supplémentaire (si sélectionnée; pour les blessures invalidantes seulement).",
    increased: "Possibilité de rendre cette garantie applicable à tous les types de blessures.",
    icon: "👪",
    tip: "Indispensable pour les principaux responsables d’enfants ou de personnes âgées qui auraient besoin de faire appel à une aide en cas de blessure."
  },
  {
    id: 'housekeeping',
    group: "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
    title: "Travaux ménagers et entretien du domicile",
    summary: "Auparavant obligatoire pour les blessures invalidantes, ces indemnités sont maintenant facultatives. Couvre les frais d’embauche d’une aide ménagère.",
    mandatory: "Jusqu’à 100 $ par semaine (si sélectionnée; pour les blessures invalidantes seulement).",
    increased: "Possibilité de rendre cette garantie applicable à tous les types de blessures.",
    icon: "🏠",
    tip: "Réfléchissez à qui pourrait s’occuper du nettoyage en profondeur ou de l’entretien extérieur si vous étiez temporairement dans l’incapacité d’accomplir ces tâches."
  },
  {
    id: 'death-benefit',
    group: "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
    title: "Prestations de décès",
    summary: "Auparavant obligatoire, ces indemnités sont maintenant facultatives. Versement unique au conjoint et aux personnes à charge survivant d’une personne décédée à la suite d’un accident de voiture.",
    mandatory: "25 000 $ pour le conjoint et 10 000 $ pour chaque personne à charge (si sélectionnée). S’il n’y en a pas, 25 000 $ répartis entre les autres bénéficiaires.",
    increased: "Augmentation facultative à 50 000 $ pour le conjoint et à 20 000 $ pour chaque personne à charge.",
    icon: "🕯️",
    tip: "Il s’agit d’un moyen peu coûteux d’assurer un apport financier immédiat à une famille en cas d’accident tragique."
  },
  {
    id: 'funeral-benefit',
    group: "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
    title: "Frais funéraires",
    summary: "Auparavant obligatoire, ces indemnités sont maintenant facultatives. Montant forfaitaire pour couvrir des frais funéraires.",
    mandatory: "Jusqu’à 6 000 $ (si sélectionnée).",
    increased: "Augmentation facultative à 8 000 $.",
    icon: "⚰️",
    tip: "Comme les frais funéraires standard en Ontario dépassent souvent le montant de base de 6 000 $, l’augmentation facultative est généralement très abordable."
  },
  {
    id: 'lost-educational',
    group: "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
    title: "Frais d’études engagés inutilement",
    summary: "Auparavant obligatoire, ces indemnités sont maintenant facultatives. Rembourse aux étudiants les frais de scolarité, de livres et autres frais perdus s’ils ne peuvent pas poursuivre leur programme.",
    mandatory: "Jusqu’à 15 000 $ (si sélectionnée).",
    increased: "Aucune augmentation facultative possible.",
    icon: "📚",
    tip: "Essentiel pour les étudiants à l’université ou au collège qui ont déjà payé des frais de scolarité importants pour le semestre."
  },
  {
    id: 'visitor-expenses',
    group: "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
    title: "Frais des visiteurs",
    summary: "Auparavant obligatoire, ces indemnités sont maintenant facultatives. Couvre les frais engagés par certains membres de votre famille lorsqu’ils vous rendent visite pendant vos traitements et votre convalescence.",
    mandatory: "Les dépenses raisonnables sont couvertes (si sélectionnée).",
    increased: "Aucune augmentation facultative possible.",
    icon: "👥",
    tip: "Permet à la famille de l’assuré de rester à ses côtés sans se soucier des frais de déplacement ou d’hébergement pendant le séjour à l’hôpital."
  },
  {
    id: 'damage-clothing',
    group: "Indemnités d’accident maintenant facultatives (en date du 1er juillet 2026)",
    title: "Dommages aux biens personnels",
    summary: "Auparavant obligatoire, ces indemnités sont maintenant facultatives. Couvre le remplacement des vêtements, des lunettes, des appareils auditifs et des appareils médicaux endommagés lors d’un accident.",
    mandatory: "Les dépenses raisonnables sont couvertes (si sélectionnée).",
    increased: "Aucune augmentation facultative possible.",
    icon: "👓",
    tip: "Les appareils auditifs coûteux ou les lunettes de marque peuvent être difficiles à remplacer après un accident. "
  },
  // GROUP: Benefits That Remain Optional
  {
    id: 'opt-dependant-care',
    group: "Indemnités d’accident qui demeurent facultatives",
    title: "Frais pour garde de personne à charge",
    summary: "Aide supplémentaire pour les soins aux personnes à charge si l’assuré a un emploi au moment de l’accident.",
    mandatory: "Ne fait pas partie des indemnités de base.",
    increased: "Couvre jusqu’à 75 $ par semaine pour la première personne à charge et 25 $ par semaine pour chaque personne à charge supplémentaire, jusqu’à concurrence de 150 $ par semaine.",
    icon: "👶",
    tip: "Il s’agit d’une prestation spécialement conçue pour permettre aux parents qui travaillent de continuer à faire garder leurs enfants sans interruption."
  },
  {
    id: 'opt-indexation',
    group: "Indemnités d’accident qui demeurent facultatives",
    title: "Couverture d’indexation",
    summary: "Ajustement annuel des prestations et des montants maximaux en fonction de l’inflation.",
    mandatory: "Ne fait pas partie des indemnités de base.",
    increased: "Ajustement annuel selon l’indice des prix à la consommation.",
    icon: "📈",
    tip: "Extrêmement utile si une blessure entraîne une invalidité de longue durée, car elle protège la valeur des prestations pendant de nombreuses années."
  }
];

/**
 * Creates the HTML for a single coverage card accordion.
 */
function createCoverageCard(coverage) {
  const isMandatoryGroup = coverage.group.includes("obligatoires");
  const isNowOptionalGroup = coverage.group.includes("maintenant facultatives");
  const isStillOptionalGroup = coverage.group.includes("demeurent facultatives");
  const hasOptionalIncrease = coverage.increased && !coverage.increased.toLowerCase().includes("aucune augmentation facultative");

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
                <i data-lucide="shield-check" class="w-[10px] h-[10px] mr-1"></i> Obligatoires
              </span>
            ` : ''}
            ${isNowOptionalGroup ? `
              <span class="px-2 py-0.5 bg-[#007db3] text-white text-[10px] font-bold uppercase rounded flex items-center">
                <i data-lucide="shield-alert" class="w-[10px] h-[10px] mr-1"></i> Maintenant facultatives
              </span>
            ` : ''}
            ${isStillOptionalGroup ? `
              <span class="px-2 py-0.5 bg-[#FF8C11] text-white text-[10px] font-bold uppercase rounded flex items-center">
                <i data-lucide="shield-alert" class="w-[10px] h-[10px] mr-1"></i> Demeurent facultatives
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
              <h4 class="text-[10px] font-black text-[#373737]/60 uppercase tracking-widest mb-3">Couverture de base</h4>
              <p class="text-[#003359] text-sm leading-relaxed font-medium">${coverage.mandatory}</p>
            </div>
            
            <div class="p-5 rounded-lg border ${hasOptionalIncrease || (!isMandatoryGroup && !isNowOptionalGroup) ? 'bg-[#FF8C11]/5 border-[#FF8C11]/20 shadow-sm' : 'bg-gray-50 border-gray-100 opacity-60'}">
              <h4 class="text-[10px] font-black uppercase tracking-widest mb-3 ${hasOptionalIncrease || (!isMandatoryGroup && !isNowOptionalGroup) ? 'text-[#FF8C11]' : 'text-gray-400'}">
                Options offertes
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
                <span class="font-black text-[#007db3] mr-1 uppercase text-[10px] tracking-wider">Conseil aux courtiers :</span> ${coverage.tip}
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
