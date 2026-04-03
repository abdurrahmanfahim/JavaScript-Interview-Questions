// Topic Configuration
const dataMap = {};
function registerData(id, data) { dataMap[id] = data; }

const topics = [
  {
    id: "v1",
    label: "JS V1",
    mobileLabel: "V1",
    dataVar: "questionsDataV1",
  },
  {
    id: "v2-bn",
    label: "JS V2 (বাংলা)",
    mobileLabel: "V2",
    dataVar: "questionsDataV2",
    default: true,
  },
  {
    id: "v2-en",
    label: "JS V2 (English)",
    mobileLabel: "V2 (En)",
    dataVar: "questionsDataV2En",
  },
  {
    id: "react",
    label: "React",
    mobileLabel: "React",
    dataVar: "reactQuestionsData",
  },
];
