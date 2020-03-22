1. Border-radius

    >Dùng khi muốn bo tròn các góc ở button.

    `border-radius: 999px;`

2. Image background responsive

    `padding-bottom: 70%;`

3. Selector :not()

    ` .nav-item:not(:last-child) {
      border-right: 1px solid black;
      }
    `
4. Select Items Using Negative nth-child.

    > :nth-child(-n + 5): Chọn phần tử từ 1 đến 5
    > :not(:nth-child(-n + 5)): Chọn tất cả phần tử ngoại trừ từ 1 đến 5
    > :nth-child(n + 3):nth-child(-n + 7): Chọn phần tử từ 3 đến 7

5. Equal-Width Table Cells.
   > chia đều width cho các cột trong table

    `table { table-layout: fixed; }`

6. Avoid Collapsing Margins
   > A có margin-bottom là 30px, B có margin-top là 20px. Vậy thì khoảng cách giữa 2 khối này sẽ là 30px, chứ không phải là 50px
7. Use Pointer Events to Control Mouse Events. 
   `pointer-events: none;`
   > luu y la khi sung voi SVG
8. Remove khoảng cách thừa ở dưới image
   `img {
  vertical-align: middle;
}`
9. selectors tới parent hay previous element
    >Key ở đây là: set pointer-events: none cho parent element (scope mà bạn target tới) và reset pointer-events: auto cho descendant element (element mà bạn muốn hover lên nó)
10. Flexbox với margin-left: auto
11. Style CSS cho input placeholder với :placeholder-shown [Not Cross-Browsers
12. 