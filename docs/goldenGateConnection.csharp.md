# `goldenGateConnection` Submodule <a name="`goldenGateConnection` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateConnection <a name="GoldenGateConnection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection oci_golden_gate_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnection(Construct Scope, string Id, GoldenGateConnectionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig">GoldenGateConnectionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig">GoldenGateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes">PutAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers">PutBootstrapServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks">PutLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccessKeyId">ResetAccessKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKey">ResetAccountKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKeySecretId">ResetAccountKeySecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountName">ResetAccountName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAdditionalAttributes">ResetAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationMode">ResetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetBootstrapServers">ResetBootstrapServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecretSecretId">ResetClientSecretSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionFactory">ResetConnectionFactory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionString">ResetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionUrl">ResetConnectionUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConsumerProperties">ResetConsumerProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetCoreSiteXml">ResetCoreSiteXml</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDeploymentId">ResetDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDoesUseSecretIds">ResetDoesUseSecretIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFingerprint">ResetFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetIsLockOverride">ResetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiConnectionFactory">ResetJndiConnectionFactory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiInitialContextFactory">ResetJndiInitialContextFactory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiProviderUrl">ResetJndiProviderUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentials">ResetJndiSecurityCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentialsSecretId">ResetJndiSecurityCredentialsSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityPrincipal">ResetJndiSecurityPrincipal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyId">ResetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStore">ResetKeyStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePassword">ResetKeyStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePasswordSecretId">ResetKeyStorePasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStoreSecretId">ResetKeyStoreSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetLocks">ResetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPasswordSecretId">ResetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFile">ResetPrivateKeyFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFileSecretId">ResetPrivateKeyFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphrase">ResetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphraseSecretId">ResetPrivateKeyPassphraseSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetProducerProperties">ResetProducerProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPublicKeyFingerprint">ResetPublicKeyFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRedisClusterId">ResetRedisClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRoutingMethod">ResetRoutingMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasToken">ResetSasToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasTokenSecretId">ResetSasTokenSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKey">ResetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKeySecretId">ResetSecretAccessKeySecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecurityProtocol">ResetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServers">ResetServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFile">ResetServiceAccountKeyFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFileSecretId">ResetServiceAccountKeyFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSessionMode">ResetSessionMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldUseJndi">ResetShouldUseJndi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldValidateServerCertificate">ResetShouldValidateServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCa">ResetSslCa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCert">ResetSslCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystash">ResetSslClientKeystash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystashSecretId">ResetSslClientKeystashSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredb">ResetSslClientKeystoredb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredbSecretId">ResetSslClientKeystoredbSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCrl">ResetSslCrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKey">ResetSslKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPassword">ResetSslKeyPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPasswordSecretId">ResetSslKeyPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeySecretId">ResetSslKeySecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslMode">ResetSslMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslServerCertificate">ResetSslServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetStreamPoolId">ResetStreamPoolId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSubnetId">ResetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTenancyId">ResetTenancyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTriggerRefresh">ResetTriggerRefresh</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStore">ResetTrustStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePassword">ResetTrustStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePasswordSecretId">ResetTrustStorePasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStoreSecretId">ResetTrustStoreSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUserId">ResetUserId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetVaultId">ResetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWallet">ResetWallet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWalletSecretId">ResetWalletSecretId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalAttributes` <a name="PutAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes"></a>

