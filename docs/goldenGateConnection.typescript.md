# `goldenGateConnection` Submodule <a name="`goldenGateConnection` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateConnection <a name="GoldenGateConnection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection oci_golden_gate_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnection(scope: Construct, id: string, config: GoldenGateConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig">GoldenGateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig">GoldenGateConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes">putAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers">putBootstrapServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccessKeyId">resetAccessKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKey">resetAccountKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKeySecretId">resetAccountKeySecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountName">resetAccountName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAdditionalAttributes">resetAdditionalAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationMode">resetAuthenticationMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAzureTenantId">resetAzureTenantId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetBootstrapServers">resetBootstrapServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecretSecretId">resetClientSecretSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionFactory">resetConnectionFactory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionString">resetConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionUrl">resetConnectionUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConsumerProperties">resetConsumerProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetCoreSiteXml">resetCoreSiteXml</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseId">resetDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDbSystemId">resetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDeploymentId">resetDeploymentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDoesUseSecretIds">resetDoesUseSecretIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFingerprint">resetFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiConnectionFactory">resetJndiConnectionFactory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiInitialContextFactory">resetJndiInitialContextFactory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiProviderUrl">resetJndiProviderUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentials">resetJndiSecurityCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentialsSecretId">resetJndiSecurityCredentialsSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityPrincipal">resetJndiSecurityPrincipal</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStore">resetKeyStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePassword">resetKeyStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePasswordSecretId">resetKeyStorePasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStoreSecretId">resetKeyStoreSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFile">resetPrivateKeyFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFileSecretId">resetPrivateKeyFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphrase">resetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphraseSecretId">resetPrivateKeyPassphraseSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetProducerProperties">resetProducerProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPublicKeyFingerprint">resetPublicKeyFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRedisClusterId">resetRedisClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRoutingMethod">resetRoutingMethod</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasToken">resetSasToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasTokenSecretId">resetSasTokenSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKey">resetSecretAccessKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKeySecretId">resetSecretAccessKeySecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServers">resetServers</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFile">resetServiceAccountKeyFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFileSecretId">resetServiceAccountKeyFileSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSessionMode">resetSessionMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldUseJndi">resetShouldUseJndi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldValidateServerCertificate">resetShouldValidateServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCa">resetSslCa</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCert">resetSslCert</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystash">resetSslClientKeystash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystashSecretId">resetSslClientKeystashSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredb">resetSslClientKeystoredb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredbSecretId">resetSslClientKeystoredbSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCrl">resetSslCrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKey">resetSslKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPassword">resetSslKeyPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPasswordSecretId">resetSslKeyPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeySecretId">resetSslKeySecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslServerCertificate">resetSslServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetStreamPoolId">resetStreamPoolId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTenancyId">resetTenancyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTriggerRefresh">resetTriggerRefresh</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStore">resetTrustStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePassword">resetTrustStorePassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePasswordSecretId">resetTrustStorePasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStoreSecretId">resetTrustStoreSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUserId">resetUserId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWallet">resetWallet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWalletSecretId">resetWalletSecretId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdditionalAttributes` <a name="putAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes"></a>

