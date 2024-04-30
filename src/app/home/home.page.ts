import { Component } from "@angular/core";
import { HlmButtonDirective } from "@spartan-ng/ui-button-helm";
import { HlmIconComponent } from "@spartan-ng/ui-icon-helm";
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmBadgeDirective } from '@spartan-ng/ui-badge-helm';
import { provideIcons } from "@ng-icons/core";
import { lucideGlobe, lucideGithub } from "@ng-icons/lucide";

@Component({
  standalone: true,
  templateUrl: './home.page.html',
  providers: [provideIcons({ lucideGlobe, lucideGithub })],
  imports: [
    HlmButtonDirective,
    HlmIconComponent,
    HlmCardContentDirective,
    HlmCardDescriptionDirective,
    HlmCardDirective,
    HlmCardFooterDirective,
    HlmCardHeaderDirective,
    HlmCardTitleDirective,
    HlmBadgeDirective,
  ]
})
export class HomePage {
  projects = [
    {
      name: "<i>Judge",
      description: "This app is like a helpful tool for professors teaching problem-solving subjects. It allows them to review and assess students' algorithms, like what LeetCode does. For this project, my friends and I collaborated on building a web app. I took care of the frontend and deployment such as creating docker-compose, reverse proxy. This project is also aligned with our DATABASE SYSTEM CONCEPTS course.",
      stacks: ['Next.js', 'Tailwind', 'Material UI', 'Express.js', 'MySQL'],
      links: [
        {
          icon: 'lucideGlobe',
          url: "https://ijudge.it.kmitl.ac.th",
        },
      ],
    },
    {
      name: "THE PRO TUTOR - Website for tutoring school",
      description: "I got hired as a developer for the creation of an E-Learning website. I utilized SvelteKit and implemented Byteark for video storage and CDN functionalities, meeting project requirements effectively. This website is currently in betaand it planned to official release in January 2024",
      stacks: ['SvelteKit', 'Skeleton (UI)', 'Tailwind', 'Byteark CDN', 'PostgreSQL'],
      links: [
        {
          icon: 'lucideGlobe',
          url: "https://theprotutor.net",
        },
      ],
    },
    {
      name: "แล้วแต่ห้อง - Room Reservation Application",
      description: "I made an app for booking rooms in the School of IT building. You can set the hours when the rooms are available and check if a room is currently reserved or not. I used Java with Swing and MySQL to create this app as part of my OBJECT-ORIENTED PROGRAMMING course, along with six of my classmates. My main job was to create an API class to make it easy for the front end to communicate with the database.",
      stacks: ['Java', 'Swing', 'MySQL'],
      links: [
        {
          icon: 'lucideGithub',
          url: "https://github.com/Krit789/room-reservation-app",
        },
      ],
    }
  ]
}