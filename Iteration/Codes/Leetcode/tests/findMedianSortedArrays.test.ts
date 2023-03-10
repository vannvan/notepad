/*
 * Description: 4：寻找两个正序数组的中位数
 * Url: https://leetcode.cn/problems/median-of-two-sorted-arrays/
 * Created: 2023-03-10 17:46:39
 * Author: van
 * Email : adoerww@gamil.com
 * -----
 * Last Modified: 2023-03-03 11:10:10
 * Modified By: van
 * -----
 * Copyright (c) 2023 https://github.com/vannvan
 */
import findMedianSortedArrays from "../findMedianSortedArrays";
describe("寻找两个正序数组的中位数 测试", () => {
  it("findMedianSortedArrays function", () => {
    expect(findMedianSortedArrays([1, 3], [2]));
    expect(findMedianSortedArrays([1, 2], [3, 4]));
  });
});