```typescript
public putAdditionalAttributes(value: IResolvable | GoldenGateConnectionAdditionalAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>[]

---

##### `putBootstrapServers` <a name="putBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers"></a>

```typescript
public putBootstrapServers(value: IResolvable | GoldenGateConnectionBootstrapServers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>[]

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks"></a>

```typescript
public putLocks(value: IResolvable | GoldenGateConnectionLocks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: GoldenGateConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

---

##### `resetAccessKeyId` <a name="resetAccessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccessKeyId"></a>

```typescript
public resetAccessKeyId(): void
```

##### `resetAccountKey` <a name="resetAccountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKey"></a>

```typescript
public resetAccountKey(): void
```

##### `resetAccountKeySecretId` <a name="resetAccountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKeySecretId"></a>

```typescript
public resetAccountKeySecretId(): void
```

##### `resetAccountName` <a name="resetAccountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountName"></a>

```typescript
public resetAccountName(): void
```

##### `resetAdditionalAttributes` <a name="resetAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAdditionalAttributes"></a>

```typescript
public resetAdditionalAttributes(): void
```

##### `resetAuthenticationMode` <a name="resetAuthenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationMode"></a>

```typescript
public resetAuthenticationMode(): void
```

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetAzureTenantId` <a name="resetAzureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAzureTenantId"></a>

```typescript
public resetAzureTenantId(): void
```

##### `resetBootstrapServers` <a name="resetBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetBootstrapServers"></a>

```typescript
public resetBootstrapServers(): void
```

##### `resetClientId` <a name="resetClientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetClientSecretSecretId` <a name="resetClientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecretSecretId"></a>

```typescript
public resetClientSecretSecretId(): void
```

##### `resetConnectionFactory` <a name="resetConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionFactory"></a>

```typescript
public resetConnectionFactory(): void
```

##### `resetConnectionString` <a name="resetConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionString"></a>

```typescript
public resetConnectionString(): void
```

##### `resetConnectionUrl` <a name="resetConnectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionUrl"></a>

```typescript
public resetConnectionUrl(): void
```

##### `resetConsumerProperties` <a name="resetConsumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConsumerProperties"></a>

```typescript
public resetConsumerProperties(): void
```

##### `resetCoreSiteXml` <a name="resetCoreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetCoreSiteXml"></a>

```typescript
public resetCoreSiteXml(): void
```

##### `resetDatabaseId` <a name="resetDatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseId"></a>

```typescript
public resetDatabaseId(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetDbSystemId` <a name="resetDbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDbSystemId"></a>

```typescript
public resetDbSystemId(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDeploymentId` <a name="resetDeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDeploymentId"></a>

```typescript
public resetDeploymentId(): void
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDoesUseSecretIds` <a name="resetDoesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDoesUseSecretIds"></a>

```typescript
public resetDoesUseSecretIds(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetFingerprint` <a name="resetFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFingerprint"></a>

```typescript
public resetFingerprint(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetHost` <a name="resetHost" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetIsLockOverride"></a>

```typescript
public resetIsLockOverride(): void
```

##### `resetJndiConnectionFactory` <a name="resetJndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiConnectionFactory"></a>

```typescript
public resetJndiConnectionFactory(): void
```

##### `resetJndiInitialContextFactory` <a name="resetJndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiInitialContextFactory"></a>

```typescript
public resetJndiInitialContextFactory(): void
```

##### `resetJndiProviderUrl` <a name="resetJndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiProviderUrl"></a>

```typescript
public resetJndiProviderUrl(): void
```

##### `resetJndiSecurityCredentials` <a name="resetJndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentials"></a>

```typescript
public resetJndiSecurityCredentials(): void
```

##### `resetJndiSecurityCredentialsSecretId` <a name="resetJndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentialsSecretId"></a>

```typescript
public resetJndiSecurityCredentialsSecretId(): void
```

##### `resetJndiSecurityPrincipal` <a name="resetJndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityPrincipal"></a>

```typescript
public resetJndiSecurityPrincipal(): void
```

##### `resetKeyId` <a name="resetKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetKeyStore` <a name="resetKeyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStore"></a>

```typescript
public resetKeyStore(): void
```

##### `resetKeyStorePassword` <a name="resetKeyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePassword"></a>

```typescript
public resetKeyStorePassword(): void
```

##### `resetKeyStorePasswordSecretId` <a name="resetKeyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePasswordSecretId"></a>

```typescript
public resetKeyStorePasswordSecretId(): void
```

##### `resetKeyStoreSecretId` <a name="resetKeyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStoreSecretId"></a>

```typescript
public resetKeyStoreSecretId(): void
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetLocks"></a>

```typescript
public resetLocks(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetPassword` <a name="resetPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPasswordSecretId"></a>

```typescript
public resetPasswordSecretId(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```

##### `resetPrivateKeyFile` <a name="resetPrivateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFile"></a>

```typescript
public resetPrivateKeyFile(): void
```

##### `resetPrivateKeyFileSecretId` <a name="resetPrivateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFileSecretId"></a>

```typescript
public resetPrivateKeyFileSecretId(): void
```

##### `resetPrivateKeyPassphrase` <a name="resetPrivateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphrase"></a>

```typescript
public resetPrivateKeyPassphrase(): void
```

##### `resetPrivateKeyPassphraseSecretId` <a name="resetPrivateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphraseSecretId"></a>

```typescript
public resetPrivateKeyPassphraseSecretId(): void
```

##### `resetProducerProperties` <a name="resetProducerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetProducerProperties"></a>

```typescript
public resetProducerProperties(): void
```

##### `resetPublicKeyFingerprint` <a name="resetPublicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPublicKeyFingerprint"></a>

```typescript
public resetPublicKeyFingerprint(): void
```

##### `resetRedisClusterId` <a name="resetRedisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRedisClusterId"></a>

```typescript
public resetRedisClusterId(): void
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoutingMethod` <a name="resetRoutingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRoutingMethod"></a>

```typescript
public resetRoutingMethod(): void
```

##### `resetSasToken` <a name="resetSasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasToken"></a>

```typescript
public resetSasToken(): void
```

##### `resetSasTokenSecretId` <a name="resetSasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasTokenSecretId"></a>

```typescript
public resetSasTokenSecretId(): void
```

##### `resetSecretAccessKey` <a name="resetSecretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKey"></a>

```typescript
public resetSecretAccessKey(): void
```

##### `resetSecretAccessKeySecretId` <a name="resetSecretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKeySecretId"></a>

```typescript
public resetSecretAccessKeySecretId(): void
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecurityProtocol"></a>

```typescript
public resetSecurityProtocol(): void
```

##### `resetServers` <a name="resetServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServers"></a>

```typescript
public resetServers(): void
```

##### `resetServiceAccountKeyFile` <a name="resetServiceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFile"></a>

```typescript
public resetServiceAccountKeyFile(): void
```

##### `resetServiceAccountKeyFileSecretId` <a name="resetServiceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFileSecretId"></a>

```typescript
public resetServiceAccountKeyFileSecretId(): void
```

##### `resetSessionMode` <a name="resetSessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSessionMode"></a>

```typescript
public resetSessionMode(): void
```

##### `resetShouldUseJndi` <a name="resetShouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldUseJndi"></a>

```typescript
public resetShouldUseJndi(): void
```

##### `resetShouldValidateServerCertificate` <a name="resetShouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldValidateServerCertificate"></a>

```typescript
public resetShouldValidateServerCertificate(): void
```

##### `resetSslCa` <a name="resetSslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCa"></a>

```typescript
public resetSslCa(): void
```

##### `resetSslCert` <a name="resetSslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCert"></a>

```typescript
public resetSslCert(): void
```

##### `resetSslClientKeystash` <a name="resetSslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystash"></a>

```typescript
public resetSslClientKeystash(): void
```

##### `resetSslClientKeystashSecretId` <a name="resetSslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystashSecretId"></a>

```typescript
public resetSslClientKeystashSecretId(): void
```

##### `resetSslClientKeystoredb` <a name="resetSslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredb"></a>

```typescript
public resetSslClientKeystoredb(): void
```

##### `resetSslClientKeystoredbSecretId` <a name="resetSslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredbSecretId"></a>

```typescript
public resetSslClientKeystoredbSecretId(): void
```

##### `resetSslCrl` <a name="resetSslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCrl"></a>

```typescript
public resetSslCrl(): void
```

##### `resetSslKey` <a name="resetSslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKey"></a>

```typescript
public resetSslKey(): void
```

##### `resetSslKeyPassword` <a name="resetSslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPassword"></a>

```typescript
public resetSslKeyPassword(): void
```

##### `resetSslKeyPasswordSecretId` <a name="resetSslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPasswordSecretId"></a>

```typescript
public resetSslKeyPasswordSecretId(): void
```

##### `resetSslKeySecretId` <a name="resetSslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeySecretId"></a>

```typescript
public resetSslKeySecretId(): void
```

##### `resetSslMode` <a name="resetSslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslMode"></a>

```typescript
public resetSslMode(): void
```

##### `resetSslServerCertificate` <a name="resetSslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslServerCertificate"></a>

```typescript
public resetSslServerCertificate(): void
```

##### `resetStreamPoolId` <a name="resetStreamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetStreamPoolId"></a>

```typescript
public resetStreamPoolId(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetTenancyId` <a name="resetTenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTenancyId"></a>

```typescript
public resetTenancyId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTriggerRefresh` <a name="resetTriggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTriggerRefresh"></a>

```typescript
public resetTriggerRefresh(): void
```

##### `resetTrustStore` <a name="resetTrustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStore"></a>

```typescript
public resetTrustStore(): void
```

##### `resetTrustStorePassword` <a name="resetTrustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePassword"></a>

```typescript
public resetTrustStorePassword(): void
```

##### `resetTrustStorePasswordSecretId` <a name="resetTrustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePasswordSecretId"></a>

```typescript
public resetTrustStorePasswordSecretId(): void
```

##### `resetTrustStoreSecretId` <a name="resetTrustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStoreSecretId"></a>

```typescript
public resetTrustStoreSecretId(): void
```

##### `resetUrl` <a name="resetUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUserId` <a name="resetUserId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUserId"></a>

```typescript
public resetUserId(): void
```

##### `resetUsername` <a name="resetUsername" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetVaultId"></a>

```typescript
public resetVaultId(): void
```

##### `resetWallet` <a name="resetWallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWallet"></a>

```typescript
public resetWallet(): void
```

##### `resetWalletSecretId` <a name="resetWalletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWalletSecretId"></a>

```typescript
public resetWalletSecretId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

goldenGateConnection.GoldenGateConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

goldenGateConnection.GoldenGateConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

goldenGateConnection.GoldenGateConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

goldenGateConnection.GoldenGateConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoldenGateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoldenGateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes">additionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers">bootstrapServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps">ingressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated">timeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput">accountKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput">accountKeySecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput">additionalAttributesInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput">authenticationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput">azureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput">bootstrapServersInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput">clientSecretSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput">connectionFactoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput">connectionStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput">connectionUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput">consumerPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput">coreSiteXmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput">databaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput">doesUseSecretIdsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput">fingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput">jndiConnectionFactoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput">jndiInitialContextFactoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput">jndiProviderUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput">jndiSecurityCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput">jndiSecurityCredentialsSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput">jndiSecurityPrincipalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput">keyStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput">keyStorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput">keyStorePasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput">keyStoreSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput">locksInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput">privateKeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput">privateKeyFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput">privateKeyPassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput">privateKeyPassphraseSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput">producerPropertiesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput">publicKeyFingerprintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput">redisClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput">routingMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput">sasTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput">sasTokenSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput">secretAccessKeySecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput">securityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput">serversInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput">serviceAccountKeyFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput">serviceAccountKeyFileSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput">sessionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput">shouldUseJndiInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput">shouldValidateServerCertificateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput">sslCaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput">sslCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput">sslClientKeystashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput">sslClientKeystashSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput">sslClientKeystoredbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput">sslClientKeystoredbSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput">sslCrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput">sslKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput">sslKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput">sslKeyPasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput">sslKeySecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput">sslServerCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput">streamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput">technologyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput">tenancyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput">triggerRefreshInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput">trustStoreInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput">trustStorePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput">trustStorePasswordSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput">trustStoreSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput">userIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput">walletInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput">walletSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey">accountKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId">accountKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId">clientSecretSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory">connectionFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString">connectionString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties">consumerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml">coreSiteXml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId">databaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds">doesUseSecretIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory">jndiConnectionFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory">jndiInitialContextFactory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl">jndiProviderUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials">jndiSecurityCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId">jndiSecurityCredentialsSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal">jndiSecurityPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore">keyStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword">keyStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId">keyStorePasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId">keyStoreSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile">privateKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId">privateKeyFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId">privateKeyPassphraseSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties">producerProperties</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint">publicKeyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId">redisClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod">routingMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken">sasToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId">sasTokenSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId">secretAccessKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers">servers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile">serviceAccountKeyFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId">serviceAccountKeyFileSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode">sessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi">shouldUseJndi</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate">shouldValidateServerCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa">sslCa</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert">sslCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash">sslClientKeystash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId">sslClientKeystashSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb">sslClientKeystoredb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId">sslClientKeystoredbSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl">sslCrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey">sslKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword">sslKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId">sslKeyPasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId">sslKeySecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate">sslServerCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId">streamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType">technologyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId">tenancyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh">triggerRefresh</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore">trustStore</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword">trustStorePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId">trustStorePasswordSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId">trustStoreSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId">userId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet">wallet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `additionalAttributes`<sup>Required</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes"></a>

```typescript
public readonly additionalAttributes: GoldenGateConnectionAdditionalAttributesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a>

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: GoldenGateConnectionBootstrapServersList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a>

---

##### `ingressIps`<sup>Required</sup> <a name="ingressIps" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps"></a>

```typescript
public readonly ingressIps: GoldenGateConnectionIngressIpsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks"></a>

```typescript
public readonly locks: GoldenGateConnectionLocksList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts"></a>

```typescript
public readonly timeouts: GoldenGateConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated"></a>

```typescript
public readonly timeUpdated: string;
```

- *Type:* string

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput"></a>

```typescript
public readonly accessKeyIdInput: string;
```

- *Type:* string

---

##### `accountKeyInput`<sup>Optional</sup> <a name="accountKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput"></a>

```typescript
public readonly accountKeyInput: string;
```

- *Type:* string

---

##### `accountKeySecretIdInput`<sup>Optional</sup> <a name="accountKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput"></a>

```typescript
public readonly accountKeySecretIdInput: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `additionalAttributesInput`<sup>Optional</sup> <a name="additionalAttributesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput"></a>

```typescript
public readonly additionalAttributesInput: IResolvable | GoldenGateConnectionAdditionalAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>[]

---

##### `authenticationModeInput`<sup>Optional</sup> <a name="authenticationModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput"></a>

```typescript
public readonly authenticationModeInput: string;
```

- *Type:* string

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `azureTenantIdInput`<sup>Optional</sup> <a name="azureTenantIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput"></a>

```typescript
public readonly azureTenantIdInput: string;
```

- *Type:* string

---

##### `bootstrapServersInput`<sup>Optional</sup> <a name="bootstrapServersInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput"></a>

```typescript
public readonly bootstrapServersInput: IResolvable | GoldenGateConnectionBootstrapServers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>[]

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `clientSecretSecretIdInput`<sup>Optional</sup> <a name="clientSecretSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput"></a>

```typescript
public readonly clientSecretSecretIdInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `connectionFactoryInput`<sup>Optional</sup> <a name="connectionFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput"></a>

```typescript
public readonly connectionFactoryInput: string;
```

- *Type:* string

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput"></a>

```typescript
public readonly connectionStringInput: string;
```

- *Type:* string

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `connectionUrlInput`<sup>Optional</sup> <a name="connectionUrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput"></a>

```typescript
public readonly connectionUrlInput: string;
```

- *Type:* string

---

##### `consumerPropertiesInput`<sup>Optional</sup> <a name="consumerPropertiesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput"></a>

```typescript
public readonly consumerPropertiesInput: string;
```

- *Type:* string

---

##### `coreSiteXmlInput`<sup>Optional</sup> <a name="coreSiteXmlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput"></a>

```typescript
public readonly coreSiteXmlInput: string;
```

- *Type:* string

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput"></a>

```typescript
public readonly databaseIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput"></a>

```typescript
public readonly dbSystemIdInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `doesUseSecretIdsInput`<sup>Optional</sup> <a name="doesUseSecretIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput"></a>

```typescript
public readonly doesUseSecretIdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput"></a>

```typescript
public readonly fingerprintInput: string;
```

- *Type:* string

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput"></a>

```typescript
public readonly isLockOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jndiConnectionFactoryInput`<sup>Optional</sup> <a name="jndiConnectionFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput"></a>

```typescript
public readonly jndiConnectionFactoryInput: string;
```

- *Type:* string

---

##### `jndiInitialContextFactoryInput`<sup>Optional</sup> <a name="jndiInitialContextFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput"></a>

```typescript
public readonly jndiInitialContextFactoryInput: string;
```

- *Type:* string

---

##### `jndiProviderUrlInput`<sup>Optional</sup> <a name="jndiProviderUrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput"></a>

```typescript
public readonly jndiProviderUrlInput: string;
```

- *Type:* string

---

##### `jndiSecurityCredentialsInput`<sup>Optional</sup> <a name="jndiSecurityCredentialsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput"></a>

```typescript
public readonly jndiSecurityCredentialsInput: string;
```

- *Type:* string

---

##### `jndiSecurityCredentialsSecretIdInput`<sup>Optional</sup> <a name="jndiSecurityCredentialsSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput"></a>

```typescript
public readonly jndiSecurityCredentialsSecretIdInput: string;
```

- *Type:* string

---

##### `jndiSecurityPrincipalInput`<sup>Optional</sup> <a name="jndiSecurityPrincipalInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput"></a>

```typescript
public readonly jndiSecurityPrincipalInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyStoreInput`<sup>Optional</sup> <a name="keyStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput"></a>

```typescript
public readonly keyStoreInput: string;
```

- *Type:* string

---

##### `keyStorePasswordInput`<sup>Optional</sup> <a name="keyStorePasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput"></a>

```typescript
public readonly keyStorePasswordInput: string;
```

- *Type:* string

---

##### `keyStorePasswordSecretIdInput`<sup>Optional</sup> <a name="keyStorePasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput"></a>

```typescript
public readonly keyStorePasswordSecretIdInput: string;
```

- *Type:* string

---

##### `keyStoreSecretIdInput`<sup>Optional</sup> <a name="keyStoreSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput"></a>

```typescript
public readonly keyStoreSecretIdInput: string;
```

- *Type:* string

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput"></a>

```typescript
public readonly locksInput: IResolvable | GoldenGateConnectionLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>[]

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput"></a>

```typescript
public readonly passwordSecretIdInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `privateKeyFileInput`<sup>Optional</sup> <a name="privateKeyFileInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput"></a>

```typescript
public readonly privateKeyFileInput: string;
```

- *Type:* string

---

##### `privateKeyFileSecretIdInput`<sup>Optional</sup> <a name="privateKeyFileSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput"></a>

```typescript
public readonly privateKeyFileSecretIdInput: string;
```

- *Type:* string

---

##### `privateKeyPassphraseInput`<sup>Optional</sup> <a name="privateKeyPassphraseInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput"></a>

```typescript
public readonly privateKeyPassphraseInput: string;
```

- *Type:* string

---

##### `privateKeyPassphraseSecretIdInput`<sup>Optional</sup> <a name="privateKeyPassphraseSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput"></a>

```typescript
public readonly privateKeyPassphraseSecretIdInput: string;
```

- *Type:* string

---

##### `producerPropertiesInput`<sup>Optional</sup> <a name="producerPropertiesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput"></a>

```typescript
public readonly producerPropertiesInput: string;
```

- *Type:* string

---

##### `publicKeyFingerprintInput`<sup>Optional</sup> <a name="publicKeyFingerprintInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput"></a>

```typescript
public readonly publicKeyFingerprintInput: string;
```

- *Type:* string

---

##### `redisClusterIdInput`<sup>Optional</sup> <a name="redisClusterIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput"></a>

```typescript
public readonly redisClusterIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routingMethodInput`<sup>Optional</sup> <a name="routingMethodInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput"></a>

```typescript
public readonly routingMethodInput: string;
```

- *Type:* string

---

##### `sasTokenInput`<sup>Optional</sup> <a name="sasTokenInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput"></a>

```typescript
public readonly sasTokenInput: string;
```

- *Type:* string

---

##### `sasTokenSecretIdInput`<sup>Optional</sup> <a name="sasTokenSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput"></a>

```typescript
public readonly sasTokenSecretIdInput: string;
```

- *Type:* string

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput"></a>

```typescript
public readonly secretAccessKeyInput: string;
```

- *Type:* string

---

##### `secretAccessKeySecretIdInput`<sup>Optional</sup> <a name="secretAccessKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput"></a>

```typescript
public readonly secretAccessKeySecretIdInput: string;
```

- *Type:* string

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput"></a>

```typescript
public readonly securityProtocolInput: string;
```

- *Type:* string

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput"></a>

```typescript
public readonly serversInput: string;
```

- *Type:* string

---

##### `serviceAccountKeyFileInput`<sup>Optional</sup> <a name="serviceAccountKeyFileInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput"></a>

```typescript
public readonly serviceAccountKeyFileInput: string;
```

- *Type:* string

---

##### `serviceAccountKeyFileSecretIdInput`<sup>Optional</sup> <a name="serviceAccountKeyFileSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput"></a>

```typescript
public readonly serviceAccountKeyFileSecretIdInput: string;
```

- *Type:* string

---

##### `sessionModeInput`<sup>Optional</sup> <a name="sessionModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput"></a>

```typescript
public readonly sessionModeInput: string;
```

- *Type:* string

---

##### `shouldUseJndiInput`<sup>Optional</sup> <a name="shouldUseJndiInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput"></a>

```typescript
public readonly shouldUseJndiInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldValidateServerCertificateInput`<sup>Optional</sup> <a name="shouldValidateServerCertificateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput"></a>

```typescript
public readonly shouldValidateServerCertificateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslCaInput`<sup>Optional</sup> <a name="sslCaInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput"></a>

```typescript
public readonly sslCaInput: string;
```

- *Type:* string

---

##### `sslCertInput`<sup>Optional</sup> <a name="sslCertInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput"></a>

```typescript
public readonly sslCertInput: string;
```

- *Type:* string

---

##### `sslClientKeystashInput`<sup>Optional</sup> <a name="sslClientKeystashInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput"></a>

```typescript
public readonly sslClientKeystashInput: string;
```

- *Type:* string

---

##### `sslClientKeystashSecretIdInput`<sup>Optional</sup> <a name="sslClientKeystashSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput"></a>

```typescript
public readonly sslClientKeystashSecretIdInput: string;
```

- *Type:* string

---

##### `sslClientKeystoredbInput`<sup>Optional</sup> <a name="sslClientKeystoredbInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput"></a>

```typescript
public readonly sslClientKeystoredbInput: string;
```

- *Type:* string

---

##### `sslClientKeystoredbSecretIdInput`<sup>Optional</sup> <a name="sslClientKeystoredbSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput"></a>

```typescript
public readonly sslClientKeystoredbSecretIdInput: string;
```

- *Type:* string

---

##### `sslCrlInput`<sup>Optional</sup> <a name="sslCrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput"></a>

```typescript
public readonly sslCrlInput: string;
```

- *Type:* string

---

##### `sslKeyInput`<sup>Optional</sup> <a name="sslKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput"></a>

```typescript
public readonly sslKeyInput: string;
```

- *Type:* string

---

##### `sslKeyPasswordInput`<sup>Optional</sup> <a name="sslKeyPasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput"></a>

```typescript
public readonly sslKeyPasswordInput: string;
```

- *Type:* string

---

##### `sslKeyPasswordSecretIdInput`<sup>Optional</sup> <a name="sslKeyPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput"></a>

```typescript
public readonly sslKeyPasswordSecretIdInput: string;
```

- *Type:* string

---

##### `sslKeySecretIdInput`<sup>Optional</sup> <a name="sslKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput"></a>

```typescript
public readonly sslKeySecretIdInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `sslServerCertificateInput`<sup>Optional</sup> <a name="sslServerCertificateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput"></a>

```typescript
public readonly sslServerCertificateInput: string;
```

- *Type:* string

---

##### `streamPoolIdInput`<sup>Optional</sup> <a name="streamPoolIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput"></a>

```typescript
public readonly streamPoolIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `technologyTypeInput`<sup>Optional</sup> <a name="technologyTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput"></a>

```typescript
public readonly technologyTypeInput: string;
```

- *Type:* string

---

##### `tenancyIdInput`<sup>Optional</sup> <a name="tenancyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput"></a>

```typescript
public readonly tenancyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoldenGateConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

---

##### `triggerRefreshInput`<sup>Optional</sup> <a name="triggerRefreshInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput"></a>

```typescript
public readonly triggerRefreshInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trustStoreInput`<sup>Optional</sup> <a name="trustStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput"></a>

```typescript
public readonly trustStoreInput: string;
```

- *Type:* string

---

##### `trustStorePasswordInput`<sup>Optional</sup> <a name="trustStorePasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput"></a>

```typescript
public readonly trustStorePasswordInput: string;
```

- *Type:* string

---

##### `trustStorePasswordSecretIdInput`<sup>Optional</sup> <a name="trustStorePasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput"></a>

```typescript
public readonly trustStorePasswordSecretIdInput: string;
```

- *Type:* string

---

##### `trustStoreSecretIdInput`<sup>Optional</sup> <a name="trustStoreSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput"></a>

```typescript
public readonly trustStoreSecretIdInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `userIdInput`<sup>Optional</sup> <a name="userIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput"></a>

```typescript
public readonly userIdInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `walletInput`<sup>Optional</sup> <a name="walletInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput"></a>

```typescript
public readonly walletInput: string;
```

- *Type:* string

---

##### `walletSecretIdInput`<sup>Optional</sup> <a name="walletSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput"></a>

```typescript
public readonly walletSecretIdInput: string;
```

- *Type:* string

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

---

##### `accountKey`<sup>Required</sup> <a name="accountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

---

##### `accountKeySecretId`<sup>Required</sup> <a name="accountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId"></a>

```typescript
public readonly accountKeySecretId: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `authenticationMode`<sup>Required</sup> <a name="authenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `clientSecretSecretId`<sup>Required</sup> <a name="clientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId"></a>

```typescript
public readonly clientSecretSecretId: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `connectionFactory`<sup>Required</sup> <a name="connectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory"></a>

```typescript
public readonly connectionFactory: string;
```

- *Type:* string

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `connectionUrl`<sup>Required</sup> <a name="connectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

---

##### `consumerProperties`<sup>Required</sup> <a name="consumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties"></a>

```typescript
public readonly consumerProperties: string;
```

- *Type:* string

---

##### `coreSiteXml`<sup>Required</sup> <a name="coreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml"></a>

```typescript
public readonly coreSiteXml: string;
```

- *Type:* string

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `doesUseSecretIds`<sup>Required</sup> <a name="doesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds"></a>

```typescript
public readonly doesUseSecretIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jndiConnectionFactory`<sup>Required</sup> <a name="jndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory"></a>

```typescript
public readonly jndiConnectionFactory: string;
```

- *Type:* string

---

##### `jndiInitialContextFactory`<sup>Required</sup> <a name="jndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory"></a>

```typescript
public readonly jndiInitialContextFactory: string;
```

- *Type:* string

---

##### `jndiProviderUrl`<sup>Required</sup> <a name="jndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl"></a>

```typescript
public readonly jndiProviderUrl: string;
```

- *Type:* string

---

##### `jndiSecurityCredentials`<sup>Required</sup> <a name="jndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials"></a>

```typescript
public readonly jndiSecurityCredentials: string;
```

- *Type:* string

---

##### `jndiSecurityCredentialsSecretId`<sup>Required</sup> <a name="jndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId"></a>

```typescript
public readonly jndiSecurityCredentialsSecretId: string;
```

- *Type:* string

---

##### `jndiSecurityPrincipal`<sup>Required</sup> <a name="jndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal"></a>

```typescript
public readonly jndiSecurityPrincipal: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyStore`<sup>Required</sup> <a name="keyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore"></a>

```typescript
public readonly keyStore: string;
```

- *Type:* string

---

##### `keyStorePassword`<sup>Required</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: string;
```

- *Type:* string

---

##### `keyStorePasswordSecretId`<sup>Required</sup> <a name="keyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId"></a>

```typescript
public readonly keyStorePasswordSecretId: string;
```

- *Type:* string

---

##### `keyStoreSecretId`<sup>Required</sup> <a name="keyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId"></a>

```typescript
public readonly keyStoreSecretId: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `password`<sup>Required</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `privateKeyFile`<sup>Required</sup> <a name="privateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile"></a>

```typescript
public readonly privateKeyFile: string;
```

- *Type:* string

---

##### `privateKeyFileSecretId`<sup>Required</sup> <a name="privateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId"></a>

```typescript
public readonly privateKeyFileSecretId: string;
```

- *Type:* string

---

##### `privateKeyPassphrase`<sup>Required</sup> <a name="privateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

---

##### `privateKeyPassphraseSecretId`<sup>Required</sup> <a name="privateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId"></a>

```typescript
public readonly privateKeyPassphraseSecretId: string;
```

- *Type:* string

---

##### `producerProperties`<sup>Required</sup> <a name="producerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties"></a>

```typescript
public readonly producerProperties: string;
```

- *Type:* string

---

##### `publicKeyFingerprint`<sup>Required</sup> <a name="publicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint"></a>

```typescript
public readonly publicKeyFingerprint: string;
```

- *Type:* string

---

##### `redisClusterId`<sup>Required</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId"></a>

```typescript
public readonly redisClusterId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `routingMethod`<sup>Required</sup> <a name="routingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod"></a>

```typescript
public readonly routingMethod: string;
```

- *Type:* string

---

##### `sasToken`<sup>Required</sup> <a name="sasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

---

##### `sasTokenSecretId`<sup>Required</sup> <a name="sasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId"></a>

```typescript
public readonly sasTokenSecretId: string;
```

- *Type:* string

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

---

##### `secretAccessKeySecretId`<sup>Required</sup> <a name="secretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId"></a>

```typescript
public readonly secretAccessKeySecretId: string;
```

- *Type:* string

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

---

##### `servers`<sup>Required</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers"></a>

```typescript
public readonly servers: string;
```

- *Type:* string

---

##### `serviceAccountKeyFile`<sup>Required</sup> <a name="serviceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile"></a>

```typescript
public readonly serviceAccountKeyFile: string;
```

- *Type:* string

---

##### `serviceAccountKeyFileSecretId`<sup>Required</sup> <a name="serviceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId"></a>

```typescript
public readonly serviceAccountKeyFileSecretId: string;
```

- *Type:* string

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

---

##### `shouldUseJndi`<sup>Required</sup> <a name="shouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi"></a>

```typescript
public readonly shouldUseJndi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shouldValidateServerCertificate`<sup>Required</sup> <a name="shouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate"></a>

```typescript
public readonly shouldValidateServerCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sslCa`<sup>Required</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

---

##### `sslCert`<sup>Required</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert"></a>

```typescript
public readonly sslCert: string;
```

- *Type:* string

---

##### `sslClientKeystash`<sup>Required</sup> <a name="sslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash"></a>

```typescript
public readonly sslClientKeystash: string;
```

- *Type:* string

---

##### `sslClientKeystashSecretId`<sup>Required</sup> <a name="sslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId"></a>

```typescript
public readonly sslClientKeystashSecretId: string;
```

- *Type:* string

---

##### `sslClientKeystoredb`<sup>Required</sup> <a name="sslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb"></a>

```typescript
public readonly sslClientKeystoredb: string;
```

- *Type:* string

---

##### `sslClientKeystoredbSecretId`<sup>Required</sup> <a name="sslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId"></a>

```typescript
public readonly sslClientKeystoredbSecretId: string;
```

- *Type:* string

---

##### `sslCrl`<sup>Required</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl"></a>

```typescript
public readonly sslCrl: string;
```

- *Type:* string

---

##### `sslKey`<sup>Required</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey"></a>

```typescript
public readonly sslKey: string;
```

- *Type:* string

---

##### `sslKeyPassword`<sup>Required</sup> <a name="sslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword"></a>

```typescript
public readonly sslKeyPassword: string;
```

- *Type:* string

---

##### `sslKeyPasswordSecretId`<sup>Required</sup> <a name="sslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId"></a>

```typescript
public readonly sslKeyPasswordSecretId: string;
```

- *Type:* string

---

##### `sslKeySecretId`<sup>Required</sup> <a name="sslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId"></a>

```typescript
public readonly sslKeySecretId: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `sslServerCertificate`<sup>Required</sup> <a name="sslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate"></a>

```typescript
public readonly sslServerCertificate: string;
```

- *Type:* string

---

##### `streamPoolId`<sup>Required</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId"></a>

```typescript
public readonly streamPoolId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType"></a>

```typescript
public readonly technologyType: string;
```

- *Type:* string

---

##### `tenancyId`<sup>Required</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

---

##### `triggerRefresh`<sup>Required</sup> <a name="triggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh"></a>

```typescript
public readonly triggerRefresh: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `trustStore`<sup>Required</sup> <a name="trustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore"></a>

```typescript
public readonly trustStore: string;
```

- *Type:* string

---

##### `trustStorePassword`<sup>Required</sup> <a name="trustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword"></a>

```typescript
public readonly trustStorePassword: string;
```

- *Type:* string

---

##### `trustStorePasswordSecretId`<sup>Required</sup> <a name="trustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId"></a>

```typescript
public readonly trustStorePasswordSecretId: string;
```

- *Type:* string

---

##### `trustStoreSecretId`<sup>Required</sup> <a name="trustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId"></a>

```typescript
public readonly trustStoreSecretId: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `userId`<sup>Required</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `wallet`<sup>Required</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet"></a>

```typescript
public readonly wallet: string;
```

- *Type:* string

---

##### `walletSecretId`<sup>Required</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateConnectionAdditionalAttributes <a name="GoldenGateConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const goldenGateConnectionAdditionalAttributes: goldenGateConnection.GoldenGateConnectionAdditionalAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}.

---

### GoldenGateConnectionBootstrapServers <a name="GoldenGateConnectionBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const goldenGateConnectionBootstrapServers: goldenGateConnection.GoldenGateConnectionBootstrapServers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

### GoldenGateConnectionConfig <a name="GoldenGateConnectionConfig" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const goldenGateConnectionConfig: goldenGateConnection.GoldenGateConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType">connectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType">technologyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId">accessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey">accountKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId">accountKeySecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName">accountName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes">additionalAttributes</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>[]</code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode">authenticationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId">azureTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers">bootstrapServers</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>[]</code> | bootstrap_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId">clientSecretSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory">connectionFactory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString">connectionString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl">connectionUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties">consumerProperties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml">coreSiteXml</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId">databaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId">dbSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds">doesUseSecretIds</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint">fingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride">isLockOverride</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory">jndiConnectionFactory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory">jndiInitialContextFactory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl">jndiProviderUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials">jndiSecurityCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId">jndiSecurityCredentialsSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal">jndiSecurityPrincipal</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore">keyStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword">keyStorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId">keyStorePasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId">keyStoreSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks">locks</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>[]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId">passwordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp">privateIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile">privateKeyFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId">privateKeyFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId">privateKeyPassphraseSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties">producerProperties</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint">publicKeyFingerprint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId">redisClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod">routingMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken">sasToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId">sasTokenSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey">secretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId">secretAccessKeySecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers">servers</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile">serviceAccountKeyFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId">serviceAccountKeyFileSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode">sessionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi">shouldUseJndi</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate">shouldValidateServerCertificate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa">sslCa</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert">sslCert</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash">sslClientKeystash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId">sslClientKeystashSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb">sslClientKeystoredb</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId">sslClientKeystoredbSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl">sslCrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey">sslKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword">sslKeyPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId">sslKeyPasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId">sslKeySecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate">sslServerCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId">streamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId">tenancyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh">triggerRefresh</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore">trustStore</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword">trustStorePassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId">trustStorePasswordSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId">trustStoreSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId">userId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet">wallet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId">walletSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}.

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}.

---

##### `technologyType`<sup>Required</sup> <a name="technologyType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType"></a>

```typescript
public readonly technologyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}.

---

##### `accessKeyId`<sup>Optional</sup> <a name="accessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId"></a>

```typescript
public readonly accessKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}.

---

##### `accountKey`<sup>Optional</sup> <a name="accountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey"></a>

```typescript
public readonly accountKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}.

---

##### `accountKeySecretId`<sup>Optional</sup> <a name="accountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId"></a>

```typescript
public readonly accountKeySecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}.

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}.

