# `dataOciCloudGuardDataSources` Submodule <a name="`dataOciCloudGuardDataSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDataSources <a name="DataOciCloudGuardDataSources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources oci_cloud_guard_data_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSources;

DataOciCloudGuardDataSources.Builder.create(Construct scope, java.lang.String id)
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
//  .dataSourceFeedProvider(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudGuardDataSourcesFilter>)
//  .id(java.lang.String)
//  .loggingQueryType(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id DataOciCloudGuardDataSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#access_level DataOciCloudGuardDataSources#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id_in_subtree DataOciCloudGuardDataSources#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#data_source_feed_provider DataOciCloudGuardDataSources#data_source_feed_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#display_name DataOciCloudGuardDataSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#id DataOciCloudGuardDataSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.loggingQueryType">loggingQueryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#logging_query_type DataOciCloudGuardDataSources#logging_query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#state DataOciCloudGuardDataSources#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id DataOciCloudGuardDataSources#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#access_level DataOciCloudGuardDataSources#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id_in_subtree DataOciCloudGuardDataSources#compartment_id_in_subtree}.

---

##### `dataSourceFeedProvider`<sup>Optional</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.dataSourceFeedProvider"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#data_source_feed_provider DataOciCloudGuardDataSources#data_source_feed_provider}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#display_name DataOciCloudGuardDataSources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#filter DataOciCloudGuardDataSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#id DataOciCloudGuardDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingQueryType`<sup>Optional</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.loggingQueryType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#logging_query_type DataOciCloudGuardDataSources#logging_query_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#state DataOciCloudGuardDataSources#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDataSourceFeedProvider">resetDataSourceFeedProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetLoggingQueryType">resetLoggingQueryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCloudGuardDataSourcesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetDataSourceFeedProvider` <a name="resetDataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDataSourceFeedProvider"></a>

```java
public void resetDataSourceFeedProvider()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetId"></a>

```java
public void resetId()
```

##### `resetLoggingQueryType` <a name="resetLoggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetLoggingQueryType"></a>

```java
public void resetLoggingQueryType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSources;

DataOciCloudGuardDataSources.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSources;

DataOciCloudGuardDataSources.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSources;

DataOciCloudGuardDataSources.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSources;

DataOciCloudGuardDataSources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCloudGuardDataSources.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCloudGuardDataSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCloudGuardDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCloudGuardDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceCollection">dataSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList">DataOciCloudGuardDataSourcesDataSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList">DataOciCloudGuardDataSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProviderInput">dataSourceFeedProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryTypeInput">loggingQueryTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryType">loggingQueryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dataSourceCollection`<sup>Required</sup> <a name="dataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceCollection"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionList getDataSourceCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList">DataOciCloudGuardDataSourcesDataSourceCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filter"></a>

```java
public DataOciCloudGuardDataSourcesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList">DataOciCloudGuardDataSourcesFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataSourceFeedProviderInput`<sup>Optional</sup> <a name="dataSourceFeedProviderInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProviderInput"></a>

```java
public java.lang.String getDataSourceFeedProviderInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loggingQueryTypeInput`<sup>Optional</sup> <a name="loggingQueryTypeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryTypeInput"></a>

```java
public java.lang.String getLoggingQueryTypeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.dataSourceFeedProvider"></a>

```java
public java.lang.String getDataSourceFeedProvider();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.loggingQueryType"></a>

```java
public java.lang.String getLoggingQueryType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSources.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDataSourcesConfig <a name="DataOciCloudGuardDataSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesConfig;

DataOciCloudGuardDataSourcesConfig.builder()
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
//  .dataSourceFeedProvider(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudGuardDataSourcesFilter>)
//  .id(java.lang.String)
//  .loggingQueryType(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id DataOciCloudGuardDataSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#access_level DataOciCloudGuardDataSources#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id_in_subtree DataOciCloudGuardDataSources#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#data_source_feed_provider DataOciCloudGuardDataSources#data_source_feed_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#display_name DataOciCloudGuardDataSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#id DataOciCloudGuardDataSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.loggingQueryType">loggingQueryType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#logging_query_type DataOciCloudGuardDataSources#logging_query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#state DataOciCloudGuardDataSources#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id DataOciCloudGuardDataSources#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#access_level DataOciCloudGuardDataSources#access_level}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#compartment_id_in_subtree DataOciCloudGuardDataSources#compartment_id_in_subtree}.

---

##### `dataSourceFeedProvider`<sup>Optional</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.dataSourceFeedProvider"></a>

```java
public java.lang.String getDataSourceFeedProvider();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#data_source_feed_provider DataOciCloudGuardDataSources#data_source_feed_provider}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#display_name DataOciCloudGuardDataSources#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#filter DataOciCloudGuardDataSources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#id DataOciCloudGuardDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loggingQueryType`<sup>Optional</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.loggingQueryType"></a>

```java
public java.lang.String getLoggingQueryType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#logging_query_type DataOciCloudGuardDataSources#logging_query_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#state DataOciCloudGuardDataSources#state}.

---

### DataOciCloudGuardDataSourcesDataSourceCollection <a name="DataOciCloudGuardDataSourcesDataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollection;

DataOciCloudGuardDataSourcesDataSourceCollection.builder()
    .build();
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItems <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItems;

DataOciCloudGuardDataSourcesDataSourceCollectionItems.builder()
    .build();
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails;

DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails.builder()
    .build();
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails;

DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails.builder()
    .build();
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime;

DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime.builder()
    .build();
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails;

DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails.builder()
    .build();
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo;

DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo.builder()
    .build();
```


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail;

DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail.builder()
    .build();
