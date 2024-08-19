import React from "react";

const publicationsData = [
  {
    title: "Dissertation: Exploring the many scales of neural activity underlying perception and decision making",
    authors: "Brandon Benson",
    journal: "Stanford University",
    year: "2023",
    url: "https://purl.stanford.edu/wp132vx8882",
  },
  {
    title: "A Brain-Wide Map of Neural Activity during Complex Behaviour",
    authors: "International Brain Laboratory and B. Benson, et al.",
    journal: "bioRxiv",
    year: "2023",
    doi: "10.1101/2023.07.04.547681",
    url: "https://www.biorxiv.org/content/10.1101/2023.07.04.547681v2",
  },
  {
    title: "Brain-wide representations of prior information in mouse decision-making",
    authors: "C. Findling, F. Hubert, International Brain Laboratory, et al.",
    journal: "bioRxiv",
    year: "2023",
  },
  {
    title: "Cortical layer–specific critical dynamics triggering perception",
    authors: "James H. Marshel, Yoon Seok Kim, Timothy A. Machado, et al.",
    journal: "Science",
    year: "2019",
    doi: "10.1126/science.aaw5202",
  },
  {
    title: "Photon emission by volume reflected electrons in bent crystals",
    authors: "C. F. Nielsen, U. I. Uggerhøj, R. Holtzapple, et al.",
    journal: "Physical Review Accelerators and Beams",
    year: "2019",
    doi: "10.1103/PhysRevAccelBeams.22.114701",
  },
  {
    title: "Channeling and radiation experiments at SLAC",
    authors: "U. Wienands, S. Gessner, M. J. Hogan, et al.",
    journal: "Nuclear Instruments and Methods in Physics Research, Section B",
    year: "2017",
    doi: "10.1016/j.nimb.2017.03.097",
  },
  {
    title: "Hand-powered ultralow-cost paper centrifuge",
    authors: "M.S. Bhamla, B. Benson*, C. Chai*, et al.",
    journal: "Nature Biomedical Engineering",
    year: "2017",
    doi: "10.1038/s41551-016-0009",
  },
  {
    title: "Channeling, volume reflection, and volume capture study of electrons in a bent silicon crystal",
    authors: "T. N. Wistisen, U. I. Uggerhøj, U. Wienands, et al.",
    journal: "Physical Review Accelerators and Beams",
    year: "2016",
    doi: "10.1103/PhysRevAccelBeams.19.071001",
  },
];

const postersTalksAbstractsData = [
  {
    title: "International Brain Laboratory brain-wide-map analysis: Standardized Euclidean distance of trial-averaged activity across neuropixel recordings reveals a graded response to task-relevant variables",
    authors: "M. Schartner, C. Langdon, B. Benson, et al.",
    journal: "Society for Neuroscience poster",
    year: "2022",
  },
  {
    title: "International Brain Laboratory brainwide analysis: decoding of task and behavioral variables from populations of neurons",
    authors: "B. Benson, C. Findling, F. Hubert, et al.",
    journal: "Society for Neuroscience poster",
    year: "2022",
  },
  {
    title: "Single-cell correlates of sensory, cognitive, and motor variables across the brain",
    authors: "Y. Shi, N. Roth, N. A. Steinmetz, et al.",
    journal: "Society for Neuroscience poster",
    year: "2022",
  },
  {
    title: "Distributed neural representations of prior information in mouse decision-making",
    authors: "F. Hubert, C. Findling, B. Gerçek, et al.",
    journal: "Society for Neuroscience poster",
    year: "2022",
  },
  {
    title: "An optogenetic theory of stimulation near criticality",
    authors: "Benson, Kadmon, Ganguli",
    journal: "Neuromatch 4.0",
    year: "2021",
    note: "Selected for a talk, available at https://youtu.be/_-DNXSky9rY",
  },
  {
    title: "Neural correlates of an approximate prior in perceptual decision making",
    authors: "Gerçek, Meijer, Benson, et al.",
    journal: "Society for Neuroscience",
    year: "2021",
    note: "video submission",
  },
  {
    title: "Critical behavior in networks of inhibitory-excitatory spiking neurons with weak synaptic efficacy",
    authors: "Benson, Kadmon, Ganguli",
    journal: "Neuromatch 3.0",
    year: "2020",
    note: "talk",
  },
  {
    title: "Layer-specific neural ensembles contributing to ignition and plasticity of perception",
    authors: "Marshel*, Machado*, Quirin*, Kim*, Benson, et al.",
    journal: "Cosyne Abstract",
    year: "2019",
    note: "Selected for a talk (* indicates equal contribution)",
  },
  {
    title: "Cytoskeletal dynamics of rapid morphology changes in Lacrymaria olor",
    authors: "Flaum, Coyle, Benson, Krishnamurthy, Prakash",
    journal: "ASCB Abstract",
    year: "2018",
    note: "poster",
  },
];

const whitePapersData = [
  {
    title: "Exploration of avocado oil extraction methods and potential in rural Tanzania",
    authors: "E. Hoffecker, B. Benson, et al.",
    journal: "IDIN: MIT D-Lab Project Report",
    year: "2015",
    note: "authors not ordered",
  },
];

const patentsData = [
  {
    title: "Hand-powered ultralow-cost paper centrifuge",
    authors: "M.S. Bhamla, B. Benson, C. Chai, et al.",
    year: "2017",
  },
];

const Publications = () => {
  return (
    <div>
      <section>
        <h2>Publications</h2>
        <ul>
          {publicationsData.map((pub, index) => (
            <li key={index}>
              <strong>{pub.title}</strong> by {pub.authors}. <em>{pub.journal}</em>, {pub.year}.
              {pub.doi && <span> DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer">{pub.doi}</a></span>}
              {pub.url && <span> URL: <a href={pub.url} target="_blank" rel="noopener noreferrer">{pub.url}</a></span>}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Posters, Talks, Abstracts</h2>
        <ul>
          {postersTalksAbstractsData.map((entry, index) => (
            <li key={index}>
              <strong>{entry.title}</strong> by {entry.authors}. <em>{entry.journal}</em>, {entry.year}.
              {entry.note && <span> {entry.note}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>White Papers</h2>
        <ul>
          {whitePapersData.map((paper, index) => (
            <li key={index}>
              <strong>{paper.title}</strong> by {paper.authors}. <em>{paper.journal}</em>, {paper.year}.
              {paper.note && <span> {paper.note}</span>}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Patents</h2>
        <ul>
          {patentsData.map((patent, index) => (
            <li key={index}>
              <strong>{patent.title}</strong> by {patent.authors}, {patent.year}.
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Publications;
