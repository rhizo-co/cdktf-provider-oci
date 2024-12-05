# `cloudGuardDataSource` Submodule <a name="`cloudGuardDataSource` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardDataSource <a name="CloudGuardDataSource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source oci_cloud_guard_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSource;

CloudGuardDataSource.Builder.create(Construct scope, java.lang.String id)
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
    .dataSourceFeedProvider(java.lang.String)
    .displayName(java.lang.String)
//  .dataSourceDetails(CloudGuardDataSourceDataSourceDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(CloudGuardDataSourceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#compartment_id CloudGuardDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#display_name CloudGuardDataSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#defined_tags CloudGuardDataSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#freeform_tags CloudGuardDataSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#id CloudGuardDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#status CloudGuardDataSource#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#compartment_id CloudGuardDataSource#compartment_id}.

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.dataSourceFeedProvider"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#display_name CloudGuardDataSource#display_name}.

---

##### `dataSourceDetails`<sup>Optional</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.dataSourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_details CloudGuardDataSource#data_source_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#defined_tags CloudGuardDataSource#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#freeform_tags CloudGuardDataSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#id CloudGuardDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#status CloudGuardDataSource#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#timeouts CloudGuardDataSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putDataSourceDetails">putDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetDataSourceDetails">resetDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSourceDetails` <a name="putDataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putDataSourceDetails"></a>

