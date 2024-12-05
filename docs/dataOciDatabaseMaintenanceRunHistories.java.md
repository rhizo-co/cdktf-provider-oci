# `dataOciDatabaseMaintenanceRunHistories` Submodule <a name="`dataOciDatabaseMaintenanceRunHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRunHistories <a name="DataOciDatabaseMaintenanceRunHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories oci_database_maintenance_run_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistories;

DataOciDatabaseMaintenanceRunHistories.Builder.create(Construct scope, java.lang.String id)
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
//  .availabilityDomain(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseMaintenanceRunHistoriesFilter>)
//  .id(java.lang.String)
//  .maintenanceType(java.lang.String)
//  .state(java.lang.String)
//  .targetResourceId(java.lang.String)
//  .targetResourceType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#filter DataOciDatabaseMaintenanceRunHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceType`<sup>Optional</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.maintenanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}.

---

##### `targetResourceId`<sup>Optional</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.targetResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}.

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.targetResourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetMaintenanceType">resetMaintenanceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceId">resetTargetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseMaintenanceRunHistoriesFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceType` <a name="resetMaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetMaintenanceType"></a>

```java
public void resetMaintenanceType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetState"></a>

```java
public void resetState()
```

##### `resetTargetResourceId` <a name="resetTargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceId"></a>

```java
public void resetTargetResourceId()
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceType"></a>

```java
public void resetTargetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistories resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistories;

DataOciDatabaseMaintenanceRunHistories.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistories;

DataOciDatabaseMaintenanceRunHistories.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistories;

DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistories;

DataOciDatabaseMaintenanceRunHistories.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseMaintenanceRunHistories.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseMaintenanceRunHistories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseMaintenanceRunHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRunHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList">DataOciDatabaseMaintenanceRunHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceRunHistories">maintenanceRunHistories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceTypeInput">maintenanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filter"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList">DataOciDatabaseMaintenanceRunHistoriesFilterList</a>

---

##### `maintenanceRunHistories`<sup>Required</sup> <a name="maintenanceRunHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceRunHistories"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList getMaintenanceRunHistories();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceTypeInput`<sup>Optional</sup> <a name="maintenanceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceTypeInput"></a>

```java
public java.lang.String getMaintenanceTypeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceIdInput"></a>

```java
public java.lang.String getTargetResourceIdInput();
```

- *Type:* java.lang.String

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceTypeInput"></a>

```java
public java.lang.String getTargetResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceType"></a>

```java
public java.lang.String getMaintenanceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunHistoriesConfig <a name="DataOciDatabaseMaintenanceRunHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesConfig;

DataOciDatabaseMaintenanceRunHistoriesConfig.builder()
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
//  .availabilityDomain(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseMaintenanceRunHistoriesFilter>)
//  .id(java.lang.String)
//  .maintenanceType(java.lang.String)
//  .state(java.lang.String)
//  .targetResourceId(java.lang.String)
//  .targetResourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#filter DataOciDatabaseMaintenanceRunHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceType`<sup>Optional</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.maintenanceType"></a>

