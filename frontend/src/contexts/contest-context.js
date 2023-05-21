import React, { createContext, useReducer, useEffect } from 'react';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  if (action.type === 'FETCH_INIT') {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }

  if (action.type === 'FETCH_SUCCESS') {
    return {
      ...state,
      loading: false,
      data: action.payload,
    };
  }

  if (action.type === 'FETCH_ERROR') {
    return {
      ...state,
      loading: false,
      error: action.payload,
    };
  }

  return state;
};

export const ContestContext = createContext();

export const ContestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        let data;
        try {
          const response = await fetch(
            'http://localhost:8080/get-overall_data',
            {
              method: 'POST',
              body: JSON.stringify({
                competence: -1,
                year: '2021',
              }),
            },
          );
          if (!response.ok) {
            throw new Error('Request failed');
          }
          data = await response.json();
        } catch {
          // Fallback test data
          data = {
            'competitors-count': 713,
            'mean-done-per': 18,
            'mean-top-per': 81,
            'clusters-competitors': [441, 139, 133],
            'easy-average-hard': [713, 713, 104],
            'age-counts': [12, 57, 54, 149, 29],
            'experience-counts': [597, 13, 49, 31, 23],
            'gender-counts': [557, 156],
            'competitors-increase': 17,
            'perfomance-increase': -23,
            'competences-increase': 2,
            'oldies-increase': 25,
            'diving-increase': -3,
            'comp-exp-increase': 198,
            'cluster-qualifications': {
              2021: [441, 139, 133],
              2022: [249, 113, 227],
            },
            'compes-table':
              '{"\\u041f\\u0435\\u0440\\u0441\\u043f\\u0435\\u043a\\u0442\\u0438\\u0432\\u043d\\u043e\\u0441\\u0442\\u044c":{"0":0,"1":0,"5":0,"6":0,"7":0,"8":0,"11":0,"16":0,"18":0,"19":0,"21":0,"22":0,"26":0,"27":0,"29":0},"\\u0424\\u0418\\u041e":{"0":"\\u0424\\u0418\\u041e_0","1":"\\u0424\\u0418\\u041e_1","5":"\\u0424\\u0418\\u041e_5","6":"\\u0424\\u0418\\u041e_6","7":"\\u0424\\u0418\\u041e_7","8":"\\u0424\\u0418\\u041e_8","11":"\\u0424\\u0418\\u041e_11","16":"\\u0424\\u0418\\u041e_16","18":"\\u0424\\u0418\\u041e_18","19":"\\u0424\\u0418\\u041e_19","21":"\\u0424\\u0418\\u041e_21","22":"\\u0424\\u0418\\u041e_22","26":"\\u0424\\u0418\\u041e_26","27":"\\u0424\\u0418\\u041e_27","29":"\\u0424\\u0418\\u041e_29"},"\\u0421\\u043f\\u0438\\u0441\\u043e\\u043a \\u043a\\u043e\\u043c\\u043f\\u0435\\u0442\\u0435\\u043d\\u0446\\u0438\\u0439":{"0":"\\u0426\\u0438\\u0444\\u0440\\u043e\\u0432\\u043e\\u0435 \\u041f\\u0421\\u0420-\\u041f\\u0440\\u0435\\u0434\\u043f\\u0440\\u0438\\u044f\\u0442\\u0438\\u0435 (Lean Smart Plant); ","1":"\\u0423\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u0438\\u0435 \\u043a\\u0430\\u0447\\u0435\\u0441\\u0442\\u0432\\u043e\\u043c; ","5":"\\u0426\\u0438\\u0444\\u0440\\u043e\\u0432\\u043e\\u0435 \\u041f\\u0421\\u0420-\\u041f\\u0440\\u0435\\u0434\\u043f\\u0440\\u0438\\u044f\\u0442\\u0438\\u0435 (Lean Smart Plant); ","6":"\\u041c\\u0435\\u0445\\u0430\\u0442\\u0440\\u043e\\u043d\\u0438\\u043a\\u0430; ","7":"\\u0423\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u0438\\u0435 \\u043a\\u0430\\u0447\\u0435\\u0441\\u0442\\u0432\\u043e\\u043c; ","8":"\\u0410\\u0434\\u0434\\u0438\\u0442\\u0438\\u0432\\u043d\\u044b\\u0435 \\u0442\\u0435\\u0445\\u043d\\u043e\\u043b\\u043e\\u0433\\u0438\\u0438; ","11":"\\u0412\\u044b\\u0432\\u043e\\u0434 \\u0438\\u0437 \\u044d\\u043a\\u0441\\u043f\\u043b\\u0443\\u0430\\u0442\\u0430\\u0446\\u0438\\u0438 \\u043e\\u0431\\u044a\\u0435\\u043a\\u0442\\u043e\\u0432 \\u0438\\u0441\\u043f\\u043e\\u043b\\u044c\\u0437\\u043e\\u0432\\u0430\\u043d\\u0438\\u044f \\u0430\\u0442\\u043e\\u043c\\u043d\\u043e\\u0439 \\u044d\\u043d\\u0435\\u0440\\u0433\\u0438\\u0438; ","16":"\\u0421\\u0442\\u0440\\u043e\\u0438\\u0442\\u0435\\u043b\\u044c\\u043d\\u044b\\u0439 \\u043a\\u043e\\u043d\\u0442\\u0440\\u043e\\u043b\\u044c; ","18":"\\u0413\\u0435\\u043e\\u0434\\u0435\\u0437\\u0438\\u044f; ","19":"\\u0418\\u043d\\u0436\\u0435\\u043d\\u0435\\u0440\\u043d\\u043e\\u0435 \\u043f\\u0440\\u043e\\u0435\\u043a\\u0442\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u0435; ","21":"\\u0421\\u0435\\u0442\\u0435\\u0432\\u043e\\u0435 \\u0438 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u043e\\u0435 \\u0430\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u0435; ","22":"\\u041c\\u0435\\u0445\\u0430\\u0442\\u0440\\u043e\\u043d\\u0438\\u043a\\u0430; ","26":"\\u0413\\u0435\\u043e\\u0434\\u0435\\u0437\\u0438\\u044f; ","27":"\\u0418\\u043d\\u0436\\u0435\\u043d\\u0435\\u0440\\u043d\\u043e\\u0435 \\u043f\\u0440\\u043e\\u0435\\u043a\\u0442\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u0435; ","29":"\\u0423\\u043f\\u0440\\u0430\\u0432\\u043b\\u0435\\u043d\\u0438\\u0435 \\u0436\\u0438\\u0437\\u043d\\u0435\\u043d\\u043d\\u044b\\u043c \\u0446\\u0438\\u043a\\u043b\\u043e\\u043c; "},"\\u041c\\u0435\\u0441\\u0442\\u043e \\u0440\\u0430\\u0431\\u043e\\u0442\\u044b":{"0":"\\u0410\\u041e \\u0427\\u0435\\u043f\\u0435\\u0446\\u043a\\u0438\\u0439 \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u0447\\u0435\\u0441\\u043a\\u0438\\u0439 \\u0437\\u0430\\u0432\\u043e\\u0434","1":"\\u0410\\u043a\\u0446\\u0438\\u043e\\u043d\\u0435\\u0440\\u043d\\u043e\\u0435 \\u043e\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u043e  \\u041d\\u0430\\u0443\\u0447\\u043d\\u043e-\\u0438\\u0441\\u0441\\u043b\\u0435\\u0434\\u043e\\u0432\\u0430\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0438\\u0439 \\u0438\\u043d\\u0441\\u0442\\u0438\\u0442\\u0443\\u0442 \\u041d\\u0430\\u0443\\u0447\\u043d\\u043e-\\u043f\\u0440\\u043e\\u0438\\u0437\\u0432\\u043e\\u0434\\u0441\\u0442\\u0432\\u0435\\u043d\\u043d\\u043e\\u0435 \\u043e\\u0431\\u044a\\u0435\\u0434\\u0438\\u043d\\u0435\\u043d\\u0438\\u0435 \\"\\u041b\\u0423\\u0427\\"","5":"\\u0424\\u0435\\u0434\\u0435\\u0440\\u0430\\u043b\\u044c\\u043d\\u043e\\u0435 \\u0433\\u043e\\u0441\\u0443\\u0434\\u0430\\u0440\\u0441\\u0442\\u0432\\u0435\\u043d\\u043d\\u043e\\u0435 \\u0443\\u043d\\u0438\\u0442\\u0430\\u0440\\u043d\\u043e\\u0435 \\u043f\\u0440\\u0435\\u0434\\u043f\\u0440\\u0438\\u044f\\u0442\\u0438\\u0435 \\u00ab\\u043f\\u0440\\u043e\\u0438\\u0437\\u0432\\u043e\\u0434\\u0441\\u0442\\u0432\\u0435\\u043d\\u043d\\u043e\\u0435 \\u043e\\u0431\\u044a\\u0435\\u0434\\u0438\\u043d\\u0435\\u043d\\u0438\\u0435 \\u00ab\\u041c\\u0430\\u044f\\u043a\\u00bb","6":"\\u0424\\u0435\\u0434\\u0435\\u0440\\u0430\\u043b\\u044c\\u043d\\u043e\\u0435 \\u0433\\u043e\\u0441\\u0443\\u0434\\u0430\\u0440\\u0441\\u0442\\u0432\\u0435\\u043d\\u043d\\u043e\\u0435 \\u0430\\u0432\\u0442\\u043e\\u043d\\u043e\\u043c\\u043d\\u043e\\u0435 \\u043e\\u0431\\u0440\\u0430\\u0437\\u043e\\u0432\\u0430\\u0442\\u0435\\u043b\\u044c\\u043d\\u043e\\u0435 \\u0443\\u0447\\u0440\\u0435\\u0436\\u0434\\u0435\\u043d\\u0438\\u0435 \\u0432\\u044b\\u0441\\u0448\\u0435\\u0433\\u043e \\u043e\\u0431\\u0440\\u0430\\u0437\\u043e\\u0432\\u0430\\u043d\\u0438\\u044f \\u00ab\\u0421\\u0430\\u043d\\u043a\\u0442-\\u041f\\u0435\\u0442\\u0435\\u0440\\u0431\\u0443\\u0440\\u0433\\u0441\\u043a\\u0438\\u0439 \\u0433\\u043e\\u0441\\u0443\\u0434\\u0430\\u0440\\u0441\\u0442\\u0432\\u0435\\u043d\\u043d","7":"\\u0410\\u043a\\u0446\\u0438\\u043e\\u043d\\u0435\\u0440\\u043d\\u043e\\u0435 \\u043e\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u043e \\"\\u0410\\u0442\\u043e\\u043c\\u044d\\u043d\\u0435\\u0440\\u0433\\u043e\\u043f\\u0440\\u043e\\u0435\\u043a\\u0442\\"","8":"\\u0424\\u0413\\u0423\\u041f \\"\\u0420\\u0424\\u042f\\u0426-\\u0412\\u041d\\u0418\\u0418\\u0422\\u0424 \\u0438\\u043c. \\u0430\\u043a\\u0430\\u0434\\u0435\\u043c. \\u0415.\\u0418. \\u0417\\u0430\\u0431\\u0430\\u0431\\u0430\\u0445\\u0438\\u043d\\u0430\\"","11":"\\u0410\\u043a\\u0446\\u0438\\u043e\\u043d\\u0435\\u0440\\u043d\\u043e\\u0435 \\u043e\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u043e \\"\\u0412\\u044b\\u0441\\u043e\\u043a\\u043e\\u0442\\u0435\\u0445\\u043d\\u043e\\u043b\\u043e\\u0433\\u0438\\u0447\\u0435\\u0441\\u043a\\u0438\\u0439 \\u043d\\u0430\\u0443\\u0447\\u043d\\u043e-\\u0438\\u0441\\u0441\\u043b\\u0435\\u0434\\u043e\\u0432\\u0430\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0438\\u0439 \\u0438\\u043d\\u0441\\u0442\\u0438\\u0442\\u0443\\u0442 \\u0438\\u043d\\u0441\\u0442\\u0438\\u0442\\u0443\\u0442 \\u043d\\u0435\\u043e\\u0440\\u0433\\u0430\\u043d\\u0438\\u0447\\u0435\\u0441\\u043a\\u0438\\u0445 \\u043c\\u0430\\u0442\\u0435\\u0440\\u0438\\u0430\\u043b\\u043e\\u0432 \\u0438\\u043c.\\u0410.\\u0410.","16":"\\u0414\\u0435\\u043f\\u0430\\u0440\\u0442\\u0430\\u043c\\u0435\\u043d\\u0442 \\u043a\\u0430\\u043f\\u0438\\u0442\\u0430\\u043b\\u044c\\u043d\\u043e\\u0433\\u043e \\u0441\\u0442\\u0440\\u043e\\u0438\\u0442\\u0435\\u043b\\u044c\\u0441\\u0442\\u0432\\u0430","18":"\\"\\u0424\\u0438\\u043b\\u0438\\u0430\\u043b \\u0410\\u041e \\"\\"\\u041a\\u043e\\u043d\\u0446\\u0435\\u0440\\u043d \\u0420\\u043e\\u0441\\u044d\\u043d\\u0435\\u0440\\u0433\\u043e\\u0430\\u0442\\u043e\\u043c\\"\\" \\u0411\\u0435\\u043b\\u043e\\u044f\\u0440\\u0441\\u043a\\u0430\\u044f \\u0410\\u042d\\u0421\\"","19":"\\u0410\\u041e  \\u0412\\u0435\\u0434\\u0443\\u0449\\u0438\\u0439 \\u041d\\u0430\\u0443\\u0447\\u043d\\u043e-\\u0418\\u0441\\u0441\\u043b\\u0435\\u0434\\u043e\\u0432\\u0430\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0438\\u0439 \\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u044b\\u0439 \\u0418\\u043d\\u0441\\u0442\\u0438\\u0442\\u0443\\u0442 \\u043f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u043e\\u0439 \\u0442\\u0435\\u0445\\u043d\\u043e\\u043b\\u043e\\u0433\\u0438\\u0438","21":"\\u0410\\u041e \\"\\u0413\\u0440\\u0438\\u043d\\u0430\\u0442\\u043e\\u043c\\"","22":"\\"\\u0424\\u0413\\u0423\\u041f \\u041f\\u041e \\"\\"\\u041c\\u0410\\u042f\\u041a\\"\\"","26":"\\u0410\\u043a\\u0446\\u0438\\u043e\\u043d\\u0435\\u0440\\u043d\\u043e\\u0435 \\u043e\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u043e \\"\\u0412\\u0435\\u0434\\u0443\\u0449\\u0438\\u0439 \\u043f\\u0440\\u043e\\u0435\\u043a\\u0442\\u043d\\u043e-\\u0438\\u0437\\u044b\\u0441\\u043a\\u0430\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0438\\u0439 \\u0438 \\u043d\\u0430\\u0443\\u0447\\u043d\\u043e-\\u0438\\u0441\\u0441\\u043b\\u0435\\u0434\\u043e\\u0432\\u0430\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0438\\u0439 \\u0438\\u043d\\u0441\\u0442\\u0438\\u0442\\u0443\\u0442 \\u043f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u043e\\u0439 \\u0442\\u0435\\u0445\\u043d\\u043e\\u043b\\u043e\\u0433\\u0438\\u0438\\"","27":"\\u0410\\u041e \\"\\u0426\\u041f\\u0422\\u0418, \\u0423\\u0440\\u0430\\u043b\\u044c\\u0441\\u043a\\u0438\\u0439 \\u0444\\u0438\\u043b\\u0438\\u0430\\u043b, \\u043d\\u0430\\u0443\\u0447\\u043d\\u043e-\\u0438\\u0441\\u0441\\u043b\\u0435\\u0434\\u043e\\u0432\\u0430\\u0442\\u0435\\u043b\\u044c\\u0441\\u043a\\u0438\\u0439 \\u0438 \\u043e\\u043f\\u044b\\u0442\\u043d\\u043e-\\u043a\\u043e\\u043d\\u0441\\u0442\\u0440\\u0443\\u043a\\u0442\\u043e\\u0440\\u0441\\u043a\\u0438\\u0439 \\u043e\\u0442\\u0434\\u0435\\u043b","29":"\\"\\u0410\\u041e \\u043f\\u043e \\u043d\\u0430\\u043b\\u0430\\u0434\\u043a\\u0435"},"individual_result":{"0":0.0,"1":0.0,"5":0.0,"6":0.0,"7":0.0,"8":35.22,"11":0.0,"16":0.0,"18":0.0,"19":0.0,"21":0.0,"22":0.0,"26":0.0,"27":0.0,"29":0.0},"\\u0421\\u043a\\u043e\\u0440\\/\\u0441\\u0442\\u0430\\u0436":{"0":0.0,"1":0.0,"5":0.0,"6":0.0,"7":0.0,"8":0.8709555207,"11":0.0,"16":0.0,"18":0.0,"19":0.0,"21":0.0,"22":0.0,"26":0.0,"27":0.0,"29":0.0},"cluster":{"0":0,"1":0,"5":0,"6":0,"7":0,"8":2,"11":0,"16":0,"18":0,"19":0,"21":0,"22":0,"26":0,"27":0,"29":0},"\\u0412\\u043e\\u0437\\u0440\\u0430\\u0441\\u0442":{"0":48.0,"1":46.0,"5":37.0,"6":19.0,"7":28.0,"8":49.0,"11":49.0,"16":43.0,"18":62.0,"19":24.0,"21":36.0,"22":37.0,"26":47.0,"27":29.0,"29":31.0}}',
            'commands-info':
              '{"\\u041d\\u0430\\u0437\\u0432\\u0430\\u043d\\u0438\\u0435 \\u043a\\u043e\\u043c\\u0430\\u043d\\u0434\\u044b":{"0":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 1   \\u0410\\u041e \\"\\u0422\\u0412\\u042d\\u041b\\" 2","1":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 3   \\u0410\\u041e \\"\\u0422\\u0412\\u042d\\u041b\\" 1","2":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 4  \\u041a\\u043e\\u043d\\u0446\\u0435\\u0440\\u043d \\u043a\\u043e\\u043c\\u0430\\u043d\\u0434\\u0430 1","3":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 5 \\u0410\\u041e \\"\\u041f\\u041e \\"\\u0441\\u0442\\u0430\\u0440\\u0442\\"","4":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 6 \\u041a\\u043e\\u043c\\u0430\\u043d\\u0434\\u0430 \\"\\u0410\\u042d\\u041c-\\"\\u041e\\u041a\\u0411\\u041c\\"","5":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 7 \\u041a\\u043e\\u043c\\u0430\\u043d\\u0434\\u0430 \\"\\u0410\\u042d\\u041c-\\u0410\\u0442\\u043e\\u043c\\u043c\\u0430\\u0448-\\u0421\\u0435\\u0440\\u0432\\u0438\\u0441\\"","6":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 8 \\u041c\\u0410\\u042f\\u041a \\u042f\\u041e\\u041a-2","7":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 9 \\u041c\\u0410\\u042f\\u041a \\u042f\\u041e\\u041a-1","8":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 10 \\u041a\\u043e\\u043c\\u0430\\u043d\\u0434\\u0430 \\"\\u0410\\u042d\\u041c-\\"\\u041f\\u0417\\u041c\\"","9":"\\u0420\\u0430\\u0431\\u043e\\u0447\\u0435\\u0435 \\u043c\\u0435\\u0441\\u0442\\u043e 2   \\u041a\\u043e\\u043d\\u0446\\u0435\\u0440\\u043d \\u043a\\u043e\\u043c\\u0430\\u043d\\u0434\\u0430 2","10":"\\u0410\\u041e \\"\\u0420\\u0410\\u0421\\u0423\\"","11":"\\u0424\\u0413\\u0411\\u041e\\u0423 \\u041d\\u0418\\u0423 \\u041c\\u042d\\u0418","12":"\\u0410\\u041e \\"\\u0422\\u0412\\u042d\\u041b\\" 2","13":"\\u042d\\u043b\\u0435\\u0440\\u043e\\u043d","14":"\\u0424\\u0413\\u0423\\u041f \\u0420\\u0424\\u042f\\u0426-\\u0412\\u041d\\u0418\\u0418\\u042d\\u0424 \\u042f\\u041e\\u041a"},"\\u041a\\u043e\\u043c\\u043f\\u0435\\u0442\\u0435\\u043d\\u0446\\u0438\\u044f":{"0":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","1":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","2":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","3":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","4":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","5":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","6":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","7":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","8":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","9":"\\u041f\\u0440\\u043e\\u043c\\u044b\\u0448\\u043b\\u0435\\u043d\\u043d\\u0430\\u044f \\u043c\\u0435\\u0445\\u0430\\u043d\\u0438\\u043a\\u0430 \\u0438 \\u043c\\u043e\\u043d\\u0442\\u0430\\u0436","10":"\\u0418\\u043d\\u0444\\u043e\\u0440\\u043c\\u0430\\u0446\\u0438\\u043e\\u043d\\u043d\\u0430\\u044f \\u0431\\u0435\\u0437\\u043e\\u043f\\u0430\\u0441\\u043d\\u043e\\u0441\\u0442\\u044c","11":"\\u0421\\u0435\\u0442\\u0435\\u0432\\u043e\\u0435 \\u0438 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u043e\\u0435 \\u0430\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u0435","12":"\\u0418\\u043d\\u0444\\u043e\\u0440\\u043c\\u0430\\u0446\\u0438\\u043e\\u043d\\u043d\\u0430\\u044f \\u0431\\u0435\\u0437\\u043e\\u043f\\u0430\\u0441\\u043d\\u043e\\u0441\\u0442\\u044c","13":"\\u0421\\u0435\\u0442\\u0435\\u0432\\u043e\\u0435 \\u0438 \\u0441\\u0438\\u0441\\u0442\\u0435\\u043c\\u043d\\u043e\\u0435 \\u0430\\u0434\\u043c\\u0438\\u043d\\u0438\\u0441\\u0442\\u0440\\u0438\\u0440\\u043e\\u0432\\u0430\\u043d\\u0438\\u0435","14":"\\u0418\\u043d\\u0444\\u043e\\u0440\\u043c\\u0430\\u0446\\u0438\\u043e\\u043d\\u043d\\u0430\\u044f \\u0431\\u0435\\u0437\\u043e\\u043f\\u0430\\u0441\\u043d\\u043e\\u0441\\u0442\\u044c"},"\\u0424\\u0418\\u041e":{"0":"[\'\\u0424\\u0418\\u041e_335\', \' \\u0424\\u0418\\u041e_449\']","1":"[\'\\u0424\\u0418\\u041e_198\', \' \\u0424\\u0418\\u041e_529\']","2":"[\'\\u0424\\u0418\\u041e_584\', \' \\u0424\\u0418\\u041e_613\']","3":"[\'\\u0424\\u0418\\u041e_412\', \' \\u0424\\u0418\\u041e_635\']","4":"[\'\\u0424\\u0418\\u041e_87\', \' \\u0424\\u0418\\u041e_638\']","5":"[\'\\u0424\\u0418\\u041e_662\', \' \\u0424\\u0418\\u041e_685\']","6":"[\'\\u0424\\u0418\\u041e_289\', \' \\u0424\\u0418\\u041e_657\']","7":"[\'\\u0424\\u0418\\u041e_267\', \' \\u0424\\u0418\\u041e_577\']","8":"[\'\\u0424\\u0418\\u041e_10\', \' \\u0424\\u0418\\u041e_249\']","9":"[\'\\u0424\\u0418\\u041e_171\', \' \\u0424\\u0418\\u041e_228\']","10":"[\'\\u0424\\u0418\\u041e_342\', \' \\u0424\\u0418\\u041e_551\']","11":"[\'\\u0424\\u0418\\u041e_126\', \' \\u0424\\u0418\\u041e_582\']","12":"[\'\\u0424\\u0418\\u041e_138\', \' \\u0424\\u0418\\u041e_643\']","13":"[\'\\u0424\\u0418\\u041e_187\', \' \\u0424\\u0418\\u041e_665\']","14":"[\'\\u0424\\u0418\\u041e_337\', \' \\u0424\\u0418\\u041e_590\']"},"group_result":{"0":0.0,"1":0.0,"2":0.0,"3":0.0,"4":0.0,"5":0.0,"6":0.0,"7":0.0,"8":0.0,"9":0.0,"10":2.0,"11":2.38,"12":4.03,"13":4.34,"14":4.58},"\\u041a\\u043e\\u043b\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043e \\u0441\\u043b\\u043e\\u0436\\u043d\\u044b\\u0445 \\u0437\\u0430\\u0434\\u0430\\u0447":{"0":2.0,"1":2.0,"2":3.0,"3":1.0,"4":3.0,"5":2.0,"6":2.0,"7":3.0,"8":3.0,"9":1.0,"10":0.0,"11":0.0,"12":5.0,"13":0.0,"14":0.0},"\\u041a\\u043e\\u043b\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043e \\u0441\\u0440\\u0435\\u0434\\u043d\\u0438\\u0445 \\u0437\\u0430\\u0434\\u0430\\u0447":{"0":3.0,"1":2.0,"2":3.0,"3":3.0,"4":3.0,"5":1.0,"6":2.0,"7":3.0,"8":3.0,"9":2.0,"10":2.0,"11":2.3368421053,"12":4.0,"13":2.3368421053,"14":2.0},"\\u041a\\u043e\\u043b\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043e \\u043b\\u0435\\u0433\\u043a\\u0438\\u0445 \\u0437\\u0430\\u0434\\u0430\\u0447":{"0":-5.0,"1":-4.0,"2":-6.0,"3":-4.0,"4":-6.0,"5":-3.0,"6":-4.0,"7":-6.0,"8":-6.0,"9":-3.0,"10":1.0,"11":1.2331578947,"12":-2.955,"13":4.1731578947,"14":4.87},"Rating":{"0":1,"1":2,"2":3,"3":4,"4":5,"5":6,"6":7,"7":8,"8":9,"9":10,"10":11,"11":12,"12":13,"13":14,"14":15}}',
          };
        }

        const fix = (data) =>
          Object.entries(JSON.parse(data)).reduce(
            (accumulator, [key, value]) => {
              Object.values(value).forEach((value, idx) => {
                accumulator[idx] ??= {};
                accumulator[idx][key] = value;
              });
              return accumulator;
            },
            [],
          );

        data['contest-name'] = 'AtomSkills 2021';
        data['compes-table'] = fix(data['compes-table']);
        data['commands-info'] = fix(data['commands-info']);

        data['compes-table'].forEach((item) => {
          item['Список компетенций'] = item['Список компетенций']
            .replace(/; $/, '')
            .split('; ');
        });
        data['commands-info'].forEach((item) => {
          item['ФИО'] = JSON.parse(item['ФИО'].replaceAll("'", '"')).map((s) =>
            s.trim(),
          );
        });

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        console.error(error);
        dispatch({ type: 'FETCH_ERROR', payload: error.message });
      }
    };

    fetchData();
  }, []);

  return (
    <ContestContext.Provider value={state}>{children}</ContestContext.Provider>
  );
};
