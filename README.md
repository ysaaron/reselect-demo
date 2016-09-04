# reselect-demo
To compare filtering/sorting data with "Reselect" and normal function

## What is Reselect?
According to [Computing Derived Data](http://redux.js.org/docs/recipes/ComputingDerivedData.html)

## Why Reselect?
In my opinion, reducer have to be simple and pure, thus I'll do filter/paginate/sort when the state is mapped to component.

But the partial state is updated, the visible data will recalculate again.

For example, when user back to previous page, the component will recalculate the visible data from state, it seems to be wasted.

Reselect allow you to split state into partial selector and combine all selectors to be a root selector, the selector will compare the state is changed, and decide whether the data need to be recalculated.

It does less caculation and makes reducer simpler.

## Available Scripts

###`npm run result`
To compare getting visible data between Reselect and normal function.

##Discussion
If the content has not fluent or incorrect in somwhere, please let me know.

Thank for your reading.
