/*
 * Description: 36：有效的数独
 * Url: https://leetcode.cn/problems/valid-sudoku/
 * Created: 2023-04-22 00:13:43
 * Author: van
 * Email : adoerww@gamil.com
 * -----
 * Last Modified: 2023-04-22 00:14:09
 * Modified By: van
 * -----
 * Copyright (c) 2023 https://github.com/vannvan
 */
import isValidSudoku from '../isValidSudoku'
describe('有效的数独 测试', () => {
  it('isValidSudoku function', () => {
    expect(
      isValidSudoku([
        ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ])
    ).toEqual(true)
    expect(
      isValidSudoku([
        ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
        ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
        ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
        ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
        ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
        ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
        ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
        ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
        ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
      ])
    ).toEqual(false)
  })
})