```csharp
private void PutAdditionalAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes.parameter.value"></a>

- *Type:* object

---

##### `PutBootstrapServers` <a name="PutBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers"></a>

```csharp
private void PutBootstrapServers(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers.parameter.value"></a>

- *Type:* object

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks"></a>

```csharp
private void PutLocks(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts"></a>

```csharp
private void PutTimeouts(GoldenGateConnectionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccessKeyId"></a>

```csharp
private void ResetAccessKeyId()
```

##### `ResetAccountKey` <a name="ResetAccountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKey"></a>

```csharp
private void ResetAccountKey()
```

##### `ResetAccountKeySecretId` <a name="ResetAccountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKeySecretId"></a>

```csharp
private void ResetAccountKeySecretId()
```

##### `ResetAccountName` <a name="ResetAccountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountName"></a>

```csharp
private void ResetAccountName()
```

##### `ResetAdditionalAttributes` <a name="ResetAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAdditionalAttributes"></a>

```csharp
private void ResetAdditionalAttributes()
```

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationMode"></a>

```csharp
private void ResetAuthenticationMode()
```

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAzureTenantId"></a>

```csharp
private void ResetAzureTenantId()
```

##### `ResetBootstrapServers` <a name="ResetBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetBootstrapServers"></a>

```csharp
private void ResetBootstrapServers()
```

##### `ResetClientId` <a name="ResetClientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretSecretId` <a name="ResetClientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecretSecretId"></a>

```csharp
private void ResetClientSecretSecretId()
```

##### `ResetConnectionFactory` <a name="ResetConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionFactory"></a>

```csharp
private void ResetConnectionFactory()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionString"></a>

```csharp
private void ResetConnectionString()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionUrl"></a>

```csharp
private void ResetConnectionUrl()
```

##### `ResetConsumerProperties` <a name="ResetConsumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConsumerProperties"></a>

```csharp
private void ResetConsumerProperties()
```

##### `ResetCoreSiteXml` <a name="ResetCoreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetCoreSiteXml"></a>

```csharp
private void ResetCoreSiteXml()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseId"></a>

```csharp
private void ResetDatabaseId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseName"></a>

```csharp
private void ResetDatabaseName()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDbSystemId"></a>

```csharp
private void ResetDbSystemId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDefinedTags"></a>

```csharp
private void ResetDefinedTags()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDeploymentId"></a>

```csharp
private void ResetDeploymentId()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDoesUseSecretIds` <a name="ResetDoesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDoesUseSecretIds"></a>

```csharp
private void ResetDoesUseSecretIds()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFingerprint"></a>

```csharp
private void ResetFingerprint()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFreeformTags"></a>

```csharp
private void ResetFreeformTags()
```

##### `ResetHost` <a name="ResetHost" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetIsLockOverride"></a>

```csharp
private void ResetIsLockOverride()
```

##### `ResetJndiConnectionFactory` <a name="ResetJndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiConnectionFactory"></a>

```csharp
private void ResetJndiConnectionFactory()
```

##### `ResetJndiInitialContextFactory` <a name="ResetJndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiInitialContextFactory"></a>

```csharp
private void ResetJndiInitialContextFactory()
```

##### `ResetJndiProviderUrl` <a name="ResetJndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiProviderUrl"></a>

```csharp
private void ResetJndiProviderUrl()
```

##### `ResetJndiSecurityCredentials` <a name="ResetJndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentials"></a>

```csharp
private void ResetJndiSecurityCredentials()
```

##### `ResetJndiSecurityCredentialsSecretId` <a name="ResetJndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentialsSecretId"></a>

```csharp
private void ResetJndiSecurityCredentialsSecretId()
```

##### `ResetJndiSecurityPrincipal` <a name="ResetJndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityPrincipal"></a>

```csharp
private void ResetJndiSecurityPrincipal()
```

##### `ResetKeyId` <a name="ResetKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyId"></a>

```csharp
private void ResetKeyId()
```

##### `ResetKeyStore` <a name="ResetKeyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStore"></a>

```csharp
private void ResetKeyStore()
```

##### `ResetKeyStorePassword` <a name="ResetKeyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePassword"></a>

```csharp
private void ResetKeyStorePassword()
```

##### `ResetKeyStorePasswordSecretId` <a name="ResetKeyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePasswordSecretId"></a>

```csharp
private void ResetKeyStorePasswordSecretId()
```

##### `ResetKeyStoreSecretId` <a name="ResetKeyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStoreSecretId"></a>

```csharp
private void ResetKeyStoreSecretId()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetLocks"></a>

```csharp
private void ResetLocks()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetNsgIds"></a>

```csharp
private void ResetNsgIds()
```

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPasswordSecretId"></a>

```csharp
private void ResetPasswordSecretId()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```

##### `ResetPrivateKeyFile` <a name="ResetPrivateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFile"></a>

```csharp
private void ResetPrivateKeyFile()
```

##### `ResetPrivateKeyFileSecretId` <a name="ResetPrivateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFileSecretId"></a>

```csharp
private void ResetPrivateKeyFileSecretId()
```

##### `ResetPrivateKeyPassphrase` <a name="ResetPrivateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphrase"></a>

```csharp
private void ResetPrivateKeyPassphrase()
```

##### `ResetPrivateKeyPassphraseSecretId` <a name="ResetPrivateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphraseSecretId"></a>

```csharp
private void ResetPrivateKeyPassphraseSecretId()
```

##### `ResetProducerProperties` <a name="ResetProducerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetProducerProperties"></a>

```csharp
private void ResetProducerProperties()
```

##### `ResetPublicKeyFingerprint` <a name="ResetPublicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPublicKeyFingerprint"></a>

```csharp
private void ResetPublicKeyFingerprint()
```

##### `ResetRedisClusterId` <a name="ResetRedisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRedisClusterId"></a>

```csharp
private void ResetRedisClusterId()
```

##### `ResetRegion` <a name="ResetRegion" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRoutingMethod` <a name="ResetRoutingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRoutingMethod"></a>

```csharp
private void ResetRoutingMethod()
```

##### `ResetSasToken` <a name="ResetSasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasToken"></a>

```csharp
private void ResetSasToken()
```

##### `ResetSasTokenSecretId` <a name="ResetSasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasTokenSecretId"></a>

```csharp
private void ResetSasTokenSecretId()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKey"></a>

```csharp
private void ResetSecretAccessKey()
```

##### `ResetSecretAccessKeySecretId` <a name="ResetSecretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKeySecretId"></a>

```csharp
private void ResetSecretAccessKeySecretId()
```

##### `ResetSecurityProtocol` <a name="ResetSecurityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecurityProtocol"></a>

```csharp
private void ResetSecurityProtocol()
```

##### `ResetServers` <a name="ResetServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServers"></a>

```csharp
private void ResetServers()
```

##### `ResetServiceAccountKeyFile` <a name="ResetServiceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFile"></a>

```csharp
private void ResetServiceAccountKeyFile()
```

##### `ResetServiceAccountKeyFileSecretId` <a name="ResetServiceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFileSecretId"></a>

```csharp
private void ResetServiceAccountKeyFileSecretId()
```

##### `ResetSessionMode` <a name="ResetSessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSessionMode"></a>

```csharp
private void ResetSessionMode()
```

##### `ResetShouldUseJndi` <a name="ResetShouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldUseJndi"></a>

```csharp
private void ResetShouldUseJndi()
```

##### `ResetShouldValidateServerCertificate` <a name="ResetShouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldValidateServerCertificate"></a>

```csharp
private void ResetShouldValidateServerCertificate()
```

##### `ResetSslCa` <a name="ResetSslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCa"></a>

```csharp
private void ResetSslCa()
```

##### `ResetSslCert` <a name="ResetSslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCert"></a>

```csharp
private void ResetSslCert()
```

##### `ResetSslClientKeystash` <a name="ResetSslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystash"></a>

```csharp
private void ResetSslClientKeystash()
```

##### `ResetSslClientKeystashSecretId` <a name="ResetSslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystashSecretId"></a>

```csharp
private void ResetSslClientKeystashSecretId()
```

##### `ResetSslClientKeystoredb` <a name="ResetSslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredb"></a>

```csharp
private void ResetSslClientKeystoredb()
```

##### `ResetSslClientKeystoredbSecretId` <a name="ResetSslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredbSecretId"></a>

```csharp
private void ResetSslClientKeystoredbSecretId()
```

##### `ResetSslCrl` <a name="ResetSslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCrl"></a>

```csharp
private void ResetSslCrl()
```

##### `ResetSslKey` <a name="ResetSslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKey"></a>

```csharp
private void ResetSslKey()
```

##### `ResetSslKeyPassword` <a name="ResetSslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPassword"></a>

```csharp
private void ResetSslKeyPassword()
```

##### `ResetSslKeyPasswordSecretId` <a name="ResetSslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPasswordSecretId"></a>

```csharp
private void ResetSslKeyPasswordSecretId()
```

##### `ResetSslKeySecretId` <a name="ResetSslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeySecretId"></a>

```csharp
private void ResetSslKeySecretId()
```

##### `ResetSslMode` <a name="ResetSslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslMode"></a>

```csharp
private void ResetSslMode()
```

##### `ResetSslServerCertificate` <a name="ResetSslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslServerCertificate"></a>

```csharp
private void ResetSslServerCertificate()
```

##### `ResetStreamPoolId` <a name="ResetStreamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetStreamPoolId"></a>

```csharp
private void ResetStreamPoolId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSubnetId"></a>

```csharp
private void ResetSubnetId()
```

##### `ResetTenancyId` <a name="ResetTenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTenancyId"></a>

```csharp
private void ResetTenancyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTriggerRefresh` <a name="ResetTriggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTriggerRefresh"></a>

```csharp
private void ResetTriggerRefresh()
```

##### `ResetTrustStore` <a name="ResetTrustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStore"></a>

```csharp
private void ResetTrustStore()
```

##### `ResetTrustStorePassword` <a name="ResetTrustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePassword"></a>

```csharp
private void ResetTrustStorePassword()
```

##### `ResetTrustStorePasswordSecretId` <a name="ResetTrustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePasswordSecretId"></a>

```csharp
private void ResetTrustStorePasswordSecretId()
```

##### `ResetTrustStoreSecretId` <a name="ResetTrustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStoreSecretId"></a>

```csharp
private void ResetTrustStoreSecretId()
```

##### `ResetUrl` <a name="ResetUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUserId` <a name="ResetUserId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUserId"></a>

```csharp
private void ResetUserId()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetVaultId"></a>

```csharp
private void ResetVaultId()
```

##### `ResetWallet` <a name="ResetWallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWallet"></a>

```csharp
private void ResetWallet()
```

##### `ResetWalletSecretId` <a name="ResetWalletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWalletSecretId"></a>

```csharp
private void ResetWalletSecretId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateConnection.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateConnection.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateConnection.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

GoldenGateConnection.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoldenGateConnection to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoldenGateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes">AdditionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers">BootstrapServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps">IngressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput">AccountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput">AccountKeySecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput">AccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput">AdditionalAttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput">BootstrapServersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput">ClientSecretSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput">ConnectionFactoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput">ConnectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput">ConsumerPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput">CoreSiteXmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput">DefinedTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput">DoesUseSecretIdsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput">FingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput">JndiConnectionFactoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput">JndiInitialContextFactoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput">JndiProviderUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput">JndiSecurityCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput">JndiSecurityCredentialsSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput">JndiSecurityPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput">KeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput">KeyStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput">KeyStorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput">KeyStorePasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput">KeyStoreSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput">LocksInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput">NsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput">PrivateKeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput">PrivateKeyFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput">PrivateKeyPassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput">PrivateKeyPassphraseSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput">ProducerPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput">PublicKeyFingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput">RedisClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput">RoutingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput">SasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput">SasTokenSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput">SecretAccessKeySecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput">SecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput">ServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput">ServiceAccountKeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput">ServiceAccountKeyFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput">SessionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput">ShouldUseJndiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput">ShouldValidateServerCertificateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput">SslCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput">SslCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput">SslClientKeystashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput">SslClientKeystashSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput">SslClientKeystoredbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput">SslClientKeystoredbSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput">SslCrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput">SslKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput">SslKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput">SslKeyPasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput">SslKeySecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput">SslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput">SslServerCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput">StreamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput">TechnologyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput">TenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput">TriggerRefreshInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput">TrustStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput">TrustStorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput">TrustStorePasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput">TrustStoreSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput">VaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput">WalletInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput">WalletSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey">AccountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId">AccountKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName">AccountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId">ClientSecretSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory">ConnectionFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString">ConnectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties">ConsumerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml">CoreSiteXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId">DeploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds">DoesUseSecretIds</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory">JndiConnectionFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory">JndiInitialContextFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl">JndiProviderUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials">JndiSecurityCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId">JndiSecurityCredentialsSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal">JndiSecurityPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore">KeyStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword">KeyStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId">KeyStorePasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId">KeyStoreSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile">PrivateKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId">PrivateKeyFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId">PrivateKeyPassphraseSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties">ProducerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint">PublicKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId">RedisClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod">RoutingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken">SasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId">SasTokenSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId">SecretAccessKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers">Servers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile">ServiceAccountKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId">ServiceAccountKeyFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode">SessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi">ShouldUseJndi</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate">ShouldValidateServerCertificate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa">SslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert">SslCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash">SslClientKeystash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId">SslClientKeystashSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb">SslClientKeystoredb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId">SslClientKeystoredbSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl">SslCrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey">SslKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword">SslKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId">SslKeyPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId">SslKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate">SslServerCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId">StreamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType">TechnologyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId">TenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh">TriggerRefresh</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore">TrustStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword">TrustStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId">TrustStorePasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId">TrustStoreSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId">VaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet">Wallet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId">WalletSecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdditionalAttributes`<sup>Required</sup> <a name="AdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes"></a>

```csharp
public GoldenGateConnectionAdditionalAttributesList AdditionalAttributes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a>

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers"></a>

```csharp
public GoldenGateConnectionBootstrapServersList BootstrapServers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a>

---

##### `IngressIps`<sup>Required</sup> <a name="IngressIps" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps"></a>

```csharp
public GoldenGateConnectionIngressIpsList IngressIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks"></a>

```csharp
public GoldenGateConnectionLocksList Locks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts"></a>

```csharp
public GoldenGateConnectionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput"></a>

```csharp
public string AccountKeyInput { get; }
```

- *Type:* string

---

##### `AccountKeySecretIdInput`<sup>Optional</sup> <a name="AccountKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput"></a>

```csharp
public string AccountKeySecretIdInput { get; }
```

- *Type:* string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput"></a>

```csharp
public string AccountNameInput { get; }
```

- *Type:* string

---

##### `AdditionalAttributesInput`<sup>Optional</sup> <a name="AdditionalAttributesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput"></a>

```csharp
public object AdditionalAttributesInput { get; }
```

- *Type:* object

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput"></a>

```csharp
public string AuthenticationModeInput { get; }
```

- *Type:* string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput"></a>

```csharp
public string AzureTenantIdInput { get; }
```

- *Type:* string

---

##### `BootstrapServersInput`<sup>Optional</sup> <a name="BootstrapServersInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput"></a>

```csharp
public object BootstrapServersInput { get; }
```

- *Type:* object

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretSecretIdInput`<sup>Optional</sup> <a name="ClientSecretSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput"></a>

```csharp
public string ClientSecretSecretIdInput { get; }
```

- *Type:* string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `ConnectionFactoryInput`<sup>Optional</sup> <a name="ConnectionFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput"></a>

```csharp
public string ConnectionFactoryInput { get; }
```

- *Type:* string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput"></a>

```csharp
public string ConnectionStringInput { get; }
```

- *Type:* string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput"></a>

```csharp
public string ConnectionTypeInput { get; }
```

- *Type:* string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput"></a>

```csharp
public string ConnectionUrlInput { get; }
```

- *Type:* string

---

##### `ConsumerPropertiesInput`<sup>Optional</sup> <a name="ConsumerPropertiesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput"></a>

```csharp
public string ConsumerPropertiesInput { get; }
```

- *Type:* string

---

##### `CoreSiteXmlInput`<sup>Optional</sup> <a name="CoreSiteXmlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput"></a>

```csharp
public string CoreSiteXmlInput { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput"></a>

```csharp
public string DbSystemIdInput { get; }
```

- *Type:* string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput"></a>

```csharp
public string DeploymentIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DoesUseSecretIdsInput`<sup>Optional</sup> <a name="DoesUseSecretIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput"></a>

```csharp
public object DoesUseSecretIdsInput { get; }
```

- *Type:* object

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput"></a>

```csharp
public string FingerprintInput { get; }
```

- *Type:* string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput"></a>

```csharp
public object IsLockOverrideInput { get; }
```

- *Type:* object

---

##### `JndiConnectionFactoryInput`<sup>Optional</sup> <a name="JndiConnectionFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput"></a>

```csharp
public string JndiConnectionFactoryInput { get; }
```

- *Type:* string

---

##### `JndiInitialContextFactoryInput`<sup>Optional</sup> <a name="JndiInitialContextFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput"></a>

```csharp
public string JndiInitialContextFactoryInput { get; }
```

- *Type:* string

---

##### `JndiProviderUrlInput`<sup>Optional</sup> <a name="JndiProviderUrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput"></a>

```csharp
public string JndiProviderUrlInput { get; }
```

- *Type:* string

---

##### `JndiSecurityCredentialsInput`<sup>Optional</sup> <a name="JndiSecurityCredentialsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput"></a>

```csharp
public string JndiSecurityCredentialsInput { get; }
```

- *Type:* string

---

##### `JndiSecurityCredentialsSecretIdInput`<sup>Optional</sup> <a name="JndiSecurityCredentialsSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput"></a>

```csharp
public string JndiSecurityCredentialsSecretIdInput { get; }
```

- *Type:* string

---

##### `JndiSecurityPrincipalInput`<sup>Optional</sup> <a name="JndiSecurityPrincipalInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput"></a>

```csharp
public string JndiSecurityPrincipalInput { get; }
```

- *Type:* string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput"></a>

```csharp
public string KeyIdInput { get; }
```

- *Type:* string

---

##### `KeyStoreInput`<sup>Optional</sup> <a name="KeyStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput"></a>

```csharp
public string KeyStoreInput { get; }
```

- *Type:* string

---

##### `KeyStorePasswordInput`<sup>Optional</sup> <a name="KeyStorePasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput"></a>

```csharp
public string KeyStorePasswordInput { get; }
```

- *Type:* string

---

##### `KeyStorePasswordSecretIdInput`<sup>Optional</sup> <a name="KeyStorePasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput"></a>

```csharp
public string KeyStorePasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `KeyStoreSecretIdInput`<sup>Optional</sup> <a name="KeyStoreSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput"></a>

```csharp
public string KeyStoreSecretIdInput { get; }
```

- *Type:* string

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput"></a>

```csharp
public object LocksInput { get; }
```

- *Type:* object

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput"></a>

```csharp
public string[] NsgIdsInput { get; }
```

- *Type:* string[]

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput"></a>

```csharp
public string PasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `PrivateKeyFileInput`<sup>Optional</sup> <a name="PrivateKeyFileInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput"></a>

```csharp
public string PrivateKeyFileInput { get; }
```

- *Type:* string

---

##### `PrivateKeyFileSecretIdInput`<sup>Optional</sup> <a name="PrivateKeyFileSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput"></a>

```csharp
public string PrivateKeyFileSecretIdInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPassphraseInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput"></a>

```csharp
public string PrivateKeyPassphraseInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPassphraseSecretIdInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput"></a>

```csharp
public string PrivateKeyPassphraseSecretIdInput { get; }
```

- *Type:* string

---

##### `ProducerPropertiesInput`<sup>Optional</sup> <a name="ProducerPropertiesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput"></a>

```csharp
public string ProducerPropertiesInput { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprintInput`<sup>Optional</sup> <a name="PublicKeyFingerprintInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput"></a>

```csharp
public string PublicKeyFingerprintInput { get; }
```

- *Type:* string

---

##### `RedisClusterIdInput`<sup>Optional</sup> <a name="RedisClusterIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput"></a>

```csharp
public string RedisClusterIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoutingMethodInput`<sup>Optional</sup> <a name="RoutingMethodInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput"></a>

```csharp
public string RoutingMethodInput { get; }
```

- *Type:* string

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput"></a>

```csharp
public string SasTokenInput { get; }
```

- *Type:* string

---

##### `SasTokenSecretIdInput`<sup>Optional</sup> <a name="SasTokenSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput"></a>

```csharp
public string SasTokenSecretIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeySecretIdInput`<sup>Optional</sup> <a name="SecretAccessKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput"></a>

```csharp
public string SecretAccessKeySecretIdInput { get; }
```

- *Type:* string

---

##### `SecurityProtocolInput`<sup>Optional</sup> <a name="SecurityProtocolInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput"></a>

```csharp
public string SecurityProtocolInput { get; }
```

- *Type:* string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput"></a>

```csharp
public string ServersInput { get; }
```

- *Type:* string

---

##### `ServiceAccountKeyFileInput`<sup>Optional</sup> <a name="ServiceAccountKeyFileInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput"></a>

```csharp
public string ServiceAccountKeyFileInput { get; }
```

- *Type:* string

---

##### `ServiceAccountKeyFileSecretIdInput`<sup>Optional</sup> <a name="ServiceAccountKeyFileSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput"></a>

```csharp
public string ServiceAccountKeyFileSecretIdInput { get; }
```

- *Type:* string

---

##### `SessionModeInput`<sup>Optional</sup> <a name="SessionModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput"></a>

```csharp
public string SessionModeInput { get; }
```

- *Type:* string

---

##### `ShouldUseJndiInput`<sup>Optional</sup> <a name="ShouldUseJndiInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput"></a>

```csharp
public object ShouldUseJndiInput { get; }
```

- *Type:* object

---

##### `ShouldValidateServerCertificateInput`<sup>Optional</sup> <a name="ShouldValidateServerCertificateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput"></a>

```csharp
public object ShouldValidateServerCertificateInput { get; }
```

- *Type:* object

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput"></a>

```csharp
public string SslCaInput { get; }
```

- *Type:* string

---

##### `SslCertInput`<sup>Optional</sup> <a name="SslCertInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput"></a>

```csharp
public string SslCertInput { get; }
```

- *Type:* string

---

##### `SslClientKeystashInput`<sup>Optional</sup> <a name="SslClientKeystashInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput"></a>

```csharp
public string SslClientKeystashInput { get; }
```

- *Type:* string

---

##### `SslClientKeystashSecretIdInput`<sup>Optional</sup> <a name="SslClientKeystashSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput"></a>

```csharp
public string SslClientKeystashSecretIdInput { get; }
```

- *Type:* string

---

##### `SslClientKeystoredbInput`<sup>Optional</sup> <a name="SslClientKeystoredbInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput"></a>

```csharp
public string SslClientKeystoredbInput { get; }
```

- *Type:* string

---

##### `SslClientKeystoredbSecretIdInput`<sup>Optional</sup> <a name="SslClientKeystoredbSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput"></a>

```csharp
public string SslClientKeystoredbSecretIdInput { get; }
```

- *Type:* string

---

##### `SslCrlInput`<sup>Optional</sup> <a name="SslCrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput"></a>

```csharp
public string SslCrlInput { get; }
```

- *Type:* string

---

##### `SslKeyInput`<sup>Optional</sup> <a name="SslKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput"></a>

```csharp
public string SslKeyInput { get; }
```

- *Type:* string

---

##### `SslKeyPasswordInput`<sup>Optional</sup> <a name="SslKeyPasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput"></a>

```csharp
public string SslKeyPasswordInput { get; }
```

- *Type:* string

---

##### `SslKeyPasswordSecretIdInput`<sup>Optional</sup> <a name="SslKeyPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput"></a>

```csharp
public string SslKeyPasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `SslKeySecretIdInput`<sup>Optional</sup> <a name="SslKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput"></a>

```csharp
public string SslKeySecretIdInput { get; }
```

- *Type:* string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput"></a>

```csharp
public string SslModeInput { get; }
```

- *Type:* string

---

##### `SslServerCertificateInput`<sup>Optional</sup> <a name="SslServerCertificateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput"></a>

```csharp
public string SslServerCertificateInput { get; }
```

- *Type:* string

---

##### `StreamPoolIdInput`<sup>Optional</sup> <a name="StreamPoolIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput"></a>

```csharp
public string StreamPoolIdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TechnologyTypeInput`<sup>Optional</sup> <a name="TechnologyTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput"></a>

```csharp
public string TechnologyTypeInput { get; }
```

- *Type:* string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput"></a>

```csharp
public string TenancyIdInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TriggerRefreshInput`<sup>Optional</sup> <a name="TriggerRefreshInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput"></a>

```csharp
public object TriggerRefreshInput { get; }
```

- *Type:* object

---

##### `TrustStoreInput`<sup>Optional</sup> <a name="TrustStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput"></a>

```csharp
public string TrustStoreInput { get; }
```

- *Type:* string

---

##### `TrustStorePasswordInput`<sup>Optional</sup> <a name="TrustStorePasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput"></a>

```csharp
public string TrustStorePasswordInput { get; }
```

- *Type:* string

---

##### `TrustStorePasswordSecretIdInput`<sup>Optional</sup> <a name="TrustStorePasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput"></a>

```csharp
public string TrustStorePasswordSecretIdInput { get; }
```

- *Type:* string

---

##### `TrustStoreSecretIdInput`<sup>Optional</sup> <a name="TrustStoreSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput"></a>

```csharp
public string TrustStoreSecretIdInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput"></a>

```csharp
public string VaultIdInput { get; }
```

- *Type:* string

---

##### `WalletInput`<sup>Optional</sup> <a name="WalletInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput"></a>

```csharp
public string WalletInput { get; }
```

- *Type:* string

---

##### `WalletSecretIdInput`<sup>Optional</sup> <a name="WalletSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput"></a>

```csharp
public string WalletSecretIdInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey"></a>

```csharp
public string AccountKey { get; }
```

- *Type:* string

---

##### `AccountKeySecretId`<sup>Required</sup> <a name="AccountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId"></a>

```csharp
public string AccountKeySecretId { get; }
```

- *Type:* string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName"></a>

```csharp
public string AccountName { get; }
```

- *Type:* string

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretSecretId`<sup>Required</sup> <a name="ClientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId"></a>

```csharp
public string ClientSecretSecretId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionFactory`<sup>Required</sup> <a name="ConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory"></a>

```csharp
public string ConnectionFactory { get; }
```

- *Type:* string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString"></a>

```csharp
public string ConnectionString { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; }
```

- *Type:* string

---

##### `ConsumerProperties`<sup>Required</sup> <a name="ConsumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties"></a>

```csharp
public string ConsumerProperties { get; }
```

- *Type:* string

---

##### `CoreSiteXml`<sup>Required</sup> <a name="CoreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml"></a>

```csharp
public string CoreSiteXml { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId"></a>

```csharp
public string DeploymentId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DoesUseSecretIds`<sup>Required</sup> <a name="DoesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds"></a>

```csharp
public object DoesUseSecretIds { get; }
```

- *Type:* object

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; }
```

- *Type:* object

---

##### `JndiConnectionFactory`<sup>Required</sup> <a name="JndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory"></a>

```csharp
public string JndiConnectionFactory { get; }
```

- *Type:* string

---

##### `JndiInitialContextFactory`<sup>Required</sup> <a name="JndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory"></a>

```csharp
public string JndiInitialContextFactory { get; }
```

- *Type:* string

---

##### `JndiProviderUrl`<sup>Required</sup> <a name="JndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl"></a>

```csharp
public string JndiProviderUrl { get; }
```

- *Type:* string

---

##### `JndiSecurityCredentials`<sup>Required</sup> <a name="JndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials"></a>

```csharp
public string JndiSecurityCredentials { get; }
```

- *Type:* string

---

##### `JndiSecurityCredentialsSecretId`<sup>Required</sup> <a name="JndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId"></a>

```csharp
public string JndiSecurityCredentialsSecretId { get; }
```

- *Type:* string

---

##### `JndiSecurityPrincipal`<sup>Required</sup> <a name="JndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal"></a>

```csharp
public string JndiSecurityPrincipal { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `KeyStore`<sup>Required</sup> <a name="KeyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore"></a>

```csharp
public string KeyStore { get; }
```

- *Type:* string

---

##### `KeyStorePassword`<sup>Required</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword"></a>

```csharp
public string KeyStorePassword { get; }
```

- *Type:* string

---

##### `KeyStorePasswordSecretId`<sup>Required</sup> <a name="KeyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId"></a>

```csharp
public string KeyStorePasswordSecretId { get; }
```

- *Type:* string

---

##### `KeyStoreSecretId`<sup>Required</sup> <a name="KeyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId"></a>

```csharp
public string KeyStoreSecretId { get; }
```

- *Type:* string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; }
```

- *Type:* string[]

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `PrivateKeyFile`<sup>Required</sup> <a name="PrivateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile"></a>

```csharp
public string PrivateKeyFile { get; }
```

- *Type:* string

---

##### `PrivateKeyFileSecretId`<sup>Required</sup> <a name="PrivateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId"></a>

```csharp
public string PrivateKeyFileSecretId { get; }
```

- *Type:* string

---

##### `PrivateKeyPassphrase`<sup>Required</sup> <a name="PrivateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase"></a>

```csharp
public string PrivateKeyPassphrase { get; }
```

- *Type:* string

---

##### `PrivateKeyPassphraseSecretId`<sup>Required</sup> <a name="PrivateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId"></a>

```csharp
public string PrivateKeyPassphraseSecretId { get; }
```

- *Type:* string

---

##### `ProducerProperties`<sup>Required</sup> <a name="ProducerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties"></a>

```csharp
public string ProducerProperties { get; }
```

- *Type:* string

---

##### `PublicKeyFingerprint`<sup>Required</sup> <a name="PublicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint"></a>

```csharp
public string PublicKeyFingerprint { get; }
```

- *Type:* string

---

##### `RedisClusterId`<sup>Required</sup> <a name="RedisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId"></a>

```csharp
public string RedisClusterId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RoutingMethod`<sup>Required</sup> <a name="RoutingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod"></a>

```csharp
public string RoutingMethod { get; }
```

- *Type:* string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken"></a>

```csharp
public string SasToken { get; }
```

- *Type:* string

---

##### `SasTokenSecretId`<sup>Required</sup> <a name="SasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId"></a>

```csharp
public string SasTokenSecretId { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `SecretAccessKeySecretId`<sup>Required</sup> <a name="SecretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId"></a>

```csharp
public string SecretAccessKeySecretId { get; }
```

- *Type:* string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; }
```

- *Type:* string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers"></a>

```csharp
public string Servers { get; }
```

- *Type:* string

---

##### `ServiceAccountKeyFile`<sup>Required</sup> <a name="ServiceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile"></a>

```csharp
public string ServiceAccountKeyFile { get; }
```

- *Type:* string

---

##### `ServiceAccountKeyFileSecretId`<sup>Required</sup> <a name="ServiceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId"></a>

```csharp
public string ServiceAccountKeyFileSecretId { get; }
```

- *Type:* string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode"></a>

```csharp
public string SessionMode { get; }
```

- *Type:* string

---

##### `ShouldUseJndi`<sup>Required</sup> <a name="ShouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi"></a>

```csharp
public object ShouldUseJndi { get; }
```

- *Type:* object

---

##### `ShouldValidateServerCertificate`<sup>Required</sup> <a name="ShouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate"></a>

```csharp
public object ShouldValidateServerCertificate { get; }
```

- *Type:* object

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa"></a>

```csharp
public string SslCa { get; }
```

- *Type:* string

---

##### `SslCert`<sup>Required</sup> <a name="SslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert"></a>

```csharp
public string SslCert { get; }
```

- *Type:* string

---

##### `SslClientKeystash`<sup>Required</sup> <a name="SslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash"></a>

```csharp
public string SslClientKeystash { get; }
```

- *Type:* string

---

##### `SslClientKeystashSecretId`<sup>Required</sup> <a name="SslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId"></a>

```csharp
public string SslClientKeystashSecretId { get; }
```

- *Type:* string

---

##### `SslClientKeystoredb`<sup>Required</sup> <a name="SslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb"></a>

```csharp
public string SslClientKeystoredb { get; }
```

- *Type:* string

---

##### `SslClientKeystoredbSecretId`<sup>Required</sup> <a name="SslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId"></a>

```csharp
public string SslClientKeystoredbSecretId { get; }
```

- *Type:* string

---

##### `SslCrl`<sup>Required</sup> <a name="SslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl"></a>

```csharp
public string SslCrl { get; }
```

- *Type:* string

---

##### `SslKey`<sup>Required</sup> <a name="SslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey"></a>

```csharp
public string SslKey { get; }
```

- *Type:* string

---

##### `SslKeyPassword`<sup>Required</sup> <a name="SslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword"></a>

```csharp
public string SslKeyPassword { get; }
```

- *Type:* string

---

##### `SslKeyPasswordSecretId`<sup>Required</sup> <a name="SslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId"></a>

```csharp
public string SslKeyPasswordSecretId { get; }
```

- *Type:* string

---

##### `SslKeySecretId`<sup>Required</sup> <a name="SslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId"></a>

```csharp
public string SslKeySecretId { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `SslServerCertificate`<sup>Required</sup> <a name="SslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate"></a>

```csharp
public string SslServerCertificate { get; }
```

- *Type:* string

---

##### `StreamPoolId`<sup>Required</sup> <a name="StreamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId"></a>

```csharp
public string StreamPoolId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TechnologyType`<sup>Required</sup> <a name="TechnologyType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType"></a>

```csharp
public string TechnologyType { get; }
```

- *Type:* string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId"></a>

```csharp
public string TenancyId { get; }
```

- *Type:* string

---

##### `TriggerRefresh`<sup>Required</sup> <a name="TriggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh"></a>

```csharp
public object TriggerRefresh { get; }
```

- *Type:* object

---

##### `TrustStore`<sup>Required</sup> <a name="TrustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore"></a>

```csharp
public string TrustStore { get; }
```

- *Type:* string

---

##### `TrustStorePassword`<sup>Required</sup> <a name="TrustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword"></a>

```csharp
public string TrustStorePassword { get; }
```

- *Type:* string

---

##### `TrustStorePasswordSecretId`<sup>Required</sup> <a name="TrustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId"></a>

```csharp
public string TrustStorePasswordSecretId { get; }
```

- *Type:* string

---

##### `TrustStoreSecretId`<sup>Required</sup> <a name="TrustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId"></a>

```csharp
public string TrustStoreSecretId { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId"></a>

```csharp
public string VaultId { get; }
```

- *Type:* string

---

##### `Wallet`<sup>Required</sup> <a name="Wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet"></a>

```csharp
public string Wallet { get; }
```

- *Type:* string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId"></a>

```csharp
public string WalletSecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateConnectionAdditionalAttributes <a name="GoldenGateConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionAdditionalAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}.

---

### GoldenGateConnectionBootstrapServers <a name="GoldenGateConnectionBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionBootstrapServers {
    string Host = null,
    double Port = null,
    string PrivateIp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

### GoldenGateConnectionConfig <a name="GoldenGateConnectionConfig" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ConnectionType,
    string DisplayName,
    string TechnologyType,
    string AccessKeyId = null,
    string AccountKey = null,
    string AccountKeySecretId = null,
    string AccountName = null,
    object AdditionalAttributes = null,
    string AuthenticationMode = null,
    string AuthenticationType = null,
    string AzureTenantId = null,
    object BootstrapServers = null,
    string ClientId = null,
    string ClientSecret = null,
    string ClientSecretSecretId = null,
    string ConnectionFactory = null,
    string ConnectionString = null,
    string ConnectionUrl = null,
    string ConsumerProperties = null,
    string CoreSiteXml = null,
    string DatabaseId = null,
    string DatabaseName = null,
    string DbSystemId = null,
    System.Collections.Generic.IDictionary<string, string> DefinedTags = null,
    string DeploymentId = null,
    string Description = null,
    object DoesUseSecretIds = null,
    string Endpoint = null,
    string Fingerprint = null,
    System.Collections.Generic.IDictionary<string, string> FreeformTags = null,
    string Host = null,
    string Id = null,
    object IsLockOverride = null,
    string JndiConnectionFactory = null,
    string JndiInitialContextFactory = null,
    string JndiProviderUrl = null,
    string JndiSecurityCredentials = null,
    string JndiSecurityCredentialsSecretId = null,
    string JndiSecurityPrincipal = null,
    string KeyId = null,
    string KeyStore = null,
    string KeyStorePassword = null,
    string KeyStorePasswordSecretId = null,
    string KeyStoreSecretId = null,
    object Locks = null,
    string[] NsgIds = null,
    string Password = null,
    string PasswordSecretId = null,
    double Port = null,
    string PrivateIp = null,
    string PrivateKeyFile = null,
    string PrivateKeyFileSecretId = null,
    string PrivateKeyPassphrase = null,
    string PrivateKeyPassphraseSecretId = null,
    string ProducerProperties = null,
    string PublicKeyFingerprint = null,
    string RedisClusterId = null,
    string Region = null,
    string RoutingMethod = null,
    string SasToken = null,
    string SasTokenSecretId = null,
    string SecretAccessKey = null,
    string SecretAccessKeySecretId = null,
    string SecurityProtocol = null,
    string Servers = null,
    string ServiceAccountKeyFile = null,
    string ServiceAccountKeyFileSecretId = null,
    string SessionMode = null,
    object ShouldUseJndi = null,
    object ShouldValidateServerCertificate = null,
    string SslCa = null,
    string SslCert = null,
    string SslClientKeystash = null,
    string SslClientKeystashSecretId = null,
    string SslClientKeystoredb = null,
    string SslClientKeystoredbSecretId = null,
    string SslCrl = null,
    string SslKey = null,
    string SslKeyPassword = null,
    string SslKeyPasswordSecretId = null,
    string SslKeySecretId = null,
    string SslMode = null,
    string SslServerCertificate = null,
    string StreamPoolId = null,
    string SubnetId = null,
    string TenancyId = null,
    GoldenGateConnectionTimeouts Timeouts = null,
    object TriggerRefresh = null,
    string TrustStore = null,
    string TrustStorePassword = null,
    string TrustStorePasswordSecretId = null,
    string TrustStoreSecretId = null,
    string Url = null,
    string UserId = null,
    string Username = null,
    string VaultId = null,
    string Wallet = null,
    string WalletSecretId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType">ConnectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType">TechnologyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey">AccountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId">AccountKeySecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName">AccountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes">AdditionalAttributes</a></code> | <code>object</code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers">BootstrapServers</a></code> | <code>object</code> | bootstrap_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId">ClientSecretSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory">ConnectionFactory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString">ConnectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl">ConnectionUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties">ConsumerProperties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml">CoreSiteXml</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId">DatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId">DbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags">DefinedTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId">DeploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds">DoesUseSecretIds</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint">Fingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags">FreeformTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride">IsLockOverride</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory">JndiConnectionFactory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory">JndiInitialContextFactory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl">JndiProviderUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials">JndiSecurityCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId">JndiSecurityCredentialsSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal">JndiSecurityPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId">KeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore">KeyStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword">KeyStorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId">KeyStorePasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId">KeyStoreSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks">Locks</a></code> | <code>object</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds">NsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId">PasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp">PrivateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile">PrivateKeyFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId">PrivateKeyFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId">PrivateKeyPassphraseSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties">ProducerProperties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint">PublicKeyFingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId">RedisClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod">RoutingMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken">SasToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId">SasTokenSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId">SecretAccessKeySecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol">SecurityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers">Servers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile">ServiceAccountKeyFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId">ServiceAccountKeyFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode">SessionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi">ShouldUseJndi</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate">ShouldValidateServerCertificate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa">SslCa</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert">SslCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash">SslClientKeystash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId">SslClientKeystashSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb">SslClientKeystoredb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId">SslClientKeystoredbSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl">SslCrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey">SslKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword">SslKeyPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId">SslKeyPasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId">SslKeySecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode">SslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate">SslServerCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId">StreamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId">TenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh">TriggerRefresh</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore">TrustStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword">TrustStorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId">TrustStorePasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId">TrustStoreSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId">VaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet">Wallet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId">WalletSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}.

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType"></a>

```csharp
public string ConnectionType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}.

---

##### `TechnologyType`<sup>Required</sup> <a name="TechnologyType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType"></a>

```csharp
public string TechnologyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}.

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}.

---

##### `AccountKey`<sup>Optional</sup> <a name="AccountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey"></a>

```csharp
public string AccountKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}.

---

##### `AccountKeySecretId`<sup>Optional</sup> <a name="AccountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId"></a>

```csharp
public string AccountKeySecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}.

---

##### `AccountName`<sup>Optional</sup> <a name="AccountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName"></a>

```csharp
public string AccountName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}.

---

##### `AdditionalAttributes`<sup>Optional</sup> <a name="AdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes"></a>

```csharp
public object AdditionalAttributes { get; set; }
```

- *Type:* object

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#additional_attributes GoldenGateConnection#additional_attributes}

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode"></a>

```csharp
public string AuthenticationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}.

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}.

---

##### `BootstrapServers`<sup>Optional</sup> <a name="BootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers"></a>

```csharp
public object BootstrapServers { get; set; }
```

- *Type:* object

bootstrap_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#bootstrap_servers GoldenGateConnection#bootstrap_servers}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}.

---

##### `ClientSecretSecretId`<sup>Optional</sup> <a name="ClientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId"></a>

```csharp
public string ClientSecretSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}.