```


### DataOciCloudGuardDataSourcesFilter <a name="DataOciCloudGuardDataSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesFilter;

DataOciCloudGuardDataSourcesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#name DataOciCloudGuardDataSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#values DataOciCloudGuardDataSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#regex DataOciCloudGuardDataSources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#name DataOciCloudGuardDataSources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#values DataOciCloudGuardDataSources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_data_sources#regex DataOciCloudGuardDataSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.get"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.get"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount">keyEntitiesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyEntitiesCount`<sup>Required</sup> <a name="keyEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.keyEntitiesCount"></a>

```java
public java.lang.Number getKeyEntitiesCount();
```

- *Type:* java.lang.Number

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.loggingQueryType"></a>

```java
public java.lang.String getLoggingQueryType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetails</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.additionalEntitiesCount">additionalEntitiesCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInMinutes">intervalInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInSeconds">intervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryDetails">loggingQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryType">loggingQueryType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.queryStartTime">queryStartTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails">scheduledQueryScopeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.threshold">threshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalEntitiesCount`<sup>Required</sup> <a name="additionalEntitiesCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.additionalEntitiesCount"></a>

```java
public java.lang.Number getAdditionalEntitiesCount();
```

- *Type:* java.lang.Number

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.dataSourceFeedProvider"></a>

```java
public java.lang.String getDataSourceFeedProvider();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `intervalInMinutes`<sup>Required</sup> <a name="intervalInMinutes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInMinutes"></a>

```java
public java.lang.Number getIntervalInMinutes();
```

- *Type:* java.lang.Number

---

##### `intervalInSeconds`<sup>Required</sup> <a name="intervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.intervalInSeconds"></a>

```java
public java.lang.Number getIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `loggingQueryDetails`<sup>Required</sup> <a name="loggingQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryDetails"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList getLoggingQueryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsLoggingQueryDetailsList</a>

---

##### `loggingQueryType`<sup>Required</sup> <a name="loggingQueryType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.loggingQueryType"></a>

```java
public java.lang.String getLoggingQueryType();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.queryStartTime"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList getQueryStartTime();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList</a>

---

##### `regions`<sup>Required</sup> <a name="regions" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `scheduledQueryScopeDetails`<sup>Required</sup> <a name="scheduledQueryScopeDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.scheduledQueryScopeDetails"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList getScheduledQueryScopeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList</a>

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.threshold"></a>

```java
public java.lang.Number getThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetails</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.get"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime">queryStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType">startPolicyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryStartTime`<sup>Required</sup> <a name="queryStartTime" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.queryStartTime"></a>

```java
public java.lang.String getQueryStartTime();
```

- *Type:* java.lang.String

---

##### `startPolicyType`<sup>Required</sup> <a name="startPolicyType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.startPolicyType"></a>

```java
public java.lang.String getStartPolicyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTimeOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsQueryStartTime</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.get"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsScheduledQueryScopeDetails</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.get"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId">detectorRecipeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId">detectorRuleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `detectorRecipeId`<sup>Required</sup> <a name="detectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRecipeId"></a>

```java
public java.lang.String getDetectorRecipeId();
```

- *Type:* java.lang.String

---

##### `detectorRuleId`<sup>Required</sup> <a name="detectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.detectorRuleId"></a>

```java
public java.lang.String getDetectorRuleId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfo</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.get"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetails">dataSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetectorMappingInfo">dataSourceDetectorMappingInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceFeedProvider">dataSourceFeedProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.regionStatusDetail">regionStatusDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems">DataOciCloudGuardDataSourcesDataSourceCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dataSourceDetails`<sup>Required</sup> <a name="dataSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetails"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList getDataSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetailsList</a>

---

##### `dataSourceDetectorMappingInfo`<sup>Required</sup> <a name="dataSourceDetectorMappingInfo" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceDetectorMappingInfo"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList getDataSourceDetectorMappingInfo();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsDataSourceDetectorMappingInfoList</a>

---

##### `dataSourceFeedProvider`<sup>Required</sup> <a name="dataSourceFeedProvider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceFeedProvider"></a>

```java
public java.lang.String getDataSourceFeedProvider();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `regionStatusDetail`<sup>Required</sup> <a name="regionStatusDetail" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.regionStatusDetail"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList getRegionStatusDetail();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItems">DataOciCloudGuardDataSourcesDataSourceCollectionItems</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.get"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference;

new DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetailOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail">DataOciCloudGuardDataSourcesDataSourceCollectionItemsRegionStatusDetail</a>

---


### DataOciCloudGuardDataSourcesDataSourceCollectionList <a name="DataOciCloudGuardDataSourcesDataSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionList;

new DataOciCloudGuardDataSourcesDataSourceCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.get"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference <a name="DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference;

new DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection">DataOciCloudGuardDataSourcesDataSourceCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.items"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionItemsList">DataOciCloudGuardDataSourcesDataSourceCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardDataSourcesDataSourceCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesDataSourceCollection">DataOciCloudGuardDataSourcesDataSourceCollection</a>

---


### DataOciCloudGuardDataSourcesFilterList <a name="DataOciCloudGuardDataSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesFilterList;

new DataOciCloudGuardDataSourcesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.get"></a>

```java
public DataOciCloudGuardDataSourcesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>>

---


### DataOciCloudGuardDataSourcesFilterOutputReference <a name="DataOciCloudGuardDataSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_data_sources.DataOciCloudGuardDataSourcesFilterOutputReference;

new DataOciCloudGuardDataSourcesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDataSources.DataOciCloudGuardDataSourcesFilter">DataOciCloudGuardDataSourcesFilter</a>

---



