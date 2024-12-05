# `dataOciBlockchainBlockchainPlatforms` Submodule <a name="`dataOciBlockchainBlockchainPlatforms` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatforms <a name="DataOciBlockchainBlockchainPlatforms" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms oci_blockchain_blockchain_platforms}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatforms;

DataOciBlockchainBlockchainPlatforms.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciBlockchainBlockchainPlatformsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#filter DataOciBlockchainBlockchainPlatforms#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciBlockchainBlockchainPlatformsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>>

---

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatforms;

DataOciBlockchainBlockchainPlatforms.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatforms;

DataOciBlockchainBlockchainPlatforms.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatforms;

DataOciBlockchainBlockchainPlatforms.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatforms;

DataOciBlockchainBlockchainPlatforms.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciBlockchainBlockchainPlatforms.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatforms resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatforms to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciBlockchainBlockchainPlatforms that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatforms to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection">blockchainPlatformCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `blockchainPlatformCollection`<sup>Required</sup> <a name="blockchainPlatformCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.blockchainPlatformCollection"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList getBlockchainPlatformCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filter"></a>

```java
public DataOciBlockchainBlockchainPlatformsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList">DataOciBlockchainBlockchainPlatformsFilterList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatforms.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection;

DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection.builder()
    .build();
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems;

DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems.builder()
    .build();
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails;

DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails.builder()
    .build();
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns;

DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns.builder()
    .build();
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam;

DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam.builder()
    .build();
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers;

DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers.builder()
    .build();
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam;

DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam.builder()
    .build();
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo;

DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo.builder()
    .build();
```


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas;

DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas.builder()
    .build();
```


### DataOciBlockchainBlockchainPlatformsConfig <a name="DataOciBlockchainBlockchainPlatformsConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsConfig;

DataOciBlockchainBlockchainPlatformsConfig.builder()
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
    .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciBlockchainBlockchainPlatformsFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#compartment_id DataOciBlockchainBlockchainPlatforms#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#display_name DataOciBlockchainBlockchainPlatforms#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#filter DataOciBlockchainBlockchainPlatforms#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#id DataOciBlockchainBlockchainPlatforms#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#state DataOciBlockchainBlockchainPlatforms#state}.

---

### DataOciBlockchainBlockchainPlatformsFilter <a name="DataOciBlockchainBlockchainPlatformsFilter" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsFilter;

DataOciBlockchainBlockchainPlatformsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#name DataOciBlockchainBlockchainPlatforms#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#values DataOciBlockchainBlockchainPlatforms#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platforms#regex DataOciBlockchainBlockchainPlatforms#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpuAllocationNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ocpuAllocationNumber`<sup>Required</sup> <a name="ocpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```java
public java.lang.Number getOcpuAllocationNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad">ad</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">ocpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey">osnKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ad"></a>

```java
public java.lang.String getAd();
```

- *Type:* java.lang.String

---

##### `ocpuAllocationParam`<sup>Required</sup> <a name="ocpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList getOcpuAllocationParam();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `osnKey`<sup>Required</sup> <a name="osnKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.osnKey"></a>

```java
public java.lang.String getOsnKey();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsOutputReference.property.internalValue"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsns</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns">osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers">peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `osns`<sup>Required</sup> <a name="osns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.osns"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList getOsns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOsnsList</a>

---

##### `peers`<sup>Required</sup> <a name="peers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.peers"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList getPeers();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsOutputReference.property.internalValue"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetails</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">ocpuAllocationNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ocpuAllocationNumber`<sup>Required</sup> <a name="ocpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```java
public java.lang.Number getOcpuAllocationNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad">ad</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam">ocpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey">peerKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ad"></a>

```java
public java.lang.String getAd();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Required</sup> <a name="alias" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ocpuAllocationParam`<sup>Required</sup> <a name="ocpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList getOcpuAllocationParam();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `peerKey`<sup>Required</sup> <a name="peerKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.peerKey"></a>

```java
public java.lang.String getPeerKey();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeersOutputReference.property.internalValue"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsPeers</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">ocpuCapacityNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">ocpuUtilizationNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `ocpuCapacityNumber`<sup>Required</sup> <a name="ocpuCapacityNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```java
public java.lang.Number getOcpuCapacityNumber();
```

- *Type:* java.lang.Number

---

##### `ocpuUtilizationNumber`<sup>Required</sup> <a name="ocpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```java
public java.lang.Number getOcpuUtilizationNumber();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfo</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText">caCertArchiveText</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails">componentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape">computeShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId">federatedUserId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo">hostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken">idcsAccessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol">isByol</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd">isMultiAd</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape">loadBalancerShape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole">platformRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType">platformShapeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion">platformVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas">replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint">serviceEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion">serviceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs">storageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs">storageUsedInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity">totalOcpuCapacity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertArchiveText`<sup>Required</sup> <a name="caCertArchiveText" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.caCertArchiveText"></a>

```java
public java.lang.String getCaCertArchiveText();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `componentDetails`<sup>Required</sup> <a name="componentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.componentDetails"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList getComponentDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsComponentDetailsList</a>

