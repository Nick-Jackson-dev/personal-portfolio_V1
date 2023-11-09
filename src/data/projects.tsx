//screenshots
import { reactIcon } from "../assets/skillIcons"
import testProject1 from "../assets/projects/test-project/test-app_1.png"
import testProject2 from "../assets/projects/test-project/test-app_2.png"
import testProject3 from "../assets/projects/test-project/test-app_3.png"
import {
  elabTrackerNoficationPage,
  elabTrackerBillingControl,
  elabTrackerCompanySettings,
  elabTrackerDocumentStorage,
  elabTrackerEquipmentTracker,
  elabTrackerMessaging,
  documentStorageRootFolder,
  documentStorageSubfolder,
  documentStorageAddingDocumentToSubfolder,
  documentStorageMoveDocument,
  messagingDashboard,
  messagingMessage,
  messagingMobile,
  messagingMultiParticipants,
  messagingCreatingMessage,
  constructionQCOfficeDashboard,
  constructionQCProjectDashboard,
  constructionQCAddingSpecs,
  constructionQCScheduling,
  constructionQCReportingAsphalt,
  coonstructionQCMultiOfficeUser,
  matchThreeHome,
  matchThreeTimeTrial,
  matchThreeSpecialLevel,
  matchThreeAbility,
  matchThreeWinScreen,
} from "../assets/projects/project-screenshots"
import { ReactNode } from "react"

type Skill =
  | "HTML"
  | "CSS"
  | "React"
  | "Vue"
  | "Bootstrap"
  | "JS"
  | "TS"
  | "Firebase"
  | "Git"
  | "Github"
  | "Vite"
  | "All"

const allSkills: Skill[] = [
  "HTML",
  "CSS",
  "React",
  "Vue",
  "Bootstrap",
  "JS",
  "TS",
  "Firebase",
  "Git",
  "Github",
]

enum projectIds {
  eLabTracker = "0",
  DocumentStorage = "1",
  MessagingApp = "2",
}

interface IProject {
  name: string
  id: string
  skills: Skill[]
  shortDescription: string[]
  description: ReactNode[]
  thumbnail: { url: string; alt: string }
  screenshots: { url: string; alt: string }[]
  githubLink?: string
  liveLink?: string
}

