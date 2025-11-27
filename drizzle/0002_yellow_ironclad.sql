CREATE TABLE `measurements_contrast` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`standard` text NOT NULL,
	`peak_white` real,
	`black_level` real,
	`contrast_ratio` real,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_exhibition` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`ambient_light_pass` integer,
	`masking_pass` integer,
	`port_window_pass` integer,
	`hvac_noise_pass` integer,
	`ambient_light_level` real,
	`temperature` real,
	`humidity` real,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_screen_gain` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`screen_gain` real,
	`half_gain_angle` real,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_viewing_angle` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`luminance_center` real,
	`luminance_left` real,
	`luminance_right` real,
	`luminance_top` real,
	`luminance_bottom` real,
	`color_shift_pass` integer,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_vignetting` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`luminance_center` real,
	`luminance_top_left` real,
	`luminance_top_right` real,
	`luminance_bottom_left` real,
	`luminance_bottom_right` real,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `measurements_basic` ADD `standard` text DEFAULT 'sdr' NOT NULL;