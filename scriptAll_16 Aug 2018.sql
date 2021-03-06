USE [DashboardDB]
GO
/****** Object:  Table [dbo].[tbl_Component]    Script Date: 8/16/2018 1:17:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Component](
	[ComponentID] [int] IDENTITY(1,1) NOT NULL,
	[ComponentName] [varchar](50) NULL,
	[DateAdded] [datetime] NULL,
	[DateModified] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_Component] PRIMARY KEY CLUSTERED 
(
	[ComponentID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Menu]    Script Date: 8/16/2018 1:17:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Menu](
	[MenuID] [int] IDENTITY(1,1) NOT NULL,
	[MenuName] [varchar](50) NULL,
	[Component] [varchar](50) NULL,
	[RouterLink] [varchar](50) NULL,
	[ParentID] [int] NULL,
	[DateAdded] [datetime] NULL,
	[DateModified] [datetime] NULL,
	[IsDeleted] [bit] NULL,
	[MenuIcon] [varchar](50) NULL,
 CONSTRAINT [PK_tbl_Menu] PRIMARY KEY CLUSTERED 
(
	[MenuID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Project]    Script Date: 8/16/2018 1:17:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Project](
	[ProjectID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectName] [varchar](100) NULL,
	[DateAdded] [datetime] NULL,
	[DateModified] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_Project] PRIMARY KEY CLUSTERED 
(
	[ProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_ProjectRoleMapping]    Script Date: 8/16/2018 1:17:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_ProjectRoleMapping](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectID] [int] NULL,
	[RoleID] [int] NULL,
	[DateAdded] [datetime] NULL,
	[DateModified] [datetime] NULL,
	[IsDeleted] [bit] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_Role]    Script Date: 8/16/2018 1:17:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_Role](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [varchar](50) NULL,
	[DateAdded] [datetime] NULL,
	[DateModified] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_Role] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_RoleMenuMapping]    Script Date: 8/16/2018 1:17:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_RoleMenuMapping](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[MenuID] [int] NULL,
	[RoleID] [int] NULL,
	[DateAdded] [datetime] NULL,
	[DateModified] [datetime] NULL,
	[IsDeleted] [bit] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_TaskDetails]    Script Date: 8/16/2018 1:17:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_TaskDetails](
	[TaskID] [int] IDENTITY(1,1) NOT NULL,
	[TaskName] [varchar](100) NULL,
	[ProjectID] [int] NULL,
	[HoursSpend] [decimal](18, 2) NULL,
	[RoleID] [int] NULL,
	[DateAdded] [datetime] NULL,
	[DateModified] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_TaskDetails] PRIMARY KEY CLUSTERED 
(
	[TaskID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_User]    Script Date: 8/16/2018 1:17:15 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_User](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserCode] [varchar](50) NULL,
	[UserName] [varchar](50) NOT NULL,
	[Password] [varchar](100) NOT NULL,
	[RoleID] [int] NULL,
	[DateAdded] [datetime] NULL,
	[DateModified] [datetime] NULL,
	[IsDeleted] [bit] NULL,
	[UserDetailsID] [int] NULL,
 CONSTRAINT [PK_tbl_User] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tbl_UserDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tbl_UserDetails](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[SSOID] [varchar](50) NOT NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[Gender] [varchar](15) NULL,
	[Phone] [varchar](20) NULL,
	[ProfEmailID] [varchar](50) NULL,
	[PersonalEmailID] [varchar](50) NULL,
	[ReportingManagerID] [int] NULL,
	[RoleID] [int] NULL,
	[DateAdded] [datetime] NULL,
	[DateModified] [datetime] NULL,
	[IsDeleted] [bit] NULL,
 CONSTRAINT [PK_tbl_UserDetails] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tbl_Menu] ON 

INSERT [dbo].[tbl_Menu] ([MenuID], [MenuName], [Component], [RouterLink], [ParentID], [DateAdded], [DateModified], [IsDeleted], [MenuIcon]) VALUES (2, N'Project', N'Project', N'projects', 0, CAST(N'2018-08-08T22:37:40.450' AS DateTime), CAST(N'2018-08-08T22:37:40.450' AS DateTime), 0, N'<i class="fa fa-home" aria-hidden="true"></i>')
INSERT [dbo].[tbl_Menu] ([MenuID], [MenuName], [Component], [RouterLink], [ParentID], [DateAdded], [DateModified], [IsDeleted], [MenuIcon]) VALUES (3, N'User Details', N'User Details', N'userdetails', 0, CAST(N'2018-08-08T22:38:45.843' AS DateTime), CAST(N'2018-08-08T22:38:45.843' AS DateTime), 0, NULL)
INSERT [dbo].[tbl_Menu] ([MenuID], [MenuName], [Component], [RouterLink], [ParentID], [DateAdded], [DateModified], [IsDeleted], [MenuIcon]) VALUES (4, N'Task', N'Task', N'taskDetails', 0, CAST(N'2018-08-08T22:39:18.927' AS DateTime), CAST(N'2018-08-08T22:39:18.927' AS DateTime), 0, NULL)
INSERT [dbo].[tbl_Menu] ([MenuID], [MenuName], [Component], [RouterLink], [ParentID], [DateAdded], [DateModified], [IsDeleted], [MenuIcon]) VALUES (5, N'User', N'User', N'users', 0, CAST(N'2018-08-08T22:40:05.310' AS DateTime), CAST(N'2018-08-08T22:40:05.310' AS DateTime), 0, NULL)
INSERT [dbo].[tbl_Menu] ([MenuID], [MenuName], [Component], [RouterLink], [ParentID], [DateAdded], [DateModified], [IsDeleted], [MenuIcon]) VALUES (6, N'Home', N'Home', N'home', 0, CAST(N'2018-08-09T18:41:11.890' AS DateTime), CAST(N'2018-08-09T18:41:11.890' AS DateTime), 0, NULL)
INSERT [dbo].[tbl_Menu] ([MenuID], [MenuName], [Component], [RouterLink], [ParentID], [DateAdded], [DateModified], [IsDeleted], [MenuIcon]) VALUES (7, N'Roles', N'Roles', N'roles', 0, CAST(N'2018-08-13T12:43:27.517' AS DateTime), CAST(N'2018-08-13T12:43:27.517' AS DateTime), 0, NULL)
SET IDENTITY_INSERT [dbo].[tbl_Menu] OFF
SET IDENTITY_INSERT [dbo].[tbl_Project] ON 

INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1, N'Wire Card', CAST(N'2018-08-10T12:49:05.730' AS DateTime), CAST(N'2018-08-10T12:49:05.730' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (2, N'DA', CAST(N'2018-08-10T12:49:12.660' AS DateTime), CAST(N'2018-08-10T12:49:12.660' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (3, N'SYF Dashboard ', CAST(N'2018-08-10T12:49:37.220' AS DateTime), CAST(N'2018-08-10T12:49:37.220' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (4, N'RRP', CAST(N'2018-08-10T12:51:10.647' AS DateTime), CAST(N'2018-08-10T12:51:10.647' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1002, N'RPA', CAST(N'2018-08-16T11:30:47.640' AS DateTime), CAST(N'2018-08-16T11:30:47.640' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1003, N'Puppet Automation', CAST(N'2018-08-16T11:31:16.380' AS DateTime), CAST(N'2018-08-16T11:31:16.380' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1004, N'Integrity', CAST(N'2018-08-16T11:31:29.190' AS DateTime), CAST(N'2018-08-16T11:31:29.190' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1005, N'NCR', CAST(N'2018-08-16T11:32:06.750' AS DateTime), CAST(N'2018-08-16T11:32:06.750' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1006, N'MasterCard', CAST(N'2018-08-16T11:32:14.117' AS DateTime), CAST(N'2018-08-16T11:32:14.117' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1007, NULL, CAST(N'2018-08-16T12:29:20.387' AS DateTime), CAST(N'2018-08-16T12:29:20.387' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1008, NULL, CAST(N'2018-08-16T12:30:28.490' AS DateTime), CAST(N'2018-08-16T12:30:28.490' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1009, N'project5', CAST(N'2018-08-16T12:32:21.937' AS DateTime), CAST(N'2018-08-16T12:32:21.937' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1010, NULL, CAST(N'2018-08-16T12:39:00.567' AS DateTime), CAST(N'2018-08-16T12:39:00.567' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1011, NULL, CAST(N'2018-08-16T12:42:08.453' AS DateTime), CAST(N'2018-08-16T12:42:08.453' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1012, NULL, CAST(N'2018-08-16T12:44:01.830' AS DateTime), CAST(N'2018-08-16T12:44:01.830' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1013, NULL, CAST(N'2018-08-16T12:48:40.377' AS DateTime), CAST(N'2018-08-16T12:48:40.377' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1014, N'integrity', CAST(N'2018-08-16T12:52:41.980' AS DateTime), CAST(N'2018-08-16T12:52:41.980' AS DateTime), 0)
INSERT [dbo].[tbl_Project] ([ProjectID], [ProjectName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1015, NULL, CAST(N'2018-08-16T12:56:16.787' AS DateTime), CAST(N'2018-08-16T12:56:16.787' AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[tbl_Project] OFF
SET IDENTITY_INSERT [dbo].[tbl_ProjectRoleMapping] ON 

INSERT [dbo].[tbl_ProjectRoleMapping] ([ID], [ProjectID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (1, 1, 4, CAST(N'2018-08-10T13:00:16.007' AS DateTime), CAST(N'2018-08-10T13:00:16.007' AS DateTime), 1)
INSERT [dbo].[tbl_ProjectRoleMapping] ([ID], [ProjectID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (2, 3, 3, CAST(N'2018-08-10T13:00:25.053' AS DateTime), CAST(N'2018-08-10T13:00:25.053' AS DateTime), 1)
INSERT [dbo].[tbl_ProjectRoleMapping] ([ID], [ProjectID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (3, 3, 1, CAST(N'2018-08-10T13:05:11.043' AS DateTime), CAST(N'2018-08-10T13:05:11.043' AS DateTime), 1)
INSERT [dbo].[tbl_ProjectRoleMapping] ([ID], [ProjectID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (4, 3, 2, CAST(N'2018-08-10T13:05:42.780' AS DateTime), CAST(N'2018-08-10T13:05:42.780' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tbl_ProjectRoleMapping] OFF
SET IDENTITY_INSERT [dbo].[tbl_Role] ON 

INSERT [dbo].[tbl_Role] ([ID], [RoleName], [DateAdded], [DateModified], [IsDeleted]) VALUES (1, N'Admin', CAST(N'2018-08-06T16:30:00.593' AS DateTime), CAST(N'2018-08-06T16:30:00.593' AS DateTime), 0)
INSERT [dbo].[tbl_Role] ([ID], [RoleName], [DateAdded], [DateModified], [IsDeleted]) VALUES (2, N'Test Consultant', CAST(N'2018-08-06T16:30:33.433' AS DateTime), CAST(N'2018-08-06T16:30:33.433' AS DateTime), 0)
INSERT [dbo].[tbl_Role] ([ID], [RoleName], [DateAdded], [DateModified], [IsDeleted]) VALUES (3, N'Senior Test Consultant', CAST(N'2018-08-06T16:30:44.133' AS DateTime), CAST(N'2018-08-06T16:30:44.133' AS DateTime), 0)
INSERT [dbo].[tbl_Role] ([ID], [RoleName], [DateAdded], [DateModified], [IsDeleted]) VALUES (4, N'Project Manager', CAST(N'2018-08-06T16:30:58.057' AS DateTime), CAST(N'2018-08-06T16:30:58.057' AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[tbl_Role] OFF
SET IDENTITY_INSERT [dbo].[tbl_RoleMenuMapping] ON 

INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (12, 6, 1, CAST(N'2018-08-09T18:41:26.297' AS DateTime), CAST(N'2018-08-09T18:41:26.297' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (2, 2, 1, CAST(N'2018-08-08T22:49:10.890' AS DateTime), CAST(N'2018-08-08T22:49:10.890' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (3, 3, 1, CAST(N'2018-08-08T22:49:21.630' AS DateTime), CAST(N'2018-08-08T22:49:21.630' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (4, 4, 1, CAST(N'2018-08-08T22:49:46.180' AS DateTime), CAST(N'2018-08-08T22:49:46.180' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (5, 5, 1, CAST(N'2018-08-08T22:49:54.897' AS DateTime), CAST(N'2018-08-08T22:49:54.897' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (13, 6, 2, CAST(N'2018-08-09T18:41:35.643' AS DateTime), CAST(N'2018-08-09T18:41:35.643' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (7, 4, 2, CAST(N'2018-08-08T22:51:23.380' AS DateTime), CAST(N'2018-08-08T22:51:23.380' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (14, 6, 4, CAST(N'2018-08-09T18:41:41.690' AS DateTime), CAST(N'2018-08-09T18:41:41.690' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (9, 2, 4, CAST(N'2018-08-08T22:52:05.307' AS DateTime), CAST(N'2018-08-08T22:52:05.307' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (10, 3, 4, CAST(N'2018-08-08T22:52:14.800' AS DateTime), CAST(N'2018-08-08T22:52:14.800' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (11, 4, 4, CAST(N'2018-08-08T22:52:36.250' AS DateTime), CAST(N'2018-08-08T22:52:36.250' AS DateTime), 0)
INSERT [dbo].[tbl_RoleMenuMapping] ([ID], [MenuID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (1012, 7, 1, CAST(N'2018-08-13T13:10:56.797' AS DateTime), CAST(N'2018-08-13T13:10:56.797' AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[tbl_RoleMenuMapping] OFF
SET IDENTITY_INSERT [dbo].[tbl_TaskDetails] ON 

INSERT [dbo].[tbl_TaskDetails] ([TaskID], [TaskName], [ProjectID], [HoursSpend], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (1, N'Coding', 3, CAST(4.00 AS Decimal(18, 2)), 1, CAST(N'2018-08-15T15:41:49.733' AS DateTime), CAST(N'2018-08-10T15:41:49.733' AS DateTime), 1)
INSERT [dbo].[tbl_TaskDetails] ([TaskID], [TaskName], [ProjectID], [HoursSpend], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (2, N'CodeReview', 3, CAST(1.00 AS Decimal(18, 2)), 1, CAST(N'2018-08-15T15:46:42.390' AS DateTime), CAST(N'2018-08-10T15:46:42.390' AS DateTime), 1)
INSERT [dbo].[tbl_TaskDetails] ([TaskID], [TaskName], [ProjectID], [HoursSpend], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (3, N'UnitTesting', 3, CAST(1.30 AS Decimal(18, 2)), 1, CAST(N'2018-08-15T15:46:44.573' AS DateTime), CAST(N'2018-08-10T15:46:44.573' AS DateTime), 1)
INSERT [dbo].[tbl_TaskDetails] ([TaskID], [TaskName], [ProjectID], [HoursSpend], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (4, N'Documentation', 3, CAST(1.30 AS Decimal(18, 2)), 1, CAST(N'2018-08-15T15:47:46.693' AS DateTime), CAST(N'2018-08-10T15:47:46.693' AS DateTime), 1)
INSERT [dbo].[tbl_TaskDetails] ([TaskID], [TaskName], [ProjectID], [HoursSpend], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (1002, N'Coding', 3, CAST(3.00 AS Decimal(18, 2)), 4, CAST(N'2018-08-10T13:33:05.420' AS DateTime), CAST(N'2018-08-13T13:33:05.420' AS DateTime), 1)
INSERT [dbo].[tbl_TaskDetails] ([TaskID], [TaskName], [ProjectID], [HoursSpend], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (1003, N'CodeReview', 3, CAST(2.00 AS Decimal(18, 2)), 4, CAST(N'2018-08-15T13:33:31.350' AS DateTime), CAST(N'2018-08-13T13:33:31.350' AS DateTime), 1)
INSERT [dbo].[tbl_TaskDetails] ([TaskID], [TaskName], [ProjectID], [HoursSpend], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (1004, N'Unit Testing', 3, CAST(3.00 AS Decimal(18, 2)), 4, CAST(N'2018-08-15T13:34:27.547' AS DateTime), CAST(N'2018-08-13T13:34:27.547' AS DateTime), 1)
INSERT [dbo].[tbl_TaskDetails] ([TaskID], [TaskName], [ProjectID], [HoursSpend], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (1005, N'Coding', 3, CAST(4.00 AS Decimal(18, 2)), 2, CAST(N'2018-08-15T13:34:54.297' AS DateTime), CAST(N'2018-08-13T13:34:54.297' AS DateTime), 1)
INSERT [dbo].[tbl_TaskDetails] ([TaskID], [TaskName], [ProjectID], [HoursSpend], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (1006, N'Code Review', 3, CAST(4.00 AS Decimal(18, 2)), 2, CAST(N'2018-08-15T13:35:06.297' AS DateTime), CAST(N'2018-08-13T13:35:06.297' AS DateTime), 1)
SET IDENTITY_INSERT [dbo].[tbl_TaskDetails] OFF
SET IDENTITY_INSERT [dbo].[tbl_User] ON 

INSERT [dbo].[tbl_User] ([ID], [UserCode], [UserName], [Password], [RoleID], [DateAdded], [DateModified], [IsDeleted], [UserDetailsID]) VALUES (3, N'User001', N'Prem', N'password', 1, CAST(N'2018-08-06T16:25:35.410' AS DateTime), CAST(N'2018-08-06T16:25:35.410' AS DateTime), 0, 12)
INSERT [dbo].[tbl_User] ([ID], [UserCode], [UserName], [Password], [RoleID], [DateAdded], [DateModified], [IsDeleted], [UserDetailsID]) VALUES (5, N'User002', N'Chandra', N'password', 2, CAST(N'2018-08-08T22:42:02.030' AS DateTime), CAST(N'2018-08-08T22:42:02.030' AS DateTime), 0, 3)
INSERT [dbo].[tbl_User] ([ID], [UserCode], [UserName], [Password], [RoleID], [DateAdded], [DateModified], [IsDeleted], [UserDetailsID]) VALUES (6, N'User003', N'Vishwa', N'password', 4, CAST(N'2018-08-08T22:42:57.723' AS DateTime), CAST(N'2018-08-08T22:42:57.723' AS DateTime), 0, 2)
INSERT [dbo].[tbl_User] ([ID], [UserCode], [UserName], [Password], [RoleID], [DateAdded], [DateModified], [IsDeleted], [UserDetailsID]) VALUES (7, N'User004', N'Sendil', N'password', 4, CAST(N'2018-08-10T12:35:20.457' AS DateTime), CAST(N'2018-08-10T12:35:20.457' AS DateTime), 0, NULL)
SET IDENTITY_INSERT [dbo].[tbl_User] OFF
SET IDENTITY_INSERT [dbo].[tbl_UserDetails] ON 

INSERT [dbo].[tbl_UserDetails] ([ID], [SSOID], [FirstName], [LastName], [Gender], [Phone], [ProfEmailID], [PersonalEmailID], [ReportingManagerID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (2, N'SSO1235', N'Vishwanath', N'Hegde', N'Male', N'32432432432', N'prem@gmail.com', N'13', 13, 4, CAST(N'2018-08-04T12:24:11.270' AS DateTime), CAST(N'2018-08-04T12:24:11.270' AS DateTime), 0)
INSERT [dbo].[tbl_UserDetails] ([ID], [SSOID], [FirstName], [LastName], [Gender], [Phone], [ProfEmailID], [PersonalEmailID], [ReportingManagerID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (3, N'SSO1236', N'Chandra', N'Reddy', N'Male', N'9888786767', N'chandra@gmail.com', N'chandra@gmail.com', 13, 2, CAST(N'2018-08-04T19:53:59.527' AS DateTime), CAST(N'2018-08-04T19:53:59.527' AS DateTime), 0)
INSERT [dbo].[tbl_UserDetails] ([ID], [SSOID], [FirstName], [LastName], [Gender], [Phone], [ProfEmailID], [PersonalEmailID], [ReportingManagerID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (12, N'SSO1235', N'Premananda', N'Routray', N'Male', NULL, NULL, N'prem@gmail.com', 13, 1, CAST(N'2018-08-08T11:36:16.997' AS DateTime), CAST(N'2018-08-08T11:36:16.997' AS DateTime), 0)
INSERT [dbo].[tbl_UserDetails] ([ID], [SSOID], [FirstName], [LastName], [Gender], [Phone], [ProfEmailID], [PersonalEmailID], [ReportingManagerID], [RoleID], [DateAdded], [DateModified], [IsDeleted]) VALUES (13, N'SSO1267', N'Sendil', N'Balasubhramaniam', N'Male', N'435435435', N'sendil@attra.com.au', N'sendil@gmail.com', 0, 4, CAST(N'2018-08-10T12:29:53.893' AS DateTime), CAST(N'2018-08-10T12:29:53.893' AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[tbl_UserDetails] OFF
ALTER TABLE [dbo].[tbl_Component] ADD  CONSTRAINT [DF_Component_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[tbl_Component] ADD  CONSTRAINT [DF_Component_DateModified]  DEFAULT (getdate()) FOR [DateModified]
GO
ALTER TABLE [dbo].[tbl_Component] ADD  CONSTRAINT [DF_Component_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[tbl_Menu] ADD  CONSTRAINT [DF_tbl_Menu_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[tbl_Menu] ADD  CONSTRAINT [DF_tbl_Menu_DateModified]  DEFAULT (getdate()) FOR [DateModified]
GO
ALTER TABLE [dbo].[tbl_Menu] ADD  CONSTRAINT [DF_tbl_Menu_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[tbl_Project] ADD  CONSTRAINT [DF_tbl_Project_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[tbl_Project] ADD  CONSTRAINT [DF_tbl_Project_DateModified]  DEFAULT (getdate()) FOR [DateModified]
GO
ALTER TABLE [dbo].[tbl_Project] ADD  CONSTRAINT [DF_tbl_Project_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[tbl_ProjectRoleMapping] ADD  CONSTRAINT [DF_tbl_ProjectRoleMapping_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[tbl_ProjectRoleMapping] ADD  CONSTRAINT [DF_tbl_ProjectRoleMapping_DateModified]  DEFAULT (getdate()) FOR [DateModified]
GO
ALTER TABLE [dbo].[tbl_ProjectRoleMapping] ADD  CONSTRAINT [DF_tbl_ProjectRoleMapping_IsDeleted]  DEFAULT ((1)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[tbl_Role] ADD  CONSTRAINT [DF_tbl_Role_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[tbl_Role] ADD  CONSTRAINT [DF_tbl_Role_DateModified]  DEFAULT (getdate()) FOR [DateModified]
GO
ALTER TABLE [dbo].[tbl_Role] ADD  CONSTRAINT [DF_tbl_Role_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[tbl_RoleMenuMapping] ADD  CONSTRAINT [DF_tbl_RoleMenuMapping_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[tbl_RoleMenuMapping] ADD  CONSTRAINT [DF_tbl_RoleMenuMapping_DateModified]  DEFAULT (getdate()) FOR [DateModified]
GO
ALTER TABLE [dbo].[tbl_RoleMenuMapping] ADD  CONSTRAINT [DF_tbl_RoleMenuMapping_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[tbl_TaskDetails] ADD  CONSTRAINT [DF_tbl_TaskDetails_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[tbl_TaskDetails] ADD  CONSTRAINT [DF_tbl_TaskDetails_DateModified]  DEFAULT (getdate()) FOR [DateModified]
GO
ALTER TABLE [dbo].[tbl_TaskDetails] ADD  CONSTRAINT [DF_tbl_TaskDetails_IsDeleted]  DEFAULT ((1)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[tbl_User] ADD  CONSTRAINT [DF_tbl_User_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[tbl_User] ADD  CONSTRAINT [DF_tbl_User_DateModified]  DEFAULT (getdate()) FOR [DateModified]
GO
ALTER TABLE [dbo].[tbl_User] ADD  CONSTRAINT [DF_tbl_User_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[tbl_UserDetails] ADD  CONSTRAINT [DF_tbl_UserDetails_DateAdded]  DEFAULT (getdate()) FOR [DateAdded]
GO
ALTER TABLE [dbo].[tbl_UserDetails] ADD  CONSTRAINT [DF_tbl_UserDetails_DateModified]  DEFAULT (getdate()) FOR [DateModified]
GO
ALTER TABLE [dbo].[tbl_UserDetails] ADD  CONSTRAINT [DF_tbl_UserDetails_IsDeleted]  DEFAULT ((0)) FOR [IsDeleted]
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteProjectRoleMapping]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_DeleteProjectRoleMapping](@ID INT)
AS
BEGIN
DELETE FROM dbo.tbl_ProjectRoleMapping where ID = @ID

END
GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteProjects]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_DeleteProjects](@ProjectID INT)
AS
BEGIN
DELETE FROM dbo.tbl_Project where ProjectID = @ProjectID

END

GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteRole]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Vishwanath>
-- Create date: <8/8/2018>
-- Description:	<[dbo].[sp_DeleteRole]>
-- =============================================

Create PROCEDURE [dbo].[sp_DeleteRole](@ID INT)
AS
BEGIN
DELETE FROM dbo.tbl_Role where ID = @ID

END

GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteTaskDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_DeleteTaskDetails](@TaskID INT
								)
AS
BEGIN
DELETE FROM dbo.tbl_TaskDetails 
		where TaskID=@TaskID


END

GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteUser]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Thimmaiah B>
-- Create date: <9/8/2018>
-- Description:	<[dbo].[sp_DeleteUser]>
-- =============================================
CREATE PROC [dbo].[sp_DeleteUser](@ID INT
								)
AS
BEGIN
DELETE FROM dbo.tbl_User where ID=@ID

END

GO
/****** Object:  StoredProcedure [dbo].[sp_DeleteUserDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_DeleteUserDetails](@ID INT
								)
AS
BEGIN
DELETE FROM dbo.tbl_UserDetails 
		where ID=@ID


END
GO
/****** Object:  StoredProcedure [dbo].[sp_getAllTaskDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROC [dbo].[sp_getAllTaskDetails]
AS
BEGIN
	SELECT [TaskID],[TaskName],A.[ProjectID],B.[ProjectName],[HoursSpend],A.[RoleID],C.[RoleName]
	FROM [dbo].[tbl_TaskDetails] A
	LEFT JOIN [dbo].[tbl_Project] B ON A.[ProjectID] = B.[ProjectID]
	LEFT JOIN [dbo].[tbl_Role] C ON A.[RoleID] = C.[ID]
END
GO
/****** Object:  StoredProcedure [dbo].[sp_getAllUsers]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_getAllUsers]
AS
BEGIN
	SELECT A.[ID],[UserCode],[UserName],[Password],A.[RoleID],C.[RoleName]
	FROM [dbo].[tbl_User] A
	LEFT JOIN [dbo].[tbl_Role] C ON A.[RoleID] = C.[ID]
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GetMenusByRole]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_GetMenusByRole](@RoleID int)
AS
BEGIN
SELECT rm.RoleID,menu.MenuID,menu.MenuName,menu.Component,menu.RouterLink,menu.ParentID
 FROM tbl_RoleMenuMapping rm inner join tbl_Menu menu on rm.MenuID=menu.MenuID
		where rm.RoleID=@RoleID
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GetProjectAndUserDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_GetProjectAndUserDetails] (@RoleID int)
AS
BEGIN
SELECT DISTINCT u.RoleID
	  ,r.RoleName
	  ,ud.FirstName +' '+ud.LastName as UserName
	  ,p.ProjectID
	  ,p.ProjectName 
	  ,ud2.FirstName+' '+ud2.LastName as  ReportingManager
from tbl_User  u  inner join  tbl_UserDetails as ud on ud.RoleID =u.RoleID inner  join
		tbl_UserDetails ud2 on ud.ReportingManagerID=ud2.ID inner join tbl_Role r on r.ID=u.RoleID
inner join tbl_ProjectRoleMapping prm on u.RoleID=prm.RoleID inner join  tbl_Project p on p.ProjectID=prm.ProjectID 

where u.RoleID=@RoleID
END
GO
/****** Object:  StoredProcedure [dbo].[sp_GetTaskDetailsByRole]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_GetTaskDetailsByRole](@RoleID INT)
AS
--------------------------------------------------------------------
/*Author - Premananda Routray */
/*Creation Date - 10 Aug 2018*/

