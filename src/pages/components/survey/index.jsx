import React from 'react';
import * as Survey from 'survey-react'; // import surveyjs
import { questions } from '../../../../components/survey/content/index'; // these are the survey questions
// Modern theme
import 'survey-react/modern.min.css';
// Default theme
// import 'survey-react/survey.min.css';

const SurveyComponent = () => {
  // Apply theme
  Survey.StylesManager.applyTheme('modern');

  // Create a modal
  const survey = new Survey.Model(questions);

  survey.sendResultOnPageNext = true;
  const storageName = 'SurveyNextjs';
  function saveSurveyData(survey) {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageName, JSON.stringify(data));
    console.log(data);
  }
  survey.onPartialSend.add(function (survey) {
    saveSurveyData(survey);
  });
  const prevData = window.localStorage.getItem(storageName) || null;
  if (prevData) {
    const data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
      survey.currentPageNo = data.pageNo;
    }
  }

  survey.onComplete.add(function (survey) {
    saveSurveyData(survey);
    console.log(survey.data);
    // window.location.href = "/survey/finish";
  });

  // Render the survey
  return <Survey.Survey model={survey} />;
};

export default SurveyComponent;