---

##### `ConnectionFactory`<sup>Optional</sup> <a name="ConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory"></a>

```csharp
public string ConnectionFactory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString"></a>

```csharp
public string ConnectionString { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}.

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl"></a>

```csharp
public string ConnectionUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}.

---

##### `ConsumerProperties`<sup>Optional</sup> <a name="ConsumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties"></a>

```csharp
public string ConsumerProperties { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}.

---

##### `CoreSiteXml`<sup>Optional</sup> <a name="CoreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml"></a>

```csharp
public string CoreSiteXml { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId"></a>

```csharp
public string DbSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefinedTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}.

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId"></a>

```csharp
public string DeploymentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}.

---

##### `DoesUseSecretIds`<sup>Optional</sup> <a name="DoesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds"></a>

```csharp
public object DoesUseSecretIds { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}.

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint"></a>

```csharp
public string Fingerprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FreeformTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride"></a>

```csharp
public object IsLockOverride { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}.

---

##### `JndiConnectionFactory`<sup>Optional</sup> <a name="JndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory"></a>

```csharp
public string JndiConnectionFactory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}.

---

##### `JndiInitialContextFactory`<sup>Optional</sup> <a name="JndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory"></a>

```csharp
public string JndiInitialContextFactory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}.

