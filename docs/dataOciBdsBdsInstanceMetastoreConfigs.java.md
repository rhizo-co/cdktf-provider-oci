# `dataOciBdsBdsInstanceMetastoreConfigs` Submodule <a name="`dataOciBdsBdsInstanceMetastoreConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceMetastoreConfigs <a name="DataOciBdsBdsInstanceMetastoreConfigs" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs oci_bds_bds_instance_metastore_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigs;

DataOciBdsBdsInstanceMetastoreConfigs.Builder.create(Construct scope, java.lang.String id)
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
    .bdsInstanceId(java.lang.String)
//  .bdsApiKeyId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciBdsBdsInstanceMetastoreConfigsFilter>)
//  .id(java.lang.String)
//  .metastoreId(java.lang.String)
//  .metastoreType(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.bdsApiKeyId">bdsApiKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.metastoreType">metastoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.bdsInstanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}.

---

##### `bdsApiKeyId`<sup>Optional</sup> <a name="bdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.bdsApiKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#filter DataOciBdsBdsInstanceMetastoreConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.metastoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}.

---

##### `metastoreType`<sup>Optional</sup> <a name="metastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.metastoreType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetBdsApiKeyId">resetBdsApiKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreId">resetMetastoreId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreType">resetMetastoreType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciBdsBdsInstanceMetastoreConfigsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>>

---

##### `resetBdsApiKeyId` <a name="resetBdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetBdsApiKeyId"></a>

```java
public void resetBdsApiKeyId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetId"></a>

```java
public void resetId()
```

##### `resetMetastoreId` <a name="resetMetastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreId"></a>

```java
public void resetMetastoreId()
```

##### `resetMetastoreType` <a name="resetMetastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetMetastoreType"></a>

```java
public void resetMetastoreType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigs;

DataOciBdsBdsInstanceMetastoreConfigs.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigs;

DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigs;

DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigs;

DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciBdsBdsInstanceMetastoreConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciBdsBdsInstanceMetastoreConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceMetastoreConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsMetastoreConfigurations">bdsMetastoreConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList">DataOciBdsBdsInstanceMetastoreConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyIdInput">bdsApiKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceIdInput">bdsInstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreIdInput">metastoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreTypeInput">metastoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyId">bdsApiKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreType">metastoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `bdsMetastoreConfigurations`<sup>Required</sup> <a name="bdsMetastoreConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsMetastoreConfigurations"></a>

```java
public DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList getBdsMetastoreConfigurations();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filter"></a>

```java
public DataOciBdsBdsInstanceMetastoreConfigsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList">DataOciBdsBdsInstanceMetastoreConfigsFilterList</a>

---

##### `bdsApiKeyIdInput`<sup>Optional</sup> <a name="bdsApiKeyIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyIdInput"></a>

```java
public java.lang.String getBdsApiKeyIdInput();
```

- *Type:* java.lang.String

---

##### `bdsInstanceIdInput`<sup>Optional</sup> <a name="bdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceIdInput"></a>

```java
public java.lang.String getBdsInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreIdInput`<sup>Optional</sup> <a name="metastoreIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreIdInput"></a>

```java
public java.lang.String getMetastoreIdInput();
```

- *Type:* java.lang.String

---

##### `metastoreTypeInput`<sup>Optional</sup> <a name="metastoreTypeInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreTypeInput"></a>

```java
public java.lang.String getMetastoreTypeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `bdsApiKeyId`<sup>Required</sup> <a name="bdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsApiKeyId"></a>

```java
public java.lang.String getBdsApiKeyId();
```

- *Type:* java.lang.String

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.metastoreType"></a>

```java
public java.lang.String getMetastoreType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigs.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations <a name="DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations;

DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations.builder()
    .build();
