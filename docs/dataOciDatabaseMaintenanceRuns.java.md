# `dataOciDatabaseMaintenanceRuns` Submodule <a name="`dataOciDatabaseMaintenanceRuns` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRuns <a name="DataOciDatabaseMaintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs oci_database_maintenance_runs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRuns;

DataOciDatabaseMaintenanceRuns.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(java.util.List<DataOciDatabaseMaintenanceRunsFilter>)
//  .id(java.lang.String)
//  .maintenanceSubtype(java.lang.String)
//  .maintenanceType(java.lang.String)
//  .state(java.lang.String)
//  .targetResourceId(java.lang.String)
//  .targetResourceType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.maintenanceSubtype">maintenanceSubtype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#filter DataOciDatabaseMaintenanceRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceSubtype`<sup>Optional</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.maintenanceSubtype"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}.

---

##### `maintenanceType`<sup>Optional</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.maintenanceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}.

---

##### `targetResourceId`<sup>Optional</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.targetResourceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}.

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.Initializer.parameter.targetResourceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceSubtype">resetMaintenanceSubtype</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceType">resetMaintenanceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceId">resetTargetResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceType">resetTargetResourceType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseMaintenanceRunsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetId"></a>

```java
public void resetId()
```

##### `resetMaintenanceSubtype` <a name="resetMaintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceSubtype"></a>

```java
public void resetMaintenanceSubtype()
```

##### `resetMaintenanceType` <a name="resetMaintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetMaintenanceType"></a>

```java
public void resetMaintenanceType()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetState"></a>

```java
public void resetState()
```

##### `resetTargetResourceId` <a name="resetTargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceId"></a>

```java
public void resetTargetResourceId()
```

##### `resetTargetResourceType` <a name="resetTargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.resetTargetResourceType"></a>

```java
public void resetTargetResourceType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRuns resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRuns;

DataOciDatabaseMaintenanceRuns.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRuns;

DataOciDatabaseMaintenanceRuns.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRuns;

DataOciDatabaseMaintenanceRuns.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRuns;

DataOciDatabaseMaintenanceRuns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseMaintenanceRuns.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRuns resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseMaintenanceRuns to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseMaintenanceRuns that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRuns to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList">DataOciDatabaseMaintenanceRunsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceRuns">maintenanceRuns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList">DataOciDatabaseMaintenanceRunsMaintenanceRunsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtypeInput">maintenanceSubtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceTypeInput">maintenanceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceIdInput">targetResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceTypeInput">targetResourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtype">maintenanceSubtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filter"></a>

```java
public DataOciDatabaseMaintenanceRunsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList">DataOciDatabaseMaintenanceRunsFilterList</a>

---

##### `maintenanceRuns`<sup>Required</sup> <a name="maintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceRuns"></a>

```java
public DataOciDatabaseMaintenanceRunsMaintenanceRunsList getMaintenanceRuns();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList">DataOciDatabaseMaintenanceRunsMaintenanceRunsList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maintenanceSubtypeInput`<sup>Optional</sup> <a name="maintenanceSubtypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtypeInput"></a>

```java
public java.lang.String getMaintenanceSubtypeInput();
```

- *Type:* java.lang.String

---

##### `maintenanceTypeInput`<sup>Optional</sup> <a name="maintenanceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceTypeInput"></a>

```java
public java.lang.String getMaintenanceTypeInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `targetResourceIdInput`<sup>Optional</sup> <a name="targetResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceIdInput"></a>

```java
public java.lang.String getTargetResourceIdInput();
```

- *Type:* java.lang.String

---

##### `targetResourceTypeInput`<sup>Optional</sup> <a name="targetResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceTypeInput"></a>

```java
public java.lang.String getTargetResourceTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceSubtype`<sup>Required</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceSubtype"></a>

```java
public java.lang.String getMaintenanceSubtype();
```

- *Type:* java.lang.String

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.maintenanceType"></a>

```java
public java.lang.String getMaintenanceType();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRuns.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunsConfig <a name="DataOciDatabaseMaintenanceRunsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsConfig;

DataOciDatabaseMaintenanceRunsConfig.builder()
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
//  .filter(java.util.List<DataOciDatabaseMaintenanceRunsFilter>)
//  .id(java.lang.String)
//  .maintenanceSubtype(java.lang.String)
//  .maintenanceType(java.lang.String)
//  .state(java.lang.String)
//  .targetResourceId(java.lang.String)
//  .targetResourceType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceSubtype">maintenanceSubtype</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#compartment_id DataOciDatabaseMaintenanceRuns#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#availability_domain DataOciDatabaseMaintenanceRuns#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#filter DataOciDatabaseMaintenanceRuns#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#id DataOciDatabaseMaintenanceRuns#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenanceSubtype`<sup>Optional</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceSubtype"></a>