---

##### `JndiProviderUrl`<sup>Optional</sup> <a name="JndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl"></a>

```csharp
public string JndiProviderUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}.

---

##### `JndiSecurityCredentials`<sup>Optional</sup> <a name="JndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials"></a>

```csharp
public string JndiSecurityCredentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}.

---

##### `JndiSecurityCredentialsSecretId`<sup>Optional</sup> <a name="JndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId"></a>

```csharp
public string JndiSecurityCredentialsSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}.

---

##### `JndiSecurityPrincipal`<sup>Optional</sup> <a name="JndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal"></a>

```csharp
public string JndiSecurityPrincipal { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId"></a>

```csharp
public string KeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}.

---

##### `KeyStore`<sup>Optional</sup> <a name="KeyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore"></a>

```csharp
public string KeyStore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}.

---

##### `KeyStorePassword`<sup>Optional</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword"></a>

```csharp
public string KeyStorePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}.

---

##### `KeyStorePasswordSecretId`<sup>Optional</sup> <a name="KeyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId"></a>

```csharp
public string KeyStorePasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}.

---

##### `KeyStoreSecretId`<sup>Optional</sup> <a name="KeyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId"></a>

```csharp
public string KeyStoreSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks"></a>

```csharp
public object Locks { get; set; }
```

- *Type:* object

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#locks GoldenGateConnection#locks}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds"></a>

```csharp
public string[] NsgIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId"></a>

