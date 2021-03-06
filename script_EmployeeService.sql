USE [EmployeeManagementDB]
GO
/****** Object:  Table [tbl_Employees]    Script Date: 12/12/2018 11:19:42 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [tbl_Employees](
	[EmployeeID] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[PresentAddress] [varchar](100) NULL,
	[PermanentAddress] [varchar](100) NULL,
	[PersonlConactNumber] [varchar](15) NULL,
	[OfficeConactNumber] [varchar](15) NULL,
	[PersonalEmaiID] [varchar](50) NULL,
	[OfficeEmaiID] [varchar](50) NULL,
PRIMARY KEY CLUSTERED 
(
	[EmployeeID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  StoredProcedure [sp_EmployeeDelete]    Script Date: 12/12/2018 11:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [sp_EmployeeDelete](@EmployeeID int
		)
AS
BEGIN
DELETE FROM tbl_Employees
WHERE EmployeeID=@EmployeeID

		
		
END
GO
/****** Object:  StoredProcedure [sp_EmployeeInsert]    Script Date: 12/12/2018 11:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [sp_EmployeeInsert](@FirstName varchar(50)
		,@LastName varchar(50)
		,@PermanentAddress varchar(100)
		,@PresentAddress varchar(100)
		,@PersonlConactNumber varchar(15)
		,@OfficeConactNumber varchar(15)
		,@PersonalEmaiID varchar(50)
		,@OfficeEmaiID varchar(50))
AS
BEGIN
INSERT INTO tbl_Employees(	
		
		FirstName
		,LastName
		,PermanentAddress
		,PresentAddress
		,PersonlConactNumber
		,OfficeConactNumber
		,PersonalEmaiID
		,OfficeEmaiID) 
VALUES(
	  @FirstName
	  ,@LastName
	  ,@PermanentAddress
	  ,@PresentAddress
	  ,@PersonlConactNumber
	  ,@OfficeConactNumber
	  ,@PersonalEmaiID
	  ,@OfficeEmaiID	)
		
		
END
GO
/****** Object:  StoredProcedure [sp_EmployeeUpdate]    Script Date: 12/12/2018 11:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [sp_EmployeeUpdate](@EmployeeID int
		
		,@FirstName varchar(50)
		,@LastName varchar(50)
		,@PermanentAddress varchar(100)
		,@PresentAddress varchar(100)
		,@PersonlConactNumber varchar(15)
		,@OfficeConactNumber varchar(15)
		,@PersonalEmaiID varchar(50)
		,@OfficeEmaiID varchar(50))
AS
BEGIN
UPDATE  tbl_Employees SET 
		FirstName=@FirstName
		,LastName=@LastName
		,PresentAddress=@PresentAddress
		,PermanentAddress=@PermanentAddress
		,PersonlConactNumber=@PersonlConactNumber
		,OfficeConactNumber=@OfficeConactNumber
		,PersonalEmaiID=@PersonalEmaiID
		,OfficeEmaiID=@OfficeEmaiID
WHERE EmployeeID=@EmployeeID

		
		
END
GO
/****** Object:  StoredProcedure [sp_GetAllEmployee]    Script Date: 12/12/2018 11:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [sp_GetAllEmployee]
AS
BEGIN
SELECT	EmployeeID
		
		,FirstName
		,LastName
		,PermanentAddress
		,PresentAddress
		,PersonlConactNumber
		,OfficeConactNumber
		,PersonalEmaiID
		,OfficeEmaiID
		 
		
		from tbl_Employees
END
GO
/****** Object:  StoredProcedure [sp_GetEmployeeByID]    Script Date: 12/12/2018 11:19:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [sp_GetEmployeeByID](@EmployeeID int)
AS
BEGIN
SELECT	EmployeeID
		
		,FirstName
		,LastName
		,PermanentAddress
		,PresentAddress
		,PersonlConactNumber
		,OfficeConactNumber
		,PersonalEmaiID
		,OfficeEmaiID 
		
		from tbl_Employees where EmployeeID=@EmployeeID
END
GO
