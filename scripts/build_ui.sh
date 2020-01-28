#!/usr/bin/env bash
cd ui
npm run build
cp -R build/. ../public