---------------------------------------------------------------------
BEGIN
DECLARE @date VARCHAR(10)
DECLARE @day VARCHAR(10)
--DECLARE @dateAdded VARCHAR(2)

 SELECT @day= DATENAME(dw,GETDATE())
--print @day

if(lower(@day)='monday')
begin
SELECT @date=dateadd(day,-3, cast(getdate() as date))

end
else
begin
SELECT @date=dateadd(day,-1, cast(getdate() as date))

end



--Convert(VARCHAR(2),Convert(INT,DatePart(DAY,GETDATE()))-1)
--print @date

--SET @dateAdded =(SELECT DateAdded FROM tbl_TaskDetails WHERE RoleID =@RoleID and 
--CONVERT(VARCHAR(2),CONVERT(INT,DATEPART(DAY,GETDATE())))=@date ) 
--print @dateAdded 
SELECT td.TaskName,td.TaskID,td.HoursSpend,p.ProjectName,p.ProjectID FROM tbl_TaskDetails td INNER JOIN tbl_Project p on td.ProjectID=p.ProjectID  WHERE RoleID =@RoleID
AND CONVERT(varchar(12) ,dateadd(day,0, cast(td.DateAdded as date)))= @date

END
GO
/****** Object:  StoredProcedure [dbo].[sp_GetUserLoginDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_GetUserLoginDetails](@UserCode varchar(50),@Password varchar(20) )
AS
BEGIN
SELECT us.UserCode,us.[Password],us.RoleID,rl.RoleName,ud.FirstName +' '+ud.LastName as UserName from tbl_User us inner  join tbl_Role rl
		on us.RoleID=rl.ID inner join tbl_UserDetails ud on ud.ID=us.UserDetailsID 
		where us.UserCode=@UserCode and us.[Password]=@Password
END
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertProjectRoleMapping]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[sp_InsertProjectRoleMapping]
	-- Add the parameters for the stored procedure here
	(@ProjectID int=null, @RoleID int=null)
AS
BEGIN

    -- Insert statements for procedure here
	INSERT INTO dbo.tbl_ProjectRoleMapping (ProjectID, RoleID)
	VALUES(@ProjectID, @RoleID)
END

GO
/****** Object:  StoredProcedure [dbo].[sp_InsertProjects]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Thimmaiah B>
-- Create date: <8/8/2018>
-- Description:	<[dbo].[sp_InsertProjects]>
-- =============================================
CREATE PROCEDURE [dbo].[sp_InsertProjects]
	-- Add the parameters for the stored procedure here
	(@ProjectName varchar(100)=null)
AS
BEGIN

    -- Insert statements for procedure here
	INSERT INTO dbo.tbl_Project (ProjectName)
	VALUES(@ProjectName)
END

GO
/****** Object:  StoredProcedure [dbo].[sp_InsertRole]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Vishwanath>
-- Create date: <9/8/2018>
-- Description:	<[dbo].[sp_InsertUser]>
-- =============================================
CREATE PROC [dbo].[sp_InsertRole]
			@RoleName varchar(50)=null
			
AS
BEGIN
			-- Insert statements for procedure here
			INSERT INTO dbo.tbl_Role (Rolename)
			VALUES(@RoleName)

END

GO
/****** Object:  StoredProcedure [dbo].[sp_InsertTaskDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_InsertTaskDetails](@TaskName varchar(100)=null
								,@ProjectID int=null
								,@HoursSpend decimal(18,2)=null
								,@RoleID int=null)
AS
BEGIN
INSERT INTO dbo.tbl_TaskDetails (TaskName,ProjectID,HoursSpend,RoleID)
VALUES(@TaskName,@ProjectID,@HoursSpend,@RoleID)

END
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertUser]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_InsertUser]
			-- Add the parameters for the stored procedure here
			(@UserCode varchar(50)
			,@UserName varchar(50)=null
			,@Password varchar(100)=null
			,@RoleID int=null)
AS
BEGIN
			-- Insert statements for procedure here
			INSERT INTO dbo.tbl_User (UserCode,UserName,[Password],RoleID)
			VALUES(@UserCode,@UserName,@Password,@RoleID)

END
GO
/****** Object:  StoredProcedure [dbo].[sp_InsertUserDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_InsertUserDetails](@SSOID varchar(50)
								,@FirstName varchar(50)=null
								,@LastName varchar(50)=null
								,@Gender varchar(15)=null
								,@Phone varchar(20)=null
								,@ProfEmailID varchar(50)=null
								,@PersonalEmailID varchar(50)=null
								,@ReportingManagerID int=null
								,@RoleID int=null)
AS
BEGIN
INSERT INTO dbo.tbl_UserDetails (SSOID,FirstName,LastName,Gender,Phone,ProfEmailID,PersonalEmailID,ReportingManagerID,RoleID)
VALUES(@SSOID,@FirstName,@LastName,@Gender,@Phone,@ProfEmailID,@PersonalEmailID,@ReportingManagerID,@RoleID)

END
GO
/****** Object:  StoredProcedure [dbo].[sp_ManagerDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_ManagerDetails]
AS
BEGIN

SELECT DISTINCT ReportingManagerID,ReportingManagerName
FROM 
(SELECT E1.ID EMPLOYEEID, E1.FIRSTNAME EMPLOYEENAME,  
E1.REPORTINGMANAGERID ReportingManagerID, E2.FIRSTNAME AS ReportingManagerName 
FROM   TBL_USERDETAILS E1 
LEFT JOIN TBL_USERDETAILS E2 
ON E1.REPORTINGMANAGERID = E2.ID) A

WHERE ReportingManagerName IS NOT NULL


END
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateProjectRoleMapping]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_UpdateProjectRoleMapping]
-- Add the parameters for the stored procedure here
(@ID int, @ProjectID int=null, @RoleID int=null)
AS
BEGIN
-- Update statements for procedure here
UPDATE  dbo.tbl_ProjectRoleMapping SET ProjectID=@ProjectID, RoleID=@RoleID where ID=@ID

END

GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateProjects]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Thimmaiah B>
-- Create date: <8/8/2018>
-- Description:	<[dbo].[sp_UpdateProjects]>
-- =============================================

CREATE PROC [dbo].[sp_UpdateProjects]
-- Add the parameters for the stored procedure here
(@ProjectID int, @ProjectName varchar(100)=null)
AS
BEGIN
-- Update statements for procedure here
UPDATE  dbo.tbl_Project SET ProjectName=@ProjectName where ProjectID=@ProjectID

END

GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateRole]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Vishwanath>
-- Create date: <8/8/2018>
-- Description:	<[dbo].[sp_UpdateRole]>
-- =============================================

CREATE PROC [dbo].[sp_UpdateRole]
-- Add the parameters for the stored procedure here
(@ID int, @RoleName varchar(50)=null)
AS
BEGIN
-- Update statements for procedure here
UPDATE  dbo.tbl_Role SET RoleName=@RoleName where ID=@ID

END

GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateTaskDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[sp_UpdateTaskDetails](@TaskID INT
								,@TaskName varchar(100)=null
								,@ProjectID int=null
								,@HoursSpend decimal(18,2)=null
								,@RoleID int=null)
AS
BEGIN
UPDATE  dbo.tbl_TaskDetails SET  TaskName=@TaskName
								,ProjectID=@ProjectID
								,HoursSpend=@HoursSpend
								,RoleID=@RoleID
		where TaskID=@TaskID


END

GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateUser]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		<Thimmaiah B>
-- Create date: <9/8/2018>
-- Description:	<[dbo].[sp_UpdateUser]>
-- =============================================
CREATE PROC [dbo].[sp_UpdateUser]
			-- Add the parameters for the stored procedure here
			(@ID INT
			,@UserCode varchar(50)
			,@UserName varchar(50)=null
			,@Password varchar(100)=null
			,@RoleID int=null)
AS
BEGIN
-- Update statements for procedure here
UPDATE  dbo.tbl_User SET UserCode=@UserCode
			,UserName=@UserName
			,[Password]=@Password
			,RoleID=@RoleID

where ID=@ID

END
GO
/****** Object:  StoredProcedure [dbo].[sp_UpdateUserDetails]    Script Date: 8/16/2018 1:17:16 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[sp_UpdateUserDetails](@ID INT
								,@SSOID varchar(50)
								,@FirstName varchar(50)=null
								,@LastName varchar(50)=null
								,@Gender varchar(15)=null
								,@Phone varchar(20)=null
								,@ProfEmailID varchar(50)=null
								,@PersonalEmailID varchar(50)=null
								,@ReportingManagerID int=null
								,@RoleID int=null)
AS
BEGIN
UPDATE  dbo.tbl_UserDetails SET SSOID=@SSOID
								,FirstName=@FirstName
								,LastName=@LastName
								,Gender=@Gender
								,Phone=@Phone
								,ProfEmailID=@ProfEmailID
								,PersonalEmailID=@ReportingManagerID
								,ReportingManagerID=@ReportingManagerID
								,RoleID=@RoleID
		where ID=@ID


END
GO
