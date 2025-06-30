const subjects = ['Mathematics III', 'Analog Electronic circuit', 'Technical Writing', 'OOPs', 'DSA'];
const years = ['2019', '2020', '2021', '2022', '2023'];

const links = {

'2019': {  
    'Mathematics III': 'https://drive.google.com/drive/folders/1Xg-e2PfVEwk2cT-Eh01lACIQ_CZffnbk',
    'Analog Electronic circuit': 'https://drive.google.com/drive/folders/1XxVOXBn9oK447pSsffAkoYpxlcXIFh1V',
    'Technical Writing': 'https://drive.google.com/drive/folders/1YPthi3fnDV7w6jIDTtxbbyoChdZHNX_B',
    'OOPs': 'https://drive.google.com/drive/folders/1XogjfslAGNqdI62Ex0MQlRH5EbeRdlPe',
    'DSA': 'https://drive.google.com/drive/folders/1YERJyRrvfxqe8h-4HuiYCIN8s7csa16l',
  },
  // Add similarly for other years...
  '2020': {
    'Mathematics III': 'hhttps://drive.google.com/drive/folders/1XhrlEOOUfMMzndFLSsVRFMkoWijT32eh',
    'Analog Electronic circuit': 'https://drive.google.com/drive/folders/1XzPOc1uaXi76Q1nGdw_ph3wtWtMt8RPN',
    'Technical Writing': 'https://drive.google.com/drive/folders/1YRD8N2GjnYzOauYlPVZCAbuYTNcsxN92',
    'OOPs': 'https://drive.google.com/drive/folders/1XoxXW6a19p8iUneo7TihWpkR8dK4ut9b',
    'DSA': 'https://drive.google.com/drive/folders/1YCJk4F8jog4C1e7XD5WyBose8Lmra2Xh'
  }
  '2021': {  
    'Mathematics III': 'https://drive.google.com/drive/folders/1XiJb_N66kWJfS7-LQic4gL46Hiw-AdKn',
    'Analog Electronic circuit': 'https://drive.google.com/drive/folders/1Y0RhvC_GTAyFNaHa1F50ThaA-ggVe6X8',
    'Technical Writing': 'https://drive.google.com/drive/folders/1YRDmjzdtcUpXJrcae8lQYr0r9TP92WWo',
    'OOPs': 'https://drive.google.com/drive/folders/1XrAwgGvnsGIcpOxKsdMBorVwe96vccnS',
    'DSA': 'https://drive.google.com/drive/folders/1YH1I8Y4dCOQzf2AqhHWrUrsab_cpiA5m'
  },
  // Add similarly for other years...
  '2022': {
    'Mathematics III': 'https://drive.google.com/drive/folders/1Xk-KsEmRu4Q0bpxHSgSi-pv010u-KBjt',
    'Analog Electronic circuit': 'https://drive.google.com/drive/folders/1Y2nwYUjZgPpY2t-5rBWEJtGG4aUUr4Pd',
    'Technical Writing': 'https://drive.google.com/drive/folders/1YUhdLm_jmwrMLZ2qNavo8eWvR_yPX33g',
    'OOPs': 'https://drive.google.com/drive/folders/1XrdRXefNE4oMTjiqD22Qh2dVY5EusD14',
    'DSA': 'https://drive.google.com/drive/folders/1YICdfqYg2IuK9a3IeGA0rQQRutI18TGK',
  }
  '2023': {  
    'Mathematics III': 'https://drive.google.com/drive/folders/1Xkc9OK4g8jxl7GSzAKtHp85Q8lmgst1Q',
    'Analog Electronic circuit': 'https://drive.google.com/drive/folders/1YA2rsgHi2otEWCitQLPxPomT0dDByi1e',
    'Technical Writing': 'https://drive.google.com/drive/folders/1YW5I0h6OdvvIswMyIpfHqhYR3vBPLtnA',
    'OOPs': 'https://drive.google.com/drive/folders/1XryXvbhmaPXdYYzCP5tA5djUjKCpHu9z',
    'DSA': 'https://drive.google.com/drive/folders/1YJ47MSPUb2rwOaaUsHvoVRMAa5v7IqM4'
  },
  // Add similarly for other years...
  '2024': {
    'Mathematics III': 'https://drive.google.com/drive/folders/1XmRvzKAxZtJq1250KlBAaTgzPQCEFXLr',
    'Analog Electronic circuit': 'https://drive.google.com/drive/folders/1YBPEu1aF0aBVXqZwo9qoKgX1JhUtBl9T',
    'Technical Writing': 'https://drive.google.com/drive/folders/1YV_43UvzI27sckk6KDO5FkphJYbHSmW3',
    'OOPs': 'https://drive.google.com/drive/folders/1Xuo-wjSbPgzlYNFwQ-E27kapAdxmHCvh',
    'DSA': 'https://drive.google.com/drive/folders/1YO1V2F-79hjEnDqtehFxGY_FnyzR0bus'
  }
};

function createCards(selectedYear = 'all') {
  const container = document.getElementById('cardContainer');
  container.innerHTML = '';

  years.forEach((year) => {
    if (selectedYear !== 'all' && selectedYear !== year) return;

    subjects.forEach((subject) => {
      if (!links[year] || !links[year][subject]) return;

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${subject}</h3>
        <p>Year: ${year}</p>
        <button onclick="redirectTo('${links[year][subject]}')">Open in Drive</button>
      `;
      container.appendChild(card);
    });
  });
}

function redirectTo(url) {
  console.log("Redirecting to:", url); // For tracking
  window.open(url, '_blank');
}

function filterYear(year) {
  createCards(year);
}

// Load all on start
createCards();
