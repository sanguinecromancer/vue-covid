<template>

  <div class="container">
  <p>zeynepaykal@gmail.com</p>
    <h3>COVID-19 Data from USA:</h3>
    <table class="table-striped" id="covids"  style="width: 100%; border-collapse: collapse;;">
      <thead>
        <tr>
          <th scope="col">State</th>
          <th scope="col">Total deaths</th>
          <th scope="col">Currently in ICU</th>
          <th scope="col">Negative results</th>
          <th scope="col">Currently hospitalized</th>
          <th scope="col">Total recovered</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="covid in covids" v-bind:key="covid.state"> 
         
          <td style="font-weight: bold">{{ covid.state}}</td>
          <td style="color: #b30000; font-weight: bold">{{ covid.death}}</td>
          <td>{{ covid.inIcuCurrently}}</td>
          <td>{{ covid.negative}}</td>
          <td>{{ covid.hospitalizedCurrently}}</td>
          <td>{{ covid.recovered}}</td>
        </tr>
      </tbody>
    </table> 
  </div> 
</template>

<script>
  import axios from 'axios';  
  
  export default {
    name: 'Covid',
    data() {
      return {
        covids: null,
      };
    },
    created: function() {
      axios
       // .get('https://api.covidtracking.com/v1/states/ca/current.json')
       .get('https://api.covidtracking.com/v1/states/current.json')
        .then(res => {
          this.covids = res.data;
         console.log(this.covids);


          for (let x of this.covids) {
              switch (x.state)  {
            case "AL":
                x.state = "Alabama";
                break;

            case "AK":
                x.state = "Alaska";
                break;

            case "AS":
                x.state = "American Samoa";
                break;

            case "AZ":
                x.state = "Arizona";
                break;

            case "AR":
                x.state = "Arkansas";
                break;

            case "CA":
                x.state = "California";
                break;

            case "CO":
                x.state = "Colorado";
                break;

            case "CT":
                x.state = "Connecticut";
                break;

            case "DE":
                x.state = "Delaware";
                break;

            case "DC":
                x.state = "District Of Columbia";
                break;

            case "FM":
                x.state = "Federated States Of Micronesia";
                break;

            case "FL":
                x.state = "Florida";
                break;

            case "GA":
                x.state = "Georgia";
                break;

            case "GU":
                x.state = "Guam";
                break;

            case "HI":
                x.state = "Hawaii";
                break;

            case "ID":
                x.state = "Idaho";
                break;

            case "IL":
                x.state = "Illinois";
                break;

            case "IN":
                x.state = "Indiana";
                break;

            case "IA":
                x.state = "Iowa";
                break;

            case "KS":
                x.state = "Kansas";
                break;

            case "KY":
                x.state = "Kentucky";
                break;

            case "LA":
                x.state = "Louisiana";
                break;

            case "ME":
                x.state = "Maine";
                break;

            case "MH":
                x.state = "Marshall Islands";
                break;

            case "MD":
                x.state = "Maryland";
                break;

            case "MA":
                x.state = "Massachusetts";
                break;

            case "MI":
                x.state = "Michigan";
                break;

            case "MN":
                x.state = "Minnesota";
                break;

            case "MS":
                x.state = "Mississippi";
                break;

            case "MO":
                x.state = "Missouri";
                break;

            case "MT":
                x.state = "Montana";
                break;

            case "NE":
                x.state = "Nebraska";
                break;

            case "NV":
                x.state = "Nevada";
                break;

            case "NH":
                x.state = "New Hampshire";
                break;

            case "NJ":
                x.state = "New Jersey";
                break;

            case "NM":
                x.state = "New Mexico";
                break;

            case "NY":
                x.state = "New York";
                break;

            case "NC":
                x.state = "North Carolina";
                break;

            case "ND":
                x.state = "North Dakota";
                break;

            case "MP":
                x.state = "Northern Mariana Islands";
                break;

            case "OH":
                x.state = "Ohio";
                break;

            case "OK":
                x.state = "Oklahoma";
                break;

            case "OR":
                x.state = "Oregon";
                break;

            case "PW":
                x.state = "Palau";
                break;

            case "PA":
                x.state = "Pennsylvania";
                break;

            case "PR":
                x.state = "Puerto Rico";
                break;

            case "RI":
                x.state = "Rhode Island";
                break;

            case "SC":
                x.state = "South Carolina";
                break;

            case "SD":
                x.state = "South Dakota";
                break;

            case "TN":
                x.state = "Tennessee";
                break;

            case "TX":
                x.state = "Texas";
                break;

            case "UT":
                x.state = "Utah";
                break;

            case "VT":
                x.state = "Vermont";
                break;

            case "VI":
                x.state = "Virgin Islands";
                break;

            case "VA":
                x.state = "Virginia";
                break;

            case "WA":
                x.state = "Washington";
                break;

            case "WV":
                x.state = "West Virginia";
                break;

            case "WI":
                x.state = "Wisconsin";
                break;

            case "WY":
                x.state = "Wyoming";
                break;
        }

          }
        })
    }
  }
</script><style>
  h3 {
    margin-bottom: 5%;
  }
</style>