```csharp
public string PasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp"></a>

```csharp
public string PrivateIp { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

##### `PrivateKeyFile`<sup>Optional</sup> <a name="PrivateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile"></a>

```csharp
public string PrivateKeyFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}.

---

##### `PrivateKeyFileSecretId`<sup>Optional</sup> <a name="PrivateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId"></a>

```csharp
public string PrivateKeyFileSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}.

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase"></a>

```csharp
public string PrivateKeyPassphrase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}.

---

##### `PrivateKeyPassphraseSecretId`<sup>Optional</sup> <a name="PrivateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId"></a>

```csharp
public string PrivateKeyPassphraseSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}.

---

##### `ProducerProperties`<sup>Optional</sup> <a name="ProducerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties"></a>

```csharp
public string ProducerProperties { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}.

---

##### `PublicKeyFingerprint`<sup>Optional</sup> <a name="PublicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint"></a>

```csharp
public string PublicKeyFingerprint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}.

---

##### `RedisClusterId`<sup>Optional</sup> <a name="RedisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId"></a>

```csharp
public string RedisClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}.

---

##### `RoutingMethod`<sup>Optional</sup> <a name="RoutingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod"></a>

```csharp
public string RoutingMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}.

---

##### `SasToken`<sup>Optional</sup> <a name="SasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken"></a>

