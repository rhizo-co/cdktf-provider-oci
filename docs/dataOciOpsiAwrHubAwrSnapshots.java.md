# `dataOciOpsiAwrHubAwrSnapshots` Submodule <a name="`dataOciOpsiAwrHubAwrSnapshots` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiAwrHubAwrSnapshots <a name="DataOciOpsiAwrHubAwrSnapshots" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots oci_opsi_awr_hub_awr_snapshots}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshots;

DataOciOpsiAwrHubAwrSnapshots.Builder.create(Construct scope, java.lang.String id)
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
    .awrHubId(java.lang.String)
    .awrSourceDatabaseIdentifier(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOpsiAwrHubAwrSnapshotsFilter>)
//  .id(java.lang.String)
//  .timeGreaterThanOrEqualTo(java.lang.String)
//  .timeLessThanOrEqualTo(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.awrHubId">awrHubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.awrSourceDatabaseIdentifier">awrSourceDatabaseIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.awrHubId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}.

---

##### `awrSourceDatabaseIdentifier`<sup>Required</sup> <a name="awrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.awrSourceDatabaseIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#filter DataOciOpsiAwrHubAwrSnapshots#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.timeGreaterThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.Initializer.parameter.timeLessThanOrEqualTo"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeGreaterThanOrEqualTo">resetTimeGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeLessThanOrEqualTo">resetTimeLessThanOrEqualTo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciOpsiAwrHubAwrSnapshotsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetId"></a>

```java
public void resetId()
```

##### `resetTimeGreaterThanOrEqualTo` <a name="resetTimeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeGreaterThanOrEqualTo"></a>

```java
public void resetTimeGreaterThanOrEqualTo()
```

##### `resetTimeLessThanOrEqualTo` <a name="resetTimeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.resetTimeLessThanOrEqualTo"></a>

```java
public void resetTimeLessThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshots resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshots;

DataOciOpsiAwrHubAwrSnapshots.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshots;

DataOciOpsiAwrHubAwrSnapshots.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshots;

DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshots;

DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciOpsiAwrHubAwrSnapshots resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciOpsiAwrHubAwrSnapshots to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciOpsiAwrHubAwrSnapshots that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiAwrHubAwrSnapshots to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSnapshotCollection">awrSnapshotCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList">DataOciOpsiAwrHubAwrSnapshotsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubIdInput">awrHubIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifierInput">awrSourceDatabaseIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualToInput">timeGreaterThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualToInput">timeLessThanOrEqualToInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubId">awrHubId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifier">awrSourceDatabaseIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `awrSnapshotCollection`<sup>Required</sup> <a name="awrSnapshotCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSnapshotCollection"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList getAwrSnapshotCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filter"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList">DataOciOpsiAwrHubAwrSnapshotsFilterList</a>

---

##### `awrHubIdInput`<sup>Optional</sup> <a name="awrHubIdInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubIdInput"></a>

```java
public java.lang.String getAwrHubIdInput();
```

- *Type:* java.lang.String

---

##### `awrSourceDatabaseIdentifierInput`<sup>Optional</sup> <a name="awrSourceDatabaseIdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifierInput"></a>

```java
public java.lang.String getAwrSourceDatabaseIdentifierInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="timeGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualToInput"></a>

```java
public java.lang.String getTimeGreaterThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `timeLessThanOrEqualToInput`<sup>Optional</sup> <a name="timeLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualToInput"></a>

```java
public java.lang.String getTimeLessThanOrEqualToInput();
```

- *Type:* java.lang.String

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrHubId"></a>

```java
public java.lang.String getAwrHubId();
```

- *Type:* java.lang.String

---

##### `awrSourceDatabaseIdentifier`<sup>Required</sup> <a name="awrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.awrSourceDatabaseIdentifier"></a>

```java
public java.lang.String getAwrSourceDatabaseIdentifier();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `timeGreaterThanOrEqualTo`<sup>Required</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

---

##### `timeLessThanOrEqualTo`<sup>Required</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.timeLessThanOrEqualTo"></a>

```java
public java.lang.String getTimeLessThanOrEqualTo();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshots.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection;

DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection.builder()
    .build();
```


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems;

DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems.builder()
    .build();
```


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems;

DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems.builder()
    .build();
```


### DataOciOpsiAwrHubAwrSnapshotsConfig <a name="DataOciOpsiAwrHubAwrSnapshotsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsConfig;

DataOciOpsiAwrHubAwrSnapshotsConfig.builder()
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
    .awrHubId(java.lang.String)
    .awrSourceDatabaseIdentifier(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciOpsiAwrHubAwrSnapshotsFilter>)
