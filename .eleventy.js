const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addFilter("formattedDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addPassthroughCopy('css')
    return {
      passthroughFileCopy: true
    }
}