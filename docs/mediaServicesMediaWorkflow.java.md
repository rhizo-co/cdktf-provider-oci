# `mediaServicesMediaWorkflow` Submodule <a name="`mediaServicesMediaWorkflow` Submodule" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaServicesMediaWorkflow <a name="MediaServicesMediaWorkflow" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow oci_media_services_media_workflow}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflow;

MediaServicesMediaWorkflow.Builder.create(Construct scope, java.lang.String id)
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
    .displayName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<MediaServicesMediaWorkflowLocks>)
//  .mediaWorkflowConfigurationIds(java.util.List<java.lang.String>)
//  .parameters(java.lang.String)
//  .tasks(IResolvable)
//  .tasks(java.util.List<MediaServicesMediaWorkflowTasks>)
//  .timeouts(MediaServicesMediaWorkflowTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.mediaWorkflowConfigurationIds">mediaWorkflowConfigurationIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.tasks">tasks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>></code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.isLockOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#locks MediaServicesMediaWorkflow#locks}

---

##### `mediaWorkflowConfigurationIds`<sup>Optional</sup> <a name="mediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.mediaWorkflowConfigurationIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.parameters"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.tasks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#tasks MediaServicesMediaWorkflow#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#timeouts MediaServicesMediaWorkflow#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks">putTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetMediaWorkflowConfigurationIds">resetMediaWorkflowConfigurationIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTasks">resetTasks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<MediaServicesMediaWorkflowLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>>

---

##### `putTasks` <a name="putTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks"></a>

```java
public void putTasks(IResolvable OR java.util.List<MediaServicesMediaWorkflowTasks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTasks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts"></a>

```java
public void putTimeouts(MediaServicesMediaWorkflowTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetId"></a>

```java
public void resetId()
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetIsLockOverride"></a>

```java
public void resetIsLockOverride()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetMediaWorkflowConfigurationIds` <a name="resetMediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetMediaWorkflowConfigurationIds"></a>

```java
public void resetMediaWorkflowConfigurationIds()
```

##### `resetParameters` <a name="resetParameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetParameters"></a>

```java
public void resetParameters()
```

##### `resetTasks` <a name="resetTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTasks"></a>

```java
public void resetTasks()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MediaServicesMediaWorkflow resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflow;

MediaServicesMediaWorkflow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflow;

MediaServicesMediaWorkflow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflow;

MediaServicesMediaWorkflow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflow;

MediaServicesMediaWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MediaServicesMediaWorkflow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a MediaServicesMediaWorkflow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MediaServicesMediaWorkflow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MediaServicesMediaWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the MediaServicesMediaWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecyleDetails">lifecyleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList">MediaServicesMediaWorkflowLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasks">tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList">MediaServicesMediaWorkflowTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference">MediaServicesMediaWorkflowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIdsInput">mediaWorkflowConfigurationIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasksInput">tasksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIds">mediaWorkflowConfigurationIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `lifecyleDetails`<sup>Required</sup> <a name="lifecyleDetails" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.lifecyleDetails"></a>

```java
public java.lang.String getLifecyleDetails();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locks"></a>

```java
public MediaServicesMediaWorkflowLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList">MediaServicesMediaWorkflowLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasks"></a>

```java
public MediaServicesMediaWorkflowTasksList getTasks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList">MediaServicesMediaWorkflowTasksList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeouts"></a>

```java
public MediaServicesMediaWorkflowTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference">MediaServicesMediaWorkflowTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverrideInput"></a>

```java
public java.lang.Object getIsLockOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>>

---

##### `mediaWorkflowConfigurationIdsInput`<sup>Optional</sup> <a name="mediaWorkflowConfigurationIdsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIdsInput"></a>

```java
public java.util.List<java.lang.String> getMediaWorkflowConfigurationIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `tasksInput`<sup>Optional</sup> <a name="tasksInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tasksInput"></a>

```java
public java.lang.Object getTasksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `mediaWorkflowConfigurationIds`<sup>Required</sup> <a name="mediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.mediaWorkflowConfigurationIds"></a>

```java
public java.util.List<java.lang.String> getMediaWorkflowConfigurationIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MediaServicesMediaWorkflowConfig <a name="MediaServicesMediaWorkflowConfig" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflowConfig;

MediaServicesMediaWorkflowConfig.builder()
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
    .displayName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<MediaServicesMediaWorkflowLocks>)