//  .id(java.lang.String)
//  .timeGreaterThanOrEqualTo(java.lang.String)
//  .timeLessThanOrEqualTo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrHubId">awrHubId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrSourceDatabaseIdentifier">awrSourceDatabaseIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeGreaterThanOrEqualTo">timeGreaterThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeLessThanOrEqualTo">timeLessThanOrEqualTo</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `awrHubId`<sup>Required</sup> <a name="awrHubId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrHubId"></a>

```java
public java.lang.String getAwrHubId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_hub_id DataOciOpsiAwrHubAwrSnapshots#awr_hub_id}.

---

##### `awrSourceDatabaseIdentifier`<sup>Required</sup> <a name="awrSourceDatabaseIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.awrSourceDatabaseIdentifier"></a>

```java
public java.lang.String getAwrSourceDatabaseIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#awr_source_database_identifier DataOciOpsiAwrHubAwrSnapshots#awr_source_database_identifier}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#filter DataOciOpsiAwrHubAwrSnapshots#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#id DataOciOpsiAwrHubAwrSnapshots#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeGreaterThanOrEqualTo`<sup>Optional</sup> <a name="timeGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeGreaterThanOrEqualTo"></a>

```java
public java.lang.String getTimeGreaterThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_greater_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_greater_than_or_equal_to}.

---

##### `timeLessThanOrEqualTo`<sup>Optional</sup> <a name="timeLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsConfig.property.timeLessThanOrEqualTo"></a>

```java
public java.lang.String getTimeLessThanOrEqualTo();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#time_less_than_or_equal_to DataOciOpsiAwrHubAwrSnapshots#time_less_than_or_equal_to}.

---

### DataOciOpsiAwrHubAwrSnapshotsFilter <a name="DataOciOpsiAwrHubAwrSnapshotsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsFilter;

DataOciOpsiAwrHubAwrSnapshotsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#name DataOciOpsiAwrHubAwrSnapshots#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#values DataOciOpsiAwrHubAwrSnapshots#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#regex DataOciOpsiAwrHubAwrSnapshots#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#name DataOciOpsiAwrHubAwrSnapshots#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#values DataOciOpsiAwrHubAwrSnapshots#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_awr_hub_awr_snapshots#regex DataOciOpsiAwrHubAwrSnapshots#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.awrSourceDatabaseId">awrSourceDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.errorCount">errorCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.instanceNumber">instanceNumber</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.snapshotIdentifier">snapshotIdentifier</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeDbStartup">timeDbStartup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotBegin">timeSnapshotBegin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotEnd">timeSnapshotEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awrSourceDatabaseId`<sup>Required</sup> <a name="awrSourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.awrSourceDatabaseId"></a>

```java
public java.lang.String getAwrSourceDatabaseId();
```

- *Type:* java.lang.String

---

##### `errorCount`<sup>Required</sup> <a name="errorCount" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.errorCount"></a>

```java
public java.lang.String getErrorCount();
```

- *Type:* java.lang.String

---

##### `instanceNumber`<sup>Required</sup> <a name="instanceNumber" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.instanceNumber"></a>

```java
public java.lang.Number getInstanceNumber();
```

- *Type:* java.lang.Number

---

##### `snapshotIdentifier`<sup>Required</sup> <a name="snapshotIdentifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.snapshotIdentifier"></a>

```java
public java.lang.Number getSnapshotIdentifier();
```

- *Type:* java.lang.Number

---

##### `timeDbStartup`<sup>Required</sup> <a name="timeDbStartup" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeDbStartup"></a>

```java
public java.lang.String getTimeDbStartup();
```

- *Type:* java.lang.String

---

##### `timeSnapshotBegin`<sup>Required</sup> <a name="timeSnapshotBegin" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotBegin"></a>

```java
public java.lang.String getTimeSnapshotBegin();
```

- *Type:* java.lang.String

---

##### `timeSnapshotEnd`<sup>Required</sup> <a name="timeSnapshotEnd" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.timeSnapshotEnd"></a>

```java
public java.lang.String getTimeSnapshotEnd();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsOutputReference.property.internalValue"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItems</a>

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.items"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItems</a>

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference;

new DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.items"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollectionOutputReference.property.internalValue"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection">DataOciOpsiAwrHubAwrSnapshotsAwrSnapshotCollection</a>

---


### DataOciOpsiAwrHubAwrSnapshotsFilterList <a name="DataOciOpsiAwrHubAwrSnapshotsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList;

new DataOciOpsiAwrHubAwrSnapshotsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get"></a>

```java
public DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>>

---


### DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference <a name="DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_opsi_awr_hub_awr_snapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference;

new DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiAwrHubAwrSnapshots.DataOciOpsiAwrHubAwrSnapshotsFilter">DataOciOpsiAwrHubAwrSnapshotsFilter</a>

---



