# `dataOciCloudGuardAdhocQueries` Submodule <a name="`dataOciCloudGuardAdhocQueries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardAdhocQueries <a name="DataOciCloudGuardAdhocQueries" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries oci_cloud_guard_adhoc_queries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueries;

DataOciCloudGuardAdhocQueries.Builder.create(Construct scope, java.lang.String id)
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
//  .adhocQueryStatus(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudGuardAdhocQueriesFilter>)
//  .id(java.lang.String)
//  .timeEndedFilterQueryParam(java.lang.String)
//  .timeStartedFilterQueryParam(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.adhocQueryStatus">adhocQueryStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.timeEndedFilterQueryParam">timeEndedFilterQueryParam</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.timeStartedFilterQueryParam">timeStartedFilterQueryParam</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.accessLevel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}.

---

##### `adhocQueryStatus`<sup>Optional</sup> <a name="adhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.adhocQueryStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#filter DataOciCloudGuardAdhocQueries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeEndedFilterQueryParam`<sup>Optional</sup> <a name="timeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.timeEndedFilterQueryParam"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}.

---

##### `timeStartedFilterQueryParam`<sup>Optional</sup> <a name="timeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.timeStartedFilterQueryParam"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAccessLevel">resetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAdhocQueryStatus">resetAdhocQueryStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetCompartmentIdInSubtree">resetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeEndedFilterQueryParam">resetTimeEndedFilterQueryParam</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeStartedFilterQueryParam">resetTimeStartedFilterQueryParam</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCloudGuardAdhocQueriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>>

---

##### `resetAccessLevel` <a name="resetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAccessLevel"></a>

```java
public void resetAccessLevel()
```

##### `resetAdhocQueryStatus` <a name="resetAdhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAdhocQueryStatus"></a>

```java
public void resetAdhocQueryStatus()
```

##### `resetCompartmentIdInSubtree` <a name="resetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetCompartmentIdInSubtree"></a>

```java
public void resetCompartmentIdInSubtree()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetId"></a>

```java
public void resetId()
```

##### `resetTimeEndedFilterQueryParam` <a name="resetTimeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeEndedFilterQueryParam"></a>

```java
public void resetTimeEndedFilterQueryParam()
```

##### `resetTimeStartedFilterQueryParam` <a name="resetTimeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeStartedFilterQueryParam"></a>

```java
public void resetTimeStartedFilterQueryParam()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardAdhocQueries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueries;

DataOciCloudGuardAdhocQueries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueries;

DataOciCloudGuardAdhocQueries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueries;

DataOciCloudGuardAdhocQueries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueries;

DataOciCloudGuardAdhocQueries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCloudGuardAdhocQueries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCloudGuardAdhocQueries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCloudGuardAdhocQueries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCloudGuardAdhocQueries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardAdhocQueries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryCollection">adhocQueryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList">DataOciCloudGuardAdhocQueriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevelInput">accessLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatusInput">adhocQueryStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtreeInput">compartmentIdInSubtreeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParamInput">timeEndedFilterQueryParamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParamInput">timeStartedFilterQueryParamInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatus">adhocQueryStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParam">timeEndedFilterQueryParam</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParam">timeStartedFilterQueryParam</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `adhocQueryCollection`<sup>Required</sup> <a name="adhocQueryCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryCollection"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList getAdhocQueryCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filter"></a>

```java
public DataOciCloudGuardAdhocQueriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList">DataOciCloudGuardAdhocQueriesFilterList</a>

---

##### `accessLevelInput`<sup>Optional</sup> <a name="accessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevelInput"></a>

```java
public java.lang.String getAccessLevelInput();
```

- *Type:* java.lang.String

---

##### `adhocQueryStatusInput`<sup>Optional</sup> <a name="adhocQueryStatusInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatusInput"></a>

```java
public java.lang.String getAdhocQueryStatusInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtreeInput`<sup>Optional</sup> <a name="compartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtreeInput"></a>

```java
public java.lang.Object getCompartmentIdInSubtreeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeEndedFilterQueryParamInput`<sup>Optional</sup> <a name="timeEndedFilterQueryParamInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParamInput"></a>

```java
public java.lang.String getTimeEndedFilterQueryParamInput();
```

- *Type:* java.lang.String

---

##### `timeStartedFilterQueryParamInput`<sup>Optional</sup> <a name="timeStartedFilterQueryParamInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParamInput"></a>

```java
public java.lang.String getTimeStartedFilterQueryParamInput();
```

- *Type:* java.lang.String

---

##### `accessLevel`<sup>Required</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

---

##### `adhocQueryStatus`<sup>Required</sup> <a name="adhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatus"></a>

```java
public java.lang.String getAdhocQueryStatus();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `compartmentIdInSubtree`<sup>Required</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `timeEndedFilterQueryParam`<sup>Required</sup> <a name="timeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParam"></a>

```java
public java.lang.String getTimeEndedFilterQueryParam();
```

- *Type:* java.lang.String

---

##### `timeStartedFilterQueryParam`<sup>Required</sup> <a name="timeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParam"></a>

```java
public java.lang.String getTimeStartedFilterQueryParam();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardAdhocQueriesAdhocQueryCollection <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection;

DataOciCloudGuardAdhocQueriesAdhocQueryCollection.builder()
    .build();
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems;

DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems.builder()
    .build();
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails;

DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails.builder()
    .build();
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources;

DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources.builder()
    .build();
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails;

DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails.builder()
    .build();
```


