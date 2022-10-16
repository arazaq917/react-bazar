import { Box } from "@mui/material";
import { H3 } from "components/Typography";
import React from "react"; // ======================================================

// ======================================================
const ProductDescription = () => {
  return (
    <Box>
      <H3 mb={2}>Specification:</H3>
      <Box>
          1. Silver galvanized steel Tripod Lamp, 11" tall by 7" wide (at shade) with on/off toggle switch on cord. <br />
          2. Shades are high-res printed Polyester with non-fade, archival inks (indoor use only). <br />
          3. All our lamps are UL or ETL listed or use UL components. <br />
          4. Lamps are 110V, and require a medium (Edison) bulb NOT SUPPLIED. Recommended wattage is 13Watts CFL, 60W incandescent or LED equivalent. <br />
          5. Lamps come with a 1 year manufacturer's warranty. <br />
          6. All shades and Tripod bases are made in Los Angeles. Tall bases are imported. Packaging is also made in the USA.  <br />
      </Box>
    </Box>
  );
};

export default ProductDescription;