---

##### `additionalAttributes`<sup>Optional</sup> <a name="additionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes"></a>

```typescript
public readonly additionalAttributes: IResolvable | GoldenGateConnectionAdditionalAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>[]

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#additional_attributes GoldenGateConnection#additional_attributes}

---

##### `authenticationMode`<sup>Optional</sup> <a name="authenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode"></a>

```typescript
public readonly authenticationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}.

---

##### `azureTenantId`<sup>Optional</sup> <a name="azureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId"></a>

```typescript
public readonly azureTenantId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}.

---

##### `bootstrapServers`<sup>Optional</sup> <a name="bootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: IResolvable | GoldenGateConnectionBootstrapServers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>[]

bootstrap_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#bootstrap_servers GoldenGateConnection#bootstrap_servers}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}.

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}.

---

##### `clientSecretSecretId`<sup>Optional</sup> <a name="clientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId"></a>

```typescript
public readonly clientSecretSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}.

---

##### `connectionFactory`<sup>Optional</sup> <a name="connectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory"></a>

```typescript
public readonly connectionFactory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}.

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString"></a>

```typescript
public readonly connectionString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}.

---

##### `connectionUrl`<sup>Optional</sup> <a name="connectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl"></a>

```typescript
public readonly connectionUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}.

---

##### `consumerProperties`<sup>Optional</sup> <a name="consumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties"></a>

```typescript
public readonly consumerProperties: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}.

