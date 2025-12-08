import { Component, inject } from '@angular/core';
import { ServicesGroup, BenefitsGroup } from './services-preview.models';
import { ScrollService } from '../../../../shared/services/scroll.service';

@Component({
  selector: 'app-services-preview',
  imports: [],
  templateUrl: './services-preview.component.html',
  styleUrl: './services-preview.component.scss',
})
export class ServicesPreviewComponent {
  scrollService = inject(ScrollService);

  availableServices: ServicesGroup[] = [
    {
      groupName: 'Business Owners & Executives',
      servicesList: [
        { serviceName: 'Individually customized carve-out benefit plans' },
        { serviceName: 'Free family legacy discussion' },
        { serviceName: 'Free estate planning consultation' },
        { serviceName: 'In-depth life insurance review' },
        { serviceName: 'In-depth income protection review' },
        { serviceName: 'Supplemental successful retirement strategies' },
        { serviceName: 'Key employee retention plans' },
        { serviceName: 'Business transition plans or business sale planning' },
      ],
    },
    {
      groupName: 'Management Team & Other Employees',
      servicesList: [
        { serviceName: 'In-depth income protection review' },
        { serviceName: 'In-depth life insurance review' },
        { serviceName: 'Free estate planning consultation' },
        {
          serviceName: 'Debt management and personal cash flow analysis',
          subText:
            "Gain more control of personal cash flow, pay less interest, and further empower your financial positioning without spending more money than you're currently spending",
        },
      ],
    },
  ];

  benefits: BenefitsGroup[] = [
    {
      ageGroup: "If you're under 50",
      benefitsList: [
        {
          benefitDescription:
            'Increase your money supply, eliminate debt, and pay less interest to others.',
        },
        {
          benefitDescription:
            'Enjoy more utility and control of your cash flow.',
        },
        {
          benefitDescription:
            'Ensure your income/cash flow is not interrupted by an accident or illness.',
        },
        {
          benefitDescription:
            'Be certain your life insurance is properly structured and adequate for your needs.',
        },
      ],
    },
    {
      ageGroup: "If you're over 50",
      benefitsList: [
        { benefitDescription: 'Maximize your retirement income.' },
        {
          benefitDescription:
            'Reduce the element of market risk and future taxes.',
        },
        {
          benefitDescription:
            'Address the devastating cost of long-term care exposure.',
        },
      ],
    },
    {
      ageGroup: 'All Ages',
      benefitsList: [
        {
          benefitDescription:
            'Create a coordinated, cost-efficient estate plan, family legacy, and/or charitable legacy.',
        },
      ],
      shared: true,
    },
  ];

  ngOnInit() {}
}