### DataOciCloudGuardAdhocQueriesConfig <a name="DataOciCloudGuardAdhocQueriesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesConfig;

DataOciCloudGuardAdhocQueriesConfig.builder()
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
//  .adhocQueryStatus(java.lang.String)
//  .compartmentIdInSubtree(java.lang.Boolean)
//  .compartmentIdInSubtree(IResolvable)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCloudGuardAdhocQueriesFilter>)
//  .id(java.lang.String)
//  .timeEndedFilterQueryParam(java.lang.String)
//  .timeStartedFilterQueryParam(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.accessLevel">accessLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.adhocQueryStatus">adhocQueryStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentIdInSubtree">compartmentIdInSubtree</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeEndedFilterQueryParam">timeEndedFilterQueryParam</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeStartedFilterQueryParam">timeStartedFilterQueryParam</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}.

---

##### `accessLevel`<sup>Optional</sup> <a name="accessLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.accessLevel"></a>

```java
public java.lang.String getAccessLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}.

---

##### `adhocQueryStatus`<sup>Optional</sup> <a name="adhocQueryStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.adhocQueryStatus"></a>

```java
public java.lang.String getAdhocQueryStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}.

---

##### `compartmentIdInSubtree`<sup>Optional</sup> <a name="compartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentIdInSubtree"></a>

```java
public java.lang.Object getCompartmentIdInSubtree();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#filter DataOciCloudGuardAdhocQueries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeEndedFilterQueryParam`<sup>Optional</sup> <a name="timeEndedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeEndedFilterQueryParam"></a>

```java
public java.lang.String getTimeEndedFilterQueryParam();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}.

---

##### `timeStartedFilterQueryParam`<sup>Optional</sup> <a name="timeStartedFilterQueryParam" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeStartedFilterQueryParam"></a>

```java
public java.lang.String getTimeStartedFilterQueryParam();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}.

---

### DataOciCloudGuardAdhocQueriesFilter <a name="DataOciCloudGuardAdhocQueriesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesFilter;

DataOciCloudGuardAdhocQueriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#name DataOciCloudGuardAdhocQueries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#values DataOciCloudGuardAdhocQueries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#regex DataOciCloudGuardAdhocQueries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#name DataOciCloudGuardAdhocQueries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#values DataOciCloudGuardAdhocQueries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#regex DataOciCloudGuardAdhocQueries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds">resourceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType">resourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `resourceIds`<sup>Required</sup> <a name="resourceIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds"></a>

```java
public java.util.List<java.lang.String> getResourceIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType"></a>

```java
public java.lang.String getResourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.adhocQueryResources">adhocQueryResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adhocQueryResources`<sup>Required</sup> <a name="adhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.adhocQueryResources"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList getAdhocQueryResources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expectedCount">expectedCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expiredCount">expiredCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.failedCount">failedCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalError">regionalError</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalStatus">regionalStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.succeededCount">succeededCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `expectedCount`<sup>Required</sup> <a name="expectedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expectedCount"></a>

```java
public java.lang.String getExpectedCount();
```

- *Type:* java.lang.String

---

##### `expiredCount`<sup>Required</sup> <a name="expiredCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expiredCount"></a>

```java
public java.lang.String getExpiredCount();
```

- *Type:* java.lang.String

---

##### `failedCount`<sup>Required</sup> <a name="failedCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.failedCount"></a>

```java
public java.lang.String getFailedCount();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `regionalError`<sup>Required</sup> <a name="regionalError" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalError"></a>

```java
public java.lang.String getRegionalError();
```

- *Type:* java.lang.String

---

##### `regionalStatus`<sup>Required</sup> <a name="regionalStatus" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalStatus"></a>

```java
public java.lang.String getRegionalStatus();
```

- *Type:* java.lang.String

---

##### `succeededCount`<sup>Required</sup> <a name="succeededCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.succeededCount"></a>

```java
public java.lang.String getSucceededCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryDetails">adhocQueryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryRegionalDetails">adhocQueryRegionalDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.errorMessage">errorMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adhocQueryDetails`<sup>Required</sup> <a name="adhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryDetails"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList getAdhocQueryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList</a>

---

##### `adhocQueryRegionalDetails`<sup>Required</sup> <a name="adhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryRegionalDetails"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList getAdhocQueryRegionalDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `errorMessage`<sup>Required</sup> <a name="errorMessage" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.errorMessage"></a>

```java
public java.lang.String getErrorMessage();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference;

new DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection">DataOciCloudGuardAdhocQueriesAdhocQueryCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.items"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.internalValue"></a>

```java
public DataOciCloudGuardAdhocQueriesAdhocQueryCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection">DataOciCloudGuardAdhocQueriesAdhocQueryCollection</a>

---


### DataOciCloudGuardAdhocQueriesFilterList <a name="DataOciCloudGuardAdhocQueriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesFilterList;

new DataOciCloudGuardAdhocQueriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get"></a>

```java
public DataOciCloudGuardAdhocQueriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>>

---


### DataOciCloudGuardAdhocQueriesFilterOutputReference <a name="DataOciCloudGuardAdhocQueriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_cloud_guard_adhoc_queries.DataOciCloudGuardAdhocQueriesFilterOutputReference;

new DataOciCloudGuardAdhocQueriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>

---



