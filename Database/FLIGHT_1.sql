--------------------------------------------------------
--  DDL for Table FLIGHT
--------------------------------------------------------

  CREATE TABLE "C##FLIGHT"."FLIGHT" 
   (	"ID" NUMBER GENERATED BY DEFAULT AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE  NOKEEP  NOSCALE , 
	"FLIGHTNUMBER" VARCHAR2(255 BYTE), 
	"CAPACITY" NUMBER, 
	"PRICEPERPASSENGER" NUMBER, 
	"DEPARTUREDATE" DATE, 
	"DESTINATIONDATE" DATE, 
	"STATUS" VARCHAR2(50 BYTE), 
	"DISCOUNTVALUE" NUMBER, 
	"AIRLINEID" NUMBER, 
	"DEPARTUREAIRPORTID" NUMBER, 
	"DESTINATIONAIRPORTID" NUMBER, 
	"DEGREEID" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "USERS" ;
