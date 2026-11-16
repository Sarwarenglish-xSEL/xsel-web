import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Privacy Policy | Sarwar English Lab",
  description:
    "Privacy Policy for xSEL – Sarwar English Lab. How we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#FFFCF6]">
        <div className="mx-auto max-w-3xl px-4 pt-24 pb-16 sm:px-5 sm:pt-28 sm:pb-20 md:px-6 lg:px-8">
          <header className="border-b border-ink/10 pb-6">
            <p className="text-[11px] font-semibold tracking-[0.16em] text-[#1d6b56] uppercase">
              xSEL — Sarwar English Lab
            </p>
            <h1 className="font-display mt-2 text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.04em] text-heading">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-muted">Last updated: 17 August, 2026</p>
            <Link
              href="/"
              className="mt-4 inline-flex text-sm font-semibold text-[#152F29] transition hover:text-[#1d6b56]"
            >
              ← Back to home
            </Link>
          </header>

          <article className="privacy-policy prose-policy mt-8 space-y-4 text-[15px] leading-[1.65] text-[#2b2b2b]">
            <p>
              This Privacy Policy describes our policies and procedures on the collection, use and
              disclosure of your information when you use the service. By using the service, you agree
              to the collection and use of information in accordance with this Privacy Policy. The use
              of the Website/application is subject to &quot;xSEL – Sarwar English Lab&quot; Privacy
              Policy. By accessing and using the Website/application and availing the Services, the
              User consents to the collection, storage, and use of the personal data that the User
              provides (including any changes thereto as provided by You) for any of the Services and
              expressly gives authorization to process such personal data.
            </p>

            <p>
              This Privacy Policy (hereinafter, the &quot;Policy&quot;) applies to the use of the
              website/application and covers any information about users of our products and services
              (hereinafter, &quot;Services&quot;) that may include personal data as defined by
              applicable laws and regulations (hereinafter, &quot;Personal Information&quot;), which
              &quot;xSEL – Sarwar English Lab&quot; may obtain when you use the &quot;xSEL – Sarwar
              English Lab&quot; website or application. The Policy is intended to inform you about how
              we collect and use information so you can make an informed decision about using the
              Services. Please read it carefully before using the Services or submitting any
              information to us. If you do not agree to any part of this Policy, then you should stop
              accessing the Services.
            </p>

            <p>
              This Website/application may contain links to services maintained by others. This Policy
              does not reflect the privacy practices of those services.
            </p>

            <h2>Interpretation and Definitions</h2>

            <h3>Interpretation</h3>
            <p>
              The words of which the initial letter is capitalized have meanings defined under the
              following conditions. The following definitions shall have the same meaning regardless of
              whether they appear in singular or in plural.
            </p>

            <h3>Definitions</h3>
            <p>For the purposes of this Privacy Policy:</p>
            <ul>
              <li>
                <strong>Account</strong> means a unique account created for You to access our Service
                or parts of our Service.
              </li>
              <li>
                <strong>Application</strong> refers to xSEL App, the software program provided by the
                Company.
              </li>
              <li>
                <strong>Company</strong> (referred to as either &quot;the Company&quot;,
                &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to xSEL –
                Sarwar English Lab.
              </li>
              <li>
                <strong>Cookies</strong> are small files that are placed on Your computer, mobile
                device or any other device by a website, containing the details of Your browsing
                history on that website among its many uses.
              </li>
              <li>
                <strong>Country</strong> refers to Pakistan
              </li>
              <li>
                <strong>Device</strong> means any device that can access the Service such as a
                computer, a cellphone or a digital tablet.
              </li>
              <li>
                <strong>Personal Data</strong> is any information that relates to an identified or
                identifiable individual.
              </li>
              <li>
                <strong>Service</strong> refers to the Application or the Website or both.
              </li>
              <li>
                <strong>Service Provider</strong> means any natural or legal person who processes the
                data on behalf of the Company. It refers to third-party companies or individuals
                employed by the Company to facilitate the Service, to provide the Service on behalf of
                the Company, to perform services related to the Service or to assist the Company in
                analyzing how the Service is used.
              </li>
              <li>
                <strong>Usage Data</strong> refers to data collected automatically, either generated by
                the use of the Service or from the Service infrastructure itself (for example, the
                duration of a page visit).
              </li>
              <li>
                <strong>Website</strong> refers to &quot;xSEL – Sarwar English Lab&quot;, accessible
                from{" "}
                <a href="https://sarwarenglish.com" className="font-medium text-[#1d6b56] underline-offset-2 hover:underline">
                  https://sarwarenglish.com
                </a>
              </li>
              <li>
                <strong>You</strong> means the individual accessing or using the Service, or the
                company, or other legal entity on behalf of which such individual is accessing or using
                the Service, as applicable.
              </li>
            </ul>

            <h2>Collecting and Using Your Personal Data</h2>

            <h3>Types of Data Collected</h3>
            <p>
              <strong>Personal Data</strong>
            </p>
            <p>
              While using Our Service, We may ask You to provide Us with certain personally
              identifiable information that can be used to contact or identify You. Personally
              identifiable information may include, but is not limited to:
            </p>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City, Country</li>
            </ul>

            <p>
              <strong>Usage Data</strong>
            </p>
            <p>Usage Data is collected automatically when using the Service.</p>
            <p>
              Usage Data may include information such as Your Device&apos;s Internet Protocol address,
              browser type, browser version, the pages of our Service that You visit, the time and date
              of Your visit, the time spent on those pages, unique device identifiers and other
              diagnostic data.
            </p>
            <p>
              When You access the Service by or through a mobile device, We may collect certain
              information automatically, including, but not limited to, the type of mobile device You
              use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use, unique device identifiers
              and other diagnostic data. We may also collect information that Your browser sends
              whenever You visit our Service through website or when You access the Service by or
              through a mobile device. If you do not allow access, the features of the &quot;xSEL –
              Sarwar English Lab&quot; Services will be limited or not available for use.
            </p>
            <p>
              By submitting the information on our website, you consent to the review of such
              information by our team members and by those who assist us in the provision of services
              to the users of our Website and application.
            </p>
            <p>
              If you choose to provide us with personal information, you consent to the transfer and
              storage of that information on our servers.
            </p>

            <h3>Tracking Technologies and Cookies</h3>
            <p>
              We use Cookies and similar tracking technologies to track the activity on Our Service and
              store certain information. Tracking technologies used are beacons, tags, and scripts to
              collect and track information and to improve and analyze Our Service. The technologies We
              use may include:
            </p>
            <ul>
              <li>
                <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your
                Device. You can instruct Your browser to refuse all Cookies or to indicate when a
                Cookie is being sent. However, if You do not accept Cookies, You may not be able to use
                some parts of our Service. Unless you have adjusted Your browser setting so that it
                will refuse Cookies, our Service may use Cookies.
              </li>
              <li>
                <strong>Web Beacons.</strong> Certain sections of our Service and our emails may
                contain small electronic files known as web beacons (also referred to as clear gifs,
                pixel tags, and single-pixel gifs) that permit the Company, for example, to count users
                who have visited those pages or opened an email and for other related website
                statistics (for example, recording the popularity of a certain section and verifying
                system and server integrity).
              </li>
            </ul>
            <p>
              Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies
              remain on Your personal computer or mobile device when You go offline, while Session
              Cookies are deleted as soon as You close Your web browser.
            </p>
            <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
            <ul>
              <li>
                <strong>Necessary / Essential Cookies:</strong> These Cookies are essential to provide
                You with services available through the Website and to enable You to use some of its
                features. They help to authenticate users and prevent fraudulent use of user accounts.
                Without these Cookies, the services that You have asked for cannot be provided, and We
                only use these Cookies to provide You with those services.
              </li>
              <li>
                <strong>Cookies Policy / Notice Acceptance Cookies:</strong> These Cookies identify if
                users have accepted the use of cookies on the Website.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> These Cookies allow us to remember choices You
                make when You use the Website, such as remembering your login details or language
                preference. The purpose of these Cookies is to provide You with a more personal
                experience and to avoid You having to re-enter your preferences every time You use the
                Website.
              </li>
            </ul>

            <h2>Use of Your Personal Data</h2>
            <p>The Company may use Personal Data for the following purposes:</p>
            <ul>
              <li>
                <strong>To provide and maintain our Service</strong>, including to monitor the usage of
                our Service.
              </li>
              <li>
                <strong>To manage Your Account:</strong> To manage Your registration as a user of the
                Service. The Personal Data You provide can give You access to different functionalities
                of the Service that are available to You as a registered user.
              </li>
              <li>
                <strong>For the performance of a contract:</strong> The development, compliance and
                undertaking of the purchase contract for the products, items or services You have
                purchased or of any other contract with Us through the Service.
              </li>
              <li>
                <strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or
                other equivalent forms of electronic communication, such as a mobile application&apos;s
                push notifications regarding updates or informative communications related to the
                functionalities, products or contracted services, including the security updates, when
                necessary or reasonable for their implementation.
              </li>
              <li>
                <strong>To provide You with news</strong>, special offers and general information about
                other goods, services and events which we offer that are similar to those that you have
                already purchased or enquired about unless You have opted not to receive such
                information.
              </li>
              <li>
                <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
              </li>
              <li>
                <strong>For business transfers:</strong> We may use Your information to evaluate or
                conduct a merger, divestiture, restructuring, reorganization, dissolution, or other
                sale or transfer of some or all of Our assets, whether as a going concern or as part of
                bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about
                our Service users is among the assets transferred.
              </li>
              <li>
                <strong>For other purposes:</strong> We may use Your information for other purposes,
                such as data analysis, identifying usage trends, determining the effectiveness of our
                promotional campaigns and to evaluate and improve our Service, products, services,
                marketing and your experience.
              </li>
            </ul>

            <p>We may share Your personal information in the following situations:</p>
            <ul>
              <li>
                <strong>With Service Providers:</strong> We may share Your personal information with
                Service Providers to, but not limited to, monitor and analyze the use of our Service.
                We may share anonymous data (such as your IP address or device id) with analytics
                companies including aggregated or anonymized information to analyze trends, administer
                the Services, improve customer service, diagnose problems with our servers, track user
                movement, and gather demographic information for aggregate use.
              </li>
              <li>
                <strong>For business transfers:</strong> We may share or transfer Your personal
                information in connection with, or during negotiations of, any merger, sale of Company
                assets, financing, or acquisition of all or a portion of Our business to another
                company.
              </li>
              <li>
                <strong>With business partners:</strong> We may share Your information with Our
                business partners to offer You certain products, services or promotions.
              </li>
              <li>
                <strong>With Your consent:</strong> We may disclose Your personal information for any
                other purpose with Your consent.
              </li>
            </ul>

            <h2>Retention of Your Personal Data</h2>
            <p>
              The Company will retain Your Personal Data only for as long as is necessary for the
              purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the
              extent necessary to comply with our legal obligations (for example, if we are required to
              retain your data to comply with applicable laws), resolve disputes, and enforce our legal
              agreements and policies.
            </p>
            <p>
              The Company will also retain Usage Data for internal analysis purposes. Usage Data is
              generally retained for a shorter period of time, except when this data is used to
              strengthen the security or to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </p>

            <h2>Transfer of Your Personal Data</h2>
            <p>
              Your information, including Personal Data, is processed at the Company&apos;s operating
              offices and in any other places where the parties involved in the processing are located.
              It means that this information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other governmental jurisdiction where
              the data protection laws may differ than those from Your jurisdiction.
            </p>
            <p>
              Your consent to this Privacy Policy followed by Your submission of such information
              represents Your agreement to that transfer.
            </p>
            <p>
              The Company will take all steps reasonably necessary to ensure that Your data is treated
              securely and in accordance with this Privacy Policy and no transfer of Your Personal Data
              will take place to an organization or a country unless there are adequate controls in
              place including the security of Your data and other personal information.
            </p>

            <h2>Delete Your Personal Data</h2>
            <p>
              You have the right to delete or request that We assist in deleting the Personal Data that
              We have collected about You.
            </p>
            <p>
              Our Service may give You the ability to delete certain information about You from within
              the Service.
            </p>
            <p>
              You may update, amend, or delete Your information at any time by signing in to Your
              Account, if you have one, and visiting the account settings section that allows you to
              manage Your personal information. You may also contact Us to request access to, correct,
              or delete any personal information that You have provided to Us.
            </p>
            <p>
              Please note, however, that We may need to retain certain information when we have a legal
              obligation or lawful basis to do so.
            </p>

            <h2>Disclosure of Your Personal Data</h2>
            <h3>Business Transactions</h3>
            <p>
              If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may
              be transferred. We will provide notice before Your Personal Data is transferred and
              becomes subject to a different Privacy Policy.
            </p>

            <h3>Law enforcement</h3>
            <p>
              Under certain circumstances, the Company may be required to disclose Your Personal Data
              if required to do so by law or in response to valid requests by public authorities (e.g.
              a court or a government agency).
            </p>

            <h3>Other legal requirements</h3>
            <p>
              The Company may disclose Your Personal Data in the good faith belief that such action is
              necessary to:
            </p>
            <ul>
              <li>Comply with a legal obligation</li>
              <li>Protect and defend the rights or property of the Company</li>
              <li>Prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>Protect the personal safety of Users of the Service or the public</li>
              <li>Protect against legal liability</li>
            </ul>

            <h2>Security of Your Personal Data</h2>
            <p>
              We take reasonable technical and organisational measures to protect your Personal Data
              against unauthorised access, disclosure, alteration, loss, or misuse. However, no method
              of transmission over the Internet or electronic storage is completely secure. While we
              use appropriate safeguards designed to protect your Personal Data, we cannot guarantee
              absolute security.
            </p>

            <h2>Lawful Use Only</h2>
            <p>
              User will not publish, upload, submit, or distribute any posted materials on the
              &quot;xSEL – Sarwar English Lab&quot; Website or application which are unlawful,
              deceptive, misleading, or abusive in any way, including but not limited to posted
              materials that are defamatory, blasphemous, libelous, obscene, threatening, indecent,
              invasive of privacy or publicity rights, hateful, or would constitute or encourage a
              criminal offense, violate the rights of any party, contain any corrupted data or
              malicious code that may impair or alter the appearance or functionality of &quot;xSEL –
              Sarwar English Lab&quot;, or give rise to liability or violate any local, state,
              federal, or international law or regulation.
            </p>
            <p>
              On certain sections of the &quot;xSEL – Sarwar English Lab&quot; Website/application,
              posted materials submitted for publication will be accompanied by User&apos;s name and
              shall not be submitted anonymously. User warrants that such posted materials will not
              misrepresent or obscure his or her identity or affiliation with any person or entity.
              Furthermore, User warrants that it will not, by any method or action, directly or through
              a third party seek to artificially enhance, degrade, or otherwise manipulate the
              recommendations or endorsements of any User, individual, or group on &quot;xSEL – Sarwar
              English Lab&quot; including User&apos;s own.
            </p>

            <h2>Your Rights</h2>
            <p>
              If you are concerned about your data, you have the right to request access to the
              personal data which we may hold or process about you. You have the right to require us to
              correct any inaccuracies in your data free of charge. At any stage, you also have the
              right to ask us to stop using your personal data for direct marketing purposes.
            </p>

            <h2>Children</h2>
            <p>
              Our Services are not directed to children under the age of 13, and we do not knowingly
              collect Personal Data from children under 13. If we become aware that a child under 13
              has provided us with Personal Data without appropriate parental or guardian consent, we
              will take steps to delete such information. If you are a parent or guardian and believe
              your child has provided us with Personal Data, please contact us.
            </p>

            <h2>Links to Other Websites</h2>
            <p>
              Our Service may contain links to other websites that are not operated by Us. If You click
              on a third party link, You will be directed to that third party&apos;s site. We strongly
              advise You to review the Privacy Policy of every site You visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies or
              practices of any third party sites or services.
            </p>

            <h2>Changes to this Privacy Policy</h2>
            <p>
              We may update Our Privacy Policy from time to time. We will notify You of any changes by
              posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let You know via email and/or a prominent notice on Our Service, prior to the
              change becoming effective and update the &quot;Last updated&quot; date at the top of this
              Privacy Policy.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, You can contact us:{" "}
              <a
                href="mailto:sarwarenglish.xsel@gmail.com"
                className="font-medium text-[#1d6b56] underline-offset-2 hover:underline"
              >
                sarwarenglish.xsel@gmail.com
              </a>
            </p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
