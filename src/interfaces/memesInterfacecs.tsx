export interface SimpleMeme {
  id: string;
  author: string;
  image: string;
  title: string;
  score: string;
  num_comments: string;
}

/* export interface MemesPaginatedResponse {
  kind: string;
  data: MemesPaginatedResponseData;
}

export interface MemesPaginatedResponseData {
  after: string;
  dist: number;
  modhash: string;
  geo_filter: string;
  children: Child[];
  before: null;
}

export interface Child {
  kind: Kind;
  data: ChildData;
}

export interface ChildData {
  approved_at_utc: null;
  subreddit: Subreddit;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title: null;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: LinkFlairRichtext[];
  subreddit_name_prefixed: SubredditNamePrefixed;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: LinkFlairCSSClass;
  downs: number;
  thumbnail_height: number | null;
  top_awarded_type: null;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: FlairTextColor;
  upvote_ratio: number;
  author_flair_background_color: AuthorFlairBackgroundColor | null;
  subreddit_type: SubredditType;
  ups: number;
  total_awards_received: number;
  media_embed: MediaEmbed;
  thumbnail_width: number | null;
  author_flair_template_id: null | string;
  is_original_content: boolean;
  user_reports: any[];
  secure_media: Media | null;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category: null | string;
  secure_media_embed: MediaEmbed;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by: null;
  is_created_from_ads_ui: boolean;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean | number;
  author_flair_css_class: AuthorFlairCSSClass | null;
  author_flair_richtext: AuthorFlairRichtext[];
  gildings: Gildings;
  content_categories: null;
  is_self: boolean;
  mod_note: null;
  created: number;
  link_flair_type: FlairType;
  wls: number;
  removed_by_category: null;
  banned_by: null;
  author_flair_type: FlairType;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: null | string;
  likes: null;
  suggested_sort: null;
  banned_at_utc: null;
  view_count: null;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  all_awardings: AllAwarding[];
  awarders: any[];
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: null | string;
  treatment_tags: any[];
  visited: boolean;
  removed_by: null;
  num_reports: null;
  distinguished: null;
  subreddit_id: SubredditID;
  author_is_blocked: boolean;
  mod_reason_by: null;
  removal_reason: null;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons: null;
  author: string;
  discussion_type: null;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: WhitelistStatus;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: FlairTextColor | null;
  permalink: string;
  parent_whitelist_status: WhitelistStatus;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media: Media | null;
  is_video: boolean;
  call_to_action?: string;
  post_hint?: PostHint;
  preview?: Preview;
  url_overridden_by_dest?: string;
  media_metadata?: {[key: string]: MediaMetadatum};
  is_gallery?: boolean;
  gallery_data?: GalleryData;
  poll_data?: PollData;
  author_cakeday?: boolean;
}

export interface AllAwarding {
  giver_coin_reward: number | null;
  subreddit_id: null;
  is_new: boolean;
  days_of_drip_extension: number;
  coin_price: number;
  id: ID;
  penny_donate: number | null;
  award_sub_type: AwardSubType;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number;
  tiers_by_required_awardings: null;
  resized_icons: ResizedIcon[];
  icon_width: number;
  static_icon_width: number;
  start_date: null;
  is_enabled: boolean;
  awardings_required_to_grant_benefits: null;
  description: Description;
  end_date: null;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: Name;
  resized_static_icons: ResizedIcon[];
  icon_format: null | string;
  icon_height: number;
  penny_price: number | null;
  award_type: AwardType;
  static_icon_url: string;
}

export enum AwardSubType {
  Global = 'GLOBAL',
  Premium = 'PREMIUM',
}

export enum AwardType {
  Global = 'global',
}

export enum Description {
  CanTStopSeeingStars = "Can't stop seeing stars",
  IMInThisWithYou = "I'm in this with you.",
  ShowsTheSilverAwardAndThatSIt = "Shows the Silver Award... and that's it.",
  ThankYouStrangerShowsTheAward = 'Thank you stranger. Shows the award.',
  WhenYouComeAcrossAFeelGoodThing = 'When you come across a feel-good thing.',
}

export enum ID {
  Award02D9Ab2C162E4C018438317A016Ed3D9 = 'award_02d9ab2c-162e-4c01-8438-317a016ed3d9',
  Award5F123E3D4F4842F49C11E98B566D5897 = 'award_5f123e3d-4f48-42f4-9c11-e98b566d5897',
  AwardAbb865CF620B421987773658Cf9091Fb = 'award_abb865cf-620b-4219-8777-3658cf9091fb',
  AwardF44611F1B89E46Dc97Fe892280B13B82 = 'award_f44611f1-b89e-46dc-97fe-892280b13b82',
  Gid1 = 'gid_1',
}

export enum Name {
  Helpful = 'Helpful',
  Silver = 'Silver',
  Starstruck = 'Starstruck',
  TakeMyEnergy = 'Take My Energy',
  Wholesome = 'Wholesome',
}

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export enum AuthorFlairBackgroundColor {
  D3D6Da = '#d3d6da',
  Empty = '',
}

export enum AuthorFlairCSSClass {
  Azul = 'azul',
  Gray = 'gray',
  Verde = 'verde',
}

export interface AuthorFlairRichtext {
  e: AuthorFlairRichtextE;
  t?: string;
  a?: string;
  u?: string;
}

export enum AuthorFlairRichtextE {
  Emoji = 'emoji',
  Text = 'text',
}

export enum FlairTextColor {
  Dark = 'dark',
  Light = 'light',
}

export enum FlairType {
  Richtext = 'richtext',
  Text = 'text',
}

export interface GalleryData {
  items: Item[];
}

export interface Item {
  media_id: string;
  id: number;
}

export interface Gildings {
  gid_1?: number;
}

export enum LinkFlairCSSClass {
  Azul = 'azul',
  Cafe = 'cafe',
  Celeste = 'celeste',
  Empty = '',
  Naranjo = 'naranjo',
  Verde = 'verde',
}

export interface LinkFlairRichtext {
  e: AuthorFlairRichtextE;
  t: string;
}

export interface Media {
  type?: MediaType;
  oembed?: Oembed;
  reddit_video?: RedditVideo;
}

export interface Oembed {
  provider_url: string;
  version: string;
  url?: string;
  author_name: string;
  height: number | null;
  width: number;
  html: string;
  author_url: string;
  provider_name: ProviderName;
  cache_age?: number;
  type: OembedType;
  title?: string;
  thumbnail_width?: number;
  thumbnail_url?: string;
  thumbnail_height?: number;
}

export enum ProviderName {
  Twitter = 'Twitter',
  YouTube = 'YouTube',
}

export enum OembedType {
  Rich = 'rich',
  Video = 'video',
}

export interface RedditVideo {
  bitrate_kbps: number;
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export enum MediaType {
  TwitterCOM = 'twitter.com',
  YoutubeCOM = 'youtube.com',
}

export interface MediaEmbed {
  content?: string;
  width?: number;
  scrolling?: boolean;
  height?: number;
  media_domain_url?: string;
}

export interface MediaMetadatum {
  status: Status;
  e: MediaMetadatumE;
  m: M;
  p: S[];
  s: S;
  id: string;
}

export enum MediaMetadatumE {
  Image = 'Image',
}

export enum M {
  ImageJpg = 'image/jpg',
}

export interface S {
  y: number;
  x: number;
  u: string;
}

export enum Status {
  Valid = 'valid',
}

export enum WhitelistStatus {
  AllAds = 'all_ads',
}

export interface PollData {
  prediction_status: null;
  total_stake_amount: null;
  voting_end_timestamp: number;
  options: Option[];
  vote_updates_remained: null;
  is_prediction: boolean;
  resolved_option_id: null;
  user_won_amount: null;
  user_selection: null;
  total_vote_count: number;
  tournament_id: null;
}

export interface Option {
  text: string;
  id: string;
}

export enum PostHint {
  HostedVideo = 'hosted:video',
  Image = 'image',
  Link = 'link',
  RichVideo = 'rich:video',
  Self = 'self',
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Image {
  source: ResizedIcon;
  resolutions: ResizedIcon[];
  variants: Variants;
  id: string;
}

export interface Variants {}

export enum Subreddit {
  Chile = 'chile',
}

export enum SubredditID {
  T52Rer8 = 't5_2rer8',
}

export enum SubredditNamePrefixed {
  RChile = 'r/chile',
}

export enum SubredditType {
  Public = 'public',
}

export enum Kind {
  T3 = 't3',
}
 */
