package com.skumar.mockito.service;

public class SomeBusinessImpl {

	private DataService dataService;
	
	public SomeBusinessImpl(DataService dataService) {
		super();
		this.dataService=dataService;
	}
	
	public int findGreatestElement() {
		int greatestNumber = Integer.MIN_VALUE;
		int[] values = dataService.retrieveData();
		for(int val : values) {
			if(val > greatestNumber) {
				greatestNumber = val;
			}
		}
		return greatestNumber;
	}
	
}

interface DataService{
	int[] retrieveData();
}
