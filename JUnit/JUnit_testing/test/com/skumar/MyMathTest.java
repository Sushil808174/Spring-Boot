package com.skumar;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class MyMathTest {
	private MyMath mymath = new MyMath();

	@Test
	void CalculateSumWithThreeElementArray() {
		assertEquals(7, mymath.calculateSum(new int[] {1,2,4}));
	}
	
//	for 0 elements
	@Test
	void CalculateSumWithZeroElementArray() {
		assertEquals(0, mymath.calculateSum(new int[] {}));
	}

}
