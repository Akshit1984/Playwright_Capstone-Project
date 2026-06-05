// @ts-check
import { BasePage } from './base.page.js';

export class CustomerSupportPage extends BasePage {
  async verifyINFO001ContactUsPageOpens() {
    await this.checkPage({ route: '/contactus', title: /Contact Us/, heading: 'Contact Us' });
  }

  async verifyINFO002ContactUsPageHasFullNameField() {
    await this.checkPage({ route: '/contactus', visible: ['#FullName'] });
  }

  async verifyINFO003ContactUsPageHasEmailField() {
    await this.checkPage({ route: '/contactus', visible: ['#Email'] });
  }

  async verifyINFO004ContactUsPageHasEnquiryTextarea() {
    await this.checkPage({ route: '/contactus', visible: ['#Enquiry'] });
  }

  async verifyINFO005ContactUsPageHasSubmitButton() {
    await this.checkPage({ route: '/contactus', visible: ['.contact-us-button'] });
  }

  async verifyINFO006SitemapPageOpens() {
    await this.checkPage({ route: '/sitemap', title: /Sitemap/, heading: 'Sitemap' });
  }

  async verifyINFO007PrivacyNoticePageOpens() {
    await this.checkPage({ route: '/privacy-policy', title: /Privacy/, heading: 'Privacy policy' });
  }

  async verifyINFO008ConditionsOfUsePageOpens() {
    await this.checkPage({ route: '/conditions-of-use', title: /Conditions/, heading: 'Conditions of use' });
  }

  async verifyINFO009AboutUsPageOpens() {
    await this.checkPage({ route: '/about-us', title: /About Us/, heading: 'About Us' });
  }

  async verifyINFO010NewsPageOpens() {
    await this.checkPage({ route: '/news', title: /News Archive/, heading: 'News' });
  }

  async verifyINFO011BlogPageOpens() {
    await this.checkPage({ route: '/blog', title: /Blog/, heading: 'Blog' });
  }

  async verifyINFO012FooterInformationLinksAreVisible() {
    await this.checkPage({ route: '/', visible: ['a[href="/sitemap"]', 'a[href="/privacy-policy"]'] });
  }

  async verifyINFO013FooterCustomerServiceLinksAreVisible() {
    await this.checkPage({ route: '/', visible: ['a[href="/contactus"]', 'a[href="/shipping-returns"]'] });
  }

  async verifyINFO014NewsletterSubscriptionControlsAreVisible() {
    await this.checkPage({ route: '/', visible: ['#newsletter-email', '#newsletter-subscribe-button'] });
  }

  async verifyINFO015FooterSocialLinksAreVisible() {
    await this.checkPage({ route: '/', visible: ['.facebook a', '.twitter a', '.youtube a'] });
  }
}
