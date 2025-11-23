CREATE TABLE `measurements_basic` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`type` text NOT NULL,
	`measured_l` real,
	`measured_x` real,
	`measured_y` real,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_contouring` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`standard` text NOT NULL,
	`monotonicity_pass` integer,
	`visual_check_pass` integer,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_inactive_area` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`top_border_check` integer,
	`bottom_border_check` integer,
	`left_border_check` integer,
	`right_border_check` integer,
	`measured_luminance` real,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_intra_contrast` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`standard` text NOT NULL,
	`white_l` real,
	`white_r` real,
	`white_t` real,
	`white_b` real,
	`black_l` real,
	`black_r` real,
	`black_t` real,
	`black_b` real,
	`contrast_ratio` real,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_pixel_count` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`pattern_type` text,
	`pixel_block_complete` integer,
	`no_cropping` integer,
	`no_scaling` integer,
	`horizontal_pixels` integer,
	`vertical_pixels` integer,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_pixel_structure` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`fill_factor_check` integer,
	`pixel_pitch_check` integer,
	`sub_pixel_structure_check` integer,
	`visual_artifacts_check` integer,
	`notes` text,
	`images` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_sub_pixel` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`horizontal_lines_pass` integer,
	`vertical_lines_pass` integer,
	`no_color_fringing` integer,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `measurements_upscaling` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` integer NOT NULL,
	`no_jaggies` integer,
	`no_ringing` integer,
	`no_aliasing` integer,
	`pass` integer,
	`notes` text,
	FOREIGN KEY (`session_id`) REFERENCES `test_sessions`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `devices` ADD `type` text DEFAULT 'projector' NOT NULL;--> statement-breakpoint
ALTER TABLE `measurements_color` ADD `standard` text DEFAULT 'sdr' NOT NULL;--> statement-breakpoint
ALTER TABLE `measurements_grayscale` ADD `standard` text DEFAULT 'sdr' NOT NULL;--> statement-breakpoint
ALTER TABLE `measurements_uniformity` ADD `standard` text DEFAULT 'sdr' NOT NULL;--> statement-breakpoint
ALTER TABLE `test_sessions` ADD `standard` text DEFAULT 'sdr' NOT NULL;