```csharp
public string SasToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}.

---

##### `SasTokenSecretId`<sup>Optional</sup> <a name="SasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId"></a>

```csharp
public string SasTokenSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}.

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}.

---

##### `SecretAccessKeySecretId`<sup>Optional</sup> <a name="SecretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId"></a>

```csharp
public string SecretAccessKeySecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}.

---

##### `SecurityProtocol`<sup>Optional</sup> <a name="SecurityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol"></a>

```csharp
public string SecurityProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}.

---

##### `Servers`<sup>Optional</sup> <a name="Servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers"></a>

```csharp
public string Servers { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}.

---

##### `ServiceAccountKeyFile`<sup>Optional</sup> <a name="ServiceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile"></a>

```csharp
public string ServiceAccountKeyFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}.

---

##### `ServiceAccountKeyFileSecretId`<sup>Optional</sup> <a name="ServiceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId"></a>

```csharp
public string ServiceAccountKeyFileSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}.

---

##### `SessionMode`<sup>Optional</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode"></a>

```csharp
public string SessionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}.

---

##### `ShouldUseJndi`<sup>Optional</sup> <a name="ShouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi"></a>

```csharp
public object ShouldUseJndi { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}.

---

##### `ShouldValidateServerCertificate`<sup>Optional</sup> <a name="ShouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate"></a>

```csharp
public object ShouldValidateServerCertificate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}.

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa"></a>

