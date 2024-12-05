# `dataOciStackMonitoringMaintenanceWindows` Submodule <a name="`dataOciStackMonitoringMaintenanceWindows` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMaintenanceWindows <a name="DataOciStackMonitoringMaintenanceWindows" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows oci_stack_monitoring_maintenance_windows}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindows;

DataOciStackMonitoringMaintenanceWindows.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringMaintenanceWindowsFilter>)
//  .id(java.lang.String)
//  .lifecycleDetails(java.lang.String)
//  .name(java.lang.String)
//  .status(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#compartment_id DataOciStackMonitoringMaintenanceWindows#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#id DataOciStackMonitoringMaintenanceWindows#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#lifecycle_details DataOciStackMonitoringMaintenanceWindows#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#status DataOciStackMonitoringMaintenanceWindows#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#compartment_id DataOciStackMonitoringMaintenanceWindows#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#filter DataOciStackMonitoringMaintenanceWindows#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#id DataOciStackMonitoringMaintenanceWindows#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleDetails`<sup>Optional</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.lifecycleDetails"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#lifecycle_details DataOciStackMonitoringMaintenanceWindows#lifecycle_details}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#status DataOciStackMonitoringMaintenanceWindows#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetLifecycleDetails">resetLifecycleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciStackMonitoringMaintenanceWindowsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetId"></a>

```java
public void resetId()
```

##### `resetLifecycleDetails` <a name="resetLifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetLifecycleDetails"></a>

```java
public void resetLifecycleDetails()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetName"></a>

```java
public void resetName()
```

##### `resetStatus` <a name="resetStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.resetStatus"></a>

```java
public void resetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMaintenanceWindows resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindows;

DataOciStackMonitoringMaintenanceWindows.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindows;

DataOciStackMonitoringMaintenanceWindows.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindows;

DataOciStackMonitoringMaintenanceWindows.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindows;

DataOciStackMonitoringMaintenanceWindows.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciStackMonitoringMaintenanceWindows.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciStackMonitoringMaintenanceWindows resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciStackMonitoringMaintenanceWindows to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciStackMonitoringMaintenanceWindows that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMaintenanceWindows to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList">DataOciStackMonitoringMaintenanceWindowsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.maintenanceWindowCollection">maintenanceWindowCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycleDetailsInput">lifecycleDetailsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.filter"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList">DataOciStackMonitoringMaintenanceWindowsFilterList</a>

---

##### `maintenanceWindowCollection`<sup>Required</sup> <a name="maintenanceWindowCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.maintenanceWindowCollection"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList getMaintenanceWindowCollection();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `lifecycleDetailsInput`<sup>Optional</sup> <a name="lifecycleDetailsInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycleDetailsInput"></a>

```java
public java.lang.String getLifecycleDetailsInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindows.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMaintenanceWindowsConfig <a name="DataOciStackMonitoringMaintenanceWindowsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsConfig;

DataOciStackMonitoringMaintenanceWindowsConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciStackMonitoringMaintenanceWindowsFilter>)
//  .id(java.lang.String)
//  .lifecycleDetails(java.lang.String)
//  .name(java.lang.String)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#compartment_id DataOciStackMonitoringMaintenanceWindows#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#id DataOciStackMonitoringMaintenanceWindows#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#lifecycle_details DataOciStackMonitoringMaintenanceWindows#lifecycle_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#status DataOciStackMonitoringMaintenanceWindows#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#compartment_id DataOciStackMonitoringMaintenanceWindows#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#filter DataOciStackMonitoringMaintenanceWindows#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#id DataOciStackMonitoringMaintenanceWindows#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lifecycleDetails`<sup>Optional</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#lifecycle_details DataOciStackMonitoringMaintenanceWindows#lifecycle_details}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#status DataOciStackMonitoringMaintenanceWindows#status}.

---

### DataOciStackMonitoringMaintenanceWindowsFilter <a name="DataOciStackMonitoringMaintenanceWindowsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsFilter;

DataOciStackMonitoringMaintenanceWindowsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#values DataOciStackMonitoringMaintenanceWindows#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#regex DataOciStackMonitoringMaintenanceWindows#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#name DataOciStackMonitoringMaintenanceWindows#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#values DataOciStackMonitoringMaintenanceWindows#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_maintenance_windows#regex DataOciStackMonitoringMaintenanceWindows#regex}.

---

### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection;

DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection.builder()
    .build();
```


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems;

DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems.builder()
    .build();
```


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule;

DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMaintenanceWindowsFilterList <a name="DataOciStackMonitoringMaintenanceWindowsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsFilterList;

new DataOciStackMonitoringMaintenanceWindowsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.get"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>>

---


### DataOciStackMonitoringMaintenanceWindowsFilterOutputReference <a name="DataOciStackMonitoringMaintenanceWindowsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference;

new DataOciStackMonitoringMaintenanceWindowsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsFilter">DataOciStackMonitoringMaintenanceWindowsFilter</a>

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.get"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.numberOfResources">numberOfResources</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.operationStatus">operationStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.operationType">operationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfResources`<sup>Required</sup> <a name="numberOfResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.numberOfResources"></a>

```java
public java.lang.Number getNumberOfResources();
```

- *Type:* java.lang.Number

---

##### `operationStatus`<sup>Required</sup> <a name="operationStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.operationStatus"></a>

```java
public java.lang.String getOperationStatus();
```

- *Type:* java.lang.String

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.operationType"></a>

```java
public java.lang.String getOperationType();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.schedule"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList getSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItems</a>

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.get"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.maintenanceWindowDuration">maintenanceWindowDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.maintenanceWindowRecurrences">maintenanceWindowRecurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.scheduleType">scheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.timeMaintenanceWindowEnd">timeMaintenanceWindowEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.timeMaintenanceWindowStart">timeMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDuration`<sup>Required</sup> <a name="maintenanceWindowDuration" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.maintenanceWindowDuration"></a>

```java
public java.lang.String getMaintenanceWindowDuration();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowRecurrences`<sup>Required</sup> <a name="maintenanceWindowRecurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.maintenanceWindowRecurrences"></a>

```java
public java.lang.String getMaintenanceWindowRecurrences();
```

- *Type:* java.lang.String

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.scheduleType"></a>

```java
public java.lang.String getScheduleType();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowEnd`<sup>Required</sup> <a name="timeMaintenanceWindowEnd" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.timeMaintenanceWindowEnd"></a>

```java
public java.lang.String getTimeMaintenanceWindowEnd();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowStart`<sup>Required</sup> <a name="timeMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.timeMaintenanceWindowStart"></a>

```java
public java.lang.String getTimeMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsScheduleOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsSchedule</a>

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.get"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference <a name="DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_stack_monitoring_maintenance_windows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference;

new DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.items"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList getItems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionItemsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollectionOutputReference.property.internalValue"></a>

```java
public DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMaintenanceWindows.DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection">DataOciStackMonitoringMaintenanceWindowsMaintenanceWindowCollection</a>

---



