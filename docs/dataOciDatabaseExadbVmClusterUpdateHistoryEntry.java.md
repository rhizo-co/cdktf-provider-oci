# `dataOciDatabaseExadbVmClusterUpdateHistoryEntry` Submodule <a name="`dataOciDatabaseExadbVmClusterUpdateHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseExadbVmClusterUpdateHistoryEntry <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry oci_database_exadb_vm_cluster_update_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry;

DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Builder.create(Construct scope, java.lang.String id)
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
    .updateHistoryEntryId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#exadb_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.updateHistoryEntryId">updateHistoryEntryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#update_history_entry_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#update_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.exadbVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#exadb_vm_cluster_id}.

---

##### `updateHistoryEntryId`<sup>Required</sup> <a name="updateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.updateHistoryEntryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#update_history_entry_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#update_history_entry_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdateHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry;

DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry;

DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry;

DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry;

DataOciDatabaseExadbVmClusterUpdateHistoryEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseExadbVmClusterUpdateHistoryEntry.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseExadbVmClusterUpdateHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseExadbVmClusterUpdateHistoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseExadbVmClusterUpdateHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseExadbVmClusterUpdateHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.timeCompleted">timeCompleted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateAction">updateAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateId">updateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateType">updateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.exadbVmClusterIdInput">exadbVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateHistoryEntryIdInput">updateHistoryEntryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateHistoryEntryId">updateHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCompleted`<sup>Required</sup> <a name="timeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.timeCompleted"></a>

```java
public java.lang.String getTimeCompleted();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `updateAction`<sup>Required</sup> <a name="updateAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateAction"></a>

```java
public java.lang.String getUpdateAction();
```

- *Type:* java.lang.String

---

##### `updateId`<sup>Required</sup> <a name="updateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateId"></a>

```java
public java.lang.String getUpdateId();
```

- *Type:* java.lang.String

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateType"></a>

```java
public java.lang.String getUpdateType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `exadbVmClusterIdInput`<sup>Optional</sup> <a name="exadbVmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.exadbVmClusterIdInput"></a>

```java
public java.lang.String getExadbVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `updateHistoryEntryIdInput`<sup>Optional</sup> <a name="updateHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateHistoryEntryIdInput"></a>

```java
public java.lang.String getUpdateHistoryEntryIdInput();
```

- *Type:* java.lang.String

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.exadbVmClusterId"></a>

```java
public java.lang.String getExadbVmClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updateHistoryEntryId`<sup>Required</sup> <a name="updateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.updateHistoryEntryId"></a>

```java
public java.lang.String getUpdateHistoryEntryId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntry.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig <a name="DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_exadb_vm_cluster_update_history_entry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig;

DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.builder()
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
    .updateHistoryEntryId(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#exadb_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.updateHistoryEntryId">updateHistoryEntryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#update_history_entry_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#update_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.exadbVmClusterId"></a>

```java
public java.lang.String getExadbVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#exadb_vm_cluster_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#exadb_vm_cluster_id}.

---

##### `updateHistoryEntryId`<sup>Required</sup> <a name="updateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.updateHistoryEntryId"></a>

```java
public java.lang.String getUpdateHistoryEntryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#update_history_entry_id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#update_history_entry_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseExadbVmClusterUpdateHistoryEntry.DataOciDatabaseExadbVmClusterUpdateHistoryEntryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_exadb_vm_cluster_update_history_entry#id DataOciDatabaseExadbVmClusterUpdateHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



