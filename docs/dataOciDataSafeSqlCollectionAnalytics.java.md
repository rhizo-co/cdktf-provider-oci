# `dataOciDataSafeSqlCollectionAnalytics` Submodule <a name="`dataOciDataSafeSqlCollectionAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlCollectionAnalytics <a name="DataOciDataSafeSqlCollectionAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics oci_data_safe_sql_collection_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalytics;

DataOciDataSafeSqlCollectionAnalytics.Builder.create(Construct scope, java.lang.String id)
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeSqlCollectionAnalyticsFilter>)
//  .groupBy(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .targetId(java.lang.String)
//  .timeEnded(java.lang.String)
//  .timeStarted(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id DataOciDataSafeSqlCollectionAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#access_level DataOciDataSafeSqlCollectionAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id_in_subtree DataOciDataSafeSqlCollectionAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#group_by DataOciDataSafeSqlCollectionAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#id DataOciDataSafeSqlCollectionAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#state DataOciDataSafeSqlCollectionAnalytics#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#target_id DataOciDataSafeSqlCollectionAnalytics#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_ended DataOciDataSafeSqlCollectionAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_started DataOciDataSafeSqlCollectionAnalytics#time_started}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id DataOciDataSafeSqlCollectionAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#access_level DataOciDataSafeSqlCollectionAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id_in_subtree DataOciDataSafeSqlCollectionAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#filter DataOciDataSafeSqlCollectionAnalytics#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.groupBy"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#group_by DataOciDataSafeSqlCollectionAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#id DataOciDataSafeSqlCollectionAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#state DataOciDataSafeSqlCollectionAnalytics#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.targetId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#target_id DataOciDataSafeSqlCollectionAnalytics#target_id}.

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.timeEnded"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_ended DataOciDataSafeSqlCollectionAnalytics#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.Initializer.parameter.timeStarted"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_started DataOciDataSafeSqlCollectionAnalytics#time_started}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetGroupBy">resetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTargetId">resetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTimeEnded">resetTimeEnded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTimeStarted">resetTimeStarted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDataSafeSqlCollectionAnalyticsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetGroupBy` <a name="resetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetGroupBy"></a>

```java
public void resetGroupBy()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetState"></a>

```java
public void resetState()
```

##### `resetTargetId` <a name="resetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTargetId"></a>

```java
public void resetTargetId()
```

##### `resetTimeEnded` <a name="resetTimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTimeEnded"></a>

```java
public void resetTimeEnded()
```

##### `resetTimeStarted` <a name="resetTimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.resetTimeStarted"></a>

```java
public void resetTimeStarted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlCollectionAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalytics;

DataOciDataSafeSqlCollectionAnalytics.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalytics;

DataOciDataSafeSqlCollectionAnalytics.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalytics;

DataOciDataSafeSqlCollectionAnalytics.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalytics;

DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDataSafeSqlCollectionAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDataSafeSqlCollectionAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDataSafeSqlCollectionAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlCollectionAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList">DataOciDataSafeSqlCollectionAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.sqlCollectionAnalyticsCollection">sqlCollectionAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.groupByInput">groupByInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.targetIdInput">targetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeEndedInput">timeEndedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeStartedInput">timeStartedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.filter"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList">DataOciDataSafeSqlCollectionAnalyticsFilterList</a>

---

##### `sqlCollectionAnalyticsCollection`<sup>Required</sup> <a name="sqlCollectionAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.sqlCollectionAnalyticsCollection"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList getSqlCollectionAnalyticsCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>>

---

##### `groupByInput`<sup>Optional</sup> <a name="groupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.groupByInput"></a>

```java
public java.util.List<java.lang.String> getGroupByInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.targetIdInput"></a>

```java
public java.lang.String getTargetIdInput();
```

- *Type:* java.lang.String

---

##### `timeEndedInput`<sup>Optional</sup> <a name="timeEndedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeEndedInput"></a>

```java
public java.lang.String getTimeEndedInput();
```

- *Type:* java.lang.String

---

##### `timeStartedInput`<sup>Optional</sup> <a name="timeStartedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeStartedInput"></a>

```java
public java.lang.String getTimeStartedInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `groupBy`<sup>Required</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalytics.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlCollectionAnalyticsConfig <a name="DataOciDataSafeSqlCollectionAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsConfig;