---

##### `coreSiteXml`<sup>Optional</sup> <a name="coreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml"></a>

```typescript
public readonly coreSiteXml: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}.

---

##### `databaseId`<sup>Optional</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId"></a>

```typescript
public readonly databaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}.

---

##### `dbSystemId`<sup>Optional</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId"></a>

```typescript
public readonly dbSystemId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}.

---

##### `deploymentId`<sup>Optional</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}.

---

##### `doesUseSecretIds`<sup>Optional</sup> <a name="doesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds"></a>

```typescript
public readonly doesUseSecretIds: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}.

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}.

---

##### `host`<sup>Optional</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride"></a>

```typescript
public readonly isLockOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}.

---

##### `jndiConnectionFactory`<sup>Optional</sup> <a name="jndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory"></a>

```typescript
public readonly jndiConnectionFactory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}.

---

##### `jndiInitialContextFactory`<sup>Optional</sup> <a name="jndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory"></a>

```typescript
public readonly jndiInitialContextFactory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}.

---

##### `jndiProviderUrl`<sup>Optional</sup> <a name="jndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl"></a>

```typescript
public readonly jndiProviderUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}.

---

##### `jndiSecurityCredentials`<sup>Optional</sup> <a name="jndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials"></a>

```typescript
public readonly jndiSecurityCredentials: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}.

---

##### `jndiSecurityCredentialsSecretId`<sup>Optional</sup> <a name="jndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId"></a>

```typescript
public readonly jndiSecurityCredentialsSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}.