//  .mediaWorkflowConfigurationIds(java.util.List<java.lang.String>)
//  .parameters(java.lang.String)
//  .tasks(IResolvable)
//  .tasks(java.util.List<MediaServicesMediaWorkflowTasks>)
//  .timeouts(MediaServicesMediaWorkflowTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.mediaWorkflowConfigurationIds">mediaWorkflowConfigurationIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.tasks">tasks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>></code> | tasks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#display_name MediaServicesMediaWorkflow#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#defined_tags MediaServicesMediaWorkflow#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#freeform_tags MediaServicesMediaWorkflow#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#id MediaServicesMediaWorkflow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#is_lock_override MediaServicesMediaWorkflow#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#locks MediaServicesMediaWorkflow#locks}

---

##### `mediaWorkflowConfigurationIds`<sup>Optional</sup> <a name="mediaWorkflowConfigurationIds" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.mediaWorkflowConfigurationIds"></a>

```java
public java.util.List<java.lang.String> getMediaWorkflowConfigurationIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#media_workflow_configuration_ids MediaServicesMediaWorkflow#media_workflow_configuration_ids}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `tasks`<sup>Optional</sup> <a name="tasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.tasks"></a>

```java
public java.lang.Object getTasks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>>

tasks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#tasks MediaServicesMediaWorkflow#tasks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowConfig.property.timeouts"></a>

```java
public MediaServicesMediaWorkflowTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#timeouts MediaServicesMediaWorkflow#timeouts}

---

### MediaServicesMediaWorkflowLocks <a name="MediaServicesMediaWorkflowLocks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflowLocks;

MediaServicesMediaWorkflowLocks.builder()
    .compartmentId(java.lang.String)
    .type(java.lang.String)
//  .message(java.lang.String)
//  .relatedResourceId(java.lang.String)
//  .timeCreated(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#message MediaServicesMediaWorkflow#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#related_resource_id MediaServicesMediaWorkflow#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#time_created MediaServicesMediaWorkflow#time_created}. |

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#compartment_id MediaServicesMediaWorkflow#compartment_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#message MediaServicesMediaWorkflow#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#related_resource_id MediaServicesMediaWorkflow#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#time_created MediaServicesMediaWorkflow#time_created}.

---

### MediaServicesMediaWorkflowTasks <a name="MediaServicesMediaWorkflowTasks" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflowTasks;

MediaServicesMediaWorkflowTasks.builder()
    .key(java.lang.String)
    .parameters(java.lang.String)
    .type(java.lang.String)
    .version(java.lang.String)
//  .enableParameterReference(java.lang.String)
//  .enableWhenReferencedParameterEquals(java.util.Map<java.lang.String, java.lang.String>)
//  .prerequisites(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#key MediaServicesMediaWorkflow#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.parameters">parameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#version MediaServicesMediaWorkflow#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableParameterReference">enableParameterReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_parameter_reference MediaServicesMediaWorkflow#enable_parameter_reference}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableWhenReferencedParameterEquals">enableWhenReferencedParameterEquals</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_when_referenced_parameter_equals MediaServicesMediaWorkflow#enable_when_referenced_parameter_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.prerequisites">prerequisites</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#prerequisites MediaServicesMediaWorkflow#prerequisites}. |

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#key MediaServicesMediaWorkflow#key}.

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#parameters MediaServicesMediaWorkflow#parameters}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#type MediaServicesMediaWorkflow#type}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#version MediaServicesMediaWorkflow#version}.

---

##### `enableParameterReference`<sup>Optional</sup> <a name="enableParameterReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableParameterReference"></a>

```java
public java.lang.String getEnableParameterReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_parameter_reference MediaServicesMediaWorkflow#enable_parameter_reference}.

---

##### `enableWhenReferencedParameterEquals`<sup>Optional</sup> <a name="enableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.enableWhenReferencedParameterEquals"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnableWhenReferencedParameterEquals();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#enable_when_referenced_parameter_equals MediaServicesMediaWorkflow#enable_when_referenced_parameter_equals}.

---

##### `prerequisites`<sup>Optional</sup> <a name="prerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks.property.prerequisites"></a>