```csharp
public string SslCa { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}.

---

##### `SslCert`<sup>Optional</sup> <a name="SslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert"></a>

```csharp
public string SslCert { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}.

---

##### `SslClientKeystash`<sup>Optional</sup> <a name="SslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash"></a>

```csharp
public string SslClientKeystash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}.

---

##### `SslClientKeystashSecretId`<sup>Optional</sup> <a name="SslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId"></a>

```csharp
public string SslClientKeystashSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}.

---

##### `SslClientKeystoredb`<sup>Optional</sup> <a name="SslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb"></a>

```csharp
public string SslClientKeystoredb { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}.

---

##### `SslClientKeystoredbSecretId`<sup>Optional</sup> <a name="SslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId"></a>

```csharp
public string SslClientKeystoredbSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}.

---

##### `SslCrl`<sup>Optional</sup> <a name="SslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl"></a>

```csharp
public string SslCrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}.

---

##### `SslKey`<sup>Optional</sup> <a name="SslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey"></a>

```csharp
public string SslKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}.

---

##### `SslKeyPassword`<sup>Optional</sup> <a name="SslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword"></a>

```csharp
public string SslKeyPassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}.

---

##### `SslKeyPasswordSecretId`<sup>Optional</sup> <a name="SslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId"></a>

```csharp
public string SslKeyPasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}.

