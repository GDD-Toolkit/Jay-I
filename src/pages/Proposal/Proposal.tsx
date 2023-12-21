import { ThemeProvider } from "@emotion/react";
import { Box, Grid } from "@mui/material";
import React from "react";
import { theme } from "../../mui.ts";
import styles from "./Proposal.module.css";

interface ProposalProps {
  onBack: () => void /* Temporarily disabled because we want to bring the user back to the main page for now. Not sure if this is a feature we want to keep for this page */;
  onHome: () => void;
}

const Proposal: React.FC<ProposalProps> = ({ onHome }) => {
  return (
    <ThemeProvider theme={theme}>
      {/* Using scroll to to make scrolling back to top faster. Using anchor link would cause a lot of delay */}
      <button
        className={styles.jumpTopBtn}
        onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
      >
        Jump To Top
      </button>
      <Box
        sx={{
          width: "94%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container>
          <Grid item xs={8} id="top">
            <h1 className={styles.pageTitle}>
              DIGITAL AGRICULTURAL PLATFORM FOR AFGHAN FARMERS
            </h1>
            <p className={styles.authorName}>Jane Doe</p>
            <p className={styles.affiliation}>University of Maryland</p>
            <p className={styles.date}>November 1, 2023</p>
          </Grid>
          <Grid item xs={4}>
            <div className={styles.pageNavBtns}>
              <button
                className={styles.pageNavBtn}
                onClick={() =>
                  alert(
                    "This feature is not available at this time. Please manually print this proposal."
                  )
                }
              >
                Download As PDF
              </button>
              <button className={styles.pageNavBtn} onClick={onHome}>
                Edit From The Beginning
              </button>
            </div>
          </Grid>
          <Grid item xs={12}>
            <h1 className={styles.header}>Table of Contents</h1>
            <Grid container rowSpacing={5} columnSpacing={5}>
              <Grid item xs={12}>
                <div className={styles.navContainer}>
                  <button className={styles.navBtn} type="submit">
                    <a href="#abstract">1. Abstract</a>
                  </button>

                  <button className={styles.navBtn} type="submit">
                    <a href="#ethicality">2. Ethicality</a>
                  </button>

                  <button className={styles.navBtn} type="submit">
                    <a href="#desirability">3. Desirability</a>
                  </button>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className={styles.navContainer}>
                  <button className={styles.navBtn} type="submit">
                    <a href="#ecosystem">4. Eco-system</a>
                  </button>

                  <button className={styles.navBtn} type="submit">
                    <a href="#feasibility">5. Feasibility</a>
                  </button>

                  <button className={styles.navBtn} type="submit">
                    <a href="#viability">6. Viability</a>
                  </button>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <h2 className={styles.header} id="abstract">
            Abstract
          </h2>
          <p className={styles.filler}>
            The Digital Agriculture Platform for Ethical Development in
            Afghanistan represents a visionary initiative that transcends
            technological advancement to prioritize the principles of ethical
            development. Rooted in inclusivity, the platform is designed with
            cultural sensitivity, offering a user-friendly mobile application
            accessible even in areas with limited connectivity. By emphasizing
            education, the project seeks to empower Afghan farmers with
            knowledge and sustainable practices, promoting a sense of ownership
            and fostering environmentally friendly agricultural techniques. The
            ethical trade practices integrated into the online marketplace aim
            to eliminate intermediaries, ensuring fair compensation for farmers
            and enhancing transparency in market interactions.
            Community-building features prioritize collaboration, mutual
            support, and the exchange of experiences among farmers, contributing
            to social cohesion. With a commitment to privacy and data security,
            the project upholds the ethical responsibility to protect user
            information. Government collaboration aligns the platform with
            national development strategies, fostering a holistic approach to
            ethical development that addresses the diverse needs and aspirations
            of Afghan farmers, thereby contributing to a more resilient and
            empowered agricultural community.
          </p>

          <h2 className={styles.header} id="ethicality">
            Ethicality
          </h2>
          <div className={styles.container}>
            <h3 className={styles.subHeader}>Frame the Problem</h3>
          </div>
          <p className={styles.filler}>
            The core issue at stake is the systemic vulnerability of Afghan
            farmers due to limited access to information, exploitative market
            practices, and insufficient resources. This project aims to address
            the ethical concerns associated with traditional agricultural
            systems, such as lack of transparency in market transactions,
            limited educational resources, and unequal access to market
            opportunities, which often perpetuate socio-economic disparities.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Ethical Deliberation</h3>
          </div>
          <p className={styles.filler}>
            Various stakeholders are implicated by the project, including Afghan
            farmers, consumers, and the agricultural sector as a whole. By
            providing a digital platform, the project considers the ethical
            imperative of inclusivity, cultural sensitivity, and fair trade.
            Afghan farmers are empowered with knowledge, enabling them to make
            informed decisions, and the elimination of intermediaries in the
            marketplace ensures direct, fair transactions. The ethical
            dimensions extend to data privacy, with farmers maintaining control
            over their personal and financial information, contributing to a
            trustworthy and secure digital environment.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Societal Impact</h3>
          </div>
          <p className={styles.filler}>
            The project endeavors to bring about transformative change in the
            agricultural landscape of Afghanistan. It aims to empower farmers
            with knowledge, enabling them to adopt sustainable and
            environmentally friendly practices. The online marketplace, founded
            on ethical trade principles, seeks to disrupt exploitative market
            dynamics, ensuring fair compensation for farmers. Community-building
            features foster collaboration, strengthening the social fabric of
            farming communities. The broader societal impact lies in creating a
            more equitable and resilient agricultural sector, contributing to
            poverty reduction, sustainable development, and improved
            livelihoods.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Key Impact Indicators</h3>
          </div>
          <p className={styles.filler}>
            The project's success will be measured through key impact
            indicators, including increased agricultural productivity, enhanced
            income for farmers, and improved market access. Additionally,
            indicators such as the number of farmers adopting sustainable
            practices, the reduction of intermediaries in market transactions,
            and the growth of an active and collaborative farming community will
            be monitored. Data privacy compliance and the platform's alignment
            with national development strategies will serve as indicators of the
            project's ethical and responsible implementation, ensuring that it
            positively contributes to the well-being of Afghan farmers and
            society at large.
          </p>

          <h2 className={styles.header} id="desirability">
            Desirability
          </h2>
          <div className={styles.container}>
            <h3 className={styles.subHeader}>Identify the Opportunity</h3>
          </div>
          <p className={styles.filler}>
            The project capitalizes on the opportunity to address the critical
            needs and challenges faced by Afghan farmers, including limited
            access to information, market inefficiencies, and the absence of a
            platform for knowledge exchange. By creating a digital agriculture
            platform, the project seeks to revolutionize traditional farming
            practices, fostering a more sustainable and empowering environment.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Stakeholder Relations</h3>
          </div>
          <p className={styles.filler}>
            Potential partners include local agricultural cooperatives,
            non-governmental organizations (NGOs) focused on rural development,
            and government agricultural agencies. These stakeholders share a
            common interest in uplifting the agricultural sector, empowering
            farmers, and fostering sustainable practices. Collaborating with
            microfinance institutions can address financial accessibility for
            farmers, while partnerships with educational organizations can
            enhance the platform's training modules.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Value Proposition</h3>
          </div>
          <p className={styles.filler}>
            The project offers a multifaceted value proposition. For farmers, it
            provides a comprehensive platform for learning, direct market
            access, and community building. For local cooperatives and NGOs, the
            platform becomes a valuable tool for disseminating knowledge and
            supporting the economic well-being of farming communities.
            Government agencies benefit from a data-driven approach to
            agricultural development. The value proposition extends to consumers
            and businesses seeking ethically sourced agricultural products.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Outcomes</h3>
          </div>
          <p className={styles.filler}>
            The anticipated outcomes of the project include increased
            agricultural productivity, improved income for farmers, and the
            establishment of a transparent and fair agricultural marketplace.
            The project aims to foster a sense of community among farmers,
            creating a collaborative environment that contributes to
            knowledge-sharing and mutual support. Additionally, the platform's
            emphasis on sustainable practices is expected to lead to positive
            environmental outcomes. Ultimately, the project envisions a more
            resilient and prosperous agricultural sector in Afghanistan, with
            benefits extending to farmers, stakeholders, and the broader
            society.
          </p>

          <h2 className={styles.header} id="ecosystem">
            Ecosystem
          </h2>
          <p className={styles.filler}>
            The Digital Agriculture Platform for Afghan Farmers is a
            comprehensive initiative involving multiple stakeholders with
            distinct roles and contributions. At its core are Afghan farmers,
            the primary beneficiaries who engage with the platform for knowledge
            acquisition, marketplace participation, and community building.
            Local agricultural cooperatives, NGOs, and government agricultural
            agencies act as collaborative partners, imparting expertise,
            supporting training programs, and ensuring alignment with ethical
            and sustainable practices. Microfinance institutions contribute to
            financial inclusion, enabling farmers to access crucial resources.
            Consumers and businesses participate in the ethical marketplace,
            fostering fair trade and sustainable agricultural practices.
            Educational organizations play a vital role in developing
            educational content, supporting farmers in adopting sustainable
            practices, and contributing to the knowledge-sharing aspect of the
            platform. Moreover, the project extends its impact to the broader
            environmental ecosystem, promoting eco-friendly agricultural
            practices that contribute to biodiversity conservation and overall
            ecological health. The digital agriculture platform thus weaves
            together the collective efforts of diverse stakeholders, creating a
            transformative and sustainable model for agricultural development in
            Afghanistan.
          </p>

          <h2 className={styles.header} id="feasibility">
            Feasibility
          </h2>
          <div className={styles.container}>
            <h3 className={styles.subHeader}>Key Activities</h3>
          </div>
          <p className={styles.filler}>
            The project's key activities include developing a user-friendly
            mobile application featuring comprehensive educational resources,
            establishing an online marketplace for direct farmer-to-consumer
            transactions, and creating a secure community platform. Integration
            with microfinance institutions and collaboration with agricultural
            cooperatives will ensure financial accessibility and knowledge
            dissemination. Additionally, aligning with government agricultural
            agencies for policy integration and engagement with NGOs for ethical
            guidance are crucial activities. Continuous monitoring and
            evaluation mechanisms will be implemented to assess the
            effectiveness of the platform in promoting sustainable agricultural
            practices and ensuring the ethical well-being of farmers.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Key Partners</h3>
          </div>
          <p className={styles.filler}>
            The success of Digital Agriculture Platform relies on strategic
            collaborations with key partners. Local agricultural cooperatives
            stand as integral allies, sharing their valuable insights, fostering
            community engagement, and championing the adoption of sustainable
            practices among farmers. Non-Governmental Organizations (NGOs) play
            a vital role, contributing their expertise in ethical and
            sustainable rural development, providing guidance on ethical
            considerations, and actively supporting training programs.
            Government agricultural agencies are essential stakeholders, guiding
            policies, integrating official guidelines, and ensuring alignment
            with national strategies. Microfinance institutions join forces to
            enhance financial inclusion, offering farmers access to crucial
            resources and supporting the economic viability of the project.
            Engaging consumers and businesses creates a direct link to the
            marketplace, fostering ethical trade practices and ensuring the
            sustainability of the agricultural ecosystem.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Channels</h3>
          </div>
          <p className={styles.filler}>
            Communication with potential partners is orchestrated through a
            diverse array of channels. Direct outreach efforts involve personal
            interactions, meetings, and presentations, conveying the project's
            vision and potential impact. Digital platforms, including email,
            social media, and webinars, serve as dynamic tools for disseminating
            project updates, engaging with stakeholders, and fostering
            collaboration in a virtual space. Workshops and conferences provide
            opportunities to participate in industry-relevant events, connecting
            with NGOs, government agencies, and other potential partners
            interested in sustainable agricultural development. Local community
            engagement initiatives, such as town hall meetings, agricultural
            fairs, and grassroots interactions, serve as powerful avenues to
            connect with farmers, cooperatives, and microfinance institutions at
            the grassroots level, ensuring that the project resonates with the
            diverse needs of the Afghan agricultural community. Through these
            channels, the project aims to cultivate robust partnerships and
            facilitate meaningful dialogue to enhance the feasibility and
            overall success of the digital agriculture ecosystem.
          </p>

          <h2 className={styles.header} id="viability">
            Viability
          </h2>
          <div className={styles.container}>
            <h3 className={styles.subHeader}>Key Resources</h3>
          </div>
          <p className={styles.filler}>
            The project's viability hinges on the effective allocation and
            management of key resources. Human resources encompass a skilled
            development team, agricultural experts, and community facilitators.
            Technological resources include the development and maintenance of
            the mobile application, ensuring a seamless user experience.
            Educational content creation requires collaboration with experts and
            educational organizations. Financial resources are essential to
            cover development costs, outreach efforts, and potential
            partnerships. The collaboration with microfinance institutions
            serves as a critical resource to ensure financial accessibility for
            farmers.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Revenue Streams</h3>
          </div>
          <p className={styles.filler}>
            To ensure the sustainability and viability of the project, multiple
            revenue streams are considered. The online marketplace introduces a
            transaction-based revenue model, where a percentage of each
            successful transaction contributes to the platform's income.
            Collaborative partnerships with agricultural cooperatives, NGOs, and
            government agencies could involve grant funding, sponsorships, or
            collaborative financing to support ongoing operations. Additionally,
            premium features or subscriptions within the platform, offering
            enhanced educational content or advanced marketplace analytics,
            could serve as supplementary revenue streams. Leveraging the
            platform's data insights for research collaborations or offering
            premium data services to relevant stakeholders also presents
            potential revenue-generating opportunities.
          </p>

          <div className={styles.container}>
            <h3 className={styles.subHeader}>Cost Structure</h3>
          </div>
          <p className={styles.filler}>
            The cost structure for the Digital Agriculture Platform project
            includes estimated expenses for key components. The development and
            maintenance costs for the mobile application are budgeted at
            $50,000, encompassing the initial creation and one year of
            maintenance. Educational content creation, a crucial aspect of the
            platform, is estimated at $20,000, covering the development of
            culturally relevant and impactful materials. Outreach and community
            engagement efforts, such as workshops and conferences, are allocated
            $15,000 to facilitate meaningful connections with farmers and
            stakeholders. Collaborating with microfinance institutions for
            financial integration requires an estimated $30,000 to ensure secure
            and effective partnerships. Ongoing operational costs, including
            server hosting, data storage, and administrative overhead, are
            estimated at $25,000 per year. These cost estimates provide a
            practical foundation for financial planning, enabling the project to
            allocate resources effectively and ensure the viability of the
            Digital Agriculture Platform for Afghan Farmers.
          </p>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Proposal;
