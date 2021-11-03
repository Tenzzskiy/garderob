module.exports = {
	sassOptions: {
		prependData: `
      @import "./src/assets/framework/breakpoints";
	  @import "./src/assets/framework/typography";
	  @import "./src/assets/base/variables";
    `
	}
};