```


### DataOciBdsBdsInstanceMetastoreConfigsConfig <a name="DataOciBdsBdsInstanceMetastoreConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigsConfig;

DataOciBdsBdsInstanceMetastoreConfigsConfig.builder()
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
    .bdsInstanceId(java.lang.String)
//  .bdsApiKeyId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciBdsBdsInstanceMetastoreConfigsFilter>)
//  .id(java.lang.String)
//  .metastoreId(java.lang.String)
//  .metastoreType(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsApiKeyId">bdsApiKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreType">metastoreType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_instance_id DataOciBdsBdsInstanceMetastoreConfigs#bds_instance_id}.

---

##### `bdsApiKeyId`<sup>Optional</sup> <a name="bdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.bdsApiKeyId"></a>

```java
public java.lang.String getBdsApiKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#bds_api_key_id DataOciBdsBdsInstanceMetastoreConfigs#bds_api_key_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#display_name DataOciBdsBdsInstanceMetastoreConfigs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#filter DataOciBdsBdsInstanceMetastoreConfigs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#id DataOciBdsBdsInstanceMetastoreConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metastoreId`<sup>Optional</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_id DataOciBdsBdsInstanceMetastoreConfigs#metastore_id}.

---

##### `metastoreType`<sup>Optional</sup> <a name="metastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.metastoreType"></a>

```java
public java.lang.String getMetastoreType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#metastore_type DataOciBdsBdsInstanceMetastoreConfigs#metastore_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#state DataOciBdsBdsInstanceMetastoreConfigs#state}.

---

### DataOciBdsBdsInstanceMetastoreConfigsFilter <a name="DataOciBdsBdsInstanceMetastoreConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigsFilter;

DataOciBdsBdsInstanceMetastoreConfigsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#name DataOciBdsBdsInstanceMetastoreConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#values DataOciBdsBdsInstanceMetastoreConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#regex DataOciBdsBdsInstanceMetastoreConfigs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#name DataOciBdsBdsInstanceMetastoreConfigs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#values DataOciBdsBdsInstanceMetastoreConfigs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_configs#regex DataOciBdsBdsInstanceMetastoreConfigs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList <a name="DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList;

new DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.get"></a>

```java
public DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference <a name="DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference;

new DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.activateTrigger">activateTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyId">bdsApiKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyPassphrase">bdsApiKeyPassphrase</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsInstanceId">bdsInstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.clusterAdminPassword">clusterAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreId">metastoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreType">metastoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `activateTrigger`<sup>Required</sup> <a name="activateTrigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.activateTrigger"></a>

```java
public java.lang.Number getActivateTrigger();
```

- *Type:* java.lang.Number

---

##### `bdsApiKeyId`<sup>Required</sup> <a name="bdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyId"></a>

```java
public java.lang.String getBdsApiKeyId();
```

- *Type:* java.lang.String

---

##### `bdsApiKeyPassphrase`<sup>Required</sup> <a name="bdsApiKeyPassphrase" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsApiKeyPassphrase"></a>

```java
public java.lang.String getBdsApiKeyPassphrase();
```

- *Type:* java.lang.String

---

##### `bdsInstanceId`<sup>Required</sup> <a name="bdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.bdsInstanceId"></a>

```java
public java.lang.String getBdsInstanceId();
```

- *Type:* java.lang.String

---

##### `clusterAdminPassword`<sup>Required</sup> <a name="clusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.clusterAdminPassword"></a>

```java
public java.lang.String getClusterAdminPassword();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metastoreId`<sup>Required</sup> <a name="metastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreId"></a>

```java
public java.lang.String getMetastoreId();
```

- *Type:* java.lang.String

---

##### `metastoreType`<sup>Required</sup> <a name="metastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.metastoreType"></a>

```java
public java.lang.String getMetastoreType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurationsOutputReference.property.internalValue"></a>

```java
public DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations">DataOciBdsBdsInstanceMetastoreConfigsBdsMetastoreConfigurations</a>

---


### DataOciBdsBdsInstanceMetastoreConfigsFilterList <a name="DataOciBdsBdsInstanceMetastoreConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigsFilterList;

new DataOciBdsBdsInstanceMetastoreConfigsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.get"></a>

```java
public DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>>

---


### DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference <a name="DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_bds_bds_instance_metastore_configs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference;

new DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfigs.DataOciBdsBdsInstanceMetastoreConfigsFilter">DataOciBdsBdsInstanceMetastoreConfigsFilter</a>

---



