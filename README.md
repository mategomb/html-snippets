# HTML Snippets

HTML imports are really missing from my vanilla JS workflow, so here's my very simple take on it.

The .html snippet files should be in the "snippets" directory, in the root of your project. Like this:
/snippets/\*.html

Elements with the class name "js-snippet-slot" get picked up and replaced with their corresponding snippets according to the value of "data-snippet-name":

```
<any-tag class="js-snippet-slot" data-snippet-name="any-name"></any-tag>
```
