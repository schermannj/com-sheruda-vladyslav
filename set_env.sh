#!/bin/bash
set -e

printError() {
  echo $@ >/dev/stderr
}

if [ -z "$1" ]; then
  printError "[!] Missing environment name."
  exit 1
fi

if [ -z "$npm_package_version" ]; then
  printError "[!] Missing npm_package_version (should be set by npm or yarn)."
  exit 1
fi

export REACT_APP_ENV_NAME="$1"; shift
export REACT_APP_COMMIT_HASH="$(git rev-parse HEAD)"
export REACT_APP_VERSION="$npm_package_version"
export REACT_APP_SENTRY_RELEASE_ID="v$REACT_APP_VERSION-$REACT_APP_COMMIT_HASH"

env-cmd -f ".env.$REACT_APP_ENV_NAME" $@
