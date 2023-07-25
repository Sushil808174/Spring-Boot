package com.skumar;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;

class MyAssertTest {

	List<String> list = Arrays.asList("AWS","Spring Boot","unittest");
	@Test
	void test() {
		boolean checkForTrue = list.contains("AWS");
		boolean test2 = list.contains("Abc");
//		assertEquals(true, checkForTrue);
		assertTrue(checkForTrue);
		assertFalse(test2);
//		assertNull,assertNotNull
		assertArrayEquals(new int[] {1,3}, new int[] {1,3},"Result is not matching");
		assertEquals(3, list.size());
	}

}
