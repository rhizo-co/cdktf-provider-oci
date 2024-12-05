# `stackMonitoringMonitoredResourceTask` Submodule <a name="`stackMonitoringMonitoredResourceTask` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourceTask <a name="StackMonitoringMonitoredResourceTask" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTask;

StackMonitoringMonitoredResourceTask.Builder.create(Construct scope, java.lang.String id)
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
    .taskDetails(StackMonitoringMonitoredResourceTaskTaskDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(StackMonitoringMonitoredResourceTaskTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.taskDetails">taskDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | task_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}.

---

##### `taskDetails`<sup>Required</sup> <a name="taskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.taskDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

task_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#task_details StackMonitoringMonitoredResourceTask#task_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#timeouts StackMonitoringMonitoredResourceTask#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails">putTaskDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetName">resetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTaskDetails` <a name="putTaskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails"></a>

```java
public void putTaskDetails(StackMonitoringMonitoredResourceTaskTaskDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTaskDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts"></a>

```java
public void putTimeouts(StackMonitoringMonitoredResourceTaskTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetName"></a>

```java
public void resetName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTask;

StackMonitoringMonitoredResourceTask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTask;

StackMonitoringMonitoredResourceTask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTask;

StackMonitoringMonitoredResourceTask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTask;

StackMonitoringMonitoredResourceTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StackMonitoringMonitoredResourceTask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StackMonitoringMonitoredResourceTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StackMonitoringMonitoredResourceTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourceTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetails">taskDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference">StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tenantId">tenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference">StackMonitoringMonitoredResourceTaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.workRequestIds">workRequestIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetailsInput">taskDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `taskDetails`<sup>Required</sup> <a name="taskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetails"></a>

```java
public StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference getTaskDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference">StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference</a>

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tenantId"></a>

```java
public java.lang.String getTenantId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeouts"></a>

```java
public StackMonitoringMonitoredResourceTaskTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference">StackMonitoringMonitoredResourceTaskTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `workRequestIds`<sup>Required</sup> <a name="workRequestIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.workRequestIds"></a>

```java
public java.util.List<java.lang.String> getWorkRequestIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `taskDetailsInput`<sup>Optional</sup> <a name="taskDetailsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.taskDetailsInput"></a>

```java
public StackMonitoringMonitoredResourceTaskTaskDetails getTaskDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourceTaskConfig <a name="StackMonitoringMonitoredResourceTaskConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTaskConfig;

StackMonitoringMonitoredResourceTaskConfig.builder()
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
    .taskDetails(StackMonitoringMonitoredResourceTaskTaskDetails)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .timeouts(StackMonitoringMonitoredResourceTaskTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.taskDetails">taskDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | task_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}.

---

##### `taskDetails`<sup>Required</sup> <a name="taskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.taskDetails"></a>

```java
public StackMonitoringMonitoredResourceTaskTaskDetails getTaskDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

task_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#task_details StackMonitoringMonitoredResourceTask#task_details}

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskConfig.property.timeouts"></a>

```java
public StackMonitoringMonitoredResourceTaskTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#timeouts StackMonitoringMonitoredResourceTask#timeouts}

---

### StackMonitoringMonitoredResourceTaskTaskDetails <a name="StackMonitoringMonitoredResourceTaskTaskDetails" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTaskTaskDetails;

StackMonitoringMonitoredResourceTaskTaskDetails.builder()
    .namespace(java.lang.String)
    .source(java.lang.String)
    .type(java.lang.String)
//  .availabilityProxyMetricCollectionInterval(java.lang.Number)
//  .availabilityProxyMetrics(java.util.List<java.lang.String>)
//  .consolePathPrefix(java.lang.String)
//  .externalIdMapping(java.lang.String)
//  .lifecycleStatusMappingsForUpStatus(java.util.List<java.lang.String>)
//  .resourceGroup(java.lang.String)
//  .resourceNameFilter(java.lang.String)
//  .resourceNameMapping(java.lang.String)
//  .resourceTypeFilter(java.lang.String)
//  .resourceTypeMapping(java.lang.String)
//  .serviceBaseUrl(java.lang.String)
//  .shouldUseMetricsFlowForStatus(java.lang.Boolean)
//  .shouldUseMetricsFlowForStatus(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#namespace StackMonitoringMonitoredResourceTask#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.source">source</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#source StackMonitoringMonitoredResourceTask#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#type StackMonitoringMonitoredResourceTask#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetricCollectionInterval">availabilityProxyMetricCollectionInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metric_collection_interval StackMonitoringMonitoredResourceTask#availability_proxy_metric_collection_interval}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetrics">availabilityProxyMetrics</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metrics StackMonitoringMonitoredResourceTask#availability_proxy_metrics}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.consolePathPrefix">consolePathPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#console_path_prefix StackMonitoringMonitoredResourceTask#console_path_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.externalIdMapping">externalIdMapping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#external_id_mapping StackMonitoringMonitoredResourceTask#external_id_mapping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.lifecycleStatusMappingsForUpStatus">lifecycleStatusMappingsForUpStatus</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#lifecycle_status_mappings_for_up_status StackMonitoringMonitoredResourceTask#lifecycle_status_mappings_for_up_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_group StackMonitoringMonitoredResourceTask#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameFilter">resourceNameFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_filter StackMonitoringMonitoredResourceTask#resource_name_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameMapping">resourceNameMapping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_mapping StackMonitoringMonitoredResourceTask#resource_name_mapping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeFilter">resourceTypeFilter</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_filter StackMonitoringMonitoredResourceTask#resource_type_filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeMapping">resourceTypeMapping</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_mapping StackMonitoringMonitoredResourceTask#resource_type_mapping}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.serviceBaseUrl">serviceBaseUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#service_base_url StackMonitoringMonitoredResourceTask#service_base_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.shouldUseMetricsFlowForStatus">shouldUseMetricsFlowForStatus</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#should_use_metrics_flow_for_status StackMonitoringMonitoredResourceTask#should_use_metrics_flow_for_status}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#namespace StackMonitoringMonitoredResourceTask#namespace}.

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#source StackMonitoringMonitoredResourceTask#source}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#type StackMonitoringMonitoredResourceTask#type}.

---

##### `availabilityProxyMetricCollectionInterval`<sup>Optional</sup> <a name="availabilityProxyMetricCollectionInterval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetricCollectionInterval"></a>

```java
public java.lang.Number getAvailabilityProxyMetricCollectionInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metric_collection_interval StackMonitoringMonitoredResourceTask#availability_proxy_metric_collection_interval}.

---

##### `availabilityProxyMetrics`<sup>Optional</sup> <a name="availabilityProxyMetrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.availabilityProxyMetrics"></a>

```java
public java.util.List<java.lang.String> getAvailabilityProxyMetrics();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metrics StackMonitoringMonitoredResourceTask#availability_proxy_metrics}.

---

##### `consolePathPrefix`<sup>Optional</sup> <a name="consolePathPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.consolePathPrefix"></a>

```java
public java.lang.String getConsolePathPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#console_path_prefix StackMonitoringMonitoredResourceTask#console_path_prefix}.

---

##### `externalIdMapping`<sup>Optional</sup> <a name="externalIdMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.externalIdMapping"></a>

```java
public java.lang.String getExternalIdMapping();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#external_id_mapping StackMonitoringMonitoredResourceTask#external_id_mapping}.

---

##### `lifecycleStatusMappingsForUpStatus`<sup>Optional</sup> <a name="lifecycleStatusMappingsForUpStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.lifecycleStatusMappingsForUpStatus"></a>

```java
public java.util.List<java.lang.String> getLifecycleStatusMappingsForUpStatus();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#lifecycle_status_mappings_for_up_status StackMonitoringMonitoredResourceTask#lifecycle_status_mappings_for_up_status}.

---

##### `resourceGroup`<sup>Optional</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_group StackMonitoringMonitoredResourceTask#resource_group}.

---

##### `resourceNameFilter`<sup>Optional</sup> <a name="resourceNameFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameFilter"></a>

```java
public java.lang.String getResourceNameFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_filter StackMonitoringMonitoredResourceTask#resource_name_filter}.

---

##### `resourceNameMapping`<sup>Optional</sup> <a name="resourceNameMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceNameMapping"></a>

```java
public java.lang.String getResourceNameMapping();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_name_mapping StackMonitoringMonitoredResourceTask#resource_name_mapping}.

---

##### `resourceTypeFilter`<sup>Optional</sup> <a name="resourceTypeFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeFilter"></a>

```java
public java.lang.String getResourceTypeFilter();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_filter StackMonitoringMonitoredResourceTask#resource_type_filter}.

---

##### `resourceTypeMapping`<sup>Optional</sup> <a name="resourceTypeMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.resourceTypeMapping"></a>

```java
public java.lang.String getResourceTypeMapping();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#resource_type_mapping StackMonitoringMonitoredResourceTask#resource_type_mapping}.

---

##### `serviceBaseUrl`<sup>Optional</sup> <a name="serviceBaseUrl" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.serviceBaseUrl"></a>

```java
public java.lang.String getServiceBaseUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#service_base_url StackMonitoringMonitoredResourceTask#service_base_url}.

---

##### `shouldUseMetricsFlowForStatus`<sup>Optional</sup> <a name="shouldUseMetricsFlowForStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails.property.shouldUseMetricsFlowForStatus"></a>

```java
public java.lang.Object getShouldUseMetricsFlowForStatus();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#should_use_metrics_flow_for_status StackMonitoringMonitoredResourceTask#should_use_metrics_flow_for_status}.

---

### StackMonitoringMonitoredResourceTaskTimeouts <a name="StackMonitoringMonitoredResourceTaskTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTaskTimeouts;

StackMonitoringMonitoredResourceTaskTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#create StackMonitoringMonitoredResourceTask#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#delete StackMonitoringMonitoredResourceTask#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#update StackMonitoringMonitoredResourceTask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#create StackMonitoringMonitoredResourceTask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#delete StackMonitoringMonitoredResourceTask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resource_task#update StackMonitoringMonitoredResourceTask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference <a name="StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference;

new StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetricCollectionInterval">resetAvailabilityProxyMetricCollectionInterval</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetrics">resetAvailabilityProxyMetrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetConsolePathPrefix">resetConsolePathPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetExternalIdMapping">resetExternalIdMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetLifecycleStatusMappingsForUpStatus">resetLifecycleStatusMappingsForUpStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceGroup">resetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameFilter">resetResourceNameFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameMapping">resetResourceNameMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeFilter">resetResourceTypeFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeMapping">resetResourceTypeMapping</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetServiceBaseUrl">resetServiceBaseUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetShouldUseMetricsFlowForStatus">resetShouldUseMetricsFlowForStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityProxyMetricCollectionInterval` <a name="resetAvailabilityProxyMetricCollectionInterval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetricCollectionInterval"></a>

```java
public void resetAvailabilityProxyMetricCollectionInterval()
```

##### `resetAvailabilityProxyMetrics` <a name="resetAvailabilityProxyMetrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetAvailabilityProxyMetrics"></a>

```java
public void resetAvailabilityProxyMetrics()
```

##### `resetConsolePathPrefix` <a name="resetConsolePathPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetConsolePathPrefix"></a>

```java
public void resetConsolePathPrefix()
```

##### `resetExternalIdMapping` <a name="resetExternalIdMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetExternalIdMapping"></a>

```java
public void resetExternalIdMapping()
```

##### `resetLifecycleStatusMappingsForUpStatus` <a name="resetLifecycleStatusMappingsForUpStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetLifecycleStatusMappingsForUpStatus"></a>

```java
public void resetLifecycleStatusMappingsForUpStatus()
```

##### `resetResourceGroup` <a name="resetResourceGroup" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceGroup"></a>

```java
public void resetResourceGroup()
```

##### `resetResourceNameFilter` <a name="resetResourceNameFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameFilter"></a>

```java
public void resetResourceNameFilter()
```

##### `resetResourceNameMapping` <a name="resetResourceNameMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceNameMapping"></a>

```java
public void resetResourceNameMapping()
```

##### `resetResourceTypeFilter` <a name="resetResourceTypeFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeFilter"></a>

```java
public void resetResourceTypeFilter()
```

##### `resetResourceTypeMapping` <a name="resetResourceTypeMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetResourceTypeMapping"></a>

```java
public void resetResourceTypeMapping()
```

##### `resetServiceBaseUrl` <a name="resetServiceBaseUrl" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetServiceBaseUrl"></a>

```java
public void resetServiceBaseUrl()
```

##### `resetShouldUseMetricsFlowForStatus` <a name="resetShouldUseMetricsFlowForStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.resetShouldUseMetricsFlowForStatus"></a>

```java
public void resetShouldUseMetricsFlowForStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionIntervalInput">availabilityProxyMetricCollectionIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricsInput">availabilityProxyMetricsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefixInput">consolePathPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMappingInput">externalIdMappingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatusInput">lifecycleStatusMappingsForUpStatusInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroupInput">resourceGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilterInput">resourceNameFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMappingInput">resourceNameMappingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilterInput">resourceTypeFilterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMappingInput">resourceTypeMappingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrlInput">serviceBaseUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatusInput">shouldUseMetricsFlowForStatusInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval">availabilityProxyMetricCollectionInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics">availabilityProxyMetrics</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix">consolePathPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping">externalIdMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus">lifecycleStatusMappingsForUpStatus</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup">resourceGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter">resourceNameFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping">resourceNameMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter">resourceTypeFilter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping">resourceTypeMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl">serviceBaseUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus">shouldUseMetricsFlowForStatus</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityProxyMetricCollectionIntervalInput`<sup>Optional</sup> <a name="availabilityProxyMetricCollectionIntervalInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionIntervalInput"></a>

```java
public java.lang.Number getAvailabilityProxyMetricCollectionIntervalInput();
```

- *Type:* java.lang.Number

---

##### `availabilityProxyMetricsInput`<sup>Optional</sup> <a name="availabilityProxyMetricsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricsInput"></a>

```java
public java.util.List<java.lang.String> getAvailabilityProxyMetricsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consolePathPrefixInput`<sup>Optional</sup> <a name="consolePathPrefixInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefixInput"></a>

```java
public java.lang.String getConsolePathPrefixInput();
```

- *Type:* java.lang.String

---

##### `externalIdMappingInput`<sup>Optional</sup> <a name="externalIdMappingInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMappingInput"></a>

```java
public java.lang.String getExternalIdMappingInput();
```

- *Type:* java.lang.String

---

##### `lifecycleStatusMappingsForUpStatusInput`<sup>Optional</sup> <a name="lifecycleStatusMappingsForUpStatusInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatusInput"></a>

```java
public java.util.List<java.lang.String> getLifecycleStatusMappingsForUpStatusInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupInput`<sup>Optional</sup> <a name="resourceGroupInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroupInput"></a>

```java
public java.lang.String getResourceGroupInput();
```

- *Type:* java.lang.String

---

##### `resourceNameFilterInput`<sup>Optional</sup> <a name="resourceNameFilterInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilterInput"></a>

```java
public java.lang.String getResourceNameFilterInput();
```

- *Type:* java.lang.String

---

##### `resourceNameMappingInput`<sup>Optional</sup> <a name="resourceNameMappingInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMappingInput"></a>

```java
public java.lang.String getResourceNameMappingInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeFilterInput`<sup>Optional</sup> <a name="resourceTypeFilterInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilterInput"></a>

```java
public java.lang.String getResourceTypeFilterInput();
```

- *Type:* java.lang.String

---

##### `resourceTypeMappingInput`<sup>Optional</sup> <a name="resourceTypeMappingInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMappingInput"></a>

```java
public java.lang.String getResourceTypeMappingInput();
```

- *Type:* java.lang.String

---

##### `serviceBaseUrlInput`<sup>Optional</sup> <a name="serviceBaseUrlInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrlInput"></a>

```java
public java.lang.String getServiceBaseUrlInput();
```

- *Type:* java.lang.String

---

##### `shouldUseMetricsFlowForStatusInput`<sup>Optional</sup> <a name="shouldUseMetricsFlowForStatusInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatusInput"></a>

```java
public java.lang.Object getShouldUseMetricsFlowForStatusInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `availabilityProxyMetricCollectionInterval`<sup>Required</sup> <a name="availabilityProxyMetricCollectionInterval" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval"></a>

```java
public java.lang.Number getAvailabilityProxyMetricCollectionInterval();
```

- *Type:* java.lang.Number

---

##### `availabilityProxyMetrics`<sup>Required</sup> <a name="availabilityProxyMetrics" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.availabilityProxyMetrics"></a>

```java
public java.util.List<java.lang.String> getAvailabilityProxyMetrics();
```

- *Type:* java.util.List<java.lang.String>

---

##### `consolePathPrefix`<sup>Required</sup> <a name="consolePathPrefix" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.consolePathPrefix"></a>

```java
public java.lang.String getConsolePathPrefix();
```

- *Type:* java.lang.String

---

##### `externalIdMapping`<sup>Required</sup> <a name="externalIdMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.externalIdMapping"></a>

```java
public java.lang.String getExternalIdMapping();
```

- *Type:* java.lang.String

---

##### `lifecycleStatusMappingsForUpStatus`<sup>Required</sup> <a name="lifecycleStatusMappingsForUpStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus"></a>

```java
public java.util.List<java.lang.String> getLifecycleStatusMappingsForUpStatus();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `resourceGroup`<sup>Required</sup> <a name="resourceGroup" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceGroup"></a>

```java
public java.lang.String getResourceGroup();
```

- *Type:* java.lang.String

---

##### `resourceNameFilter`<sup>Required</sup> <a name="resourceNameFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameFilter"></a>

```java
public java.lang.String getResourceNameFilter();
```

- *Type:* java.lang.String

---

##### `resourceNameMapping`<sup>Required</sup> <a name="resourceNameMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceNameMapping"></a>

```java
public java.lang.String getResourceNameMapping();
```

- *Type:* java.lang.String

---

##### `resourceTypeFilter`<sup>Required</sup> <a name="resourceTypeFilter" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeFilter"></a>

```java
public java.lang.String getResourceTypeFilter();
```

- *Type:* java.lang.String

---

##### `resourceTypeMapping`<sup>Required</sup> <a name="resourceTypeMapping" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.resourceTypeMapping"></a>

```java
public java.lang.String getResourceTypeMapping();
```

- *Type:* java.lang.String

---

##### `serviceBaseUrl`<sup>Required</sup> <a name="serviceBaseUrl" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.serviceBaseUrl"></a>

```java
public java.lang.String getServiceBaseUrl();
```

- *Type:* java.lang.String

---

##### `shouldUseMetricsFlowForStatus`<sup>Required</sup> <a name="shouldUseMetricsFlowForStatus" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus"></a>

```java
public java.lang.Object getShouldUseMetricsFlowForStatus();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference.property.internalValue"></a>

```java
public StackMonitoringMonitoredResourceTaskTaskDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTaskDetails">StackMonitoringMonitoredResourceTaskTaskDetails</a>

---


### StackMonitoringMonitoredResourceTaskTimeoutsOutputReference <a name="StackMonitoringMonitoredResourceTaskTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.stack_monitoring_monitored_resource_task.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference;

new StackMonitoringMonitoredResourceTaskTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourceTask.StackMonitoringMonitoredResourceTaskTimeouts">StackMonitoringMonitoredResourceTaskTimeouts</a>

---



