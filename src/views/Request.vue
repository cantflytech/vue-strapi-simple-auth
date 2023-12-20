<template>
  <div class="container">
      <h1>Votre questionaire</h1>

      <!-- Question 1 -->
      <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q1">Question 1: Comment vous sentez-vous actuellement au travail?</label>
            <div class="range-container">
              <span class="emoji emoji-bad">😞</span>
              <input type="range" class="form-control range-emoji" id="Q1" min="0" max="10" v-model="Q1">
              <span class="emoji emoji-good">😃</span>
            </div>
          </div>
        </div>
       </div>
        <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q2">Question 2: Êtes-vous satisfait de votre travail actuel ?</label>
            <div class="emoji-selection">
              <span
                class="emoji emoji-oui"
                :class="{ 'selected': Q2 === 'true' }"
                @click="Q2 = 'true'"
              >
                😃
              </span>
              <span
                class="emoji emoji-non"
                :class="{ 'selected': Q2 === 'false' }"
                @click="Q2 = 'false'"
              >
                😞
              </span>
            </div>
          </div>
       
      </div>
    </div>
      <!-- Question 3 -->
      <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q3">Question 3: À quel point trouvez-vous l'équilibre entre travail et vie personnelle satisfaisant?</label>
            <div class="range-container">
              <span class="emoji emoji-bad">😞</span>
              <input type="range" class="form-control range-emoji" id="Q3" min="0" max="10" v-model="Q3">
              <span class="emoji emoji-good">😃</span>
            </div>
          </div>
        </div>
        </div>
        <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q4">Question 4: Est-ce que votre travail affecte négativement votre vie personnelle (temps libre, famille, loisirs) ?</label>
            <div class="emoji-selection">
              <span
                class="emoji emoji-oui"
                :class="{ 'selected': Q4 === 'true' }"
                @click="Q4 = 'true'"
              >
                😃
              </span>
              <span
                class="emoji emoji-non"
                :class="{ 'selected': Q4 === 'false' }"
                @click="Q4 = 'false'"
              >
                😞
              </span>
            
          </div>
        </div>
      </div>
    </div>

      <!-- Question 5 -->
      <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q5">Question 5: Comment évaluez-vous vos relations avec vos collègues?</label>
            <div class="range-container">
              <span class="emoji emoji-bad">😞</span>
              <input type="range" class="form-control range-emoji" id="Q5" min="0" max="10" v-model="Q5">
              <span class="emoji emoji-good">😃</span>
            </div>
          </div>
        </div>
        <!-- ... Repeat the same structure for Questions 6 to 10 ... -->
      </div>

      <!-- Question 6 -->
      <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q6">Question 6: Comment gérez-vous le stress au travail?</label>
            <div class="range-container">
              <span class="emoji emoji-bad">😞</span>
              <input type="range" class="form-control range-emoji" id="Q6" min="0" max="10" v-model="Q6">
              <span class="emoji emoji-good">😃</span>
            </div>
          </div>
        </div>
        <!-- ... Repeat the same structure for Questions 7 to 10 ... -->
      </div>

      <!-- Question 7 -->
      <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q7">Question 7: Sentez-vous que la direction est accessible et à l'écoute?</label>
            <div class="emoji-selection">
              <span
                class="emoji emoji-oui"
                :class="{ 'selected': Q7 === 'true' }"
                @click="Q7 = 'true'"
              >
                😃
              </span>
              <span
                class="emoji emoji-non"
                :class="{ 'selected': Q7 === 'false' }"
                @click="Q7 = 'false'"
              >
                😞
              </span>
            </div>
          </div>
        </div>
        <!-- ... Repeat the same structure for Questions 8 to 10 ... -->
      </div>

      <!-- Question 8 -->
      <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q8">Question 8: Êtes-vous satisfait des opportunités de formation et de développement professionnel?</label>
            <div class="range-container">
              <span class="emoji emoji-bad">😞</span>
              <input type="range" class="form-control range-emoji" id="Q8" min="0" max="10" v-model="Q8">
              <span class="emoji emoji-good">😃</span>
            </div>
          </div>
        </div>
        <!-- ... Repeat the same structure for Questions 9 and 10 ... -->
      </div>

      <!-- Question 9 -->
      <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q9">Question 9: Êtes-vous satisfait de vos avantages sociaux et de votre rémunération?</label>
            <div class="emoji-selection">
              <span
                class="emoji emoji-oui"
                :class="{ 'selected': Q9 === 'true' }"
                @click="Q9 = 'true'"
              >
                😃
              </span>
              <span
                class="emoji emoji-non"
                :class="{ 'selected': Q9 === 'false' }"
                @click="Q9 = 'false'"
              >
                😞
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Question 10 -->
      <div class="row">
        <div class=" mb-4 rounded-box">
          <div class="form-group">
            <label for="Q10" class="a">Question 10: Comment vous sentez-vous physiquement et mentalement actuellement?</label>
            <div class="range-container">
              <span class="emoji emoji-bad">😞</span>
              <input type="range" class="form-control range-emoji" id="Q10" min="0" max="10" v-model="Q10">
              <span class="emoji emoji-good">😃</span>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button @click="request">Envoyer</button>
      </div>
   
  </div>
