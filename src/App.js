import React from "react";
import npStarIcon from "./Assets/icons/ic-np-star.svg";
import criminalTrafficIcon from "./Assets/icons/ic-criminalTrafficLawManuals.svg";
import firearmsIcon from "./Assets/icons/ic-firearmsWeapons.svg";
import pubTypeIcon from "./Assets/icons/ic-pubType.svg";
import reportWritingCourtTestimony from "./Assets/icons/ic-reportWritingCourtTestimony.svg";

const App = () => {
  // Define your list of items
  const items = [
    { icon: npStarIcon, text: "Exclusive & Concise Content" },
    { icon: criminalTrafficIcon, text: "Trusted & Certified Publications" },
    { icon: npStarIcon, text: "Robust Digital Offering" },
    { icon: firearmsIcon, text: "White Glove Service" },
    { icon: pubTypeIcon, text: "Affordable Pricing" },
    { icon: reportWritingCourtTestimony, text: "Training & Education" },
  ];

  return (
    // Create a background color for the entire page, any color doesn't matter
    <div>
      {/* Center the content for the following section */}
      <div className="">
        {/* Make the text larger for the next div only */}
        <div className="font-bold">Serve the community with confidence</div>
        <div className="text-base">
          As your go-to legal publishing partner for law enforcement, we provide
          unparalleled value.
        </div>
      </div>

      <div className="flex justify-center pb-20">
        <div className="flex">
          {/* Loop through the items array and render each one */}
          {/* Candidates should add the mapping here */}
          {/* Each item should display an icon and text */}
        </div>
      </div>
    </div>
  );
};

export default App;
