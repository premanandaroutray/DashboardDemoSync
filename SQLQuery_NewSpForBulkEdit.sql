USE [EmployeeManagementDB]
GO

/****** Object:  StoredProcedure [dbo].[sp_EmployeeInsertBulk]    Script Date: 12/17/2018 4:04:02 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_EmployeeInsertBulk](@bulkdata  EmployeeType Readonly)
AS
BEGIN

INSERT INTO tbl_Employees(FirstName
						 ,LastName
						 ,PresentAddress
						 ,PermanentAddress
						 ,PersonlConactNumber
						 ,OfficeConactNumber
						 ,PersonalEmaiID
						 ,OfficeEmaiID)
			SELECT * FROM @bulkdata
END
GO


/****** Object:  StoredProcedure [dbo].[sp_EmployeeInsertBulkJson]    Script Date: 12/17/2018 4:04:43 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[sp_EmployeeInsertBulkJson](@employees NVARCHAR(max))
AS BEGIN
INSERT INTO tbl_Employees(FirstName
						,LastName
						,PermanentAddress
						,PresentAddress
						,PersonlConactNumber
						,OfficeConactNumber
						,PersonalEmaiID
						,OfficeEmaiID)
SELECT FirstName,LastName,PermanentAddress,PresentAddress,PersonlConactNumber
,OfficeConactNumber,PersonalEmaiID,OfficeEmaiID
FROM OPENJSON(@employees)
WITH (FirstName varchar(50)
	 ,LastName varchar(50)
	 ,PermanentAddress varchar(100) 
	 ,PresentAddress varchar(100)
	 ,PersonlConactNumber varchar(15)
	 ,OfficeConactNumber varchar(15)
	 ,PersonalEmaiID varchar(50)
	 ,OfficeEmaiID varchar(50)	)
END
GO

