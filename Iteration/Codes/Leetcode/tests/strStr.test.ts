/*
 * Description: 找出字符串中第一个匹配项的下标
 * Url: https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * Created: 2023-03-03 18:58:54
 * Author: van
 * Email : adoerww@gamil.com
 * -----
 * Last Modified: 2023-03-03 18:59:43
 * Modified By: van
 * -----
 * Copyright (c) 2023 https://github.com/vannvan
 */
import strStr from '../strStr'
describe('找出字符串中第一个匹配项的下标 测试', () => {
  it('strStr function', () => {
    expect(strStr('sadbutsad', 'sad')).toEqual(0)
    expect(strStr('leetcode', 'leeto')).toEqual(-1)
  })
})