---

##### `computeShape`<sup>Required</sup> <a name="computeShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.computeShape"></a>

```java
public java.lang.String getComputeShape();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `federatedUserId`<sup>Required</sup> <a name="federatedUserId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.federatedUserId"></a>

```java
public java.lang.String getFederatedUserId();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hostOcpuUtilizationInfo`<sup>Required</sup> <a name="hostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.hostOcpuUtilizationInfo"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList getHostOcpuUtilizationInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsHostOcpuUtilizationInfoList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idcsAccessToken`<sup>Required</sup> <a name="idcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.idcsAccessToken"></a>

```java
public java.lang.String getIdcsAccessToken();
```

- *Type:* java.lang.String

---

##### `isByol`<sup>Required</sup> <a name="isByol" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isByol"></a>

```java
public IResolvable getIsByol();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMultiAd`<sup>Required</sup> <a name="isMultiAd" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.isMultiAd"></a>

```java
public IResolvable getIsMultiAd();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `loadBalancerShape`<sup>Required</sup> <a name="loadBalancerShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.loadBalancerShape"></a>

```java
public java.lang.String getLoadBalancerShape();
```

- *Type:* java.lang.String

---

##### `platformRole`<sup>Required</sup> <a name="platformRole" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformRole"></a>

```java
public java.lang.String getPlatformRole();
```

- *Type:* java.lang.String

---

##### `platformShapeType`<sup>Required</sup> <a name="platformShapeType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformShapeType"></a>

```java
public java.lang.String getPlatformShapeType();
```

- *Type:* java.lang.String

---

##### `platformVersion`<sup>Required</sup> <a name="platformVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.platformVersion"></a>

```java
public java.lang.String getPlatformVersion();
```

- *Type:* java.lang.String

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.replicas"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList getReplicas();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList</a>

---

##### `serviceEndpoint`<sup>Required</sup> <a name="serviceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceEndpoint"></a>

```java
public java.lang.String getServiceEndpoint();
```

- *Type:* java.lang.String

---

##### `serviceVersion`<sup>Required</sup> <a name="serviceVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.serviceVersion"></a>

```java
public java.lang.String getServiceVersion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storageSizeInTbs`<sup>Required</sup> <a name="storageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageSizeInTbs"></a>

```java
public java.lang.Number getStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `storageUsedInTbs`<sup>Required</sup> <a name="storageUsedInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.storageUsedInTbs"></a>

```java
public java.lang.Number getStorageUsedInTbs();
```

- *Type:* java.lang.Number

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `totalOcpuCapacity`<sup>Required</sup> <a name="totalOcpuCapacity" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.totalOcpuCapacity"></a>

```java
public java.lang.Number getTotalOcpuCapacity();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItems</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount">caCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount">consoleCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount">proxyCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCount`<sup>Required</sup> <a name="caCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.caCount"></a>

```java
public java.lang.Number getCaCount();
```

- *Type:* java.lang.Number

---

##### `consoleCount`<sup>Required</sup> <a name="consoleCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.consoleCount"></a>

```java
public java.lang.Number getConsoleCount();
```

- *Type:* java.lang.Number

---

##### `proxyCount`<sup>Required</sup> <a name="proxyCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.proxyCount"></a>

```java
public java.lang.Number getProxyCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicasOutputReference.property.internalValue"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsReplicas</a>

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference <a name="DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference;

new DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.items"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollectionOutputReference.property.internalValue"></a>

```java
public DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection">DataOciBlockchainBlockchainPlatformsBlockchainPlatformCollection</a>

---


### DataOciBlockchainBlockchainPlatformsFilterList <a name="DataOciBlockchainBlockchainPlatformsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsFilterList;

new DataOciBlockchainBlockchainPlatformsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get"></a>

```java
public DataOciBlockchainBlockchainPlatformsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>>

---


### DataOciBlockchainBlockchainPlatformsFilterOutputReference <a name="DataOciBlockchainBlockchainPlatformsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_blockchain_blockchain_platforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference;

new DataOciBlockchainBlockchainPlatformsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatforms.DataOciBlockchainBlockchainPlatformsFilter">DataOciBlockchainBlockchainPlatformsFilter</a>

---