</template>

<style>

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .range-container {
    display: flex;
    align-items: center;
    width: 50%;
    margin: 0 auto;
  }
  .rounded-box {
    background-color: #E8F0FE;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    font-family: Arial, sans-serif; /* You can replace this with your preferred font-family */
  }
  .emoji {
    font-size: 1.5em;
    margin: 0 5px; /* Add margin to separate emojis from the range input */
  }

  .emoji-bad {
    flex: 1; /* Expand to the left */
  }

  .emoji-good {
    flex: 1; /* Expand to the right */
  }


  .emoji {
    font-size: 1.5em;
    margin: 0 0px; /* Add margin to separate emojis */
    cursor: pointer; /* Add cursor pointer for clickability */
    border: 2px solid transparent; /* Add a transparent border */
  }

  .emoji.selected {
    border: 2px solid green;
    border-radius: 60%; /* Add a green border for selected "Oui" emoji */
  }
  button {
  background-color: #FDA62F;
  border: 1px solid #FDA62F; /* Specify border style as 'solid' */
  padding: 10px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 1.5em;
  color: white;
  border-radius: 5px !important; /* Add border radius */
  width: 30%; /* Make the button extend its width to both left and right */
}
  h1{
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 1.5em;
    
    padding-bottom: 20px;
  }
  
</style>


<script>
import axios from 'axios'
import { mapGetters } from "vuex";
import { mapState, mapActions } from 'vuex';
export default {
  name: 'request',
  data() {
    return {
      Q1: 0,
      Q2: '',
      Q3: 0,
      Q4: '',
      Q5: 0,
      Q6: 0,
      Q7: '',
      Q8: 0,
      Q9: '',
      Q10: 0,
      token: '8ee092f7f3a9e806fe1d580bb0f0e399f475c059e56a63e36db862883349322fd3cc863678f988df8fd3a89daf726c632b14964e87ef90fa76b8bbe32fc72f620336227c4929821d2136286439ddfb2ae883f360563cdf50488d74d8287a51bebeac29bd19c4f4843dc0ff87d613448cc9595c0341e5ceaed67f5d10521f08e3'
    }
    
  },
  computed: {
    ...mapState(['usedata']),
  },
  methods: {

    request() {
      const data = {
      data: {
        Q1: this.Q1,
        Q2: this.Q2 === 'true',
        Q3: this.Q3,
        Q4: this.Q4 === 'true',
        Q5: this.Q5,
        Q6: this.Q6,
        Q7: this.Q7 === 'true',
        Q8: this.Q8,
        Q9: this.Q9 === 'true',
        Q10: this.Q10
      }
    };
    console.log(this.usedata),
    console.log("Data being sent:", JSON.stringify(data, null, 2));
    
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:1337/api/requests', data, {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      })
      .then(response => {
        console.log("Response received:", JSON.stringify(response.data, null, 2));
        resolve(response.data);
      })
      .catch(error => {
        console.error(error);
        reject(error);
      });
    });
    }
  },


  
}

</script>