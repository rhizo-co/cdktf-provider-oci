# `dataOciDatabaseVmClusterUpdateHistoryEntries` Submodule <a name="`dataOciDatabaseVmClusterUpdateHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntries <a name="DataOciDatabaseVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries oci_database_vm_cluster_update_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntries;

DataOciDatabaseVmClusterUpdateHistoryEntries.Builder.create(Construct scope, java.lang.String id)
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
    .vmClusterId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseVmClusterUpdateHistoryEntriesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .updateType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.updateType">updateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.vmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#filter DataOciDatabaseVmClusterUpdateHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}.

---

##### `updateType`<sup>Optional</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.updateType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetUpdateType">resetUpdateType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseVmClusterUpdateHistoryEntriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetState"></a>

```java
public void resetState()
```

##### `resetUpdateType` <a name="resetUpdateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetUpdateType"></a>

```java
public void resetUpdateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntries;

DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntries;

DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntries;

DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntries;

DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseVmClusterUpdateHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseVmClusterUpdateHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterUpdateHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterUpdateHistoryEntries">vmClusterUpdateHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateTypeInput">updateTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterIdInput">vmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateType">updateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filter"></a>

```java
public DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList</a>

---

##### `vmClusterUpdateHistoryEntries`<sup>Required</sup> <a name="vmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterUpdateHistoryEntries"></a>

```java
public DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList getVmClusterUpdateHistoryEntries();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `updateTypeInput`<sup>Optional</sup> <a name="updateTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateTypeInput"></a>

```java
public java.lang.String getUpdateTypeInput();
```

- *Type:* java.lang.String

---

##### `vmClusterIdInput`<sup>Optional</sup> <a name="vmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterIdInput"></a>

```java
public java.lang.String getVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateType"></a>

```java
public java.lang.String getUpdateType();
```

- *Type:* java.lang.String

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntriesConfig <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig;

DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.builder()
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
    .vmClusterId(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseVmClusterUpdateHistoryEntriesFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .updateType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.vmClusterId">vmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.updateType">updateType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vmClusterId`<sup>Required</sup> <a name="vmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.vmClusterId"></a>

```java
public java.lang.String getVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#filter DataOciDatabaseVmClusterUpdateHistoryEntries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}.

---

##### `updateType`<sup>Optional</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.updateType"></a>

```java
public java.lang.String getUpdateType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}.

---

### DataOciDatabaseVmClusterUpdateHistoryEntriesFilter <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter;

DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#name DataOciDatabaseVmClusterUpdateHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#values DataOciDatabaseVmClusterUpdateHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#regex DataOciDatabaseVmClusterUpdateHistoryEntries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#name DataOciDatabaseVmClusterUpdateHistoryEntries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#values DataOciDatabaseVmClusterUpdateHistoryEntries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#regex DataOciDatabaseVmClusterUpdateHistoryEntries#regex}.

---

### DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries;

DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList;

new DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.get"></a>

```java
public DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>>

---


### DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference;

new DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter">DataOciDatabaseVmClusterUpdateHistoryEntriesFilter</a>

---


### DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList;

new DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.get"></a>

```java
public DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_vm_cluster_update_history_entries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference;

new DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted">timeCompleted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateAction">updateAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateId">updateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateType">updateType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCompleted`<sup>Required</sup> <a name="timeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted"></a>

```java
public java.lang.String getTimeCompleted();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `updateAction`<sup>Required</sup> <a name="updateAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateAction"></a>

```java
public java.lang.String getUpdateAction();
```

- *Type:* java.lang.String

---

##### `updateId`<sup>Required</sup> <a name="updateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateId"></a>

```java
public java.lang.String getUpdateId();
```

- *Type:* java.lang.String

---

##### `updateType`<sup>Required</sup> <a name="updateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateType"></a>

```java
public java.lang.String getUpdateType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries</a>

---



