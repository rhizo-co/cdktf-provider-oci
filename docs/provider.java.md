# `provider` Submodule <a name="`provider` Submodule" id="rhizo-co-terraform-provider-oci.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OciProvider <a name="OciProvider" id="rhizo-co-terraform-provider-oci.provider.OciProvider"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs oci}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.provider.OciProvider;

OciProvider.Builder.create(Construct scope, java.lang.String id)
//  .alias(java.lang.String)
//  .auth(java.lang.String)
//  .configFileProfile(java.lang.String)
//  .disableAutoRetries(java.lang.Boolean)
//  .disableAutoRetries(IResolvable)
//  .fingerprint(java.lang.String)
//  .ignoreDefinedTags(java.util.List<java.lang.String>)
//  .privateKey(java.lang.String)
//  .privateKeyPassword(java.lang.String)
//  .privateKeyPath(java.lang.String)
//  .realmSpecificServiceEndpointTemplateEnabled(java.lang.Boolean)
//  .realmSpecificServiceEndpointTemplateEnabled(IResolvable)
//  .region(java.lang.String)
//  .retryDurationSeconds(java.lang.Number)
//  .tenancyOcid(java.lang.String)
//  .userOcid(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.auth">auth</a></code> | <code>java.lang.String</code> | (Optional) The type of auth to use. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.configFileProfile">configFileProfile</a></code> | <code>java.lang.String</code> | (Optional) The profile name to be used from config file, if not set it will be DEFAULT. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.disableAutoRetries">disableAutoRetries</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | (Optional) Disable automatic retries for retriable errors. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | (Optional) The fingerprint for the user's RSA key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.ignoreDefinedTags">ignoreDefinedTags</a></code> | <code>java.util.List<java.lang.String></code> | (Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | (Optional) A PEM formatted RSA private key for the user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKeyPassword">privateKeyPassword</a></code> | <code>java.lang.String</code> | (Optional) The password used to secure the private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKeyPath">privateKeyPath</a></code> | <code>java.lang.String</code> | (Optional) The path to the user's PEM formatted private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.realmSpecificServiceEndpointTemplateEnabled">realmSpecificServiceEndpointTemplateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | (Optional) flags to enable realm specific service endpoint. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | (Required) The region for API connections (e.g. us-ashburn-1). |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.retryDurationSeconds">retryDurationSeconds</a></code> | <code>java.lang.Number</code> | (Optional) The minimum duration (in seconds) to retry a resource operation in response to an error. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | (Optional) The tenancy OCID for a user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.userOcid">userOcid</a></code> | <code>java.lang.String</code> | (Optional) The user OCID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#alias OciProvider#alias}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.auth"></a>

- *Type:* java.lang.String

(Optional) The type of auth to use.

Options are 'ApiKey', 'SecurityToken', 'InstancePrincipal', 'ResourcePrincipal' and 'OKEWorkloadIdentity'. By default, 'ApiKey' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#auth OciProvider#auth}

---

##### `configFileProfile`<sup>Optional</sup> <a name="configFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.configFileProfile"></a>

- *Type:* java.lang.String

(Optional) The profile name to be used from config file, if not set it will be DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#config_file_profile OciProvider#config_file_profile}

---

##### `disableAutoRetries`<sup>Optional</sup> <a name="disableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.disableAutoRetries"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

(Optional) Disable automatic retries for retriable errors.

Automatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#disable_auto_retries OciProvider#disable_auto_retries}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.fingerprint"></a>

- *Type:* java.lang.String

(Optional) The fingerprint for the user's RSA key.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#fingerprint OciProvider#fingerprint}

---

##### `ignoreDefinedTags`<sup>Optional</sup> <a name="ignoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.ignoreDefinedTags"></a>

- *Type:* java.util.List<java.lang.String>

(Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#ignore_defined_tags OciProvider#ignore_defined_tags}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

(Optional) A PEM formatted RSA private key for the user.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key OciProvider#private_key}

---

##### `privateKeyPassword`<sup>Optional</sup> <a name="privateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKeyPassword"></a>

- *Type:* java.lang.String

(Optional) The password used to secure the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_password OciProvider#private_key_password}

---

##### `privateKeyPath`<sup>Optional</sup> <a name="privateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.privateKeyPath"></a>

- *Type:* java.lang.String

(Optional) The path to the user's PEM formatted private key.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_path OciProvider#private_key_path}

---

##### `realmSpecificServiceEndpointTemplateEnabled`<sup>Optional</sup> <a name="realmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.realmSpecificServiceEndpointTemplateEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

(Optional) flags to enable realm specific service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#realm_specific_service_endpoint_template_enabled OciProvider#realm_specific_service_endpoint_template_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.region"></a>

- *Type:* java.lang.String

(Required) The region for API connections (e.g. us-ashburn-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#region OciProvider#region}

---

##### `retryDurationSeconds`<sup>Optional</sup> <a name="retryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.retryDurationSeconds"></a>

- *Type:* java.lang.Number

(Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.

The actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#retry_duration_seconds OciProvider#retry_duration_seconds}

---

##### `tenancyOcid`<sup>Optional</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.tenancyOcid"></a>

- *Type:* java.lang.String

(Optional) The tenancy OCID for a user.

The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#tenancy_ocid OciProvider#tenancy_ocid}

---

##### `userOcid`<sup>Optional</sup> <a name="userOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.Initializer.parameter.userOcid"></a>

- *Type:* java.lang.String

(Optional) The user OCID.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#user_ocid OciProvider#user_ocid}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetConfigFileProfile">resetConfigFileProfile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetDisableAutoRetries">resetDisableAutoRetries</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetFingerprint">resetFingerprint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetIgnoreDefinedTags">resetIgnoreDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPassword">resetPrivateKeyPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPath">resetPrivateKeyPath</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRealmSpecificServiceEndpointTemplateEnabled">resetRealmSpecificServiceEndpointTemplateEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetRetryDurationSeconds">resetRetryDurationSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetTenancyOcid">resetTenancyOcid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.resetUserOcid">resetUserOcid</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.provider.OciProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.provider.OciProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetAuth` <a name="resetAuth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetAuth"></a>

```java
public void resetAuth()
```

##### `resetConfigFileProfile` <a name="resetConfigFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetConfigFileProfile"></a>

```java
public void resetConfigFileProfile()
```

##### `resetDisableAutoRetries` <a name="resetDisableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetDisableAutoRetries"></a>

```java
public void resetDisableAutoRetries()
```

##### `resetFingerprint` <a name="resetFingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetFingerprint"></a>

```java
public void resetFingerprint()
```

##### `resetIgnoreDefinedTags` <a name="resetIgnoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetIgnoreDefinedTags"></a>

```java
public void resetIgnoreDefinedTags()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetPrivateKeyPassword` <a name="resetPrivateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPassword"></a>

```java
public void resetPrivateKeyPassword()
```

##### `resetPrivateKeyPath` <a name="resetPrivateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetPrivateKeyPath"></a>

```java
public void resetPrivateKeyPath()
```

##### `resetRealmSpecificServiceEndpointTemplateEnabled` <a name="resetRealmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRealmSpecificServiceEndpointTemplateEnabled"></a>

```java
public void resetRealmSpecificServiceEndpointTemplateEnabled()
```

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetRetryDurationSeconds` <a name="resetRetryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetRetryDurationSeconds"></a>

```java
public void resetRetryDurationSeconds()
```

##### `resetTenancyOcid` <a name="resetTenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetTenancyOcid"></a>

```java
public void resetTenancyOcid()
```

##### `resetUserOcid` <a name="resetUserOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.resetUserOcid"></a>

```java
public void resetUserOcid()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.provider.OciProvider;

OciProvider.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.provider.OciProvider;

OciProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.oci.provider.OciProvider;

OciProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.provider.OciProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.provider.OciProvider;

OciProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OciProvider.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a OciProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OciProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OciProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.provider.OciProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the OciProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput">authInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput">configFileProfileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput">disableAutoRetriesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput">fingerprintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput">ignoreDefinedTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput">privateKeyPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput">privateKeyPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput">realmSpecificServiceEndpointTemplateEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput">retryDurationSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput">tenancyOcidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput">userOcidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth">auth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile">configFileProfile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries">disableAutoRetries</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags">ignoreDefinedTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword">privateKeyPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath">privateKeyPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled">realmSpecificServiceEndpointTemplateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds">retryDurationSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid">userOcid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.authInput"></a>

```java
public java.lang.String getAuthInput();
```

- *Type:* java.lang.String

---

##### `configFileProfileInput`<sup>Optional</sup> <a name="configFileProfileInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfileInput"></a>

```java
public java.lang.String getConfigFileProfileInput();
```

- *Type:* java.lang.String

---

##### `disableAutoRetriesInput`<sup>Optional</sup> <a name="disableAutoRetriesInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetriesInput"></a>

```java
public java.lang.Object getDisableAutoRetriesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fingerprintInput`<sup>Optional</sup> <a name="fingerprintInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprintInput"></a>

```java
public java.lang.String getFingerprintInput();
```

- *Type:* java.lang.String

---

##### `ignoreDefinedTagsInput`<sup>Optional</sup> <a name="ignoreDefinedTagsInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTagsInput"></a>

```java
public java.util.List<java.lang.String> getIgnoreDefinedTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPasswordInput`<sup>Optional</sup> <a name="privateKeyPasswordInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPasswordInput"></a>

```java
public java.lang.String getPrivateKeyPasswordInput();
```

- *Type:* java.lang.String

---

##### `privateKeyPathInput`<sup>Optional</sup> <a name="privateKeyPathInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPathInput"></a>

```java
public java.lang.String getPrivateKeyPathInput();
```

- *Type:* java.lang.String

---

##### `realmSpecificServiceEndpointTemplateEnabledInput`<sup>Optional</sup> <a name="realmSpecificServiceEndpointTemplateEnabledInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabledInput"></a>

```java
public java.lang.Object getRealmSpecificServiceEndpointTemplateEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `retryDurationSecondsInput`<sup>Optional</sup> <a name="retryDurationSecondsInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSecondsInput"></a>

```java
public java.lang.Number getRetryDurationSecondsInput();
```

- *Type:* java.lang.Number

---

##### `tenancyOcidInput`<sup>Optional</sup> <a name="tenancyOcidInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcidInput"></a>

```java
public java.lang.String getTenancyOcidInput();
```

- *Type:* java.lang.String

---

##### `userOcidInput`<sup>Optional</sup> <a name="userOcidInput" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcidInput"></a>

```java
public java.lang.String getUserOcidInput();
```

- *Type:* java.lang.String

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.auth"></a>

```java
public java.lang.String getAuth();
```

- *Type:* java.lang.String

---

##### `configFileProfile`<sup>Optional</sup> <a name="configFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.configFileProfile"></a>

```java
public java.lang.String getConfigFileProfile();
```

- *Type:* java.lang.String

---

##### `disableAutoRetries`<sup>Optional</sup> <a name="disableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.disableAutoRetries"></a>

```java
public java.lang.Object getDisableAutoRetries();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `ignoreDefinedTags`<sup>Optional</sup> <a name="ignoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.ignoreDefinedTags"></a>

```java
public java.util.List<java.lang.String> getIgnoreDefinedTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyPassword`<sup>Optional</sup> <a name="privateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPassword"></a>

```java
public java.lang.String getPrivateKeyPassword();
```

- *Type:* java.lang.String

---

##### `privateKeyPath`<sup>Optional</sup> <a name="privateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.privateKeyPath"></a>

```java
public java.lang.String getPrivateKeyPath();
```

- *Type:* java.lang.String

---

##### `realmSpecificServiceEndpointTemplateEnabled`<sup>Optional</sup> <a name="realmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```java
public java.lang.Object getRealmSpecificServiceEndpointTemplateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `retryDurationSeconds`<sup>Optional</sup> <a name="retryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.retryDurationSeconds"></a>

```java
public java.lang.Number getRetryDurationSeconds();
```

- *Type:* java.lang.Number

---

##### `tenancyOcid`<sup>Optional</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

---

##### `userOcid`<sup>Optional</sup> <a name="userOcid" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.userOcid"></a>

```java
public java.lang.String getUserOcid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.provider.OciProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OciProviderConfig <a name="OciProviderConfig" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.provider.OciProviderConfig;

OciProviderConfig.builder()
//  .alias(java.lang.String)
//  .auth(java.lang.String)
//  .configFileProfile(java.lang.String)
//  .disableAutoRetries(java.lang.Boolean)
//  .disableAutoRetries(IResolvable)
//  .fingerprint(java.lang.String)
//  .ignoreDefinedTags(java.util.List<java.lang.String>)
//  .privateKey(java.lang.String)
//  .privateKeyPassword(java.lang.String)
//  .privateKeyPath(java.lang.String)
//  .realmSpecificServiceEndpointTemplateEnabled(java.lang.Boolean)
//  .realmSpecificServiceEndpointTemplateEnabled(IResolvable)
//  .region(java.lang.String)
//  .retryDurationSeconds(java.lang.Number)
//  .tenancyOcid(java.lang.String)
//  .userOcid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth">auth</a></code> | <code>java.lang.String</code> | (Optional) The type of auth to use. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile">configFileProfile</a></code> | <code>java.lang.String</code> | (Optional) The profile name to be used from config file, if not set it will be DEFAULT. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries">disableAutoRetries</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | (Optional) Disable automatic retries for retriable errors. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | (Optional) The fingerprint for the user's RSA key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags">ignoreDefinedTags</a></code> | <code>java.util.List<java.lang.String></code> | (Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | (Optional) A PEM formatted RSA private key for the user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword">privateKeyPassword</a></code> | <code>java.lang.String</code> | (Optional) The password used to secure the private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath">privateKeyPath</a></code> | <code>java.lang.String</code> | (Optional) The path to the user's PEM formatted private key. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled">realmSpecificServiceEndpointTemplateEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | (Optional) flags to enable realm specific service endpoint. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region">region</a></code> | <code>java.lang.String</code> | (Required) The region for API connections (e.g. us-ashburn-1). |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds">retryDurationSeconds</a></code> | <code>java.lang.Number</code> | (Optional) The minimum duration (in seconds) to retry a resource operation in response to an error. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid">tenancyOcid</a></code> | <code>java.lang.String</code> | (Optional) The tenancy OCID for a user. |
| <code><a href="#rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid">userOcid</a></code> | <code>java.lang.String</code> | (Optional) The user OCID. |

---

##### `alias`<sup>Optional</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#alias OciProvider#alias}

---

##### `auth`<sup>Optional</sup> <a name="auth" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.auth"></a>

```java
public java.lang.String getAuth();
```

- *Type:* java.lang.String

(Optional) The type of auth to use.

Options are 'ApiKey', 'SecurityToken', 'InstancePrincipal', 'ResourcePrincipal' and 'OKEWorkloadIdentity'. By default, 'ApiKey' will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#auth OciProvider#auth}

---

##### `configFileProfile`<sup>Optional</sup> <a name="configFileProfile" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.configFileProfile"></a>

```java
public java.lang.String getConfigFileProfile();
```

- *Type:* java.lang.String

(Optional) The profile name to be used from config file, if not set it will be DEFAULT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#config_file_profile OciProvider#config_file_profile}

---

##### `disableAutoRetries`<sup>Optional</sup> <a name="disableAutoRetries" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.disableAutoRetries"></a>

```java
public java.lang.Object getDisableAutoRetries();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

(Optional) Disable automatic retries for retriable errors.

Automatic retries were introduced to solve some eventual consistency problems but it also introduced performance issues on destroy operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#disable_auto_retries OciProvider#disable_auto_retries}

---

##### `fingerprint`<sup>Optional</sup> <a name="fingerprint" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

(Optional) The fingerprint for the user's RSA key.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#fingerprint OciProvider#fingerprint}

---

##### `ignoreDefinedTags`<sup>Optional</sup> <a name="ignoreDefinedTags" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.ignoreDefinedTags"></a>

```java
public java.util.List<java.lang.String> getIgnoreDefinedTags();
```

- *Type:* java.util.List<java.lang.String>

(Optional) List of defined tags keys that Terraform should ignore when planning creates and updates to the associated remote object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#ignore_defined_tags OciProvider#ignore_defined_tags}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

(Optional) A PEM formatted RSA private key for the user.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key OciProvider#private_key}

---

##### `privateKeyPassword`<sup>Optional</sup> <a name="privateKeyPassword" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPassword"></a>

```java
public java.lang.String getPrivateKeyPassword();
```

- *Type:* java.lang.String

(Optional) The password used to secure the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_password OciProvider#private_key_password}

---

##### `privateKeyPath`<sup>Optional</sup> <a name="privateKeyPath" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.privateKeyPath"></a>

```java
public java.lang.String getPrivateKeyPath();
```

- *Type:* java.lang.String

(Optional) The path to the user's PEM formatted private key.

A private_key or a private_key_path must be provided if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#private_key_path OciProvider#private_key_path}

---

##### `realmSpecificServiceEndpointTemplateEnabled`<sup>Optional</sup> <a name="realmSpecificServiceEndpointTemplateEnabled" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.realmSpecificServiceEndpointTemplateEnabled"></a>

```java
public java.lang.Object getRealmSpecificServiceEndpointTemplateEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

(Optional) flags to enable realm specific service endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#realm_specific_service_endpoint_template_enabled OciProvider#realm_specific_service_endpoint_template_enabled}

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

(Required) The region for API connections (e.g. us-ashburn-1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#region OciProvider#region}

---

##### `retryDurationSeconds`<sup>Optional</sup> <a name="retryDurationSeconds" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.retryDurationSeconds"></a>

```java
public java.lang.Number getRetryDurationSeconds();
```

- *Type:* java.lang.Number

(Optional) The minimum duration (in seconds) to retry a resource operation in response to an error.

The actual retry duration may be longer due to jittering of retry operations. This value is ignored if the `disable_auto_retries` field is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#retry_duration_seconds OciProvider#retry_duration_seconds}

---

##### `tenancyOcid`<sup>Optional</sup> <a name="tenancyOcid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.tenancyOcid"></a>

```java
public java.lang.String getTenancyOcid();
```

- *Type:* java.lang.String

(Optional) The tenancy OCID for a user.

The tenancy OCID can be found at the bottom of user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#tenancy_ocid OciProvider#tenancy_ocid}

---

##### `userOcid`<sup>Optional</sup> <a name="userOcid" id="rhizo-co-terraform-provider-oci.provider.OciProviderConfig.property.userOcid"></a>

```java
public java.lang.String getUserOcid();
```

- *Type:* java.lang.String

(Optional) The user OCID.

This can be found in user settings in the Oracle Cloud Infrastructure console. Required if auth is set to 'ApiKey', ignored otherwise.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs#user_ocid OciProvider#user_ocid}

---



