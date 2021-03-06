import axios from 'axios';

export default {
  // Gets all questions with a topic id of (id)
  getQuestion: function (id) {
    return axios.get("/api/quiz/" + id);
  },

  // Gets all answers with a question id of (id)
  getAnswers: function (id) {
    return axios.get("/api/quiz/" + id);
  },

  //save scores
  saveScores: function (scores) {
    console.log(scores);
    return axios.post("/api/scores", scores);
  },

	getScores: function(id) {
		return axios.get('/api/scores/' + id);
	}
	
};