```java
public java.lang.String getMaintenanceSubtype();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_subtype DataOciDatabaseMaintenanceRuns#maintenance_subtype}.

---

##### `maintenanceType`<sup>Optional</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.maintenanceType"></a>

```java
public java.lang.String getMaintenanceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#maintenance_type DataOciDatabaseMaintenanceRuns#maintenance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#state DataOciDatabaseMaintenanceRuns#state}.

---

##### `targetResourceId`<sup>Optional</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_id DataOciDatabaseMaintenanceRuns#target_resource_id}.

---

##### `targetResourceType`<sup>Optional</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsConfig.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#target_resource_type DataOciDatabaseMaintenanceRuns#target_resource_type}.

---

### DataOciDatabaseMaintenanceRunsFilter <a name="DataOciDatabaseMaintenanceRunsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsFilter;

DataOciDatabaseMaintenanceRunsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#name DataOciDatabaseMaintenanceRuns#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#values DataOciDatabaseMaintenanceRuns#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#regex DataOciDatabaseMaintenanceRuns#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#name DataOciDatabaseMaintenanceRuns#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#values DataOciDatabaseMaintenanceRuns#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_runs#regex DataOciDatabaseMaintenanceRuns#regex}.

---

### DataOciDatabaseMaintenanceRunsMaintenanceRuns <a name="DataOciDatabaseMaintenanceRunsMaintenanceRuns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsMaintenanceRuns;

DataOciDatabaseMaintenanceRunsMaintenanceRuns.builder()
    .build();
```


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime;

DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunsFilterList <a name="DataOciDatabaseMaintenanceRunsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsFilterList;

new DataOciDatabaseMaintenanceRunsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get"></a>

```java
public DataOciDatabaseMaintenanceRunsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>>

---


### DataOciDatabaseMaintenanceRunsFilterOutputReference <a name="DataOciDatabaseMaintenanceRunsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsFilterOutputReference;

new DataOciDatabaseMaintenanceRunsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsFilter">DataOciDatabaseMaintenanceRunsFilter</a>

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList;

new DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get"></a>

```java
public DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference;

new DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimatedDbServerPatchingTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimatedNetworkSwitchesPatchingTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimatedStorageServerPatchingTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">totalEstimatedPatchingTime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `estimatedDbServerPatchingTime`<sup>Required</sup> <a name="estimatedDbServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```java
public java.lang.Number getEstimatedDbServerPatchingTime();
```

- *Type:* java.lang.Number

---

##### `estimatedNetworkSwitchesPatchingTime`<sup>Required</sup> <a name="estimatedNetworkSwitchesPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```java
public java.lang.Number getEstimatedNetworkSwitchesPatchingTime();
```

- *Type:* java.lang.Number

---

##### `estimatedStorageServerPatchingTime`<sup>Required</sup> <a name="estimatedStorageServerPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```java
public java.lang.Number getEstimatedStorageServerPatchingTime();
```

- *Type:* java.lang.Number

---

##### `totalEstimatedPatchingTime`<sup>Required</sup> <a name="totalEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```java
public java.lang.Number getTotalEstimatedPatchingTime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTime</a>

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsList <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsMaintenanceRunsList;

new DataOciDatabaseMaintenanceRunsMaintenanceRunsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get"></a>

```java
public DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference <a name="DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_maintenance_runs.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference;

new DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentCustomActionTimeoutInMins">currentCustomActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentPatchingComponent">currentPatchingComponent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.databaseSoftwareImageId">databaseSoftwareImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedComponentPatchingStartTime">estimatedComponentPatchingStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedPatchingTime">estimatedPatchingTime</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isDstFileUpdateEnabled">isDstFileUpdateEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceSubtype">maintenanceSubtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceType">maintenanceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchFailureCount">patchFailureCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchId">patchId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingEndTime">patchingEndTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStartTime">patchingStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStatus">patchingStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchType">patchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.peerMaintenanceRunId">peerMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetDbServerVersion">targetDbServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceId">targetResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceType">targetResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetStorageServerVersion">targetStorageServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeEnded">timeEnded</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeScheduled">timeScheduled</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeStarted">timeStarted</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns">DataOciDatabaseMaintenanceRunsMaintenanceRuns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `currentCustomActionTimeoutInMins`<sup>Required</sup> <a name="currentCustomActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentCustomActionTimeoutInMins"></a>

```java
public java.lang.Number getCurrentCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `currentPatchingComponent`<sup>Required</sup> <a name="currentPatchingComponent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.currentPatchingComponent"></a>

