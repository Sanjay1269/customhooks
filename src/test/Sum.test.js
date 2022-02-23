import sum from "./Sum"
/* test("first test",() => {
    let data=100
    expect(data).toBe(100)
})

it("second test",() => {
    let data=20
    expect(data).toBe(100)
})

describe("Sum function testing 2", () => {
    test("first test",() => {
        expect(sum(2,4)).not.toBe(7)
    })
}) */

describe("sum function test", () => {
    test("object check",() => {
        let data = sum(1,2)
        expect(data).toEqual({name:"sanjay"})
    })
})