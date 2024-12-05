# `dataOciSecretsSecretbundleVersions` Submodule <a name="`dataOciSecretsSecretbundleVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciSecretsSecretbundleVersions <a name="DataOciSecretsSecretbundleVersions" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions oci_secrets_secretbundle_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersions;

DataOciSecretsSecretbundleVersions.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciSecretsSecretbundleVersionsFilter>)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#secret_id DataOciSecretsSecretbundleVersions#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#id DataOciSecretsSecretbundleVersions#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.secretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#secret_id DataOciSecretsSecretbundleVersions#secret_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#filter DataOciSecretsSecretbundleVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#id DataOciSecretsSecretbundleVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciSecretsSecretbundleVersionsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciSecretsSecretbundleVersions resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersions;

DataOciSecretsSecretbundleVersions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersions;

DataOciSecretsSecretbundleVersions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersions;

DataOciSecretsSecretbundleVersions.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersions;

DataOciSecretsSecretbundleVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciSecretsSecretbundleVersions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciSecretsSecretbundleVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciSecretsSecretbundleVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciSecretsSecretbundleVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciSecretsSecretbundleVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList">DataOciSecretsSecretbundleVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretBundleVersions">secretBundleVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList">DataOciSecretsSecretbundleVersionsSecretBundleVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.filter"></a>

```java
public DataOciSecretsSecretbundleVersionsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList">DataOciSecretsSecretbundleVersionsFilterList</a>

---

##### `secretBundleVersions`<sup>Required</sup> <a name="secretBundleVersions" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretBundleVersions"></a>

```java
public DataOciSecretsSecretbundleVersionsSecretBundleVersionsList getSecretBundleVersions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList">DataOciSecretsSecretbundleVersionsSecretBundleVersionsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciSecretsSecretbundleVersionsConfig <a name="DataOciSecretsSecretbundleVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersionsConfig;

DataOciSecretsSecretbundleVersionsConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciSecretsSecretbundleVersionsFilter>)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#secret_id DataOciSecretsSecretbundleVersions#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#id DataOciSecretsSecretbundleVersions#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#secret_id DataOciSecretsSecretbundleVersions#secret_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#filter DataOciSecretsSecretbundleVersions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#id DataOciSecretsSecretbundleVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciSecretsSecretbundleVersionsFilter <a name="DataOciSecretsSecretbundleVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersionsFilter;

DataOciSecretsSecretbundleVersionsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#name DataOciSecretsSecretbundleVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#values DataOciSecretsSecretbundleVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#regex DataOciSecretsSecretbundleVersions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#name DataOciSecretsSecretbundleVersions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#values DataOciSecretsSecretbundleVersions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/secrets_secretbundle_versions#regex DataOciSecretsSecretbundleVersions#regex}.

---

### DataOciSecretsSecretbundleVersionsSecretBundleVersions <a name="DataOciSecretsSecretbundleVersionsSecretBundleVersions" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersionsSecretBundleVersions;

DataOciSecretsSecretbundleVersionsSecretBundleVersions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciSecretsSecretbundleVersionsFilterList <a name="DataOciSecretsSecretbundleVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersionsFilterList;

new DataOciSecretsSecretbundleVersionsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.get"></a>

```java
public DataOciSecretsSecretbundleVersionsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>>

---


### DataOciSecretsSecretbundleVersionsFilterOutputReference <a name="DataOciSecretsSecretbundleVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersionsFilterOutputReference;

new DataOciSecretsSecretbundleVersionsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsFilter">DataOciSecretsSecretbundleVersionsFilter</a>

---


### DataOciSecretsSecretbundleVersionsSecretBundleVersionsList <a name="DataOciSecretsSecretbundleVersionsSecretBundleVersionsList" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList;

new DataOciSecretsSecretbundleVersionsSecretBundleVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.get"></a>

```java
public DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference <a name="DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_secrets_secretbundle_versions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference;

new DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.stages">stages</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeOfDeletion">timeOfDeletion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeOfExpiry">timeOfExpiry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.versionNumber">versionNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersions">DataOciSecretsSecretbundleVersionsSecretBundleVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `stages`<sup>Required</sup> <a name="stages" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.stages"></a>

```java
public java.util.List<java.lang.String> getStages();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfDeletion`<sup>Required</sup> <a name="timeOfDeletion" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeOfDeletion"></a>

```java
public java.lang.String getTimeOfDeletion();
```

- *Type:* java.lang.String

---

##### `timeOfExpiry`<sup>Required</sup> <a name="timeOfExpiry" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.timeOfExpiry"></a>

```java
public java.lang.String getTimeOfExpiry();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.versionNumber"></a>

```java
public java.lang.String getVersionNumber();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersionsOutputReference.property.internalValue"></a>

```java
public DataOciSecretsSecretbundleVersionsSecretBundleVersions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciSecretsSecretbundleVersions.DataOciSecretsSecretbundleVersionsSecretBundleVersions">DataOciSecretsSecretbundleVersionsSecretBundleVersions</a>

---