```java
public java.lang.String getCurrentPatchingComponent();
```

- *Type:* java.lang.String

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `databaseSoftwareImageId`<sup>Required</sup> <a name="databaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.databaseSoftwareImageId"></a>

```java
public java.lang.String getDatabaseSoftwareImageId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `estimatedComponentPatchingStartTime`<sup>Required</sup> <a name="estimatedComponentPatchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedComponentPatchingStartTime"></a>

```java
public java.lang.String getEstimatedComponentPatchingStartTime();
```

- *Type:* java.lang.String

---

##### `estimatedPatchingTime`<sup>Required</sup> <a name="estimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.estimatedPatchingTime"></a>

```java
public DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList getEstimatedPatchingTime();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunsMaintenanceRunsEstimatedPatchingTimeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isDstFileUpdateEnabled`<sup>Required</sup> <a name="isDstFileUpdateEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.isDstFileUpdateEnabled"></a>

```java
public IResolvable getIsDstFileUpdateEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maintenanceSubtype`<sup>Required</sup> <a name="maintenanceSubtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceSubtype"></a>

```java
public java.lang.String getMaintenanceSubtype();
```

- *Type:* java.lang.String

---

##### `maintenanceType`<sup>Required</sup> <a name="maintenanceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.maintenanceType"></a>

```java
public java.lang.String getMaintenanceType();
```

- *Type:* java.lang.String

---

##### `patchFailureCount`<sup>Required</sup> <a name="patchFailureCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchFailureCount"></a>

```java
public java.lang.Number getPatchFailureCount();
```

- *Type:* java.lang.Number

---

##### `patchId`<sup>Required</sup> <a name="patchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchId"></a>

```java
public java.lang.String getPatchId();
```

- *Type:* java.lang.String

---

##### `patchingEndTime`<sup>Required</sup> <a name="patchingEndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingEndTime"></a>

```java
public java.lang.String getPatchingEndTime();
```

- *Type:* java.lang.String

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `patchingStartTime`<sup>Required</sup> <a name="patchingStartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStartTime"></a>

```java
public java.lang.String getPatchingStartTime();
```

- *Type:* java.lang.String

---

##### `patchingStatus`<sup>Required</sup> <a name="patchingStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchingStatus"></a>

```java
public java.lang.String getPatchingStatus();
```

- *Type:* java.lang.String

---

##### `patchType`<sup>Required</sup> <a name="patchType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.patchType"></a>

```java
public java.lang.String getPatchType();
```

- *Type:* java.lang.String

---

##### `peerMaintenanceRunId`<sup>Required</sup> <a name="peerMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.peerMaintenanceRunId"></a>

```java
public java.lang.String getPeerMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `targetDbServerVersion`<sup>Required</sup> <a name="targetDbServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetDbServerVersion"></a>

```java
public java.lang.String getTargetDbServerVersion();
```

- *Type:* java.lang.String

---

##### `targetResourceId`<sup>Required</sup> <a name="targetResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceId"></a>

```java
public java.lang.String getTargetResourceId();
```

- *Type:* java.lang.String

---

##### `targetResourceType`<sup>Required</sup> <a name="targetResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetResourceType"></a>

```java
public java.lang.String getTargetResourceType();
```

- *Type:* java.lang.String

---

##### `targetStorageServerVersion`<sup>Required</sup> <a name="targetStorageServerVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.targetStorageServerVersion"></a>

```java
public java.lang.String getTargetStorageServerVersion();
```

- *Type:* java.lang.String

---

##### `timeEnded`<sup>Required</sup> <a name="timeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeEnded"></a>

```java
public java.lang.String getTimeEnded();
```

- *Type:* java.lang.String

---

##### `timeScheduled`<sup>Required</sup> <a name="timeScheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeScheduled"></a>

```java
public java.lang.String getTimeScheduled();
```

- *Type:* java.lang.String

---

##### `timeStarted`<sup>Required</sup> <a name="timeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.timeStarted"></a>

```java
public java.lang.String getTimeStarted();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRunsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseMaintenanceRunsMaintenanceRuns getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRuns.DataOciDatabaseMaintenanceRunsMaintenanceRuns">DataOciDatabaseMaintenanceRunsMaintenanceRuns</a>

---