```java
public void putDataSourceDetails(CloudGuardDataSourceDataSourceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putDataSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putTimeouts"></a>

```java
public void putTimeouts(CloudGuardDataSourceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a>

---

##### `resetDataSourceDetails` <a name="resetDataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetDataSourceDetails"></a>

```java
public void resetDataSourceDetails()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetId"></a>

```java
public void resetId()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSource;

CloudGuardDataSource.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSource;

CloudGuardDataSource.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSource;

CloudGuardDataSource.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSource;

CloudGuardDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudGuardDataSource.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CloudGuardDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudGuardDataSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudGuardDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference">CloudGuardDataSourceDataSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetectorMappingInfo">dataSourceDetectorMappingInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList">CloudGuardDataSourceDataSourceDetectorMappingInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.regionStatusDetail">regionStatusDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList">CloudGuardDataSourceRegionStatusDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference">CloudGuardDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetailsInput">dataSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceFeedProviderInput">dataSourceFeedProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetails"></a>

```java
public CloudGuardDataSourceDataSourceDetailsOutputReference getDataSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference">CloudGuardDataSourceDataSourceDetailsOutputReference</a>

---

##### `dataSourceDetectorMappingInfo`<sup>Required</sup> <a name="dataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetectorMappingInfo"></a>

```java
public CloudGuardDataSourceDataSourceDetectorMappingInfoList getDataSourceDetectorMappingInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList">CloudGuardDataSourceDataSourceDetectorMappingInfoList</a>

---

##### `regionStatusDetail`<sup>Required</sup> <a name="regionStatusDetail" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.regionStatusDetail"></a>

```java
public CloudGuardDataSourceRegionStatusDetailList getRegionStatusDetail();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList">CloudGuardDataSourceRegionStatusDetailList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeouts"></a>

```java
public CloudGuardDataSourceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference">CloudGuardDataSourceTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dataSourceDetailsInput`<sup>Optional</sup> <a name="dataSourceDetailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceDetailsInput"></a>

```java
public CloudGuardDataSourceDataSourceDetails getDataSourceDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a>

---

##### `dataSourceFeedProviderInput`<sup>Optional</sup> <a name="dataSourceFeedProviderInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceFeedProviderInput"></a>

```java
public java.lang.String getDataSourceFeedProviderInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.dataSourceFeedProvider"></a>

```java
public java.lang.String getDataSourceFeedProvider();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSource.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardDataSourceConfig <a name="CloudGuardDataSourceConfig" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceConfig;

CloudGuardDataSourceConfig.builder()
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
    .dataSourceFeedProvider(java.lang.String)
    .displayName(java.lang.String)
//  .dataSourceDetails(CloudGuardDataSourceDataSourceDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .status(java.lang.String)
//  .timeouts(CloudGuardDataSourceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#compartment_id CloudGuardDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#display_name CloudGuardDataSource#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a></code> | data_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#defined_tags CloudGuardDataSource#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#freeform_tags CloudGuardDataSource#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#id CloudGuardDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#status CloudGuardDataSource#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#compartment_id CloudGuardDataSource#compartment_id}.

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dataSourceFeedProvider"></a>

```java
public java.lang.String getDataSourceFeedProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#display_name CloudGuardDataSource#display_name}.

---

##### `dataSourceDetails`<sup>Optional</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.dataSourceDetails"></a>

```java
public CloudGuardDataSourceDataSourceDetails getDataSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a>

data_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_details CloudGuardDataSource#data_source_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#defined_tags CloudGuardDataSource#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#freeform_tags CloudGuardDataSource#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#id CloudGuardDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#status CloudGuardDataSource#status}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceConfig.property.timeouts"></a>

```java
public CloudGuardDataSourceTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#timeouts CloudGuardDataSource#timeouts}

---

### CloudGuardDataSourceDataSourceDetails <a name="CloudGuardDataSourceDataSourceDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetails;

CloudGuardDataSourceDataSourceDetails.builder()
    .dataSourceFeedProvider(java.lang.String)
//  .additionalEntitiesCount(java.lang.Number)
//  .description(java.lang.String)
//  .intervalInMinutes(java.lang.Number)
//  .intervalInSeconds(java.lang.Number)
//  .loggingQueryDetails(CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails)
//  .loggingQueryType(java.lang.String)
//  .operator(java.lang.String)
//  .query(java.lang.String)
//  .queryStartTime(CloudGuardDataSourceDataSourceDetailsQueryStartTime)
//  .regions(java.util.List<java.lang.String>)
//  .scheduledQueryScopeDetails(IResolvable)
//  .scheduledQueryScopeDetails(java.util.List<CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails>)
//  .threshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.additionalEntitiesCount">additionalEntitiesCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#additional_entities_count CloudGuardDataSource#additional_entities_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#description CloudGuardDataSource#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.intervalInMinutes">intervalInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#interval_in_minutes CloudGuardDataSource#interval_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#interval_in_seconds CloudGuardDataSource#interval_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.loggingQueryDetails">loggingQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a></code> | logging_query_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.loggingQueryType">loggingQueryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.operator">operator</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#operator CloudGuardDataSource#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.query">query</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query CloudGuardDataSource#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.queryStartTime">queryStartTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a></code> | query_start_time block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#regions CloudGuardDataSource#regions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.scheduledQueryScopeDetails">scheduledQueryScopeDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>></code> | scheduled_query_scope_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#threshold CloudGuardDataSource#threshold}. |

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.dataSourceFeedProvider"></a>

```java
public java.lang.String getDataSourceFeedProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}.

---

##### `additionalEntitiesCount`<sup>Optional</sup> <a name="additionalEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.additionalEntitiesCount"></a>

```java
public java.lang.Number getAdditionalEntitiesCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#additional_entities_count CloudGuardDataSource#additional_entities_count}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#description CloudGuardDataSource#description}.

---

##### `intervalInMinutes`<sup>Optional</sup> <a name="intervalInMinutes" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.intervalInMinutes"></a>

```java
public java.lang.Number getIntervalInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#interval_in_minutes CloudGuardDataSource#interval_in_minutes}.

---

##### `intervalInSeconds`<sup>Optional</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#interval_in_seconds CloudGuardDataSource#interval_in_seconds}.

---

##### `loggingQueryDetails`<sup>Optional</sup> <a name="loggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.loggingQueryDetails"></a>

```java
public CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails getLoggingQueryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a>

logging_query_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_details CloudGuardDataSource#logging_query_details}

---

##### `loggingQueryType`<sup>Optional</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.loggingQueryType"></a>

```java
public java.lang.String getLoggingQueryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}.

---

##### `operator`<sup>Optional</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#operator CloudGuardDataSource#operator}.

---

##### `query`<sup>Optional</sup> <a name="query" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query CloudGuardDataSource#query}.

---

##### `queryStartTime`<sup>Optional</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.queryStartTime"></a>

```java
public CloudGuardDataSourceDataSourceDetailsQueryStartTime getQueryStartTime();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a>

query_start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query_start_time CloudGuardDataSource#query_start_time}

---

##### `regions`<sup>Optional</sup> <a name="regions" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#regions CloudGuardDataSource#regions}.

---

##### `scheduledQueryScopeDetails`<sup>Optional</sup> <a name="scheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.scheduledQueryScopeDetails"></a>

```java
public java.lang.Object getScheduledQueryScopeDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>>

scheduled_query_scope_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#scheduled_query_scope_details CloudGuardDataSource#scheduled_query_scope_details}

---

##### `threshold`<sup>Optional</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#threshold CloudGuardDataSource#threshold}.

---

### CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails <a name="CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails;

CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.builder()
    .loggingQueryType(java.lang.String)
//  .keyEntitiesCount(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.property.loggingQueryType">loggingQueryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.property.keyEntitiesCount">keyEntitiesCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#key_entities_count CloudGuardDataSource#key_entities_count}. |

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.property.loggingQueryType"></a>

```java
public java.lang.String getLoggingQueryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}.

