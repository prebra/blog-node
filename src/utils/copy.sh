#!/bin/sh
cd /work/demo/node-demo/blog-node/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log