DataOciDataSafeSqlCollectionAnalyticsConfig.builder()
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
//  .accessLevel(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDataSafeSqlCollectionAnalyticsFilter>)
//  .groupBy(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .targetId(java.lang.String)
//  .timeEnded(java.lang.String)
//  .timeStarted(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id DataOciDataSafeSqlCollectionAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#access_level DataOciDataSafeSqlCollectionAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id_in_subtree DataOciDataSafeSqlCollectionAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.groupBy">groupBy</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#group_by DataOciDataSafeSqlCollectionAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#id DataOciDataSafeSqlCollectionAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#state DataOciDataSafeSqlCollectionAnalytics#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.targetId">targetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#target_id DataOciDataSafeSqlCollectionAnalytics#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_ended DataOciDataSafeSqlCollectionAnalytics#time_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_started DataOciDataSafeSqlCollectionAnalytics#time_started}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id DataOciDataSafeSqlCollectionAnalytics#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#access_level DataOciDataSafeSqlCollectionAnalytics#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#compartment_id_in_subtree DataOciDataSafeSqlCollectionAnalytics#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#filter DataOciDataSafeSqlCollectionAnalytics#filter}

---

##### `groupBy`<sup>Optional</sup> <a name="groupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.groupBy"></a>

```java
public java.util.List<java.lang.String> getGroupBy();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#group_by DataOciDataSafeSqlCollectionAnalytics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#id DataOciDataSafeSqlCollectionAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#state DataOciDataSafeSqlCollectionAnalytics#state}.

---

##### `targetId`<sup>Optional</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#target_id DataOciDataSafeSqlCollectionAnalytics#target_id}.

---

##### `timeEnded`<sup>Optional</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_ended DataOciDataSafeSqlCollectionAnalytics#time_ended}.

---

##### `timeStarted`<sup>Optional</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsConfig.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#time_started DataOciDataSafeSqlCollectionAnalytics#time_started}.

---

### DataOciDataSafeSqlCollectionAnalyticsFilter <a name="DataOciDataSafeSqlCollectionAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsFilter;

DataOciDataSafeSqlCollectionAnalyticsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#name DataOciDataSafeSqlCollectionAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#values DataOciDataSafeSqlCollectionAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#regex DataOciDataSafeSqlCollectionAnalytics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#name DataOciDataSafeSqlCollectionAnalytics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#values DataOciDataSafeSqlCollectionAnalytics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_collection_analytics#regex DataOciDataSafeSqlCollectionAnalytics#regex}.

---

### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection;

DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection.builder()
    .build();
```


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems;

DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems.builder()
    .build();
```


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions;

DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlCollectionAnalyticsFilterList <a name="DataOciDataSafeSqlCollectionAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsFilterList;

new DataOciDataSafeSqlCollectionAnalyticsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.get"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>>

---


### DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference;

new DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsFilter">DataOciDataSafeSqlCollectionAnalyticsFilter</a>

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList;

new DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.get"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference;

new DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.targetId">targetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.targetId"></a>

```java
public java.lang.String getTargetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList;

new DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.get"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference;

new DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.sqlCollectionAnalyticCount">sqlCollectionAnalyticCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList getDimensions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsDimensionsList</a>

---

##### `sqlCollectionAnalyticCount`<sup>Required</sup> <a name="sqlCollectionAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.sqlCollectionAnalyticCount"></a>

```java
public java.lang.String getSqlCollectionAnalyticCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList;

new DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.get"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_data_safe_sql_collection_analytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference;

new DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.items"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollectionOutputReference.property.internalValue"></a>

```java
public DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlCollectionAnalytics.DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection">DataOciDataSafeSqlCollectionAnalyticsSqlCollectionAnalyticsCollection</a>

---



