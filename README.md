# reselect-demo
To compare filtering/sorting data with "Reselect" and normal function

## 什麼是Reselect?
參考[Computing Derived Data](http://redux.js.org/docs/recipes/ComputingDerivedData.html)

## Why Reselect?
個人認為reducer能單純就盡量單純，所以filter/paginate/sort操作我會偏向在連接原件時才做

但問題在於每次state更新就需要重新計算一次顯示資料，如:當router進行上/下一頁的操作時，元件又需要重新計算顯示資料，顯然很不符合效益

Reselect則可記憶前一次state與下一次state是否一致，若一致則返回前一次計算的結果，並且可透過組合selector(如組合reducer使用combineReducer)的方式儘計算有變化state的selector

這樣做可幫我們簡化reducer，並且不多做多餘的計算

## Available Scripts

###`npm run result`
比較Reselect及普通的function取得資料所需時間

##Discussion
希望這邊有幫助到大家，如果文中有任何可以改善或錯誤的地方還麻煩大家一起來討論，並且也可以幫助我更正觀念，感謝!