```java
public java.util.List<java.lang.String> getPrerequisites();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#prerequisites MediaServicesMediaWorkflow#prerequisites}.

---

### MediaServicesMediaWorkflowTimeouts <a name="MediaServicesMediaWorkflowTimeouts" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflowTimeouts;

MediaServicesMediaWorkflowTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#create MediaServicesMediaWorkflow#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#delete MediaServicesMediaWorkflow#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#update MediaServicesMediaWorkflow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#create MediaServicesMediaWorkflow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#delete MediaServicesMediaWorkflow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/media_services_media_workflow#update MediaServicesMediaWorkflow#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaServicesMediaWorkflowLocksList <a name="MediaServicesMediaWorkflowLocksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflowLocksList;

new MediaServicesMediaWorkflowLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get"></a>

```java
public MediaServicesMediaWorkflowLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>>

---


### MediaServicesMediaWorkflowLocksOutputReference <a name="MediaServicesMediaWorkflowLocksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflowLocksOutputReference;

new MediaServicesMediaWorkflowLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetRelatedResourceId"></a>

```java
public void resetRelatedResourceId()
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.resetTimeCreated"></a>

```java
public void resetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceIdInput"></a>

```java
public java.lang.String getRelatedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreatedInput"></a>

```java
public java.lang.String getTimeCreatedInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowLocks">MediaServicesMediaWorkflowLocks</a>

---


### MediaServicesMediaWorkflowTasksList <a name="MediaServicesMediaWorkflowTasksList" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflowTasksList;

new MediaServicesMediaWorkflowTasksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get"></a>

```java
public MediaServicesMediaWorkflowTasksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>>

---


### MediaServicesMediaWorkflowTasksOutputReference <a name="MediaServicesMediaWorkflowTasksOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflowTasksOutputReference;

new MediaServicesMediaWorkflowTasksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableParameterReference">resetEnableParameterReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableWhenReferencedParameterEquals">resetEnableWhenReferencedParameterEquals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetPrerequisites">resetPrerequisites</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableParameterReference` <a name="resetEnableParameterReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableParameterReference"></a>

```java
public void resetEnableParameterReference()
```

##### `resetEnableWhenReferencedParameterEquals` <a name="resetEnableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetEnableWhenReferencedParameterEquals"></a>

```java
public void resetEnableWhenReferencedParameterEquals()
```

##### `resetPrerequisites` <a name="resetPrerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.resetPrerequisites"></a>

```java
public void resetPrerequisites()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReferenceInput">enableParameterReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEqualsInput">enableWhenReferencedParameterEqualsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parametersInput">parametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisitesInput">prerequisitesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReference">enableParameterReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEquals">enableWhenReferencedParameterEquals</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parameters">parameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisites">prerequisites</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableParameterReferenceInput`<sup>Optional</sup> <a name="enableParameterReferenceInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReferenceInput"></a>

```java
public java.lang.String getEnableParameterReferenceInput();
```

- *Type:* java.lang.String

---

##### `enableWhenReferencedParameterEqualsInput`<sup>Optional</sup> <a name="enableWhenReferencedParameterEqualsInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEqualsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnableWhenReferencedParameterEqualsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parametersInput"></a>

```java
public java.lang.String getParametersInput();
```

- *Type:* java.lang.String

---

##### `prerequisitesInput`<sup>Optional</sup> <a name="prerequisitesInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisitesInput"></a>

```java
public java.util.List<java.lang.String> getPrerequisitesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `enableParameterReference`<sup>Required</sup> <a name="enableParameterReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableParameterReference"></a>

```java
public java.lang.String getEnableParameterReference();
```

- *Type:* java.lang.String

---

##### `enableWhenReferencedParameterEquals`<sup>Required</sup> <a name="enableWhenReferencedParameterEquals" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.enableWhenReferencedParameterEquals"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getEnableWhenReferencedParameterEquals();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.parameters"></a>

```java
public java.lang.String getParameters();
```

- *Type:* java.lang.String

---

##### `prerequisites`<sup>Required</sup> <a name="prerequisites" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.prerequisites"></a>

```java
public java.util.List<java.lang.String> getPrerequisites();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTasks">MediaServicesMediaWorkflowTasks</a>

---


### MediaServicesMediaWorkflowTimeoutsOutputReference <a name="MediaServicesMediaWorkflowTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.media_services_media_workflow.MediaServicesMediaWorkflowTimeoutsOutputReference;

new MediaServicesMediaWorkflowTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.mediaServicesMediaWorkflow.MediaServicesMediaWorkflowTimeouts">MediaServicesMediaWorkflowTimeouts</a>

---



