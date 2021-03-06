#
使用 Express.js + mongoDB 建置的記帳本。

https://jin-skill-expense-tracker.herokuapp.com/

![Expense_Tracker](https://raw.githubusercontent.com/JIN-SKILL/Example_Image/main/Expense_Tracker.png)

## 網站功能
+ 列出所有支出項目
+ 統計出各類別支出總金額
+ 新增/修改/刪除一筆資料
+ 可透過篩選類別查看該類別的總支出


## 使用工具
+ Node.js 14.15.3
+ Express 4.17.1
+ Express-Handlebars: 5.2.0
+ body-parser 1.19.0
+ mongoose 5.11.11
+ method-override 3.0.0
+ nodemon 2.0.6
+ Bootstrap 5.0.0
+ popper 2.5.4
+ font-awesome 5.15.1

## 安裝
1. 開啟終端機 (Terminal) 並前往安裝路徑的資料夾內輸入指令
    ```
    git clone https://github.com/JIN-SKILL/Expense_Tracker.git
    ```
2. 進入專案資料夾
    ```
    cd Expense_Tracker
    ```
3. 安裝所需套件
	```
    npm i
    ```
4. 匯入測試資料
	```
    npm run seed
    ```
5. 待終端機 (Terminal) 顯示以下內容
	```
    mongoDB connected.
    Completed seed loading.
    Datebase connection close.
    ```
6. 啟用 localhost 伺服器
	```
    npm run dev
    ```
7. 終端機 (Terminal) 顯示以下內容，即可在瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 使用網站
	```
    The server is listening on http://localhost:3000
    mongoDB connected.
    ```