---

##### `keyEntitiesCount`<sup>Optional</sup> <a name="keyEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails.property.keyEntitiesCount"></a>

```java
public java.lang.Number getKeyEntitiesCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#key_entities_count CloudGuardDataSource#key_entities_count}.

---

### CloudGuardDataSourceDataSourceDetailsQueryStartTime <a name="CloudGuardDataSourceDataSourceDetailsQueryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetailsQueryStartTime;

CloudGuardDataSourceDataSourceDetailsQueryStartTime.builder()
    .startPolicyType(java.lang.String)
//  .queryStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.property.startPolicyType">startPolicyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#start_policy_type CloudGuardDataSource#start_policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.property.queryStartTime">queryStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query_start_time CloudGuardDataSource#query_start_time}. |

---

##### `startPolicyType`<sup>Required</sup> <a name="startPolicyType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.property.startPolicyType"></a>

```java
public java.lang.String getStartPolicyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#start_policy_type CloudGuardDataSource#start_policy_type}.

---

##### `queryStartTime`<sup>Optional</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime.property.queryStartTime"></a>

```java
public java.lang.String getQueryStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#query_start_time CloudGuardDataSource#query_start_time}.

---

### CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails <a name="CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails;

CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.builder()
//  .region(java.lang.String)
//  .resourceIds(java.util.List<java.lang.String>)
//  .resourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#region CloudGuardDataSource#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#resource_ids CloudGuardDataSource#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#resource_type CloudGuardDataSource#resource_type}. |

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#region CloudGuardDataSource#region}.

---

##### `resourceIds`<sup>Optional</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#resource_ids CloudGuardDataSource#resource_ids}.

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#resource_type CloudGuardDataSource#resource_type}.

---

### CloudGuardDataSourceDataSourceDetectorMappingInfo <a name="CloudGuardDataSourceDataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetectorMappingInfo;

CloudGuardDataSourceDataSourceDetectorMappingInfo.builder()
    .build();
```


### CloudGuardDataSourceRegionStatusDetail <a name="CloudGuardDataSourceRegionStatusDetail" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceRegionStatusDetail;

CloudGuardDataSourceRegionStatusDetail.builder()
    .build();
```


### CloudGuardDataSourceTimeouts <a name="CloudGuardDataSourceTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceTimeouts;

CloudGuardDataSourceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#create CloudGuardDataSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#delete CloudGuardDataSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#update CloudGuardDataSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#create CloudGuardDataSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#delete CloudGuardDataSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_source#update CloudGuardDataSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference <a name="CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference;

new CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resetKeyEntitiesCount">resetKeyEntitiesCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyEntitiesCount` <a name="resetKeyEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.resetKeyEntitiesCount"></a>

```java
public void resetKeyEntitiesCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCountInput">keyEntitiesCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryTypeInput">loggingQueryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount">keyEntitiesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyEntitiesCountInput`<sup>Optional</sup> <a name="keyEntitiesCountInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCountInput"></a>

```java
public java.lang.Number getKeyEntitiesCountInput();
```

- *Type:* java.lang.Number

---

##### `loggingQueryTypeInput`<sup>Optional</sup> <a name="loggingQueryTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryTypeInput"></a>

```java
public java.lang.String getLoggingQueryTypeInput();
```

- *Type:* java.lang.String

---

##### `keyEntitiesCount`<sup>Required</sup> <a name="keyEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount"></a>

```java
public java.lang.Number getKeyEntitiesCount();
```

- *Type:* java.lang.Number

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType"></a>

```java
public java.lang.String getLoggingQueryType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a>

---


### CloudGuardDataSourceDataSourceDetailsOutputReference <a name="CloudGuardDataSourceDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetailsOutputReference;

new CloudGuardDataSourceDataSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putLoggingQueryDetails">putLoggingQueryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putQueryStartTime">putQueryStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putScheduledQueryScopeDetails">putScheduledQueryScopeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetAdditionalEntitiesCount">resetAdditionalEntitiesCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetIntervalInMinutes">resetIntervalInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetIntervalInSeconds">resetIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetLoggingQueryDetails">resetLoggingQueryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetLoggingQueryType">resetLoggingQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetQueryStartTime">resetQueryStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetRegions">resetRegions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetScheduledQueryScopeDetails">resetScheduledQueryScopeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetThreshold">resetThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLoggingQueryDetails` <a name="putLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putLoggingQueryDetails"></a>

