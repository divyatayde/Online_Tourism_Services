package com.app.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class SearchPackageDto {
	private String location;
	private Date fromDate;
	private Date toDate;
	private int adultCount;
	private int childCount;
	private boolean packageType;
}
