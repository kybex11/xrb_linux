package main

import (
	"context"
	"encoding/json"
	"os"
	"path/filepath"
)

type Credentials struct {
	Username string `json:"username"`
	Passwd   string `json:"passwd"`
}

type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) LoadUsername() (string, error) {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return "", err
	}
	credentialsFile := filepath.Join(homeDir, ".xrblx-autosave")

	var credentials Credentials

	jsonBytes, err := os.ReadFile(credentialsFile)
	if err != nil {
		return "", err
	}

	err = json.Unmarshal(jsonBytes, &credentials)
	if err != nil {
		return "", err
	}

	return credentials.Username, nil
}

func (a *App) LoadPasswd() (string, error) {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return "", err
	}
	credentialsFile := filepath.Join(homeDir, ".xrblx-autosave")

	var credentials Credentials

	jsonBytes, err := os.ReadFile(credentialsFile)
	if err != nil {
		return "", err
	}

	err = json.Unmarshal(jsonBytes, &credentials)
	if err != nil {
		return "", err
	}

	return credentials.Passwd, nil
}

func (a *App) SaveCredentials(username, passwd string) error {
	homeDir, err := os.UserHomeDir()
	if err != nil {
		return err
	}
	credentialsFile := filepath.Join(homeDir, ".xrblx-autosave")

	credentials := Credentials{
		Username: username,
		Passwd:   passwd,
	}

	jsonBytes, err := json.Marshal(credentials)
	if err != nil {
		return err
	}

	err = os.WriteFile(credentialsFile, jsonBytes, 0644)
	if err != nil {
		return err
	}

	return nil
}