```java
public void putLoggingQueryDetails(CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putLoggingQueryDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a>

---

##### `putQueryStartTime` <a name="putQueryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putQueryStartTime"></a>

```java
public void putQueryStartTime(CloudGuardDataSourceDataSourceDetailsQueryStartTime value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putQueryStartTime.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a>

---

##### `putScheduledQueryScopeDetails` <a name="putScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putScheduledQueryScopeDetails"></a>

```java
public void putScheduledQueryScopeDetails(IResolvable OR java.util.List<CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.putScheduledQueryScopeDetails.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>>

---

##### `resetAdditionalEntitiesCount` <a name="resetAdditionalEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetAdditionalEntitiesCount"></a>

```java
public void resetAdditionalEntitiesCount()
```

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetIntervalInMinutes` <a name="resetIntervalInMinutes" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetIntervalInMinutes"></a>

```java
public void resetIntervalInMinutes()
```

##### `resetIntervalInSeconds` <a name="resetIntervalInSeconds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetIntervalInSeconds"></a>

```java
public void resetIntervalInSeconds()
```

##### `resetLoggingQueryDetails` <a name="resetLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetLoggingQueryDetails"></a>

```java
public void resetLoggingQueryDetails()
```

##### `resetLoggingQueryType` <a name="resetLoggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetLoggingQueryType"></a>

```java
public void resetLoggingQueryType()
```

##### `resetOperator` <a name="resetOperator" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetQuery` <a name="resetQuery" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetQuery"></a>

```java
public void resetQuery()
```

##### `resetQueryStartTime` <a name="resetQueryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetQueryStartTime"></a>

```java
public void resetQueryStartTime()
```

##### `resetRegions` <a name="resetRegions" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetRegions"></a>

```java
public void resetRegions()
```

##### `resetScheduledQueryScopeDetails` <a name="resetScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetScheduledQueryScopeDetails"></a>

```java
public void resetScheduledQueryScopeDetails()
```

##### `resetThreshold` <a name="resetThreshold" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.resetThreshold"></a>

```java
public void resetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetails">loggingQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTime">queryStartTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference">CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails">scheduledQueryScopeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCountInput">additionalEntitiesCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProviderInput">dataSourceFeedProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutesInput">intervalInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSecondsInput">intervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetailsInput">loggingQueryDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryTypeInput">loggingQueryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTimeInput">queryStartTimeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetailsInput">scheduledQueryScopeDetailsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCount">additionalEntitiesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutes">intervalInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loggingQueryDetails`<sup>Required</sup> <a name="loggingQueryDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetails"></a>

```java
public CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference getLoggingQueryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference</a>

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTime"></a>

```java
public CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference getQueryStartTime();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference">CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference</a>

---

##### `scheduledQueryScopeDetails`<sup>Required</sup> <a name="scheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails"></a>

```java
public CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList getScheduledQueryScopeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList</a>

---

##### `additionalEntitiesCountInput`<sup>Optional</sup> <a name="additionalEntitiesCountInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCountInput"></a>

```java
public java.lang.Number getAdditionalEntitiesCountInput();
```

- *Type:* java.lang.Number

---

##### `dataSourceFeedProviderInput`<sup>Optional</sup> <a name="dataSourceFeedProviderInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProviderInput"></a>

```java
public java.lang.String getDataSourceFeedProviderInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `intervalInMinutesInput`<sup>Optional</sup> <a name="intervalInMinutesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutesInput"></a>

```java
public java.lang.Number getIntervalInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `intervalInSecondsInput`<sup>Optional</sup> <a name="intervalInSecondsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSecondsInput"></a>

```java
public java.lang.Number getIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `loggingQueryDetailsInput`<sup>Optional</sup> <a name="loggingQueryDetailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryDetailsInput"></a>

```java
public CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails getLoggingQueryDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails">CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails</a>

---

##### `loggingQueryTypeInput`<sup>Optional</sup> <a name="loggingQueryTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryTypeInput"></a>

```java
public java.lang.String getLoggingQueryTypeInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `queryStartTimeInput`<sup>Optional</sup> <a name="queryStartTimeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.queryStartTimeInput"></a>

```java
public CloudGuardDataSourceDataSourceDetailsQueryStartTime getQueryStartTimeInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a>

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduledQueryScopeDetailsInput`<sup>Optional</sup> <a name="scheduledQueryScopeDetailsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.scheduledQueryScopeDetailsInput"></a>

```java
public java.lang.Object getScheduledQueryScopeDetailsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>>

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.thresholdInput"></a>

```java
public java.lang.Number getThresholdInput();
```

- *Type:* java.lang.Number

---

##### `additionalEntitiesCount`<sup>Required</sup> <a name="additionalEntitiesCount" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.additionalEntitiesCount"></a>

```java
public java.lang.Number getAdditionalEntitiesCount();
```

- *Type:* java.lang.Number

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.dataSourceFeedProvider"></a>

```java
public java.lang.String getDataSourceFeedProvider();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInMinutes"></a>

```java
public java.lang.Number getIntervalInMinutes();
```

- *Type:* java.lang.Number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.loggingQueryType"></a>

```java
public java.lang.String getLoggingQueryType();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsOutputReference.property.internalValue"></a>

```java
public CloudGuardDataSourceDataSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetails">CloudGuardDataSourceDataSourceDetails</a>

---


### CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference <a name="CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference;

new CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resetQueryStartTime">resetQueryStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQueryStartTime` <a name="resetQueryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.resetQueryStartTime"></a>

```java
public void resetQueryStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTimeInput">queryStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyTypeInput">startPolicyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime">queryStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType">startPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryStartTimeInput`<sup>Optional</sup> <a name="queryStartTimeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTimeInput"></a>

```java
public java.lang.String getQueryStartTimeInput();
```

- *Type:* java.lang.String

---

##### `startPolicyTypeInput`<sup>Optional</sup> <a name="startPolicyTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyTypeInput"></a>

```java
public java.lang.String getStartPolicyTypeInput();
```

- *Type:* java.lang.String

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime"></a>

```java
public java.lang.String getQueryStartTime();
```

- *Type:* java.lang.String

---

##### `startPolicyType`<sup>Required</sup> <a name="startPolicyType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType"></a>

```java
public java.lang.String getStartPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference.property.internalValue"></a>

```java
public CloudGuardDataSourceDataSourceDetailsQueryStartTime getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsQueryStartTime">CloudGuardDataSourceDataSourceDetailsQueryStartTime</a>

---


### CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList <a name="CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList;

new CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.get"></a>

```java
public CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>>

---


### CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference <a name="CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference;

new CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetResourceIds">resetResourceIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetResourceType">resetResourceType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegion` <a name="resetRegion" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetResourceIds` <a name="resetResourceIds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetResourceIds"></a>

```java
public void resetResourceIds()
```

##### `resetResourceType` <a name="resetResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resetResourceType"></a>

```java
public void resetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIdsInput">resourceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `resourceIdsInput`<sup>Optional</sup> <a name="resourceIdsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIdsInput"></a>

```java
public java.util.List<java.lang.String> getResourceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceTypeInput"></a>

```java
public java.lang.String getResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails">CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails</a>

---


### CloudGuardDataSourceDataSourceDetectorMappingInfoList <a name="CloudGuardDataSourceDataSourceDetectorMappingInfoList" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetectorMappingInfoList;

new CloudGuardDataSourceDataSourceDetectorMappingInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.get"></a>

```java
public CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference <a name="CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference;

new CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId">detectorRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfo">CloudGuardDataSourceDataSourceDetectorMappingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId"></a>

```java
public java.lang.String getDetectorRecipeId();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference.property.internalValue"></a>

```java
public CloudGuardDataSourceDataSourceDetectorMappingInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceDataSourceDetectorMappingInfo">CloudGuardDataSourceDataSourceDetectorMappingInfo</a>

---


### CloudGuardDataSourceRegionStatusDetailList <a name="CloudGuardDataSourceRegionStatusDetailList" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceRegionStatusDetailList;

new CloudGuardDataSourceRegionStatusDetailList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.get"></a>

```java
public CloudGuardDataSourceRegionStatusDetailOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CloudGuardDataSourceRegionStatusDetailOutputReference <a name="CloudGuardDataSourceRegionStatusDetailOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceRegionStatusDetailOutputReference;

new CloudGuardDataSourceRegionStatusDetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetail">CloudGuardDataSourceRegionStatusDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetailOutputReference.property.internalValue"></a>

```java
public CloudGuardDataSourceRegionStatusDetail getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceRegionStatusDetail">CloudGuardDataSourceRegionStatusDetail</a>

---


### CloudGuardDataSourceTimeoutsOutputReference <a name="CloudGuardDataSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.cloud_guard_data_source.CloudGuardDataSourceTimeoutsOutputReference;

new CloudGuardDataSourceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataSource.CloudGuardDataSourceTimeouts">CloudGuardDataSourceTimeouts</a>

---



