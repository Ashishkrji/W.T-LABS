To display two different web pages side by side on a single webpage (horizontally), you can use HTML and CSS. This layout can be achieved using frames or iframes.

Below is an example of how you can display two different web pages side by side using <iframe> elements. <iframe> is used to embed another HTML page within the current page.

Example HTML Code:

Explanation of Code:

1. HTML Structure:
o The <div class="container"> element acts as a container for the two <iframe> elements.
o Each <iframe> element is used to embed another webpage (specified by the src attribute). In this case, I have used "https://www.example.com" and "https://www.example.org" as placeholder URLs. You should replace them with the URLs of the actual pages you want to display.

2. CSS Styling:
o The .container class uses display: flex; to align the iframes horizontally in a row.
o The iframe elements are styled to take up 48% of the container width, leaving space between the two iframes.
o A margin-right: 2%; is applied to the first iframe to create some space between the two iframes.
o For smaller screens (below 768px width), the layout changes to stack the frames vertically using flex-direction: column;, and each iframe will take up 100% of the width with margin-bottom added to separate them.

3. Responsive Design:
o The page uses a media query to adapt the layout on smaller screens. When the viewport is less than 768px, the layout will change from two horizontally aligned iframes to a vertically stacked layout.
o Each iframe becomes 100% width and has a margin for spacing.

Customization:
• You can change the URLs inside the src attribute to point to any web pages you want to display side by side.
• If you want to show local HTML files, simply replace the src URL with the path to your local HTML files. For example:

html
Copy
<iframe src="page1.html" title="Page 1"></iframe>
<iframe src="page2.html" title="Page 2"></iframe>

Conclusion:
This simple HTML and CSS layout will display two different web pages side by side on a single web page using iframes. The layout is responsive, meaning it will adapt to smaller screens by stacking the iframes vertically when necessary.