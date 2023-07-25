package com.skumar.mockito.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class SomeBusinessImplMockTest {
	
	
	@Mock
	private DataService dataServiceMock;
	
	@InjectMocks
	private SomeBusinessImpl someBusinessImpl;

	@Test
	void findTheGreatestFromAll_basicScenario() {
		when(dataServiceMock.retrieveData()).thenReturn(new int[] {23,4,56}).thenReturn(new int[] {67,78,90});
		assertEquals(56, someBusinessImpl.findGreatestElement());
		assertEquals(90, someBusinessImpl.findGreatestElement());
	}
	@Test
	void findTheGreatestFromAll_OneValue() {
		DataService dataServiceMock  = mock(DataService.class);
		
		when(dataServiceMock.retrieveData()).thenReturn(new int[] {56});
		
		
		SomeBusinessImpl someBusinessImpl = new SomeBusinessImpl(dataServiceMock);
		
		int result = someBusinessImpl.findGreatestElement();
		assertEquals(56, result);
	}
	
	@Test
	void findTheGreatestFromAll_WithEmptyArray() {
		when(dataServiceMock.retrieveData()).thenReturn(new int[] {});
		assertEquals(Integer.MIN_VALUE, someBusinessImpl.findGreatestElement());
	}
	

}

