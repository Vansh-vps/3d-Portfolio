
export interface SpecimenContent {
  general: {
    title: string
    subtitle: string
    studio: string
    year: string
    specimenWord: string
    scrollCue: string
  }

  cover: {
    badgeTop: string
    badgeBottom: string
  }

  theEye: {
    volPrefix: string
    headerCenterLine1: string
    headerCenterLine2: string
    headerCenterLine3: string
    headerRightLine3: string
    metaSubtitle: string
    metaTypeDesignPrefix: string
    metaDragonPrefix: string
    metaVolume: string
  }

  glyphSet: {
    uppercase: string
    aToZ: string
    alternates: string
    ink: string
    weight: string
  }

  weights: {
    fourWeights: string
    oneSkeleton: string
    regular: string
    outline: string
  }

  styles: {
    header: string
    columnAlternate: string
    columnUppercase: string
    sampleText: string
  }

  alternates: {
    altLabel: string
    regLabel: string
    titleAlt: string
    titleReg: string
    stylisticSet: string
    specimenCharacters: string
  }

  liquid: {
    line1: string
    line2: string
    line3: string
  }

  demo: {
    footerText: string
  }
}

export const SPECIMEN_CONTENT: SpecimenContent = {
  general: {
    title: "VANSH",
    subtitle: "PRATAP",
    studio: "BUILDVORA",
    year: "2026",
    specimenWord: "FORGE",
    scrollCue: "SCROLL TO EXPLORE",
  },

  cover: {
    badgeTop: "CREATOR",
    badgeBottom: "DEV - DESIGN - ROBOTICS",
  },

  theEye: {
    volPrefix: "DEV. 01 / ",
    headerCenterLine1: "WEB AND GAME DEV - GRAPHIC DESIGNER - MECHATRONICS AND SYSTEMS",
    headerCenterLine2: "INTERNATIONAL STUDENT AMBASSADOR AT CODEAVOUR 6.0 - HACKATHON ORGANIZER",
    headerCenterLine3: "BUILDING HARDWARE AND DIGITAL EXPERIENCES WITH HACK CLUB AND BUILDVORA.",
    headerRightLine3: "VANSH PRATAP",
    metaSubtitle: "DEV - GRAPHIC DESIGN - MECHATRONICS - HARDWARE",
    metaTypeDesignPrefix: "COMMUNITIES - ",
    metaDragonPrefix: "FOUNDER AT - ",
    metaVolume: "PORTFOLIO - VOL. 01",
  },

  glyphSet: {
    uppercase: "TECH STACK",
    aToZ: "CORE SKILLS",
    alternates: "SYSTEMS",
    ink: "CODE",
    weight: "LOGIC",
  },

  weights: {
    fourWeights: "FULL STACK",
    oneSkeleton: "ONE BUILDER",
    regular: "SOFTWARE",
    outline: "HARDWARE",
  },

  styles: {
    header: "ENGINEERING - GAME DEV - GRAPHIC DESIGN",
    columnAlternate: "HARDWARE",
    columnUppercase: "SOFTWARE",
    sampleText: "DEV:2026",
  },

  alternates: {
    altLabel: "GAME",
    regLabel: "WEB",
    titleAlt: "MECHATRONICS AND ROBOTICS",
    titleReg: "CREATIVE COMPUTING",
    stylisticSet: "HACKATHONS",
    specimenCharacters: "DEVBUILD",
  },

  liquid: {
    line1: "BUILDVORA",
    line2: "CODEAVOUR 6.0",
    line3: "AMBASSADOR",
  },

  demo: {
    footerText: "VANSH PRATAP — WEB & GAME DEVELOPER | GRAPHIC DESIGNER | MECHATRONICS | CODEAVOUR 6.0 INTL AMBASSADOR | HACK CLUB & BUILDVORA | EMAIL: VANSHPRATAP2323@GMAIL.COM",
  },
}

export default SPECIMEN_CONTENT