---

##### `jndiSecurityPrincipal`<sup>Optional</sup> <a name="jndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal"></a>

```typescript
public readonly jndiSecurityPrincipal: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}.

---

##### `keyStore`<sup>Optional</sup> <a name="keyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore"></a>

```typescript
public readonly keyStore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}.

---

##### `keyStorePassword`<sup>Optional</sup> <a name="keyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword"></a>

```typescript
public readonly keyStorePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}.

---

##### `keyStorePasswordSecretId`<sup>Optional</sup> <a name="keyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId"></a>

```typescript
public readonly keyStorePasswordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}.

---

##### `keyStoreSecretId`<sup>Optional</sup> <a name="keyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId"></a>

```typescript
public readonly keyStoreSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks"></a>

```typescript
public readonly locks: IResolvable | GoldenGateConnectionLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>[]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#locks GoldenGateConnection#locks}

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}.

---

##### `password`<sup>Optional</sup> <a name="password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId"></a>

```typescript
public readonly passwordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

##### `privateKeyFile`<sup>Optional</sup> <a name="privateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile"></a>

```typescript
public readonly privateKeyFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}.

---

##### `privateKeyFileSecretId`<sup>Optional</sup> <a name="privateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId"></a>

```typescript
public readonly privateKeyFileSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}.

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}.

---

##### `privateKeyPassphraseSecretId`<sup>Optional</sup> <a name="privateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId"></a>

```typescript
public readonly privateKeyPassphraseSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}.

