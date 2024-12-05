# `goldenGateConnection` Submodule <a name="`goldenGateConnection` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateConnection <a name="GoldenGateConnection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection oci_golden_gate_connection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnection(scope Construct, id *string, config GoldenGateConnectionConfig) GoldenGateConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig">GoldenGateConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalAttributes` <a name="PutAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes"></a>

```go
func PutAdditionalAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putAdditionalAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBootstrapServers` <a name="PutBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers"></a>

```go
func PutBootstrapServers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putBootstrapServers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLocks` <a name="PutLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks"></a>

```go
func PutLocks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putLocks.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts"></a>

```go
func PutTimeouts(value GoldenGateConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

---

##### `ResetAccessKeyId` <a name="ResetAccessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccessKeyId"></a>

```go
func ResetAccessKeyId()
```

##### `ResetAccountKey` <a name="ResetAccountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKey"></a>

```go
func ResetAccountKey()
```

##### `ResetAccountKeySecretId` <a name="ResetAccountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountKeySecretId"></a>

```go
func ResetAccountKeySecretId()
```

##### `ResetAccountName` <a name="ResetAccountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAccountName"></a>

```go
func ResetAccountName()
```

##### `ResetAdditionalAttributes` <a name="ResetAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAdditionalAttributes"></a>

```go
func ResetAdditionalAttributes()
```

##### `ResetAuthenticationMode` <a name="ResetAuthenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationMode"></a>

```go
func ResetAuthenticationMode()
```

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAuthenticationType"></a>

```go
func ResetAuthenticationType()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetAzureTenantId"></a>

```go
func ResetAzureTenantId()
```

##### `ResetBootstrapServers` <a name="ResetBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetBootstrapServers"></a>

```go
func ResetBootstrapServers()
```

##### `ResetClientId` <a name="ResetClientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClientSecretSecretId` <a name="ResetClientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetClientSecretSecretId"></a>

```go
func ResetClientSecretSecretId()
```

##### `ResetConnectionFactory` <a name="ResetConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionFactory"></a>

```go
func ResetConnectionFactory()
```

##### `ResetConnectionString` <a name="ResetConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionString"></a>

```go
func ResetConnectionString()
```

##### `ResetConnectionUrl` <a name="ResetConnectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConnectionUrl"></a>

```go
func ResetConnectionUrl()
```

##### `ResetConsumerProperties` <a name="ResetConsumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetConsumerProperties"></a>

```go
func ResetConsumerProperties()
```

##### `ResetCoreSiteXml` <a name="ResetCoreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetCoreSiteXml"></a>

```go
func ResetCoreSiteXml()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseId"></a>

```go
func ResetDatabaseId()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDbSystemId"></a>

```go
func ResetDbSystemId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDeploymentId` <a name="ResetDeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDeploymentId"></a>

```go
func ResetDeploymentId()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDoesUseSecretIds` <a name="ResetDoesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetDoesUseSecretIds"></a>

```go
func ResetDoesUseSecretIds()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetFingerprint` <a name="ResetFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFingerprint"></a>

```go
func ResetFingerprint()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHost` <a name="ResetHost" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetHost"></a>

```go
func ResetHost()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetIsLockOverride` <a name="ResetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetIsLockOverride"></a>

```go
func ResetIsLockOverride()
```

##### `ResetJndiConnectionFactory` <a name="ResetJndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiConnectionFactory"></a>

```go
func ResetJndiConnectionFactory()
```

##### `ResetJndiInitialContextFactory` <a name="ResetJndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiInitialContextFactory"></a>

```go
func ResetJndiInitialContextFactory()
```

##### `ResetJndiProviderUrl` <a name="ResetJndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiProviderUrl"></a>

```go
func ResetJndiProviderUrl()
```

##### `ResetJndiSecurityCredentials` <a name="ResetJndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentials"></a>

```go
func ResetJndiSecurityCredentials()
```

##### `ResetJndiSecurityCredentialsSecretId` <a name="ResetJndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityCredentialsSecretId"></a>

```go
func ResetJndiSecurityCredentialsSecretId()
```

##### `ResetJndiSecurityPrincipal` <a name="ResetJndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetJndiSecurityPrincipal"></a>

```go
func ResetJndiSecurityPrincipal()
```

##### `ResetKeyId` <a name="ResetKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyId"></a>

```go
func ResetKeyId()
```

##### `ResetKeyStore` <a name="ResetKeyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStore"></a>

```go
func ResetKeyStore()
```

##### `ResetKeyStorePassword` <a name="ResetKeyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePassword"></a>

```go
func ResetKeyStorePassword()
```

##### `ResetKeyStorePasswordSecretId` <a name="ResetKeyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStorePasswordSecretId"></a>

```go
func ResetKeyStorePasswordSecretId()
```

##### `ResetKeyStoreSecretId` <a name="ResetKeyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetKeyStoreSecretId"></a>

```go
func ResetKeyStoreSecretId()
```

##### `ResetLocks` <a name="ResetLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetLocks"></a>

```go
func ResetLocks()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetPassword` <a name="ResetPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPasswordSecretId` <a name="ResetPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPasswordSecretId"></a>

```go
func ResetPasswordSecretId()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```

##### `ResetPrivateKeyFile` <a name="ResetPrivateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFile"></a>

```go
func ResetPrivateKeyFile()
```

##### `ResetPrivateKeyFileSecretId` <a name="ResetPrivateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyFileSecretId"></a>

```go
func ResetPrivateKeyFileSecretId()
```

##### `ResetPrivateKeyPassphrase` <a name="ResetPrivateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphrase"></a>

```go
func ResetPrivateKeyPassphrase()
```

##### `ResetPrivateKeyPassphraseSecretId` <a name="ResetPrivateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPrivateKeyPassphraseSecretId"></a>

```go
func ResetPrivateKeyPassphraseSecretId()
```

##### `ResetProducerProperties` <a name="ResetProducerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetProducerProperties"></a>

```go
func ResetProducerProperties()
```

##### `ResetPublicKeyFingerprint` <a name="ResetPublicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetPublicKeyFingerprint"></a>

```go
func ResetPublicKeyFingerprint()
```

##### `ResetRedisClusterId` <a name="ResetRedisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRedisClusterId"></a>

```go
func ResetRedisClusterId()
```

##### `ResetRegion` <a name="ResetRegion" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRoutingMethod` <a name="ResetRoutingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetRoutingMethod"></a>

```go
func ResetRoutingMethod()
```

##### `ResetSasToken` <a name="ResetSasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasToken"></a>

```go
func ResetSasToken()
```

##### `ResetSasTokenSecretId` <a name="ResetSasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSasTokenSecretId"></a>

```go
func ResetSasTokenSecretId()
```

##### `ResetSecretAccessKey` <a name="ResetSecretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKey"></a>

```go
func ResetSecretAccessKey()
```

##### `ResetSecretAccessKeySecretId` <a name="ResetSecretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecretAccessKeySecretId"></a>

```go
func ResetSecretAccessKeySecretId()
```

##### `ResetSecurityProtocol` <a name="ResetSecurityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSecurityProtocol"></a>

```go
func ResetSecurityProtocol()
```

##### `ResetServers` <a name="ResetServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServers"></a>

```go
func ResetServers()
```

##### `ResetServiceAccountKeyFile` <a name="ResetServiceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFile"></a>

```go
func ResetServiceAccountKeyFile()
```

##### `ResetServiceAccountKeyFileSecretId` <a name="ResetServiceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetServiceAccountKeyFileSecretId"></a>

```go
func ResetServiceAccountKeyFileSecretId()
```

##### `ResetSessionMode` <a name="ResetSessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSessionMode"></a>

```go
func ResetSessionMode()
```

##### `ResetShouldUseJndi` <a name="ResetShouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldUseJndi"></a>

```go
func ResetShouldUseJndi()
```

##### `ResetShouldValidateServerCertificate` <a name="ResetShouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetShouldValidateServerCertificate"></a>

```go
func ResetShouldValidateServerCertificate()
```

##### `ResetSslCa` <a name="ResetSslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCa"></a>

```go
func ResetSslCa()
```

##### `ResetSslCert` <a name="ResetSslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCert"></a>

```go
func ResetSslCert()
```

##### `ResetSslClientKeystash` <a name="ResetSslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystash"></a>

```go
func ResetSslClientKeystash()
```

##### `ResetSslClientKeystashSecretId` <a name="ResetSslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystashSecretId"></a>

```go
func ResetSslClientKeystashSecretId()
```

##### `ResetSslClientKeystoredb` <a name="ResetSslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredb"></a>

```go
func ResetSslClientKeystoredb()
```

##### `ResetSslClientKeystoredbSecretId` <a name="ResetSslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslClientKeystoredbSecretId"></a>

```go
func ResetSslClientKeystoredbSecretId()
```

##### `ResetSslCrl` <a name="ResetSslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslCrl"></a>

```go
func ResetSslCrl()
```

##### `ResetSslKey` <a name="ResetSslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKey"></a>

```go
func ResetSslKey()
```

##### `ResetSslKeyPassword` <a name="ResetSslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPassword"></a>

```go
func ResetSslKeyPassword()
```

##### `ResetSslKeyPasswordSecretId` <a name="ResetSslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeyPasswordSecretId"></a>

```go
func ResetSslKeyPasswordSecretId()
```

##### `ResetSslKeySecretId` <a name="ResetSslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslKeySecretId"></a>

```go
func ResetSslKeySecretId()
```

##### `ResetSslMode` <a name="ResetSslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslMode"></a>

```go
func ResetSslMode()
```

##### `ResetSslServerCertificate` <a name="ResetSslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSslServerCertificate"></a>

```go
func ResetSslServerCertificate()
```

##### `ResetStreamPoolId` <a name="ResetStreamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetStreamPoolId"></a>

```go
func ResetStreamPoolId()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetSubnetId"></a>

```go
func ResetSubnetId()
```

##### `ResetTenancyId` <a name="ResetTenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTenancyId"></a>

```go
func ResetTenancyId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTriggerRefresh` <a name="ResetTriggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTriggerRefresh"></a>

```go
func ResetTriggerRefresh()
```

##### `ResetTrustStore` <a name="ResetTrustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStore"></a>

```go
func ResetTrustStore()
```

##### `ResetTrustStorePassword` <a name="ResetTrustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePassword"></a>

```go
func ResetTrustStorePassword()
```

##### `ResetTrustStorePasswordSecretId` <a name="ResetTrustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStorePasswordSecretId"></a>

```go
func ResetTrustStorePasswordSecretId()
```

##### `ResetTrustStoreSecretId` <a name="ResetTrustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetTrustStoreSecretId"></a>

```go
func ResetTrustStoreSecretId()
```

##### `ResetUrl` <a name="ResetUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUrl"></a>

```go
func ResetUrl()
```

##### `ResetUserId` <a name="ResetUserId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUserId"></a>

```go
func ResetUserId()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetVaultId` <a name="ResetVaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetVaultId"></a>

```go
func ResetVaultId()
```

##### `ResetWallet` <a name="ResetWallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWallet"></a>

```go
func ResetWallet()
```

##### `ResetWalletSecretId` <a name="ResetWalletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.resetWalletSecretId"></a>

```go
func ResetWalletSecretId()
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

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.GoldenGateConnection_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.GoldenGateConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.GoldenGateConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.GoldenGateConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GoldenGateConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GoldenGateConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GoldenGateConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes">AdditionalAttributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers">BootstrapServers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps">IngressIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput">AccountKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput">AccountKeySecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput">AdditionalAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput">AuthenticationModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput">BootstrapServersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput">ClientSecretSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput">ConnectionFactoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput">ConnectionStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput">ConnectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput">ConnectionUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput">ConsumerPropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput">CoreSiteXmlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput">DeploymentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput">DoesUseSecretIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput">FingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput">IsLockOverrideInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput">JndiConnectionFactoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput">JndiInitialContextFactoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput">JndiProviderUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput">JndiSecurityCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput">JndiSecurityCredentialsSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput">JndiSecurityPrincipalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput">KeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput">KeyStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput">KeyStorePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput">KeyStorePasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput">KeyStoreSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput">LocksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput">PasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput">PrivateKeyFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput">PrivateKeyFileSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput">PrivateKeyPassphraseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput">PrivateKeyPassphraseSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput">ProducerPropertiesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput">PublicKeyFingerprintInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput">RedisClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput">RoutingMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput">SasTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput">SasTokenSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput">SecretAccessKeySecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput">SecurityProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput">ServersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput">ServiceAccountKeyFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput">ServiceAccountKeyFileSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput">SessionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput">ShouldUseJndiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput">ShouldValidateServerCertificateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput">SslCaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput">SslCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput">SslClientKeystashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput">SslClientKeystashSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput">SslClientKeystoredbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput">SslClientKeystoredbSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput">SslCrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput">SslKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput">SslKeyPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput">SslKeyPasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput">SslKeySecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput">SslModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput">SslServerCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput">StreamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput">TechnologyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput">TenancyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput">TriggerRefreshInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput">TrustStoreInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput">TrustStorePasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput">TrustStorePasswordSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput">TrustStoreSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput">VaultIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput">WalletInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput">WalletSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey">AccountKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId">AccountKeySecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId">ClientSecretSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory">ConnectionFactory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties">ConsumerProperties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml">CoreSiteXml</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds">DoesUseSecretIds</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory">JndiConnectionFactory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory">JndiInitialContextFactory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl">JndiProviderUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials">JndiSecurityCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId">JndiSecurityCredentialsSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal">JndiSecurityPrincipal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId">KeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore">KeyStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword">KeyStorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId">KeyStorePasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId">KeyStoreSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile">PrivateKeyFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId">PrivateKeyFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId">PrivateKeyPassphraseSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties">ProducerProperties</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint">PublicKeyFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId">RedisClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod">RoutingMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken">SasToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId">SasTokenSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId">SecretAccessKeySecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol">SecurityProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers">Servers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile">ServiceAccountKeyFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId">ServiceAccountKeyFileSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode">SessionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi">ShouldUseJndi</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate">ShouldValidateServerCertificate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa">SslCa</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert">SslCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash">SslClientKeystash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId">SslClientKeystashSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb">SslClientKeystoredb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId">SslClientKeystoredbSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl">SslCrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey">SslKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword">SslKeyPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId">SslKeyPasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId">SslKeySecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate">SslServerCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId">StreamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType">TechnologyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh">TriggerRefresh</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore">TrustStore</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword">TrustStorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId">TrustStorePasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId">TrustStoreSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId">VaultId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet">Wallet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalAttributes`<sup>Required</sup> <a name="AdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributes"></a>

```go
func AdditionalAttributes() GoldenGateConnectionAdditionalAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList">GoldenGateConnectionAdditionalAttributesList</a>

---

##### `BootstrapServers`<sup>Required</sup> <a name="BootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServers"></a>

```go
func BootstrapServers() GoldenGateConnectionBootstrapServersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList">GoldenGateConnectionBootstrapServersList</a>

---

##### `IngressIps`<sup>Required</sup> <a name="IngressIps" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.ingressIps"></a>

```go
func IngressIps() GoldenGateConnectionIngressIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList">GoldenGateConnectionIngressIpsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locks"></a>

```go
func Locks() GoldenGateConnectionLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList">GoldenGateConnectionLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeouts"></a>

```go
func Timeouts() GoldenGateConnectionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference">GoldenGateConnectionTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyIdInput"></a>

```go
func AccessKeyIdInput() *string
```

- *Type:* *string

---

##### `AccountKeyInput`<sup>Optional</sup> <a name="AccountKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeyInput"></a>

```go
func AccountKeyInput() *string
```

- *Type:* *string

---

##### `AccountKeySecretIdInput`<sup>Optional</sup> <a name="AccountKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretIdInput"></a>

```go
func AccountKeySecretIdInput() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `AdditionalAttributesInput`<sup>Optional</sup> <a name="AdditionalAttributesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.additionalAttributesInput"></a>

```go
func AdditionalAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticationModeInput`<sup>Optional</sup> <a name="AuthenticationModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationModeInput"></a>

```go
func AuthenticationModeInput() *string
```

- *Type:* *string

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationTypeInput"></a>

```go
func AuthenticationTypeInput() *string
```

- *Type:* *string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantIdInput"></a>

```go
func AzureTenantIdInput() *string
```

- *Type:* *string

---

##### `BootstrapServersInput`<sup>Optional</sup> <a name="BootstrapServersInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.bootstrapServersInput"></a>

```go
func BootstrapServersInput() interface{}
```

- *Type:* interface{}

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientSecretSecretIdInput`<sup>Optional</sup> <a name="ClientSecretSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretIdInput"></a>

```go
func ClientSecretSecretIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConnectionFactoryInput`<sup>Optional</sup> <a name="ConnectionFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactoryInput"></a>

```go
func ConnectionFactoryInput() *string
```

- *Type:* *string

---

##### `ConnectionStringInput`<sup>Optional</sup> <a name="ConnectionStringInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionStringInput"></a>

```go
func ConnectionStringInput() *string
```

- *Type:* *string

---

##### `ConnectionTypeInput`<sup>Optional</sup> <a name="ConnectionTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionTypeInput"></a>

```go
func ConnectionTypeInput() *string
```

- *Type:* *string

---

##### `ConnectionUrlInput`<sup>Optional</sup> <a name="ConnectionUrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrlInput"></a>

```go
func ConnectionUrlInput() *string
```

- *Type:* *string

---

##### `ConsumerPropertiesInput`<sup>Optional</sup> <a name="ConsumerPropertiesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerPropertiesInput"></a>

```go
func ConsumerPropertiesInput() *string
```

- *Type:* *string

---

##### `CoreSiteXmlInput`<sup>Optional</sup> <a name="CoreSiteXmlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXmlInput"></a>

```go
func CoreSiteXmlInput() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentIdInput`<sup>Optional</sup> <a name="DeploymentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentIdInput"></a>

```go
func DeploymentIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DoesUseSecretIdsInput`<sup>Optional</sup> <a name="DoesUseSecretIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIdsInput"></a>

```go
func DoesUseSecretIdsInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `FingerprintInput`<sup>Optional</sup> <a name="FingerprintInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprintInput"></a>

```go
func FingerprintInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsLockOverrideInput`<sup>Optional</sup> <a name="IsLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverrideInput"></a>

```go
func IsLockOverrideInput() interface{}
```

- *Type:* interface{}

---

##### `JndiConnectionFactoryInput`<sup>Optional</sup> <a name="JndiConnectionFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactoryInput"></a>

```go
func JndiConnectionFactoryInput() *string
```

- *Type:* *string

---

##### `JndiInitialContextFactoryInput`<sup>Optional</sup> <a name="JndiInitialContextFactoryInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactoryInput"></a>

```go
func JndiInitialContextFactoryInput() *string
```

- *Type:* *string

---

##### `JndiProviderUrlInput`<sup>Optional</sup> <a name="JndiProviderUrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrlInput"></a>

```go
func JndiProviderUrlInput() *string
```

- *Type:* *string

---

##### `JndiSecurityCredentialsInput`<sup>Optional</sup> <a name="JndiSecurityCredentialsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsInput"></a>

```go
func JndiSecurityCredentialsInput() *string
```

- *Type:* *string

---

##### `JndiSecurityCredentialsSecretIdInput`<sup>Optional</sup> <a name="JndiSecurityCredentialsSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretIdInput"></a>

```go
func JndiSecurityCredentialsSecretIdInput() *string
```

- *Type:* *string

---

##### `JndiSecurityPrincipalInput`<sup>Optional</sup> <a name="JndiSecurityPrincipalInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipalInput"></a>

```go
func JndiSecurityPrincipalInput() *string
```

- *Type:* *string

---

##### `KeyIdInput`<sup>Optional</sup> <a name="KeyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyIdInput"></a>

```go
func KeyIdInput() *string
```

- *Type:* *string

---

##### `KeyStoreInput`<sup>Optional</sup> <a name="KeyStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreInput"></a>

```go
func KeyStoreInput() *string
```

- *Type:* *string

---

##### `KeyStorePasswordInput`<sup>Optional</sup> <a name="KeyStorePasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordInput"></a>

```go
func KeyStorePasswordInput() *string
```

- *Type:* *string

---

##### `KeyStorePasswordSecretIdInput`<sup>Optional</sup> <a name="KeyStorePasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretIdInput"></a>

```go
func KeyStorePasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `KeyStoreSecretIdInput`<sup>Optional</sup> <a name="KeyStoreSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretIdInput"></a>

```go
func KeyStoreSecretIdInput() *string
```

- *Type:* *string

---

##### `LocksInput`<sup>Optional</sup> <a name="LocksInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.locksInput"></a>

```go
func LocksInput() interface{}
```

- *Type:* interface{}

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PasswordSecretIdInput`<sup>Optional</sup> <a name="PasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretIdInput"></a>

```go
func PasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `PrivateKeyFileInput`<sup>Optional</sup> <a name="PrivateKeyFileInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileInput"></a>

```go
func PrivateKeyFileInput() *string
```

- *Type:* *string

---

##### `PrivateKeyFileSecretIdInput`<sup>Optional</sup> <a name="PrivateKeyFileSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretIdInput"></a>

```go
func PrivateKeyFileSecretIdInput() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphraseInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseInput"></a>

```go
func PrivateKeyPassphraseInput() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphraseSecretIdInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretIdInput"></a>

```go
func PrivateKeyPassphraseSecretIdInput() *string
```

- *Type:* *string

---

##### `ProducerPropertiesInput`<sup>Optional</sup> <a name="ProducerPropertiesInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerPropertiesInput"></a>

```go
func ProducerPropertiesInput() *string
```

- *Type:* *string

---

##### `PublicKeyFingerprintInput`<sup>Optional</sup> <a name="PublicKeyFingerprintInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprintInput"></a>

```go
func PublicKeyFingerprintInput() *string
```

- *Type:* *string

---

##### `RedisClusterIdInput`<sup>Optional</sup> <a name="RedisClusterIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterIdInput"></a>

```go
func RedisClusterIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RoutingMethodInput`<sup>Optional</sup> <a name="RoutingMethodInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethodInput"></a>

```go
func RoutingMethodInput() *string
```

- *Type:* *string

---

##### `SasTokenInput`<sup>Optional</sup> <a name="SasTokenInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenInput"></a>

```go
func SasTokenInput() *string
```

- *Type:* *string

---

##### `SasTokenSecretIdInput`<sup>Optional</sup> <a name="SasTokenSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretIdInput"></a>

```go
func SasTokenSecretIdInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeyInput"></a>

```go
func SecretAccessKeyInput() *string
```

- *Type:* *string

---

##### `SecretAccessKeySecretIdInput`<sup>Optional</sup> <a name="SecretAccessKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretIdInput"></a>

```go
func SecretAccessKeySecretIdInput() *string
```

- *Type:* *string

---

##### `SecurityProtocolInput`<sup>Optional</sup> <a name="SecurityProtocolInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocolInput"></a>

```go
func SecurityProtocolInput() *string
```

- *Type:* *string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serversInput"></a>

```go
func ServersInput() *string
```

- *Type:* *string

---

##### `ServiceAccountKeyFileInput`<sup>Optional</sup> <a name="ServiceAccountKeyFileInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileInput"></a>

```go
func ServiceAccountKeyFileInput() *string
```

- *Type:* *string

---

##### `ServiceAccountKeyFileSecretIdInput`<sup>Optional</sup> <a name="ServiceAccountKeyFileSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretIdInput"></a>

```go
func ServiceAccountKeyFileSecretIdInput() *string
```

- *Type:* *string

---

##### `SessionModeInput`<sup>Optional</sup> <a name="SessionModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionModeInput"></a>

```go
func SessionModeInput() *string
```

- *Type:* *string

---

##### `ShouldUseJndiInput`<sup>Optional</sup> <a name="ShouldUseJndiInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndiInput"></a>

```go
func ShouldUseJndiInput() interface{}
```

- *Type:* interface{}

---

##### `ShouldValidateServerCertificateInput`<sup>Optional</sup> <a name="ShouldValidateServerCertificateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificateInput"></a>

```go
func ShouldValidateServerCertificateInput() interface{}
```

- *Type:* interface{}

---

##### `SslCaInput`<sup>Optional</sup> <a name="SslCaInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCaInput"></a>

```go
func SslCaInput() *string
```

- *Type:* *string

---

##### `SslCertInput`<sup>Optional</sup> <a name="SslCertInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCertInput"></a>

```go
func SslCertInput() *string
```

- *Type:* *string

---

##### `SslClientKeystashInput`<sup>Optional</sup> <a name="SslClientKeystashInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashInput"></a>

```go
func SslClientKeystashInput() *string
```

- *Type:* *string

---

##### `SslClientKeystashSecretIdInput`<sup>Optional</sup> <a name="SslClientKeystashSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretIdInput"></a>

```go
func SslClientKeystashSecretIdInput() *string
```

- *Type:* *string

---

##### `SslClientKeystoredbInput`<sup>Optional</sup> <a name="SslClientKeystoredbInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbInput"></a>

```go
func SslClientKeystoredbInput() *string
```

- *Type:* *string

---

##### `SslClientKeystoredbSecretIdInput`<sup>Optional</sup> <a name="SslClientKeystoredbSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretIdInput"></a>

```go
func SslClientKeystoredbSecretIdInput() *string
```

- *Type:* *string

---

##### `SslCrlInput`<sup>Optional</sup> <a name="SslCrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrlInput"></a>

```go
func SslCrlInput() *string
```

- *Type:* *string

---

##### `SslKeyInput`<sup>Optional</sup> <a name="SslKeyInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyInput"></a>

```go
func SslKeyInput() *string
```

- *Type:* *string

---

##### `SslKeyPasswordInput`<sup>Optional</sup> <a name="SslKeyPasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordInput"></a>

```go
func SslKeyPasswordInput() *string
```

- *Type:* *string

---

##### `SslKeyPasswordSecretIdInput`<sup>Optional</sup> <a name="SslKeyPasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretIdInput"></a>

```go
func SslKeyPasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `SslKeySecretIdInput`<sup>Optional</sup> <a name="SslKeySecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretIdInput"></a>

```go
func SslKeySecretIdInput() *string
```

- *Type:* *string

---

##### `SslModeInput`<sup>Optional</sup> <a name="SslModeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslModeInput"></a>

```go
func SslModeInput() *string
```

- *Type:* *string

---

##### `SslServerCertificateInput`<sup>Optional</sup> <a name="SslServerCertificateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificateInput"></a>

```go
func SslServerCertificateInput() *string
```

- *Type:* *string

---

##### `StreamPoolIdInput`<sup>Optional</sup> <a name="StreamPoolIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolIdInput"></a>

```go
func StreamPoolIdInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TechnologyTypeInput`<sup>Optional</sup> <a name="TechnologyTypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyTypeInput"></a>

```go
func TechnologyTypeInput() *string
```

- *Type:* *string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyIdInput"></a>

```go
func TenancyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TriggerRefreshInput`<sup>Optional</sup> <a name="TriggerRefreshInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefreshInput"></a>

```go
func TriggerRefreshInput() interface{}
```

- *Type:* interface{}

---

##### `TrustStoreInput`<sup>Optional</sup> <a name="TrustStoreInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreInput"></a>

```go
func TrustStoreInput() *string
```

- *Type:* *string

---

##### `TrustStorePasswordInput`<sup>Optional</sup> <a name="TrustStorePasswordInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordInput"></a>

```go
func TrustStorePasswordInput() *string
```

- *Type:* *string

---

##### `TrustStorePasswordSecretIdInput`<sup>Optional</sup> <a name="TrustStorePasswordSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretIdInput"></a>

```go
func TrustStorePasswordSecretIdInput() *string
```

- *Type:* *string

---

##### `TrustStoreSecretIdInput`<sup>Optional</sup> <a name="TrustStoreSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretIdInput"></a>

```go
func TrustStoreSecretIdInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `VaultIdInput`<sup>Optional</sup> <a name="VaultIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultIdInput"></a>

```go
func VaultIdInput() *string
```

- *Type:* *string

---

##### `WalletInput`<sup>Optional</sup> <a name="WalletInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletInput"></a>

```go
func WalletInput() *string
```

- *Type:* *string

---

##### `WalletSecretIdInput`<sup>Optional</sup> <a name="WalletSecretIdInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretIdInput"></a>

```go
func WalletSecretIdInput() *string
```

- *Type:* *string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accessKeyId"></a>

```go
func AccessKeyId() *string
```

- *Type:* *string

---

##### `AccountKey`<sup>Required</sup> <a name="AccountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKey"></a>

```go
func AccountKey() *string
```

- *Type:* *string

---

##### `AccountKeySecretId`<sup>Required</sup> <a name="AccountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountKeySecretId"></a>

```go
func AccountKeySecretId() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `AuthenticationMode`<sup>Required</sup> <a name="AuthenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationMode"></a>

```go
func AuthenticationMode() *string
```

- *Type:* *string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.authenticationType"></a>

```go
func AuthenticationType() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Required</sup> <a name="AzureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClientSecretSecretId`<sup>Required</sup> <a name="ClientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.clientSecretSecretId"></a>

```go
func ClientSecretSecretId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionFactory`<sup>Required</sup> <a name="ConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionFactory"></a>

```go
func ConnectionFactory() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `ConnectionUrl`<sup>Required</sup> <a name="ConnectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.connectionUrl"></a>

```go
func ConnectionUrl() *string
```

- *Type:* *string

---

##### `ConsumerProperties`<sup>Required</sup> <a name="ConsumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.consumerProperties"></a>

```go
func ConsumerProperties() *string
```

- *Type:* *string

---

##### `CoreSiteXml`<sup>Required</sup> <a name="CoreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.coreSiteXml"></a>

```go
func CoreSiteXml() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DoesUseSecretIds`<sup>Required</sup> <a name="DoesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.doesUseSecretIds"></a>

```go
func DoesUseSecretIds() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.isLockOverride"></a>

```go
func IsLockOverride() interface{}
```

- *Type:* interface{}

---

##### `JndiConnectionFactory`<sup>Required</sup> <a name="JndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiConnectionFactory"></a>

```go
func JndiConnectionFactory() *string
```

- *Type:* *string

---

##### `JndiInitialContextFactory`<sup>Required</sup> <a name="JndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiInitialContextFactory"></a>

```go
func JndiInitialContextFactory() *string
```

- *Type:* *string

---

##### `JndiProviderUrl`<sup>Required</sup> <a name="JndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiProviderUrl"></a>

```go
func JndiProviderUrl() *string
```

- *Type:* *string

---

##### `JndiSecurityCredentials`<sup>Required</sup> <a name="JndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentials"></a>

```go
func JndiSecurityCredentials() *string
```

- *Type:* *string

---

##### `JndiSecurityCredentialsSecretId`<sup>Required</sup> <a name="JndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityCredentialsSecretId"></a>

```go
func JndiSecurityCredentialsSecretId() *string
```

- *Type:* *string

---

##### `JndiSecurityPrincipal`<sup>Required</sup> <a name="JndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.jndiSecurityPrincipal"></a>

```go
func JndiSecurityPrincipal() *string
```

- *Type:* *string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyId"></a>

```go
func KeyId() *string
```

- *Type:* *string

---

##### `KeyStore`<sup>Required</sup> <a name="KeyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStore"></a>

```go
func KeyStore() *string
```

- *Type:* *string

---

##### `KeyStorePassword`<sup>Required</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePassword"></a>

```go
func KeyStorePassword() *string
```

- *Type:* *string

---

##### `KeyStorePasswordSecretId`<sup>Required</sup> <a name="KeyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStorePasswordSecretId"></a>

```go
func KeyStorePasswordSecretId() *string
```

- *Type:* *string

---

##### `KeyStoreSecretId`<sup>Required</sup> <a name="KeyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.keyStoreSecretId"></a>

```go
func KeyStoreSecretId() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PrivateKeyFile`<sup>Required</sup> <a name="PrivateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFile"></a>

```go
func PrivateKeyFile() *string
```

- *Type:* *string

---

##### `PrivateKeyFileSecretId`<sup>Required</sup> <a name="PrivateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyFileSecretId"></a>

```go
func PrivateKeyFileSecretId() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphrase`<sup>Required</sup> <a name="PrivateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphrase"></a>

```go
func PrivateKeyPassphrase() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphraseSecretId`<sup>Required</sup> <a name="PrivateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.privateKeyPassphraseSecretId"></a>

```go
func PrivateKeyPassphraseSecretId() *string
```

- *Type:* *string

---

##### `ProducerProperties`<sup>Required</sup> <a name="ProducerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.producerProperties"></a>

```go
func ProducerProperties() *string
```

- *Type:* *string

---

##### `PublicKeyFingerprint`<sup>Required</sup> <a name="PublicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.publicKeyFingerprint"></a>

```go
func PublicKeyFingerprint() *string
```

- *Type:* *string

---

##### `RedisClusterId`<sup>Required</sup> <a name="RedisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.redisClusterId"></a>

```go
func RedisClusterId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RoutingMethod`<sup>Required</sup> <a name="RoutingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.routingMethod"></a>

```go
func RoutingMethod() *string
```

- *Type:* *string

---

##### `SasToken`<sup>Required</sup> <a name="SasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasToken"></a>

```go
func SasToken() *string
```

- *Type:* *string

---

##### `SasTokenSecretId`<sup>Required</sup> <a name="SasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sasTokenSecretId"></a>

```go
func SasTokenSecretId() *string
```

- *Type:* *string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKey"></a>

```go
func SecretAccessKey() *string
```

- *Type:* *string

---

##### `SecretAccessKeySecretId`<sup>Required</sup> <a name="SecretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.secretAccessKeySecretId"></a>

```go
func SecretAccessKeySecretId() *string
```

- *Type:* *string

---

##### `SecurityProtocol`<sup>Required</sup> <a name="SecurityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.securityProtocol"></a>

```go
func SecurityProtocol() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.servers"></a>

```go
func Servers() *string
```

- *Type:* *string

---

##### `ServiceAccountKeyFile`<sup>Required</sup> <a name="ServiceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFile"></a>

```go
func ServiceAccountKeyFile() *string
```

- *Type:* *string

---

##### `ServiceAccountKeyFileSecretId`<sup>Required</sup> <a name="ServiceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.serviceAccountKeyFileSecretId"></a>

```go
func ServiceAccountKeyFileSecretId() *string
```

- *Type:* *string

---

##### `SessionMode`<sup>Required</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sessionMode"></a>

```go
func SessionMode() *string
```

- *Type:* *string

---

##### `ShouldUseJndi`<sup>Required</sup> <a name="ShouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldUseJndi"></a>

```go
func ShouldUseJndi() interface{}
```

- *Type:* interface{}

---

##### `ShouldValidateServerCertificate`<sup>Required</sup> <a name="ShouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.shouldValidateServerCertificate"></a>

```go
func ShouldValidateServerCertificate() interface{}
```

- *Type:* interface{}

---

##### `SslCa`<sup>Required</sup> <a name="SslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCa"></a>

```go
func SslCa() *string
```

- *Type:* *string

---

##### `SslCert`<sup>Required</sup> <a name="SslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCert"></a>

```go
func SslCert() *string
```

- *Type:* *string

---

##### `SslClientKeystash`<sup>Required</sup> <a name="SslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystash"></a>

```go
func SslClientKeystash() *string
```

- *Type:* *string

---

##### `SslClientKeystashSecretId`<sup>Required</sup> <a name="SslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystashSecretId"></a>

```go
func SslClientKeystashSecretId() *string
```

- *Type:* *string

---

##### `SslClientKeystoredb`<sup>Required</sup> <a name="SslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredb"></a>

```go
func SslClientKeystoredb() *string
```

- *Type:* *string

---

##### `SslClientKeystoredbSecretId`<sup>Required</sup> <a name="SslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslClientKeystoredbSecretId"></a>

```go
func SslClientKeystoredbSecretId() *string
```

- *Type:* *string

---

##### `SslCrl`<sup>Required</sup> <a name="SslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslCrl"></a>

```go
func SslCrl() *string
```

- *Type:* *string

---

##### `SslKey`<sup>Required</sup> <a name="SslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKey"></a>

```go
func SslKey() *string
```

- *Type:* *string

---

##### `SslKeyPassword`<sup>Required</sup> <a name="SslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPassword"></a>

```go
func SslKeyPassword() *string
```

- *Type:* *string

---

##### `SslKeyPasswordSecretId`<sup>Required</sup> <a name="SslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeyPasswordSecretId"></a>

```go
func SslKeyPasswordSecretId() *string
```

- *Type:* *string

---

##### `SslKeySecretId`<sup>Required</sup> <a name="SslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslKeySecretId"></a>

```go
func SslKeySecretId() *string
```

- *Type:* *string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `SslServerCertificate`<sup>Required</sup> <a name="SslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.sslServerCertificate"></a>

```go
func SslServerCertificate() *string
```

- *Type:* *string

---

##### `StreamPoolId`<sup>Required</sup> <a name="StreamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.streamPoolId"></a>

```go
func StreamPoolId() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TechnologyType`<sup>Required</sup> <a name="TechnologyType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.technologyType"></a>

```go
func TechnologyType() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `TriggerRefresh`<sup>Required</sup> <a name="TriggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.triggerRefresh"></a>

```go
func TriggerRefresh() interface{}
```

- *Type:* interface{}

---

##### `TrustStore`<sup>Required</sup> <a name="TrustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStore"></a>

```go
func TrustStore() *string
```

- *Type:* *string

---

##### `TrustStorePassword`<sup>Required</sup> <a name="TrustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePassword"></a>

```go
func TrustStorePassword() *string
```

- *Type:* *string

---

##### `TrustStorePasswordSecretId`<sup>Required</sup> <a name="TrustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStorePasswordSecretId"></a>

```go
func TrustStorePasswordSecretId() *string
```

- *Type:* *string

---

##### `TrustStoreSecretId`<sup>Required</sup> <a name="TrustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.trustStoreSecretId"></a>

```go
func TrustStoreSecretId() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `VaultId`<sup>Required</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.vaultId"></a>

```go
func VaultId() *string
```

- *Type:* *string

---

##### `Wallet`<sup>Required</sup> <a name="Wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.wallet"></a>

```go
func Wallet() *string
```

- *Type:* *string

---

##### `WalletSecretId`<sup>Required</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.walletSecretId"></a>

```go
func WalletSecretId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateConnectionAdditionalAttributes <a name="GoldenGateConnectionAdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

&goldengateconnection.GoldenGateConnectionAdditionalAttributes {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#name GoldenGateConnection#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributes.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#value GoldenGateConnection#value}.

---

### GoldenGateConnectionBootstrapServers <a name="GoldenGateConnectionBootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

&goldengateconnection.GoldenGateConnectionBootstrapServers {
	Host: *string,
	Port: *f64,
	PrivateIp: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServers.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

### GoldenGateConnectionConfig <a name="GoldenGateConnectionConfig" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

&goldengateconnection.GoldenGateConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ConnectionType: *string,
	DisplayName: *string,
	TechnologyType: *string,
	AccessKeyId: *string,
	AccountKey: *string,
	AccountKeySecretId: *string,
	AccountName: *string,
	AdditionalAttributes: interface{},
	AuthenticationMode: *string,
	AuthenticationType: *string,
	AzureTenantId: *string,
	BootstrapServers: interface{},
	ClientId: *string,
	ClientSecret: *string,
	ClientSecretSecretId: *string,
	ConnectionFactory: *string,
	ConnectionString: *string,
	ConnectionUrl: *string,
	ConsumerProperties: *string,
	CoreSiteXml: *string,
	DatabaseId: *string,
	DatabaseName: *string,
	DbSystemId: *string,
	DefinedTags: *map[string]*string,
	DeploymentId: *string,
	Description: *string,
	DoesUseSecretIds: interface{},
	Endpoint: *string,
	Fingerprint: *string,
	FreeformTags: *map[string]*string,
	Host: *string,
	Id: *string,
	IsLockOverride: interface{},
	JndiConnectionFactory: *string,
	JndiInitialContextFactory: *string,
	JndiProviderUrl: *string,
	JndiSecurityCredentials: *string,
	JndiSecurityCredentialsSecretId: *string,
	JndiSecurityPrincipal: *string,
	KeyId: *string,
	KeyStore: *string,
	KeyStorePassword: *string,
	KeyStorePasswordSecretId: *string,
	KeyStoreSecretId: *string,
	Locks: interface{},
	NsgIds: *[]*string,
	Password: *string,
	PasswordSecretId: *string,
	Port: *f64,
	PrivateIp: *string,
	PrivateKeyFile: *string,
	PrivateKeyFileSecretId: *string,
	PrivateKeyPassphrase: *string,
	PrivateKeyPassphraseSecretId: *string,
	ProducerProperties: *string,
	PublicKeyFingerprint: *string,
	RedisClusterId: *string,
	Region: *string,
	RoutingMethod: *string,
	SasToken: *string,
	SasTokenSecretId: *string,
	SecretAccessKey: *string,
	SecretAccessKeySecretId: *string,
	SecurityProtocol: *string,
	Servers: *string,
	ServiceAccountKeyFile: *string,
	ServiceAccountKeyFileSecretId: *string,
	SessionMode: *string,
	ShouldUseJndi: interface{},
	ShouldValidateServerCertificate: interface{},
	SslCa: *string,
	SslCert: *string,
	SslClientKeystash: *string,
	SslClientKeystashSecretId: *string,
	SslClientKeystoredb: *string,
	SslClientKeystoredbSecretId: *string,
	SslCrl: *string,
	SslKey: *string,
	SslKeyPassword: *string,
	SslKeyPasswordSecretId: *string,
	SslKeySecretId: *string,
	SslMode: *string,
	SslServerCertificate: *string,
	StreamPoolId: *string,
	SubnetId: *string,
	TenancyId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.goldenGateConnection.GoldenGateConnectionTimeouts,
	TriggerRefresh: interface{},
	TrustStore: *string,
	TrustStorePassword: *string,
	TrustStorePasswordSecretId: *string,
	TrustStoreSecretId: *string,
	Url: *string,
	UserId: *string,
	Username: *string,
	VaultId: *string,
	Wallet: *string,
	WalletSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType">ConnectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType">TechnologyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId">AccessKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey">AccountKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId">AccountKeySecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes">AdditionalAttributes</a></code> | <code>interface{}</code> | additional_attributes block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode">AuthenticationMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType">AuthenticationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers">BootstrapServers</a></code> | <code>interface{}</code> | bootstrap_servers block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId">ClientSecretSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory">ConnectionFactory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString">ConnectionString</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl">ConnectionUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties">ConsumerProperties</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml">CoreSiteXml</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName">DatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds">DoesUseSecretIds</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride">IsLockOverride</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory">JndiConnectionFactory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory">JndiInitialContextFactory</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl">JndiProviderUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials">JndiSecurityCredentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId">JndiSecurityCredentialsSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal">JndiSecurityPrincipal</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId">KeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore">KeyStore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword">KeyStorePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId">KeyStorePasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId">KeyStoreSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks">Locks</a></code> | <code>interface{}</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp">PrivateIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile">PrivateKeyFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId">PrivateKeyFileSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId">PrivateKeyPassphraseSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties">ProducerProperties</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint">PublicKeyFingerprint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId">RedisClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod">RoutingMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken">SasToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId">SasTokenSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey">SecretAccessKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId">SecretAccessKeySecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol">SecurityProtocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers">Servers</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile">ServiceAccountKeyFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId">ServiceAccountKeyFileSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode">SessionMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi">ShouldUseJndi</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate">ShouldValidateServerCertificate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa">SslCa</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert">SslCert</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash">SslClientKeystash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId">SslClientKeystashSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb">SslClientKeystoredb</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId">SslClientKeystoredbSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl">SslCrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey">SslKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword">SslKeyPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId">SslKeyPasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId">SslKeySecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode">SslMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate">SslServerCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId">StreamPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId">TenancyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh">TriggerRefresh</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore">TrustStore</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword">TrustStorePassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId">TrustStorePasswordSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId">TrustStoreSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId">VaultId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet">Wallet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId">WalletSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#compartment_id GoldenGateConnection#compartment_id}.

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionType"></a>

```go
ConnectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_type GoldenGateConnection#connection_type}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#display_name GoldenGateConnection#display_name}.

---

##### `TechnologyType`<sup>Required</sup> <a name="TechnologyType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.technologyType"></a>

```go
TechnologyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#technology_type GoldenGateConnection#technology_type}.

---

##### `AccessKeyId`<sup>Optional</sup> <a name="AccessKeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accessKeyId"></a>

```go
AccessKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#access_key_id GoldenGateConnection#access_key_id}.

---

##### `AccountKey`<sup>Optional</sup> <a name="AccountKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKey"></a>

```go
AccountKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key GoldenGateConnection#account_key}.

---

##### `AccountKeySecretId`<sup>Optional</sup> <a name="AccountKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountKeySecretId"></a>

```go
AccountKeySecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_key_secret_id GoldenGateConnection#account_key_secret_id}.

---

##### `AccountName`<sup>Optional</sup> <a name="AccountName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#account_name GoldenGateConnection#account_name}.

---

##### `AdditionalAttributes`<sup>Optional</sup> <a name="AdditionalAttributes" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.additionalAttributes"></a>

```go
AdditionalAttributes interface{}
```

- *Type:* interface{}

additional_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#additional_attributes GoldenGateConnection#additional_attributes}

---

##### `AuthenticationMode`<sup>Optional</sup> <a name="AuthenticationMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationMode"></a>

```go
AuthenticationMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_mode GoldenGateConnection#authentication_mode}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.authenticationType"></a>

```go
AuthenticationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#authentication_type GoldenGateConnection#authentication_type}.

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.azureTenantId"></a>

```go
AzureTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#azure_tenant_id GoldenGateConnection#azure_tenant_id}.

---

##### `BootstrapServers`<sup>Optional</sup> <a name="BootstrapServers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.bootstrapServers"></a>

```go
BootstrapServers interface{}
```

- *Type:* interface{}

bootstrap_servers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#bootstrap_servers GoldenGateConnection#bootstrap_servers}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_id GoldenGateConnection#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret GoldenGateConnection#client_secret}.

---

##### `ClientSecretSecretId`<sup>Optional</sup> <a name="ClientSecretSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.clientSecretSecretId"></a>

```go
ClientSecretSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#client_secret_secret_id GoldenGateConnection#client_secret_secret_id}.

---

##### `ConnectionFactory`<sup>Optional</sup> <a name="ConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionFactory"></a>

```go
ConnectionFactory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_factory GoldenGateConnection#connection_factory}.

---

##### `ConnectionString`<sup>Optional</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionString"></a>

```go
ConnectionString *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_string GoldenGateConnection#connection_string}.

---

##### `ConnectionUrl`<sup>Optional</sup> <a name="ConnectionUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.connectionUrl"></a>

```go
ConnectionUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#connection_url GoldenGateConnection#connection_url}.

---

##### `ConsumerProperties`<sup>Optional</sup> <a name="ConsumerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.consumerProperties"></a>

```go
ConsumerProperties *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#consumer_properties GoldenGateConnection#consumer_properties}.

---

##### `CoreSiteXml`<sup>Optional</sup> <a name="CoreSiteXml" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.coreSiteXml"></a>

```go
CoreSiteXml *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#core_site_xml GoldenGateConnection#core_site_xml}.

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_id GoldenGateConnection#database_id}.

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#database_name GoldenGateConnection#database_name}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#db_system_id GoldenGateConnection#db_system_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#defined_tags GoldenGateConnection#defined_tags}.

---

##### `DeploymentId`<sup>Optional</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.deploymentId"></a>

```go
DeploymentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#deployment_id GoldenGateConnection#deployment_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#description GoldenGateConnection#description}.

---

##### `DoesUseSecretIds`<sup>Optional</sup> <a name="DoesUseSecretIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.doesUseSecretIds"></a>

```go
DoesUseSecretIds interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#does_use_secret_ids GoldenGateConnection#does_use_secret_ids}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#endpoint GoldenGateConnection#endpoint}.

---

##### `Fingerprint`<sup>Optional</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.fingerprint"></a>

```go
Fingerprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#fingerprint GoldenGateConnection#fingerprint}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#freeform_tags GoldenGateConnection#freeform_tags}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#host GoldenGateConnection#host}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#id GoldenGateConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsLockOverride`<sup>Optional</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.isLockOverride"></a>

```go
IsLockOverride interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#is_lock_override GoldenGateConnection#is_lock_override}.

---

##### `JndiConnectionFactory`<sup>Optional</sup> <a name="JndiConnectionFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiConnectionFactory"></a>

```go
JndiConnectionFactory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_connection_factory GoldenGateConnection#jndi_connection_factory}.

---

##### `JndiInitialContextFactory`<sup>Optional</sup> <a name="JndiInitialContextFactory" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiInitialContextFactory"></a>

```go
JndiInitialContextFactory *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_initial_context_factory GoldenGateConnection#jndi_initial_context_factory}.

---

##### `JndiProviderUrl`<sup>Optional</sup> <a name="JndiProviderUrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiProviderUrl"></a>

```go
JndiProviderUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_provider_url GoldenGateConnection#jndi_provider_url}.

---

##### `JndiSecurityCredentials`<sup>Optional</sup> <a name="JndiSecurityCredentials" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentials"></a>

```go
JndiSecurityCredentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials GoldenGateConnection#jndi_security_credentials}.

---

##### `JndiSecurityCredentialsSecretId`<sup>Optional</sup> <a name="JndiSecurityCredentialsSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityCredentialsSecretId"></a>

```go
JndiSecurityCredentialsSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_credentials_secret_id GoldenGateConnection#jndi_security_credentials_secret_id}.

---

##### `JndiSecurityPrincipal`<sup>Optional</sup> <a name="JndiSecurityPrincipal" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.jndiSecurityPrincipal"></a>

```go
JndiSecurityPrincipal *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#jndi_security_principal GoldenGateConnection#jndi_security_principal}.

---

##### `KeyId`<sup>Optional</sup> <a name="KeyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyId"></a>

```go
KeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_id GoldenGateConnection#key_id}.

---

##### `KeyStore`<sup>Optional</sup> <a name="KeyStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStore"></a>

```go
KeyStore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store GoldenGateConnection#key_store}.

---

##### `KeyStorePassword`<sup>Optional</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePassword"></a>

```go
KeyStorePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password GoldenGateConnection#key_store_password}.

---

##### `KeyStorePasswordSecretId`<sup>Optional</sup> <a name="KeyStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStorePasswordSecretId"></a>

```go
KeyStorePasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_password_secret_id GoldenGateConnection#key_store_password_secret_id}.

---

##### `KeyStoreSecretId`<sup>Optional</sup> <a name="KeyStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.keyStoreSecretId"></a>

```go
KeyStoreSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#key_store_secret_id GoldenGateConnection#key_store_secret_id}.

---

##### `Locks`<sup>Optional</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.locks"></a>

```go
Locks interface{}
```

- *Type:* interface{}

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#locks GoldenGateConnection#locks}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#nsg_ids GoldenGateConnection#nsg_ids}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password GoldenGateConnection#password}.

---

##### `PasswordSecretId`<sup>Optional</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.passwordSecretId"></a>

```go
PasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#password_secret_id GoldenGateConnection#password_secret_id}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#port GoldenGateConnection#port}.

---

##### `PrivateIp`<sup>Optional</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateIp"></a>

```go
PrivateIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_ip GoldenGateConnection#private_ip}.

---

##### `PrivateKeyFile`<sup>Optional</sup> <a name="PrivateKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFile"></a>

```go
PrivateKeyFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file GoldenGateConnection#private_key_file}.

---

##### `PrivateKeyFileSecretId`<sup>Optional</sup> <a name="PrivateKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyFileSecretId"></a>

```go
PrivateKeyFileSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_file_secret_id GoldenGateConnection#private_key_file_secret_id}.

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphrase"></a>

```go
PrivateKeyPassphrase *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase GoldenGateConnection#private_key_passphrase}.

---

##### `PrivateKeyPassphraseSecretId`<sup>Optional</sup> <a name="PrivateKeyPassphraseSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.privateKeyPassphraseSecretId"></a>

```go
PrivateKeyPassphraseSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#private_key_passphrase_secret_id GoldenGateConnection#private_key_passphrase_secret_id}.

---

##### `ProducerProperties`<sup>Optional</sup> <a name="ProducerProperties" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.producerProperties"></a>

```go
ProducerProperties *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#producer_properties GoldenGateConnection#producer_properties}.

---

##### `PublicKeyFingerprint`<sup>Optional</sup> <a name="PublicKeyFingerprint" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.publicKeyFingerprint"></a>

```go
PublicKeyFingerprint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#public_key_fingerprint GoldenGateConnection#public_key_fingerprint}.

---

##### `RedisClusterId`<sup>Optional</sup> <a name="RedisClusterId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.redisClusterId"></a>

```go
RedisClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#redis_cluster_id GoldenGateConnection#redis_cluster_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#region GoldenGateConnection#region}.

---

##### `RoutingMethod`<sup>Optional</sup> <a name="RoutingMethod" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.routingMethod"></a>

```go
RoutingMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#routing_method GoldenGateConnection#routing_method}.

---

##### `SasToken`<sup>Optional</sup> <a name="SasToken" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasToken"></a>

```go
SasToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token GoldenGateConnection#sas_token}.

---

##### `SasTokenSecretId`<sup>Optional</sup> <a name="SasTokenSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sasTokenSecretId"></a>

```go
SasTokenSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#sas_token_secret_id GoldenGateConnection#sas_token_secret_id}.

---

##### `SecretAccessKey`<sup>Optional</sup> <a name="SecretAccessKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKey"></a>

```go
SecretAccessKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key GoldenGateConnection#secret_access_key}.

---

##### `SecretAccessKeySecretId`<sup>Optional</sup> <a name="SecretAccessKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.secretAccessKeySecretId"></a>

```go
SecretAccessKeySecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#secret_access_key_secret_id GoldenGateConnection#secret_access_key_secret_id}.

---

##### `SecurityProtocol`<sup>Optional</sup> <a name="SecurityProtocol" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.securityProtocol"></a>

```go
SecurityProtocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#security_protocol GoldenGateConnection#security_protocol}.

---

##### `Servers`<sup>Optional</sup> <a name="Servers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.servers"></a>

```go
Servers *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#servers GoldenGateConnection#servers}.

---

##### `ServiceAccountKeyFile`<sup>Optional</sup> <a name="ServiceAccountKeyFile" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFile"></a>

```go
ServiceAccountKeyFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file GoldenGateConnection#service_account_key_file}.

---

##### `ServiceAccountKeyFileSecretId`<sup>Optional</sup> <a name="ServiceAccountKeyFileSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.serviceAccountKeyFileSecretId"></a>

```go
ServiceAccountKeyFileSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#service_account_key_file_secret_id GoldenGateConnection#service_account_key_file_secret_id}.

---

##### `SessionMode`<sup>Optional</sup> <a name="SessionMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sessionMode"></a>

```go
SessionMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#session_mode GoldenGateConnection#session_mode}.

---

##### `ShouldUseJndi`<sup>Optional</sup> <a name="ShouldUseJndi" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldUseJndi"></a>

```go
ShouldUseJndi interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_use_jndi GoldenGateConnection#should_use_jndi}.

---

##### `ShouldValidateServerCertificate`<sup>Optional</sup> <a name="ShouldValidateServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.shouldValidateServerCertificate"></a>

```go
ShouldValidateServerCertificate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#should_validate_server_certificate GoldenGateConnection#should_validate_server_certificate}.

---

##### `SslCa`<sup>Optional</sup> <a name="SslCa" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCa"></a>

```go
SslCa *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_ca GoldenGateConnection#ssl_ca}.

---

##### `SslCert`<sup>Optional</sup> <a name="SslCert" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCert"></a>

```go
SslCert *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_cert GoldenGateConnection#ssl_cert}.

---

##### `SslClientKeystash`<sup>Optional</sup> <a name="SslClientKeystash" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystash"></a>

```go
SslClientKeystash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash GoldenGateConnection#ssl_client_keystash}.

---

##### `SslClientKeystashSecretId`<sup>Optional</sup> <a name="SslClientKeystashSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystashSecretId"></a>

```go
SslClientKeystashSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystash_secret_id GoldenGateConnection#ssl_client_keystash_secret_id}.

---

##### `SslClientKeystoredb`<sup>Optional</sup> <a name="SslClientKeystoredb" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredb"></a>

```go
SslClientKeystoredb *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb GoldenGateConnection#ssl_client_keystoredb}.

---

##### `SslClientKeystoredbSecretId`<sup>Optional</sup> <a name="SslClientKeystoredbSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslClientKeystoredbSecretId"></a>

```go
SslClientKeystoredbSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_client_keystoredb_secret_id GoldenGateConnection#ssl_client_keystoredb_secret_id}.

---

##### `SslCrl`<sup>Optional</sup> <a name="SslCrl" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslCrl"></a>

```go
SslCrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_crl GoldenGateConnection#ssl_crl}.

---

##### `SslKey`<sup>Optional</sup> <a name="SslKey" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKey"></a>

```go
SslKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key GoldenGateConnection#ssl_key}.

---

##### `SslKeyPassword`<sup>Optional</sup> <a name="SslKeyPassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPassword"></a>

```go
SslKeyPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password GoldenGateConnection#ssl_key_password}.

---

##### `SslKeyPasswordSecretId`<sup>Optional</sup> <a name="SslKeyPasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeyPasswordSecretId"></a>

```go
SslKeyPasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_password_secret_id GoldenGateConnection#ssl_key_password_secret_id}.

---

##### `SslKeySecretId`<sup>Optional</sup> <a name="SslKeySecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslKeySecretId"></a>

```go
SslKeySecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_key_secret_id GoldenGateConnection#ssl_key_secret_id}.

---

##### `SslMode`<sup>Optional</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslMode"></a>

```go
SslMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_mode GoldenGateConnection#ssl_mode}.

---

##### `SslServerCertificate`<sup>Optional</sup> <a name="SslServerCertificate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.sslServerCertificate"></a>

```go
SslServerCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#ssl_server_certificate GoldenGateConnection#ssl_server_certificate}.

---

##### `StreamPoolId`<sup>Optional</sup> <a name="StreamPoolId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.streamPoolId"></a>

```go
StreamPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#stream_pool_id GoldenGateConnection#stream_pool_id}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#subnet_id GoldenGateConnection#subnet_id}.

---

##### `TenancyId`<sup>Optional</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.tenancyId"></a>

```go
TenancyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#tenancy_id GoldenGateConnection#tenancy_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.timeouts"></a>

```go
Timeouts GoldenGateConnectionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts">GoldenGateConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#timeouts GoldenGateConnection#timeouts}

---

##### `TriggerRefresh`<sup>Optional</sup> <a name="TriggerRefresh" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.triggerRefresh"></a>

```go
TriggerRefresh interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trigger_refresh GoldenGateConnection#trigger_refresh}.

---

##### `TrustStore`<sup>Optional</sup> <a name="TrustStore" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStore"></a>

```go
TrustStore *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store GoldenGateConnection#trust_store}.

---

##### `TrustStorePassword`<sup>Optional</sup> <a name="TrustStorePassword" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePassword"></a>

```go
TrustStorePassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password GoldenGateConnection#trust_store_password}.

---

##### `TrustStorePasswordSecretId`<sup>Optional</sup> <a name="TrustStorePasswordSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStorePasswordSecretId"></a>

```go
TrustStorePasswordSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_password_secret_id GoldenGateConnection#trust_store_password_secret_id}.

---

##### `TrustStoreSecretId`<sup>Optional</sup> <a name="TrustStoreSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.trustStoreSecretId"></a>

```go
TrustStoreSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#trust_store_secret_id GoldenGateConnection#trust_store_secret_id}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#url GoldenGateConnection#url}.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#user_id GoldenGateConnection#user_id}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#username GoldenGateConnection#username}.

---

##### `VaultId`<sup>Optional</sup> <a name="VaultId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.vaultId"></a>

```go
VaultId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#vault_id GoldenGateConnection#vault_id}.

---

##### `Wallet`<sup>Optional</sup> <a name="Wallet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.wallet"></a>

```go
Wallet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet GoldenGateConnection#wallet}.

---

##### `WalletSecretId`<sup>Optional</sup> <a name="WalletSecretId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionConfig.property.walletSecretId"></a>

```go
WalletSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#wallet_secret_id GoldenGateConnection#wallet_secret_id}.

---

### GoldenGateConnectionIngressIps <a name="GoldenGateConnectionIngressIps" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

&goldengateconnection.GoldenGateConnectionIngressIps {

}
```


### GoldenGateConnectionLocks <a name="GoldenGateConnectionLocks" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

&goldengateconnection.GoldenGateConnectionLocks {
	Type: *string,
	Message: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message">Message</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#type GoldenGateConnection#type}.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocks.property.message"></a>

```go
Message *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#message GoldenGateConnection#message}.

---

### GoldenGateConnectionTimeouts <a name="GoldenGateConnectionTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

&goldengateconnection.GoldenGateConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#create GoldenGateConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#delete GoldenGateConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_connection#update GoldenGateConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateConnectionAdditionalAttributesList <a name="GoldenGateConnectionAdditionalAttributesList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnectionAdditionalAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoldenGateConnectionAdditionalAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get"></a>

```go
func Get(index *f64) GoldenGateConnectionAdditionalAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoldenGateConnectionAdditionalAttributesOutputReference <a name="GoldenGateConnectionAdditionalAttributesOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnectionAdditionalAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoldenGateConnectionAdditionalAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionAdditionalAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoldenGateConnectionBootstrapServersList <a name="GoldenGateConnectionBootstrapServersList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnectionBootstrapServersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoldenGateConnectionBootstrapServersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get"></a>

```go
func Get(index *f64) GoldenGateConnectionBootstrapServersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoldenGateConnectionBootstrapServersOutputReference <a name="GoldenGateConnectionBootstrapServersOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnectionBootstrapServersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoldenGateConnectionBootstrapServersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPrivateIp` <a name="ResetPrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.resetPrivateIp"></a>

```go
func ResetPrivateIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput">PrivateIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PrivateIpInput`<sup>Optional</sup> <a name="PrivateIpInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIpInput"></a>

```go
func PrivateIpInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionBootstrapServersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoldenGateConnectionIngressIpsList <a name="GoldenGateConnectionIngressIpsList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnectionIngressIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoldenGateConnectionIngressIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get"></a>

```go
func Get(index *f64) GoldenGateConnectionIngressIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoldenGateConnectionIngressIpsOutputReference <a name="GoldenGateConnectionIngressIpsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnectionIngressIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoldenGateConnectionIngressIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp">IngressIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IngressIp`<sup>Required</sup> <a name="IngressIp" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.ingressIp"></a>

```go
func IngressIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoldenGateConnectionIngressIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionIngressIps">GoldenGateConnectionIngressIps</a>

---


### GoldenGateConnectionLocksList <a name="GoldenGateConnectionLocksList" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnectionLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoldenGateConnectionLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

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

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get"></a>

```go
func Get(index *f64) GoldenGateConnectionLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoldenGateConnectionLocksOutputReference <a name="GoldenGateConnectionLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnectionLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoldenGateConnectionLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.resetMessage"></a>

```go
func ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoldenGateConnectionTimeoutsOutputReference <a name="GoldenGateConnectionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/goldengateconnection"

goldengateconnection.NewGoldenGateConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoldenGateConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.goldenGateConnection.GoldenGateConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



