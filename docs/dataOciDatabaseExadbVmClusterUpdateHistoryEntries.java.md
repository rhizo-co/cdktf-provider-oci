# `dataOciDatabaseExadbVmClusterUpdateHistoryEntries` Submodule <a name="`dataOciDatabaseExadbVmClusterUpdateHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadbVmClusterUpdateHistoryEntries <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries oci_database_exadb_vm_cluster_update_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries;

DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Builder.create(Construct scope, java.lang.String id)
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
    .exadbVmClusterId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter>)
//  .id(java.lang.String)
//  .updateType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#exadb_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.updateType">updateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#update_type DataOciDatabaseExadbVmClusterUpdateHistoryEntries#update_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.exadbVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#exadb_vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#filter DataOciDatabaseExadbVmClusterUpdateHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `updateType`<sup>Optional</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.Initializer.parameter.updateType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#update_type DataOciDatabaseExadbVmClusterUpdateHistoryEntries#update_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetUpdateType">resetUpdateType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetId"></a>

```java
public void resetId()
```

##### `resetUpdateType` <a name="resetUpdateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.resetUpdateType"></a>

```java
public void resetUpdateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries;

DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries;

DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries;

DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries;

DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseExadbVmClusterUpdateHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseExadbVmClusterUpdateHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadbVmClusterUpdateHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterUpdateHistoryEntries">exadbVmClusterUpdateHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterIdInput">exadbVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.updateTypeInput">updateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.updateType">updateType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `exadbVmClusterUpdateHistoryEntries`<sup>Required</sup> <a name="exadbVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterUpdateHistoryEntries"></a>

```java
public DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList getExadbVmClusterUpdateHistoryEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.filter"></a>

```java
public DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList</a>

---

##### `exadbVmClusterIdInput`<sup>Optional</sup> <a name="exadbVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterIdInput"></a>

```java
public java.lang.String getExadbVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `updateTypeInput`<sup>Optional</sup> <a name="updateTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.updateTypeInput"></a>

```java
public java.lang.String getUpdateTypeInput();
```

- *Type:* java.lang.String

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.exadbVmClusterId"></a>

```java
public java.lang.String getExadbVmClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.updateType"></a>

```java
public java.lang.String getUpdateType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig;

DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.builder()
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
    .exadbVmClusterId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter>)
//  .id(java.lang.String)
//  .updateType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#exadb_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.updateType">updateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#update_type DataOciDatabaseExadbVmClusterUpdateHistoryEntries#update_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.exadbVmClusterId"></a>

```java
public java.lang.String getExadbVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#exadb_vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#filter DataOciDatabaseExadbVmClusterUpdateHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#id DataOciDatabaseExadbVmClusterUpdateHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `updateType`<sup>Optional</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesConfig.property.updateType"></a>

```java
public java.lang.String getUpdateType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#update_type DataOciDatabaseExadbVmClusterUpdateHistoryEntries#update_type}.

---

### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries;

DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries.builder()
    .build();
```


### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter;

DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#name DataOciDatabaseExadbVmClusterUpdateHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#values DataOciDatabaseExadbVmClusterUpdateHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#regex DataOciDatabaseExadbVmClusterUpdateHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#name DataOciDatabaseExadbVmClusterUpdateHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#values DataOciDatabaseExadbVmClusterUpdateHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entries#regex DataOciDatabaseExadbVmClusterUpdateHistoryEntries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList;

new DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.get"></a>

```java
public DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference;

new DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted">timeCompleted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateAction">updateAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateId">updateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateType">updateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCompleted`<sup>Required</sup> <a name="timeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted"></a>

```java
public java.lang.String getTimeCompleted();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `updateAction`<sup>Required</sup> <a name="updateAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateAction"></a>

```java
public java.lang.String getUpdateAction();
```

- *Type:* java.lang.String

---

##### `updateId`<sup>Required</sup> <a name="updateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateId"></a>

```java
public java.lang.String getUpdateId();
```

- *Type:* java.lang.String

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.updateType"></a>

```java
public java.lang.String getUpdateType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntriesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesExadbVmClusterUpdateHistoryEntries</a>

---


### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList;

new DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.get"></a>

```java
public DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>>

---


### DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference;

new DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntries.DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseExadbVmClusterUpdateHistoryEntriesFilter</a>

---