---

##### `SslKeySecretId`<sup>Optional</sup> <a name="SslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId"></a>

```csharp
public string SslKeySecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode"></a>

```csharp
public string SslMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}.

---

##### `SslServerCertificate`<sup>Optional</sup> <a name="SslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate"></a>

```csharp
public string SslServerCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}.

---

##### `StreamPoolId`<sup>Optional</sup> <a name="StreamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId"></a>

```csharp
public string StreamPoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}.

---

##### `TenancyId`<sup>Optional</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId"></a>

```csharp
public string TenancyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts"></a>

```csharp
public GoldenGateConnectionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#timeouts GoldenGateConnection#timeouts}

---

##### `TriggerRefresh`<sup>Optional</sup> <a name="TriggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh"></a>

```csharp
public object TriggerRefresh { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}.

---

##### `TrustStore`<sup>Optional</sup> <a name="TrustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore"></a>

```csharp
public string TrustStore { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}.

---

##### `TrustStorePassword`<sup>Optional</sup> <a name="TrustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword"></a>

```csharp
public string TrustStorePassword { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}.

---

##### `TrustStorePasswordSecretId`<sup>Optional</sup> <a name="TrustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId"></a>

```csharp
public string TrustStorePasswordSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}.

---

##### `TrustStoreSecretId`<sup>Optional</sup> <a name="TrustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId"></a>

```csharp
public string TrustStoreSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId"></a>

```csharp
public string VaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}.

---

##### `Wallet`<sup>Optional</sup> <a name="Wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet"></a>

```csharp
public string Wallet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}.

---

##### `WalletSecretId`<sup>Optional</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId"></a>

```csharp
public string WalletSecretId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}.

---

### GoldenGateConnectionIngressIps <a name="GoldenGateConnectionIngressIps" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionIngressIps {

};
```


### GoldenGateConnectionLocks <a name="GoldenGateConnectionLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionLocks {
    string Type,
    string Message = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message">Message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}.

---

### GoldenGateConnectionTimeouts <a name="GoldenGateConnectionTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateConnectionAdditionalAttributesList <a name="GoldenGateConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionAdditionalAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get"></a>

```csharp
private GoldenGateConnectionAdditionalAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateConnectionAdditionalAttributesOutputReference <a name="GoldenGateConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionAdditionalAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateConnectionBootstrapServersList <a name="GoldenGateConnectionBootstrapServersList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionBootstrapServersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get"></a>

```csharp
private GoldenGateConnectionBootstrapServersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateConnectionBootstrapServersOutputReference <a name="GoldenGateConnectionBootstrapServersOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionBootstrapServersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPrivateIp">ResetPrivateIp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPrivateIp"></a>

```csharp
private void ResetPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp">PrivateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput"></a>

```csharp
public string PrivateIpInput { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp"></a>

```csharp
public string PrivateIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateConnectionIngressIpsList <a name="GoldenGateConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionIngressIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get"></a>

```csharp
private GoldenGateConnectionIngressIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoldenGateConnectionIngressIpsOutputReference <a name="GoldenGateConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionIngressIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp">IngressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IngressIp`<sup>Required</sup> <a name="IngressIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp"></a>

```csharp
public string IngressIp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue"></a>

```csharp
public GoldenGateConnectionIngressIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a>

---


### GoldenGateConnectionLocksList <a name="GoldenGateConnectionLocksList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionLocksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get"></a>

```csharp
private GoldenGateConnectionLocksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateConnectionLocksOutputReference <a name="GoldenGateConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionLocksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId"></a>

```csharp
public string RelatedResourceId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoldenGateConnectionTimeoutsOutputReference <a name="GoldenGateConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new GoldenGateConnectionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



