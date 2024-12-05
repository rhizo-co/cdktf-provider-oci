# `dataOciSecretsSecretbundle` Submodule <a name="`dataOciSecretsSecretbundle` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecretsSecretbundle <a name="DataOciSecretsSecretbundle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle oci_secrets_secretbundle}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle.DataOciSecretsSecretbundle;

DataOciSecretsSecretbundle.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .secretVersionName(java.lang.String)
//  .stage(java.lang.String)
//  .versionNumber(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.secretVersionName">secretVersionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.stage">stage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.versionNumber">versionNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secretVersionName`<sup>Optional</sup> <a name="secretVersionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.secretVersionName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.stage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}.

---

##### `versionNumber`<sup>Optional</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.Initializer.parameter.versionNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetSecretVersionName">resetSecretVersionName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetStage">resetStage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetVersionNumber">resetVersionNumber</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetId"></a>

```java
public void resetId()
```

##### `resetSecretVersionName` <a name="resetSecretVersionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetSecretVersionName"></a>

```java
public void resetSecretVersionName()
```

##### `resetStage` <a name="resetStage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetStage"></a>

```java
public void resetStage()
```

##### `resetVersionNumber` <a name="resetVersionNumber" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.resetVersionNumber"></a>

```java
public void resetVersionNumber()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecretsSecretbundle resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle.DataOciSecretsSecretbundle;

DataOciSecretsSecretbundle.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle.DataOciSecretsSecretbundle;

DataOciSecretsSecretbundle.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle.DataOciSecretsSecretbundle;

DataOciSecretsSecretbundle.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle.DataOciSecretsSecretbundle;

DataOciSecretsSecretbundle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciSecretsSecretbundle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciSecretsSecretbundle resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciSecretsSecretbundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciSecretsSecretbundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecretsSecretbundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.metadata">metadata</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretBundleContent">secretBundleContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList">DataOciSecretsSecretbundleSecretBundleContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stages">stages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfDeletion">timeOfDeletion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfExpiry">timeOfExpiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionNameInput">secretVersionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stageInput">stageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumberInput">versionNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionName">secretVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stage">stage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumber">versionNumber</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `secretBundleContent`<sup>Required</sup> <a name="secretBundleContent" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretBundleContent"></a>

```java
public DataOciSecretsSecretbundleSecretBundleContentList getSecretBundleContent();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList">DataOciSecretsSecretbundleSecretBundleContentList</a>

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stages"></a>

```java
public java.util.List<java.lang.String> getStages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfDeletion"></a>

```java
public java.lang.String getTimeOfDeletion();
```

- *Type:* java.lang.String

---

##### `timeOfExpiry`<sup>Required</sup> <a name="timeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.timeOfExpiry"></a>

```java
public java.lang.String getTimeOfExpiry();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `secretVersionNameInput`<sup>Optional</sup> <a name="secretVersionNameInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionNameInput"></a>

```java
public java.lang.String getSecretVersionNameInput();
```

- *Type:* java.lang.String

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stageInput"></a>

```java
public java.lang.String getStageInput();
```

- *Type:* java.lang.String

---

##### `versionNumberInput`<sup>Optional</sup> <a name="versionNumberInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumberInput"></a>

```java
public java.lang.String getVersionNumberInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `secretVersionName`<sup>Required</sup> <a name="secretVersionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.secretVersionName"></a>

```java
public java.lang.String getSecretVersionName();
```

- *Type:* java.lang.String

---

##### `stage`<sup>Required</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.versionNumber"></a>

```java
public java.lang.String getVersionNumber();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundle.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecretsSecretbundleConfig <a name="DataOciSecretsSecretbundleConfig" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle.DataOciSecretsSecretbundleConfig;

DataOciSecretsSecretbundleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .secretId(java.lang.String)
//  .id(java.lang.String)
//  .secretVersionName(java.lang.String)
//  .stage(java.lang.String)
//  .versionNumber(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretVersionName">secretVersionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.stage">stage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.versionNumber">versionNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_id DataOciSecretsSecretbundle#secret_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#id DataOciSecretsSecretbundle#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `secretVersionName`<sup>Optional</sup> <a name="secretVersionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.secretVersionName"></a>

```java
public java.lang.String getSecretVersionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#secret_version_name DataOciSecretsSecretbundle#secret_version_name}.

---

##### `stage`<sup>Optional</sup> <a name="stage" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.stage"></a>

```java
public java.lang.String getStage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#stage DataOciSecretsSecretbundle#stage}.

---

##### `versionNumber`<sup>Optional</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleConfig.property.versionNumber"></a>

```java
public java.lang.String getVersionNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle#version_number DataOciSecretsSecretbundle#version_number}.

---

### DataOciSecretsSecretbundleSecretBundleContent <a name="DataOciSecretsSecretbundleSecretBundleContent" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle.DataOciSecretsSecretbundleSecretBundleContent;

DataOciSecretsSecretbundleSecretBundleContent.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecretsSecretbundleSecretBundleContentList <a name="DataOciSecretsSecretbundleSecretBundleContentList" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle.DataOciSecretsSecretbundleSecretBundleContentList;

new DataOciSecretsSecretbundleSecretBundleContentList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.get"></a>

```java
public DataOciSecretsSecretbundleSecretBundleContentOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciSecretsSecretbundleSecretBundleContentOutputReference <a name="DataOciSecretsSecretbundleSecretBundleContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference;

new DataOciSecretsSecretbundleSecretBundleContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent">DataOciSecretsSecretbundleSecretBundleContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContentOutputReference.property.internalValue"></a>

```java
public DataOciSecretsSecretbundleSecretBundleContent getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundle.DataOciSecretsSecretbundleSecretBundleContent">DataOciSecretsSecretbundleSecretBundleContent</a>

---