---

##### `producerProperties`<sup>Optional</sup> <a name="producerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties"></a>

```typescript
public readonly producerProperties: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}.

---

##### `publicKeyFingerprint`<sup>Optional</sup> <a name="publicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint"></a>

```typescript
public readonly publicKeyFingerprint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}.

---

##### `redisClusterId`<sup>Optional</sup> <a name="redisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId"></a>

```typescript
public readonly redisClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}.

---

##### `routingMethod`<sup>Optional</sup> <a name="routingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod"></a>

```typescript
public readonly routingMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}.

---

##### `sasToken`<sup>Optional</sup> <a name="sasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken"></a>

```typescript
public readonly sasToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}.

---

##### `sasTokenSecretId`<sup>Optional</sup> <a name="sasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId"></a>

```typescript
public readonly sasTokenSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}.

---

##### `secretAccessKey`<sup>Optional</sup> <a name="secretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey"></a>

```typescript
public readonly secretAccessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}.

---

##### `secretAccessKeySecretId`<sup>Optional</sup> <a name="secretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId"></a>

```typescript
public readonly secretAccessKeySecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}.

---

##### `servers`<sup>Optional</sup> <a name="servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers"></a>

```typescript
public readonly servers: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}.

---

##### `serviceAccountKeyFile`<sup>Optional</sup> <a name="serviceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile"></a>

```typescript
public readonly serviceAccountKeyFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}.

