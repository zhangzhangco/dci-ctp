CREATE TABLE `devices` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`manufacturer` text NOT NULL,
	`model` text NOT NULL,
	`serial_number` text,
	`description` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `measurements_color` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`color_name` text NOT NULL,
	`type` text NOT NULL,
	`measured_l` real,
	`measured_x` real,
	`measured_y` real,
	`target_l` real,
	`target_x` real,
	`target_y` real,
	`delta_e` real,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_grayscale` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`step_index` integer NOT NULL,
	`bit_depth` integer DEFAULT 12,
	`measured_l` real,
	`measured_x` real,
	`measured_y` real,
	`target_l` real,
	`target_x` real,
	`target_y` real,
	`error_e` real,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_uniformity` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`position` text NOT NULL,
	`measured_l` real,
	`measured_x` real,
	`measured_y` real,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `normative_clauses` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`authority_id` integer NOT NULL,
	`ref_code` text NOT NULL,
	`title` text,
	`summary` text,
	`notes` text,
	FOREIGN KEY (`authority_id`) REFERENCES `standard_authorities`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `standard_authorities` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `test_definition_clauses` (
	`test_definition_id` integer NOT NULL,
	`normative_clause_id` integer NOT NULL,
	PRIMARY KEY(`test_definition_id`, `normative_clause_id`),
	FOREIGN KEY (`test_definition_id`) REFERENCES `test_definitions`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`normative_clause_id`) REFERENCES `normative_clauses`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `test_definitions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`code` text NOT NULL,
	`name` text NOT NULL,
	`phase` integer NOT NULL,
	`type` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `test_results` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`test_definition_id` integer NOT NULL,
	`status` text NOT NULL,
	`summary` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`test_definition_id`) REFERENCES `test_definitions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `test_sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`device_id` integer NOT NULL,
	`phase` integer NOT NULL,
	`date` text NOT NULL,
	`operator` text,
	`location` text,
	`notes` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`device_id`) REFERENCES `devices`(`id`) ON UPDATE no action ON DELETE no action
);
