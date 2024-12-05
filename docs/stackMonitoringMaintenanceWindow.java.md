# `stackMonitoringMaintenanceWindow` Submodule <a name="`stackMonitoringMaintenanceWindow` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMaintenanceWindow <a name="StackMonitoringMaintenanceWindow" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window oci_stack_monitoring_maintenance_window}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindow;

StackMonitoringMaintenanceWindow.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .resources(IResolvable)
    .resources(java.util.List<StackMonitoringMaintenanceWindowResources>)
    .schedule(StackMonitoringMaintenanceWindowSchedule)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StackMonitoringMaintenanceWindowTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.resources">resources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>></code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}.

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.resources"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resources StackMonitoringMaintenanceWindow#resources}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.schedule"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule StackMonitoringMaintenanceWindow#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#timeouts StackMonitoringMaintenanceWindow#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putResources">putResources</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResources` <a name="putResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putResources"></a>

```java
public void putResources(IResolvable OR java.util.List<StackMonitoringMaintenanceWindowResources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putResources.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>>

---

##### `putSchedule` <a name="putSchedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule"></a>

```java
public void putSchedule(StackMonitoringMaintenanceWindowSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putSchedule.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts"></a>

```java
public void putTimeouts(StackMonitoringMaintenanceWindowTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMaintenanceWindow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindow;

StackMonitoringMaintenanceWindow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindow;

StackMonitoringMaintenanceWindow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindow;

StackMonitoringMaintenanceWindow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindow;

StackMonitoringMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StackMonitoringMaintenanceWindow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StackMonitoringMaintenanceWindow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StackMonitoringMaintenanceWindow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StackMonitoringMaintenanceWindow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMaintenanceWindow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resources">resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList">StackMonitoringMaintenanceWindowResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesDetails">resourcesDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList">StackMonitoringMaintenanceWindowResourcesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference">StackMonitoringMaintenanceWindowScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference">StackMonitoringMaintenanceWindowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesInput">resourcesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.scheduleInput">scheduleInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resources"></a>

```java
public StackMonitoringMaintenanceWindowResourcesList getResources();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList">StackMonitoringMaintenanceWindowResourcesList</a>

---

##### `resourcesDetails`<sup>Required</sup> <a name="resourcesDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesDetails"></a>

```java
public StackMonitoringMaintenanceWindowResourcesDetailsList getResourcesDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList">StackMonitoringMaintenanceWindowResourcesDetailsList</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.schedule"></a>

```java
public StackMonitoringMaintenanceWindowScheduleOutputReference getSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference">StackMonitoringMaintenanceWindowScheduleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeouts"></a>

```java
public StackMonitoringMaintenanceWindowTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference">StackMonitoringMaintenanceWindowTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.resourcesInput"></a>

```java
public java.lang.Object getResourcesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.scheduleInput"></a>

```java
public StackMonitoringMaintenanceWindowSchedule getScheduleInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMaintenanceWindowConfig <a name="StackMonitoringMaintenanceWindowConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowConfig;

StackMonitoringMaintenanceWindowConfig.builder()
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
    .name(java.lang.String)
    .resources(IResolvable)
    .resources(java.util.List<StackMonitoringMaintenanceWindowResources>)
    .schedule(StackMonitoringMaintenanceWindowSchedule)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(StackMonitoringMaintenanceWindowTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.resources">resources</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>></code> | resources block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#compartment_id StackMonitoringMaintenanceWindow#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#name StackMonitoringMaintenanceWindow#name}.

---

##### `resources`<sup>Required</sup> <a name="resources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.resources"></a>

```java
public java.lang.Object getResources();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resources StackMonitoringMaintenanceWindow#resources}

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.schedule"></a>

```java
public StackMonitoringMaintenanceWindowSchedule getSchedule();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule StackMonitoringMaintenanceWindow#schedule}

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#description StackMonitoringMaintenanceWindow#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#id StackMonitoringMaintenanceWindow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowConfig.property.timeouts"></a>

```java
public StackMonitoringMaintenanceWindowTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#timeouts StackMonitoringMaintenanceWindow#timeouts}

---

### StackMonitoringMaintenanceWindowResources <a name="StackMonitoringMaintenanceWindowResources" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowResources;

StackMonitoringMaintenanceWindowResources.builder()
    .resourceId(java.lang.String)
//  .areMembersIncluded(java.lang.Boolean)
//  .areMembersIncluded(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resource_id StackMonitoringMaintenanceWindow#resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.areMembersIncluded">areMembersIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#are_members_included StackMonitoringMaintenanceWindow#are_members_included}. |

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#resource_id StackMonitoringMaintenanceWindow#resource_id}.

---

##### `areMembersIncluded`<sup>Optional</sup> <a name="areMembersIncluded" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources.property.areMembersIncluded"></a>

```java
public java.lang.Object getAreMembersIncluded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#are_members_included StackMonitoringMaintenanceWindow#are_members_included}.

---

### StackMonitoringMaintenanceWindowResourcesDetails <a name="StackMonitoringMaintenanceWindowResourcesDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowResourcesDetails;

StackMonitoringMaintenanceWindowResourcesDetails.builder()
    .build();
```


### StackMonitoringMaintenanceWindowSchedule <a name="StackMonitoringMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowSchedule;

StackMonitoringMaintenanceWindowSchedule.builder()
    .scheduleType(java.lang.String)
//  .maintenanceWindowDuration(java.lang.String)
//  .maintenanceWindowRecurrences(java.lang.String)
//  .timeMaintenanceWindowEnd(java.lang.String)
//  .timeMaintenanceWindowStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.scheduleType">scheduleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule_type StackMonitoringMaintenanceWindow#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowDuration">maintenanceWindowDuration</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_duration StackMonitoringMaintenanceWindow#maintenance_window_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowRecurrences">maintenanceWindowRecurrences</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_recurrences StackMonitoringMaintenanceWindow#maintenance_window_recurrences}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowEnd">timeMaintenanceWindowEnd</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_end StackMonitoringMaintenanceWindow#time_maintenance_window_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowStart">timeMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_start StackMonitoringMaintenanceWindow#time_maintenance_window_start}. |

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.scheduleType"></a>

```java
public java.lang.String getScheduleType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#schedule_type StackMonitoringMaintenanceWindow#schedule_type}.

---

##### `maintenanceWindowDuration`<sup>Optional</sup> <a name="maintenanceWindowDuration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowDuration"></a>

```java
public java.lang.String getMaintenanceWindowDuration();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_duration StackMonitoringMaintenanceWindow#maintenance_window_duration}.

---

##### `maintenanceWindowRecurrences`<sup>Optional</sup> <a name="maintenanceWindowRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.maintenanceWindowRecurrences"></a>

```java
public java.lang.String getMaintenanceWindowRecurrences();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#maintenance_window_recurrences StackMonitoringMaintenanceWindow#maintenance_window_recurrences}.

---

##### `timeMaintenanceWindowEnd`<sup>Optional</sup> <a name="timeMaintenanceWindowEnd" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowEnd"></a>

```java
public java.lang.String getTimeMaintenanceWindowEnd();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_end StackMonitoringMaintenanceWindow#time_maintenance_window_end}.

---

##### `timeMaintenanceWindowStart`<sup>Optional</sup> <a name="timeMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule.property.timeMaintenanceWindowStart"></a>

```java
public java.lang.String getTimeMaintenanceWindowStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#time_maintenance_window_start StackMonitoringMaintenanceWindow#time_maintenance_window_start}.

---

### StackMonitoringMaintenanceWindowTimeouts <a name="StackMonitoringMaintenanceWindowTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowTimeouts;

StackMonitoringMaintenanceWindowTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#create StackMonitoringMaintenanceWindow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#delete StackMonitoringMaintenanceWindow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#update StackMonitoringMaintenanceWindow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#create StackMonitoringMaintenanceWindow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#delete StackMonitoringMaintenanceWindow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_maintenance_window#update StackMonitoringMaintenanceWindow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMaintenanceWindowResourcesDetailsList <a name="StackMonitoringMaintenanceWindowResourcesDetailsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowResourcesDetailsList;

new StackMonitoringMaintenanceWindowResourcesDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.get"></a>

```java
public StackMonitoringMaintenanceWindowResourcesDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### StackMonitoringMaintenanceWindowResourcesDetailsOutputReference <a name="StackMonitoringMaintenanceWindowResourcesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference;

new StackMonitoringMaintenanceWindowResourcesDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.numberOfMembers">numberOfMembers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails">StackMonitoringMaintenanceWindowResourcesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `numberOfMembers`<sup>Required</sup> <a name="numberOfMembers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.numberOfMembers"></a>

```java
public java.lang.Number getNumberOfMembers();
```

- *Type:* java.lang.Number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetailsOutputReference.property.internalValue"></a>

```java
public StackMonitoringMaintenanceWindowResourcesDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesDetails">StackMonitoringMaintenanceWindowResourcesDetails</a>

---


### StackMonitoringMaintenanceWindowResourcesList <a name="StackMonitoringMaintenanceWindowResourcesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowResourcesList;

new StackMonitoringMaintenanceWindowResourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.get"></a>

```java
public StackMonitoringMaintenanceWindowResourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>>

---


### StackMonitoringMaintenanceWindowResourcesOutputReference <a name="StackMonitoringMaintenanceWindowResourcesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowResourcesOutputReference;

new StackMonitoringMaintenanceWindowResourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resetAreMembersIncluded">resetAreMembersIncluded</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAreMembersIncluded` <a name="resetAreMembersIncluded" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.resetAreMembersIncluded"></a>

```java
public void resetAreMembersIncluded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncludedInput">areMembersIncludedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncluded">areMembersIncluded</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceId">resourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `areMembersIncludedInput`<sup>Optional</sup> <a name="areMembersIncludedInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncludedInput"></a>

```java
public java.lang.Object getAreMembersIncludedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceIdInput"></a>

```java
public java.lang.String getResourceIdInput();
```

- *Type:* java.lang.String

---

##### `areMembersIncluded`<sup>Required</sup> <a name="areMembersIncluded" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.areMembersIncluded"></a>

```java
public java.lang.Object getAreMembersIncluded();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.resourceId"></a>

```java
public java.lang.String getResourceId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResourcesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowResources">StackMonitoringMaintenanceWindowResources</a>

---


### StackMonitoringMaintenanceWindowScheduleOutputReference <a name="StackMonitoringMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowScheduleOutputReference;

new StackMonitoringMaintenanceWindowScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowDuration">resetMaintenanceWindowDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowRecurrences">resetMaintenanceWindowRecurrences</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowEnd">resetTimeMaintenanceWindowEnd</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowStart">resetTimeMaintenanceWindowStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaintenanceWindowDuration` <a name="resetMaintenanceWindowDuration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowDuration"></a>

```java
public void resetMaintenanceWindowDuration()
```

##### `resetMaintenanceWindowRecurrences` <a name="resetMaintenanceWindowRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetMaintenanceWindowRecurrences"></a>

```java
public void resetMaintenanceWindowRecurrences()
```

##### `resetTimeMaintenanceWindowEnd` <a name="resetTimeMaintenanceWindowEnd" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowEnd"></a>

```java
public void resetTimeMaintenanceWindowEnd()
```

##### `resetTimeMaintenanceWindowStart` <a name="resetTimeMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.resetTimeMaintenanceWindowStart"></a>

```java
public void resetTimeMaintenanceWindowStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDurationInput">maintenanceWindowDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrencesInput">maintenanceWindowRecurrencesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleTypeInput">scheduleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEndInput">timeMaintenanceWindowEndInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStartInput">timeMaintenanceWindowStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDuration">maintenanceWindowDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrences">maintenanceWindowRecurrences</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleType">scheduleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEnd">timeMaintenanceWindowEnd</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStart">timeMaintenanceWindowStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDurationInput`<sup>Optional</sup> <a name="maintenanceWindowDurationInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDurationInput"></a>

```java
public java.lang.String getMaintenanceWindowDurationInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowRecurrencesInput`<sup>Optional</sup> <a name="maintenanceWindowRecurrencesInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrencesInput"></a>

```java
public java.lang.String getMaintenanceWindowRecurrencesInput();
```

- *Type:* java.lang.String

---

##### `scheduleTypeInput`<sup>Optional</sup> <a name="scheduleTypeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleTypeInput"></a>

```java
public java.lang.String getScheduleTypeInput();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowEndInput`<sup>Optional</sup> <a name="timeMaintenanceWindowEndInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEndInput"></a>

```java
public java.lang.String getTimeMaintenanceWindowEndInput();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowStartInput`<sup>Optional</sup> <a name="timeMaintenanceWindowStartInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStartInput"></a>

```java
public java.lang.String getTimeMaintenanceWindowStartInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowDuration`<sup>Required</sup> <a name="maintenanceWindowDuration" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowDuration"></a>

```java
public java.lang.String getMaintenanceWindowDuration();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowRecurrences`<sup>Required</sup> <a name="maintenanceWindowRecurrences" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.maintenanceWindowRecurrences"></a>

```java
public java.lang.String getMaintenanceWindowRecurrences();
```

- *Type:* java.lang.String

---

##### `scheduleType`<sup>Required</sup> <a name="scheduleType" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.scheduleType"></a>

```java
public java.lang.String getScheduleType();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowEnd`<sup>Required</sup> <a name="timeMaintenanceWindowEnd" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowEnd"></a>

```java
public java.lang.String getTimeMaintenanceWindowEnd();
```

- *Type:* java.lang.String

---

##### `timeMaintenanceWindowStart`<sup>Required</sup> <a name="timeMaintenanceWindowStart" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.timeMaintenanceWindowStart"></a>

```java
public java.lang.String getTimeMaintenanceWindowStart();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```java
public StackMonitoringMaintenanceWindowSchedule getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowSchedule">StackMonitoringMaintenanceWindowSchedule</a>

---


### StackMonitoringMaintenanceWindowTimeoutsOutputReference <a name="StackMonitoringMaintenanceWindowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_maintenance_window.StackMonitoringMaintenanceWindowTimeoutsOutputReference;

new StackMonitoringMaintenanceWindowTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMaintenanceWindow.StackMonitoringMaintenanceWindowTimeouts">StackMonitoringMaintenanceWindowTimeouts</a>

---