---

##### `serviceAccountKeyFileSecretId`<sup>Optional</sup> <a name="serviceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId"></a>

```typescript
public readonly serviceAccountKeyFileSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}.

---

##### `sessionMode`<sup>Optional</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}.

---

##### `shouldUseJndi`<sup>Optional</sup> <a name="shouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi"></a>

```typescript
public readonly shouldUseJndi: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}.

---

##### `shouldValidateServerCertificate`<sup>Optional</sup> <a name="shouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate"></a>

```typescript
public readonly shouldValidateServerCertificate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}.

---

##### `sslCa`<sup>Optional</sup> <a name="sslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa"></a>

```typescript
public readonly sslCa: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}.

---

##### `sslCert`<sup>Optional</sup> <a name="sslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert"></a>

```typescript
public readonly sslCert: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}.

---

##### `sslClientKeystash`<sup>Optional</sup> <a name="sslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash"></a>

```typescript
public readonly sslClientKeystash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}.

---

##### `sslClientKeystashSecretId`<sup>Optional</sup> <a name="sslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId"></a>

```typescript
public readonly sslClientKeystashSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}.

---

##### `sslClientKeystoredb`<sup>Optional</sup> <a name="sslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb"></a>

```typescript
public readonly sslClientKeystoredb: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}.

