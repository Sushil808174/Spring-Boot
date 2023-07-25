package com.skumar.mockito.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class SomeBusinessImplStubTest {

	@Test
	void findTheGreatestFromAll_basicScenario() {
		DataServiceImpl dataServiceImpl = new DataServiceImpl();
		SomeBusinessImpl someBusinessImpl = new SomeBusinessImpl(dataServiceImpl);
		int result = someBusinessImpl.findGreatestElement();
		assertEquals(23, result);
	}
	@Test
	void findTheGreatestWithOneElement() {
		DataService dataServiceImpl = new DataServiceImpl2();
		SomeBusinessImpl someBusinessImpl = new SomeBusinessImpl(dataServiceImpl);
		int result = someBusinessImpl.findGreatestElement();
		assertEquals(55, result);
	}

}

class DataServiceImpl implements DataService{

	@Override
	public int[] retrieveData() {
		return new int[] {23,4,5};
	}
	
}
class DataServiceImpl2 implements DataService{
	
	@Override
	public int[] retrieveData() {
		return new int[] {55};
	}
	
}
