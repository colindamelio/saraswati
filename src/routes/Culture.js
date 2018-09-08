import React, {Component, Fragment} from "react";
import SplitHero from "components/SplitHero";
import Touts from "components/Touts";
import ganesha from "media/statue-ganesha.jpg";
import keeper from "media/temple-keeper.jpg";

export default class Culture extends Component {
  render() {
    const sampleContent1 = [
      {
        title: "Authentic Balinese Experiences",
        description:
          "Bali has a distinctive aura like no other place in the world. With lush landscapes, beautiful beaches and ancient temples, your web development education is paired with an exciting discovery of this Indonesian island. Our retreats include cultural expeditions, traditional Balinese cuisine, and the opporunity for you to curate a list of activities that will nourish your mind, body and spirit.",
        ctas: [
          {
            title: "Apply Now"
          }
        ]
      }
    ];

    const sampleContent2 = [
      [
        {
          title: "Day trips to Ubud",
          description:
            "Known as a center for traditional crafts and dance, the surrounding rainforest and terraced rice paddies, dotted with Hindu temples and shrines, are among Bali's most breathtaking landscapes. Your retreat fee includes: River Rafting down the Ayung River, a Purifying Ceremony at Tirtha Empul Temple, Artisan Village tours, and the famous Monkey Forest."
        }
      ],
      [
        {
          title: "Traditional Balinese Cooking",
          description:
            "Enjoy a 5-hour traditional Balinese cooking class at Tresna Bali Cooking School."
        }
      ],
      [
        {
          title: "Mind, Body & Spirit",
          description: "We believe balance is the key to your success."
        }
      ]
    ];

    const sampleContent3 = [
      {
        title: "Join one of our upcoming retreats!",
        description:
          "We accept a limited number of students each retreat to ensure you're provided quality training. Reserve your spot today!",
        ctas: [
          {
            title: "Apply Now"
          }
        ]
      },
      {
        description: "Curious about our curriculum? Click here to learn more."
      }
    ];

    return (
      <Fragment>
        <SplitHero
          id="balineseExperiences"
          src={ganesha}
          content={sampleContent1}
          secondary
        />
        <Touts id="activities" content={sampleContent2} />
        <SplitHero id="join" src={keeper} content={sampleContent3} secondary />
      </Fragment>
    );
  }
}