---

##### `sslClientKeystoredbSecretId`<sup>Optional</sup> <a name="sslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId"></a>

```typescript
public readonly sslClientKeystoredbSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}.

---

##### `sslCrl`<sup>Optional</sup> <a name="sslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl"></a>

```typescript
public readonly sslCrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}.

---

##### `sslKey`<sup>Optional</sup> <a name="sslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey"></a>

```typescript
public readonly sslKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}.

---

##### `sslKeyPassword`<sup>Optional</sup> <a name="sslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword"></a>

```typescript
public readonly sslKeyPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}.

---

##### `sslKeyPasswordSecretId`<sup>Optional</sup> <a name="sslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId"></a>

```typescript
public readonly sslKeyPasswordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}.

---

##### `sslKeySecretId`<sup>Optional</sup> <a name="sslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId"></a>

```typescript
public readonly sslKeySecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}.

---

##### `sslServerCertificate`<sup>Optional</sup> <a name="sslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate"></a>

```typescript
public readonly sslServerCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}.

---

##### `streamPoolId`<sup>Optional</sup> <a name="streamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId"></a>

```typescript
public readonly streamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}.

---

##### `tenancyId`<sup>Optional</sup> <a name="tenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId"></a>

```typescript
public readonly tenancyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoldenGateConnectionTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#timeouts GoldenGateConnection#timeouts}

---

##### `triggerRefresh`<sup>Optional</sup> <a name="triggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh"></a>

```typescript
public readonly triggerRefresh: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}.

---

##### `trustStore`<sup>Optional</sup> <a name="trustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore"></a>

```typescript
public readonly trustStore: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}.

---

##### `trustStorePassword`<sup>Optional</sup> <a name="trustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword"></a>

```typescript
public readonly trustStorePassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}.

---

##### `trustStorePasswordSecretId`<sup>Optional</sup> <a name="trustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId"></a>

```typescript
public readonly trustStorePasswordSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}.

---

##### `trustStoreSecretId`<sup>Optional</sup> <a name="trustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId"></a>

```typescript
public readonly trustStoreSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}.

---

##### `url`<sup>Optional</sup> <a name="url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}.

---

##### `userId`<sup>Optional</sup> <a name="userId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId"></a>

```typescript
public readonly userId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}.

---

##### `username`<sup>Optional</sup> <a name="username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}.

---

##### `wallet`<sup>Optional</sup> <a name="wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet"></a>

```typescript
public readonly wallet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}.

---

##### `walletSecretId`<sup>Optional</sup> <a name="walletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId"></a>

```typescript
public readonly walletSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}.

---

### GoldenGateConnectionIngressIps <a name="GoldenGateConnectionIngressIps" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const goldenGateConnectionIngressIps: goldenGateConnection.GoldenGateConnectionIngressIps = { ... }
```


### GoldenGateConnectionLocks <a name="GoldenGateConnectionLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const goldenGateConnectionLocks: goldenGateConnection.GoldenGateConnectionLocks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message">message</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}.

---

### GoldenGateConnectionTimeouts <a name="GoldenGateConnectionTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

const goldenGateConnectionTimeouts: goldenGateConnection.GoldenGateConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateConnectionAdditionalAttributesList <a name="GoldenGateConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnectionAdditionalAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get"></a>

```typescript
public get(index: number): GoldenGateConnectionAdditionalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateConnectionAdditionalAttributes[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>[]

---


### GoldenGateConnectionAdditionalAttributesOutputReference <a name="GoldenGateConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValue` <a name="resetValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateConnectionAdditionalAttributes;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes">GoldenGateConnectionAdditionalAttributes</a>

---


### GoldenGateConnectionBootstrapServersList <a name="GoldenGateConnectionBootstrapServersList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnectionBootstrapServersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get"></a>

```typescript
public get(index: number): GoldenGateConnectionBootstrapServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateConnectionBootstrapServers[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>[]

---


### GoldenGateConnectionBootstrapServersOutputReference <a name="GoldenGateConnectionBootstrapServersOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPrivateIp"></a>

```typescript
public resetPrivateIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput"></a>

```typescript
public readonly privateIpInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateConnectionBootstrapServers;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers">GoldenGateConnectionBootstrapServers</a>

---


### GoldenGateConnectionIngressIpsList <a name="GoldenGateConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnectionIngressIpsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get"></a>

```typescript
public get(index: number): GoldenGateConnectionIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoldenGateConnectionIngressIpsOutputReference <a name="GoldenGateConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp">ingressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressIp`<sup>Required</sup> <a name="ingressIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp"></a>

```typescript
public readonly ingressIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoldenGateConnectionIngressIps;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a>

---


### GoldenGateConnectionLocksList <a name="GoldenGateConnectionLocksList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnectionLocksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get"></a>

```typescript
public get(index: number): GoldenGateConnectionLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateConnectionLocks[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>[]

---


### GoldenGateConnectionLocksOutputReference <a name="GoldenGateConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnectionLocksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resetMessage"></a>

```typescript
public resetMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput">messageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId"></a>

```typescript
public readonly relatedResourceId: string;
```

- *Type:* string

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateConnectionLocks;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks">GoldenGateConnectionLocks</a>

---


### GoldenGateConnectionTimeoutsOutputReference <a name="GoldenGateConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { goldenGateConnection } from 'rhizo-co-terraform-provider-oci'

new goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoldenGateConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

---