const projects: IProject[] = [
  {
    name: "Production Level Laboratory Tracking Service",
    id: projectIds.eLabTracker,
    skills: ["CSS", "JS", "React", "Bootstrap", "Firebase", "Git", "Github"],
    shortDescription: [
      "Web application intended for businesses with a laboratory requiring accreditation. It enables tracking of equipment, technician compentancy evaluations and certifications, document storage and revision history, and inter-office communication with messaging. User permissions are controllable by the lab system admin.",
    ],
    description: [
      <p>
        This is a production-level web application intended for clients who are
        businesses with a laboratory requiring a third-party or industry
        accreditation. It enables tracking of equipment location, custody,
        calibration, and maintenance; technician compentancy evaluations and
        certifications; document storage and revision history; and inter-office
        communication with messaging. User roles are assignable within a
        laboratory which control permissions of each user.
      </p>,
      <p>
        There are four (4) default tiers of service offered to clients. The
        usage limits of these tiers are controlled on the backend. Custom
        service levels are possible to implement on the backend for certain
        clients. Clients information is backed up daily and retained for up to
        90 days.
      </p>,
      <p>
        The project involves a development branch as well as a full development
        environment to protect current client data stored within the cloud.
      </p>,
      <p>
        This project was created out of a feeling of necessity at my current
        job. We had no way of actively tracking the information we were required
        to track nor the access we were required to provide to our technicians.
        This service will ideally transform the lab I currently work in as well
        as others around the country.
      </p>,
      <p>
        If you visit the live link, please feel free to set up a sandbox account
        to test it out or set up a demo. Many of the react projects I have
        created and featured in my portfolio are from this main project and I
        would love to demonstrate them for anyone who is interested.
      </p>,
      <p>
        The project uses Firebase Firestore, Storage, Authentication, and
        Hosting. Stripe is enabled for payment. The ReactJS is the library used
        on teh front end and routing is handled withReact Router 6.
      </p>,
    ],
    thumbnail: {
      url: elabTrackerEquipmentTracker,
      alt: "Thumbnail screenshot for the Production Level Laboratory Tracking Service Project",
    },
    screenshots: [
      {
        url: elabTrackerEquipmentTracker,
        alt: "Screenshot thumbnail of e-lab Tracker project",
      },
      {
        url: elabTrackerDocumentStorage,
        alt: "Screenshot of e-lab Tracker project - equipment tracking feature",
      },
      {
        url: elabTrackerNoficationPage,
        alt: "Screenshot of e-lab Tracker project - notifications page user dashboard",
      },
      {
        url: elabTrackerBillingControl,
        alt: "Screenshot of e-lab Tracker project - control of billed units",
      },
      {
        url: elabTrackerCompanySettings,
        alt: "Screenshot of e-lab Tracker project - company settings control page",
      },
      {
        url: elabTrackerMessaging,
        alt: "Screenshot of e-lab Tracker project - messaging",
      },
    ],
    githubLink: "https://github.com/Nick-Jackson-dev/e-lab-tracker",
    liveLink: "https://elabtracker.com",
  },
  {
    name: "Document Storage Web App",
    id: projectIds.DocumentStorage,
    skills: ["JS", "React", "Firebase", "Git", "Github"],
    shortDescription: [
      "Create directories to store documents very similar to sharepoint.",
      "Additionally, offers editing option that allows overwriting of a document. When overwriting, the originals are stored and still accessible from UI",
    ],
    description: [
      <p>
        This project uses Firebase Version 9 Firestore and Storage to store
        information about a user-defined folder system and the documents within.{" "}
      </p>,
      <p>
        The User Interface was made with React using create-react-app. The
        project also uses the react-router version 6. The user can navigate
        through a directory system; create new subdirectories, rename them, and
        delete them; files can be uploaded, deleted, downloaded, or moved into
        different subdirectories.
      </p>,
      <p>
        This project was made as a solution for document storage in one of my
        attempts (active attempts) at a production website; a B2B system which
        tracks multiple things including document history (
        <a href={`./${projectIds.eLabTracker}`}>
          this project, eLab Tracker, is also featured in this portfolio
        </a>
        ). Though I am sure tutorials for similar applications are out there, no
        tutorials were used in the design or development of this proejct. What
        would set this project apart from such tutorials would be the
        persistence of previous files as revisions are made.
      </p>,
      <p>
        I plan to improve upon this project by allowing click and drag to move
        documents between folders and also to allow dropping files in order to
        upload them. Also to have the ability to preview PDF files rather than
        forcing a download in order to view them.
      </p>,
    ],
    thumbnail: {
      url: documentStorageRootFolder,
      alt: "Thumbnail screenshot for the Document Storage Project",
    },
    screenshots: [
      {
        url: documentStorageRootFolder,
        alt: "Screenshot of the Document Storage Project - view from root folder",
      },
      {
        url: documentStorageSubfolder,
        alt: "Screenshot of the Document Storage Project - view of a subfolder",
      },
      {
        url: documentStorageAddingDocumentToSubfolder,
        alt: "Screenshot of the Document Storage Project - adding a document to a subfolder",
      },
      {
        url: documentStorageMoveDocument,
        alt: "Screenshot of the Document Storage Project - moving a document to a different folder",
      },
    ],
    githubLink:
      "https://github.com/Nick-Jackson-dev/file-storage-reactjs-project",
  },
  {
    name: "Messaging App - Teams Clone",
    id: "2",
    skills: ["CSS", "JS", "React", "Vite", "Git", "Github"],
    shortDescription: [
      "A messaging app that mimics teams messaging functionality and layout.",
      "Messages can be sent between 2 users, and between groups of users.",
      'This is a development stage project with a json-server "backend". Characters can be created within the ui and and switched to to mimic authenticated user views.',
    ],
    description: [
      <p>
        This messaging mimics the general layout and basic functionalities of
        Microsoft Teams messaging between users and groups of users.
      </p>,
      <p>
        This project is development level and works off of json-server for the
        "back-end".
      </p>,
      <p>
        The UI allows creation of characters which mimic users, the client can
        switch between characters to get the experience of different users.
        Messages can be created for communication between different users or
        between groups of users. The layout and design are dynamic for monitor
        size and mobile sized viewports. All layouts and styles are applied
        through CSS, no opensource libraries for styles on this project.
      </p>,
      <p>
        While there are likely tutorials out there for similar projects, no
        tutorials were used directly to create this project. This project
        stemmed from a messaging feature in my production-level project eLab
        Tracker (<a href={`./${projectIds.eLabTracker}`}>see more</a>), however
        group messaging was added for this project as well as a new layout and
        design.
      </p>,
      <p>
        I do not currently have any plans to improve this project. However, if I
        had to improve it, I would move it to a proper backend and att actual
        user authenitcation and provide sign in. Since there are countless apps
        which provide messaging services, I see no need. Rather, this is a
        feature that I can easily plug into any ventures of my own that may
        require messaging.
      </p>,
      <p>
        There are many potential plans for improvements of this app including
        allowing certain user rights to be more controllable by the client.
        Adding the ability to create an org chart. Also to enable clients to
        create custom web forms to store their equipment and compentency data
        directly with the eLab Tracker rather than only allowing an option for
        file upload to store that data.
      </p>,
    ],
    thumbnail: {
      url: messagingDashboard,
      alt: "Thumbnail screenshot for the Messaging App",
    },
    screenshots: [
      {
        url: messagingDashboard,
        alt: "Screenshot for the Messaging App - User Dashboard",
      },
      {
        url: messagingMessage,
        alt: "Screenshot for the Messaging App - looking at a message UI",
      },
      {
        url: messagingMobile,
        alt: "Screenshot for the Messaging App user dashboard from a mobile screen size",
      },
      {
        url: messagingMultiParticipants,
        alt: "Screenshot for the Messaging App - looking at a group message",
      },
      {
        url: messagingCreatingMessage,
        alt: "Screenshot for the Messaging App - creating a message",
      },
    ],
    githubLink:
      "https://github.com/Nick-Jackson-dev/reactJS-messagingApp-jsonServer",
  },
  {
    name: "Construction Quality Control Reporting App",
    id: "3",
    skills: ["CSS", "JS", "Vue", "Firebase", "Git", "Github"],
    shortDescription: [
      "Not unlike the eLab Tracker project above, this was a web app I was making to make my work in construction QA/QC better/easier. This is a project that would enable client companies to register projects, schedule work orders, generate reports, and store project specifications.",
    ],
    description: [
      <p>
        I was working to make this project a production-level web application
        that would allow client companies (designed for construction Quality
        Control Labs) to register projects, schedule work orders, generate
        reports, and store project specificaitons. I was making this for my own
        workplace, but when I informed them of my efforts they told me that it
        would be handled by our own IT. They didn't hire me on but they let me
        be the business representative during the development.
      </p>,
      <p>
        This website used Firebase Firestore, Storage, Authentication, and
        Hosting. The front end was created with VueJS. This was years ago, and
        in revisiting, I recognize that the UI is not great; I would re-work
        that if I were to pick this one back up.
      </p>,
      <p>
        After taking a Udemy course for Vue, I was convinced it was the best
        Framework, I think I might still be convinced of that. But, as you can
        likely tell from my other projects, I have since switched focus to React
        because it is more marketable. I do plan to go back to Vue one day if
        not jsut to try it again after experiencing React and Typescript.
      </p>,
      <p>
        Not all of the planned functionality for this website was developed by
        the time I abandoned it. I don't think I will revisit this one either.
        But currently clients can be added, Users can be signed up.
        Authenticated Users can be assigned to multiple clients (offices) that
        may be multi-office or subcontracted companies. Specifications can be
        defined at an office level. Projects can be registered to an office.
        Specifications can be imported to a project from the office level or
        defined at the project level. Work can be assigned and scheduled for a
        project and results can be reported by the assisnged user. Users can see
        specifications while reporting as well.
      </p>,
      <p>
        Additional plans, at the time of development included more forms to be
        built in to the system, for their to be client-defined forms for
        reporting. as well as client defined specifications. For multiple
        authors to be added to a report. To generate reports/deliverables based
        on data collected. And much more.
      </p>,
      <p>
        Like I mentioned above, the UI is ugly, but I do believe the
        non-relational database structure is there for the most part. There is a
        live project link associated with the project,. If you want to explore
        use "nick@test.com" with password "test1234"
      </p>,
    ],
    thumbnail: {
      url: constructionQCReportingAsphalt,
      alt: "Thumbnail screenshot for the Construction Quality Control Reporting Project",
    },
    screenshots: [
      {
        url: constructionQCOfficeDashboard,
        alt: "Screenshot for the Construction Quality Control Reporting Project - The office Dashboard",
      },
      {
        url: constructionQCProjectDashboard,
        alt: "Screenshot for the Construction Quality Control Reporting Project - A Project Dashboard",
      },
      {
        url: constructionQCAddingSpecs,
        alt: "Screenshot for the Construction Quality Control Reporting Project - Adding a set of specifications to a project",
      },
      {
        url: constructionQCScheduling,
        alt: "Screenshot for the Construction Quality Control Reporting Project - Scheduling Work on a project",
      },
      {
        url: constructionQCReportingAsphalt,
        alt: "Screenshot for the Construction Quality Control Reporting Project - Reporting asphalt testing results",
      },
      {
        url: coonstructionQCMultiOfficeUser,
        alt: "Screenshot for the Construction Quality Control Reporting Project - Showing that Users can access multiple offices and their projects.",
      },
    ],
    githubLink:
      "https://github.com/Nick-Jackson-dev/construction-qc-mobile/tree/master",
    liveLink: "https://ethel-test.web.app/signin",
  },

  {
    name: "Match 3 Game - Space Y: Rogue",
    id: "4",
    skills: ["HTML", "CSS", "JS"],
    shortDescription: [
      "A match 3 game, not unlike Bejewelled, made with HTML and Javascript. It is built using a game engine called PowerupJS which I coded and added to from the book Creating Javascript Games by Arjan Egges.",
      "There are 3 different types of levels playable: basic, time trial, and special which has bombs, line breakers, and obstacles.",
    ],
    description: [
      <p>
        This match 3 game allows you to swap tiles to make matches of 3 or more
        symbols. Making special shapes like T's or L's, or matching 4 or 5
        instead of 3 gives the player special tiles to use just like in
        bejeweled.
      </p>,
      <p>
        There is a menu that allows you to select the type of level you want to
        play. There are 3 types of levels:
      </p>,
      <ul>
        <li>Basic - nothing fancy just rack up a score.</li>
        <li>
          Time Trial - a bar representing a timer is draining, make matches to
          keep it full.
        </li>
        <li>
          Special - obstacles like those in candy crush are present - knock rust
          off of pieces before you can match with them for example.
        </li>
      </ul>,
      <p>
        I made this in sometime around 2018 and 2019 after my first deep dive
        into Javascript. I had a few text books. One of which -{" "}
        <i>Creating Javascript Games by Arjan Egges</i> - introduced a
        Javascript game engine the author called PowerupJS which I altered and
        added to in order to create this game.
      </p>,
      <p>
        This was originally part of a larger effort of mine to make a full
        fledged match 3 Rogue-like game. I have written lore, designed worlds
        and written multiple versions of the story which would be randomly
        generated. My focus shifted and that website is down. You can still read
        some of the longer-form lore on kindle{" "}
        <a
          href="https://www.amazon.com/s?k=Space+Y%3A+Lore+Nick+Jackson&i=digital-text&crid=35BJ6HB8Z356D&sprefix=space+y+lore+nick+jackson%2Cdigital-text%2C116&ref=nb_sb_noss"
          target="_blank"
        >
          from Amazon
        </a>{" "}
        (please forgive the cover art - was done on the cheap).
      </p>,
    ],
    thumbnail: {
      url: matchThreeHome,
      alt: "Thumbnail screenshot for the Match 3 Game Project",
    },
    screenshots: [
      {
        url: matchThreeHome,
        alt: "Screenshot for the Match 3 Game Project - the home screen to select a level type",
      },
      {
        url: matchThreeTimeTrial,
        alt: "Screenshot for the Match 3 Game Project - a normal level, time trial level",
      },
      {
        url: matchThreeSpecialLevel,
        alt: "Screenshot for the Match 3 Game Project - a special level with power ups and obstacles",
      },
      {
        url: matchThreeAbility,
        alt: "Screenshot for the Match 3 Game Project - Activating  a special ability that targets all of one tile type",
      },
      {
        url: matchThreeWinScreen,
        alt: "Screenshot for the Match 3 Game Project - The win screen if you beat a level",
      },
    ],
    githubLink: "https://github.com/Nick-Jackson-dev/Match3BasicGrid",
  },
]

export { projects, allSkills }

export type { Skill, IProject }
