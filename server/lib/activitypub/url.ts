import { CONFIG } from '../../initializers/constants'
import { VideoInstance } from '../../models/video/video-interface'
import { VideoChannelInstance } from '../../models/video/video-channel-interface'
import { VideoAbuseInstance } from '../../models/video/video-abuse-interface'
import { AccountFollowInstance } from '../../models/account/account-follow-interface'
import { AccountInstance } from '../../models/account/account-interface'

function getVideoActivityPubUrl (video: VideoInstance) {
  return CONFIG.WEBSERVER.URL + '/videos/watch/' + video.uuid
}

function getVideoChannelActivityPubUrl (videoChannel: VideoChannelInstance) {
  return CONFIG.WEBSERVER.URL + '/video-channels/' + videoChannel.uuid
}

function getAccountActivityPubUrl (accountName: string) {
  return CONFIG.WEBSERVER.URL + '/account/' + accountName
}

function getVideoAbuseActivityPubUrl (videoAbuse: VideoAbuseInstance) {
  return CONFIG.WEBSERVER.URL + '/admin/video-abuses/' + videoAbuse.id
}

function getVideoViewActivityPubUrl (byAccount: AccountInstance, video: VideoInstance) {
  return video.url + '/views/' + byAccount.uuid + '/' + new Date().toISOString()
}

function getVideoLikeActivityPubUrl (byAccount: AccountInstance, video: VideoInstance) {
  return byAccount.url + '/likes/' + video.id
}

function getVideoDislikeActivityPubUrl (byAccount: AccountInstance, video: VideoInstance) {
  return byAccount.url + '/dislikes/' + video.id
}

function getAccountFollowActivityPubUrl (accountFollow: AccountFollowInstance) {
  const me = accountFollow.AccountFollower
  const following = accountFollow.AccountFollowing

  return me.url + '/follows/' + following.id
}

function getAccountFollowAcceptActivityPubUrl (accountFollow: AccountFollowInstance) {
  const follower = accountFollow.AccountFollower
  const me = accountFollow.AccountFollowing

  return follower.url + '/accepts/follows/' + me.id
}

function getAnnounceActivityPubUrl (originalUrl: string, byAccount: AccountInstance) {
  return originalUrl + '/announces/' + byAccount.id
}

function getUpdateActivityPubUrl (originalUrl: string, updatedAt: string) {
  return originalUrl + '/updates/' + updatedAt
}

function getUndoActivityPubUrl (originalUrl: string) {
  return originalUrl + '/undo'
}

export {
  getVideoActivityPubUrl,
  getVideoChannelActivityPubUrl,
  getAccountActivityPubUrl,
  getVideoAbuseActivityPubUrl,
  getAccountFollowActivityPubUrl,
  getAccountFollowAcceptActivityPubUrl,
  getAnnounceActivityPubUrl,
  getUpdateActivityPubUrl,
  getUndoActivityPubUrl,
  getVideoViewActivityPubUrl,
  getVideoLikeActivityPubUrl,
  getVideoDislikeActivityPubUrl
}