```java
public java.lang.String getMaintenanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}.

---

##### `targetResourceId`<sup>Optional</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}.

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}.

---

### DataOciDatabaseMaintenanceRunHistoriesFilter <a name="DataOciDatabaseMaintenanceRunHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesFilter;

DataOciDatabaseMaintenanceRunHistoriesFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#name DataOciDatabaseMaintenanceRunHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#values DataOciDatabaseMaintenanceRunHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#regex DataOciDatabaseMaintenanceRunHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#name DataOciDatabaseMaintenanceRunHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#values DataOciDatabaseMaintenanceRunHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#regex DataOciDatabaseMaintenanceRunHistories#regex}.

---

### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories;

DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories.builder()
    .build();
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails;

DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails.builder()
    .build();
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails;

DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails.builder()
    .build();
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails;

DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails.builder()
    .build();
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime;

DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunHistoriesFilterList <a name="DataOciDatabaseMaintenanceRunHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesFilterList;

new DataOciDatabaseMaintenanceRunHistoriesFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.get"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>>

---


### DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference;

new DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.get"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">estimatedPatchDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus">patchingStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded">timePatchingEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted">timePatchingStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedPatchDuration`<sup>Required</sup> <a name="estimatedPatchDuration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```java
public java.lang.Number getEstimatedPatchDuration();
```

- *Type:* java.lang.Number

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```java
public java.lang.String getPatchingStatus();
```

- *Type:* java.lang.String

---

##### `timePatchingEnded`<sup>Required</sup> <a name="timePatchingEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```java
public java.lang.String getTimePatchingEnded();
```

- *Type:* java.lang.String

---

##### `timePatchingStarted`<sup>Required</sup> <a name="timePatchingStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```java
public java.lang.String getTimePatchingStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.get"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails">dbServerPatchingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbServerPatchingDetails`<sup>Required</sup> <a name="dbServerPatchingDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList getDbServerPatchingDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.get"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.get"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimatedDbServerPatchingTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimatedNetworkSwitchesPatchingTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimatedStorageServerPatchingTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">totalEstimatedPatchingTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedDbServerPatchingTime`<sup>Required</sup> <a name="estimatedDbServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```java
public java.lang.Number getEstimatedDbServerPatchingTime();
```

- *Type:* java.lang.Number

---

##### `estimatedNetworkSwitchesPatchingTime`<sup>Required</sup> <a name="estimatedNetworkSwitchesPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```java
public java.lang.Number getEstimatedNetworkSwitchesPatchingTime();
```

- *Type:* java.lang.Number

---

##### `estimatedStorageServerPatchingTime`<sup>Required</sup> <a name="estimatedStorageServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```java
public java.lang.Number getEstimatedStorageServerPatchingTime();
```

- *Type:* java.lang.Number

---

##### `totalEstimatedPatchingTime`<sup>Required</sup> <a name="totalEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```java
public java.lang.Number getTotalEstimatedPatchingTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.get"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins">currentCustomActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentPatchingComponent">currentPatchingComponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime">estimatedComponentPatchingStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime">estimatedPatchingTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceSubtype">maintenanceSubtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchFailureCount">patchFailureCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchId">patchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingEndTime">patchingEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStartTime">patchingStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStatus">patchingStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId">peerMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetDbServerVersion">targetDbServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion">targetStorageServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeScheduled">timeScheduled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `currentCustomActionTimeoutInMins`<sup>Required</sup> <a name="currentCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins"></a>

```java
public java.lang.Number getCurrentCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `currentPatchingComponent`<sup>Required</sup> <a name="currentPatchingComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentPatchingComponent"></a>

```java
public java.lang.String getCurrentPatchingComponent();
```

- *Type:* java.lang.String

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `estimatedComponentPatchingStartTime`<sup>Required</sup> <a name="estimatedComponentPatchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime"></a>

```java
public java.lang.String getEstimatedComponentPatchingStartTime();
```

- *Type:* java.lang.String

---

##### `estimatedPatchingTime`<sup>Required</sup> <a name="estimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList getEstimatedPatchingTime();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDstFileUpdateEnabled`<sup>Required</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled"></a>

```java
public IResolvable getIsDstFileUpdateEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maintenanceSubtype`<sup>Required</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceSubtype"></a>

```java
public java.lang.String getMaintenanceSubtype();
```

- *Type:* java.lang.String

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceType"></a>

```java
public java.lang.String getMaintenanceType();
```

- *Type:* java.lang.String

---

##### `patchFailureCount`<sup>Required</sup> <a name="patchFailureCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchFailureCount"></a>

```java
public java.lang.Number getPatchFailureCount();
```

- *Type:* java.lang.Number

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchId"></a>

```java
public java.lang.String getPatchId();
```

- *Type:* java.lang.String

---

##### `patchingEndTime`<sup>Required</sup> <a name="patchingEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingEndTime"></a>

```java
public java.lang.String getPatchingEndTime();
```

- *Type:* java.lang.String

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `patchingStartTime`<sup>Required</sup> <a name="patchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStartTime"></a>

```java
public java.lang.String getPatchingStartTime();
```

- *Type:* java.lang.String

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStatus"></a>

```java
public java.lang.String getPatchingStatus();
```

- *Type:* java.lang.String

---

##### `peerMaintenanceRunId`<sup>Required</sup> <a name="peerMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId"></a>

```java
public java.lang.String getPeerMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetDbServerVersion`<sup>Required</sup> <a name="targetDbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetDbServerVersion"></a>

```java
public java.lang.String getTargetDbServerVersion();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

##### `targetStorageServerVersion`<sup>Required</sup> <a name="targetStorageServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion"></a>

```java
public java.lang.String getTargetStorageServerVersion();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeScheduled"></a>

```java
public java.lang.String getTimeScheduled();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_run_histories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference;

new DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.dbServersHistoryDetails">dbServersHistoryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.maintenanceRunDetails">maintenanceRunDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbServersHistoryDetails`<sup>Required</sup> <a name="dbServersHistoryDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.dbServersHistoryDetails"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList getDbServersHistoryDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceRunDetails`<sup>Required</sup> <a name="maintenanceRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.maintenanceRunDetails"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList getMaintenanceRunDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories</a>

---



